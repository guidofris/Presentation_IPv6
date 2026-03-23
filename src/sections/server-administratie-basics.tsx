import { Wrench, Settings2, Terminal, ShieldCheck, KeyRound, Activity, Flag } from 'lucide-react';
import { SlideType } from './types';

export const serverAdministratieBasicsSlides: SlideType[] = [
  {
    title: '',
    subtitle: '',
    content: (
      <div className="flex flex-col items-center justify-center h-full space-y-6">
        <Wrench className="w-20 h-20 text-orange-500" />
        <h1 className="text-5xl md:text-6xl font-bold text-orange-900 text-center">
          Serveradministratie basics
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 text-center max-w-3xl px-4">
          Daemons, systemd, veilige toegang en de 5 praktische stappen voor serverbeheer.
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
    subtitle: 'Wat je na dit hoofdstuk operationeel moet kunnen',
    content: (
      <div className="flex flex-col space-y-3 max-w-4xl mx-auto">
        <div className="bg-orange-50 p-3 rounded-lg border-l-4 border-orange-500">
          <h3 className="text-sm font-bold text-orange-900 mb-1">Focus</h3>
          <p className="text-sm text-gray-700">
            Je beheert services end-to-end: installeren, configureren, starten, beveiligen en monitoren.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div className="bg-white p-3 rounded-lg shadow border border-orange-200">
            <h4 className="text-sm font-bold text-orange-900 mb-2">Kernvragen</h4>
            <ul className="space-y-1 text-sm text-gray-700">
              <li>• Wat is een daemon en wat doet systemd als PID 1?</li>
              <li>• Hoe gebruik je systemctl voor start/stop/enable/status?</li>
              <li>• Hoe zet je veilige SSH-communicatie op met sleutels?</li>
              <li>• Hoe koppel je runlevels aan systemd targets?</li>
            </ul>
          </div>

          <div className="bg-white p-3 rounded-lg shadow border border-orange-200">
            <h4 className="text-sm font-bold text-orange-900 mb-2">Doelstellingen</h4>
            <ul className="space-y-1 text-sm text-gray-700">
              <li>• De 5 stappen serverbeheer benoemen en toepassen</li>
              <li>• Services veilig beheren en laten opstarten bij boot</li>
              <li>• Root SSH-login beperken en firewallregels toepassen</li>
              <li>• Status, logs en basisintegriteit controleren</li>
            </ul>
          </div>
        </div>
      </div>
    )
  },
  {
    title: 'Daemon, init en systemd',
    subtitle: 'Waarom servicebeheer centraal staat in Linux serverbeheer',
    content: (
      <div className="flex flex-col space-y-3 max-w-4xl mx-auto">
        <div className="bg-orange-50 p-3 rounded-lg border-l-4 border-orange-500">
          <h3 className="text-sm font-bold text-orange-900 mb-1">Kernidee</h3>
          <p className="text-sm text-gray-700">
            systemd is de init-daemon (PID 1) en beheert services, dependencies en opstartgedrag.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div className="bg-white p-3 rounded-lg shadow border border-orange-200">
            <h4 className="text-sm font-bold text-orange-900 mb-2">Controleer init-proces</h4>
            <div className="bg-gray-900 text-gray-100 rounded-lg p-3 text-xs font-mono overflow-x-auto space-y-0.5">
              <p>ps -e | head</p>
              <p>systemctl list-units | grep .service</p>
              <p>systemctl list-units | grep .target</p>
            </div>
          </div>

          <div className="bg-white p-3 rounded-lg shadow border border-orange-200">
            <h4 className="text-sm font-bold text-orange-900 mb-2">Interpretatie</h4>
            <ul className="space-y-1 text-sm text-gray-700">
              <li>• PID 1 moet systemd zijn</li>
              <li>• .service = individuele dienst</li>
              <li>• .target = groep services/systeemtoestand</li>
              <li>• Services draaien idealiter met beperkte rechten</li>
            </ul>
          </div>
        </div>

        <div className="bg-orange-100 p-3 rounded-lg">
          <p className="text-xs italic text-orange-900">
            <strong>Checkpoint:</strong> je kan uitleggen waarom daemon-processen geen root hoeven te zijn.
          </p>
        </div>
      </div>
    )
  },
  {
    title: 'De 5 stappen van serverbeheer',
    subtitle: 'Compacte werkvolgorde voor elk servertype',
    content: (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-w-4xl mx-auto">
        <div className="bg-white p-3 rounded-lg shadow border border-orange-200">
          <div className="flex items-center gap-2 mb-2">
            <Settings2 className="w-4 h-4 text-orange-600" />
            <h4 className="text-sm font-bold text-orange-900">1. Installeren</h4>
          </div>
          <p className="text-sm text-gray-700">Pakket installeren (bv. apache2/httpd, cups, rsyslog, mariadb).</p>
        </div>

        <div className="bg-white p-3 rounded-lg shadow border border-orange-200">
          <div className="flex items-center gap-2 mb-2">
            <Terminal className="w-4 h-4 text-orange-600" />
            <h4 className="text-sm font-bold text-orange-900">2. Configureren</h4>
          </div>
          <p className="text-sm text-gray-700">Configuratie in /etc aanpassen en wijzigingen controleren.</p>
        </div>

        <div className="bg-white p-3 rounded-lg shadow border border-orange-200">
          <div className="flex items-center gap-2 mb-2">
            <Flag className="w-4 h-4 text-orange-600" />
            <h4 className="text-sm font-bold text-orange-900">3. Starten</h4>
          </div>
          <p className="text-sm text-gray-700">Service starten, status lezen en opstart bij boot instellen.</p>
        </div>

        <div className="bg-white p-3 rounded-lg shadow border border-orange-200">
          <div className="flex items-center gap-2 mb-2">
            <ShieldCheck className="w-4 h-4 text-orange-600" />
            <h4 className="text-sm font-bold text-orange-900">4. Beveiligen</h4>
          </div>
          <p className="text-sm text-gray-700">SSH hardenen, firewallregels toepassen en SELinux respecteren.</p>
        </div>

        <div className="bg-white p-3 rounded-lg shadow border border-orange-200 md:col-span-2">
          <div className="flex items-center gap-2 mb-2">
            <Activity className="w-4 h-4 text-orange-600" />
            <h4 className="text-sm font-bold text-orange-900">5. Monitoren</h4>
          </div>
          <p className="text-sm text-gray-700">Volg logs, updates en integriteit op zodat problemen vroeg zichtbaar zijn.</p>
        </div>
      </div>
    )
  },
  {
    title: 'Praktijkcommando\'s: stap 1 t.e.m. 3',
    subtitle: 'Installeren, configureren en service lifecycle valideren',
    content: (
      <div className="flex flex-col space-y-3 max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div className="bg-white p-3 rounded-lg shadow border border-orange-200">
            <h4 className="text-sm font-bold text-orange-900 mb-2">RHEL/Rocky/Alma</h4>
            <div className="bg-gray-900 text-gray-100 rounded-lg p-3 text-xs font-mono overflow-x-auto space-y-0.5">
              <p>sudo dnf install httpd</p>
              <p>sudo nano /etc/httpd/conf/httpd.conf</p>
              <p>sudo systemctl enable --now httpd</p>
              <p>sudo systemctl status httpd</p>
            </div>
          </div>

          <div className="bg-white p-3 rounded-lg shadow border border-orange-200">
            <h4 className="text-sm font-bold text-orange-900 mb-2">Debian/Ubuntu</h4>
            <div className="bg-gray-900 text-gray-100 rounded-lg p-3 text-xs font-mono overflow-x-auto space-y-0.5">
              <p>sudo apt install apache2</p>
              <p>sudo nano /etc/apache2/apache2.conf</p>
              <p>sudo systemctl enable --now apache2</p>
              <p>sudo systemctl status apache2</p>
            </div>
          </div>
        </div>

        <div className="bg-orange-50 p-3 rounded-lg border-l-4 border-orange-500">
          <h4 className="text-sm font-bold text-orange-900 mb-1">Validaties</h4>
          <ul className="space-y-1 text-sm text-gray-700">
            <li>• `systemctl status` toont `Active: active (running)`</li>
            <li>• `systemctl is-enabled &lt;service&gt;` geeft `enabled`</li>
            <li>• Configuratiebestand bestaat in `/etc` voor de gekozen distro</li>
          </ul>
        </div>

        <div className="bg-orange-100 p-3 rounded-lg">
          <p className="text-xs italic text-orange-900">
            <strong>Checkpoint:</strong> studenten kunnen het verschil tussen `start` en `enable` correct uitleggen.
          </p>
        </div>
      </div>
    )
  },
  {
    title: 'Praktijkcommando\'s: stap 4 en 5',
    subtitle: 'Beveiligen en monitoren met directe checks',
    content: (
      <div className="flex flex-col space-y-3 max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div className="bg-white p-3 rounded-lg shadow border border-orange-200">
            <h4 className="text-sm font-bold text-orange-900 mb-2">Beveiliging</h4>
            <div className="bg-gray-900 text-gray-100 rounded-lg p-3 text-xs font-mono overflow-x-auto space-y-0.5">
              <p>sudo nano /etc/ssh/sshd_config</p>
              <p>PermitRootLogin no</p>
              <p>sudo systemctl restart sshd</p>
              <p>sudo firewall-cmd --permanent --add-service=http</p>
              <p>sudo firewall-cmd --reload</p>
              <p>sudo setenforce 1</p>
            </div>
          </div>

          <div className="bg-white p-3 rounded-lg shadow border border-orange-200">
            <h4 className="text-sm font-bold text-orange-900 mb-2">Monitoring</h4>
            <div className="bg-gray-900 text-gray-100 rounded-lg p-3 text-xs font-mono overflow-x-auto space-y-0.5">
              <p>sudo tail -f /var/log/messages</p>
              <p>sudo tail -f /var/log/httpd/access_log</p>
              <p>sudo tail -f /var/log/apache2/access.log</p>
              <p>sudo dnf update</p>
              <p>sudo apt-get update &amp;&amp; sudo apt-get upgrade</p>
            </div>
          </div>
        </div>

        <div className="bg-orange-100 p-3 rounded-lg">
          <p className="text-xs italic text-orange-900">
            <strong>Checkpoint:</strong> na aanpassing van sshd_config eerst syntax/inhoud checken, dan pas herstarten.
          </p>
        </div>
      </div>
    )
  },
  {
    title: 'Veilige communicatie: SSH-sleutels',
    subtitle: 'Wachtwoordloos inloggen met asymmetrische sleutels',
    content: (
      <div className="flex flex-col space-y-3 max-w-4xl mx-auto">
        <div className="bg-orange-50 p-3 rounded-lg border-l-4 border-orange-500">
          <h3 className="text-sm font-bold text-orange-900 mb-1">Standaardflow</h3>
          <p className="text-sm text-gray-700">
            Genereer lokaal een sleutelpaar, kopieer de publieke sleutel naar de server en test login.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div className="bg-white p-3 rounded-lg shadow border border-orange-200">
            <div className="flex items-center gap-2 mb-2">
              <KeyRound className="w-4 h-4 text-orange-600" />
              <h4 className="text-sm font-bold text-orange-900">Commando\'s</h4>
            </div>
            <div className="bg-gray-900 text-gray-100 rounded-lg p-3 text-xs font-mono overflow-x-auto space-y-0.5">
              <p>ssh-keygen -t rsa -b 4096</p>
              <p>ssh-copy-id student@jouw-server-IP</p>
              <p>ssh student@jouw-server-IP</p>
              <p>ssh student@jouw-server-IP ls</p>
            </div>
          </div>

          <div className="bg-white p-3 rounded-lg shadow border border-orange-200">
            <h4 className="text-sm font-bold text-orange-900 mb-2">Validaties</h4>
            <ul className="space-y-1 text-sm text-gray-700">
              <li>• Private key blijft lokaal in `~/.ssh/`</li>
              <li>• Login werkt zonder wachtwoordprompt</li>
              <li>• Remote command via SSH geeft directe output</li>
              <li>• Root SSH-login blijft uitgeschakeld</li>
            </ul>
          </div>
        </div>
      </div>
    )
  },
  {
    title: 'Runlevels, targets en defaults',
    subtitle: 'Van SysVinit-compatibiliteit naar moderne systemd targets',
    content: (
      <div className="flex flex-col space-y-3 max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div className="bg-white p-3 rounded-lg shadow border border-orange-200">
            <h4 className="text-sm font-bold text-orange-900 mb-2">Runlevel mapping</h4>
            <ul className="space-y-1 text-sm text-gray-700">
              <li>• 0 → poweroff.target</li>
              <li>• 1 → rescue.target</li>
              <li>• 2/3/4 → multi-user.target</li>
              <li>• 5 → graphical.target</li>
              <li>• 6 → reboot.target</li>
            </ul>
          </div>

          <div className="bg-white p-3 rounded-lg shadow border border-orange-200">
            <h4 className="text-sm font-bold text-orange-900 mb-2">Commando\'s</h4>
            <div className="bg-gray-900 text-gray-100 rounded-lg p-3 text-xs font-mono overflow-x-auto space-y-0.5">
              <p>runlevel</p>
              <p>systemctl get-default</p>
              <p>sudo systemctl isolate multi-user.target</p>
              <p>sudo systemctl isolate graphical.target</p>
              <p>sudo systemctl set-default multi-user.target</p>
            </div>
          </div>
        </div>

        <div className="bg-orange-100 p-3 rounded-lg">
          <p className="text-xs italic text-orange-900">
            <strong>Checkpoint:</strong> je kan het verschil tussen `isolate` (nu) en `set-default` (volgende boot) uitleggen.
          </p>
        </div>
      </div>
    )
  }
];