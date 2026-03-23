import { ShieldAlert, ListChecks, Workflow, TerminalSquare, CheckCircle, AlertTriangle } from 'lucide-react';
import { SlideType } from './types';

export const securityEnhancedLinuxSlides: SlideType[] = [
  {
    title: '',
    subtitle: '',
    content: (
      <div className="flex flex-col items-center justify-center h-full space-y-6">
        <ShieldAlert className="w-20 h-20 text-green-500" />
        <h1 className="text-5xl md:text-6xl font-bold text-green-900 text-center">SELinux</h1>
        <p className="text-xl md:text-2xl text-gray-600 text-center max-w-3xl px-4">
          Security Enhanced Linux praktisch toepassen: labels, booleans en troubleshooting op een webserver.
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
    subtitle: 'Week 8: fouten vinden en SELinux correct herstellen',
    content: (
      <div className="flex flex-col space-y-3 max-w-4xl mx-auto">
        <div className="bg-green-50 p-3 rounded-lg border-l-4 border-green-500">
          <h3 className="text-sm font-bold text-green-900 mb-1">Focus</h3>
          <p className="text-sm text-gray-700">
            Je leert waarom toegang faalt onder SELinux en hoe je dit correct oplost zonder SELinux uit te zetten.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div className="bg-white p-3 rounded-lg shadow border border-green-200">
            <h4 className="text-sm font-bold text-green-900 mb-2">Kernvragen</h4>
            <ul className="space-y-1 text-sm text-gray-700">
              <li>• Wat is SELinux en wat doen modi/types?</li>
              <li>• Hoe lees je security contexten met ls -Z en ps -eZ?</li>
              <li>• Wanneer gebruik je chcon, semanage en restorecon?</li>
              <li>• Hoe spoor je AVC-denials op met ausearch en sealert?</li>
            </ul>
          </div>

          <div className="bg-white p-3 rounded-lg shadow border border-green-200">
            <h4 className="text-sm font-bold text-green-900 mb-2">Doelstellingen</h4>
            <ul className="space-y-1 text-sm text-gray-700">
              <li>• SELinux-fouten uit logs kunnen herkennen</li>
              <li>• Contexten en booleans met gepaste commando&apos;s beheren</li>
              <li>• Tijdelijke versus persistente oplossingen onderscheiden</li>
              <li>• Een webserver na labelproblemen opnieuw werkend maken</li>
            </ul>
          </div>
        </div>
      </div>
    )
  },
  {
    title: 'Praktische flow in 3 blokken',
    subtitle: 'Van basisopstelling naar foutanalyse en herstel',
    content: (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 max-w-4xl mx-auto">
        <div className="bg-white p-3 rounded-lg shadow border border-green-200">
          <div className="flex items-center gap-2 mb-2">
            <ListChecks className="w-4 h-4 text-green-600" />
            <h4 className="text-sm font-bold text-green-900">Blok 1 - Baseline</h4>
          </div>
          <ul className="space-y-1 text-sm text-gray-700">
            <li>• Standaard httpd-installatie</li>
            <li>• Correct gelabelde index.html</li>
            <li>• Type-relatie valideren met sesearch</li>
          </ul>
        </div>

        <div className="bg-white p-3 rounded-lg shadow border border-green-200">
          <div className="flex items-center gap-2 mb-2">
            <Workflow className="w-4 h-4 text-green-600" />
            <h4 className="text-sm font-bold text-green-900">Blok 2 - Labels fixen</h4>
          </div>
          <ul className="space-y-1 text-sm text-gray-700">
            <li>• Foute context reproduceren via mv</li>
            <li>• Tijdelijk herstellen met chcon</li>
            <li>• Permanent herstellen met semanage + restorecon</li>
          </ul>
        </div>

        <div className="bg-white p-3 rounded-lg shadow border border-green-200">
          <div className="flex items-center gap-2 mb-2">
            <TerminalSquare className="w-4 h-4 text-green-600" />
            <h4 className="text-sm font-bold text-green-900">Blok 3 - Troubleshoot</h4>
          </div>
          <ul className="space-y-1 text-sm text-gray-700">
            <li>• Fout forceren met var_t</li>
            <li>• Auditlog analyseren (ausearch/sealert)</li>
            <li>• Gericht herstel met restorecon</li>
          </ul>
        </div>
      </div>
    )
  },
  {
    title: 'Zoom-in Blok 1 - Baseline opbouwen',
    subtitle: 'Werkende startsituatie met correcte SELinux-types',
    content: (
      <div className="flex flex-col space-y-3 max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div className="bg-white p-3 rounded-lg shadow border border-green-200">
            <h4 className="text-sm font-bold text-green-900 mb-2">Uitvoering</h4>
            <div className="bg-gray-900 text-gray-100 rounded-lg p-3 text-xs font-mono overflow-x-auto space-y-0.5">
              <p>sudo rm -rf /etc/httpd</p>
              <p>sudo rm -rf /var/www/html/*</p>
              <p>sudo dnf remove httpd httpd-core</p>
              <p>sudo dnf install httpd httpd-core</p>
              <p>sudo systemctl enable --now httpd</p>
              <p>sudo nano /var/www/html/index.html</p>
              <p>sudo dnf install setools-console</p>
              <p>sesearch --allow -s httpd_t -t httpd_sys_content_t -c file</p>
            </div>
          </div>

          <div className="bg-white p-3 rounded-lg shadow border border-green-200">
            <h4 className="text-sm font-bold text-green-900 mb-2">Validatie</h4>
            <div className="bg-gray-900 text-gray-100 rounded-lg p-3 text-xs font-mono overflow-x-auto space-y-0.5">
              <p>ls -Z /var/www/html/index.html</p>
              <p>ps -eZ | grep httpd</p>
              <p>systemctl status httpd --no-pager</p>
            </div>
          </div>
        </div>

        <div className="bg-green-100 p-3 rounded-lg">
          <p className="text-xs italic text-green-900">
            <strong>Checkpoint:</strong> index.html heeft type httpd_sys_content_t en het httpd-proces draait als httpd_t.
          </p>
        </div>
      </div>
    )
  },
  {
    title: 'Zoom-in Blok 2 - Contextfouten herstellen',
    subtitle: 'Van user_home_t naar een persistente web-context',
    content: (
      <div className="flex flex-col space-y-3 max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div className="bg-white p-3 rounded-lg shadow border border-green-200">
            <h4 className="text-sm font-bold text-green-900 mb-2">Uitvoering</h4>
            <div className="bg-gray-900 text-gray-100 rounded-lg p-3 text-xs font-mono overflow-x-auto space-y-0.5">
              <p>sudo rm /var/www/html/index.html</p>
              <p>nano index.html</p>
              <p>ls -Z index.html</p>
              <p>sudo mv index.html /var/www/html</p>
              <p>ls -Z /var/www/html/index.html</p>
              <p>sudo chcon -t httpd_sys_content_t /var/www/html/index.html</p>
              <p>sudo semanage fcontext -a -t httpd_sys_content_t "/var/www/html(/.*)?"</p>
              <p>sudo restorecon -Rv /var/www/html</p>
            </div>
          </div>

          <div className="bg-white p-3 rounded-lg shadow border border-green-200">
            <h4 className="text-sm font-bold text-green-900 mb-2">Validatie</h4>
            <div className="bg-gray-900 text-gray-100 rounded-lg p-3 text-xs font-mono overflow-x-auto space-y-0.5">
              <p>ls -Z /var/www/html/index.html</p>
              <p>cat /etc/selinux/targeted/contexts/files/file_contexts.local</p>
              <p>sudo cat /etc/selinux/targeted/contexts/files/file_contexts</p>
            </div>
          </div>
        </div>

        <div className="bg-green-50 p-3 rounded-lg border-l-4 border-green-500">
          <div className="flex items-center gap-2 mb-1">
            <AlertTriangle className="w-4 h-4 text-orange-500" />
            <h4 className="text-sm font-bold text-green-900">Veelvoorkomende fout uit de cursus</h4>
          </div>
          <p className="text-sm text-gray-700">
            Bij verplaatsen met mv blijft het SELinux-type user_home_t behouden. chcon werkt tijdelijk; semanage + restorecon is persistent.
          </p>
        </div>

        <div className="bg-green-100 p-3 rounded-lg">
          <p className="text-xs italic text-green-900">
            <strong>Checkpoint:</strong> /var/www/html/index.html eindigt opnieuw met type httpd_sys_content_t.
          </p>
        </div>
      </div>
    )
  },
  {
    title: 'Zoom-in Blok 3 - SELinux troubleshooten',
    subtitle: 'Auditsporen lezen en herstelcommando kiezen',
    content: (
      <div className="flex flex-col space-y-3 max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div className="bg-white p-3 rounded-lg shadow border border-green-200">
            <h4 className="text-sm font-bold text-green-900 mb-2">Fout reproduceren + logs</h4>
            <div className="bg-gray-900 text-gray-100 rounded-lg p-3 text-xs font-mono overflow-x-auto space-y-0.5">
              <p>sudo chcon -t var_t /var/www/html/index.html</p>
              <p>ls -Z /var/www/html/index.html</p>
              <p>sudo less /var/log/httpd/error_log</p>
              <p>sudo ausearch -m AVC,USER_AVC -ts recent</p>
              <p>sudo dnf install setroubleshoot</p>
              <p>sudo sealert -a /var/log/audit/audit.log</p>
            </div>
          </div>

          <div className="bg-white p-3 rounded-lg shadow border border-green-200">
            <h4 className="text-sm font-bold text-green-900 mb-2">Gericht herstel</h4>
            <div className="bg-gray-900 text-gray-100 rounded-lg p-3 text-xs font-mono overflow-x-auto space-y-0.5">
              <p>sudo /sbin/restorecon -v /var/www/html/index.html</p>
              <p>sudo chcon -t var_t /var/www/html/index.html</p>
              <p>sudo tail -n 100 /var/log/audit/audit.log &gt; ~/audit_recent.log</p>
              <p>sudo sealert -a ~/audit_recent.log</p>
              <p>sudo restorecon -v /var/www/html/index.html</p>
              <p>ls -Z /var/www/html/index.html</p>
            </div>
          </div>
        </div>

        <div className="bg-green-100 p-3 rounded-lg">
          <p className="text-xs italic text-green-900">
            <strong>Checkpoint:</strong> AVC-denial is zichtbaar in auditlog en herstel met restorecon zet label terug naar httpd_sys_content_t.
          </p>
        </div>
      </div>
    )
  },
  {
    title: 'Snelle referentie: modi en booleans',
    subtitle: 'Minimale commando&apos;s voor dagelijkse SELinux-beheeracties',
    content: (
      <div className="flex flex-col space-y-3 max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div className="bg-white p-3 rounded-lg shadow border border-green-200">
            <div className="flex items-center gap-2 mb-2">
              <Workflow className="w-4 h-4 text-green-600" />
              <h4 className="text-sm font-bold text-green-900">Modus en status</h4>
            </div>
            <div className="bg-gray-900 text-gray-100 rounded-lg p-3 text-xs font-mono overflow-x-auto space-y-0.5">
              <p>getenforce</p>
              <p>sestatus</p>
              <p>sudo setenforce 0</p>
              <p>sudo setenforce 1</p>
              <p>sudo nano /etc/sysconfig/selinux</p>
            </div>
          </div>

          <div className="bg-white p-3 rounded-lg shadow border border-green-200">
            <div className="flex items-center gap-2 mb-2">
              <CheckCircle className="w-4 h-4 text-green-600" />
              <h4 className="text-sm font-bold text-green-900">Booleans</h4>
            </div>
            <div className="bg-gray-900 text-gray-100 rounded-lg p-3 text-xs font-mono overflow-x-auto space-y-0.5">
              <p>getsebool -a</p>
              <p>sudo setsebool httpd_enable_homedirs on</p>
              <p>sudo setsebool -P httpd_enable_homedirs on</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
];
