import { Calculator, Ruler } from 'lucide-react';
import { SlideType } from './types';

export const ipv6AddressingDesignSlides: SlideType[] = [
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
    )
  },
  {
    title: 'Addressing Basics You Actually Need',
    subtitle: 'Compression rules and /64 thinking reduce day-2 mistakes',
    content: (
      <div className="flex flex-col space-y-3 max-w-3xl mx-auto">
        <div className="bg-green-50 p-3 rounded-lg border-l-4 border-green-500">
          <h3 className="text-sm font-bold text-green-900 mb-1">RFC 5952 formatting discipline</h3>
          <ul className="space-y-1 text-xs text-gray-700">
            <li>• Drop leading zeros in each hextet</li>
            <li>• Use "::" once to compress the longest run of zero hextets</li>
            <li>• Keep representation consistent in docs and tooling</li>
          </ul>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div className="bg-white p-3 rounded-lg shadow border border-green-200">
            <h4 className="text-sm font-bold text-green-900 mb-1">Common prefixes</h4>
            <ul className="space-y-1 text-xs text-gray-700">
              <li>• Link-local: `fe80::/10`</li>
              <li>• Unique local: `fc00::/7`</li>
              <li>• Global unicast: `2000::/3`</li>
            </ul>
          </div>
          <div className="bg-white p-3 rounded-lg shadow border border-green-200">
            <h4 className="text-sm font-bold text-green-900 mb-1">Operational pattern</h4>
            <ul className="space-y-1 text-xs text-gray-700">
              <li>• Keep `/64` at subnet edge</li>
              <li>• Design hierarchy above `/64`</li>
              <li>• Reserve room for growth up-front</li>
            </ul>
          </div>
        </div>
      </div>
    )
  },
  {
    title: 'The 4 Rules for Address Planning',
    subtitle: 'Simple, meaningful, reserved, and aggregatable',
    content: (
      <div className="flex flex-col space-y-3 max-w-3xl mx-auto">
        <div className="bg-white p-3 rounded-lg shadow border border-green-200">
          <ol className="space-y-1 text-xs text-gray-700">
            <li><strong>1. Simple:</strong> easy to explain and troubleshoot under pressure.</li>
            <li><strong>2. Embed information:</strong> encode site/function metadata where useful.</li>
            <li><strong>3. Build in reserve:</strong> keep spare blocks for expansion and M&amp;A.</li>
            <li><strong>4. Aggregatable:</strong> summarize cleanly to protect routing scale.</li>
          </ol>
        </div>

        <div className="bg-green-100 p-3 rounded-lg">
          <p className="text-xs text-green-900">
            <Calculator className="inline w-4 h-4 mr-1" />
            Practical takeaway from the source slides: count prefixes, not hosts, and keep nibble boundaries whenever possible.
          </p>
        </div>
      </div>
    )
  }
];
