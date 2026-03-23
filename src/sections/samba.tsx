import { FolderOpen, ListChecks, Workflow, TerminalSquare, ShieldCheck, Bug } from 'lucide-react';
import { SlideType } from './types';

export const sambaSlides: SlideType[] = [
  {
    title: '',
    subtitle: '',
    content: (
      <div className="flex flex-col items-center justify-center h-full space-y-6">
        <FolderOpen className="w-20 h-20 text-blue-500" />
        <h1 className="text-5xl md:text-6xl font-bold text-blue-900 text-center">Samba</h1>
        <p className="text-xl md:text-2xl text-gray-600 text-center max-w-3xl px-4">
          Linux Advanced: veilige file shares opzetten, testen en troubleshooten met smbclient.
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
            Je bouwt Samba op van voorbereiding tot verificatie, zonder SELinux of firewall blind uit te zetten.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div className="bg-white p-3 rounded-lg shadow border border-blue-200">
            <h4 className="text-sm font-bold text-blue-900 mb-2">Kernvragen</h4>
            <ul className="space-y-1 text-sm text-gray-700">
              <li>• Wat is Samba en wanneer gebruik je het?</li>
              <li>• Hoe configureer je public, private en homes shares?</li>
              <li>• Hoe test je toegang voor guest en gebruikers?</li>
              <li>• Hoe valideer je via logs en testcommando&apos;s?</li>
            </ul>
          </div>

          <div className="bg-white p-3 rounded-lg shadow border border-blue-200">
            <h4 className="text-sm font-bold text-blue-900 mb-2">Doelstellingen</h4>
            <ul className="space-y-1 text-sm text-gray-700">
              <li>• Samba installeren en users + groep opzetten</li>
              <li>• /etc/samba/smb.conf functioneel invullen</li>
              <li>• smb/nmb + firewall correct activeren</li>
              <li>• Toegang end-to-end testen met smbclient</li>
            </ul>
          </div>
        </div>
      </div>
    )
  },
  {
    title: 'Praktische flow in 4 blokken',
    subtitle: 'Volgorde die in het labo gebruikt wordt',
    content: (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-w-4xl mx-auto">
        <div className="bg-white p-3 rounded-lg shadow border border-blue-200">
          <div className="flex items-center gap-2 mb-2">
            <ListChecks className="w-4 h-4 text-blue-600" />
            <h4 className="text-sm font-bold text-blue-900">Blok 1 - Voorbereiding</h4>
          </div>
          <ul className="space-y-1 text-sm text-gray-700">
            <li>• Hostname, /etc/hosts en netwerkcheck</li>
            <li>• Pakketten, groep en testgebruikers</li>
            <li>• Shares en Linux-permissies</li>
          </ul>
        </div>

        <div className="bg-white p-3 rounded-lg shadow border border-blue-200">
          <div className="flex items-center gap-2 mb-2">
            <Workflow className="w-4 h-4 text-blue-600" />
            <h4 className="text-sm font-bold text-blue-900">Blok 2 - Configuratie</h4>
          </div>
          <ul className="space-y-1 text-sm text-gray-700">
            <li>• Backup van smb.conf</li>
            <li>• [global], [homes], [public], [private]</li>
            <li>• Syntaxcontrole met testparm</li>
          </ul>
        </div>

        <div className="bg-white p-3 rounded-lg shadow border border-blue-200">
          <div className="flex items-center gap-2 mb-2">
            <ShieldCheck className="w-4 h-4 text-blue-600" />
            <h4 className="text-sm font-bold text-blue-900">Blok 3 - Services &amp; security</h4>
          </div>
          <ul className="space-y-1 text-sm text-gray-700">
            <li>• smb/nmb starten en enablen</li>
            <li>• firewallregel voor samba-service</li>
            <li>• SELinux-context/booleans toepassen</li>
          </ul>
        </div>

        <div className="bg-white p-3 rounded-lg shadow border border-blue-200">
          <div className="flex items-center gap-2 mb-2">
            <TerminalSquare className="w-4 h-4 text-blue-600" />
            <h4 className="text-sm font-bold text-blue-900">Blok 4 - Validatie</h4>
          </div>
          <ul className="space-y-1 text-sm text-gray-700">
            <li>• Shares oplijsten als alice en guest</li>
            <li>• Lees/schrijf testen op public/private</li>
            <li>• Logs en NetBIOS-resolutie controleren</li>
          </ul>
        </div>
      </div>
    )
  },
  {
    title: 'Zoom-in Blok 1 - Voorbereiding',
    subtitle: 'Server klaarzetten met users, shares en basischecks',
    content: (
      <div className="flex flex-col space-y-3 max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div className="bg-white p-3 rounded-lg shadow border border-blue-200">
            <h4 className="text-sm font-bold text-blue-900 mb-2">Setupcommando&apos;s</h4>
            <div className="bg-gray-900 text-gray-100 rounded-lg p-3 text-xs font-mono overflow-x-auto space-y-0.5">
              <p>sudo systemctl disable --now nftables</p>
              <p>sudo systemctl enable --now firewalld</p>
              <p>sudo hostnamectl set-hostname ServerXX</p>
              <p>sudo dnf install -y samba samba-client</p>
              <p>sudo groupadd nasusers</p>
              <p>sudo useradd -m -G nasusers alice</p>
              <p>sudo useradd -m -G nasusers bob</p>
              <p>sudo smbpasswd -a alice &amp;&amp; sudo smbpasswd -a bob</p>
              <p>sudo mkdir -p /srv/shares/&#123;public,private&#125;</p>
              <p>sudo chgrp -R nasusers /srv/shares/* &amp;&amp; sudo chmod -R g+w /srv/shares/*</p>
            </div>
          </div>

          <div className="bg-white p-3 rounded-lg shadow border border-blue-200">
            <h4 className="text-sm font-bold text-blue-900 mb-2">Validatiecommando&apos;s</h4>
            <div className="bg-gray-900 text-gray-100 rounded-lg p-3 text-xs font-mono overflow-x-auto space-y-0.5">
              <p>systemctl status firewalld --no-pager</p>
              <p>hostnamectl</p>
              <p>ping -c 1 ServerXX</p>
              <p>id alice &amp;&amp; id bob</p>
              <p>ls -l /srv/shares</p>
            </div>
          </div>
        </div>

        <div className="bg-blue-100 p-3 rounded-lg">
          <p className="text-xs italic text-blue-900">
            <strong>Checkpoint:</strong> beide users zitten in groep nasusers en /srv/shares/public + /srv/shares/private
            bestaan met groeptoegang.
          </p>
        </div>
      </div>
    )
  },
  {
    title: 'Zoom-in Blok 2 - smb.conf configureren',
    subtitle: 'Global + shares definiëren en syntax checken',
    content: (
      <div className="flex flex-col space-y-3 max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div className="bg-white p-3 rounded-lg shadow border border-blue-200">
            <h4 className="text-sm font-bold text-blue-900 mb-2">Configuratieflow</h4>
            <div className="bg-gray-900 text-gray-100 rounded-lg p-3 text-xs font-mono overflow-x-auto space-y-0.5">
              <p>sudo cp /etc/samba/smb.conf /etc/samba/smb.conf.orig</p>
              <p>sudo nano /etc/samba/smb.conf</p>
              <p># voeg [global], [homes], [public], [private] toe</p>
              <p>testparm -s</p>
            </div>
          </div>

          <div className="bg-white p-3 rounded-lg shadow border border-blue-200">
            <h4 className="text-sm font-bold text-blue-900 mb-2">Verplichte sleutelregels</h4>
            <ul className="space-y-1 text-sm text-gray-700">
              <li>• [public]: public = yes, write list = +nasusers</li>
              <li>• [private]: valid users = +nasusers</li>
              <li>• force group = nasusers</li>
              <li>• create mask = 0660, directory mask = 0770</li>
            </ul>
          </div>
        </div>

        <div className="bg-blue-100 p-3 rounded-lg">
          <p className="text-xs italic text-blue-900">
            <strong>Checkpoint:</strong> testparm meldt Loaded services file OK zonder syntaxfouten.
          </p>
        </div>
      </div>
    )
  },
  {
    title: 'Zoom-in Blok 3 - Services, firewall, SELinux',
    subtitle: 'Runtime en policy correct zetten',
    content: (
      <div className="flex flex-col space-y-3 max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div className="bg-white p-3 rounded-lg shadow border border-blue-200">
            <h4 className="text-sm font-bold text-blue-900 mb-2">Commando&apos;s</h4>
            <div className="bg-gray-900 text-gray-100 rounded-lg p-3 text-xs font-mono overflow-x-auto space-y-0.5">
              <p>sudo systemctl restart smb &amp;&amp; sudo systemctl restart nmb</p>
              <p>sudo systemctl enable smb &amp;&amp; sudo systemctl enable nmb</p>
              <p>sudo firewall-cmd --add-service=samba --permanent</p>
              <p>sudo firewall-cmd --reload</p>
              <p>sudo setsebool -P samba_enable_home_dirs on</p>
              <p>sudo setsebool -P samba_export_all_rw on</p>
              <p>sudo chcon -Rt samba_share_t /srv/shares/public</p>
              <p>sudo chcon -Rt samba_share_t /srv/shares/private</p>
              <p>sudo semanage fcontext -a -t samba_share_t "/srv/shares(/.*)?"</p>
              <p>sudo restorecon -Rv /srv</p>
            </div>
          </div>

          <div className="bg-white p-3 rounded-lg shadow border border-blue-200">
            <h4 className="text-sm font-bold text-blue-900 mb-2">Validatiecommando&apos;s</h4>
            <div className="bg-gray-900 text-gray-100 rounded-lg p-3 text-xs font-mono overflow-x-auto space-y-0.5">
              <p>systemctl status smb nmb --no-pager</p>
              <p>firewall-cmd --list-services</p>
              <p>ls -Zl /srv/shares/private</p>
            </div>
          </div>
        </div>

        <div className="bg-blue-100 p-3 rounded-lg">
          <p className="text-xs italic text-blue-900">
            <strong>Checkpoint:</strong> smb en nmb zijn active/running en shares hebben context samba_share_t.
          </p>
        </div>
      </div>
    )
  },
  {
    title: 'Zoom-in Blok 4 - Toegang en troubleshooting',
    subtitle: 'CLI-tests voor public/private + logcontrole + NetBIOS test',
    content: (
      <div className="flex flex-col space-y-3 max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div className="bg-white p-3 rounded-lg shadow border border-blue-200">
            <h4 className="text-sm font-bold text-blue-900 mb-2">Toegangstests</h4>
            <div className="bg-gray-900 text-gray-100 rounded-lg p-3 text-xs font-mono overflow-x-auto space-y-0.5">
              <p>smbclient -L //ServerXX -Ualice</p>
              <p>smbclient -L //ServerXX -U%</p>
              <p>smbclient //ServerXX/public -U alice</p>
              <p>smbclient //ServerXX/private -U%</p>
              <p>smbclient //ServerXX/private -Ualice</p>
              <p>sudo less /var/log/samba/samba.log</p>
              <p>sudo less /var/log/samba/log.smbd</p>
              <p>sudo less /var/log/samba/log.nmbd</p>
            </div>
          </div>

          <div className="bg-white p-3 rounded-lg shadow border border-blue-200">
            <h4 className="text-sm font-bold text-blue-900 mb-2">NetBIOS-validatie</h4>
            <div className="bg-gray-900 text-gray-100 rounded-lg p-3 text-xs font-mono overflow-x-auto space-y-0.5">
              <p>sudo firewall-cmd --get-active-zones</p>
              <p>sudo firewall-cmd --zone=public --permanent --add-port=137/udp</p>
              <p>sudo systemctl restart firewalld</p>
              <p>nmblookup ServerXX</p>
              <p>sudo firewall-cmd --zone=public --permanent --add-rich-rule='rule family="ipv4" source address="10.10.10.1" source-port port="137" protocol="udp" accept'</p>
              <p>sudo systemctl restart firewalld</p>
              <p>nmblookup ServerXX</p>
            </div>
          </div>
        </div>

        <div className="bg-blue-50 p-3 rounded-lg border-l-4 border-blue-500">
          <div className="flex items-center gap-2 mb-1">
            <Bug className="w-4 h-4 text-orange-500" />
            <h4 className="text-sm font-bold text-blue-900">Veelvoorkomende fout uit de cursus</h4>
          </div>
          <p className="text-sm text-gray-700">
            nmblookup kan initieel falen; pas daarna pas de rich rule op UDP 137 toe en test opnieuw.
          </p>
        </div>

        <div className="bg-blue-100 p-3 rounded-lg">
          <p className="text-xs italic text-blue-900">
            <strong>Checkpoint:</strong> guest heeft geen toegang tot private, alice kan lezen/schrijven op public/private.
          </p>
        </div>
      </div>
    )
  }
];