import { Shield } from 'lucide-react';
import { SlideType } from './types';

export const privacySlides: SlideType[] = [
  {
    title: "",
    subtitle: "",
    content: (
      <div className="flex flex-col items-center md:justify-center md:h-full space-y-6">
        <Shield className="w-20 h-20 text-purple-500" />
        <h1 className="text-5xl md:text-6xl font-bold text-purple-900 text-center">
          Copilot Privacy
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 text-center max-w-2xl">
          Understanding data handling and privacy controls
        </p>
        <div className="flex space-x-2 mt-4">
          <div className="w-3 h-3 bg-purple-300 rounded-full"></div>
          <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
          <div className="w-3 h-3 bg-purple-300 rounded-full"></div>
        </div>
      </div>
    )
  },
  {
    title: "Privacy by Tier",
    subtitle: "How data handling differs across Copilot plans",
    content: (
      <div className="flex flex-col space-y-4 max-w-3xl mx-auto">
        <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
          <h3 className="text-lg font-bold text-green-900 mb-2">All Tiers: No Model Training by Default</h3>
          <p className="text-gray-700">GitHub, its affiliates, and third parties <strong>will not use your data</strong> (prompts, suggestions, code snippets) for AI model training. This setting cannot be changed.</p>
        </div>

        <div className="space-y-3">
          <div className="bg-white p-4 rounded-lg shadow border border-gray-200">
            <div className="flex items-center mb-2">
              <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm font-semibold mr-2">Free</span>
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold mr-2">Pro</span>
              <span className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm font-semibold mr-2">Pro+</span>
            </div>
            <ul className="space-y-1 text-gray-700">
              <li className="flex"><span className="mr-2">•</span><span>Personal privacy settings (opt-in data sharing for product improvements)</span></li>
              <li className="flex"><span className="mr-2">•</span><span>Block suggestions matching public code</span></li>
            </ul>
          </div>

          <div className="bg-white p-4 rounded-lg shadow border border-blue-200">
            <div className="flex items-center mb-2">
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold mr-2">Business</span>
              <span className="text-green-600">+ Organization controls</span>
            </div>
            <ul className="space-y-1 text-gray-700">
              <li className="flex"><span className="mr-2">•</span><span>Organization-wide policy management</span></li>
              <li className="flex"><span className="mr-2">•</span><span><strong>Content exclusion</strong> — exclude specific files from Copilot</span></li>
            </ul>
          </div>

          <div className="bg-white p-4 rounded-lg shadow border border-purple-200">
            <div className="flex items-center mb-2">
              <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-semibold mr-2">Enterprise</span>
              <span className="text-green-600">+ Enterprise controls</span>
            </div>
            <ul className="space-y-1 text-gray-700">
              <li className="flex"><span className="mr-2">•</span><span><strong>Audit logs</strong> for all Copilot interactions</span></li>
              <li className="flex"><span className="mr-2">•</span><span>Data residency and role-based access controls</span></li>
            </ul>
          </div>
        </div>
      </div>
    )
  },
  {
    title: "Data Retention",
    subtitle: "Business & Enterprise default retention periods",
    content: (
      <div className="flex flex-col space-y-4 max-w-3xl mx-auto">
        <div className="bg-amber-50 p-4 rounded-lg border-l-4 border-amber-500">
          <p className="text-amber-900">Default settings for <strong>Business</strong> and <strong>Enterprise</strong> customers. Individual and Free/Pro tiers may differ.</p>
        </div>

        <div className="overflow-x-auto rounded-lg shadow border border-amber-200">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-amber-100">
                <th className="text-left p-4 font-semibold text-amber-900">Access Type</th>
                <th className="text-left p-4 font-semibold text-amber-900">Prompts &amp; Suggestions</th>
                <th className="text-left p-4 font-semibold text-amber-900">User Engagement</th>
                <th className="text-left p-4 font-semibold text-amber-900">Feedback</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t border-amber-200 bg-white">
                <td className="p-4 text-gray-800 font-medium">IDE (Chat &amp; Code Completions)</td>
                <td className="p-4 text-green-700 font-semibold">Not retained</td>
                <td className="p-4 text-gray-700">2 years</td>
                <td className="p-4 text-gray-700">As long as needed</td>
              </tr>
              <tr className="border-t border-amber-200 bg-amber-50/40">
                <td className="p-4 text-gray-800 font-medium">Other Copilot access</td>
                <td className="p-4 text-orange-700 font-semibold">28 days</td>
                <td className="p-4 text-gray-700">2 years</td>
                <td className="p-4 text-gray-700">As long as needed</td>
              </tr>
              <tr className="border-t border-amber-200 bg-white">
                <td className="p-4 text-gray-800 font-medium">Copilot Coding Agent</td>
                <td colSpan={3} className="p-4 text-gray-700">Session logs retained for the <strong>life of the account</strong></td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="bg-blue-50 p-3 rounded-lg">
          <p className="text-sm text-blue-900 text-center">
            <strong>Source:</strong> <a href="https://docs.github.com/en/copilot/managing-copilot/managing-copilot-as-an-individual-subscriber/managing-copilot-policies-as-an-individual-subscriber" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">GitHub Docs — Managing Copilot Policies</a>
          </p>
        </div>
      </div>
    )
  },
  {
    title: "Compliance & Certifications",
    subtitle: "GitHub Copilot's security certifications",
    content: (
      <div className="flex flex-col space-y-5 max-w-3xl mx-auto">
        <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500">
          <h3 className="text-xl font-bold text-purple-900 mb-2">Industry Certifications</h3>
          <p className="text-gray-700">GitHub Copilot maintains compliance with major industry standards.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <div className="bg-white p-5 rounded-lg shadow border border-gray-200 text-center">
            <div className="text-3xl mb-2">🛡️</div>
            <h4 className="font-bold text-gray-900">SOC 1</h4>
            <p className="text-gray-500 text-sm">Type 2</p>
          </div>
          <div className="bg-white p-5 rounded-lg shadow border border-gray-200 text-center">
            <div className="text-3xl mb-2">🛡️</div>
            <h4 className="font-bold text-gray-900">SOC 2</h4>
            <p className="text-gray-500 text-sm">Type 2</p>
          </div>
          <div className="bg-white p-5 rounded-lg shadow border border-gray-200 text-center">
            <div className="text-3xl mb-2">🛡️</div>
            <h4 className="font-bold text-gray-900">SOC 3</h4>
            <p className="text-gray-500 text-sm">Report</p>
          </div>
          <div className="bg-white p-5 rounded-lg shadow border border-gray-200 text-center">
            <div className="text-3xl mb-2">📜</div>
            <h4 className="font-bold text-gray-900">ISO 27001</h4>
            <p className="text-gray-500 text-sm">2013</p>
          </div>
          <div className="bg-white p-5 rounded-lg shadow border border-gray-200 text-center">
            <div className="text-3xl mb-2">⭐</div>
            <h4 className="font-bold text-gray-900">CSA STAR</h4>
            <p className="text-gray-500 text-sm">Level 2</p>
          </div>
          <div className="bg-white p-5 rounded-lg shadow border border-gray-200 text-center">
            <div className="text-3xl mb-2">🚗</div>
            <h4 className="font-bold text-gray-900">TISAX</h4>
            <p className="text-gray-500 text-sm">Automotive</p>
          </div>
        </div>

        <div className="bg-blue-50 p-4 rounded-lg">
          <p className="text-sm text-blue-900 text-center">
            <strong>Learn more:</strong> <a href="https://copilot.github.trust.page/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">GitHub Copilot Trust Center</a>
          </p>
        </div>
      </div>
    )
  }
];
