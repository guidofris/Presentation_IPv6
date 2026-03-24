import { Radar, Router } from 'lucide-react';
import { SlideType } from './types';

export const ipv6OperationsNdpSlides: SlideType[] = [
  {
    title: '',
    subtitle: '',
    content: (
      <div className="flex flex-col items-center justify-center h-full space-y-6 px-4">
        <Router className="w-20 h-20 text-purple-500" />
        <h1 className="text-5xl md:text-6xl font-bold text-purple-900 text-center">IPv6 Operations</h1>
        <p className="text-xl md:text-2xl text-gray-600 text-center max-w-2xl">
          Header behavior, NDP, and PMTUD essentials for stable production operations.
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
    title: 'Header and Forwarding: What Changed From IPv4',
    subtitle: 'A simpler base header with extension headers for extra functions',
    content: (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-w-3xl mx-auto">
        <div className="bg-white p-3 rounded-lg shadow border border-purple-200">
          <h3 className="text-sm font-bold text-purple-900 mb-1">Core differences</h3>
          <ul className="space-y-1 text-xs text-gray-700">
            <li>• Fixed 40-byte base header</li>
            <li>• Hop Limit replaces TTL</li>
            <li>• Next Header chains extension headers</li>
            <li>• No header checksum in base header</li>
          </ul>
        </div>

        <div className="bg-white p-3 rounded-lg shadow border border-purple-200">
          <h3 className="text-sm font-bold text-purple-900 mb-1">Why operators care</h3>
          <ul className="space-y-1 text-xs text-gray-700">
            <li>• Faster forwarding behavior in hardware pipelines</li>
            <li>• Fragmentation handled only at source</li>
            <li>• Extension-header handling must be tested in firewalls</li>
            <li>• ICMPv6 is operationally critical, not optional</li>
          </ul>
        </div>
      </div>
    )
  },
  {
    title: 'NDP and PMTUD Are Non-Negotiable',
    subtitle: 'Break these and IPv6 reliability collapses quickly',
    content: (
      <div className="flex flex-col space-y-3 max-w-3xl mx-auto">
        <div className="bg-purple-50 p-3 rounded-lg border-l-4 border-purple-500">
          <h3 className="text-sm font-bold text-purple-900 mb-1">NDP control plane</h3>
          <ul className="space-y-1 text-xs text-gray-700">
            <li>• RS/RA for router and prefix discovery</li>
            <li>• NS/NA for neighbor resolution and reachability</li>
            <li>• DAD verifies uniqueness before address use</li>
          </ul>
        </div>

        <div className="bg-white p-3 rounded-lg shadow border border-purple-200">
          <h4 className="text-sm font-bold text-purple-900 mb-1">PMTUD guardrails</h4>
          <ul className="space-y-1 text-xs text-gray-700">
            <li>• ICMPv6 Packet Too Big must be permitted end-to-end</li>
            <li>• Minimum IPv6 MTU is 1280 bytes</li>
            <li>• Black-holed PTB causes hard-to-debug application hangs</li>
          </ul>
        </div>

        <div className="bg-purple-100 p-3 rounded-lg">
          <p className="text-xs text-purple-900">
            <Radar className="inline w-4 h-4 mr-1" />
            Validation sequence: RA visibility, neighbor table correctness, then PMTUD tests with realistic payload sizes.
          </p>
        </div>
      </div>
    )
  }
];
