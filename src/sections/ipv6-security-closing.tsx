import { Shield, Flag } from 'lucide-react';
import { SlideType } from './types';

export const ipv6SecurityClosingSlides: SlideType[] = [
  {
    title: 'IPv6 Security Baseline',
    subtitle: 'Veiligheid zonder connectiviteit te breken',
    content: (
      <div className="flex flex-col space-y-5 max-w-4xl mx-auto">
        <div className="bg-orange-50 p-5 rounded-lg border-l-4 border-orange-500">
          <div className="flex items-center gap-2 mb-2">
            <Shield className="w-5 h-5 text-orange-600" />
            <h3 className="text-lg font-bold text-orange-900">nftables voor IPv6</h3>
          </div>
          <p className="text-gray-700">
            Blokkeer standaard inkomend verkeer, laat expliciet toe wat je nodig hebt,
            en vergeet ICMPv6 control traffic niet.
          </p>
        </div>

        <div className="bg-white p-4 rounded-lg shadow border border-orange-200">
          <h4 className="font-semibold text-orange-900 mb-2">Voorbeeldregels (concept)</h4>
          <div className="bg-gray-900 text-gray-100 rounded-lg p-3 text-xs font-mono overflow-x-auto space-y-1">
            <p>table inet filter {{ ... }}</p>
            <p>ip6 nexthdr icmpv6 icmpv6 type {{ nd-neighbor-solicit, nd-neighbor-advert, router-solicit, router-advert }} accept</p>
            <p>tcp dport {{ 22, 80, 443 }} accept</p>
            <p>ct state established,related accept</p>
          </div>
        </div>
      </div>
    )
  },
  {
    title: 'Afsluiting',
    subtitle: 'Definition of done voor jouw IPv6 platform',
    content: (
      <div className="flex flex-col space-y-5 max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white p-5 rounded-lg shadow border border-blue-200">
            <h3 className="font-semibold text-blue-900 mb-2">Technisch klaar</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• Clients krijgen correct IPv6-adres en route</li>
              <li>• DNS levert werkende AAAA en PTR records</li>
              <li>• Services zijn bereikbaar via IPv6</li>
              <li>• Firewall laat noodzakelijke control traffic toe</li>
            </ul>
          </div>

          <div className="bg-white p-5 rounded-lg shadow border border-green-200">
            <h3 className="font-semibold text-green-900 mb-2">Operationeel bewijs</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• Output van ip -6 addr en ip -6 route</li>
              <li>• Resultaten van ping -6 en tracepath -6</li>
              <li>• DNS-querys (dig AAAA en reverse)</li>
              <li>• Baseline nftables policies gedocumenteerd</li>
            </ul>
          </div>
        </div>

        <div className="bg-blue-600 text-white p-5 rounded-lg text-center">
          <Flag className="inline w-5 h-5 mr-2" />
          Volgende stap: draai deze checklist op een tweede subnet en valideer zonder spiekbrief.
        </div>
      </div>
    )
  }
];
