import { SlideType } from './types';

export const closingSlides: SlideType[] = [
  {
    title: "Afsluiting",
    subtitle: "Wat je nu beheerst",
    content: (
      <div className="flex flex-col justify-center h-full max-w-5xl mx-auto space-y-5 px-3 md:px-0">
        <div className="bg-blue-50 border-l-4 border-blue-500 rounded-lg p-4 md:p-6 text-center">
          <h2 className="text-2xl md:text-4xl font-bold text-blue-900">
            Van losse commando's naar een beheersbare, veilige en schaalbare omgeving.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white p-4 rounded-lg shadow border border-blue-200">
            <h3 className="text-sm font-bold text-blue-900 mb-2">Platform klaarzetten</h3>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>• Linux-installatie met snapshots en cloning</li>
              <li>• Baseline voor updates, services en back-ups</li>
              <li>• Reproduceerbare startconfiguratie</li>
            </ul>
          </div>
          <div className="bg-white p-4 rounded-lg shadow border border-blue-200">
            <h3 className="text-sm font-bold text-blue-900 mb-2">Diensten operationeel</h3>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>• Netwerkservices, webservers, LAMP en Samba</li>
              <li>• Processen, logging en troubleshooting</li>
              <li>• Validatie na elke wijziging</li>
            </ul>
          </div>
          <div className="bg-white p-4 rounded-lg shadow border border-blue-200">
            <h3 className="text-sm font-bold text-blue-900 mb-2">Security ingebouwd</h3>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>• SELinux-contexten en policy-denken</li>
              <li>• nftables-regels en gecontroleerde open poorten</li>
              <li>• Hardening met meetbare checkpoints</li>
            </ul>
          </div>
        </div>

        <div className="bg-green-50 p-4 rounded-lg border border-green-200">
          <p className="text-sm md:text-base text-green-900 text-center">
            Resultaat: je kan een Linux-serveromgeving niet alleen opbouwen, maar ook onderbouwen, monitoren en veilig beheren.
          </p>
        </div>
      </div>
    )
  },
  {
    title: "Na Deze Les",
    subtitle: "Concreet actieplan voor de komende 48 uur",
    content: (
      <div className="flex flex-col justify-center h-full max-w-4xl mx-auto space-y-4 px-3 md:px-0">
        <div className="bg-white p-4 md:p-6 rounded-lg shadow border border-gray-200">
          <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-4">30-minuten reliability sprint</h3>
          <div className="space-y-3 text-sm md:text-base text-gray-700">
            <p>
              1) Baseline refresh:
              <span className="font-mono"> sudo apt update && sudo apt upgrade -y</span>
            </p>
            <p>
              2) Service + poorten audit:
              <span className="font-mono"> systemctl --failed && sudo ss -tulpn</span>
            </p>
            <p>
              3) Security + logs check:
              <span className="font-mono"> sudo journalctl -p err -b --no-pager</span>
            </p>
            <p>
              4) Bewijs verzamelen: noteer wat je hebt veranderd en welke checks groen zijn.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
            <h4 className="font-bold text-blue-900 mb-2">Definition of done</h4>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>• Geen onverwachte failed services</li>
              <li>• Enkel verwachte poorten staan open</li>
              <li>• Geen kritieke errors in huidige boot</li>
            </ul>
          </div>
          <div className="bg-orange-50 p-4 rounded-lg border border-orange-200">
            <h4 className="font-bold text-orange-900 mb-2">Professionele gewoonte</h4>
            <p className="text-sm text-gray-700">
              Eerst meten, dan aanpassen, daarna opnieuw valideren. Zo bouw je stabiele infrastructuur op lange termijn.
            </p>
          </div>
        </div>
      </div>
    )
  },
  {
    title: "Bedankt",
    subtitle: "Q&A + feedback",
    content: (
      <div className="flex flex-col items-center justify-center h-full max-w-3xl mx-auto px-4 space-y-6 text-center">
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-8 rounded-2xl shadow-xl w-full">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">Vragen?</h2>
          <p className="text-base md:text-lg opacity-95">
            Deel je grootste insight of je lastigste praktijkprobleem, dan analyseren we het samen.
          </p>
        </div>

        <div className="bg-white p-5 rounded-lg border border-gray-200 shadow w-full">
          <p className="text-gray-700 text-sm md:text-base">
            Bedankt voor jullie inzet tijdens de labs. Jullie documentatie en validatiestappen maken hier het verschil.
          </p>
        </div>
      </div>
    )
  }
];
