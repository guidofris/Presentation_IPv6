import { AppWindow, CheckCircle2, Database, ShieldCheck } from 'lucide-react';
import { SlideType } from './types';

export const lampserversSlides: SlideType[] = [
  {
    title: '',
    subtitle: '',
    content: (
      <div className="flex flex-col items-center justify-center h-full space-y-6">
        <Database className="w-20 h-20 text-blue-500" />
        <h1 className="text-5xl md:text-6xl font-bold text-blue-900 text-center">
          LAMP-servers
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 text-center max-w-3xl px-4">
          Apache, MariaDB, PHP en Nextcloud praktisch opzetten in een uitvoerbare flow.
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
    title: 'Kernvragen en leerdoelen',
    subtitle: 'Wat je na dit hoofdstuk operationeel moet kunnen',
    content: (
      <div className="flex flex-col space-y-3 max-w-4xl mx-auto">
        <div className="bg-blue-50 p-3 rounded-lg border-l-4 border-blue-500">
          <h3 className="text-sm font-bold text-blue-900 mb-1">Kernfocus</h3>
          <p className="text-sm text-gray-700">
            Je bouwt een LAMP-stack op Linux en koppelt die aan een werkende Nextcloud-installatie.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div className="bg-white p-3 rounded-lg shadow border border-blue-200">
            <h4 className="text-sm font-bold text-blue-900 mb-2">Kernvragen</h4>
            <ul className="space-y-1 text-sm text-gray-700">
              <li>• Wat betekent LAMP en welke alternatieven bestaan er?</li>
              <li>• Hoe zet je Apache, MariaDB en PHP correct op?</li>
              <li>• Hoe verbind je Nextcloud met de database?</li>
              <li>• Welke SELinux-instellingen zijn nodig in productie?</li>
            </ul>
          </div>

          <div className="bg-white p-3 rounded-lg shadow border border-blue-200">
            <h4 className="text-sm font-bold text-blue-900 mb-2">Doelstellingen</h4>
            <ul className="space-y-1 text-sm text-gray-700">
              <li>• Een LAMP-server zelfstandig uitrollen</li>
              <li>• Nextcloud koppelen aan MariaDB met juiste credentials</li>
              <li>• De installatie functioneel testen in intern netwerk</li>
              <li>• SELinux tijdelijk verlagen en nadien correct hardenen</li>
            </ul>
          </div>
        </div>
      </div>
    )
  },
  {
    title: 'Praktische flow in 4 blokken',
    subtitle: 'Elke blok heeft een eigen zoomslide met volledige commandoreeks',
    content: (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-w-4xl mx-auto">
        <div className="bg-white p-3 rounded-lg shadow border border-blue-200">
          <div className="flex items-center gap-2 mb-2">
            <AppWindow className="w-4 h-4 text-blue-600" />
            <h4 className="text-sm font-bold text-blue-900">Blok 1 - Apache + Nextcloud webmap</h4>
          </div>
          <ul className="space-y-1 text-sm text-gray-700">
            <li>• `httpd` installeren en activeren</li>
            <li>• Firewall voor HTTP openen</li>
            <li>• Nextcloud downloaden, uitpakken en vhost plaatsen</li>
          </ul>
        </div>

        <div className="bg-white p-3 rounded-lg shadow border border-blue-200">
          <div className="flex items-center gap-2 mb-2">
            <Database className="w-4 h-4 text-blue-600" />
            <h4 className="text-sm font-bold text-blue-900">Blok 2 - MariaDB configuratie</h4>
          </div>
          <ul className="space-y-1 text-sm text-gray-700">
            <li>• Conflicterende MySQL-pakketten checken/verwijderen</li>
            <li>• MariaDB starten en beveiligen</li>
            <li>• Database, user en privileges voor Nextcloud maken</li>
          </ul>
        </div>

        <div className="bg-white p-3 rounded-lg shadow border border-blue-200">
          <div className="flex items-center gap-2 mb-2">
            <CheckCircle2 className="w-4 h-4 text-blue-600" />
            <h4 className="text-sm font-bold text-blue-900">Blok 3 - PHP runtime toevoegen</h4>
          </div>
          <ul className="space-y-1 text-sm text-gray-700">
            <li>• EPEL toevoegen (voor php-imagick)</li>
            <li>• PHP-modules installeren</li>
            <li>• Apache herstarten en installatie starten</li>
          </ul>
        </div>

        <div className="bg-white p-3 rounded-lg shadow border border-blue-200">
          <div className="flex items-center gap-2 mb-2">
            <ShieldCheck className="w-4 h-4 text-blue-600" />
            <h4 className="text-sm font-bold text-blue-900">Blok 4 - SELinux correct zetten</h4>
          </div>
          <ul className="space-y-1 text-sm text-gray-700">
              <li>• Tijdelijk permissive tijdens initiele setup</li>
            <li>• Booleans en contexts voor Apache/Nextcloud toepassen</li>
            <li>• Terug naar enforcing met persistente labels</li>
          </ul>
        </div>
      </div>
    )
  },
  {
    title: 'Zoom in Blok 1 - Apache + Nextcloud webmap',
    subtitle: 'Volledige commandoreeks voor webserver en virtual host',
    content: (
      <div className="flex flex-col space-y-3 max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div className="bg-white p-3 rounded-lg shadow border border-blue-200">
            <h4 className="text-sm font-bold text-blue-900 mb-2">Setupcommando\'s</h4>
            <div className="bg-gray-900 text-gray-100 rounded-lg p-3 text-xs font-mono overflow-x-auto space-y-0.5">
              <p>sudo dnf install httpd -y</p>
              <p>sudo systemctl enable --now httpd</p>
              <p>sudo firewall-cmd --add-service=http --zone=internal --permanent</p>
              <p>sudo firewall-cmd --complete-reload</p>
              <p>cd /var/www</p>
              <p>sudo curl -L https://download.nextcloud.com/server/releases/latest.tar.bz2 -o nextcloud.tar.bz2</p>
              <p>sudo tar -xjf nextcloud.tar.bz2</p>
              <p>cd</p>
              <p>sudo chown -R apache:apache /var/www/nextcloud</p>
              <p>sudo nano /etc/httpd/conf.d/nextcloud.conf</p>
            </div>
          </div>

          <div className="bg-white p-3 rounded-lg shadow border border-blue-200">
            <h4 className="text-sm font-bold text-blue-900 mb-2">Vhost en validatie</h4>
            <div className="bg-gray-900 text-gray-100 rounded-lg p-3 text-xs font-mono overflow-x-auto space-y-0.5">
              <p>&lt;VirtualHost *:80&gt;</p>
              <p>  DocumentRoot /var/www/nextcloud</p>
              <p>  ServerName webserverxx.pxl.lan</p>
              <p>  &lt;Directory /var/www/nextcloud/&gt;</p>
              <p>   Require all granted</p>
              <p>   AllowOverride All</p>
              <p>   Options FollowSymLinks MultiViews</p>
              <p>  &lt;/Directory&gt;</p>
              <p>&lt;/VirtualHost&gt;</p>
            </div>
            <ul className="space-y-1 text-sm text-gray-700 mt-2">
              <li>• Validatie: surf naar `http://webserverxx.pxl.lan`</li>
              <li>• Checkpoint: Nextcloud wizardpagina is bereikbaar</li>
            </ul>
          </div>
        </div>
      </div>
    )
  },
  {
    title: 'Zoom in Blok 2 - MariaDB configuratie',
    subtitle: 'Volledige commandoreeks voor DB, gebruiker en rechten',
    content: (
      <div className="flex flex-col space-y-3 max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div className="bg-white p-3 rounded-lg shadow border border-blue-200">
            <h4 className="text-sm font-bold text-blue-900 mb-2">Installatie en beveiliging</h4>
            <div className="bg-gray-900 text-gray-100 rounded-lg p-3 text-xs font-mono overflow-x-auto space-y-0.5">
              <p>rpm -qa | grep -i 'mariadb\|mysql'</p>
              <p>sudo dnf remove mysql -y</p>
              <p>sudo dnf install mariadb-server -y</p>
              <p>sudo systemctl start mariadb</p>
              <p>sudo systemctl enable mariadb</p>
              <p>sudo mysql_secure_installation</p>
            </div>
          </div>

          <div className="bg-white p-3 rounded-lg shadow border border-blue-200">
            <h4 className="text-sm font-bold text-blue-900 mb-2">Database voor Nextcloud</h4>
            <div className="bg-gray-900 text-gray-100 rounded-lg p-3 text-xs font-mono overflow-x-auto space-y-0.5">
              <p>sudo mysql -uroot</p>
              <p>CREATE DATABASE nextcloud CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;</p>
              <p>CREATE USER 'ncuser'@'localhost' IDENTIFIED BY 'SterkWachtwoordHier';</p>
              <p>GRANT ALL PRIVILEGES ON nextcloud.* TO 'ncuser'@'localhost';</p>
              <p>FLUSH PRIVILEGES;</p>
              <p>EXIT;</p>
            </div>
            <ul className="space-y-1 text-sm text-gray-700 mt-2">
              <li>• Validatiecommando: `rpm -qa | grep -i 'mariadb\|mysql'`</li>
              <li>• Checkpoint: database `nextcloud` en user `ncuser` bestaan</li>
            </ul>
          </div>
        </div>
      </div>
    )
  },
  {
    title: 'Zoom in Blok 3 - PHP runtime en installatiewizard',
    subtitle: 'Volledige commandoreeks plus GUI-waarden uit de cursus',
    content: (
      <div className="flex flex-col space-y-3 max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div className="bg-white p-3 rounded-lg shadow border border-blue-200">
            <h4 className="text-sm font-bold text-blue-900 mb-2">PHP setupcommando\'s</h4>
            <div className="bg-gray-900 text-gray-100 rounded-lg p-3 text-xs font-mono overflow-x-auto space-y-0.5">
              <p>sudo dnf install https://dl.fedoraproject.org/pub/epel/epel-release-latest-10.noarch.rpm --nogpgcheck</p>
              <p>sudo dnf install php php-mysqlnd php-gd php-xml php-zip php-intl php-mbstring php-curl php-cli php-common php-opcache php-pgsql php-imagick -y --nogpgcheck</p>
              <p>sudo systemctl restart httpd</p>
              <p>sudo setenforce 0</p>
            </div>
          </div>

          <div className="bg-white p-3 rounded-lg shadow border border-blue-200">
            <h4 className="text-sm font-bold text-blue-900 mb-2">Installatie afronden in Nextcloud</h4>
            <ul className="space-y-1 text-sm text-gray-700">
              <li>• Open `http://webserverxx.pxl.lan`</li>
              <li>• DB-type: MySQL/MariaDB</li>
              <li>• DB-user: `ncuser`</li>
              <li>• DB-wachtwoord: `SterkWachtwoordHier`</li>
              <li>• DB-naam: `nextcloud`</li>
              <li>• DB-server: `localhost`</li>
            </ul>
            <ul className="space-y-1 text-sm text-gray-700 mt-2">
              <li>• Validatie: login lukt na installeren van aanbevolen apps</li>
              <li>• Checkpoint: Nextcloud dashboard opent zonder DB-fouten</li>
            </ul>
          </div>
        </div>
      </div>
    )
  },
  {
    title: 'Zoom in Blok 4 - SELinux hardening voor Nextcloud',
    subtitle: 'Volledige commandoreeks om van permissive naar enforcing te gaan',
    content: (
      <div className="flex flex-col space-y-3 max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div className="bg-white p-3 rounded-lg shadow border border-blue-200">
            <h4 className="text-sm font-bold text-blue-900 mb-2">SELinux-commando\'s</h4>
            <div className="bg-gray-900 text-gray-100 rounded-lg p-3 text-xs font-mono overflow-x-auto space-y-0.5">
              <p>sudo setenforce 1</p>
              <p>sudo setsebool -P httpd_can_network_connect 1</p>
              <p>sudo setsebool -P httpd_unified 1</p>
              <p>sudo semanage fcontext -a -t httpd_sys_rw_content_t "/var/www/nextcloud(/.*)?"</p>
              <p>sudo restorecon -Rv /var/www/nextcloud</p>
            </div>
          </div>

          <div className="bg-white p-3 rounded-lg shadow border border-blue-200">
            <h4 className="text-sm font-bold text-blue-900 mb-2">Wanneer gaat het fout?</h4>
            <ul className="space-y-1 text-sm text-gray-700">
              <li>• SELinux enforcing zonder juiste booleans/contexts</li>
              <li>• Geen write-rechten op `/var/www/nextcloud` voor Apache</li>
              <li>• Setup werkte in permissive, maar breekt na enforcing</li>
            </ul>
            <ul className="space-y-1 text-sm text-gray-700 mt-2">
              <li>• Validatiecommando: `sudo restorecon -Rv /var/www/nextcloud`</li>
              <li>• Checkpoint: Nextcloud blijft werken met `setenforce 1`</li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
];
