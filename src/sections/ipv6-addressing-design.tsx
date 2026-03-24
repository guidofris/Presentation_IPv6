import { Ruler, Calculator, MapPin, Layers } from 'lucide-react';
import { SlideType } from './types';

export const ipv6AddressingDesignSlides: SlideType[] = [
  // ─── Title slide ──────────────────────────────────────────────────────────
  {
    title: '',
    subtitle: '',
    content: (
      <div className="flex flex-col items-center justify-center h-full space-y-6 px-4">
        <Ruler className="w-20 h-20 text-green-500" />
        <h1 className="text-5xl md:text-6xl font-bold text-green-900 text-center">IPv6 Address Design</h1>
        <p className="text-xl md:text-2xl text-gray-600 text-center max-w-2xl">
          Practical planning rules that keep IPv6 simple, scalable, and supportable.
        </p>
        <div className="flex space-x-2 mt-4">
          <div className="w-3 h-3 bg-green-300 rounded-full"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          <div className="w-3 h-3 bg-green-300 rounded-full"></div>
        </div>
      </div>
    ),
  },

  // ─── A Shift in Thinking ──────────────────────────────────────────────────
  {
    title: 'A Shift in Thinking',
    subtitle: 'IPv6 changes how you should plan your address space',
    content: (
      <div className="flex flex-col space-y-3 max-w-3xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-400 text-center">
            <h3 className="text-sm font-bold text-red-800 mb-2">IPv4 thinking</h3>
            <Layers className="w-8 h-8 text-red-500 mx-auto mb-2" />
            <p className="text-sm text-red-900 font-semibold">Addresses</p>
            <p className="text-xs text-gray-600 mt-1">How many hosts per subnet? Count carefully — addresses are scarce.</p>
          </div>
          <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500 text-center">
            <h3 className="text-sm font-bold text-green-800 mb-2">IPv6 thinking</h3>
            <MapPin className="w-8 h-8 text-green-500 mx-auto mb-2" />
            <p className="text-sm text-green-900 font-semibold">Subnets</p>
            <p className="text-xs text-gray-600 mt-1">How many /64 subnets do I need? Addresses are unlimited — count prefixes instead.</p>
          </div>
        </div>
        <div className="bg-blue-50 p-3 rounded-lg border-l-4 border-blue-400">
          <p className="text-xs text-blue-900">
            <strong>Key insight:</strong> In IPv6, every subnet is a /64. You always have 18 quintillion addresses per subnet. Your job is to design the subnet hierarchy, not to minimize per-subnet host counts.
          </p>
        </div>
      </div>
    ),
  },

  // ─── IPv4 vs IPv6 Comparison ──────────────────────────────────────────────
  {
    title: 'How Do IPv4 and IPv6 Compare?',
    subtitle: 'The scale difference changes everything about network design',
    content: (
      <div className="flex flex-col space-y-2 max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-[1.2fr_0.8fr] gap-3 items-start">
          <div className="bg-gradient-to-br from-slate-50 via-sky-50 to-rose-50 p-3 rounded-lg border border-slate-200 shadow-sm">
            <svg viewBox="0 0 760 320" className="w-full h-40 md:h-44" role="img" aria-label="Professional cartoon showing a giant IPv6 figure looking down at an angry IPv4 dwarf">
              <defs>
                <linearGradient id="ipv6Body" x1="0" x2="0" y1="0" y2="1">
                  <stop offset="0%" stopColor="#60a5fa" />
                  <stop offset="100%" stopColor="#2563eb" />
                </linearGradient>
                <linearGradient id="ipv4Body" x1="0" x2="0" y1="0" y2="1">
                  <stop offset="0%" stopColor="#fb7185" />
                  <stop offset="100%" stopColor="#dc2626" />
                </linearGradient>
              </defs>

              <rect x="0" y="0" width="760" height="320" rx="20" fill="#f8fafc" />
              <ellipse cx="385" cy="286" rx="270" ry="20" fill="#d9e3ea" />

              <g transform="translate(420 36)">
                <ellipse cx="92" cy="42" rx="34" ry="36" fill="#dbeafe" stroke="#1d4ed8" strokeWidth="4" />
                <path d="M62 96 C68 74, 118 74, 124 96 L135 176 C136 190, 126 202, 112 202 L74 202 C60 202, 50 190, 51 176 Z" fill="url(#ipv6Body)" stroke="#1d4ed8" strokeWidth="4" />
                <path d="M63 108 C42 120, 30 132, 18 154" fill="none" stroke="#1d4ed8" strokeWidth="11" strokeLinecap="round" />
                <path d="M121 108 C147 102, 168 102, 188 112" fill="none" stroke="#1d4ed8" strokeWidth="11" strokeLinecap="round" />
                <path d="M80 202 C70 228, 60 250, 58 276" fill="none" stroke="#1d4ed8" strokeWidth="12" strokeLinecap="round" />
                <path d="M106 202 C118 226, 129 248, 135 276" fill="none" stroke="#1d4ed8" strokeWidth="12" strokeLinecap="round" />
                <circle cx="80" cy="40" r="4" fill="#0f172a" />
                <circle cx="104" cy="40" r="4" fill="#0f172a" />
                <path d="M80 61 Q92 70 104 61" fill="none" stroke="#0f172a" strokeWidth="4" strokeLinecap="round" />
                <path d="M59 26 Q92 4 125 26" fill="none" stroke="#1e3a8a" strokeWidth="4" strokeLinecap="round" />
              </g>

              <g transform="translate(132 170)">
                <ellipse cx="52" cy="26" rx="22" ry="23" fill="#fecdd3" stroke="#b91c1c" strokeWidth="4" />
                <path d="M34 59 C38 45, 66 45, 70 59 L77 104 C78 114, 72 122, 63 122 L41 122 C32 122, 26 114, 27 104 Z" fill="url(#ipv4Body)" stroke="#b91c1c" strokeWidth="4" />
                <path d="M35 68 C20 74, 12 79, 0 86" fill="none" stroke="#b91c1c" strokeWidth="8" strokeLinecap="round" />
                <path d="M69 68 C83 70, 95 75, 106 84" fill="none" stroke="#b91c1c" strokeWidth="8" strokeLinecap="round" />
                <path d="M43 122 C38 139, 34 152, 34 168" fill="none" stroke="#b91c1c" strokeWidth="8" strokeLinecap="round" />
                <path d="M61 122 C65 139, 70 152, 74 168" fill="none" stroke="#b91c1c" strokeWidth="8" strokeLinecap="round" />
                <circle cx="45" cy="25" r="3" fill="#0f172a" />
                <circle cx="60" cy="25" r="3" fill="#0f172a" />
                <path d="M40 40 Q52 30 64 40" fill="none" stroke="#0f172a" strokeWidth="3" strokeLinecap="round" />
                <path d="M31 14 L41 10" stroke="#0f172a" strokeWidth="3" strokeLinecap="round" />
                <path d="M63 10 L73 14" stroke="#0f172a" strokeWidth="3" strokeLinecap="round" />
              </g>

              <path d="M438 122 C390 142, 326 156, 248 186" fill="none" stroke="#64748b" strokeWidth="4" strokeDasharray="8 8" />
              <text x="340" y="120" textAnchor="middle" fontSize="16" fontWeight="700" fill="#475569">vastly larger address space</text>

              <g>
                <rect x="466" y="244" width="92" height="30" rx="15" fill="#dbeafe" stroke="#93c5fd" />
                <text x="512" y="264" textAnchor="middle" fontSize="18" fontWeight="700" fill="#1d4ed8">IPv6</text>
                <rect x="135" y="244" width="82" height="28" rx="14" fill="#fee2e2" stroke="#fca5a5" />
                <text x="176" y="263" textAnchor="middle" fontSize="17" fontWeight="700" fill="#b91c1c">IPv4</text>
              </g>
            </svg>
          </div>

          <div className="space-y-2">
            <div className="grid grid-cols-2 gap-2">
              <div className="bg-red-50 border border-red-200 rounded-lg p-2 text-center">
                <div className="text-lg font-bold text-red-700">32-bit</div>
                <div className="text-[11px] text-red-900">~4.3 billion addresses</div>
              </div>
              <div className="bg-green-50 border border-green-200 rounded-lg p-2 text-center">
                <div className="text-lg font-bold text-green-700">128-bit</div>
                <div className="text-[11px] text-green-900">340 undecillion addresses</div>
              </div>
            </div>
            <div className="bg-white p-3 rounded-lg shadow border border-red-200">
              <h4 className="text-sm font-bold text-red-800 mb-1">IPv4</h4>
              <ul className="space-y-0.5 text-xs text-gray-700">
                <li>• Exhausted global pool</li>
                <li>• NAT compensates for scarcity</li>
                <li>• Address conservation dominates design</li>
              </ul>
            </div>
            <div className="bg-white p-3 rounded-lg shadow border border-green-200">
              <h4 className="text-sm font-bold text-green-800 mb-1">IPv6</h4>
              <ul className="space-y-0.5 text-xs text-gray-700">
                <li>• Vast address space</li>
                <li>• Count subnets, not hosts</li>
                <li>• Nibble boundaries keep plans readable</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="bg-green-50 p-2 rounded text-[11px] text-green-800 border border-green-200">
          Source: ARIN IPv6 Network Planning Guide — <span className="text-green-600">arin.net/reference/training/resources/ipv6_networkplan.pdf</span>
        </div>
      </div>
    ),
  },

  // ─── PA vs PI ─────────────────────────────────────────────────────────────
  {
    title: 'IPv6 Address Space: PA vs. PI',
    subtitle: 'Provider Aggregatable or Provider Independent — choose wisely',
    content: (
      <div className="flex flex-col space-y-3 max-w-3xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div className="bg-blue-50 p-3 rounded-lg border border-blue-200">
            <h4 className="text-sm font-bold text-blue-900 mb-1">Provider Aggregatable (PA)</h4>
            <ul className="space-y-0.5 text-xs text-gray-700">
              <li>• Original intention for all users</li>
              <li>• Typical for residential &amp; small business</li>
              <li>• Prefixes may change (DHCPv6-PD)</li>
              <li>• Aggregates cleanly into ISP routing table</li>
            </ul>
          </div>
          <div className="bg-purple-50 p-3 rounded-lg border border-purple-200">
            <h4 className="text-sm font-bold text-purple-900 mb-1">Provider Independent (PI)</h4>
            <ul className="space-y-0.5 text-xs text-gray-700">
              <li>• Now more common in enterprises</li>
              <li>• Provides address stability and control</li>
              <li>• Requires AS number + extra cost</li>
              <li>• Often used with BGP (though not always)</li>
            </ul>
          </div>
        </div>
        <div className="bg-green-50 p-3 rounded-lg border-l-4 border-green-500">
          <h4 className="text-sm font-bold text-green-900 mb-1">Key considerations</h4>
          <ul className="space-y-0.5 text-xs text-gray-700">
            <li>• Will you have local internet breakout (DIA) at each site?</li>
            <li>• Will your ISP run BGP with you at each site?</li>
            <li>• One PI block globally, or per-RIR?</li>
            <li>• Are you multihoming today or planning to?</li>
          </ul>
        </div>
      </div>
    ),
  },

  // ─── The 4 Rules ─────────────────────────────────────────────────────────
  {
    title: 'The 4 Rules for IPv6 Address Planning',
    subtitle: 'Simple, meaningful, reserved, and aggregatable',
    content: (
      <div className="flex flex-col space-y-2 max-w-3xl mx-auto">
        <div className="bg-green-50 p-2 rounded border border-green-200 text-center text-xs font-bold text-green-800 mb-1">
          Remember Rule #1 throughout everything else!
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div className="bg-white p-3 rounded-lg shadow border-l-4 border-green-500">
            <div className="flex items-center gap-2 mb-1">
              <span className="w-6 h-6 bg-green-500 text-white rounded-full text-sm font-bold flex items-center justify-center">1</span>
              <h4 className="text-sm font-bold text-green-900">Simple</h4>
            </div>
            <p className="text-xs text-gray-700">Easy to explain, remember, and troubleshoot under pressure. You don't want to spend weeks explaining your scheme.</p>
          </div>
          <div className="bg-white p-3 rounded-lg shadow border-l-4 border-blue-500">
            <div className="flex items-center gap-2 mb-1">
              <span className="w-6 h-6 bg-blue-500 text-white rounded-full text-sm font-bold flex items-center justify-center">2</span>
              <h4 className="text-sm font-bold text-blue-900">Embed Information</h4>
            </div>
            <p className="text-xs text-gray-700">Encode useful metadata: location, country, PIN, VLAN, or even mapped IPv4 addresses in link-local or global addresses.</p>
          </div>
          <div className="bg-white p-3 rounded-lg shadow border-l-4 border-orange-500">
            <div className="flex items-center gap-2 mb-1">
              <span className="w-6 h-6 bg-orange-500 text-white rounded-full text-sm font-bold flex items-center justify-center">3</span>
              <h4 className="text-sm font-bold text-orange-900">Build-in Reserve</h4>
            </div>
            <p className="text-xs text-gray-700">Cater for future growth, mergers &amp; acquisitions, and new locations. Reserve vs. assigned — don't use all your space immediately.</p>
          </div>
          <div className="bg-white p-3 rounded-lg shadow border-l-4 border-purple-500">
            <div className="flex items-center gap-2 mb-1">
              <span className="w-6 h-6 bg-purple-500 text-white rounded-full text-sm font-bold flex items-center justify-center">4</span>
              <h4 className="text-sm font-bold text-purple-900">Aggregatable</h4>
            </div>
            <p className="text-xs text-gray-700">Good aggregation is essential. One address block per location. Ensures scalability and routing table stability.</p>
          </div>
        </div>
      </div>
    ),
  },

  // ─── Address Plan Methodology ─────────────────────────────────────────────
  {
    title: 'Address Plan Methodology',
    subtitle: 'Top-down hierarchical design — geography then function',
    content: (
      <div className="flex flex-col space-y-3 max-w-3xl mx-auto">
        <div className="bg-green-50 p-3 rounded-lg border-l-4 border-green-500">
          <h4 className="text-sm font-bold text-green-900 mb-1">Core principles</h4>
          <ul className="space-y-0.5 text-xs text-gray-700">
            <li>• Design the addressing plan <strong>globally</strong> before deploying at any site</li>
            <li>• Use a <strong>top-down hierarchical</strong> structure: global → region → campus → building → PIN</li>
            <li>• Count <strong>subnets / prefixes</strong> at each level — not hosts</li>
            <li>• Align prefix boundaries to <strong>nibble boundaries</strong> (multiples of 4 bits) for readability</li>
          </ul>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div className="bg-white p-3 rounded-lg shadow border border-green-200">
            <h4 className="text-sm font-bold text-green-900 mb-1">Geography layer</h4>
            <ul className="space-y-0.5 text-xs text-gray-700">
              <li>• Countries, regions, buildings, branches</li>
              <li>• Maps onto physical/logical topology</li>
              <li>• Enables summarization at each level</li>
            </ul>
          </div>
          <div className="bg-white p-3 rounded-lg shadow border border-green-200">
            <h4 className="text-sm font-bold text-green-900 mb-1">Function (PIN) layer</h4>
            <ul className="space-y-0.5 text-xs text-gray-700">
              <li>• PIN = Place In the Network</li>
              <li>• Services, applications, platforms, VLANs</li>
              <li>• e.g., Lab, Desktop, DC, DMZ, Guest WiFi</li>
            </ul>
          </div>
        </div>
      </div>
    ),
  },

  // ─── Address Overview Example ─────────────────────────────────────────────
  {
    title: 'Address Overview Example',
    subtitle: 'Breaking down a /28 from RIR into a practical hierarchy',
    content: (
      <div className="flex flex-col space-y-2 max-w-3xl mx-auto">
        <div className="bg-green-50 p-2 rounded text-xs text-green-800 border border-green-200 mb-1">
          Use nibble boundaries — each nibble = 4 bits = one hex character. Keeps addresses readable.
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-xs border-collapse">
            <thead>
              <tr className="bg-green-100">
                <th className="p-2 text-left border border-green-300">Level</th>
                <th className="p-2 text-left border border-green-300">Prefix</th>
                <th className="p-2 text-left border border-green-300">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white">
                <td className="p-2 border border-gray-200 font-semibold">Global</td>
                <td className="p-2 border border-gray-200 font-mono">/29</td>
                <td className="p-2 border border-gray-200">From RIR (50% spare for growth)</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="p-2 border border-gray-200 font-semibold">Region</td>
                <td className="p-2 border border-gray-200 font-mono">/32</td>
                <td className="p-2 border border-gray-200">Per geographic region</td>
              </tr>
              <tr className="bg-white">
                <td className="p-2 border border-gray-200 font-semibold">Sub-Region</td>
                <td className="p-2 border border-gray-200 font-mono">/36</td>
                <td className="p-2 border border-gray-200">Per sub-region</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="p-2 border border-gray-200 font-semibold">Campus</td>
                <td className="p-2 border border-gray-200 font-mono">/40</td>
                <td className="p-2 border border-gray-200">Per campus (256 buildings)</td>
              </tr>
              <tr className="bg-white">
                <td className="p-2 border border-gray-200 font-semibold">Building/Branch</td>
                <td className="p-2 border border-gray-200 font-mono">/48</td>
                <td className="p-2 border border-gray-200">16 PINs per building/branch</td>
              </tr>
              <tr className="bg-green-50 border-l-4 border-green-400">
                <td className="p-2 border border-gray-200 font-semibold">PIN *</td>
                <td className="p-2 border border-gray-200 font-mono">/52</td>
                <td className="p-2 border border-gray-200">4096 /64 subnets per PIN</td>
              </tr>
              <tr className="bg-blue-50">
                <td className="p-2 border border-gray-200 font-semibold">Subnet</td>
                <td className="p-2 border border-gray-200 font-mono">/64</td>
                <td className="p-2 border border-gray-200">Always /64 at the edge</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="text-xs text-gray-500">* PIN = Place In the Network — a framework to classify network functional areas (Lab, Desktop, DC, DMZ, etc.)</div>
      </div>
    ),
  },

  // ─── Nibble Boundaries Visual ─────────────────────────────────────────────
  {
    title: 'Nibble Boundaries Visualized',
    subtitle: 'A clear, layered view of hierarchical allocation from /29 to /52',
    content: (
      <div className="flex flex-col items-center justify-center h-full space-y-2 max-w-5xl mx-auto">
        <svg viewBox="0 0 2048 768" className="w-full h-auto" role="img" aria-label="Nibble boundaries hierarchy from /29 to /52">
          <defs>
            <filter id="softShadow" x="-10%" y="-10%" width="120%" height="140%">
              <feDropShadow dx="0" dy="12" stdDeviation="10" floodColor="#000000" floodOpacity="0.18" />
            </filter>
          </defs>

          <rect x="0" y="0" width="2048" height="768" fill="#ffffff" />

          <g filter="url(#softShadow)">
            <ellipse cx="1024" cy="392" rx="980" ry="350" fill="#1eb4e0" />
            <ellipse cx="1018" cy="392" rx="930" ry="238" fill="#1f63eb" />
            <ellipse cx="930" cy="392" rx="760" ry="206" fill="#3ea11d" />
            <ellipse cx="760" cy="392" rx="610" ry="168" fill="#f7e2c2" stroke="#f09a00" strokeWidth="4" />
            <ellipse cx="565" cy="392" rx="445" ry="124" fill="#f9bd04" stroke="#ef9a00" strokeWidth="4" />
            <ellipse cx="338" cy="392" rx="195" ry="78" fill="#fbfbfb" stroke="#d7d7d7" strokeWidth="4" />
          </g>

          <text x="1024" y="96" textAnchor="middle" fontSize="42" fontWeight="700" fill="#253447">/29 Global Level</text>
          <text x="1024" y="140" textAnchor="middle" fontSize="42" fontWeight="700" fill="#253447">(50% spares)</text>

          <text x="1840" y="380" textAnchor="middle" fontSize="52" fontWeight="700" fill="#ffffff">/32</text>
          <text x="1840" y="426" textAnchor="middle" fontSize="30" fontWeight="700" fill="#ffffff">per Region</text>

          <text x="1490" y="374" textAnchor="middle" fontSize="52" fontWeight="700" fill="#2f3844">/36</text>
          <text x="1490" y="420" textAnchor="middle" fontSize="30" fontWeight="700" fill="#2f3844">per Sub-Region</text>

          <text x="1090" y="374" textAnchor="middle" fontSize="34" fontWeight="700" fill="#444444">/40 per Campus</text>
          <text x="1090" y="414" textAnchor="middle" fontSize="28" fontWeight="700" fill="#444444">(256 Buildings)</text>

          <text x="735" y="360" textAnchor="middle" fontSize="34" fontWeight="700" fill="#0f2238">/48 per Building/Branch</text>
          <text x="735" y="400" textAnchor="middle" fontSize="26" fontWeight="700" fill="#0f2238">(16 PINs per</text>
          <text x="735" y="434" textAnchor="middle" fontSize="26" fontWeight="700" fill="#0f2238">Building/Branch)</text>

          <text x="338" y="374" textAnchor="middle" fontSize="32" fontWeight="700" fill="#11233b">/52 per PIN *</text>
          <text x="338" y="410" textAnchor="middle" fontSize="24" fontWeight="700" fill="#11233b">(4096 Subnets / PIN)</text>
        </svg>

        <p className="text-xs text-gray-500">* PIN = Place In the Network. Nibble-aligned prefixes keep the hierarchy readable.</p>
      </div>
    ),
  },

  // ─── Address Planning Continued ────────────────────────────────────────────
  {
    title: 'Address Planning: Encoding Scheme Examples',
    subtitle: 'Multiple approaches — pick the one that fits your organization',
    content: (
      <div className="flex flex-col space-y-2 max-w-3xl mx-auto">
        <div className="bg-green-50 p-3 rounded-lg border-l-4 border-green-500">
          <h4 className="text-sm font-bold text-green-900 mb-1">Base: <code>2001:0db8::/32</code> (allocated from RIR)</h4>
          <p className="text-xs text-gray-600">Key: P=Global Prefix, C=Campus/Cloud/Colo, G=Geographic, L=Logical/PIN, S=Subnet</p>
        </div>
        <div className="space-y-1 text-xs font-mono">
          {[
            { scheme: 'PPPP:PPPP:CGGG:LSSS::/64', desc: 'Campus first' },
            { scheme: 'PPPP:PPPP:CGGG:LLSS::/64', desc: 'Larger logical space' },
            { scheme: 'PPPP:PPPC:GGGL:LSSS::/64', desc: 'PI block — campus in 3rd group' },
            { scheme: 'PPPP:PPPP:CGGG:GLSS::/64', desc: 'Geography + function hybrid' },
          ].map((row, i) => (
            <div key={i} className="flex gap-3 items-center bg-white p-2 rounded border">
              <code className="text-purple-700 shrink-0">{row.scheme}</code>
              <span className="text-gray-500">{row.desc}</span>
            </div>
          ))}
        </div>
        <div className="bg-orange-50 p-2 rounded text-xs text-orange-800 border border-orange-200">
          <strong>/48</strong> is the longest prefix allowed in global routing tables. Plan aggregation accordingly.
        </div>
      </div>
    ),
  },

  // ─── Template Addressing Example ─────────────────────────────────────────
  {
    title: 'Template Addressing: Functional Identifier Example',
    subtitle: 'Using the 13th nibble as a PIN functional identifier',
    content: (
      <div className="flex flex-col space-y-2 max-w-3xl mx-auto">
        <div className="bg-white p-3 rounded-lg shadow border border-green-200">
          <h4 className="text-sm font-bold text-green-900 mb-1">Base: <code className="text-green-700">2001:0db8:729c::/48</code></h4>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2 text-xs mt-2">
            {[
              { hex: '0', name: 'Reserved' },
              { hex: '2', name: 'Infrastructure' },
              { hex: '4', name: 'Desktop (wired)' },
              { hex: '6', name: 'Wireless (corp)' },
              { hex: '7', name: 'Guest WiFi' },
              { hex: 'A', name: 'Lab' },
              { hex: 'C', name: 'Building DC' },
              { hex: 'E', name: 'DMZ' },
              { hex: 'F', name: 'Reserved' },
            ].map((pin, i) => (
              <div key={i} className="flex items-center gap-1 bg-gray-50 p-1 rounded border">
                <code className="text-purple-700 font-bold">{pin.hex}</code>
                <span className="text-gray-700">{pin.name}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="space-y-0.5 text-xs font-mono bg-gray-50 p-2 rounded border">
          <div className="text-green-700">2001:0db8:729c:4000::/52 — Desktop PIN</div>
          <div className="text-blue-600 ml-4">2001:0db8:729c:4200::/64 — Desktop VLAN 200</div>
          <div className="text-blue-600 ml-4">2001:0db8:729c:4201::/64 — Desktop VLAN 201</div>
          <div className="text-orange-700">2001:0db8:029c:a000::/52 — Lab PIN</div>
          <div className="text-orange-600 ml-4">2001:0db8:029c:a004::/64 — Lab Subnet 4</div>
        </div>
      </div>
    ),
  },

  // ─── Secret Rule #5: Do Not Fear to Waste Addresses ───────────────────────
  {
    title: 'Secret Rule #5',
    subtitle: 'The most important mindset shift for IPv6 address planning',
    content: (
      <div className="flex flex-col items-center justify-center h-full space-y-6 px-4">
        <Calculator className="w-14 h-14 text-green-500" />
        <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500 max-w-2xl text-center">
          <p className="text-2xl font-bold text-green-900 mb-4">
            "Do not fear to waste addresses"
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-left">
            <div className="bg-white p-3 rounded border border-green-200">
              <h4 className="text-sm font-bold text-green-800 mb-1">Why it matters</h4>
              <ul className="space-y-0.5 text-xs text-gray-700">
                <li>• Every subnet is /64 — 18 quintillion addresses</li>
                <li>• Wasting addresses keeps design simple (#1)</li>
                <li>• Sparse allocation enables future embedding of info (#2)</li>
                <li>• Wasted space = built-in reserve (#3)</li>
              </ul>
            </div>
            <div className="bg-white p-3 rounded border border-green-200">
              <h4 className="text-sm font-bold text-green-800 mb-1">Let go of IPv4 habits</h4>
              <ul className="space-y-0.5 text-xs text-gray-700">
                <li>• Don't use /112 or /120 "to save space"</li>
                <li>• Don't squeeze links to /127 unless operationally justified</li>
                <li>• Nibble-aligned /48s look ugly but work beautifully</li>
              </ul>
            </div>
          </div>
        </div>
        <p className="text-xs text-gray-500 italic">Remember Rule #1: Simple. If you're trying to save addresses, you're still thinking in IPv4.</p>
      </div>
    ),
  },

  // ─── Let Go of Traditional Thinking ──────────────────────────────────────
  {
    title: 'Let Go of Traditional Thinking',
    subtitle: 'IPv6-only is the direction — not a distant goal',
    content: (
      <div className="flex flex-col space-y-3 max-w-3xl mx-auto">
        <div className="bg-green-50 p-3 rounded-lg border-l-4 border-green-500">
          <h3 className="text-sm font-bold text-green-900 mb-1">The IPv6-only datacenter reality</h3>
          <p className="text-xs text-gray-700">
            Major hyperscalers and cloud operators already run IPv6-only internal networks. NAT64/DNS64/CLAT handle any remaining IPv4 legacy requirements at the edges.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          <div className="bg-white p-3 rounded-lg shadow border border-green-200 text-center">
            <div className="text-xl font-bold text-green-700">Simpler</div>
            <p className="text-xs text-gray-600 mt-1">No dual-stack complexity, no NAT state tables</p>
          </div>
          <div className="bg-white p-3 rounded-lg shadow border border-green-200 text-center">
            <div className="text-xl font-bold text-blue-700">More Scalable</div>
            <p className="text-xs text-gray-600 mt-1">Massive address space, native multicast, no ARP storms</p>
          </div>
          <div className="bg-white p-3 rounded-lg shadow border border-green-200 text-center">
            <div className="text-xl font-bold text-purple-700">Future-Proof</div>
            <p className="text-xs text-gray-600 mt-1">Built for IoT, containers, mobile, and whatever comes next</p>
          </div>
        </div>
        <div className="bg-blue-50 p-2 rounded text-xs text-blue-800 border border-blue-200">
          Starting with IPv6-native design is vastly easier than retrofitting IPv6 onto an existing IPv4 infrastructure.
        </div>
      </div>
    ),
  },
];
