const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

function xmlUnescape(s) {
  return s
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'");
}

function getSlidePaths(pptx) {
  const out = execSync(`unzip -Z1 ${JSON.stringify(pptx)} | rg '^ppt/slides/slide[0-9]+\\.xml$'`, {
    encoding: 'utf8',
    shell: '/bin/zsh',
  });
  return out
    .split('\n')
    .map((s) => s.trim())
    .filter(Boolean)
    .sort((a, b) => {
      const na = Number((a.match(/slide(\d+)\.xml$/) || [])[1] || 0);
      const nb = Number((b.match(/slide(\d+)\.xml$/) || [])[1] || 0);
      return na - nb;
    });
}

function extractSlideTexts(pptx, slidePath) {
  const xml = execSync(`unzip -p ${JSON.stringify(pptx)} ${JSON.stringify(slidePath)}`, {
    encoding: 'utf8',
    shell: '/bin/zsh',
    maxBuffer: 20 * 1024 * 1024,
  });
  const matches = [...xml.matchAll(/<a:t>([\s\S]*?)<\/a:t>/g)]
    .map((m) => xmlUnescape(m[1]).replace(/\s+/g, ' ').trim())
    .filter(Boolean);

  const dedup = [];
  for (const t of matches) {
    if (dedup[dedup.length - 1] !== t) dedup.push(t);
  }
  return dedup;
}

function escapeHtml(text) {
  return String(text)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

function buildFile(varName, pptxPath) {
  const slidePaths = getSlidePaths(pptxPath);
  let out = "import { SlideType } from './types';\n\n";
  out += `export const ${varName}: SlideType[] = [\n`;

  slidePaths.forEach((sp, idx) => {
    const texts = extractSlideTexts(pptxPath, sp);
    const title = texts[0] || `Slide ${idx + 1}`;
    const subtitle = texts[1] || '';
    const bullets = texts.slice(2, 10);

    out += '  {\n';
    out += `    title: ${JSON.stringify(title)},\n`;
    out += `    subtitle: ${JSON.stringify(subtitle)},\n`;
    out += '    content: (\n';
    out += '      <div className="flex flex-col space-y-4 max-w-5xl mx-auto px-4 md:px-0">\n';
    out += '        <div className="bg-blue-50 p-5 rounded-lg border border-blue-200">\n';
    out += `          <p className="text-xs text-blue-700 mb-2">Slide ${idx + 1}</p>\n`;
    out += `          <h3 className="text-xl md:text-2xl font-bold text-blue-900">${escapeHtml(title)}</h3>\n`;
    out += '        </div>\n';
    out += '        <div className="bg-white p-5 rounded-lg shadow border border-blue-200">\n';

    if (bullets.length) {
      out += '          <ul className="space-y-2 text-gray-700">\n';
      for (const b of bullets) {
        out += `            <li>- ${escapeHtml(b)}</li>\n`;
      }
      out += '          </ul>\n';
    } else {
      out += '          <p className="text-gray-700">No additional text extracted from this slide.</p>\n';
    }

    out += '        </div>\n';
    out += '      </div>\n';
    out += '    )\n';
    out += '  },\n';
  });

  out += '];\n';
  return { out, count: slidePaths.length };
}

const deck1Path = path.resolve('IPv6 Today-NetAcad-1 - Copy.pptx');
const deck2Path = path.resolve('IPv6 Today-NetAcad-2.pptx');

const part1 = buildFile('netacadPart1Slides', deck1Path);
const part2 = buildFile('netacadPart2Slides', deck2Path);

fs.writeFileSync(path.resolve('src/sections/netacad-part1.tsx'), part1.out, 'utf8');
fs.writeFileSync(path.resolve('src/sections/netacad-part2.tsx'), part2.out, 'utf8');

console.log(`Generated src/sections/netacad-part1.tsx (${part1.count} slides)`);
console.log(`Generated src/sections/netacad-part2.tsx (${part2.count} slides)`);
