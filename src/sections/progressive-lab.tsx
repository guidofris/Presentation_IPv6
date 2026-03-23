import { Rocket, ListChecks, Blocks, CheckCircle2, AlertTriangle } from 'lucide-react';
import { SlideType } from './types';

export const progressiveLabSlides: SlideType[] = [
  {
    title: '',
    subtitle: '',
    content: (
      <div className="flex flex-col items-center justify-center h-full space-y-6">
        <Rocket className="w-20 h-20 text-purple-500" />
        <h1 className="text-5xl md:text-6xl font-bold text-purple-900 text-center">Progressive Lab</h1>
        <p className="text-xl md:text-2xl text-gray-600 text-center max-w-3xl px-4">
          Bouw week na week een volledige TechStart BV infrastructuur en bewijs elke stap met verificatie.
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
    title: 'Kernfocus en leerdoelen',
    subtitle: 'Eén groeiend bedrijfsnetwerk in plaats van losse oefeningen',
    content: (
      <div className="flex flex-col space-y-3 max-w-4xl mx-auto">
        <div className="bg-purple-50 p-3 rounded-lg border-l-4 border-purple-500">
          <h3 className="text-sm font-bold text-purple-900 mb-1">Kernprincipe uit de cursus</h3>
          <p className="text-sm text-gray-700">
            Elke nieuwe service moet werken zonder eerdere services te breken: "niets kapot maken", documenteren en continu testen.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div className="bg-white p-3 rounded-lg shadow border border-purple-200">
            <h4 className="text-sm font-bold text-purple-900 mb-2">Praktische leerdoelen</h4>
            <ul className="space-y-1 text-sm text-gray-700">
              <li>• Van statisch netwerk naar automatische provisioning (DHCP/DNS)</li>
              <li>• Serviceketen opbouwen: web, LAMP en bestandsdeling</li>
              <li>• Hardenen met SELinux, firewallregels en auditing</li>
              <li>• Monitoring en containers toevoegen zonder productiestoring</li>
            </ul>
          </div>

          <div className="bg-white p-3 rounded-lg shadow border border-purple-200">
            <h4 className="text-sm font-bold text-purple-900 mb-2">Bewijslast per week</h4>
            <ul className="space-y-1 text-sm text-gray-700">
              <li>• Screenshots van nieuwe + bestaande werkende services</li>
              <li>• Bijgewerkte netwerkdocumentatie en troubleshooting-notes</li>
              <li>• Verificatiescript draaien tot je streefscore gehaald is</li>
              <li>• Snapshots nemen na elke stabiele mijlpaal</li>
            </ul>
          </div>
        </div>
      </div>
    )
  },
  {
    title: 'Praktische flow in 3 blokken',
    subtitle: 'Elk blok heeft een eigen zoom-in met exacte commando&apos;s en checkpoints',
    content: (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 max-w-4xl mx-auto">
        <div className="bg-white p-3 rounded-lg shadow border border-purple-200">
          <div className="flex items-center gap-2 mb-2">
            <ListChecks className="w-4 h-4 text-purple-600" />
            <h4 className="text-sm font-bold text-purple-900">Blok 1 - Foundation</h4>
          </div>
          <ul className="space-y-1 text-sm text-gray-700">
            <li>• Week 1-3</li>
            <li>• Netwerk + firewall basis</li>
            <li>• DHCP automatisering</li>
          </ul>
        </div>

        <div className="bg-white p-3 rounded-lg shadow border border-purple-200">
          <div className="flex items-center gap-2 mb-2">
            <Blocks className="w-4 h-4 text-purple-600" />
            <h4 className="text-sm font-bold text-purple-900">Blok 2 - Core Services</h4>
          </div>
          <ul className="space-y-1 text-sm text-gray-700">
            <li>• Week 4-8</li>
            <li>• DNS, Apache, LAMP, Samba</li>
            <li>• End-to-end service-integratie</li>
          </ul>
        </div>

        <div className="bg-white p-3 rounded-lg shadow border border-purple-200">
          <div className="flex items-center gap-2 mb-2">
            <CheckCircle2 className="w-4 h-4 text-purple-600" />
            <h4 className="text-sm font-bold text-purple-900">Blok 3 - Hardening & Ops</h4>
          </div>
          <ul className="space-y-1 text-sm text-gray-700">
            <li>• Week 9-12 + eindcontrole</li>
            <li>• Security, monitoring, containers</li>
            <li>• Final integration certificatie</li>
          </ul>
        </div>
      </div>
    )
  },
  {
    title: 'Zoom-in Blok 1 - Foundation (Week 1-3)',
    subtitle: 'Netwerk opzetten, DHCP activeren, baseline valideren',
    content: (
      <div className="flex flex-col space-y-3 max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div className="bg-white p-3 rounded-lg shadow border border-purple-200">
            <h4 className="text-sm font-bold text-purple-900 mb-2">Uitvoering</h4>
            <div className="bg-gray-900 text-gray-100 rounded-lg p-3 text-xs font-mono overflow-x-auto space-y-0.5">
              <p>sudo nmcli con mod ens224 ipv4.addresses 10.10.10.1/24</p>
              <p>sudo firewall-cmd --zone=internal --add-service=ssh --permanent</p>
              <p>sudo firewall-cmd --reload</p>
              <p>sudo dnf install dhcp-server -y</p>
              <p>sudo nano /etc/dhcp/dhcpd.conf</p>
              <p>sudo dhcpd -t -cf /etc/dhcp/dhcpd.conf</p>
              <p>sudo systemctl enable --now dhcpd</p>
              <p>sudo firewall-cmd --zone=internal --add-service=dhcp --permanent</p>
              <p>sudo nmcli con mod ens224 ipv4.method auto</p>
              <p>sudo nmcli con down ens224 && sudo nmcli con up ens224</p>
            </div>
          </div>

          <div className="bg-white p-3 rounded-lg shadow border border-purple-200">
            <h4 className="text-sm font-bold text-purple-900 mb-2">Validatie</h4>
            <div className="bg-gray-900 text-gray-100 rounded-lg p-3 text-xs font-mono overflow-x-auto space-y-0.5">
              <p>ip addr show ens224</p>
              <p>ip route show</p>
              <p>cat /etc/resolv.conf</p>
              <p>ping -c 4 10.10.10.1</p>
              <p>ping -c 4 8.8.8.8</p>
              <p>ssh student@10.10.10.1</p>
              <p>curl -L -u pxl-student:2025_PXL! -O https://pxl-linux-advanced-sne-preview.code-coaching.dev/downloads/nl/progressive-lab/scripts/check_week3_dhcp.sh</p>
              <p>chmod +x check_week3_dhcp.sh && ./check_week3_dhcp.sh</p>
            </div>
          </div>
        </div>

        <div className="bg-purple-100 p-3 rounded-lg">
          <p className="text-xs italic text-purple-900">
            <strong>Checkpoint:</strong> client krijgt automatisch IP, gateway en DNS via DHCP, en oude SSH-connectiviteit werkt nog.
          </p>
        </div>
      </div>
    )
  },
  {
    title: 'Zoom-in Blok 2 - Core Services (Week 4-8)',
    subtitle: 'DNS, web, LAMP en Samba integreren op dezelfde infrastructuur',
    content: (
      <div className="flex flex-col space-y-3 max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div className="bg-white p-3 rounded-lg shadow border border-purple-200">
            <h4 className="text-sm font-bold text-purple-900 mb-2">Uitvoering</h4>
            <div className="bg-gray-900 text-gray-100 rounded-lg p-3 text-xs font-mono overflow-x-auto space-y-0.5">
              <p>sudo dnf install bind bind-utils -y</p>
              <p>sudo systemctl enable --now named</p>
              <p>sudo firewall-cmd --zone=internal --add-service=dns --permanent</p>
              <p>sudo dnf install httpd -y && sudo systemctl enable --now httpd</p>
              <p>sudo firewall-cmd --zone=internal --add-service=http --permanent</p>
              <p>sudo dnf install mariadb-server -y && sudo systemctl enable --now mariadb</p>
              <p>sudo dnf install php php-mysqlnd php-gd php-xml php-mbstring -y</p>
              <p>sudo dnf install samba samba-client -y</p>
              <p>sudo systemctl enable --now smb nmb</p>
              <p>sudo firewall-cmd --zone=internal --add-service=samba --permanent</p>
            </div>
          </div>

          <div className="bg-white p-3 rounded-lg shadow border border-purple-200">
            <h4 className="text-sm font-bold text-purple-900 mb-2">Validatie</h4>
            <div className="bg-gray-900 text-gray-100 rounded-lg p-3 text-xs font-mono overflow-x-auto space-y-0.5">
              <p>dig @localhost www.techstart.lan</p>
              <p>dig www.techstart.lan +short</p>
              <p>curl http://www.techstart.lan</p>
              <p>curl http://portal.techstart.lan</p>
              <p>smbclient -L //files.techstart.lan -U alice</p>
              <p>ping -c 4 google.com</p>
              <p>curl -L -u pxl-student:2025_PXL! -O https://pxl-linux-advanced-sne-preview.code-coaching.dev/downloads/nl/progressive-lab/scripts/check_week8_samba.sh</p>
              <p>chmod +x check_week8_samba.sh && ./check_week8_samba.sh</p>
            </div>
          </div>
        </div>

        <div className="bg-purple-50 p-3 rounded-lg border-l-4 border-purple-500">
          <div className="flex items-center gap-2 mb-1">
            <AlertTriangle className="w-4 h-4 text-orange-500" />
            <h4 className="text-sm font-bold text-purple-900">Veelvoorkomend foutpunt uit de bron</h4>
          </div>
          <p className="text-sm text-gray-700">
            Werkt Samba niet, controleer eerst afhankelijkheden in volgorde: DNS (dig), DHCP/IP, netwerk, daarna smb service en logs.
          </p>
        </div>

        <div className="bg-purple-100 p-3 rounded-lg">
          <p className="text-xs italic text-purple-900">
            <strong>Checkpoint:</strong> naamresolutie, web, portal en bestandsdeling werken tegelijk zonder regressie in eerdere weken.
          </p>
        </div>
      </div>
    )
  },
  {
    title: 'Zoom-in Blok 3 - Hardening & Ops (Week 9-12 + Final)',
    subtitle: 'Security afdwingen, monitoren automatiseren en finale integratie bewijzen',
    content: (
      <div className="flex flex-col space-y-3 max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div className="bg-white p-3 rounded-lg shadow border border-purple-200">
            <h4 className="text-sm font-bold text-purple-900 mb-2">Uitvoering</h4>
            <div className="bg-gray-900 text-gray-100 rounded-lg p-3 text-xs font-mono overflow-x-auto space-y-0.5">
              <p>getenforce && sudo setenforce 1</p>
              <p>sudo restorecon -Rv /var/named/ /var/www/ /srv/samba/</p>
              <p>sudo ausearch -m avc -ts recent</p>
              <p>sudo firewall-cmd --zone=internal --add-rich-rule='rule family="ipv4" source address="10.10.10.0/24" service name="ssh" accept' --permanent</p>
              <p>sudo dnf install audit lynis podman podman-compose -y</p>
              <p>sudo systemctl enable --now auditd</p>
              <p>sudo systemctl start techstart-monitor.timer</p>
              <p>sudo systemctl enable techstart-monitor.timer</p>
              <p>podman run -d --name test-web -p 8080:80 docker.io/library/nginx:latest</p>
              <p>sudo lynis audit system</p>
            </div>
          </div>

          <div className="bg-white p-3 rounded-lg shadow border border-purple-200">
            <h4 className="text-sm font-bold text-purple-900 mb-2">Validatie</h4>
            <div className="bg-gray-900 text-gray-100 rounded-lg p-3 text-xs font-mono overflow-x-auto space-y-0.5">
              <p>dig @localhost www.techstart.lan</p>
              <p>sudo dhclient -r ens224 && sudo dhclient ens224</p>
              <p>curl http://www.techstart.lan</p>
              <p>curl http://portal.techstart.lan</p>
              <p>smbclient -L //files.techstart.lan -U alice</p>
              <p>ssh student@server.techstart.lan</p>
              <p>curl -L -u pxl-student:2025_PXL! -O https://pxl-linux-advanced-sne-preview.code-coaching.dev/downloads/nl/progressive-lab/scripts/check_final_integration.sh</p>
              <p>chmod +x check_final_integration.sh</p>
              <p>./check_final_integration.sh</p>
            </div>
          </div>
        </div>

        <div className="bg-purple-100 p-3 rounded-lg">
          <p className="text-xs italic text-purple-900">
            <strong>Checkpoint:</strong> eindscript valideert integratie van alle services en je mikpunt is 90%+ voor het architect-certificaat.
          </p>
        </div>
      </div>
    )
  }
];