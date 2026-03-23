import { Monitor, Server, TerminalSquare, CheckCircle, Shield, Lock, AlertTriangle } from 'lucide-react';
import { SlideType } from './types';

export const webserversSlides: SlideType[] = [
  {
    title: '',
    subtitle: '',
    content: (
      <div className="flex flex-col items-center justify-center h-full space-y-6">
        <Monitor className="w-20 h-20 text-blue-500" />
        <h1 className="text-5xl md:text-6xl font-bold text-blue-900 text-center">
          Webservers
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 text-center max-w-2xl px-4">
          Apache httpd installeren, configureren, beveiligen en testen in een Linux-lab.
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
    subtitle: 'Wat je na dit hoofdstuk praktisch moet kunnen uitvoeren',
    content: (
      <div className="flex flex-col space-y-3 max-w-4xl mx-auto">
        <div className="bg-blue-50 p-3 rounded-lg border-l-4 border-blue-500">
          <h3 className="text-sm font-bold text-blue-900 mb-1">Focus</h3>
          <p className="text-sm text-gray-700">
            Je zet Apache op, publiceert content, host meerdere sites en voegt basisbeveiliging toe.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div className="bg-white p-3 rounded-lg shadow border border-blue-200">
            <h4 className="text-sm font-bold text-blue-900 mb-2">Kernvragen</h4>
            <ul className="space-y-1 text-sm text-gray-700">
              <li>• Waar staan Apache-configuratie en webbestanden?</li>
              <li>• Hoe start en test je `httpd` correct?</li>
              <li>• Hoe laat je meerdere websites tegelijk draaien?</li>
              <li>• Hoe beveilig je met authenticatie, firewall en SSL?</li>
            </ul>
          </div>

          <div className="bg-white p-3 rounded-lg shadow border border-blue-200">
            <h4 className="text-sm font-bold text-blue-900 mb-2">Doelstellingen</h4>
            <ul className="space-y-1 text-sm text-gray-700">
              <li>• `httpd` installeren en persistent laten starten</li>
              <li>• Eerste `index.html` publiceren in `/var/www/html`</li>
              <li>• Virtual Hosts configureren in `/etc/httpd/conf.d`</li>
              <li>• Basis HTTPS en beschermde map opzetten</li>
            </ul>
          </div>
        </div>
      </div>
    )
  },
  {
    title: 'Praktische flow van het hoofdstuk',
    subtitle: 'Stap 1-3 vormen de kern, daarna volgt uitbreiding met hosts en security',
    content: (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-w-4xl mx-auto">
        <div className="bg-white p-3 rounded-lg shadow border border-blue-200">
          <div className="flex items-center gap-2 mb-2">
            <Server className="w-4 h-4 text-blue-600" />
            <h4 className="text-sm font-bold text-blue-900">Stap 1 - Installatie</h4>
          </div>
          <ul className="space-y-1 text-sm text-gray-700">
            <li>• Package onderzoeken (`dnf`, `rpm`)</li>
            <li>• `httpd` installeren</li>
            <li>• Configuratiebestanden lokaliseren</li>
          </ul>
        </div>

        <div className="bg-white p-3 rounded-lg shadow border border-blue-200">
          <div className="flex items-center gap-2 mb-2">
            <TerminalSquare className="w-4 h-4 text-blue-600" />
            <h4 className="text-sm font-bold text-blue-900">Stap 2 - Service</h4>
          </div>
          <ul className="space-y-1 text-sm text-gray-700">
            <li>• Service starten en enablen</li>
            <li>• Configuratie syntactisch valideren</li>
            <li>• Herladen zonder downtime</li>
          </ul>
        </div>

        <div className="bg-white p-3 rounded-lg shadow border border-blue-200">
          <div className="flex items-center gap-2 mb-2">
            <CheckCircle className="w-4 h-4 text-blue-600" />
            <h4 className="text-sm font-bold text-blue-900">Stap 3 - Testen</h4>
          </div>
          <ul className="space-y-1 text-sm text-gray-700">
            <li>• Browser/curl-test op `localhost`</li>
            <li>• Eigen `index.html` tonen</li>
            <li>• DNS-naam valideren indien geconfigureerd</li>
          </ul>
        </div>

        <div className="bg-white p-3 rounded-lg shadow border border-blue-200">
          <div className="flex items-center gap-2 mb-2">
            <Shield className="w-4 h-4 text-blue-600" />
            <h4 className="text-sm font-bold text-blue-900">Uitbreiding</h4>
          </div>
          <ul className="space-y-1 text-sm text-gray-700">
            <li>• Virtual Hosts met meerdere hostnamen</li>
            <li>• Firewall, permissies en protected map</li>
            <li>• SSL/TLS met self-signed certificaat</li>
          </ul>
        </div>
      </div>
    )
  },
  {
    title: 'Zoom in: Stap 1 - package en installatie',
    subtitle: 'Alle basiscommando\'s om Apache correct te plaatsen',
    content: (
      <div className="flex flex-col space-y-3 max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div className="bg-white p-3 rounded-lg shadow border border-blue-200">
            <h4 className="text-sm font-bold text-blue-900 mb-2">Uitvoering</h4>
            <div className="bg-gray-900 text-gray-100 rounded-lg p-3 text-xs font-mono overflow-x-auto space-y-0.5">
              <p>sudo dnf download httpd-core</p>
              <p>ls httpd*</p>
              <p>rpm -qip httpd-core-*.rpm</p>
              <p>rpm -qcp httpd-core-*.rpm</p>
              <p>sudo dnf install httpd -y</p>
            </div>
          </div>

          <div className="bg-white p-3 rounded-lg shadow border border-blue-200">
            <h4 className="text-sm font-bold text-blue-900 mb-2">Validatie</h4>
            <div className="bg-gray-900 text-gray-100 rounded-lg p-3 text-xs font-mono overflow-x-auto space-y-0.5">
              <p>rpm -q httpd</p>
              <p>grep "^DocumentRoot" /etc/httpd/conf/httpd.conf</p>
              <p>ls /etc/httpd/conf.d</p>
              <p>ls /var/www/html</p>
            </div>
          </div>
        </div>

        <div className="bg-blue-100 p-3 rounded-lg">
          <p className="text-xs italic text-blue-900">
            <strong>Checkpoint:</strong> `httpd` is geinstalleerd en je kent de paden `/etc/httpd` en `/var/www/html`.
          </p>
        </div>
      </div>
    )
  },
  {
    title: 'Zoom in: Stap 2 - starten en configcheck',
    subtitle: 'Servicebeheer met veilige controle vóór reload',
    content: (
      <div className="flex flex-col space-y-3 max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div className="bg-white p-3 rounded-lg shadow border border-blue-200">
            <h4 className="text-sm font-bold text-blue-900 mb-2">Uitvoering</h4>
            <div className="bg-gray-900 text-gray-100 rounded-lg p-3 text-xs font-mono overflow-x-auto space-y-0.5">
              <p>sudo systemctl start httpd</p>
              <p>sudo systemctl enable httpd</p>
              <p>sudo systemctl status httpd</p>
              <p>sudo apachectl configtest</p>
              <p>sudo systemctl reload httpd</p>
            </div>
          </div>

          <div className="bg-white p-3 rounded-lg shadow border border-blue-200">
            <h4 className="text-sm font-bold text-blue-900 mb-2">Validatie</h4>
            <div className="bg-gray-900 text-gray-100 rounded-lg p-3 text-xs font-mono overflow-x-auto space-y-0.5">
              <p>sudo ss -tulpn | grep httpd</p>
              <p>sudo httpd -t</p>
              <p>sudo tail -n 20 /var/log/httpd/error_log</p>
            </div>
          </div>
        </div>

        <div className="bg-blue-100 p-3 rounded-lg">
          <p className="text-xs italic text-blue-900">
            <strong>Checkpoint:</strong> service is actief, syntax is OK en Apache luistert minstens op poort 80.
          </p>
        </div>
      </div>
    )
  },
  {
    title: 'Zoom in: Stap 3 - eerste website testen',
    subtitle: 'Van basis HTML tot functionele bereikbaarheidstest',
    content: (
      <div className="flex flex-col space-y-3 max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div className="bg-white p-3 rounded-lg shadow border border-blue-200">
            <h4 className="text-sm font-bold text-blue-900 mb-2">Uitvoering</h4>
            <div className="bg-gray-900 text-gray-100 rounded-lg p-3 text-xs font-mono overflow-x-auto space-y-0.5">
              <p>sudo nano /var/www/html/index.html</p>
              <p>sudo systemctl reload httpd</p>
              <p>curl -I http://localhost</p>
              <p>curl http://localhost</p>
              <p>curl -I http://webserverXX.pxl.lan</p>
            </div>
          </div>

          <div className="bg-white p-3 rounded-lg shadow border border-blue-200">
            <h4 className="text-sm font-bold text-blue-900 mb-2">Validatie</h4>
            <ul className="space-y-1 text-sm text-gray-700">
              <li>• HTTP statuscode is `200 OK`</li>
              <li>• Pagina-inhoud bevat jouw titel</li>
              <li>• Browser toont niet meer de default testpagina</li>
              <li>• Bij oude content: cache wissen of privevenster gebruiken</li>
            </ul>
          </div>
        </div>

        <div className="bg-blue-100 p-3 rounded-lg">
          <p className="text-xs italic text-blue-900">
            <strong>Checkpoint:</strong> jouw eigen `index.html` is bereikbaar via localhost (en eventueel via DNS-naam).
          </p>
        </div>
      </div>
    )
  },
  {
    title: 'Zoom in: Virtual Hosts met DNS-validatie',
    subtitle: 'Twee websites op hetzelfde IP-adres, gescheiden via hostnamen',
    content: (
      <div className="flex flex-col space-y-3 max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div className="bg-white p-3 rounded-lg shadow border border-blue-200">
            <h4 className="text-sm font-bold text-blue-900 mb-2">Server setup</h4>
            <div className="bg-gray-900 text-gray-100 rounded-lg p-3 text-xs font-mono overflow-x-auto space-y-0.5">
              <p>sudo nano /etc/httpd/conf.d/website1.conf</p>
              <p>sudo nano /etc/httpd/conf.d/website2.conf</p>
              <p>sudo mkdir -p /var/www/html/website1 /var/www/html/website2</p>
              <p>sudo nano /var/www/html/website1/index.html</p>
              <p>sudo nano /var/www/html/website2/index.html</p>
              <p>sudo systemctl reload httpd</p>
            </div>
          </div>

          <div className="bg-white p-3 rounded-lg shadow border border-blue-200">
            <h4 className="text-sm font-bold text-blue-900 mb-2">DNS + validatie</h4>
            <div className="bg-gray-900 text-gray-100 rounded-lg p-3 text-xs font-mono overflow-x-auto space-y-0.5">
              <p>sudo nano /etc/named/pxl.lan.db</p>
              <p>sudo systemctl reload named</p>
              <p>nslookup webserverXX.pxl.lan</p>
              <p>nslookup www.webserverXX.pxl.lan</p>
              <p>nslookup webserver2XX.pxl.lan</p>
              <p>nslookup www.webserver2XX.pxl.lan</p>
            </div>
          </div>
        </div>

        <div className="bg-blue-100 p-3 rounded-lg">
          <p className="text-xs italic text-blue-900">
            <strong>Checkpoint:</strong> elke hostnaam resolveert correct en toont de juiste website-inhoud.
          </p>
        </div>
      </div>
    )
  },
  {
    title: 'Zoom in: beveiliging en SSL in de praktijk',
    subtitle: 'Permissies, firewall, protected map en basis-HTTPS',
    content: (
      <div className="flex flex-col space-y-3 max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div className="bg-white p-3 rounded-lg shadow border border-blue-200">
            <div className="flex items-center gap-2 mb-2">
              <Lock className="w-4 h-4 text-blue-600" />
              <h4 className="text-sm font-bold text-blue-900">Toegang en firewall</h4>
            </div>
            <div className="bg-gray-900 text-gray-100 rounded-lg p-3 text-xs font-mono overflow-x-auto space-y-0.5">
              <p>sudo chown -R apache:apache /var/www/html</p>
              <p>sudo ss -tulpn | grep httpd</p>
              <p>sudo firewall-cmd --add-service=http --zone=internal --permanent</p>
              <p>sudo firewall-cmd --add-service=https --zone=internal --permanent</p>
              <p>sudo firewall-cmd --complete-reload</p>
              <p>nmap -p 80,443 10.10.10.1</p>
            </div>
          </div>

          <div className="bg-white p-3 rounded-lg shadow border border-blue-200">
            <div className="flex items-center gap-2 mb-2">
              <Shield className="w-4 h-4 text-blue-600" />
              <h4 className="text-sm font-bold text-blue-900">Protected map en SSL</h4>
            </div>
            <div className="bg-gray-900 text-gray-100 rounded-lg p-3 text-xs font-mono overflow-x-auto space-y-0.5">
              <p>sudo nano /etc/httpd/conf/httpd.conf</p>
              <p>sudo mkdir /var/www/html/protected</p>
              <p>sudo nano /var/www/html/protected/.htaccess</p>
              <p>cd /var/www &amp;&amp; sudo htpasswd -c .htpasswd student</p>
              <p>sudo htpasswd .htpasswd lector</p>
              <p>sudo dnf install mod_ssl</p>
              <p>sudo openssl req -new -newkey ec -pkeyopt ec_paramgen_curve:P-256 -nodes -keyout /etc/pki/tls/private/localhost.key -x509 -days 365 -out /etc/pki/tls/certs/localhost.crt</p>
              <p>sudo systemctl reload httpd</p>
            </div>
          </div>
        </div>

        <div className="bg-blue-50 p-3 rounded-lg border-l-4 border-blue-500">
          <div className="flex items-center gap-2 mb-1">
            <AlertTriangle className="w-4 h-4 text-orange-500" />
            <h4 className="text-sm font-bold text-blue-900">Veelvoorkomende fouten (uit cursus)</h4>
          </div>
          <ul className="space-y-1 text-sm text-gray-700">
            <li>• `htpasswd -c` opnieuw gebruiken overschrijft bestaande users</li>
            <li>• Rechten op mappen ontbreken (execute-bit), waardoor toegang faalt</li>
            <li>• HTTPS blijft filtered tot service actief is op 443</li>
          </ul>
        </div>

        <div className="bg-blue-100 p-3 rounded-lg">
          <p className="text-xs italic text-blue-900">
            <strong>Checkpoint:</strong> HTTP is open, protected map vraagt login en HTTPS reageert met certificaat.
          </p>
        </div>
      </div>
    )
  }
];
