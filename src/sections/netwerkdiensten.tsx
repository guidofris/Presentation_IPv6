import { Globe, Server, TerminalSquare, CheckCircle, AlertTriangle } from 'lucide-react';
import { SlideType } from './types';

export const netwerkdienstenSlides: SlideType[] = [
  {
    title: '',
    subtitle: '',
    content: (
      <div className="flex flex-col items-center justify-center h-full space-y-6">
        <Globe className="w-20 h-20 text-purple-500" />
        <h1 className="text-5xl md:text-6xl font-bold text-purple-900 text-center">
          Netwerkdiensten
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 text-center max-w-2xl px-4">
          Week 4: DHCP en DNS opzetten, testen en troubleshooten in een labomgeving.
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
    title: 'Kernvragen en doelstellingen',
    subtitle: 'Wat studenten na dit hoofdstuk praktisch moeten kunnen',
    content: (
      <div className="flex flex-col space-y-3 max-w-4xl mx-auto">
        <div className="bg-purple-50 p-3 rounded-lg border-l-4 border-purple-500">
          <h3 className="text-sm font-bold text-purple-900 mb-1">Focus van dit hoofdstuk</h3>
          <p className="text-sm text-gray-700">
            Je bouwt een basis DHCP- en DNS-opstelling op één server en valideert de volledige clientflow.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div className="bg-white p-3 rounded-lg shadow border border-purple-200">
            <h4 className="text-sm font-bold text-purple-900 mb-2">Kernvragen</h4>
            <ul className="space-y-1 text-sm text-gray-700">
              <li>• Hoe deel je IP's dynamisch uit met DHCP?</li>
              <li>• Hoe maak je een interne DNS-zone?</li>
              <li>• Hoe test je leases en naamresolutie?</li>
              <li>• Welke fouten zie je het vaakst in de klas?</li>
            </ul>
          </div>

          <div className="bg-white p-3 rounded-lg shadow border border-purple-200">
            <h4 className="text-sm font-bold text-purple-900 mb-2">Doelstellingen</h4>
            <ul className="space-y-1 text-sm text-gray-700">
              <li>• `dhcpd` installeren en starten</li>
              <li>• Scope met gateway en DNS-opties configureren</li>
              <li>• `named` + forward zone werkend krijgen</li>
              <li>• Client end-to-end valideren met logs en tests</li>
            </ul>
          </div>
        </div>
      </div>
    )
  },
  {
    title: 'Praktische lesflow',
    subtitle: 'Blok per blok naar een werkende dienstketen',
    content: (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-w-4xl mx-auto">
        <div className="bg-white p-3 rounded-lg shadow border border-purple-200">
          <div className="flex items-center gap-2 mb-2">
            <Server className="w-4 h-4 text-purple-600" />
            <h4 className="text-sm font-bold text-purple-900">Blok 1 - Voorbereiding</h4>
          </div>
          <ul className="space-y-1 text-sm text-gray-700">
            <li>• Packages installeren</li>
            <li>• Firewall-services openen</li>
            <li>• Startstatus van services noteren</li>
          </ul>
        </div>

        <div className="bg-white p-3 rounded-lg shadow border border-purple-200">
          <div className="flex items-center gap-2 mb-2">
            <TerminalSquare className="w-4 h-4 text-purple-600" />
            <h4 className="text-sm font-bold text-purple-900">Blok 2 - DHCP</h4>
          </div>
          <ul className="space-y-1 text-sm text-gray-700">
            <li>• Scope in `dhcpd.conf` invullen</li>
            <li>• Service starten en valideren</li>
            <li>• Lease-uitgifte op client testen</li>
          </ul>
        </div>

        <div className="bg-white p-3 rounded-lg shadow border border-purple-200">
          <div className="flex items-center gap-2 mb-2">
            <Globe className="w-4 h-4 text-purple-600" />
            <h4 className="text-sm font-bold text-purple-900">Blok 3 - DNS</h4>
          </div>
          <ul className="space-y-1 text-sm text-gray-700">
            <li>• `named.conf` en zonefile maken</li>
            <li>• Config en zone syntax valideren</li>
            <li>• Naamresolutie met `dig` testen</li>
          </ul>
        </div>

        <div className="bg-white p-3 rounded-lg shadow border border-purple-200">
          <div className="flex items-center gap-2 mb-2">
            <CheckCircle className="w-4 h-4 text-purple-600" />
            <h4 className="text-sm font-bold text-purple-900">Blok 4 - Integratie</h4>
          </div>
          <ul className="space-y-1 text-sm text-gray-700">
            <li>• Client op DHCP zetten</li>
            <li>• Lease + DNS samen valideren</li>
            <li>• Resultaat documenteren</li>
          </ul>
        </div>
      </div>
    )
  },
  {
    title: 'Zoom in: DHCP in de praktijk',
    subtitle: 'Concrete commando-volgorde voor demo en oefening',
    content: (
      <div className="flex flex-col space-y-3 max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div className="bg-white p-3 rounded-lg shadow border border-purple-200">
            <h4 className="text-sm font-bold text-purple-900 mb-2">Server setup</h4>
            <div className="bg-gray-900 text-gray-100 rounded-lg p-3 text-xs font-mono overflow-x-auto space-y-0.5">
              <p>sudo dnf install -y dhcp-server</p>
              <p>sudo firewall-cmd --permanent --add-service=dhcp</p>
              <p>sudo firewall-cmd --reload</p>
              <p>sudo systemctl enable --now dhcpd</p>
              <p>sudo systemctl status dhcpd --no-pager</p>
            </div>
          </div>

          <div className="bg-white p-3 rounded-lg shadow border border-purple-200">
            <h4 className="text-sm font-bold text-purple-900 mb-2">Client validatie</h4>
            <div className="bg-gray-900 text-gray-100 rounded-lg p-3 text-xs font-mono overflow-x-auto space-y-0.5">
              <p>sudo nmcli con mod ens224 ipv4.method auto</p>
              <p>sudo nmcli con up ens224</p>
              <p>ip -br a</p>
              <p>cat /var/lib/NetworkManager/*.lease | tail -n 20</p>
              <p>journalctl -u dhcpd -n 30 --no-pager</p>
            </div>
          </div>
        </div>

        <div className="bg-purple-100 p-3 rounded-lg">
          <p className="text-xs italic text-purple-900">
            <strong>Checkpoint:</strong> client krijgt correct IP, gateway en DNS via lease.
          </p>
        </div>
      </div>
    )
  },
  {
    title: 'Zoom in: DNS in de praktijk',
    subtitle: 'BIND valideren met checks en gerichte queries',
    content: (
      <div className="flex flex-col space-y-3 max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div className="bg-white p-3 rounded-lg shadow border border-purple-200">
            <h4 className="text-sm font-bold text-purple-900 mb-2">Server setup</h4>
            <div className="bg-gray-900 text-gray-100 rounded-lg p-3 text-xs font-mono overflow-x-auto space-y-0.5">
              <p>sudo dnf install -y bind bind-utils</p>
              <p>sudo named-checkconf</p>
              <p>sudo named-checkzone lab.local /var/named/lab.local.zone</p>
              <p>sudo systemctl enable --now named</p>
              <p>sudo firewall-cmd --permanent --add-service=dns &amp;&amp; sudo firewall-cmd --reload</p>
            </div>
          </div>

          <div className="bg-white p-3 rounded-lg shadow border border-purple-200">
            <h4 className="text-sm font-bold text-purple-900 mb-2">Functionele tests</h4>
            <div className="bg-gray-900 text-gray-100 rounded-lg p-3 text-xs font-mono overflow-x-auto space-y-0.5">
              <p>dig @127.0.0.1 server.lab.local +short</p>
              <p>dig @127.0.0.1 -x 10.10.10.10 +short</p>
              <p>dig @10.10.10.1 client.lab.local +short</p>
              <p>resolvectl query server.lab.local</p>
              <p>journalctl -u named -n 30 --no-pager</p>
            </div>
          </div>
        </div>

        <div className="bg-purple-50 p-3 rounded-lg border-l-4 border-purple-500">
          <div className="flex items-center gap-2 mb-1">
            <AlertTriangle className="w-4 h-4 text-orange-500" />
            <h4 className="text-sm font-bold text-purple-900">Meest voorkomende fouten</h4>
          </div>
          <ul className="space-y-1 text-sm text-gray-700">
            <li>• Zonefile serial niet verhoogd na wijziging</li>
            <li>• Typo in FQDN of ontbrekende trailing dot</li>
            <li>• Firewall/SELinux blokkeert queryverkeer</li>
          </ul>
        </div>
      </div>
    )
  }
];
