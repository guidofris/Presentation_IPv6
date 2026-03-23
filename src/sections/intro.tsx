import { SlideType } from './types';

export const introSlides: SlideType[] = [
  {
    title: "",
    subtitle: "",
    content: (
      <div className="flex flex-col items-center justify-center h-full space-y-6 px-4">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-2">Linux Advanced</h2>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-600">Systeem- en netwerkbeheer</p>
        </div>

        <div className="bg-white p-6 md:p-8 rounded-lg shadow-lg border border-gray-200 w-full max-w-3xl">
          <div className="text-center">
            <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-2">Praktijkgerichte cursus</h3>
            <p className="text-base md:text-lg text-gray-600 mb-4">
              Van installatie en basis server-setup tot netwerkdiensten, web/LAMP, filesharing en beveiliging.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-6 text-gray-600 text-sm md:text-base">
              <span className="flex items-center space-x-2">
                <span>📧</span>
                <span>guido.frissaer@pxl.be</span>
              </span>
              <span className="flex items-center space-x-2">
                <span>📧</span>
                <span>stijn.jacobs@pxl.be</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    )
  },
  {
    title: "Inhoud van de cursus",
    subtitle: "Wat je opbouwt in Linux Advanced",
    content: (
      <div className="flex flex-col space-y-6 max-w-4xl mx-auto px-4 md:px-0">
        <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
          <h3 className="text-2xl font-bold text-blue-900 mb-3">Doel</h3>
          <p className="text-gray-700 text-lg">
            Je leert enterprise Linux-omgevingen beheren: installatie, netwerkdiensten, webstacks,
            filesharing, beveiliging en monitoring.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white p-5 rounded-lg shadow border border-blue-200">
            <h4 className="font-semibold text-blue-900 mb-3">Technische thema's</h4>
            <ul className="space-y-2 text-gray-700">
              <li>• Installatie en basis server-setup</li>
              <li>• IP-configuratie, routing en netwerkbeheer</li>
              <li>• Webservers, virtual hosting en LAMP</li>
              <li>• Filesharing, SELinux en nftables</li>
              <li>• Monitoring, logging en troubleshooting</li>
            </ul>
          </div>

          <div className="bg-white p-5 rounded-lg shadow border border-blue-200">
            <h4 className="font-semibold text-blue-900 mb-3">Evaluatie</h4>
            <ul className="space-y-2 text-gray-700">
              <li>• 50% voortgangsbeoordeling</li>
              <li>• 50% eindexamen</li>
              <li>• Focus op praktijk en documentatie</li>
              <li>• Resultaat: stabiele serveropstellingen</li>
            </ul>
          </div>
        </div>

        <div className="bg-blue-100 p-4 rounded-lg">
          <p className="text-sm italic text-blue-900">
            <strong>Startpunt:</strong> In week 1 leggen we de basis met installatie, snapshots en cloning van je VM's.
          </p>
        </div>
      </div>
    )
  },
];
