import { Repeat } from 'lucide-react';
import { SlideType } from './types';

export const repeatingSlides: SlideType[] = [
  {
    title: "",
    subtitle: "",
    content: (
      <div className="flex flex-col items-center md:justify-center md:h-full space-y-6">
        <Repeat className="w-20 h-20 text-green-500" />
        <h1 className="text-5xl md:text-6xl font-bold text-green-900 text-center">
          Prompt Files
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 text-center max-w-2xl">
          Building consistent workflows
        </p>
        <div className="flex space-x-2 mt-4">
          <div className="w-3 h-3 bg-green-300 rounded-full"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          <div className="w-3 h-3 bg-green-300 rounded-full"></div>
        </div>
      </div>
    )
  },
  {
    title: "Stop Repeating Yourself",
      subtitle: "Reusable Prompt Files in VS Code",
      content: (
        <div className="flex flex-col space-y-6 max-w-3xl mx-auto">
          <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
            <h3 className="text-xl font-bold text-green-900 mb-2">What are Prompt Files?</h3>
            <p className="text-gray-700">
              Markdown files that define reusable prompts for common development tasks. Run them on-demand in chat to ensure consistent, high-quality AI interactions.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white p-4 rounded-lg shadow border border-green-200">
              <h4 className="font-semibold text-green-900 mb-2">📄 File Structure (.prompt.md)</h4>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>• Stored in <code className="bg-gray-100 px-1 rounded">.github/prompts</code> folder</li>
                <li>• YAML frontmatter for metadata (description, agent, tools)</li>
                <li>• Markdown body with instructions and guidelines</li>
                <li>• Variables: <code className="bg-gray-100 px-1 rounded">${'${selection}'}</code>, <code className="bg-gray-100 px-1 rounded">${'${file}'}</code>, <code className="bg-gray-100 px-1 rounded">${'${input:name}'}</code></li>
              </ul>
            </div>

            <div className="bg-white p-4 rounded-lg shadow border border-green-200">
              <h4 className="font-semibold text-green-900 mb-2">🚀 How to Use</h4>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>• Type <code className="bg-gray-100 px-1 rounded">/prompt-name</code> in chat to run</li>
                <li>• Add extra context after the command</li>
                <li>• Use play button in editor to test prompts</li>
                <li>• Workspace or user-scoped (synced across devices)</li>
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white p-4 rounded-lg shadow border border-green-200">
              <h4 className="font-semibold text-green-900 mb-2">💡 Example Use Cases</h4>
              <div className="flex justify-around text-sm text-gray-700">
                <div className="text-center"><span className="text-xl">⚛️</span><div>React components</div></div>
                <div className="text-center"><span className="text-xl">🔒</span><div>Security reviews</div></div>
                <div className="text-center"><span className="text-xl">📚</span><div>API docs</div></div>
              </div>
            </div>

            <div className="bg-green-100 p-4 rounded-lg flex items-center">
              <p className="text-sm italic text-green-900">
                <strong>Pro Tip:</strong> Use Markdown links to reference custom instructions rather than duplicating guidelines.
              </p>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Stop Repeating Yourself",
      subtitle: "Custom Agents in VS Code",
      content: (
        <div className="flex flex-col space-y-6 max-w-3xl mx-auto">
          <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500">
            <h3 className="text-xl font-bold text-purple-900 mb-2">What are Custom Agents?</h3>
            <p className="text-gray-700">
              Specialized AI personas tailored to specific development roles. Each agent has its own behavior, available tools, and instructions for consistent task execution.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white p-4 rounded-lg shadow border border-purple-200">
              <h4 className="font-semibold text-purple-900 mb-2">🤖 File Structure (.agent.md)</h4>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>• Stored in <code className="bg-gray-100 px-1 rounded">.github/agents</code> folder</li>
                <li>• YAML frontmatter: name, description, tools, handoffs</li>
                <li>• Markdown body with agent-specific instructions</li>
                <li>• Restrict tools per agent (e.g., read-only for planners)</li>
              </ul>
            </div>

            <div className="bg-white p-4 rounded-lg shadow border border-purple-200">
              <h4 className="font-semibold text-purple-900 mb-2">🔄 Handoffs Between Agents</h4>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>• Create guided workflows between agents</li>
                <li>• Handoff buttons appear after responses complete</li>
                <li>• Example: Planner → Implementation → Review</li>
                <li>• Pre-filled prompts with relevant context</li>
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white p-4 rounded-lg shadow border border-green-200">
              <h4 className="font-semibold text-green-900 mb-2">💡 Example Agents</h4>
              <div className="flex justify-around text-sm text-gray-700">
                <div className="text-center"><span className="text-xl">📋</span><div>Planner</div><div className="text-xs text-gray-500">Read-only</div></div>
                <div className="text-center"><span className="text-xl">🔍</span><div>Reviewer</div><div className="text-xs text-gray-500">Security</div></div>
                <div className="text-center"><span className="text-xl">🏗️</span><div>Implementer</div><div className="text-xs text-gray-500">Full access</div></div>
              </div>
            </div>

            <div className="bg-purple-100 p-4 rounded-lg flex items-center">
              <p className="text-sm italic text-purple-900">
                <strong>Pro Tip:</strong> Share agents via <code className="bg-white px-1 rounded">.github/agents</code> folder, or organization-wide through GitHub settings.
              </p>
            </div>
          </div>
        </div>
      )
    }
];
