import { Trophy } from 'lucide-react';
import { SlideType } from './types';

export const prosSlides: SlideType[] = [
  {
    title: "",
    subtitle: "",
    content: (
      <div className="flex flex-col items-center justify-center h-full space-y-6">
        <Trophy className="w-16 h-16 md:w-20 md:h-20 text-orange-500" />
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 text-center">What the Pros Use</h1>
        <p className="text-xl md:text-2xl text-gray-600 text-center">Advanced patterns from the AI-native developer playbook</p>
        <div className="flex space-x-2 mt-4">
          <div className="w-3 h-3 rounded-full bg-orange-500"></div>
          <div className="w-3 h-3 rounded-full bg-orange-300"></div>
          <div className="w-3 h-3 rounded-full bg-orange-100"></div>
        </div>
      </div>
    )
  },
  {
    title: "Conversational Steering",
    subtitle: "The fastest developers have stopped typing their prompts",
    content: (
      <div className="flex flex-col space-y-5 max-w-3xl mx-auto">
        <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500">
          <p className="text-gray-700">
            <a href="https://wisprflow.ai" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:underline font-semibold">Wispr Flow</a> converts natural speech to clean, formatted text in every app — including Cursor, Copilot, and Claude — at 220 wpm vs 45 wpm on a keyboard. Speak your prompts, dictate code, and steer AI hands-free.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded-lg shadow border border-purple-200">
            <h4 className="font-bold text-purple-900 mb-2">Built for developers</h4>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex"><span className="mr-2">•</span><span>Understands camelCase, snake_case, and dev terminology</span></li>
              <li className="flex"><span className="mr-2">•</span><span>Tags files in Cursor and Windsurf to add context hands-free</span></li>
              <li className="flex"><span className="mr-2">•</span><span>AI Auto Edits: removes filler words, formats output instantly</span></li>
              <li className="flex"><span className="mr-2">•</span><span>Works across any app — IDE, terminal, or browser-based AI tool</span></li>
            </ul>
          </div>

          <div className="bg-white p-4 rounded-lg shadow border border-purple-200">
            <h4 className="font-bold text-purple-900 mb-2">The Vibe Coding shift</h4>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex"><span className="mr-2">•</span><span>Andrej Karpathy: <em>"The hottest new programming language is English"</em></span></li>
              <li className="flex"><span className="mr-2">•</span><span>Voice makes this literal — speak what you want, AI builds it</span></li>
              <li className="flex"><span className="mr-2">•</span><span>Available on Mac, Windows, iPhone, and Android</span></li>
            </ul>
          </div>
        </div>

        <div className="bg-gray-100 p-4 rounded-lg">
          <p className="text-sm italic text-gray-700">
            Source: <a href="https://wisprflow.ai/developers" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:underline">wisprflow.ai/developers</a> — <a href="https://wisprflow.ai/vibe-coding" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:underline">wisprflow.ai/vibe-coding</a>
          </p>
        </div>
      </div>
    )
  },
  {
    title: "Agents & Skills",
    subtitle: "Wire AI to your workflow once — reuse it everywhere",
    content: (
      <div className="flex flex-col space-y-5 max-w-3xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
            <h4 className="font-bold text-blue-900 mb-2">Agent — task definition</h4>
            <p className="text-sm text-gray-700 mb-3">Stored in <code className="bg-blue-100 px-1 rounded text-xs">.github/agents/</code>. Defines what is demanded of the AI and how it should approach a specific task.</p>
            <ul className="space-y-1 text-sm text-gray-700">
              <li className="flex"><span className="mr-2">•</span><span>Architecture review</span></li>
              <li className="flex"><span className="mr-2">•</span><span>Requirements refinement</span></li>
              <li className="flex"><span className="mr-2">•</span><span>Certification planning</span></li>
              <li className="flex"><span className="mr-2">•</span><span>Implementation detail planning</span></li>
            </ul>
          </div>

          <div className="bg-green-50 p-4 rounded-lg border border-green-200">
            <h4 className="font-bold text-green-900 mb-2">Skill — practical execution</h4>
            <p className="text-sm text-gray-700 mb-3">Stored in <code className="bg-green-100 px-1 rounded text-xs">.github/skills/&lt;name&gt;/SKILL.md</code>. Packages the step-by-step how — invoked by name or description.</p>
            <ul className="space-y-1 text-sm text-gray-700">
              <li className="flex"><span className="mr-2">•</span><span>Encode best practices once</span></li>
              <li className="flex"><span className="mr-2">•</span><span>Any agent that needs it can invoke it</span></li>
              <li className="flex"><span className="mr-2">•</span><span>No re-explaining, no re-prompting</span></li>
            </ul>
          </div>
        </div>

        <div className="bg-gray-800 p-4 rounded-lg">
          <p className="text-green-400 font-mono text-xs mb-3">Agent chaining example:</p>
          <div className="flex flex-wrap items-center gap-2">
            <span className="bg-blue-900 text-blue-200 px-2 py-1 rounded font-mono text-xs">Refinement</span>
            <span className="text-gray-400 text-xs">→</span>
            <span className="bg-blue-900 text-blue-200 px-2 py-1 rounded font-mono text-xs">Architecture</span>
            <span className="text-gray-400 text-xs">→</span>
            <span className="bg-blue-900 text-blue-200 px-2 py-1 rounded font-mono text-xs">Implementation plan</span>
            <span className="text-gray-400 text-xs">→</span>
            <span className="bg-blue-900 text-blue-200 px-2 py-1 rounded font-mono text-xs">Code Execution</span>
          </div>
          <p className="text-gray-400 text-xs mt-2">A ticket becomes shipped code — each agent handed the right context from the previous.</p>
        </div>

        <div className="bg-blue-100 p-4 rounded-lg">
          <p className="text-sm italic text-blue-900"><strong>Agent = what is demanded.</strong> Skill = how to execute it. Chain agents together to automate entire engineering workflows.</p>
        </div>
      </div>
    )
  },
  {
    title: "The Pro Tool Stack",
    subtitle: "Right model, right tool, right environment — every time",
    content: (
      <div className="flex flex-col space-y-5 max-w-3xl mx-auto">
        <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
          <p className="text-gray-700 text-sm">Pros don't lock into one vendor's full stack. They mix open-source CLI agents, cloud frontier models, and self-hosted local models — choosing each layer for cost, performance, or data sovereignty.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          <div className="bg-white p-4 rounded-lg shadow border border-green-200">
            <h4 className="font-bold text-green-900 mb-1 text-sm">
              <a href="https://opencode.ai" target="_blank" rel="noopener noreferrer" className="text-green-700 hover:underline">OpenCode CLI</a>
            </h4>
            <p className="text-xs text-gray-500 mb-2">Open-source · 120K GitHub stars · 5M monthly devs</p>
            <ul className="space-y-1 text-xs text-gray-700">
              <li className="flex"><span className="mr-1">•</span><span>Terminal, desktop, or IDE extension</span></li>
              <li className="flex"><span className="mr-1">•</span><span>75+ LLM providers via Models.dev</span></li>
              <li className="flex"><span className="mr-1">•</span><span>Use your existing Copilot or ChatGPT Plus account</span></li>
              <li className="flex"><span className="mr-1">•</span><span>Privacy-first: no code stored on servers</span></li>
            </ul>
          </div>

          <div className="bg-white p-4 rounded-lg shadow border border-blue-200">
            <h4 className="font-bold text-blue-900 mb-1 text-sm">Cloud Models</h4>
            <p className="text-xs text-gray-500 mb-2">Claude · GPT · Gemini</p>
            <ul className="space-y-1 text-xs text-gray-700">
              <li className="flex"><span className="mr-1">•</span><span>Frontier reasoning for hard problems</span></li>
              <li className="flex"><span className="mr-1">•</span><span>Architecture decisions &amp; complex analysis</span></li>
              <li className="flex"><span className="mr-1">•</span><span>Plug into OpenCode or via API directly</span></li>
            </ul>
          </div>

          <div className="bg-white p-4 rounded-lg shadow border border-orange-200">
            <h4 className="font-bold text-orange-900 mb-1 text-sm">Ollama on Private EU Servers</h4>
            <p className="text-xs text-gray-500 mb-2">Llama · Mistral · Qwen</p>
            <ul className="space-y-1 text-xs text-gray-700">
              <li className="flex"><span className="mr-1">•</span><span>Code never leaves your infrastructure</span></li>
              <li className="flex"><span className="mr-1">•</span><span>GDPR-compliant for regulated industries</span></li>
              <li className="flex"><span className="mr-1">•</span><span>No rate limits, optimized cost at scale</span></li>
            </ul>
          </div>
        </div>

        <div className="bg-green-100 p-4 rounded-lg">
          <p className="text-sm italic text-green-900"><strong>The principle:</strong> Cheap/repetitive tasks → fast local models. Complex reasoning → frontier cloud. Sensitive code → private EU infrastructure.</p>
        </div>
      </div>
    )
  },
];
