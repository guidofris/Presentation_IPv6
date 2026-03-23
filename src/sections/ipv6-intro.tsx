import { Globe2 } from 'lucide-react';
import { SlideType } from './types';

export const ipv6IntroSlides: SlideType[] = [
  {
    title: '',
    subtitle: '',
    content: (
      <div className="flex flex-col items-center justify-center h-full space-y-6 px-4">
        <Globe2 className="w-20 h-20 text-blue-600" />
        <h1 className="text-4xl md:text-6xl font-bold text-blue-900 text-center">IPv6 in de praktijk</h1>
        <p className="text-lg md:text-2xl text-gray-700 text-center max-w-3xl">
          Van adresplan en routing tot services, hardening en troubleshooting.
        </p>
      </div>
    )
  },
  {
    title: 'Doel van deze presentatie',
    subtitle: 'Wat je na afloop operationeel kan uitvoeren',
    content: (
      <div className="flex flex-col space-y-6 max-w-4xl mx-auto">
        <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
          <p className="text-lg text-gray-700">
            Je bouwt een volledige IPv6-ready serveromgeving op: correcte adressering, routering, naamresolutie,
            firewallregels en meetbare validatie na elke wijziging.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white p-5 rounded-lg shadow border border-blue-200">
            <h3 className="font-semibold text-blue-900 mb-2">Technische scope</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• IPv6-adressering en subnetten</li>
              <li>• SLAAC, DHCPv6 en Router Advertisements</li>
              <li>• Default route, static routes en verificatie</li>
              <li>• DNS (AAAA/PTR) en dual-stack validatie</li>
            </ul>
          </div>

          <div className="bg-white p-5 rounded-lg shadow border border-blue-200">
            <h3 className="font-semibold text-blue-900 mb-2">Resultaat</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• Je leest en verklaart IPv6-output foutloos</li>
              <li>• Je configureert persistent via nmcli</li>
              <li>• Je beveiligt met gerichte nftables-regels</li>
              <li>• Je levert bewijs met reproduceerbare checks</li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
];
