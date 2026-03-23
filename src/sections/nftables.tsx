import { ShieldCheck, ListChecks, Workflow, TerminalSquare, CheckCircle2, Bug } from 'lucide-react';
import { SlideType } from './types';

export const nftablesSlides: SlideType[] = [
  {
    title: '',
    subtitle: '',
    content: (
      <div className="flex flex-col items-center justify-center h-full space-y-6">
        <ShieldCheck className="w-20 h-20 text-orange-500" />
        <h1 className="text-5xl md:text-6xl font-bold text-orange-900 text-center">NFTables</h1>
        <p className="text-xl md:text-2xl text-gray-600 text-center max-w-3xl px-4">
          Linux Advanced: firewallregels opbouwen, beheren en valideren met nft op kernelniveau.
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
    title: 'Kernvragen en doelstellingen',
    subtitle: 'Wat je in dit hoofdstuk praktisch moet kunnen uitvoeren',
    content: (
      <div className="flex flex-col space-y-3 max-w-4xl mx-auto">
        <div className="bg-orange-50 p-3 rounded-lg border-l-4 border-orange-500">
          <h3 className="text-sm font-bold text-orange-900 mb-1">Kernfocus</h3>
          <p className="text-sm text-gray-700">
            Je beheert nftables rechtstreeks: ruleset lezen, regels toevoegen/verwijderen, default policy beveiligen
            en forwarding met NAT activeren.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div className="bg-white p-3 rounded-lg shadow border border-orange-200">
            <h4 className="text-sm font-bold text-orange-900 mb-2">Kernvragen</h4>
            <ul className="space-y-1 text-sm text-gray-700">
              <li>• Wat zijn nftables en hoe verschillen ze van firewalld?</li>
              <li>• Hoe lees je ruleset, table en chain uit?</li>
              <li>• Hoe stel je veilige regels en policies in?</li>
              <li>• Hoe laat je routing en internettoegang via NAT werken?</li>
            </ul>
          </div>

          <div className="bg-white p-3 rounded-lg shadow border border-orange-200">
            <h4 className="text-sm font-bold text-orange-900 mb-2">Doelstellingen</h4>
            <ul className="space-y-1 text-sm text-gray-700">
              <li>• nftables service correct activeren i.p.v. firewalld</li>
              <li>• Tabellen, chains en rules opzetten en beheren</li>
              <li>• Default drop + noodzakelijke uitzonderingen toepassen</li>
              <li>• PAT/NAT opzetten met ip_forward en postrouting chain</li>
            </ul>
          </div>
        </div>
      </div>
    )
  },
  {
    title: 'Praktische flow in 4 blokken',
    subtitle: 'Elke blok heeft een zoom-in met commands, validatie en checkpoint',
    content: (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-w-4xl mx-auto">
        <div className="bg-white p-3 rounded-lg shadow border border-orange-200">
          <div className="flex items-center gap-2 mb-2">
            <ListChecks className="w-4 h-4 text-orange-600" />
            <h4 className="text-sm font-bold text-orange-900">Blok 1 - Basisregels opbouwen</h4>
          </div>
          <ul className="space-y-1 text-sm text-gray-700">
            <li>• firewalld uit, nftables aan</li>
            <li>• table + INPUT chain maken</li>
            <li>• eerste drop-regel en persistente opslag</li>
          </ul>
        </div>

        <div className="bg-white p-3 rounded-lg shadow border border-orange-200">
          <div className="flex items-center gap-2 mb-2">
            <Workflow className="w-4 h-4 text-orange-600" />
            <h4 className="text-sm font-bold text-orange-900">Blok 2 - Beheer en veilig beleid</h4>
          </div>
          <ul className="space-y-1 text-sm text-gray-700">
            <li>• handles tonen en rules/chains/tables opruimen</li>
            <li>• policy drop instellen</li>
            <li>• established/related en loopback toelaten</li>
          </ul>
        </div>

        <div className="bg-white p-3 rounded-lg shadow border border-orange-200">
          <div className="flex items-center gap-2 mb-2">
            <TerminalSquare className="w-4 h-4 text-orange-600" />
            <h4 className="text-sm font-bold text-orange-900">Blok 3 - Diensten en ICMP-limiet</h4>
          </div>
          <ul className="space-y-1 text-sm text-gray-700">
            <li>• SSH en subnettoegang toelaten</li>
            <li>• ping-rate limiting correct toepassen</li>
            <li>• regelvolgorde fixen via nftables.conf</li>
          </ul>
        </div>

        <div className="bg-white p-3 rounded-lg shadow border border-orange-200">
          <div className="flex items-center gap-2 mb-2">
            <CheckCircle2 className="w-4 h-4 text-orange-600" />
            <h4 className="text-sm font-bold text-orange-900">Blok 4 - IP forwarding en NAT</h4>
          </div>
          <ul className="space-y-1 text-sm text-gray-700">
            <li>• net.ipv4.ip_forward activeren</li>
            <li>• nat postrouting chain met masquerade</li>
            <li>• routing valideren vanaf clientXX</li>
          </ul>
        </div>
      </div>
    )
  },
  {
    title: 'Zoom-in Blok 1 - Basisregels opbouwen',
    subtitle: 'Installeren, eerste chain/rule en persistente configuratie',
    content: (
      <div className="flex flex-col space-y-3 max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div className="bg-white p-3 rounded-lg shadow border border-orange-200">
            <h4 className="text-sm font-bold text-orange-900 mb-2">Setupcommando&apos;s</h4>
            <div className="bg-gray-900 text-gray-100 rounded-lg p-3 text-xs font-mono overflow-x-auto space-y-0.5">
              <p>sudo dnf install nftables</p>
              <p>sudo systemctl disable --now firewalld</p>
              <p>sudo systemctl enable --now nftables</p>
              <p>sudo nft add table ip filter</p>
              <p>sudo nft add chain ip filter INPUT &#123; type filter hook input priority 0 \; policy accept \; &#125;</p>
              <p>sudo nft add rule ip filter INPUT ip saddr 10.10.10.10 counter drop</p>
              <p>sudo nft list ruleset | sudo tee /etc/sysconfig/nftables.conf</p>
            </div>
          </div>

          <div className="bg-white p-3 rounded-lg shadow border border-orange-200">
            <h4 className="text-sm font-bold text-orange-900 mb-2">Validatiecommando&apos;s</h4>
            <div className="bg-gray-900 text-gray-100 rounded-lg p-3 text-xs font-mono overflow-x-auto space-y-0.5">
              <p>sudo nft list ruleset</p>
              <p>ping 10.10.10.1   # vanaf clientXX</p>
              <p>ssh student@10.10.10.10</p>
              <p>sudo cat /etc/sysconfig/nftables.conf</p>
            </div>
          </div>
        </div>

        <div className="bg-orange-100 p-3 rounded-lg">
          <p className="text-xs italic text-orange-900">
            <strong>Checkpoint:</strong> INPUT-chain bevat een drop-regel voor 10.10.10.10 en de ruleset staat ook in
            /etc/sysconfig/nftables.conf.
          </p>
        </div>
      </div>
    )
  },
  {
    title: 'Zoom-in Blok 2 - Beheer en standaardbeleid',
    subtitle: 'Regels verwijderen, ruleset flushen en veilige baseline opbouwen',
    content: (
      <div className="flex flex-col space-y-3 max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div className="bg-white p-3 rounded-lg shadow border border-orange-200">
            <h4 className="text-sm font-bold text-orange-900 mb-2">Beheercommando&apos;s</h4>
            <div className="bg-gray-900 text-gray-100 rounded-lg p-3 text-xs font-mono overflow-x-auto space-y-0.5">
              <p>sudo nft -a list chain ip filter INPUT</p>
              <p>sudo nft delete rule ip filter INPUT handle 2</p>
              <p>sudo nft flush chain ip filter INPUT</p>
              <p>sudo nft delete chain ip filter INPUT</p>
              <p>sudo nft delete table ip filter</p>
              <p>sudo nft flush ruleset</p>
              <p>sudo nft add table ip filter</p>
              <p>sudo nft add chain ip filter INPUT &#123; type filter hook input priority 0 \; policy drop \; &#125;</p>
              <p>sudo nft add rule ip filter INPUT ct state related,established accept</p>
              <p>sudo nft add rule ip filter INPUT iif lo accept</p>
            </div>
          </div>

          <div className="bg-white p-3 rounded-lg shadow border border-orange-200">
            <h4 className="text-sm font-bold text-orange-900 mb-2">Validatiecommando&apos;s</h4>
            <div className="bg-gray-900 text-gray-100 rounded-lg p-3 text-xs font-mono overflow-x-auto space-y-0.5">
              <p>sudo nft list ruleset</p>
              <p>ping www.google.be</p>
              <p>nslookup google.be</p>
            </div>
          </div>
        </div>

        <div className="bg-orange-50 p-3 rounded-lg border-l-4 border-orange-500">
          <div className="flex items-center gap-2 mb-1">
            <Bug className="w-4 h-4 text-orange-600" />
            <h4 className="text-sm font-bold text-orange-900">Veelvoorkomende fout uit de cursus</h4>
          </div>
          <p className="text-sm text-gray-700">
            Zonder loopback-regel (`iif lo accept`) falen lokale services zoals DNS-resolutie onverwacht.
          </p>
        </div>

        <div className="bg-orange-100 p-3 rounded-lg">
          <p className="text-xs italic text-orange-900">
            <strong>Checkpoint:</strong> policy staat op drop, maar established/related en loopback werken, waardoor
            uitgaand verkeer met antwoorden opnieuw functioneert.
          </p>
        </div>
      </div>
    )
  },
  {
    title: 'Zoom-in Blok 3 - SSH, subnetregels en ICMP-limit',
    subtitle: 'Regelvolgorde controleren en limieten correct afdwingen',
    content: (
      <div className="flex flex-col space-y-3 max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div className="bg-white p-3 rounded-lg shadow border border-orange-200">
            <h4 className="text-sm font-bold text-orange-900 mb-2">Commando&apos;s voor rules</h4>
            <div className="bg-gray-900 text-gray-100 rounded-lg p-3 text-xs font-mono overflow-x-auto space-y-0.5">
              <p>sudo nft add rule ip filter INPUT tcp dport 22 ct state new,established accept</p>
              <p>sudo nft add rule ip filter INPUT ip saddr 10.10.10.0/24 counter accept</p>
              <p>sudo nft add rule ip filter INPUT ip protocol icmp icmp type echo-request limit rate 1/second accept</p>
              <p>sudo nft list ruleset | sudo tee /etc/sysconfig/nftables.conf</p>
              <p>sudo nano /etc/sysconfig/nftables.conf</p>
              <p>sudo nft flush ruleset</p>
              <p>sudo nft -f /etc/sysconfig/nftables.conf</p>
            </div>
          </div>

          <div className="bg-white p-3 rounded-lg shadow border border-orange-200">
            <h4 className="text-sm font-bold text-orange-900 mb-2">Validatiecommando&apos;s</h4>
            <div className="bg-gray-900 text-gray-100 rounded-lg p-3 text-xs font-mono overflow-x-auto space-y-0.5">
              <p>sudo nft list ruleset</p>
              <p>ping -i 0.2 10.10.10.1   # vanaf clientXX</p>
              <p>ssh student@192.168.112.100</p>
            </div>
          </div>
        </div>

        <div className="bg-orange-50 p-3 rounded-lg border-l-4 border-orange-500">
          <div className="flex items-center gap-2 mb-1">
            <Bug className="w-4 h-4 text-orange-600" />
            <h4 className="text-sm font-bold text-orange-900">Veelvoorkomende fout uit de cursus</h4>
          </div>
          <p className="text-sm text-gray-700">
            Regelvolgorde is doorslaggevend: een brede `ip saddr 10.10.10.0/24 accept` boven je ICMP-limiet maakt die
            limiet ineffectief.
          </p>
        </div>

        <div className="bg-orange-100 p-3 rounded-lg">
          <p className="text-xs italic text-orange-900">
            <strong>Checkpoint:</strong> SSH werkt, subnettoegang werkt en ICMP van clientXX wordt aantoonbaar
            gerate-limiteerd.
          </p>
        </div>
      </div>
    )
  },
  {
    title: 'Zoom-in Blok 4 - IP forwarding en NAT',
    subtitle: 'Clientverkeer opnieuw routen via ServerXX met nftables',
    content: (
      <div className="flex flex-col space-y-3 max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div className="bg-white p-3 rounded-lg shadow border border-orange-200">
            <h4 className="text-sm font-bold text-orange-900 mb-2">Setupcommando&apos;s</h4>
            <div className="bg-gray-900 text-gray-100 rounded-lg p-3 text-xs font-mono overflow-x-auto space-y-0.5">
              <p>sudo sysctl -w net.ipv4.ip_forward=1</p>
              <p>sudo nano /etc/sysctl.conf</p>
              <p>net.ipv4.ip_forward = 1</p>
              <p>sudo sysctl -p</p>
              <p>sudo nano /etc/sysconfig/nftables.conf</p>
              <p># voeg table ip nat + chain postrouting + oifname "ens160" masquerade toe</p>
              <p>sudo nft flush ruleset</p>
              <p>sudo nft -f /etc/sysconfig/nftables.conf</p>
            </div>
          </div>

          <div className="bg-white p-3 rounded-lg shadow border border-orange-200">
            <h4 className="text-sm font-bold text-orange-900 mb-2">Validatiecommando&apos;s</h4>
            <div className="bg-gray-900 text-gray-100 rounded-lg p-3 text-xs font-mono overflow-x-auto space-y-0.5">
              <p>sysctl net.ipv4.ip_forward</p>
              <p>sudo nft list ruleset</p>
              <p>ping www.google.be   # vanaf clientXX</p>
            </div>
          </div>
        </div>

        <div className="bg-orange-100 p-3 rounded-lg">
          <p className="text-xs italic text-orange-900">
            <strong>Checkpoint:</strong> clientXX heeft opnieuw internettoegang via ServerXX en de postrouting NAT-regel
            staat in de actieve ruleset.
          </p>
        </div>
      </div>
    )
  }
];
