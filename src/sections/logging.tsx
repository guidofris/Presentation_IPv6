import { FileText, Search, ShieldAlert, RotateCw } from 'lucide-react';
import { SlideType } from './types';

export const loggingSlides: SlideType[] = [
  {
    title: '',
    subtitle: '',
    content: (
      <div className="flex flex-col items-center justify-center h-full space-y-6">
        <FileText className="w-20 h-20 text-orange-500" />
        <h1 className="text-5xl md:text-6xl font-bold text-orange-900 text-center">
          Logging
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 text-center max-w-3xl px-4">
          Journald en rsyslog praktisch gebruiken om incidenten te vinden, valideren en bewaren.
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
    title: 'Kernvragen en leerdoelen',
    subtitle: 'Wat je in dit hoofdstuk operationeel moet kunnen',
    content: (
      <div className="flex flex-col space-y-3 max-w-4xl mx-auto">
        <div className="bg-orange-50 p-3 rounded-lg border-l-4 border-orange-500">
          <h3 className="text-sm font-bold text-orange-900 mb-1">Kernfocus</h3>
          <p className="text-sm text-gray-700">
            Je leert logs opvragen, gericht filteren, zelf events loggen en rsyslog/logrotate correct inzetten.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div className="bg-white p-3 rounded-lg shadow border border-orange-200">
            <h4 className="text-sm font-bold text-orange-900 mb-2">Kernvragen</h4>
            <ul className="space-y-1 text-sm text-gray-700">
              <li>• Waarom is logging cruciaal voor beheer en security?</li>
              <li>• Hoe vraag je logs op en filter je op service/tijd/prioriteit?</li>
              <li>• Hoe voeg je zelf een log event toe met logger?</li>
              <li>• Hoe map je facilities naar bestanden in rsyslog?</li>
            </ul>
          </div>

          <div className="bg-white p-3 rounded-lg shadow border border-orange-200">
            <h4 className="text-sm font-bold text-orange-900 mb-2">Doelstellingen</h4>
            <ul className="space-y-1 text-sm text-gray-700">
              <li>• Journald en klassieke /var/log-bestanden combineren</li>
              <li>• Prioriteiten (debug t.e.m. emerg) functioneel interpreteren</li>
              <li>• Rsyslog configureren voor authpriv op eigen logbestand</li>
              <li>• Logrotatie begrijpen en controleren in configuratie</li>
            </ul>
          </div>
        </div>
      </div>
    )
  },
  {
    title: 'Praktische flow in 4 blokken',
    subtitle: 'Elke blok heeft een zoomslide met commando’s, validatie en checkpoint',
    content: (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-w-4xl mx-auto">
        <div className="bg-white p-3 rounded-lg shadow border border-orange-200">
          <div className="flex items-center gap-2 mb-2">
            <Search className="w-4 h-4 text-orange-600" />
            <h4 className="text-sm font-bold text-orange-900">Blok 1 - Journald basis en status</h4>
          </div>
          <ul className="space-y-1 text-sm text-gray-700">
            <li>• `systemctl status systemd-journald`</li>
            <li>• `journalctl -xe` en `journalctl -e`</li>
            <li>• Kernellogs met `journalctl --dmesg`</li>
          </ul>
        </div>

        <div className="bg-white p-3 rounded-lg shadow border border-orange-200">
          <div className="flex items-center gap-2 mb-2">
            <ShieldAlert className="w-4 h-4 text-orange-600" />
            <h4 className="text-sm font-bold text-orange-900">Blok 2 - Filteren en prioriteit</h4>
          </div>
          <ul className="space-y-1 text-sm text-gray-700">
            <li>• Filter op unit, boot en tijdsvenster</li>
            <li>• Prioriteiten met `-p` (warning/crit/alert)</li>
            <li>• Zelf loggen met `logger -p crit ...`</li>
          </ul>
        </div>

        <div className="bg-white p-3 rounded-lg shadow border border-orange-200">
          <div className="flex items-center gap-2 mb-2">
            <FileText className="w-4 h-4 text-orange-600" />
            <h4 className="text-sm font-bold text-orange-900">Blok 3 - Rsyslog en tekstlogs</h4>
          </div>
          <ul className="space-y-1 text-sm text-gray-700">
            <li>• `/etc/rsyslog.conf` en `/etc/rsyslog.d/*.conf`</li>
            <li>• `auth,authpriv.* /var/log/auth.log` begrijpen</li>
            <li>• Oefening: authpriv info+ naar `/var/log/myauth`</li>
          </ul>
        </div>

        <div className="bg-white p-3 rounded-lg shadow border border-orange-200">
          <div className="flex items-center gap-2 mb-2">
            <RotateCw className="w-4 h-4 text-orange-600" />
            <h4 className="text-sm font-bold text-orange-900">Blok 4 - Logrotate en retentie</h4>
          </div>
          <ul className="space-y-1 text-sm text-gray-700">
            <li>• `/etc/logrotate.conf` lezen</li>
            <li>• `weekly`, `rotate 4`, `create` valideren</li>
            <li>• Begrijpen wanneer oudste logs verdwijnen</li>
          </ul>
        </div>
      </div>
    )
  },
  {
    title: 'Zoom in Blok 1 - Journald basis en status',
    subtitle: 'Start met servicecontrole en lees de meest recente events',
    content: (
      <div className="flex flex-col space-y-3 max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div className="bg-white p-3 rounded-lg shadow border border-orange-200">
            <h4 className="text-sm font-bold text-orange-900 mb-2">Commando\'s</h4>
            <div className="bg-gray-900 text-gray-100 rounded-lg p-3 text-xs font-mono overflow-x-auto space-y-0.5">
              <p>systemctl status systemd-journald</p>
              <p>journalctl -xe</p>
              <p>journalctl -e</p>
              <p>journalctl --dmesg -n 2 -e --no-pager</p>
              <p>journalctl --list-boots</p>
            </div>
          </div>

          <div className="bg-white p-3 rounded-lg shadow border border-orange-200">
            <h4 className="text-sm font-bold text-orange-900 mb-2">Validatie en checkpoint</h4>
            <ul className="space-y-1 text-sm text-gray-700">
              <li>• Validatie: status toont `active (running)` voor journald</li>
              <li>• Validatie: `-xe` toont extra catalogus-uitleg bij events</li>
              <li>• Checkpoint: je ziet kernel-events met `--dmesg`</li>
            </ul>
            <ul className="space-y-1 text-sm text-gray-700 mt-2">
              <li>• Foutpunt (bron): zonder adm-groep zie je niet alle events</li>
              <li>• Foutpunt (bron): geen `/var/log/journal` betekent niet-persistente logs</li>
            </ul>
          </div>
        </div>
      </div>
    )
  },
  {
    title: 'Zoom in Blok 2 - Filteren en prioriteit',
    subtitle: 'Combineer unit-, tijd- en prioriteitsfilters voor incidentanalyse',
    content: (
      <div className="flex flex-col space-y-3 max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div className="bg-white p-3 rounded-lg shadow border border-orange-200">
            <h4 className="text-sm font-bold text-orange-900 mb-2">Commando\'s</h4>
            <div className="bg-gray-900 text-gray-100 rounded-lg p-3 text-xs font-mono overflow-x-auto space-y-0.5">
              <p>sudo journalctl -u cron.service -e -n 5 --no-pager</p>
              <p>journalctl -b -2 -u cron.service -e -n 5 --no-pager</p>
              <p>journalctl --since '5 min ago' -n 2 --no-pager</p>
              <p>journalctl -b -p alert --no-pager</p>
              <p>logger -p crit 'system going down for maintenance'</p>
              <p>journalctl -xe -n 2 --no-pager</p>
            </div>
          </div>

          <div className="bg-white p-3 rounded-lg shadow border border-orange-200">
            <h4 className="text-sm font-bold text-orange-900 mb-2">Validatie en checkpoint</h4>
            <ul className="space-y-1 text-sm text-gray-700">
              <li>• Validatie: cron-events verschijnen bij filter op `-u cron.service`</li>
              <li>• Validatie: `-p alert` toont enkel kritische alarmen</li>
              <li>• Checkpoint: je eigen logger-bericht verschijnt in het journal</li>
            </ul>
            <div className="bg-orange-50 p-2 rounded border border-orange-200 mt-2">
              <p className="text-xs text-orange-900">
                Prioriteiten lopen van `debug` naar `emerg`; vanaf `warning` wordt het operationeel urgent.
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  },
  {
    title: 'Zoom in Blok 3 - Rsyslog en tekstlogs',
    subtitle: 'Koppel facilities aan bestanden en test met auth-fouten via ssh',
    content: (
      <div className="flex flex-col space-y-3 max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div className="bg-white p-3 rounded-lg shadow border border-orange-200">
            <h4 className="text-sm font-bold text-orange-900 mb-2">Commando\'s en config</h4>
            <div className="bg-gray-900 text-gray-100 rounded-lg p-3 text-xs font-mono overflow-x-auto space-y-0.5">
              <p>ls /etc/rsyslog.d/</p>
              <p>grep -n "IncludeConfig" /etc/rsyslog.conf</p>
              <p>sudo nano /etc/rsyslog.conf</p>
              <p>authpriv.info    /var/log/myauth</p>
              <p>sudo systemctl restart rsyslog</p>
              <p>sudo tail -n 20 /var/log/myauth</p>
            </div>
          </div>

          <div className="bg-white p-3 rounded-lg shadow border border-orange-200">
            <h4 className="text-sm font-bold text-orange-900 mb-2">Validatie en checkpoint</h4>
            <ul className="space-y-1 text-sm text-gray-700">
              <li>• Validatie: foutieve ssh-login vanaf client produceert authpriv-event</li>
              <li>• Validatie: event komt terecht in `/var/log/myauth`</li>
              <li>• Checkpoint: rsyslog blijft events schrijven na restart</li>
            </ul>
            <ul className="space-y-1 text-sm text-gray-700 mt-2">
              <li>• Foutpunt (bron): bestandsnamen verschillen per distro (`syslog` vs `messages`)</li>
            </ul>
          </div>
        </div>
      </div>
    )
  },
  {
    title: 'Zoom in Blok 4 - Logrotate en retentie',
    subtitle: 'Controleer rotatiebeleid zodat logging je filesysteem niet vult',
    content: (
      <div className="flex flex-col space-y-3 max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div className="bg-white p-3 rounded-lg shadow border border-orange-200">
            <h4 className="text-sm font-bold text-orange-900 mb-2">Commando\'s</h4>
            <div className="bg-gray-900 text-gray-100 rounded-lg p-3 text-xs font-mono overflow-x-auto space-y-0.5">
              <p>sudo cat /etc/logrotate.conf</p>
              <p>grep -E 'weekly|rotate|create' /etc/logrotate.conf</p>
              <p>ls -l /var/log</p>
            </div>
          </div>

          <div className="bg-white p-3 rounded-lg shadow border border-orange-200">
            <h4 className="text-sm font-bold text-orange-900 mb-2">Validatie en checkpoint</h4>
            <ul className="space-y-1 text-sm text-gray-700">
              <li>• Validatie: je vindt `weekly`, `rotate 4` en `create` in configuratie</li>
              <li>• Validatie: in `/var/log` zie je actieve logs plus oudere rotaties</li>
              <li>• Checkpoint: je kan uitleggen waarom na week 5 de oudste backup verdwijnt</li>
            </ul>
            <div className="bg-orange-50 p-2 rounded border border-orange-200 mt-2">
              <p className="text-xs text-orange-900">
                Logrotate voorkomt volle schijven door nieuwe logs te starten en oude gecontroleerd op te schonen.
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  }
];
