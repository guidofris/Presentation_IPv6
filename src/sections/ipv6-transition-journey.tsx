import { Compass, CheckCircle, ArrowRight, Shield } from 'lucide-react';
import { SlideType } from './types';

export const ipv6TransitionJourneySlides: SlideType[] = [
  // ─── Title slide ──────────────────────────────────────────────────────────
  {
    title: '',
    subtitle: '',
    content: (
      <div className="flex flex-col items-center justify-center h-full space-y-6 px-4">
        <Compass className="w-20 h-20 text-orange-500" />
        <h1 className="text-5xl md:text-6xl font-bold text-orange-900 text-center">IPv6-Only Journey</h1>
        <p className="text-xl md:text-2xl text-gray-600 text-center max-w-2xl">
          A practical transition path from dual-stack to IPv6-mostly and eventually IPv6-only.
        </p>
        <div className="flex space-x-2 mt-4">
          <div className="w-3 h-3 bg-orange-300 rounded-full"></div>
          <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
          <div className="w-3 h-3 bg-orange-300 rounded-full"></div>
        </div>
      </div>
    ),
  },

  // ─── I'm Not Self Assured — slide 39 ────────────────────────────────────
  {
    title: "I'm Not So Self Assured…",
    subtitle: 'The transition to IPv6-only is a staged journey, not a big bang',
    content: (
      <div className="flex flex-col space-y-3 max-w-3xl mx-auto">
        <div className="flex items-center justify-center gap-2 flex-wrap">
          {[
            { label: 'IPv4-Only', bg: 'bg-gray-200', border: 'border-gray-400', text: 'text-gray-800' },
            { label: '→', bg: '', border: '', text: 'text-gray-400 text-xl' },
            { label: 'Dual Stack', bg: 'bg-blue-100', border: 'border-blue-400', text: 'text-blue-800' },
            { label: '→', bg: '', border: '', text: 'text-gray-400 text-xl' },
            { label: 'IPv6-Only', bg: 'bg-green-100', border: 'border-green-500', text: 'text-green-800' },
          ].map((s, i) =>
            s.bg ? (
              <div key={i} className={`px-4 py-2 rounded-lg border-2 ${s.bg} ${s.border} text-sm font-bold ${s.text}`}>{s.label}</div>
            ) : (
              <span key={i} className={s.text}>{s.label}</span>
            )
          )}
        </div>
        <div className="bg-orange-50 p-3 rounded-lg border-l-4 border-orange-500">
          <h4 className="text-sm font-bold text-orange-900 mb-1">Why the hesitation?</h4>
          <ul className="space-y-0.5 text-xs text-gray-700">
            <li>• Fear of breaking IPv4-dependent applications</li>
            <li>• Legacy services with IP literals hard-coded</li>
            <li>• DNS resolvers not configured to handle AAAA-only responses</li>
            <li>• Infrastructure components (load balancers, firewalls) IPv4-only</li>
          </ul>
        </div>
        <div className="bg-blue-50 p-2 rounded text-xs text-blue-800 border border-blue-200">
          The <strong>IPv6-mostly</strong> intermediate stage lets you move clients to IPv6 while keeping DHCPv4 as a safety net for legacy devices.
        </div>
      </div>
    ),
  },

  // ─── Life on an IPv6-only island — slide 40 ───────────────────────────────
  {
    title: 'Life on an IPv6-Only Island',
    subtitle: 'Assessment is critical — what needs to work before you flip the switch?',
    content: (
      <div className="flex flex-col space-y-2 max-w-3xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div className="bg-white p-3 rounded-lg shadow border border-orange-200">
            <h4 className="text-sm font-bold text-orange-900 mb-1">IPv6-Only Hosts</h4>
            <ul className="space-y-0.5 text-xs text-gray-700">
              <li>• What is the host actually accessing?</li>
              <li>• Are all services reachable via IPv6 or NAT64?</li>
              <li>• OS support for NAT64 (CLAT) required?</li>
            </ul>
          </div>
          <div className="bg-white p-3 rounded-lg shadow border border-orange-200">
            <h4 className="text-sm font-bold text-orange-900 mb-1">IPv6-Only Servers</h4>
            <ul className="space-y-0.5 text-xs text-gray-700">
              <li>• How is the service offered? (cloud, SLB, tiered app…)</li>
              <li>• North→South access (out of DC)</li>
              <li>• East→West access (internal DC)</li>
            </ul>
          </div>
          <div className="bg-white p-3 rounded-lg shadow border border-red-200">
            <h4 className="text-sm font-bold text-red-900 mb-1">DNS Issues</h4>
            <ul className="space-y-0.5 text-xs text-gray-700">
              <li>• AAAA records present for all internal services?</li>
              <li>• DNS64 synthesis for IPv4-only destinations</li>
              <li>• DNS resolver IPv6 reachability</li>
            </ul>
          </div>
          <div className="bg-white p-3 rounded-lg shadow border border-yellow-200">
            <h4 className="text-sm font-bold text-yellow-900 mb-1">Application Issues</h4>
            <ul className="space-y-0.5 text-xs text-gray-700">
              <li>• Can the application support IPv6-only?</li>
              <li>• IP literals hard-coded? (breakers!)</li>
              <li>• NAT issues with custom protocols</li>
            </ul>
          </div>
        </div>
        <div className="bg-orange-50 p-2 rounded text-xs text-orange-800 border border-orange-200">
          <strong>Assessment process is critical.</strong> Discover all IP literals and IPv4-only dependencies before the cutover.
        </div>
      </div>
    ),
  },

  // ─── RFC 8925 — slide 41 ──────────────────────────────────────────────────
  {
    title: 'RFC 8925 — IPv6-Only Preferred',
    subtitle: 'A DHCP option that tells capable clients to go IPv6-only immediately',
    content: (
      <div className="flex flex-col space-y-3 max-w-3xl mx-auto">
        <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-500">
          <h4 className="text-sm font-bold text-orange-900 mb-2">What is it?</h4>
          <p className="text-xs text-gray-700">
            RFC 8925 defines <strong>DHCPv4 option 108</strong> — "IPv6-Only Preferred". When a DHCPv4 server includes this option, IPv6-capable clients may voluntarily not configure a DHCPv4 address and operate IPv6-only instead.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div className="bg-white p-3 rounded-lg shadow border border-orange-200">
            <h4 className="text-sm font-bold text-orange-900 mb-1">How it works</h4>
            <ul className="space-y-0.5 text-xs text-gray-700">
              <li>• Client sends DHCP Discover with option 108 in PRL</li>
              <li>• Server responds with option 108 value = backoff timer</li>
              <li>• Client holds IPv6-only for the timer duration</li>
              <li>• Non-IPv6 capable clients ignore option 108 and get IPv4</li>
            </ul>
          </div>
          <div className="bg-white p-3 rounded-lg shadow border border-orange-200">
            <h4 className="text-sm font-bold text-orange-900 mb-1">Benefits</h4>
            <ul className="space-y-0.5 text-xs text-gray-700">
              <li>• No per-device configuration needed</li>
              <li>• Gradual rollout — only IPv6-ready clients transition</li>
              <li>• Legacy devices automatically get IPv4</li>
              <li>• Clean separation without manual intervention</li>
            </ul>
          </div>
        </div>
        <div className="bg-blue-50 p-2 rounded text-xs text-blue-800 border border-blue-200">
          Standardized in <strong>RFC 8925</strong> (October 2020). Server-side is just adding one DHCP option — minimal infrastructure change.
        </div>
      </div>
    ),
  },

  // ─── The Journey: adding IPv6-Mostly — slide 43 ───────────────────────────
  {
    title: 'The Journey: Adding IPv6-Mostly',
    subtitle: 'The intermediate step between dual-stack and IPv6-only',
    content: (
      <div className="flex flex-col space-y-3 max-w-3xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-center gap-2 flex-wrap">
          {[
            { label: 'IPv4-Only', bg: 'bg-gray-200', border: 'border-gray-400', text: 'text-gray-800' },
            { label: '→', extra: 'text-gray-400 text-xl' },
            { label: 'Dual Stack', bg: 'bg-blue-100', border: 'border-blue-400', text: 'text-blue-800' },
            { label: '→', extra: 'text-gray-400 text-xl' },
            { label: 'IPv6-Mostly', bg: 'bg-orange-100', border: 'border-orange-500', text: 'text-orange-800', highlight: true },
            { label: '→', extra: 'text-gray-400 text-xl' },
            { label: 'IPv6-Only', bg: 'bg-green-100', border: 'border-green-500', text: 'text-green-800' },
          ].map((s, i) =>
            s.extra ? (
              <span key={i} className={s.extra}>{s.label}</span>
            ) : (
              <div key={i} className={`px-3 py-2 rounded-lg border-2 ${s.bg} ${s.border} text-xs font-bold ${s.text} ${s.highlight ? 'ring-2 ring-orange-400' : ''}`}>{s.label}</div>
            )
          )}
        </div>
        <div className="bg-orange-50 p-3 rounded-lg border-l-4 border-orange-500">
          <h4 className="text-sm font-bold text-orange-900 mb-1">IPv6-Mostly = The safe bridge</h4>
          <ul className="space-y-0.5 text-xs text-gray-700">
            <li>• <strong>IPv6-capable clients</strong> use IPv6 (option 108 honored) — no DHCPv4 lease consumed</li>
            <li>• <strong>Legacy clients</strong> still get IPv4 from DHCPv4 — zero disruption</li>
            <li>• <strong>NAT64/DNS64</strong> handles IPv6-only clients reaching IPv4 destinations</li>
            <li>• <strong>Backoff timer</strong> lets clients temporarily fall back to IPv4 if needed</li>
          </ul>
        </div>
        <div className="bg-green-50 p-2 rounded text-xs text-green-800 border border-green-200">
          IPv6-Mostly is the recommended <strong>operational state for most enterprise networks today</strong> — it de-risks IPv6-only while still maintaining full IPv4 reach.
        </div>
      </div>
    ),
  },

  // ─── What is needed in my network? — slide 44 ────────────────────────────
  {
    title: 'What Is Needed in My Network?',
    subtitle: 'Components required for IPv6-mostly (and the path to IPv6-only)',
    content: (
      <div className="flex flex-col space-y-3 max-w-3xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div className="bg-white p-3 rounded-lg shadow border-l-4 border-orange-500">
            <div className="flex items-center gap-2 mb-1">
              <Shield className="w-4 h-4 text-orange-500" />
              <h4 className="text-sm font-bold text-orange-900">NAT64 at site edge</h4>
            </div>
            <p className="text-xs text-gray-700">Translates IPv6 packets from IPv6-only clients to IPv4 for reaching legacy IPv4 destinations.</p>
          </div>
          <div className="bg-white p-3 rounded-lg shadow border-l-4 border-blue-500">
            <div className="flex items-center gap-2 mb-1">
              <ArrowRight className="w-4 h-4 text-blue-500" />
              <h4 className="text-sm font-bold text-blue-900">RA with DNS64 + PREF64</h4>
            </div>
            <p className="text-xs text-gray-700">Router Advertisements carry DNS64 server address and PREF64 prefix options (RFC 8781) for automatic client discovery.</p>
          </div>
          <div className="bg-white p-3 rounded-lg shadow border-l-4 border-green-500">
            <div className="flex items-center gap-2 mb-1">
              <CheckCircle className="w-4 h-4 text-green-500" />
              <h4 className="text-sm font-bold text-green-900">SLAAC-only addressing</h4>
            </div>
            <p className="text-xs text-gray-700"><strong>No DHCPv6 for address assignment!</strong> Clients use SLAAC. Simplifies deployment and avoids DHCPv6 state management.</p>
          </div>
          <div className="bg-white p-3 rounded-lg shadow border-l-4 border-purple-500">
            <div className="flex items-center gap-2 mb-1">
              <Compass className="w-4 h-4 text-purple-500" />
              <h4 className="text-sm font-bold text-purple-900">Centralized DHCPv4</h4>
            </div>
            <p className="text-xs text-gray-700">Single DHCPv4 infrastructure (not per-site) for legacy clients. Smaller pool — IPv6-capable devices won't request leases.</p>
          </div>
        </div>
      </div>
    ),
  },

  // ─── How does IPv6-mostly work? — slides 45-46 ────────────────────────────
  {
    title: 'How Does IPv6-Mostly Work?',
    subtitle: 'DHCPv4 option 108 controls whether a client skips the IPv4 lease',
    content: (
      <div className="flex flex-col space-y-3 max-w-3xl mx-auto">
        <div className="space-y-2">
          {[
            {
              client: 'IPv4-only device',
              color: 'gray',
              flow: ['Sends DHCP Discover (no option 108 in PRL)', 'Receives IPv4 address from DHCPv4', 'Operates IPv4-only as before'],
            },
            {
              client: 'IPv6-capable + option 108 support',
              color: 'orange',
              flow: [
                'Sends DHCP Discover with option 108 in PRL',
                'Server replies with option 108 value (backoff timer, e.g. 3600s)',
                'Client holds IPv6 address, does NOT use DHCPv4 lease',
                'Uses NAT64/DNS64 for any IPv4-only destinations',
                'If IPv6 fails within timer → falls back to DHCPv4',
              ],
            },
            {
              client: 'IPv6-capable but no option 108 support',
              color: 'blue',
              flow: ['Sends DHCP Discover without option 108', 'Receives IPv4 address from DHCPv4', 'Operates dual-stack (IPv6 + IPv4)'],
            },
          ].map((row, i) => (
            <div key={i} className={`bg-${row.color}-50 p-2 rounded-lg border border-${row.color}-200`}>
              <h4 className={`text-xs font-bold text-${row.color}-900 mb-1`}>{row.client}</h4>
              <div className="flex flex-wrap gap-1">
                {row.flow.map((step, j) => (
                  <span key={j} className="text-xs bg-white px-2 py-0.5 rounded border text-gray-600">
                    {j + 1}. {step}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="bg-orange-50 p-2 rounded text-xs text-orange-800 border border-orange-200">
          <strong>Key insight:</strong> "Keep DHCPv4 running with a backoff timer, just in case IPv4 needs to be re-enabled." — RFC 8925
        </div>
      </div>
    ),
  },

  // ─── Option 108 OS Support — slide 47 ────────────────────────────────────
  {
    title: 'Option 108 — OS Support Today',
    subtitle: 'Which operating systems already support IPv6-Only Preferred (RFC 8925)?',
    content: (
      <div className="flex flex-col space-y-3 max-w-3xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div className="bg-green-50 p-3 rounded-lg border border-green-200">
            <h4 className="text-sm font-bold text-green-900 mb-1">Supported</h4>
            <ul className="space-y-0.5 text-xs text-gray-700">
              <li><CheckCircle className="inline w-3 h-3 text-green-500 mr-1" />iOS / iPadOS</li>
              <li><CheckCircle className="inline w-3 h-3 text-green-500 mr-1" />macOS</li>
              <li><CheckCircle className="inline w-3 h-3 text-green-500 mr-1" />Android</li>
              <li><CheckCircle className="inline w-3 h-3 text-green-500 mr-1" />Linux (modern kernels + NetworkManager)</li>
              <li><CheckCircle className="inline w-3 h-3 text-green-500 mr-1" />Windows 11 (with CLAT support — see blog)</li>
            </ul>
          </div>
          <div className="bg-yellow-50 p-3 rounded-lg border border-yellow-200">
            <h4 className="text-sm font-bold text-yellow-900 mb-1">Windows 11 CLAT</h4>
            <p className="text-xs text-gray-700 mb-1">
              Windows 11 is expanding CLAT (Customer-side Translator) support to enable full IPv6-only operation for apps that still use IPv4 APIs.
            </p>
            <p className="text-xs text-blue-600 break-all">
              techcommunity.microsoft.com/t5/networking-blog/windows-11-plans-to-expand-clat-support/ba-p/4078173
            </p>
          </div>
        </div>
        <div className="bg-orange-50 p-3 rounded-lg border-l-4 border-orange-500">
          <h4 className="text-sm font-bold text-orange-900 mb-1">What is CLAT?</h4>
          <p className="text-xs text-gray-700">
            CLAT (464XLAT client-side) synthesizes IPv4 addresses on the device for applications that only speak IPv4. The IPv4 packet is translated by CLAT → sent IPv6 → reverse-translated by PLAT (NAT64) at the network edge. Fully transparent to the application.
          </p>
        </div>
      </div>
    ),
  },

  // ─── A Nice Path Towards IPv6-Only — slide 53 ────────────────────────────
  {
    title: 'A Nice Path Towards IPv6-Only',
    subtitle: 'Legacy IPv4 application dependencies shrink as you modernize',
    content: (
      <div className="flex flex-col space-y-3 max-w-3xl mx-auto">
        <div className="bg-orange-50 p-3 rounded-lg border-l-4 border-orange-500">
          <p className="text-xs text-gray-700">
            The staircase below represents how your fleet of IPv4-only applications shrinks as you modernize. IPv6-Mostly carries the network forward while legacy apps are replaced on their own timetable.
          </p>
        </div>
        <div className="overflow-x-auto">
          <div className="flex flex-col gap-1 text-xs">
            {[
              { label: 'IPv4-Only', pct: 100, color: 'bg-gray-300', desc: 'All traffic — legacy apps, no IPv6' },
              { label: 'Dual Stack', pct: 80, color: 'bg-blue-200', desc: 'IPv6 deployed, most traffic IPv4' },
              { label: 'IPv6-Mostly', pct: 55, color: 'bg-orange-200', desc: 'Option 108 active, new devices IPv6-only' },
              { label: 'IPv6-Mostly (advanced)', pct: 30, color: 'bg-orange-300', desc: 'Legacy apps replaced/NAT64-wrapped' },
              { label: 'IPv6-Only', pct: 5, color: 'bg-green-300', desc: 'DHCPv4 only for residual legacy devices' },
            ].map((row, i) => (
              <div key={i} className="flex items-center gap-2">
                <span className="w-36 shrink-0 text-gray-600">{row.label}</span>
                <div className="flex-1 bg-gray-100 rounded h-5 overflow-hidden">
                  <div className={`${row.color} h-full rounded`} style={{ width: `${row.pct}%` }}></div>
                </div>
                <span className="text-gray-500 text-xs">{row.desc}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-green-50 p-2 rounded text-xs text-green-800 border border-green-200">
          No need to rush IPv6-only everywhere at once. Migrate workloads as you go — modern services first, legacy last.
        </div>
      </div>
    ),
  },

  // ─── Broccoli closing quote — slide 54 ───────────────────────────────────
  {
    title: '',
    subtitle: '',
    content: (
      <div className="flex flex-col items-center justify-center h-full space-y-6 px-6">
        <div className="bg-green-50 p-8 rounded-xl border-l-4 border-green-500 max-w-2xl text-center shadow-lg">
          <p className="text-xl md:text-2xl italic font-semibold text-green-900 leading-relaxed">
            "IPv6 is Internet broccoli. Good for us in the long run but no immediate sugar rush from deploying it now."
          </p>
          <p className="text-sm text-gray-500 mt-4">— Guido Frissaer</p>
        </div>
        <p className="text-xs text-gray-400">…but deploy it anyway. Your future self will thank you.</p>
      </div>
    ),
  },

  // ─── Thank You — slide 55 ─────────────────────────────────────────────────
  {
    title: '',
    subtitle: '',
    content: (
      <div className="flex flex-col items-center justify-center h-full space-y-6 px-4">
        <Compass className="w-16 h-16 text-orange-500" />
        <h1 className="text-5xl font-bold text-orange-900">Thank You</h1>
        <div className="flex flex-col items-center gap-2 text-gray-600">
          <p className="text-lg">Guido Frissaer — IPv6 Forum Fellow</p>
          <p className="text-sm text-gray-400">Let's Deploy IPv6 NOW!</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-4">
          {[
            { label: 'IPv6 Reality Check', color: 'bg-blue-100 text-blue-800' },
            { label: 'Address Design', color: 'bg-green-100 text-green-800' },
            { label: 'IPv6 Operations', color: 'bg-purple-100 text-purple-800' },
            { label: 'IPv6-Only Journey', color: 'bg-orange-100 text-orange-800' },
          ].map((s, i) => (
            <div key={i} className={`px-3 py-2 rounded-lg text-xs font-semibold text-center ${s.color}`}>{s.label}</div>
          ))}
        </div>
        <div className="flex space-x-2 mt-4">
          <div className="w-3 h-3 bg-orange-300 rounded-full"></div>
          <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
          <div className="w-3 h-3 bg-orange-300 rounded-full"></div>
        </div>
      </div>
    ),
  },
];
