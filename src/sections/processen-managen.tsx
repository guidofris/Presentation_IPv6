import { Activity, Search, XCircle, MoveHorizontal, Gauge, AlertTriangle } from 'lucide-react';
import { SlideType } from './types';

export const processenManagenSlides: SlideType[] = [
  {
    title: '',
    subtitle: '',
    content: (
      <div className="flex flex-col items-center justify-center h-full space-y-6">
        <Activity className="w-20 h-20 text-green-500" />
        <h1 className="text-5xl md:text-6xl font-bold text-green-900 text-center">Processen managen</h1>
        <p className="text-xl md:text-2xl text-gray-600 text-center max-w-3xl px-4">
          Processen oplijsten, monitoren, beeindigen en prioriteren op een Linux-server.
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
    subtitle: 'Week 9: processen begrijpen en operationeel beheren',
    content: (
      <div className="flex flex-col space-y-3 max-w-4xl mx-auto">
        <div className="bg-green-50 p-3 rounded-lg border-l-4 border-green-500">
          <h3 className="text-sm font-bold text-green-900 mb-1">Kernfocus</h3>
          <p className="text-sm text-gray-700">
            Je leert wat processen en childprocessen zijn, hoe je ze opvolgt met ps/top en hoe je veilig ingrijpt met kill, jobs, fg/bg en nice.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div className="bg-white p-3 rounded-lg shadow border border-green-200">
            <h4 className="text-sm font-bold text-green-900 mb-2">Kernvragen</h4>
            <ul className="space-y-1 text-sm text-gray-700">
              <li>• Wat is een proces en wat doet een PID?</li>
              <li>• Hoe lijst je processen op en volg je ze live op?</li>
              <li>• Hoe beeindig je processen gecontroleerd of geforceerd?</li>
              <li>• Hoe werk je met voorgrond/achtergrond en prioriteit?</li>
            </ul>
          </div>

          <div className="bg-white p-3 rounded-lg shadow border border-green-200">
            <h4 className="text-sm font-bold text-green-900 mb-2">Doelstellingen</h4>
            <ul className="space-y-1 text-sm text-gray-700">
              <li>• Lopende processen oplijsten met ps</li>
              <li>• Lopende processen monitoren met top</li>
              <li>• Processen in voorgrond/achtergrond beheren</li>
              <li>• Nice-waarde instellen en aanpassen met renice</li>
            </ul>
          </div>
        </div>
      </div>
    )
  },
  {
    title: 'Praktische flow in 4 blokken',
    subtitle: 'Elke blok heeft een zoom-in met commando\'s, validatie en checkpoint',
    content: (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-w-4xl mx-auto">
        <div className="bg-white p-3 rounded-lg shadow border border-green-200">
          <div className="flex items-center gap-2 mb-2">
            <Search className="w-4 h-4 text-green-600" />
            <h4 className="text-sm font-bold text-green-900">Blok 1 - Processen oplijsten en monitoren</h4>
          </div>
          <ul className="space-y-1 text-sm text-gray-700">
            <li>• ps, ps u en ps aux gebruiken</li>
            <li>• Kolommen kiezen en sorteren met -o en --sort</li>
            <li>• top gebruiken voor live opvolging</li>
          </ul>
        </div>

        <div className="bg-white p-3 rounded-lg shadow border border-green-200">
          <div className="flex items-center gap-2 mb-2">
            <XCircle className="w-4 h-4 text-green-600" />
            <h4 className="text-sm font-bold text-green-900">Blok 2 - Processen beeindigen</h4>
          </div>
          <ul className="space-y-1 text-sm text-gray-700">
            <li>• Gericht stoppen met kill PID</li>
            <li>• Geforceerd stoppen met kill -9</li>
            <li>• Reeks processen stoppen met killall</li>
          </ul>
        </div>

        <div className="bg-white p-3 rounded-lg shadow border border-green-200">
          <div className="flex items-center gap-2 mb-2">
            <MoveHorizontal className="w-4 h-4 text-green-600" />
            <h4 className="text-sm font-bold text-green-900">Blok 3 - Voorgrond en achtergrond</h4>
          </div>
          <ul className="space-y-1 text-sm text-gray-700">
            <li>• Processen starten met &amp; in de achtergrond</li>
            <li>• jobs gebruiken om taken te zien</li>
            <li>• Wisselen met fg %1, Ctrl+Z en bg %1</li>
          </ul>
        </div>

        <div className="bg-white p-3 rounded-lg shadow border border-green-200">
          <div className="flex items-center gap-2 mb-2">
            <Gauge className="w-4 h-4 text-green-600" />
            <h4 className="text-sm font-bold text-green-900">Blok 4 - Prioriteit met nice en renice</h4>
          </div>
          <ul className="space-y-1 text-sm text-gray-700">
            <li>• Proces starten met aangepaste nice-waarde</li>
            <li>• Nice-waarden controleren met ps</li>
            <li>• Bestaande processen aanpassen met renice</li>
          </ul>
        </div>
      </div>
    )
  },
  {
    title: 'Zoom-in Blok 1 - Oplijsten en monitoren',
    subtitle: 'Van statische snapshots naar live inzicht',
    content: (
      <div className="flex flex-col space-y-3 max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div className="bg-white p-3 rounded-lg shadow border border-green-200">
            <h4 className="text-sm font-bold text-green-900 mb-2">Commando\'s</h4>
            <div className="bg-gray-900 text-gray-100 rounded-lg p-3 text-xs font-mono overflow-x-auto space-y-0.5">
              <p>ps</p>
              <p>ps u</p>
              <p>ps aux | less</p>
              <p>ps -eo user,pid,%mem,vsz,rss,tty,stat,start,comm | less</p>
              <p>ps -eo user,pid,%mem,vsz,rss,tty,stat,start,comm --sort=-rss | head -20</p>
              <p>top</p>
            </div>
          </div>

          <div className="bg-white p-3 rounded-lg shadow border border-green-200">
            <h4 className="text-sm font-bold text-green-900 mb-2">Validatie en checkpoint</h4>
            <ul className="space-y-1 text-sm text-gray-700">
              <li>• Validatie: je ziet PID, USER, %CPU en %MEM in de output</li>
              <li>• Validatie: met --sort=-rss staan processen met hoogste geheugen bovenaan</li>
              <li>• Validatie: in top kan je sorteren met P (CPU) en M (geheugen)</li>
              <li>• Checkpoint: je kan 1 proces benoemen met zijn PID en huidige status</li>
            </ul>
          </div>
        </div>
      </div>
    )
  },
  {
    title: 'Zoom-in Blok 2 - Processen beeindigen',
    subtitle: 'Correct escaleren van normale stop naar geforceerde stop',
    content: (
      <div className="flex flex-col space-y-3 max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div className="bg-white p-3 rounded-lg shadow border border-green-200">
            <h4 className="text-sm font-bold text-green-900 mb-2">Commando\'s</h4>
            <div className="bg-gray-900 text-gray-100 rounded-lg p-3 text-xs font-mono overflow-x-auto space-y-0.5">
              <p>kill 11977</p>
              <p>kill -9 11981</p>
              <p>killall -9 vim</p>
              <p>top</p>
              <p>k   # kill vanuit top</p>
            </div>
          </div>

          <div className="bg-white p-3 rounded-lg shadow border border-green-200">
            <h4 className="text-sm font-bold text-green-900 mb-2">Validatie en checkpoint</h4>
            <ul className="space-y-1 text-sm text-gray-700">
              <li>• Validatie: na kill verdwijnt het proces uit ps/top</li>
              <li>• Validatie: killall stopt alle processen met dezelfde naam</li>
              <li>• Checkpoint: je kan uitleggen wanneer je kill -9 pas als laatste stap inzet</li>
            </ul>
          </div>
        </div>
      </div>
    )
  },
  {
    title: 'Zoom-in Blok 3 - Voorgrond en achtergrond',
    subtitle: 'Taken parkeren, hervatten en terughalen zonder ze te verliezen',
    content: (
      <div className="flex flex-col space-y-3 max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div className="bg-white p-3 rounded-lg shadow border border-green-200">
            <h4 className="text-sm font-bold text-green-900 mb-2">Commando\'s</h4>
            <div className="bg-gray-900 text-gray-100 rounded-lg p-3 text-xs font-mono overflow-x-auto space-y-0.5">
              <p>sleep 300 &amp;</p>
              <p>jobs</p>
              <p>fg %1</p>
              <p>Ctrl+Z</p>
              <p>bg %1</p>
            </div>
          </div>

          <div className="bg-white p-3 rounded-lg shadow border border-green-200">
            <h4 className="text-sm font-bold text-green-900 mb-2">Validatie en checkpoint</h4>
            <ul className="space-y-1 text-sm text-gray-700">
              <li>• Validatie: jobs toont jobnummer, status en commando</li>
              <li>• Validatie: fg brengt de gekozen job terug naar de voorgrond</li>
              <li>• Validatie: na Ctrl+Z en bg blijft het proces verder lopen</li>
              <li>• Checkpoint: je kan 1 job veilig tussen voorgrond en achtergrond verplaatsen</li>
            </ul>
          </div>
        </div>
      </div>
    )
  },
  {
    title: 'Zoom-in Blok 4 - Prioriteit met nice en renice',
    subtitle: 'CPU-prioriteit instellen en bestaande processen bijsturen',
    content: (
      <div className="flex flex-col space-y-3 max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div className="bg-white p-3 rounded-lg shadow border border-green-200">
            <h4 className="text-sm font-bold text-green-900 mb-2">Commando\'s</h4>
            <div className="bg-gray-900 text-gray-100 rounded-lg p-3 text-xs font-mono overflow-x-auto space-y-0.5">
              <p>nice -n 10 sleep 1000 &amp;</p>
              <p>ps -ao user,ni,comm | grep sleep</p>
              <p>nice -n -15 sleep 1000 &amp;</p>
              <p>sudo renice -n -5 1676</p>
              <p>ps -ao user,ni,comm | grep sleep</p>
            </div>
          </div>

          <div className="bg-white p-3 rounded-lg shadow border border-green-200">
            <h4 className="text-sm font-bold text-green-900 mb-2">Validatie en checkpoint</h4>
            <ul className="space-y-1 text-sm text-gray-700">
              <li>• Validatie: NI-kolom toont de ingestelde nice-waarde</li>
              <li>• Validatie: renice past de waarde van een bestaand proces aan</li>
              <li>• Checkpoint: je kan uitleggen waarom root nodig is voor hogere prioriteit (negatieve nice)</li>
            </ul>

            <div className="bg-green-50 p-2 rounded border border-green-200 mt-2">
              <div className="flex items-center gap-2 mb-1">
                <AlertTriangle className="w-3.5 h-3.5 text-orange-500" />
                <h5 className="text-xs font-bold text-green-900">Foutpunt uit de bron</h5>
              </div>
              <p className="text-xs text-gray-700">
                Als gewone gebruiker faalt een te hoge prioriteit met: "nice: kan beleefdheidswaarde niet instellen: Toegang geweigerd".
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  }
];
