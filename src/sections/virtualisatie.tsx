import { Box, Server, Workflow, TerminalSquare, CheckCircle2, Wrench } from 'lucide-react';
import { SlideType } from './types';

export const virtualisatieSlides: SlideType[] = [
  {
    title: '',
    subtitle: '',
    content: (
      <div className="flex flex-col items-center justify-center h-full space-y-6">
        <Box className="w-20 h-20 text-purple-500" />
        <h1 className="text-5xl md:text-6xl font-bold text-purple-900 text-center">Virtualisatie</h1>
        <p className="text-xl md:text-2xl text-gray-600 text-center max-w-3xl px-4">
          Van fysieke servers naar containers met Podman op RHEL 10.
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
    subtitle: 'Wat je in dit hoofdstuk begrijpt en praktisch uitvoert',
    content: (
      <div className="flex flex-col space-y-3 max-w-4xl mx-auto">
        <div className="bg-purple-50 p-3 rounded-lg border-l-4 border-purple-500">
          <h3 className="text-sm font-bold text-purple-900 mb-1">Kernfocus</h3>
          <p className="text-sm text-gray-700">
            Je begrijpt waarom containers ontstonden, wanneer VM&apos;s nog nuttig blijven en hoe je met Podman
            containers bouwt, runt en beheert.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div className="bg-white p-3 rounded-lg shadow border border-purple-200">
            <h4 className="text-sm font-bold text-purple-900 mb-2">Kernvragen</h4>
            <ul className="space-y-1 text-sm text-gray-700">
              <li>• Waarom is virtualisatie ontstaan?</li>
              <li>• Welke overhead brengen klassieke VM&apos;s mee?</li>
              <li>• Waarom zijn containers sneller en lichter?</li>
              <li>• Waarom is Podman logisch in een RHEL-omgeving?</li>
            </ul>
          </div>

          <div className="bg-white p-3 rounded-lg shadow border border-purple-200">
            <h4 className="text-sm font-bold text-purple-900 mb-2">Doelstellingen</h4>
            <ul className="space-y-1 text-sm text-gray-700">
              <li>• VM en containerarchitectuur correct vergelijken</li>
              <li>• Nginx als container starten met poortmapping</li>
              <li>• Container lifecycle beheren met Podman</li>
              <li>• Zelf een eenvoudige image bouwen en uitvoeren</li>
            </ul>
          </div>
        </div>
      </div>
    )
  },
  {
    title: 'Van fysieke servers naar containers',
    subtitle: 'Klassiek model, hypervisorfase en virtualisatie 2.0',
    content: (
      <div className="flex flex-col space-y-3 max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          <div className="bg-white p-3 rounded-lg shadow border border-purple-200">
            <div className="flex items-center gap-2 mb-2">
              <Server className="w-4 h-4 text-purple-600" />
              <h4 className="text-sm font-bold text-purple-900">Fysieke servers</h4>
            </div>
            <ul className="space-y-1 text-xs text-gray-700">
              <li>• Vaak 1 app per server</li>
              <li>• Lage benutting (typisch 5-10%)</li>
              <li>• Hoge kost in aankoop en beheer</li>
            </ul>
          </div>

          <div className="bg-white p-3 rounded-lg shadow border border-purple-200">
            <div className="flex items-center gap-2 mb-2">
              <Workflow className="w-4 h-4 text-purple-600" />
              <h4 className="text-sm font-bold text-purple-900">VM&apos;s met hypervisor</h4>
            </div>
            <ul className="space-y-1 text-xs text-gray-700">
              <li>• Betere consolidatie op 1 host</li>
              <li>• Elke VM heeft volledig gast-OS</li>
              <li>• Nog steeds veel OS-overhead</li>
            </ul>
          </div>

          <div className="bg-white p-3 rounded-lg shadow border border-purple-200">
            <div className="flex items-center gap-2 mb-2">
              <Box className="w-4 h-4 text-purple-600" />
              <h4 className="text-sm font-bold text-purple-900">Containers</h4>
            </div>
            <ul className="space-y-1 text-xs text-gray-700">
              <li>• Gedeelde host-kernel</li>
              <li>• Snelle opstart en lage overhead</li>
              <li>• VM&apos;s blijven nuttig voor bepaalde use-cases</li>
            </ul>
          </div>
        </div>

        <div className="bg-purple-100 p-3 rounded-lg">
          <p className="text-xs italic text-purple-900">
            <strong>Takeaway:</strong> containers vervangen VM&apos;s niet volledig, maar lossen wel het "hongerige
            OS-model" op voor veel applicatieworkloads.
          </p>
        </div>
      </div>
    )
  },
  {
    title: 'Praktische flow in 3 blokken',
    subtitle: 'Elke blok heeft een zoom-in met alle commando&apos;s, validatie en checkpoint',
    content: (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 max-w-4xl mx-auto">
        <div className="bg-white p-3 rounded-lg shadow border border-purple-200">
          <div className="flex items-center gap-2 mb-2">
            <TerminalSquare className="w-4 h-4 text-purple-600" />
            <h4 className="text-sm font-bold text-purple-900">Blok 1 - Nginx starten</h4>
          </div>
          <ul className="space-y-1 text-sm text-gray-700">
            <li>• Image pullen uit registry</li>
            <li>• Host-IP bepalen</li>
            <li>• Container runnen op poort 8080</li>
          </ul>
        </div>

        <div className="bg-white p-3 rounded-lg shadow border border-purple-200">
          <div className="flex items-center gap-2 mb-2">
            <CheckCircle2 className="w-4 h-4 text-purple-600" />
            <h4 className="text-sm font-bold text-purple-900">Blok 2 - Lifecycle beheer</h4>
          </div>
          <ul className="space-y-1 text-sm text-gray-700">
            <li>• Status en logs controleren</li>
            <li>• Stoppen en opnieuw starten</li>
            <li>• Optioneel volledig verwijderen</li>
          </ul>
        </div>

        <div className="bg-white p-3 rounded-lg shadow border border-purple-200">
          <div className="flex items-center gap-2 mb-2">
            <Wrench className="w-4 h-4 text-purple-600" />
            <h4 className="text-sm font-bold text-purple-900">Blok 3 - Eigen image</h4>
          </div>
          <ul className="space-y-1 text-sm text-gray-700">
            <li>• Dockerfile aanmaken met Fedora-basis</li>
            <li>• Image bouwen met tag `hallo-test`</li>
            <li>• Container runnen en output checken</li>
          </ul>
        </div>
      </div>
    )
  },
  {
    title: 'Zoom-in Blok 1 - Nginx container opstarten',
    subtitle: 'Image, netwerkinfo en eerste run met poortmapping',
    content: (
      <div className="flex flex-col space-y-3 max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div className="bg-white p-3 rounded-lg shadow border border-purple-200">
            <h4 className="text-sm font-bold text-purple-900 mb-2">Uitvoering</h4>
            <div className="bg-gray-900 text-gray-100 rounded-lg p-3 text-xs font-mono overflow-x-auto space-y-0.5">
              <p>podman image pull docker.io/library/nginx:latest</p>
              <p>podman image ls</p>
              <p>nmcli device show ens160 | grep 'IP4.ADDRESS'</p>
              <p>podman run -d --name web -p 8080:80 nginx</p>
              <p>podman ps</p>
            </div>
          </div>

          <div className="bg-white p-3 rounded-lg shadow border border-purple-200">
            <h4 className="text-sm font-bold text-purple-900 mb-2">Validatie</h4>
            <div className="bg-gray-900 text-gray-100 rounded-lg p-3 text-xs font-mono overflow-x-auto space-y-0.5">
              <p>curl -I http://&lt;HOST-IP&gt;:8080</p>
              <p>podman logs web</p>
              <p>podman inspect web | grep -A3 'PortBindings'</p>
            </div>
          </div>
        </div>

        <div className="bg-purple-50 p-3 rounded-lg border-l-4 border-purple-500">
          <p className="text-xs text-gray-700">
            <strong>Veelvoorkomend knelpunt uit de cursus:</strong> kies een vrije hostpoort (bijv. 8080) en gebruik
            het correcte IPv4-adres zonder `/prefix`.
          </p>
        </div>

        <div className="bg-purple-100 p-3 rounded-lg">
          <p className="text-xs italic text-purple-900">
            <strong>Checkpoint:</strong> nginx draait detached, is zichtbaar in `podman ps` en antwoordt op
            `http://&lt;HOST-IP&gt;:8080`.
          </p>
        </div>
      </div>
    )
  },
  {
    title: 'Zoom-in Blok 2 - Lifecycle en opruimen',
    subtitle: 'Containerstatus, logs, stop/start en clean restart',
    content: (
      <div className="flex flex-col space-y-3 max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div className="bg-white p-3 rounded-lg shadow border border-purple-200">
            <h4 className="text-sm font-bold text-purple-900 mb-2">Uitvoering</h4>
            <div className="bg-gray-900 text-gray-100 rounded-lg p-3 text-xs font-mono overflow-x-auto space-y-0.5">
              <p>podman ps -a</p>
              <p>podman logs web</p>
              <p>podman stop web</p>
              <p>podman start web</p>
              <p>podman rm -f web</p>
              <p>podman run -d --name web -p 8080:80 nginx</p>
            </div>
          </div>

          <div className="bg-white p-3 rounded-lg shadow border border-purple-200">
            <h4 className="text-sm font-bold text-purple-900 mb-2">Validatie</h4>
            <div className="bg-gray-900 text-gray-100 rounded-lg p-3 text-xs font-mono overflow-x-auto space-y-0.5">
              <p>podman ps -a</p>
              <p>curl -I http://&lt;HOST-IP&gt;:8080</p>
            </div>
          </div>
        </div>

        <div className="bg-purple-100 p-3 rounded-lg">
          <p className="text-xs italic text-purple-900">
            <strong>Checkpoint:</strong> je kunt de container veilig stoppen, herstarten en opnieuw opbouwen zonder
            configuratieverwarring.
          </p>
        </div>
      </div>
    )
  },
  {
    title: 'Zoom-in Blok 3 - Eigen image bouwen en draaien',
    subtitle: 'Van Dockerfile naar uitvoerbare container',
    content: (
      <div className="flex flex-col space-y-3 max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div className="bg-white p-3 rounded-lg shadow border border-purple-200">
            <h4 className="text-sm font-bold text-purple-900 mb-2">Uitvoering</h4>
            <div className="bg-gray-900 text-gray-100 rounded-lg p-3 text-xs font-mono overflow-x-auto space-y-0.5">
              <p>mkdir docker-linux</p>
              <p>cd docker-linux</p>
              <p>touch Dockerfile</p>
              <p>podman build -t hallo-test .</p>
              <p>podman images</p>
              <p>cd</p>
              <p>podman run hallo-test</p>
            </div>
          </div>

          <div className="bg-white p-3 rounded-lg shadow border border-purple-200">
            <h4 className="text-sm font-bold text-purple-900 mb-2">Dockerfile inhoud + validatie</h4>
            <div className="bg-gray-900 text-gray-100 rounded-lg p-3 text-xs font-mono overflow-x-auto space-y-0.5">
              <p>FROM fedora:latest</p>
              <p>WORKDIR /app</p>
              <p>CMD ["echo", "Hello, World"]</p>
              <p>podman image ls | grep hallo-test</p>
              <p>podman run --rm hallo-test</p>
            </div>
          </div>
        </div>

        <div className="bg-purple-100 p-3 rounded-lg">
          <p className="text-xs italic text-purple-900">
            <strong>Checkpoint:</strong> `hallo-test` bestaat lokaal en `podman run` geeft exact `Hello, World` terug.
          </p>
        </div>
      </div>
    )
  }
];
