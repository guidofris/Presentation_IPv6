import { Binary, CheckCircle2 } from 'lucide-react';
import { SlideType } from './types';

export const ipv6AddressingSlides: SlideType[] = [
  {
    title: 'IPv6 Adressering',
    subtitle: 'Van prefixplan tot interfaceconfiguratie',
    content: (
      <div className="flex flex-col space-y-5 max-w-4xl mx-auto">
        <div className="bg-indigo-50 p-5 rounded-lg border-l-4 border-indigo-500">
          <div className="flex items-center gap-2 mb-2">
            <Binary className="w-5 h-5 text-indigo-600" />
            <h3 className="text-lg font-bold text-indigo-900">Adresplan</h3>
          </div>
          <p className="text-gray-700">
            Werk met een consistente prefixstructuur: site /48, VLAN /64, host-ID op interface-niveau.
            Vermijd ad-hoc adressen; documenteer elke toewijzing.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded-lg shadow border border-indigo-200">
            <h4 className="font-semibold text-indigo-900 mb-2">Basiskommando's</h4>
            <div className="bg-gray-900 text-gray-100 rounded-lg p-3 text-xs font-mono overflow-x-auto space-y-1">
              <p>ip -6 addr show</p>
              <p>ip -6 route show</p>
              <p>nmcli connection show</p>
              <p>nmcli -f ipv6 connection show ens224</p>
            </div>
          </div>

          <div className="bg-white p-4 rounded-lg shadow border border-indigo-200">
            <h4 className="font-semibold text-indigo-900 mb-2">Persistent met nmcli</h4>
            <div className="bg-gray-900 text-gray-100 rounded-lg p-3 text-xs font-mono overflow-x-auto space-y-1">
              <p>sudo nmcli con mod ens224 ipv6.method manual</p>
              <p>sudo nmcli con mod ens224 ipv6.addresses 2001:db8:10:10::10/64</p>
              <p>sudo nmcli con mod ens224 ipv6.gateway 2001:db8:10:10::1</p>
              <p>sudo nmcli con up ens224</p>
            </div>
          </div>
        </div>
      </div>
    )
  },
  {
    title: 'SLAAC of DHCPv6?',
    subtitle: 'Kiezen op basis van beheerdoel',
    content: (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
        <div className="bg-white p-5 rounded-lg shadow border border-green-200">
          <h3 className="font-semibold text-green-900 mb-2">SLAAC</h3>
          <ul className="space-y-2 text-gray-700">
            <li>• Snel opzetten met Router Advertisements</li>
            <li>• Minder centrale leasecontrole</li>
            <li>• Goed voor eenvoudige clientsegmenten</li>
          </ul>
        </div>

        <div className="bg-white p-5 rounded-lg shadow border border-orange-200">
          <h3 className="font-semibold text-orange-900 mb-2">DHCPv6</h3>
          <ul className="space-y-2 text-gray-700">
            <li>• Betere centrale registratie/audit</li>
            <li>• Extra componenten en beheercomplexiteit</li>
            <li>• Geschikt voor gecontroleerde enterprise netwerken</li>
          </ul>
        </div>

        <div className="md:col-span-2 bg-indigo-100 p-4 rounded-lg">
          <p className="text-sm text-indigo-900">
            <CheckCircle2 className="inline w-4 h-4 mr-1" />
            Checkpoint: je kan per subnet onderbouwen waarom je SLAAC, DHCPv6 of een combinatie gebruikt.
          </p>
        </div>
      </div>
    )
  }
];
