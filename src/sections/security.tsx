import { ShieldAlert } from 'lucide-react';
import { SlideType } from './types';

export const securitySlides: SlideType[] = [
  {
    title: "",
    subtitle: "",
    content: (
      <div className="flex flex-col items-center md:justify-center md:h-full space-y-6">
        <ShieldAlert className="w-20 h-20 text-red-500" />
        <h1 className="text-5xl md:text-6xl font-bold text-red-900 text-center">
          Security
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 text-center max-w-2xl">
          Understanding risks and best practices for secure AI coding
        </p>
        <div className="flex space-x-2 mt-4">
          <div className="w-3 h-3 bg-red-300 rounded-full"></div>
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <div className="w-3 h-3 bg-red-300 rounded-full"></div>
        </div>
      </div>
    )
  },
  {
    title: "Life Cycle of a Copilot Code Suggestion",
    subtitle: "Data is held in memory, not written to disk",
    content: (
      <div className="flex flex-col space-y-4 max-w-4xl mx-auto">
        {/* Flow Steps */}
        <div className="flex flex-col space-y-2">
          {/* Step 1-2: IDE Input */}
          <div className="bg-green-50 p-3 rounded-lg border border-green-200">
            <div className="flex items-start">
              <span className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold mr-2 flex-shrink-0">1</span>
              <div className="text-sm">
                <span className="font-semibold text-green-900">Developer enters text</span>
                <span className="text-gray-600"> → Copilot gathers context: code before/after cursor, file name/type, other open tabs</span>
              </div>
            </div>
          </div>

          <div className="bg-green-50 p-3 rounded-lg border border-green-200">
            <div className="flex items-start">
              <span className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold mr-2 flex-shrink-0">2</span>
              <span className="text-sm font-semibold text-green-900">Prompt constructed from context</span>
            </div>
          </div>

          {/* Encryption indicator */}
          <div className="flex justify-center">
            <span className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-xs font-medium">🔒 Encrypted in transit</span>
          </div>

          {/* Step 3: Proxy Input Filter */}
          <div className="bg-indigo-100 p-3 rounded-lg border border-indigo-300">
            <div className="flex items-start">
              <span className="bg-indigo-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold mr-2 flex-shrink-0">3</span>
              <div className="text-sm">
                <span className="font-semibold text-indigo-900">Proxy — Terminate requests containing:</span>
                <span className="text-gray-700"> toxic language, requests unrelated to code, hacking attempts</span>
              </div>
            </div>
          </div>

          {/* Step 4: LLM */}
          <div className="bg-indigo-200 p-3 rounded-lg border border-indigo-400">
            <div className="flex items-start">
              <span className="bg-indigo-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold mr-2 flex-shrink-0">4</span>
              <span className="text-sm font-semibold text-indigo-900">GitHub Copilot LLM — Code suggestion formulated</span>
            </div>
          </div>

          {/* Step 5: Proxy Output Filter */}
          <div className="bg-indigo-100 p-3 rounded-lg border border-indigo-300">
            <div className="flex items-start">
              <span className="bg-indigo-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold mr-2 flex-shrink-0">5</span>
              <div className="text-sm">
                <span className="font-semibold text-indigo-900">Proxy — Test suggestions for:</span>
                <span className="text-gray-700"> obvious bugs, security vulnerabilities, truncate unique identifiers, filter public code matches</span>
              </div>
            </div>
          </div>

          {/* Encryption indicator */}
          <div className="flex justify-center">
            <span className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-xs font-medium">🔒 Encrypted in transit</span>
          </div>

          {/* Step 6: Response */}
          <div className="bg-green-50 p-3 rounded-lg border border-green-200">
            <div className="flex items-start">
              <span className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold mr-2 flex-shrink-0">6</span>
              <span className="text-sm font-semibold text-green-900">Code suggestion presented to user to accept or reject</span>
            </div>
          </div>
        </div>

        {/* Key Point */}
        <div className="bg-yellow-50 p-3 rounded-lg border border-yellow-300">
          <p className="text-sm text-yellow-900 text-center">
            <strong>📝 Note:</strong> Data is held in memory, not written to disk — your code is never stored or used for training.
          </p>
        </div>
      </div>
    )
  },
  {
    title: "OWASP Top 10 for Agentic Applications",
    subtitle: "Critical risks for autonomous AI agents (December 2025)",
    content: (
      <div className="flex flex-col space-y-4 max-w-4xl mx-auto">
        <div className="bg-red-50 p-3 rounded-lg border-l-4 border-red-500">
          <h3 className="text-lg font-bold text-red-900 mb-1">Agentic Security Initiative</h3>
          <p className="text-gray-700 text-sm">Input from 100+ security researchers, practitioners, and organizations including NIST and European Commission.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-2">
          <div className="bg-white p-3 rounded-lg shadow border-t-4 border-sky-500">
            <span className="text-xs font-bold text-sky-600 bg-sky-100 px-2 py-0.5 rounded">ASI01</span>
            <h4 className="font-bold text-gray-900 text-sm mt-1">Agent Goal Hijack</h4>
            <p className="text-gray-600 text-xs mt-1">Attackers manipulate agent inputs to alter goals, exfiltrate data, or hijack workflows</p>
          </div>

          <div className="bg-white p-3 rounded-lg shadow border-t-4 border-sky-500">
            <span className="text-xs font-bold text-sky-600 bg-sky-100 px-2 py-0.5 rounded">ASI02</span>
            <h4 className="font-bold text-gray-900 text-sm mt-1">Tool Misuse & Exploitation</h4>
            <p className="text-gray-600 text-xs mt-1">Agents misuse tools via prompt manipulation, causing data exfiltration or unsafe operations</p>
          </div>

          <div className="bg-white p-3 rounded-lg shadow border-t-4 border-sky-500">
            <span className="text-xs font-bold text-sky-600 bg-sky-100 px-2 py-0.5 rounded">ASI03</span>
            <h4 className="font-bold text-gray-900 text-sm mt-1">Identity & Privilege Abuse</h4>
            <p className="text-gray-600 text-xs mt-1">Weak scoping allows privilege escalation and cross-agent impersonation</p>
          </div>

          <div className="bg-white p-3 rounded-lg shadow border-t-4 border-sky-500">
            <span className="text-xs font-bold text-sky-600 bg-sky-100 px-2 py-0.5 rounded">ASI04</span>
            <h4 className="font-bold text-gray-900 text-sm mt-1">Supply Chain Vulnerabilities</h4>
            <p className="text-gray-600 text-xs mt-1">Poisoned tools, prompts, or MCP connections propagate malicious logic</p>
          </div>

          <div className="bg-white p-3 rounded-lg shadow border-t-4 border-sky-500">
            <span className="text-xs font-bold text-sky-600 bg-sky-100 px-2 py-0.5 rounded">ASI05</span>
            <h4 className="font-bold text-gray-900 text-sm mt-1">Unexpected Code Execution</h4>
            <p className="text-gray-600 text-xs mt-1">Unsafe code generation or shell execution triggered by crafted prompts</p>
          </div>

          <div className="bg-white p-3 rounded-lg shadow border-t-4 border-sky-400">
            <span className="text-xs font-bold text-sky-600 bg-sky-100 px-2 py-0.5 rounded">ASI06</span>
            <h4 className="font-bold text-gray-900 text-sm mt-1">Memory & Context Injection</h4>
            <p className="text-gray-600 text-xs mt-1">Adversaries poison RAG stores or context windows to plant false knowledge</p>
          </div>

          <div className="bg-white p-3 rounded-lg shadow border-t-4 border-sky-400">
            <span className="text-xs font-bold text-sky-600 bg-sky-100 px-2 py-0.5 rounded">ASI07</span>
            <h4 className="font-bold text-gray-900 text-sm mt-1">Insecure Inter-Agent Comms</h4>
            <p className="text-gray-600 text-xs mt-1">Lack of encryption or validation enables message tampering between agents</p>
          </div>

          <div className="bg-white p-3 rounded-lg shadow border-t-4 border-sky-400">
            <span className="text-xs font-bold text-sky-600 bg-sky-100 px-2 py-0.5 rounded">ASI08</span>
            <h4 className="font-bold text-gray-900 text-sm mt-1">Cascading Failures</h4>
            <p className="text-gray-600 text-xs mt-1">Single faults propagate across interlinked agents through chained actions</p>
          </div>

          <div className="bg-white p-3 rounded-lg shadow border-t-4 border-sky-400">
            <span className="text-xs font-bold text-sky-600 bg-sky-100 px-2 py-0.5 rounded">ASI09</span>
            <h4 className="font-bold text-gray-900 text-sm mt-1">Human-Agent Trust Exploitation</h4>
            <p className="text-gray-600 text-xs mt-1">Attackers exploit user over-trust through deception or fake explainability</p>
          </div>

          <div className="bg-white p-3 rounded-lg shadow border-t-4 border-sky-400">
            <span className="text-xs font-bold text-sky-600 bg-sky-100 px-2 py-0.5 rounded">ASI10</span>
            <h4 className="font-bold text-gray-900 text-sm mt-1">Rogue Agents</h4>
            <p className="text-gray-600 text-xs mt-1">Compromised agents deviate from goals, collude, or self-replicate as insider threats</p>
          </div>
        </div>

        <div className="bg-blue-50 p-3 rounded-lg">
          <p className="text-sm text-blue-900 text-center">
            <strong>Source:</strong> <a href="https://genai.owasp.org/initiatives/agentic-security-initiative/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">OWASP GenAI Security Project — Top 10 for Agentic Applications</a> (CC BY-SA 4.0)
          </p>
        </div>
      </div>
    )
  },
  {
    title: "Notable Security Incidents",
    subtitle: "Real-world vulnerabilities discovered in AI coding assistants",
    content: (
      <div className="flex flex-col space-y-5 max-w-3xl mx-auto">
        <div className="bg-white p-5 rounded-lg shadow border border-red-200">
          <div className="flex items-start mb-3">
            <span className="text-2xl mr-3">👻</span>
            <h4 className="font-bold text-red-900 text-lg">Invisible Unicode Attack</h4>
          </div>
          <div className="space-y-2 text-gray-700 text-sm">
            <p>Invisible characters can be embedded in code that <strong>hide harmful instructions</strong> from developers while affecting code behavior.</p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Bad actors inject invisible characters into open-source repositories</li>
              <li>These become part of Copilot's context when building prompts</li>
              <li>Compromised code suggestions can spread undetected across many files</li>
              <li>By the time detected, damage may be widespread</li>
            </ul>
            <div className="mt-2 text-xs text-gray-500">
              Source: <a href="https://idanhabler.medium.com/hiding-in-plain-sight-weaponizing-invisible-unicode-to-attack-llms-f9033865ec10" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Hiding in Plain Sight — Weaponizing Invisible Unicode to Attack LLMs</a>
            </div>
          </div>
        </div>

        <div className="bg-white p-5 rounded-lg shadow border border-orange-200">
          <div className="flex items-start mb-3">
            <span className="text-2xl mr-3">🔑</span>
            <h4 className="font-bold text-orange-900 text-lg">Secret Leakage Vulnerability</h4>
          </div>
          <div className="space-y-2 text-gray-700 text-sm">
            <p>Researchers at CUHK discovered that attackers can <strong>induce Copilot to reveal secrets</strong> it was unintentionally trained on.</p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Hardcoded API keys in public repos become part of training data</li>
              <li>Crafted prompts can extract these credentials from the model</li>
              <li>Removing secrets from GitHub doesn't remove them from the model</li>
              <li>The original developer may never know their key was exposed</li>
            </ul>
          </div>
          <div className="mt-3 text-xs text-gray-500">
            Source: <a href="https://arxiv.org/pdf/2309.07639" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">arXiv:2309.07639</a>
          </div>
        </div>

        <div className="bg-red-100 p-3 rounded-lg">
          <p className="text-sm text-red-900 text-center">
            <strong>Takeaway:</strong> Never hardcode secrets. Always review AI-generated code before accepting.
          </p>
        </div>
      </div>
    )
  },
  {
    title: "Best Practices to Mitigate Risks",
    subtitle: "Developer and organization actions for secure AI coding",
    content: (
      <div className="flex flex-col space-y-5 max-w-3xl mx-auto">
        <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
          <h3 className="text-xl font-bold text-green-900 mb-2">Defense in Depth</h3>
          <p className="text-gray-700">GenAI security must guard against malicious code in real time — both inputs and outputs.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded-lg shadow border-l-4 border-blue-500">
            <h4 className="font-bold text-gray-900 mb-2 flex items-center">
              <span className="text-blue-500 mr-2">🔒</span> Mask & Anonymize Data
            </h4>
            <p className="text-gray-600 text-sm">Prevent sensitive data from becoming inputs to Copilot in the first place.</p>
          </div>

          <div className="bg-white p-4 rounded-lg shadow border-l-4 border-green-500">
            <h4 className="font-bold text-gray-900 mb-2 flex items-center">
              <span className="text-green-500 mr-2">📋</span> Enforce Privacy Policies
            </h4>
            <p className="text-gray-600 text-sm">Support organizational data governance and compliance requirements.</p>
          </div>

          <div className="bg-white p-4 rounded-lg shadow border-l-4 border-purple-500">
            <h4 className="font-bold text-gray-900 mb-2 flex items-center">
              <span className="text-purple-500 mr-2">🔍</span> Review API Calls
            </h4>
            <p className="text-gray-600 text-sm">Check Copilot suggestions for compliance with best practices and industry standards.</p>
          </div>

          <div className="bg-white p-4 rounded-lg shadow border-l-4 border-orange-500">
            <h4 className="font-bold text-gray-900 mb-2 flex items-center">
              <span className="text-orange-500 mr-2">⚡</span> Real-Time Screening
            </h4>
            <p className="text-gray-600 text-sm">Guard against malicious code at every stage — not just periodic scans.</p>
          </div>
        </div>

        <div className="bg-white p-4 rounded-lg shadow border border-gray-200">
          <h4 className="font-bold text-gray-900 mb-2 flex items-center">
            <span className="text-red-500 mr-2">🛡️</span> Maintain Codebase Security
          </h4>
          <ul className="text-gray-600 text-sm space-y-1">
            <li>• Keep open-source dependencies clean and up-to-date</li>
            <li>• Use secrets scanning and prevent hardcoded credentials</li>
            <li>• Always review AI-generated code before committing</li>
          </ul>
        </div>

        <div className="bg-blue-50 p-3 rounded-lg">
          <p className="text-sm text-blue-900 text-center">
            <strong>Source:</strong> <a href="https://prompt.security/blog/securing-enterprise-data-in-the-face-of-github-copilot-vulnerabilities" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Prompt Security — Securing Enterprise Data</a>
          </p>
        </div>
      </div>
    )
  },
  {
    title: "Content Exclusion for GitHub Copilot",
    subtitle: "Prevent Copilot from accessing sensitive files",
    content: (
      <div className="flex flex-col space-y-4 max-w-3xl mx-auto">
        <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
          <h3 className="text-xl font-bold text-red-900 mb-2">Exclude Sensitive Content</h3>
          <p className="text-gray-700">Repository admins, org owners, and enterprise owners can configure content exclusion for <strong>Business</strong> and <strong>Enterprise</strong> plans.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded-lg shadow border border-gray-200">
            <h4 className="font-bold text-gray-900 mb-3">Repository-Level Examples</h4>
            <div className="space-y-2 text-sm font-mono bg-gray-50 p-3 rounded">
              <p><span className="text-green-600"># Specific file</span></p>
              <p className="text-gray-800">- "/src/config/secrets.json"</p>
              <p><span className="text-green-600"># Pattern match</span></p>
              <p className="text-gray-800">- "*.env"</p>
              <p className="text-gray-800">- "secret*"</p>
              <p><span className="text-green-600"># Directory</span></p>
              <p className="text-gray-800">- "/scripts/**"</p>
            </div>
          </div>

          <div className="bg-white p-4 rounded-lg shadow border border-gray-200">
            <h4 className="font-bold text-gray-900 mb-3">Organization-Level Examples</h4>
            <div className="space-y-2 text-sm font-mono bg-gray-50 p-3 rounded">
              <p><span className="text-green-600"># All repos: .env files</span></p>
              <p className="text-gray-800">"*": ["**/.env"]</p>
              <p><span className="text-green-600"># Specific repo</span></p>
              <p className="text-gray-800">octo-repo:</p>
              <p className="text-gray-800 ml-2">- "/config/**"</p>
              <p><span className="text-green-600"># Any security folder</span></p>
              <p className="text-gray-800">- "**/security/**"</p>
            </div>
          </div>
        </div>

        <div className="bg-orange-50 p-3 rounded-lg border border-orange-200">
          <p className="text-sm text-orange-900">
            <strong>⚠️ Limitation:</strong> Agent mode, Copilot coding agent, and Copilot CLI do <strong>not</strong> support content exclusion. Changes take up to 30 minutes to propagate.
          </p>
        </div>

        <div className="bg-blue-50 p-3 rounded-lg">
          <p className="text-sm text-blue-900 text-center">
            <strong>Source:</strong> <a href="https://docs.github.com/en/copilot/how-tos/configure-content-exclusion/exclude-content-from-copilot" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">GitHub Docs — Excluding content from GitHub Copilot</a>
          </p>
        </div>
      </div>
    )
  }
];
