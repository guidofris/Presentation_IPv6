import { Ruler, Calculator, MapPin, Layers } from 'lucide-react';
import { SlideType } from './types';

export const ipv6AddressingDesignSlides: SlideType[] = [
  // ─── Title slide ──────────────────────────────────────────────────────────
  {
    title: '',
    subtitle: '',
    content: (
      <div className="flex flex-col items-center justify-center h-full space-y-6 px-4">
        <Ruler className="w-20 h-20 text-green-500" />
        <h1 className="text-5xl md:text-6xl font-bold text-green-900 text-center">IPv6 Address Design</h1>
        <p className="text-xl md:text-2xl text-gray-600 text-center max-w-2xl">
          Practical planning rules that keep IPv6 simple, scalable, and supportable.
        </p>
        <div className="flex space-x-2 mt-4">
          <div className="w-3 h-3 bg-green-300 rounded-full"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          <div className="w-3 h-3 bg-green-300 rounded-full"></div>
        </div>
      </div>
    ),
  },

  // ─── A Shift in Thinking ──────────────────────────────────────────────────
  {
    title: 'A Shift in Thinking',
    subtitle: 'IPv6 changes how you should plan your address space',
    content: (
      <div className="flex flex-col space-y-3 max-w-3xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-400 text-center">
            <h3 className="text-sm font-bold text-red-800 mb-2">IPv4 thinking</h3>
            <Layers className="w-8 h-8 text-red-500 mx-auto mb-2" />
            <p className="text-sm text-red-900 font-semibold">Addresses</p>
            <p className="text-xs text-gray-600 mt-1">How many hosts per subnet? Count carefully — addresses are scarce.</p>
          </div>
          <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500 text-center">
            <h3 className="text-sm font-bold text-green-800 mb-2">IPv6 thinking</h3>
            <MapPin className="w-8 h-8 text-green-500 mx-auto mb-2" />
            <p className="text-sm text-green-900 font-semibold">Subnets</p>
            <p className="text-xs text-gray-600 mt-1">How many /64 subnets do I need? Addresses are unlimited — count prefixes instead.</p>
          </div>
        </div>
        <div className="bg-blue-50 p-3 rounded-lg border-l-4 border-blue-400">
          <p className="text-xs text-blue-900">
            <strong>Key insight:</strong> In IPv6, every subnet is a /64. You always have 18 quintillion addresses per subnet. Your job is to design the subnet hierarchy, not to minimize per-subnet host counts.
          </p>
        </div>
      </div>
    ),
  },

  // ─── IPv4 vs IPv6 Comparison ──────────────────────────────────────────────
  {
    title: 'How Do IPv4 and IPv6 Compare?',
    subtitle: 'The scale difference changes everything about network design',
    content: (
      <div className="flex flex-col space-y-3 max-w-3xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div className="bg-red-50 p-3 rounded-lg border border-red-200">
            <h4 className="text-sm font-bold text-red-800 mb-2">IPv4</h4>
            <ul className="space-y-1 text-xs text-gray-700">
              <li>• 32-bit addresses = ~4.3 billion total</li>
              <li>• Already exhausted (IANA 2011, regional RIRs followed)</li>
              <li>• Requires NAT to extend usable space</li>
              <li>• CIDR allows flexible prefix lengths</li>
              <li>• Host counting per subnet is essential</li>
            </ul>
          </div>
          <div className="bg-green-50 p-3 rounded-lg border border-green-200">
            <h4 className="text-sm font-bold text-green-800 mb-2">IPv6</h4>
            <ul className="space-y-1 text-xs text-gray-700">
              <li>• 128-bit addresses = 340 undecillion total</li>
              <li>• Interface IDs always /64 — never count hosts</li>
              <li>• No NAT needed — address space is infinite for all practical purposes</li>
              <li>• Nibble boundaries simplify prefix hierarchy</li>
              <li>• Design for subnets, not hosts</li>
            </ul>
          </div>
        </div>
        <div className="bg-green-50 p-2 rounded text-xs text-green-800 border border-green-200">
          Source: ARIN IPv6 Network Planning Guide — <span className="text-green-600">arin.net/reference/training/resources/ipv6_networkplan.pdf</span>
        </div>
      </div>
    ),
  },

  // ─── PA vs PI ─────────────────────────────────────────────────────────────
  {
    title: 'IPv6 Address Space: PA vs. PI',
    subtitle: 'Provider Aggregatable or Provider Independent — choose wisely',
    content: (
      <div className="flex flex-col space-y-3 max-w-3xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div className="bg-blue-50 p-3 rounded-lg border border-blue-200">
            <h4 className="text-sm font-bold text-blue-900 mb-1">Provider Aggregatable (PA)</h4>
            <ul className="space-y-0.5 text-xs text-gray-700">
              <li>• Original intention for all users</li>
              <li>• Typical for residential &amp; small business</li>
              <li>• Prefixes may change (DHCPv6-PD)</li>
              <li>• Aggregates cleanly into ISP routing table</li>
            </ul>
          </div>
          <div className="bg-purple-50 p-3 rounded-lg border border-purple-200">
            <h4 className="text-sm font-bold text-purple-900 mb-1">Provider Independent (PI)</h4>
            <ul className="space-y-0.5 text-xs text-gray-700">
              <li>• Now more common in enterprises</li>
              <li>• Provides address stability and control</li>
              <li>• Requires AS number + extra cost</li>
              <li>• Often used with BGP (though not always)</li>
            </ul>
          </div>
        </div>
        <div className="bg-green-50 p-3 rounded-lg border-l-4 border-green-500">
          <h4 className="text-sm font-bold text-green-900 mb-1">Key considerations</h4>
          <ul className="space-y-0.5 text-xs text-gray-700">
            <li>• Will you have local internet breakout (DIA) at each site?</li>
            <li>• Will your ISP run BGP with you at each site?</li>
            <li>• One PI block globally, or per-RIR?</li>
            <li>• Are you multihoming today or planning to?</li>
          </ul>
        </div>
      </div>
    ),
  },

  // ─── The 4 Rules ─────────────────────────────────────────────────────────
  {
    title: 'The 4 Rules for IPv6 Address Planning',
    subtitle: 'Simple, meaningful, reserved, and aggregatable',
    content: (
      <div className="flex flex-col space-y-2 max-w-3xl mx-auto">
        <div className="bg-green-50 p-2 rounded border border-green-200 text-center text-xs font-bold text-green-800 mb-1">
          Remember Rule #1 throughout everything else!
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div className="bg-white p-3 rounded-lg shadow border-l-4 border-green-500">
            <div className="flex items-center gap-2 mb-1">
              <span className="w-6 h-6 bg-green-500 text-white rounded-full text-sm font-bold flex items-center justify-center">1</span>
              <h4 className="text-sm font-bold text-green-900">Simple</h4>
            </div>
            <p className="text-xs text-gray-700">Easy to explain, remember, and troubleshoot under pressure. You don't want to spend weeks explaining your scheme.</p>
          </div>
          <div className="bg-white p-3 rounded-lg shadow border-l-4 border-blue-500">
            <div className="flex items-center gap-2 mb-1">
              <span className="w-6 h-6 bg-blue-500 text-white rounded-full text-sm font-bold flex items-center justify-center">2</span>
              <h4 className="text-sm font-bold text-blue-900">Embed Information</h4>
            </div>
            <p className="text-xs text-gray-700">Encode useful metadata: location, country, PIN, VLAN, or even mapped IPv4 addresses in link-local or global addresses.</p>
          </div>
          <div className="bg-white p-3 rounded-lg shadow border-l-4 border-orange-500">
            <div className="flex items-center gap-2 mb-1">
              <span className="w-6 h-6 bg-orange-500 text-white rounded-full text-sm font-bold flex items-center justify-center">3</span>
              <h4 className="text-sm font-bold text-orange-900">Build-in Reserve</h4>
            </div>
            <p className="text-xs text-gray-700">Cater for future growth, mergers &amp; acquisitions, and new locations. Reserve vs. assigned — don't use all your space immediately.</p>
          </div>
          <div className="bg-white p-3 rounded-lg shadow border-l-4 border-purple-500">
            <div className="flex items-center gap-2 mb-1">
              <span className="w-6 h-6 bg-purple-500 text-white rounded-full text-sm font-bold flex items-center justify-center">4</span>
              <h4 className="text-sm font-bold text-purple-900">Aggregatable</h4>
            </div>
            <p className="text-xs text-gray-700">Good aggregation is essential. One address block per location. Ensures scalability and routing table stability.</p>
          </div>
        </div>
      </div>
    ),
  },

  // ─── Address Plan Methodology ─────────────────────────────────────────────
  {
    title: 'Address Plan Methodology',
    subtitle: 'Top-down hierarchical design — geography then function',
    content: (
      <div className="flex flex-col space-y-3 max-w-3xl mx-auto">
        <div className="bg-green-50 p-3 rounded-lg border-l-4 border-green-500">
          <h4 className="text-sm font-bold text-green-900 mb-1">Core principles</h4>
          <ul className="space-y-0.5 text-xs text-gray-700">
            <li>• Design the addressing plan <strong>globally</strong> before deploying at any site</li>
            <li>• Use a <strong>top-down hierarchical</strong> structure: global → region → campus → building → PIN</li>
            <li>• Count <strong>subnets / prefixes</strong> at each level — not hosts</li>
            <li>• Align prefix boundaries to <strong>nibble boundaries</strong> (multiples of 4 bits) for readability</li>
          </ul>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div className="bg-white p-3 rounded-lg shadow border border-green-200">
            <h4 className="text-sm font-bold text-green-900 mb-1">Geography layer</h4>
            <ul className="space-y-0.5 text-xs text-gray-700">
              <li>• Countries, regions, buildings, branches</li>
              <li>• Maps onto physical/logical topology</li>
              <li>• Enables summarization at each level</li>
            </ul>
          </div>
          <div className="bg-white p-3 rounded-lg shadow border border-green-200">
            <h4 className="text-sm font-bold text-green-900 mb-1">Function (PIN) layer</h4>
            <ul className="space-y-0.5 text-xs text-gray-700">
              <li>• PIN = Place In the Network</li>
              <li>• Services, applications, platforms, VLANs</li>
              <li>• e.g., Lab, Desktop, DC, DMZ, Guest WiFi</li>
            </ul>
          </div>
        </div>
      </div>
    ),
  },

  // ─── Address Overview Example ─────────────────────────────────────────────
  {
    title: 'Address Overview Example',
    subtitle: 'Breaking down a /28 from RIR into a practical hierarchy',
    content: (
      <div className="flex flex-col space-y-2 max-w-3xl mx-auto">
        <div className="bg-green-50 p-2 rounded text-xs text-green-800 border border-green-200 mb-1">
          Use nibble boundaries — each nibble = 4 bits = one hex character. Keeps addresses readable.
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-xs border-collapse">
            <thead>
              <tr className="bg-green-100">
                <th className="p-2 text-left border border-green-300">Level</th>
                <th className="p-2 text-left border border-green-300">Prefix</th>
                <th className="p-2 text-left border border-green-300">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white">
                <td className="p-2 border border-gray-200 font-semibold">Global</td>
                <td className="p-2 border border-gray-200 font-mono">/29</td>
                <td className="p-2 border border-gray-200">From RIR (50% spare for growth)</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="p-2 border border-gray-200 font-semibold">Region</td>
                <td className="p-2 border border-gray-200 font-mono">/32</td>
                <td className="p-2 border border-gray-200">Per geographic region</td>
              </tr>
              <tr className="bg-white">
                <td className="p-2 border border-gray-200 font-semibold">Sub-Region</td>
                <td className="p-2 border border-gray-200 font-mono">/36</td>
                <td className="p-2 border border-gray-200">Per sub-region</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="p-2 border border-gray-200 font-semibold">Campus</td>
                <td className="p-2 border border-gray-200 font-mono">/40</td>
                <td className="p-2 border border-gray-200">Per campus (256 buildings)</td>
              </tr>
              <tr className="bg-white">
                <td className="p-2 border border-gray-200 font-semibold">Building/Branch</td>
                <td className="p-2 border border-gray-200 font-mono">/48</td>
                <td className="p-2 border border-gray-200">16 PINs per building/branch</td>
              </tr>
              <tr className="bg-green-50 border-l-4 border-green-400">
                <td className="p-2 border border-gray-200 font-semibold">PIN *</td>
                <td className="p-2 border border-gray-200 font-mono">/52</td>
                <td className="p-2 border border-gray-200">4096 /64 subnets per PIN</td>
              </tr>
              <tr className="bg-blue-50">
                <td className="p-2 border border-gray-200 font-semibold">Subnet</td>
                <td className="p-2 border border-gray-200 font-mono">/64</td>
                <td className="p-2 border border-gray-200">Always /64 at the edge</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="text-xs text-gray-500">* PIN = Place In the Network — a framework to classify network functional areas (Lab, Desktop, DC, DMZ, etc.)</div>
      </div>
    ),
  },

  // ─── Address Planning Continued ────────────────────────────────────────────
  {
    title: 'Address Planning: Encoding Scheme Examples',
    subtitle: 'Multiple approaches — pick the one that fits your organization',
    content: (
      <div className="flex flex-col space-y-2 max-w-3xl mx-auto">
        <div className="bg-green-50 p-3 rounded-lg border-l-4 border-green-500">
          <h4 className="text-sm font-bold text-green-900 mb-1">Base: <code>2001:0db8::/32</code> (allocated from RIR)</h4>
          <p className="text-xs text-gray-600">Key: P=Global Prefix, C=Campus/Cloud/Colo, G=Geographic, L=Logical/PIN, S=Subnet</p>
        </div>
        <div className="space-y-1 text-xs font-mono">
          {[
            { scheme: 'PPPP:PPPP:CGGG:LSSS::/64', desc: 'Campus first' },
            { scheme: 'PPPP:PPPP:CGGG:LLSS::/64', desc: 'Larger logical space' },
            { scheme: 'PPPP:PPPC:GGGL:LSSS::/64', desc: 'PI block — campus in 3rd group' },
            { scheme: 'PPPP:PPPP:CGGG:GLSS::/64', desc: 'Geography + function hybrid' },
          ].map((row, i) => (
            <div key={i} className="flex gap-3 items-center bg-white p-2 rounded border">
              <code className="text-purple-700 shrink-0">{row.scheme}</code>
              <span className="text-gray-500">{row.desc}</span>
            </div>
          ))}
        </div>
        <div className="bg-orange-50 p-2 rounded text-xs text-orange-800 border border-orange-200">
          <strong>/48</strong> is the longest prefix allowed in global routing tables. Plan aggregation accordingly.
        </div>
      </div>
    ),
  },

  // ─── Template Addressing Example ─────────────────────────────────────────
  {
    title: 'Template Addressing: Functional Identifier Example',
    subtitle: 'Using the 13th nibble as a PIN functional identifier',
    content: (
      <div className="flex flex-col space-y-2 max-w-3xl mx-auto">
        <div className="bg-white p-3 rounded-lg shadow border border-green-200">
          <h4 className="text-sm font-bold text-green-900 mb-1">Base: <code className="text-green-700">2001:0db8:729c::/48</code></h4>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2 text-xs mt-2">
            {[
              { hex: '0', name: 'Reserved' },
              { hex: '2', name: 'Infrastructure' },
              { hex: '4', name: 'Desktop (wired)' },
              { hex: '6', name: 'Wireless (corp)' },
              { hex: '7', name: 'Guest WiFi' },
              { hex: 'A', name: 'Lab' },
              { hex: 'C', name: 'Building DC' },
              { hex: 'E', name: 'DMZ' },
              { hex: 'F', name: 'Reserved' },
            ].map((pin, i) => (
              <div key={i} className="flex items-center gap-1 bg-gray-50 p-1 rounded border">
                <code className="text-purple-700 font-bold">{pin.hex}</code>
                <span className="text-gray-700">{pin.name}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="space-y-0.5 text-xs font-mono bg-gray-50 p-2 rounded border">
          <div className="text-green-700">2001:0db8:729c:4000::/52 — Desktop PIN</div>
          <div className="text-blue-600 ml-4">2001:0db8:729c:4200::/64 — Desktop VLAN 200</div>
          <div className="text-blue-600 ml-4">2001:0db8:729c:4201::/64 — Desktop VLAN 201</div>
          <div className="text-orange-700">2001:0db8:029c:a000::/52 — Lab PIN</div>
          <div className="text-orange-600 ml-4">2001:0db8:029c:a004::/64 — Lab Subnet 4</div>
        </div>
      </div>
    ),
  },

  // ─── Secret Rule #5: Do Not Fear to Waste Addresses ───────────────────────
  {
    title: 'Secret Rule #5',
    subtitle: 'The most important mindset shift for IPv6 address planning',
    content: (
      <div className="flex flex-col items-center justify-center h-full space-y-6 px-4">
        <Calculator className="w-14 h-14 text-green-500" />
        <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500 max-w-2xl text-center">
          <p className="text-2xl font-bold text-green-900 mb-4">
            "Do not fear to waste addresses"
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-left">
            <div className="bg-white p-3 rounded border border-green-200">
              <h4 className="text-sm font-bold text-green-800 mb-1">Why it matters</h4>
              <ul className="space-y-0.5 text-xs text-gray-700">
                <li>• Every subnet is /64 — 18 quintillion addresses</li>
                <li>• Wasting addresses keeps design simple (#1)</li>
                <li>• Sparse allocation enables future embedding of info (#2)</li>
                <li>• Wasted space = built-in reserve (#3)</li>
              </ul>
            </div>
            <div className="bg-white p-3 rounded border border-green-200">
              <h4 className="text-sm font-bold text-green-800 mb-1">Let go of IPv4 habits</h4>
              <ul className="space-y-0.5 text-xs text-gray-700">
                <li>• Don't use /112 or /120 "to save space"</li>
                <li>• Don't squeeze links to /127 unless operationally justified</li>
                <li>• Nibble-aligned /48s look ugly but work beautifully</li>
              </ul>
            </div>
          </div>
        </div>
        <p className="text-xs text-gray-500 italic">Remember Rule #1: Simple. If you're trying to save addresses, you're still thinking in IPv4.</p>
      </div>
    ),
  },

  // ─── Let Go of Traditional Thinking ──────────────────────────────────────
  {
    title: 'Let Go of Traditional Thinking',
    subtitle: 'IPv6-only is the direction — not a distant goal',
    content: (
      <div className="flex flex-col space-y-3 max-w-3xl mx-auto">
        <div className="bg-green-50 p-3 rounded-lg border-l-4 border-green-500">
          <h3 className="text-sm font-bold text-green-900 mb-1">The IPv6-only datacenter reality</h3>
          <p className="text-xs text-gray-700">
            Major hyperscalers and cloud operators already run IPv6-only internal networks. NAT64/DNS64/CLAT handle any remaining IPv4 legacy requirements at the edges.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          <div className="bg-white p-3 rounded-lg shadow border border-green-200 text-center">
            <div className="text-xl font-bold text-green-700">Simpler</div>
            <p className="text-xs text-gray-600 mt-1">No dual-stack complexity, no NAT state tables</p>
          </div>
          <div className="bg-white p-3 rounded-lg shadow border border-green-200 text-center">
            <div className="text-xl font-bold text-blue-700">More Scalable</div>
            <p className="text-xs text-gray-600 mt-1">Massive address space, native multicast, no ARP storms</p>
          </div>
          <div className="bg-white p-3 rounded-lg shadow border border-green-200 text-center">
            <div className="text-xl font-bold text-purple-700">Future-Proof</div>
            <p className="text-xs text-gray-600 mt-1">Built for IoT, containers, mobile, and whatever comes next</p>
          </div>
        </div>
        <div className="bg-blue-50 p-2 rounded text-xs text-blue-800 border border-blue-200">
          Starting with IPv6-native design is vastly easier than retrofitting IPv6 onto an existing IPv4 infrastructure.
        </div>
      </div>
    ),
  },
];
