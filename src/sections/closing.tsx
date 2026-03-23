import { SlideType } from './types';

export const closingSlides: SlideType[] = [
  {
    title: "",
    subtitle: "",
    content: (
      <div className="flex flex-col justify-center h-full max-w-4xl mx-auto space-y-3 px-3 md:px-0">
        <div className="bg-blue-50 border-l-4 border-blue-500 rounded-lg p-3 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-blue-900">
            Linux Advanced is pas echt af als je het morgen opnieuw doet zonder spiekbrief.
          </h2>
        </div>

        <div className="bg-white p-3 rounded-lg shadow border border-blue-200">
          <h3 className="text-sm font-bold text-blue-900 mb-2">Praktische recap</h3>
          <ul className="text-sm text-gray-700 space-y-1">
            <li>• Je automatiseert beheer met shell en systemd in plaats van handwerk.</li>
            <li>• Je beveiligt de host met least privilege, logging en gerichte hardening.</li>
            <li>• Je beheert netwerkdiensten met inzicht in poorten, routes en policies.</li>
            <li>• Je valideert elke wijziging met meetbare checks voor je verder gaat.</li>
          </ul>
        </div>

        <div className="bg-green-50 p-3 rounded-lg border border-green-200 space-y-2">
          <h3 className="text-sm font-bold text-green-900">Volgende stap: mini-lab van 30 minuten</h3>
          <div className="text-xs md:text-sm text-gray-700 space-y-1">
            <p>
              1) Baseline en updates: <span className="font-mono">sudo apt update && sudo apt upgrade -y</span>
              <span className="text-green-800"> | Checkpoint: geen failed packages.</span>
            </p>
            <p>
              2) Dienstcontrole: <span className="font-mono">systemctl --failed && sudo ss -tulpn</span>
              <span className="text-green-800"> | Checkpoint: enkel verwachte services en poorten.</span>
            </p>
            <p>
              3) Hardening-check: <span className="font-mono">sudo journalctl -p err -b --no-pager</span>
              <span className="text-green-800"> | Checkpoint: kritieke fouten opgelost of geticket.</span>
            </p>
          </div>
        </div>

        <div className="text-center">
          <p className="text-sm text-gray-600 italic">
            "Sterke Linux-admins gokken niet, ze meten, valideren en verbeteren."
          </p>
        </div>
      </div>
    )
  }
];
