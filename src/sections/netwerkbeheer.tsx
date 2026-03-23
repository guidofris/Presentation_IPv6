import { Network, Cable, TerminalSquare, Route, AlertTriangle } from 'lucide-react';
import { SlideType } from './types';

export const netwerkbeheerSlides: SlideType[] = [
  {
    title: '',
    subtitle: '',
    content: (
      <div className="flex flex-col items-center justify-center h-full space-y-6">
        <Network className="w-20 h-20 text-green-500" />
        <h1 className="text-5xl md:text-6xl font-bold text-green-900 text-center">
          Netwerkbeheer
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 text-center max-w-2xl px-4">
          Week 3: netwerkconfiguratie via GUI en command-line met focus op nmcli, routes en bonding.
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
    title: 'Kernvragen en doelstellingen',
    subtitle: 'Wat studenten praktisch moeten kunnen',
    content: (
      <div className="flex flex-col space-y-6 max-w-4xl mx-auto">
        <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
          <h3 className="text-2xl font-bold text-green-900 mb-3">Focus van dit hoofdstuk</h3>
          <p className="text-gray-700 text-lg">
            Studenten leren netwerkinterfaces beheren, switchen tussen dynamische en statische configuraties,
            en de output van netwerkcommando's correct interpreteren.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white p-5 rounded-lg shadow border border-green-200">
            <h4 className="font-semibold text-green-900 mb-2">Kernvragen</h4>
            <ul className="space-y-2 text-gray-700">
              <li>• Hoe stel je netwerk in via GUI en CLI?</li>
              <li>• Wat is het verschil tussen dynamisch en statisch?</li>
              <li>• Hoe toon en controleer je netwerkstatus?</li>
              <li>• Hoe configureer je bonding voor redundantie?</li>
            </ul>
          </div>

          <div className="bg-white p-5 rounded-lg shadow border border-green-200">
            <h4 className="font-semibold text-green-900 mb-2">Doelstellingen</h4>
            <ul className="space-y-2 text-gray-700">
              <li>• Een verbinding correct opzetten met nmcli</li>
              <li>• IP en gateway persistent configureren</li>
              <li>• Netwerkoutput analyseren met ip en nmcli</li>
              <li>• Bonding configureren en valideren</li>
            </ul>
          </div>
        </div>
      </div>
    )
  },
  {
    title: 'Praktische lesflow',
    subtitle: 'Live tonen, daarna direct laten uitvoeren',
    content: (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 max-w-4xl mx-auto">
        <div className="bg-white p-5 rounded-lg shadow border border-green-200">
          <div className="flex items-center gap-2 mb-3">
            <Cable className="w-5 h-5 text-green-600" />
            <h4 className="font-semibold text-green-900">Blok 1 - Inventarisatie</h4>
          </div>
          <ul className="space-y-2 text-gray-700">
            <li>• Interfaces detecteren</li>
            <li>• Actieve verbindingen bekijken</li>
            <li>• Startconfiguratie documenteren</li>
          </ul>
        </div>

        <div className="bg-white p-5 rounded-lg shadow border border-green-200">
          <div className="flex items-center gap-2 mb-3">
            <TerminalSquare className="w-5 h-5 text-green-600" />
            <h4 className="font-semibold text-green-900">Blok 2 - nmcli basis</h4>
          </div>
          <ul className="space-y-2 text-gray-700">
            <li>• Nieuwe connection aanmaken</li>
            <li>• Statisch IP + gateway instellen</li>
            <li>• Connection down/up en controleren</li>
          </ul>
        </div>

        <div className="bg-white p-5 rounded-lg shadow border border-green-200">
          <div className="flex items-center gap-2 mb-3">
            <Route className="w-5 h-5 text-green-600" />
            <h4 className="font-semibold text-green-900">Blok 3 - Routing</h4>
          </div>
          <ul className="space-y-2 text-gray-700">
            <li>• Extra route toevoegen via nmcli</li>
            <li>• Routingtable lezen met ip route</li>
            <li>• Connectivity testen met ping</li>
          </ul>
        </div>

        <div className="bg-white p-5 rounded-lg shadow border border-green-200">
          <div className="flex items-center gap-2 mb-3">
            <Network className="w-5 h-5 text-green-600" />
            <h4 className="font-semibold text-green-900">Blok 4 - Bonding</h4>
          </div>
          <ul className="space-y-2 text-gray-700">
            <li>• bond0 maken (active-backup)</li>
            <li>• Interfaces koppelen aan bond</li>
            <li>• Persistente werking testen na reboot</li>
          </ul>
        </div>
      </div>
    )
  },
  {
    title: 'Zoom in: Blok 1 - Inventarisatie',
    subtitle: 'Startmeting met vaste checklist en commando-volgorde',
    content: (
      <div className="flex flex-col space-y-3 max-w-4xl mx-auto">
        <div className="bg-green-50 p-3 rounded-lg border-l-4 border-green-500">
          <h3 className="text-sm font-bold text-green-900 mb-1">Doel</h3>
          <p className="text-sm text-gray-700">
            Voor je iets wijzigt: leg de beginsituatie vast zodat je na elke stap kan vergelijken.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div className="bg-white p-3 rounded-lg shadow border border-green-200">
            <h4 className="text-sm font-bold text-green-900 mb-2">Commando's</h4>
            <div className="bg-gray-900 text-gray-100 rounded-lg p-3 text-xs font-mono overflow-x-auto space-y-0.5">
              <p>nmcli device status</p>
              <p>nmcli connection show --active</p>
              <p>ip -br a</p>
              <p>ip route</p>
            </div>
          </div>

          <div className="bg-white p-3 rounded-lg shadow border border-green-200">
            <h4 className="text-sm font-bold text-green-900 mb-2">Wat moet op papier staan?</h4>
            <ul className="space-y-1 text-sm text-gray-700">
              <li>• Interface-namen (bv. ens224, ens256)</li>
              <li>• Welke verbinding is actief</li>
              <li>• Huidige IP/prefix en default gateway</li>
              <li>• Open vragen of afwijkingen voor de docent</li>
            </ul>
          </div>
        </div>

        <div className="bg-green-100 p-3 rounded-lg">
          <p className="text-xs italic text-green-900">
            <strong>Checkpoint:</strong> studenten kunnen de actieve interface en default route hardop aanwijzen.
          </p>
        </div>
      </div>
    )
  },
  {
    title: 'Zoom in: Blok 2 - nmcli basis',
    subtitle: 'Van dynamische naar statische configuratie en directe validatie',
    content: (
      <div className="flex flex-col space-y-3 max-w-4xl mx-auto">
        <div className="bg-green-50 p-3 rounded-lg border-l-4 border-green-500">
          <h3 className="text-sm font-bold text-green-900 mb-1">Werkvolgorde</h3>
          <p className="text-sm text-gray-700">
            Eerst profiel opbouwen, daarna activeren, dan onmiddellijk verifiëren met output.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div className="bg-white p-3 rounded-lg shadow border border-green-200">
            <h4 className="text-sm font-bold text-green-900 mb-2">Commando's (voorbeeld)</h4>
            <div className="bg-gray-900 text-gray-100 rounded-lg p-3 text-xs font-mono overflow-x-auto space-y-0.5">
              <p>sudo nmcli con mod ens224 ipv4.addresses 10.10.10.10/24</p>
              <p>sudo nmcli con mod ens224 ipv4.gateway 10.10.10.254</p>
              <p>sudo nmcli con mod ens224 ipv4.method manual</p>
              <p>sudo nmcli con down ens224 &amp;&amp; sudo nmcli con up ens224</p>
            </div>
          </div>

          <div className="bg-white p-3 rounded-lg shadow border border-green-200">
            <h4 className="text-sm font-bold text-green-900 mb-2">Direct controleren</h4>
            <ul className="space-y-1 text-sm text-gray-700">
              <li>• <span className="font-mono text-xs">ip -br a</span>: staat het nieuwe IP erop?</li>
              <li>• <span className="font-mono text-xs">nmcli c s ens224</span>: methode = manual?</li>
              <li>• <span className="font-mono text-xs">ip route</span>: default via juiste gateway?</li>
            </ul>
          </div>
        </div>

        <div className="bg-green-100 p-3 rounded-lg">
          <p className="text-xs italic text-green-900">
            <strong>Checkpoint:</strong> bij fout gateway eerst profiel corrigeren, daarna opnieuw down/up.
          </p>
        </div>
      </div>
    )
  },
  {
    title: 'Zoom in: Blok 3 - Routing',
    subtitle: 'Route toevoegen, tabel lezen en doelgericht testen',
    content: (
      <div className="flex flex-col space-y-3 max-w-4xl mx-auto">
        <div className="bg-green-50 p-3 rounded-lg border-l-4 border-green-500">
          <h3 className="text-sm font-bold text-green-900 mb-1">Didactische focus</h3>
          <p className="text-sm text-gray-700">
            Studenten linken elke route-regel aan een concreet doelnetwerk en next-hop.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div className="bg-white p-3 rounded-lg shadow border border-green-200">
            <h4 className="text-sm font-bold text-green-900 mb-2">Commando's</h4>
            <div className="bg-gray-900 text-gray-100 rounded-lg p-3 text-xs font-mono overflow-x-auto space-y-0.5">
              <p>sudo nmcli con mod ens224 +ipv4.routes "172.16.50.0/24 10.10.10.254"</p>
              <p>sudo nmcli con up ens224</p>
              <p>ip route</p>
              <p>ip route get 172.16.50.10</p>
              <p>ping -c 3 172.16.50.10</p>
            </div>
          </div>

          <div className="bg-white p-3 rounded-lg shadow border border-green-200">
            <h4 className="text-sm font-bold text-green-900 mb-2">Interpretatievragen</h4>
            <ul className="space-y-1 text-sm text-gray-700">
              <li>• Welke route wordt effectief gekozen?</li>
              <li>• Via welke interface vertrekt het pakket?</li>
              <li>• Is het probleem routing of bereikbaarheid?</li>
              <li>• Wat verandert als de route verwijderd wordt?</li>
            </ul>
          </div>
        </div>

        <div className="bg-green-100 p-3 rounded-lg">
          <p className="text-xs italic text-green-900">
            <strong>Checkpoint:</strong> studenten kunnen uitleggen waarom een ping faalt op basis van de routingtabel.
          </p>
        </div>
      </div>
    )
  },
  {
    title: 'Zoom in: Blok 4 - Bonding',
    subtitle: 'Redundantie opzetten en failover zichtbaar maken',
    content: (
      <div className="flex flex-col space-y-3 max-w-4xl mx-auto">
        <div className="bg-green-50 p-3 rounded-lg border-l-4 border-green-500">
          <h3 className="text-sm font-bold text-green-900 mb-1">Labdoel</h3>
          <p className="text-sm text-gray-700">
            Bond active-backup bouwen en aantonen dat verkeer blijft lopen bij linkverlies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div className="bg-white p-3 rounded-lg shadow border border-green-200">
            <h4 className="text-sm font-bold text-green-900 mb-2">Commando's</h4>
            <div className="bg-gray-900 text-gray-100 rounded-lg p-3 text-xs font-mono overflow-x-auto space-y-0.5">
              <p>sudo nmcli con add type bond ifname bond0 mode active-backup con-name bond0</p>
              <p>sudo nmcli con add type ethernet ifname ens224 master bond0 con-name bond0-slave1</p>
              <p>sudo nmcli con add type ethernet ifname ens256 master bond0 con-name bond0-slave2</p>
              <p>sudo nmcli con up bond0</p>
              <p>cat /proc/net/bonding/bond0</p>
            </div>
          </div>

          <div className="bg-white p-3 rounded-lg shadow border border-green-200">
            <h4 className="text-sm font-bold text-green-900 mb-2">Failover-test</h4>
            <ul className="space-y-1 text-sm text-gray-700">
              <li>• Start een continue ping naar gateway</li>
              <li>• Trek actieve slave los of zet interface down</li>
              <li>• Controleer actieve slave in bonding-output</li>
              <li>• Bevestig dat verbinding herstelt zonder reboot</li>
            </ul>
          </div>
        </div>

        <div className="bg-green-100 p-3 rounded-lg">
          <p className="text-xs italic text-green-900">
            <strong>Checkpoint:</strong> studenten kunnen master/slave rollen en failover-gedrag verklaren.
          </p>
        </div>
      </div>
    )
  },
  {
    title: 'Demo- en checkpoint-commando\'s',
    subtitle: 'Commandoblokken die je live kan gebruiken',
    content: (
      <div className="flex flex-col space-y-5 max-w-4xl mx-auto">
        <div className="bg-white p-6 rounded-lg shadow border border-green-200">
          <h4 className="font-semibold text-green-900 mb-3">Basiscontrole</h4>
          <div className="bg-gray-900 text-gray-100 rounded-lg p-4 text-sm font-mono overflow-x-auto space-y-1">
            <p>ip -br a</p>
            <p>nmcli c s</p>
            <p>nmcli d status</p>
            <p>ip route</p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow border border-green-200">
          <h4 className="font-semibold text-green-900 mb-3">Statische configuratie met nmcli</h4>
          <div className="bg-gray-900 text-gray-100 rounded-lg p-4 text-sm font-mono overflow-x-auto space-y-1">
            <p>sudo nmcli con mod ens224 ipv4.addresses 10.10.10.1/24</p>
            <p>sudo nmcli con mod ens224 ipv4.gateway 10.10.10.254</p>
            <p>sudo nmcli con mod ens224 ipv4.method manual</p>
            <p>sudo nmcli con up ens224</p>
          </div>
        </div>

        <div className="bg-green-100 p-4 rounded-lg">
          <p className="text-sm italic text-green-900">
            <strong>Praktijktip:</strong> laat studenten na elke stap de output screenshotten voor hun voortgangsbeoordeling.
          </p>
        </div>
      </div>
    )
  },
  {
    title: 'Troubleshooting scenario\'s',
    subtitle: 'Veelgemaakte fouten tijdens netwerkbeheer',
    content: (
      <div className="flex flex-col space-y-5 max-w-4xl mx-auto">
        <div className="bg-white p-5 rounded-lg shadow border border-green-200">
          <div className="flex items-center gap-2 mb-3">
            <AlertTriangle className="w-5 h-5 text-orange-500" />
            <h4 className="font-semibold text-green-900">Snelle diagnose</h4>
          </div>
          <ul className="space-y-2 text-gray-700">
            <li>• IP ingesteld maar geen connectie: ipv4.method staat nog op auto</li>
            <li>• Wijzigingen niet actief: connection niet opnieuw geactiveerd</li>
            <li>• Gateway fout: verkeer verlaat interface niet correct</li>
            <li>• Bonding werkt niet: slave interfaces niet correct gekoppeld</li>
          </ul>
        </div>

        <div className="bg-green-50 p-5 rounded-lg border-l-4 border-green-500">
          <h4 className="font-semibold text-green-900 mb-2">Debugvolgorde (altijd dezelfde)</h4>
          <p className="text-gray-700">
            1) nmcli c s, 2) ip -br a, 3) ip route, 4) ping gateway, 5) ping doelhost.
          </p>
        </div>
      </div>
    )
  }
];
