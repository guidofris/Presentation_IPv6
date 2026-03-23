import { Route, ServerCog } from 'lucide-react';
import { SlideType } from './types';

export const ipv6RoutingServicesSlides: SlideType[] = [
  {
    title: 'Routing en bereikbaarheid',
    subtitle: 'Van default route naar doelgerichte troubleshooting',
    content: (
      <div className="flex flex-col space-y-5 max-w-4xl mx-auto">
        <div className="bg-teal-50 p-5 rounded-lg border-l-4 border-teal-500">
          <div className="flex items-center gap-2 mb-2">
            <Route className="w-5 h-5 text-teal-600" />
            <h3 className="text-lg font-bold text-teal-900">Validatieflow</h3>
          </div>
          <p className="text-gray-700">
            Controleer steeds in dezelfde volgorde: interface, default route, next hop, einddoel.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded-lg shadow border border-teal-200">
            <h4 className="font-semibold text-teal-900 mb-2">Kommando's</h4>
            <div className="bg-gray-900 text-gray-100 rounded-lg p-3 text-xs font-mono overflow-x-auto space-y-1">
              <p>ip -6 route</p>
              <p>ip -6 route get 2001:db8:20:20::50</p>
              <p>ping -6 -c 3 2001:db8:20:20::50</p>
              <p>tracepath -6 2001:db8:20:20::50</p>
            </div>
          </div>

          <div className="bg-white p-4 rounded-lg shadow border border-teal-200">
            <h4 className="font-semibold text-teal-900 mb-2">Interpretatie</h4>
            <ul className="space-y-2 text-gray-700">
              <li>• Geen default route: lokaal segment werkt, extern niet</li>
              <li>• Verkeerde next hop: asymmetrisch of timeouts</li>
              <li>• Route bestaat wel maar firewall blokkeert ICMPv6</li>
            </ul>
          </div>
        </div>
      </div>
    )
  },
  {
    title: 'IPv6 Services',
    subtitle: 'DNS en webdienst correct publiceren',
    content: (
      <div className="flex flex-col space-y-4 max-w-4xl mx-auto">
        <div className="bg-white p-4 rounded-lg shadow border border-cyan-200">
          <div className="flex items-center gap-2 mb-2">
            <ServerCog className="w-5 h-5 text-cyan-700" />
            <h3 className="font-semibold text-cyan-900">Essentiële checks</h3>
          </div>
          <div className="bg-gray-900 text-gray-100 rounded-lg p-3 text-xs font-mono overflow-x-auto space-y-1">
            <p>dig AAAA app.lab.local +short</p>
            <p>dig -x 2001:db8:10:10::20 +short</p>
            <p>curl -6 -I http://[2001:db8:10:10::20]</p>
            <p>ss -tlpn | grep :80</p>
          </div>
        </div>

        <div className="bg-cyan-50 p-4 rounded-lg border border-cyan-200">
          <ul className="space-y-2 text-sm text-gray-700">
            <li>• Publiceer AAAA-records voor IPv6-clients</li>
            <li>• Voorzie reverse PTR voor beheersbaarheid en logging</li>
            <li>• Test altijd dual-stack expliciet (IPv4 en IPv6 apart)</li>
          </ul>
        </div>
      </div>
    )
  }
];
