import { Compass, Milestone } from 'lucide-react';
import { SlideType } from './types';

export const ipv6TransitionJourneySlides: SlideType[] = [
  {
    title: '',
    subtitle: '',
    content: (
      <div className="flex flex-col items-center justify-center h-full space-y-6 px-4">
        <Compass className="w-20 h-20 text-orange-500" />
        <h1 className="text-5xl md:text-6xl font-bold text-orange-900 text-center">IPv6-Only Journey</h1>
        <p className="text-xl md:text-2xl text-gray-600 text-center max-w-2xl">
          A practical transition path from dual stack to IPv6-mostly and eventually IPv6-only.
        </p>
        <div className="flex space-x-2 mt-4">
          <div className="w-3 h-3 bg-orange-300 rounded-full"></div>
          <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
          <div className="w-3 h-3 bg-orange-300 rounded-full"></div>
        </div>
      </div>
    )
  },
  {
    title: 'Transition Stages',
    subtitle: 'IPv4-only -> Dual Stack -> IPv6-mostly -> IPv6-only',
    content: (
      <div className="flex flex-col space-y-3 max-w-3xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-2">
          <div className="bg-gray-100 p-2 rounded-lg border border-gray-300 text-center text-xs font-semibold text-gray-700">IPv4-only</div>
          <div className="bg-blue-100 p-2 rounded-lg border border-blue-300 text-center text-xs font-semibold text-blue-800">Dual Stack</div>
          <div className="bg-orange-100 p-2 rounded-lg border border-orange-300 text-center text-xs font-semibold text-orange-800">IPv6-mostly</div>
          <div className="bg-green-100 p-2 rounded-lg border border-green-300 text-center text-xs font-semibold text-green-800">IPv6-only</div>
        </div>

        <div className="bg-white p-3 rounded-lg shadow border border-orange-200">
          <ul className="space-y-1 text-xs text-gray-700">
            <li>• Do not skip assessment of applications and DNS behavior</li>
            <li>• Track IP literals and hidden IPv4 dependencies early</li>
            <li>• Measure north-south and east-west traffic paths separately</li>
          </ul>
        </div>
      </div>
    )
  },
  {
    title: 'Building Blocks for IPv6-mostly',
    subtitle: 'Use translation and policy tools intentionally, not by accident',
    content: (
      <div className="flex flex-col space-y-3 max-w-3xl mx-auto">
        <div className="bg-orange-50 p-3 rounded-lg border-l-4 border-orange-500">
          <h3 className="text-sm font-bold text-orange-900 mb-1">Typical components</h3>
          <ul className="space-y-1 text-xs text-gray-700">
            <li>• NAT64 and DNS64 for IPv6 clients reaching IPv4 destinations</li>
            <li>• Router Advertisement options for DNS and PREF64 discovery</li>
            <li>• Controlled DHCPv4 fallback where legacy apps still require it</li>
          </ul>
        </div>

        <div className="bg-white p-3 rounded-lg shadow border border-orange-200">
          <h4 className="text-sm font-bold text-orange-900 mb-1">Operational checkpoint</h4>
          <p className="text-xs text-gray-700">
            Keep rollback simple, but drive new services to IPv6-first defaults so dual-stack does not become permanent technical debt.
          </p>
        </div>

        <div className="bg-orange-100 p-3 rounded-lg">
          <p className="text-xs text-orange-900">
            <Milestone className="inline w-4 h-4 mr-1" />
            Use the journey as a staged program with measurable readiness gates per platform.
          </p>
        </div>
      </div>
    )
  }
];
