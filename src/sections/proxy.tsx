import { Workflow, ArrowUpRight, ShieldCheck, Server, CheckCircle2 } from 'lucide-react';
import { SlideType } from './types';

export const proxySlides: SlideType[] = [
  {
    title: '',
    subtitle: '',
    content: (
      <div className="flex flex-col items-center justify-center h-full space-y-6">
        <Workflow className="w-20 h-20 text-green-500" />
        <h1 className="text-5xl md:text-6xl font-bold text-green-900 text-center">Proxy</h1>
        <p className="text-xl md:text-2xl text-gray-600 text-center max-w-3xl px-4">
          Forward en reverse proxy praktisch opzetten met Squid en Nginx in een Linux lab.
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
    subtitle: 'Wat je operationeel moet kunnen na dit hoofdstuk',
    content: (
      <div className="flex flex-col space-y-3 max-w-4xl mx-auto">
        <div className="bg-green-50 p-3 rounded-lg border-l-4 border-green-500">
          <h3 className="text-sm font-bold text-green-900 mb-1">Kernfocus</h3>
          <p className="text-sm text-gray-700">
            Je configureert een forward proxy voor uitgaand verkeer en een reverse proxy voor inkomend verkeer,
            inclusief filtering, logging en verificatie.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div className="bg-white p-3 rounded-lg shadow border border-green-200">
            <h4 className="text-sm font-bold text-green-900 mb-2">Kernvragen</h4>
            <ul className="space-y-1 text-sm text-gray-700">
              <li>• Wat is het verschil tussen forward en reverse proxy?</li>
              <li>• Waarom gebruik je proxy in beheer- en securityscenario&apos;s?</li>
              <li>• Hoe zet je Squid en Nginx correct op in een lab?</li>
              <li>• Hoe valideer je dat verkeer echt via proxy loopt?</li>
            </ul>
          </div>

          <div className="bg-white p-3 rounded-lg shadow border border-green-200">
            <h4 className="text-sm font-bold text-green-900 mb-2">Doelstellingen</h4>
            <ul className="space-y-1 text-sm text-gray-700">
              <li>• Squid installeren, ACL toepassen en verkeer loggen</li>
              <li>• Browser en CLI-clients via proxy laten werken</li>
              <li>• Nginx reverse proxy met upstream pool opzetten</li>
              <li>• Routing, failover en logcontrole aantonen</li>
            </ul>
          </div>
        </div>
      </div>
    )
  },
  {
    title: 'Praktische flow in 4 blokken',
    subtitle: 'Elke blok heeft een zoom-in met alle commands, validatie en checkpoint',
    content: (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-w-4xl mx-auto">
        <div className="bg-white p-3 rounded-lg shadow border border-green-200">
          <div className="flex items-center gap-2 mb-2">
            <ArrowUpRight className="w-4 h-4 text-green-600" />
            <h4 className="text-sm font-bold text-green-900">Blok 1 - Squid basis op Proxy VM</h4>
          </div>
          <ul className="space-y-1 text-sm text-gray-700">
            <li>• Installatie, poort 3128, cache-init en basis ACL</li>
            <li>• Service starten en config parse valideren</li>
            <li>• Client via browser/CLI naar forward proxy sturen</li>
          </ul>
        </div>

        <div className="bg-white p-3 rounded-lg shadow border border-green-200">
          <div className="flex items-center gap-2 mb-2">
            <ShieldCheck className="w-4 h-4 text-green-600" />
            <h4 className="text-sm font-bold text-green-900">Blok 2 - ACL, blokkering en auth</h4>
          </div>
          <ul className="space-y-1 text-sm text-gray-700">
            <li>• Badsites ACL en deny-regel toevoegen</li>
            <li>• Basisauth met htpasswd configureren</li>
            <li>• TCP_DENIED en auth gedrag in logs controleren</li>
          </ul>
        </div>

        <div className="bg-white p-3 rounded-lg shadow border border-green-200">
          <div className="flex items-center gap-2 mb-2">
            <Server className="w-4 h-4 text-green-600" />
            <h4 className="text-sm font-bold text-green-900">Blok 3 - Reverse proxy met Nginx</h4>
          </div>
          <ul className="space-y-1 text-sm text-gray-700">
            <li>• Backends opzetten met python3 http.server</li>
            <li>• Nginx installeren, firewall openen, config plaatsen</li>
            <li>• Syntaxischeck en service activatie uitvoeren</li>
          </ul>
        </div>

        <div className="bg-white p-3 rounded-lg shadow border border-green-200">
          <div className="flex items-center gap-2 mb-2">
            <CheckCircle2 className="w-4 h-4 text-green-600" />
            <h4 className="text-sm font-bold text-green-900">Blok 4 - Routing, balancing en failover</h4>
          </div>
          <ul className="space-y-1 text-sm text-gray-700">
            <li>• /app1, /app2 en /api routes testen</li>
            <li>• Nginx access log en backendgedrag observeren</li>
            <li>• Backend stop simuleren en failover aantonen</li>
          </ul>
        </div>
      </div>
    )
  },
  {
    title: 'Zoom-in Blok 1 - Squid basis op Proxy VM',
    subtitle: 'Volledige setup van forward proxy tot en met clienttest',
    content: (
      <div className="flex flex-col space-y-3 max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div className="bg-white p-3 rounded-lg shadow border border-green-200">
            <h4 className="text-sm font-bold text-green-900 mb-2">Setupcommands</h4>
            <div className="bg-gray-900 text-gray-100 rounded-lg p-3 text-xs font-mono overflow-x-auto space-y-0.5">
              <p>sudo dnf update -y &amp;&amp; sudo reboot</p>
              <p>sudo dnf install epel-release -y</p>
              <p>sudo dnf install squid httpd-tools -y</p>
              <p>squid -v</p>
              <p>sudo firewall-cmd --permanent --add-port=3128/tcp</p>
              <p>sudo firewall-cmd --reload</p>
              <p>sudo firewall-cmd --list-ports</p>
              <p>sudo squid -z</p>
              <p>sudo cp /etc/squid/squid.conf /etc/squid/squid.conf.bak</p>
              <p>sudo nano /etc/squid/squid.conf</p>
              <p>sudo systemctl enable squid --now</p>
              <p>sudo squid -k parse</p>
              <p>export http_proxy=http://192.168.122.100:3128</p>
              <p>export https_proxy=http://192.168.122.100:3128</p>
              <p>curl -I http://example.com</p>
            </div>
          </div>

          <div className="bg-white p-3 rounded-lg shadow border border-green-200">
            <h4 className="text-sm font-bold text-green-900 mb-2">Validatie en checkpoint</h4>
            <div className="bg-gray-900 text-gray-100 rounded-lg p-3 text-xs font-mono overflow-x-auto space-y-0.5">
              <p>sudo systemctl status squid</p>
              <p>sudo tail -f /var/log/squid/access.log</p>
              <p>sudo journalctl -u squid -f</p>
            </div>
            <ul className="space-y-1 text-xs text-gray-700 mt-2">
              <li>• Validatie: access.log toont verkeer zoals TCP_MISS/200</li>
              <li>• Validatie: client bereikt example.com via proxy</li>
              <li>• Checkpoint: forward proxy werkt voor browser en CLI</li>
            </ul>
          </div>
        </div>
      </div>
    )
  },
  {
    title: 'Zoom-in Blok 2 - ACL, blokkering en auth',
    subtitle: 'Policy-uitbreiding op Squid met denied-sites en gebruikersauthenticatie',
    content: (
      <div className="flex flex-col space-y-3 max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div className="bg-white p-3 rounded-lg shadow border border-green-200">
            <h4 className="text-sm font-bold text-green-900 mb-2">Commands en config</h4>
            <div className="bg-gray-900 text-gray-100 rounded-lg p-3 text-xs font-mono overflow-x-auto space-y-0.5">
              <p>sudo nano /etc/squid/badsites.txt</p>
              <p>.facebook.com</p>
              <p>.tiktok.com</p>
              <p>youtube.com</p>
              <p>sudo nano /etc/squid/squid.conf</p>
              <p>acl badsites dstdomain "/etc/squid/badsites.txt"</p>
              <p>http_access deny badsites localnet</p>
              <p>sudo squid -k reconfigure</p>
              <p>grep TCP_DENIED /var/log/squid/access.log</p>
              <p>sudo htpasswd -c /etc/squid/passwd student1</p>
              <p>auth_param basic program /usr/libexec/squid/basic_ncsa_auth /etc/squid/passwd</p>
              <p>auth_param basic realm Proxy Lab</p>
              <p>acl auth_users proxy_auth REQUIRED</p>
              <p>http_access allow auth_users localnet</p>
              <p>sudo chown squid:squid /etc/squid/passwd</p>
              <p>sudo chmod 640 /etc/squid/passwd</p>
              <p>sudo squid -k reconfigure</p>
            </div>
          </div>

          <div className="bg-white p-3 rounded-lg shadow border border-green-200">
            <h4 className="text-sm font-bold text-green-900 mb-2">Validatie en checkpoint</h4>
            <ul className="space-y-1 text-xs text-gray-700">
              <li>• Validatie: geblokkeerde domeinen geven denied-gedrag</li>
              <li>• Validatie: auth prompt verschijnt in browser</li>
              <li>• Checkpoint: badsites + auth policy is actief en gelogd</li>
            </ul>
            <div className="bg-green-50 p-2 rounded border border-green-200 mt-2">
              <p className="text-xs text-green-900">
                Veelgemaakte fout uit bron: volgorde van `http_access`-regels is cruciaal. Plaats deny/allow regels
                op de juiste positie, anders worden ACL&apos;s genegeerd.
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  },
  {
    title: 'Zoom-in Blok 3 - Reverse proxy met Nginx',
    subtitle: 'Backends starten en reverse-proxyconfiguratie op de Proxy VM activeren',
    content: (
      <div className="flex flex-col space-y-3 max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div className="bg-white p-3 rounded-lg shadow border border-green-200">
            <h4 className="text-sm font-bold text-green-900 mb-2">Commands backend + proxy</h4>
            <div className="bg-gray-900 text-gray-100 rounded-lg p-3 text-xs font-mono overflow-x-auto space-y-0.5">
              <p>sudo dnf install python3 -y</p>
              <p>mkdir /var/www/html</p>
              <p>echo "Backend1" &gt; /var/www/html/index.html</p>
              <p>sudo python3 -m http.server 8080 --bind 0.0.0.0 --directory /var/www/html</p>
              <p>sudo dnf module enable nginx:mainline -y</p>
              <p>sudo dnf install nginx -y</p>
              <p>nginx -v</p>
              <p>sudo firewall-cmd --permanent --add-service=http --add-service=https</p>
              <p>sudo firewall-cmd --reload</p>
              <p>sudo setenforce 0</p>
              <p>sudo nano /etc/nginx/conf.d/reverse-proxy.conf</p>
            </div>
          </div>

          <div className="bg-white p-3 rounded-lg shadow border border-green-200">
            <h4 className="text-sm font-bold text-green-900 mb-2">Validatie en checkpoint</h4>
            <div className="bg-gray-900 text-gray-100 rounded-lg p-3 text-xs font-mono overflow-x-auto space-y-0.5">
              <p>sudo nginx -t</p>
              <p>sudo systemctl enable nginx --now</p>
              <p>sudo systemctl status nginx</p>
            </div>
            <ul className="space-y-1 text-xs text-gray-700 mt-2">
              <li>• Validatie: `nginx -t` geeft syntax is ok</li>
              <li>• Validatie: nginx service staat active (running)</li>
              <li>• Checkpoint: reverse proxy is geladen zonder configfouten</li>
            </ul>
          </div>
        </div>
      </div>
    )
  },
  {
    title: 'Zoom-in Blok 4 - Routing, balancing en failover',
    subtitle: 'Padrouting en upstream gedrag aantonen met curl en logs',
    content: (
      <div className="flex flex-col space-y-3 max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div className="bg-white p-3 rounded-lg shadow border border-green-200">
            <h4 className="text-sm font-bold text-green-900 mb-2">Test- en observatiecommands</h4>
            <div className="bg-gray-900 text-gray-100 rounded-lg p-3 text-xs font-mono overflow-x-auto space-y-0.5">
              <p>curl http://192.168.122.100/app1</p>
              <p>curl http://192.168.122.100/app2</p>
              <p>curl http://192.168.122.100/api</p>
              <p>for i in &#123;1..20&#125;; do curl http://192.168.122.100/api; done | wc -l</p>
              <p>sudo tail -f /var/log/nginx/access.log</p>
              <p>grep /api /var/log/nginx/access.log</p>
            </div>
          </div>

          <div className="bg-white p-3 rounded-lg shadow border border-green-200">
            <h4 className="text-sm font-bold text-green-900 mb-2">Validatie en checkpoint</h4>
            <ul className="space-y-1 text-xs text-gray-700">
              <li>• Validatie: /app1 en /app2 tonen content van verschillende backends</li>
              <li>• Validatie: /api gebruikt upstream pool en blijft werken bij backend-uitval</li>
              <li>• Validatie: access.log toont 200 en bij uitval eventueel 502</li>
              <li>• Checkpoint: reverse proxy routeert en failovergedrag is aantoonbaar</li>
            </ul>
            <div className="bg-green-50 p-2 rounded border border-green-200 mt-2">
              <p className="text-xs text-green-900">
                Bronnotitie: stop Backend1 en test /api opnieuw; de aanvraag moet nog doorlopen via de andere backend.
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  }
];
