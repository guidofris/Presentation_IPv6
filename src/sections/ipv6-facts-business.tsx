import { Globe, TrendingUp } from 'lucide-react';
import { SlideType } from './types';

export const ipv6FactsBusinessSlides: SlideType[] = [
  {
    title: '',
    subtitle: '',
    content: (
      <div className="flex flex-col items-center justify-center h-full space-y-6 px-4">
        <Globe className="w-20 h-20 text-blue-500" />
        <h1 className="text-5xl md:text-6xl font-bold text-blue-900 text-center">IPv6 Reality Check</h1>
        <p className="text-xl md:text-2xl text-gray-600 text-center max-w-2xl">
          Perception vs reality: adoption, scale, and the business pressure to move now.
        </p>
        <div className="flex space-x-2 mt-4">
          <div className="w-3 h-3 bg-blue-300 rounded-full"></div>
          <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
          <div className="w-3 h-3 bg-blue-300 rounded-full"></div>
        </div>
      </div>
    )
  },
  {
    title: 'Nobody Uses IPv6? The Data Says Otherwise',
    subtitle: 'Operational adoption is already mainstream in many networks',
    content: (
      <div className="flex flex-col space-y-3 max-w-3xl mx-auto">
        <div className="bg-blue-50 p-3 rounded-lg border-l-4 border-blue-500">
          <h3 className="text-sm font-bold text-blue-900 mb-1">Perception vs reality</h3>
          <p className="text-sm text-gray-700">
            The story has shifted from "if" to "how fast". Consumer, cloud, and mobile ecosystems
            already operate with meaningful IPv6 traffic share.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div className="bg-white p-3 rounded-lg shadow border border-blue-200">
            <h4 className="text-sm font-bold text-blue-900 mb-1">Adoption signal</h4>
            <ul className="space-y-1 text-xs text-gray-700">
              <li>• Google public IPv6 stats show long-term steady growth</li>
              <li>• Internet Society Pulse tracks IPv6 capability by region</li>
              <li>• Large content platforms already serve over IPv6 at scale</li>
            </ul>
          </div>
          <div className="bg-white p-3 rounded-lg shadow border border-blue-200">
            <h4 className="text-sm font-bold text-blue-900 mb-1">Operational impact</h4>
            <ul className="space-y-1 text-xs text-gray-700">
              <li>• IPv4 scarcity keeps increasing complexity and cost</li>
              <li>• NAT-heavy designs add troubleshooting overhead</li>
              <li>• IPv6-readiness becomes a baseline expectation</li>
            </ul>
          </div>
        </div>

        <div className="bg-gray-100 p-3 rounded-lg">
          <p className="text-xs italic text-gray-700">
            <strong>Sources:</strong>{' '}
            <a href="https://www.google.com/intl/en/ipv6/statistics.html" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Google IPv6 Statistics</a>
            {' '}and{' '}
            <a href="https://pulse.internetsociety.org/en/technologies/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Internet Society Pulse</a>
          </p>
        </div>
      </div>
    )
  },
  {
    title: 'Business Case: IPv4 Is the Expensive Path',
    subtitle: 'Address scarcity now has direct cloud cost implications',
    content: (
      <div className="flex flex-col space-y-3 max-w-3xl mx-auto">
        <div className="bg-orange-50 p-3 rounded-lg border-l-4 border-orange-500">
          <div className="flex items-center gap-2 mb-1">
            <TrendingUp className="w-4 h-4 text-orange-600" />
            <h3 className="text-sm font-bold text-orange-900">Cost pressure is real</h3>
          </div>
          <p className="text-sm text-gray-700">
            Public IPv4 addresses are no longer treated as free infrastructure in cloud platforms.
            This turns IPv6 from a "future project" into a financial optimization lever.
          </p>
        </div>

        <div className="bg-white p-3 rounded-lg shadow border border-orange-200">
          <ul className="space-y-1 text-xs text-gray-700">
            <li>• IPv4 pricing affects internet-facing workloads directly</li>
            <li>• Large estates multiply small per-IP costs into budget risk</li>
            <li>• IPv6-first designs reduce dependence on scarce IPv4 inventory</li>
          </ul>
        </div>

        <div className="bg-gray-100 p-3 rounded-lg">
          <p className="text-xs italic text-gray-700">
            <strong>Source:</strong>{' '}
            <a href="https://aws.amazon.com/blogs/aws/new-aws-public-ipv4-address-charge-public-ip-insights/" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:underline">AWS public IPv4 address charge announcement</a>
          </p>
        </div>
      </div>
    )
  }
];
