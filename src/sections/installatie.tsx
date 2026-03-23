import { Server, HardDrive, Copy, Camera, Terminal, CheckCircle, AlertTriangle } from 'lucide-react';
import { SlideType } from './types';

export const installatieSlides: SlideType[] = [
  {
    title: '',
    subtitle: '',
    content: (
      <div className="flex flex-col items-center justify-center h-full space-y-6">
        <Server className="w-20 h-20 text-blue-500" />
        <h1 className="text-5xl md:text-6xl font-bold text-blue-900 text-center">
          Installatie
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 text-center max-w-2xl px-4">
          Week 1: van virtualisatie tot een werkende server- en client-VM met Red Hat Enterprise Linux.
        </p>
        <div className="flex space-x-2 mt-4">
          <div className="w-3 h-3 bg-blue-300 rounded-full"></div>
          <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
          <div className="w-3 h-3 bg-blue-300 rounded-full"></div>
        </div>
      </div>
    )
  },
  {
    title: 'Kernvragen en doelstellingen',
    subtitle: 'Wat je na dit hoofdstuk beheerst',
    content: (
      <div className="flex flex-col space-y-6 max-w-4xl mx-auto">
        <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
          <h3 className="text-2xl font-bold text-blue-900 mb-3">Focus van dit hoofdstuk</h3>
          <p className="text-gray-700 text-lg">
            Je leert virtuele machines opzetten met VMware, RHEL installeren en je omgeving veilig voorbereiden voor de volgende weken.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white p-5 rounded-lg shadow border border-blue-200">
            <h4 className="font-semibold text-blue-900 mb-2">Kernvragen</h4>
            <ul className="space-y-2 text-gray-700">
              <li>• Wat is virtualisatie en waarom gebruiken we het?</li>
              <li>• Hoe maak je een VM in VMware?</li>
              <li>• Hoe installeer je RHEL op een VM?</li>
              <li>• Hoe maak je snapshots en clones?</li>
            </ul>
          </div>

          <div className="bg-white p-5 rounded-lg shadow border border-blue-200">
            <h4 className="font-semibold text-blue-900 mb-2">Doel</h4>
            <ul className="space-y-2 text-gray-700">
              <li>• Een werkende server-VM met RHEL</li>
              <li>• Een tweede client-VM via full clone</li>
              <li>• Snapshotstrategie om veilig te experimenteren</li>
              <li>• Correcte hostnames en basis updates</li>
            </ul>
          </div>
        </div>
      </div>
    )
  },
  {
    title: 'Installatiestappen in de praktijk',
    subtitle: 'Van lege VM naar bruikbaar systeem',
    content: (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 max-w-4xl mx-auto">
        <div className="bg-white p-5 rounded-lg shadow border border-blue-200">
          <div className="flex items-center gap-2 mb-3">
            <HardDrive className="w-5 h-5 text-blue-600" />
            <h4 className="font-semibold text-blue-900">VM aanmaken</h4>
          </div>
          <ul className="space-y-2 text-gray-700">
            <li>• Type: Typical, OS later installeren</li>
            <li>• OS: Linux, RHEL 10.1 64-bit</li>
            <li>• Schijf: 20 GB</li>
            <li>• Koppel je RHEL-ISO en controleer UEFI</li>
          </ul>
        </div>

        <div className="bg-white p-5 rounded-lg shadow border border-blue-200">
          <div className="flex items-center gap-2 mb-3">
            <Server className="w-5 h-5 text-blue-600" />
            <h4 className="font-semibold text-blue-900">RHEL installeren</h4>
          </div>
          <ul className="space-y-2 text-gray-700">
            <li>• Kies taal en toetsenbord</li>
            <li>• Verbind met Red Hat account</li>
            <li>• Softwareselectie: Server with GUI</li>
            <li>• Maak user student (administrator) aan</li>
          </ul>
        </div>

        <div className="bg-white p-5 rounded-lg shadow border border-blue-200">
          <div className="flex items-center gap-2 mb-3">
            <Camera className="w-5 h-5 text-blue-600" />
            <h4 className="font-semibold text-blue-900">Snapshot nemen</h4>
          </div>
          <ul className="space-y-2 text-gray-700">
            <li>• Rechterklik op VM</li>
            <li>• Snapshot → Take Snapshot</li>
            <li>• Geef een duidelijke naam</li>
            <li>• Gebruik Snapshot Manager om terug te keren</li>
          </ul>
        </div>

        <div className="bg-white p-5 rounded-lg shadow border border-blue-200">
          <div className="flex items-center gap-2 mb-3">
            <Copy className="w-5 h-5 text-blue-600" />
            <h4 className="font-semibold text-blue-900">Client clone</h4>
          </div>
          <ul className="space-y-2 text-gray-700">
            <li>• Zet de server-VM eerst uit</li>
            <li>• VM → Manage → Clone</li>
            <li>• Kies Create a full clone</li>
            <li>• Hostname wijzigen naar Client[Initialen]</li>
          </ul>
        </div>
      </div>
    )
  },
  {
    title: 'Checklijst na installatie',
    subtitle: 'Klaar voor week 2',
    content: (
      <div className="flex flex-col space-y-6 max-w-3xl mx-auto">
        <div className="bg-white p-6 rounded-lg shadow border border-blue-200">
          <h3 className="text-xl font-bold text-blue-900 mb-4">Voer op je server-VM uit</h3>
          <div className="bg-gray-900 text-gray-100 rounded-lg p-4 text-sm md:text-base space-y-2 font-mono overflow-x-auto">
            <p>sudo subscription-manager repos --enable codeready-builder-for-rhel-10-$(arch)-rpms</p>
            <p>sudo dnf install https://dl.fedoraproject.org/pub/epel/epel-release-latest-10.noarch.rpm</p>
            <p>sudo dnf update</p>
            <p>sudo hostnamectl hostname Server[Initialen]</p>
            <p>sudo reboot now</p>
          </div>
        </div>

        <div className="bg-blue-100 p-4 rounded-lg">
          <p className="text-sm italic text-blue-900">
            <strong>Resultaat:</strong> Je hebt twee RHEL-VM's (Server en Client) en een herstelpunt via snapshots.
          </p>
        </div>
      </div>
    )
  },
  {
    title: 'Lesflow: live voordoen + direct meedoen',
    subtitle: 'Praktische volgorde voor in de klas',
    content: (
      <div className="flex flex-col space-y-6 max-w-4xl mx-auto">
        <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
          <h3 className="text-2xl font-bold text-blue-900 mb-3">Werkvorm</h3>
          <p className="text-gray-700 text-lg">
            Elke stap eerst kort demonstreren, daarna onmiddellijk door studenten laten uitvoeren met checkpoint.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white p-5 rounded-lg shadow border border-blue-200">
            <h4 className="font-semibold text-blue-900 mb-3">Blok 1 (30 min)</h4>
            <ul className="space-y-2 text-gray-700">
              <li>• VM aanmaken en ISO koppelen</li>
              <li>• UEFI controleren</li>
              <li>• Eerste boot tot installatiescherm</li>
            </ul>
          </div>

          <div className="bg-white p-5 rounded-lg shadow border border-blue-200">
            <h4 className="font-semibold text-blue-900 mb-3">Blok 2 (40 min)</h4>
            <ul className="space-y-2 text-gray-700">
              <li>• RHEL installatie voltooien</li>
              <li>• student-account + admin rechten</li>
              <li>• Eerste login en reboot</li>
            </ul>
          </div>

          <div className="bg-white p-5 rounded-lg shadow border border-blue-200">
            <h4 className="font-semibold text-blue-900 mb-3">Blok 3 (20 min)</h4>
            <ul className="space-y-2 text-gray-700">
              <li>• Updates en hostname instellen</li>
              <li>• Snapshot maken en labelen</li>
              <li>• Full clone naar Client maken</li>
            </ul>
          </div>

          <div className="bg-white p-5 rounded-lg shadow border border-blue-200">
            <h4 className="font-semibold text-blue-900 mb-3">Checkpoint</h4>
            <ul className="space-y-2 text-gray-700">
              <li>• Server[Initialen] draait</li>
              <li>• Client[Initialen] draait</li>
              <li>• Snapshot is zichtbaar in manager</li>
            </ul>
          </div>
        </div>
      </div>
    )
  },
  {
    title: 'Verificatiecommando\'s in de klas',
    subtitle: 'Snelle controles na elke oefenstap',
    content: (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 max-w-4xl mx-auto">
        <div className="bg-white p-5 rounded-lg shadow border border-blue-200">
          <div className="flex items-center gap-2 mb-3">
            <Terminal className="w-5 h-5 text-blue-600" />
            <h4 className="font-semibold text-blue-900">Server-controle</h4>
          </div>
          <div className="bg-gray-900 text-gray-100 rounded-lg p-3 text-sm font-mono space-y-1 overflow-x-auto">
            <p>hostnamectl</p>
            <p>cat /etc/redhat-release</p>
            <p>sudo dnf repolist</p>
            <p>ip -br a</p>
          </div>
        </div>

        <div className="bg-white p-5 rounded-lg shadow border border-blue-200">
          <div className="flex items-center gap-2 mb-3">
            <CheckCircle className="w-5 h-5 text-blue-600" />
            <h4 className="font-semibold text-blue-900">Verwachte output</h4>
          </div>
          <ul className="space-y-2 text-gray-700">
            <li>• Hostname is Server[Initialen]</li>
            <li>• RHEL 10.x is geïnstalleerd</li>
            <li>• Repositories zijn beschikbaar</li>
            <li>• Netwerkinterfaces zijn actief</li>
          </ul>
        </div>

        <div className="md:col-span-2 bg-blue-100 p-4 rounded-lg">
          <p className="text-sm italic text-blue-900">
            <strong>Tip voor tempo:</strong> laat studenten telkens een screenshot nemen van output na elk checkpoint.
          </p>
        </div>
      </div>
    )
  },
  {
    title: 'Top 5 problemen + directe fix',
    subtitle: 'Troubleshooting die je live kan demonstreren',
    content: (
      <div className="flex flex-col space-y-5 max-w-4xl mx-auto">
        <div className="bg-white p-5 rounded-lg shadow border border-blue-200">
          <div className="flex items-center gap-2 mb-3">
            <AlertTriangle className="w-5 h-5 text-orange-500" />
            <h4 className="font-semibold text-blue-900">Veelvoorkomende issues</h4>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-gray-700">
            <p>• VT-x fout bij opstart → virtualisatie in BIOS activeren</p>
            <p>• Geen internet in VM → adapter op NAT/Bridged controleren</p>
            <p>• Clone faalt of is traag → VM volledig afsluiten, dan full clone</p>
            <p>• Verkeerde hostname → hostnamectl opnieuw uitvoeren + reboot</p>
            <p>• Updateproblemen → dnf clean all en opnieuw dnf update</p>
          </div>
        </div>

        <div className="bg-blue-50 p-5 rounded-lg border-l-4 border-blue-500">
          <h4 className="font-semibold text-blue-900 mb-2">Didactische aanpak</h4>
          <p className="text-gray-700">
            Laat studenten eerst zelf de oorzaak benoemen en pas daarna de fix uitvoeren. Dat bouwt troubleshooting-routine op.
          </p>
        </div>
      </div>
    )
  }
];
