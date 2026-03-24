import { Globe, TrendingUp, DollarSign, Users, CheckCircle, AlertCircle } from 'lucide-react';
import { SlideType } from './types';

export const ipv6FactsBusinessSlides: SlideType[] = [
  // ─── Title slide ──────────────────────────────────────────────────────────
  {
    title: '',
    subtitle: '',
    content: (
      <div className="flex flex-col items-center justify-center h-full space-y-6 px-4">
        <Globe className="w-20 h-20 text-blue-500" />
        <h1 className="text-5xl md:text-6xl font-bold text-blue-900 text-center">IPv6 Today</h1>
        <p className="text-xl md:text-2xl text-gray-600 text-center max-w-2xl">
          Perception vs Reality: Separating Fact from Fiction
        </p>
        <p className="text-sm text-gray-500 text-center">Guido Frissaer – Technical Solutions Architect – Chief Stroopwafel Officer</p>
        <div className="flex space-x-2 mt-4">
          <div className="w-3 h-3 bg-blue-300 rounded-full"></div>
          <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
          <div className="w-3 h-3 bg-blue-300 rounded-full"></div>
        </div>
      </div>
    ),
  },

  // ─── How is IPv6 like Broccoli? ───────────────────────────────────────────
  {
    title: 'How is IPv6 like Broccoli?',
    subtitle: 'Good for you in the long run, but not always appetizing at first',
    content: (
      <div className="flex flex-col space-y-3 max-w-3xl mx-auto">
        <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
          <p className="text-base text-blue-900 italic font-semibold text-center">
            "IPv6 is Internet broccoli. Good for us in the long run but no immediate sugar rush from deploying it now"
          </p>
          <p className="text-xs text-gray-500 text-center mt-1">— Guido Frissaer</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div className="bg-white p-3 rounded-lg shadow border border-blue-200">
            <h4 className="text-sm font-bold text-blue-900 mb-1">🥦 The broccoli analogy</h4>
            <ul className="space-y-1 text-xs text-gray-700">
              <li>• Everyone knows it's the right long-term choice</li>
              <li>• Most people keep postponing actually using it</li>
              <li>• Once you get used to it, it's fine — even good</li>
            </ul>
          </div>
          <div className="bg-white p-3 rounded-lg shadow border border-blue-200">
            <h4 className="text-sm font-bold text-blue-900 mb-1">The reality has changed</h4>
            <ul className="space-y-1 text-xs text-gray-700">
              <li>• Adoption is no longer a future question</li>
              <li>• Business pressure makes IPv4-only increasingly expensive</li>
              <li>• Government mandates are accelerating the timeline</li>
            </ul>
          </div>
        </div>
      </div>
    ),
  },

  // ─── Perception: Nobody Uses IPv6 ────────────────────────────────────────
  {
    title: 'Perception: Nobody Uses IPv6!',
    subtitle: 'A common misconception still widely held',
    content: (
      <div className="flex flex-col space-y-3 max-w-3xl mx-auto">
        <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-400">
          <div className="flex items-center gap-2 mb-2">
            <AlertCircle className="w-5 h-5 text-red-500" />
            <h3 className="text-sm font-bold text-red-800">Common perception</h3>
          </div>
          <p className="text-base text-red-800 font-semibold text-center py-2">
            "Nobody is actually using IPv6. It's a niche technology for the future."
          </p>
        </div>
        <div className="bg-white p-3 rounded-lg shadow border border-gray-200">
          <p className="text-sm text-gray-600 text-center italic">
            This perception is still common in many enterprise environments — but the data tells a very different story.
          </p>
        </div>
        <div className="bg-blue-50 p-3 rounded-lg text-center">
          <p className="text-sm font-bold text-blue-800">→ Let's look at the reality…</p>
        </div>
      </div>
    ),
  },

  // ─── Reality: Adoption Data ───────────────────────────────────────────────
  {
    title: 'Reality: IPv6 Adoption By The Numbers',
    subtitle: 'The data shows mainstream operational deployment',
    content: (
      <div className="flex flex-col space-y-3 max-w-3xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div className="bg-blue-50 p-3 rounded-lg border border-blue-200">
            <h4 className="text-sm font-bold text-blue-900 mb-2">📊 Google IPv6 Statistics</h4>
            <ul className="space-y-1 text-xs text-gray-700">
              <li>• Long-term steady growth in IPv6 traffic</li>
              <li>• Significant percentage of Google users connect over IPv6</li>
              <li>• Mobile networks in many regions are IPv6-first</li>
            </ul>
            <p className="text-xs text-blue-600 mt-2">Source: google.com/intl/en/ipv6/statistics.html</p>
          </div>
          <div className="bg-green-50 p-3 rounded-lg border border-green-200">
            <h4 className="text-sm font-bold text-green-900 mb-2">🌐 Internet Society Pulse</h4>
            <div className="text-center py-2">
              <span className="text-3xl font-bold text-green-700">51%</span>
              <p className="text-xs text-gray-600 mt-1">of top 1000 websites globally support IPv6</p>
            </div>
            <p className="text-xs text-green-600 mt-1">Source: pulse.internetsociety.org</p>
          </div>
        </div>
        <div className="bg-white p-3 rounded-lg shadow border border-blue-200">
          <div className="flex items-center gap-2 mb-1">
            <CheckCircle className="w-4 h-4 text-green-500" />
            <h4 className="text-sm font-bold text-gray-800">Key takeaway</h4>
          </div>
          <p className="text-xs text-gray-700">
            IPv6 is already the majority protocol for a large portion of internet users globally.
            Mobile operators like T-Mobile USA serve 100% of their traffic over IPv6 natively.
          </p>
        </div>
      </div>
    ),
  },

  // ─── Perception: I Have NAT ───────────────────────────────────────────────
  {
    title: 'Perception: I Don\'t Need IPv6, I Have NAT!',
    subtitle: 'NAT solves the address problem, right?',
    content: (
      <div className="flex flex-col space-y-3 max-w-3xl mx-auto">
        <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-400">
          <div className="flex items-center gap-2 mb-2">
            <AlertCircle className="w-5 h-5 text-red-500" />
            <h3 className="text-sm font-bold text-red-800">The NAT argument</h3>
          </div>
          <p className="text-base text-red-800 font-semibold text-center py-2">
            "I don't need IPv6! I have NAT!"
          </p>
        </div>
        <div className="bg-white p-3 rounded-lg shadow border border-gray-200">
          <h4 className="text-sm font-bold text-gray-800 mb-2">But this doesn't scale when you want everything connected:</h4>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-xs text-center">
            <div className="bg-gray-100 p-2 rounded">IoT devices</div>
            <div className="bg-gray-100 p-2 rounded">Containers</div>
            <div className="bg-gray-100 p-2 rounded">Cloud workloads</div>
            <div className="bg-gray-100 p-2 rounded">Edge nodes</div>
          </div>
        </div>
        <div className="bg-blue-50 p-3 rounded-lg text-center">
          <p className="text-sm font-bold text-blue-800">→ Let's see why NAT is not the answer…</p>
        </div>
      </div>
    ),
  },

  // ─── Reality: NAT Problems ────────────────────────────────────────────────
  {
    title: 'Reality: NAT Is Not a Long-Term Solution',
    subtitle: 'NAT adds complexity and breaks the end-to-end principle',
    content: (
      <div className="flex flex-col space-y-3 max-w-3xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div className="bg-red-50 p-3 rounded-lg border border-red-200">
            <h4 className="text-sm font-bold text-red-800 mb-1">Problems with NAT</h4>
            <ul className="space-y-1 text-xs text-gray-700">
              <li>• Breaks end-to-end connectivity model</li>
              <li>• Adds state complexity in firewalls/routers</li>
              <li>• Troubleshooting is dramatically harder</li>
              <li>• Many protocols require ALGs or special handling</li>
              <li>• Does not work well with cloud-native architectures</li>
            </ul>
          </div>
          <div className="bg-green-50 p-3 rounded-lg border border-green-200">
            <h4 className="text-sm font-bold text-green-800 mb-1">What IPv6 enables instead</h4>
            <ul className="space-y-1 text-xs text-gray-700">
              <li>• Every device gets a globally unique address</li>
              <li>• Direct end-to-end communication restored</li>
              <li>• Security through firewalls, not address hiding</li>
              <li>• Simpler operational model at scale</li>
              <li>• Designed for massive IoT scale-out</li>
            </ul>
          </div>
        </div>
        <div className="bg-blue-50 p-3 rounded-lg border-l-4 border-blue-400">
          <p className="text-xs text-blue-900">
            <strong>Bottom line:</strong> NAT was a workaround for IPv4 exhaustion — it was never meant to be architecture. IPv6 returns us to the original internet model with a massive address space.
          </p>
        </div>
      </div>
    ),
  },

  // ─── Perception: IPv6 is difficult ───────────────────────────────────────
  {
    title: 'Perception: IPv6 Is Difficult!',
    subtitle: 'The complexity fear is real — but often overstated',
    content: (
      <div className="flex flex-col space-y-3 max-w-3xl mx-auto">
        <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-400">
          <div className="flex items-center gap-2 mb-2">
            <AlertCircle className="w-5 h-5 text-red-500" />
            <h3 className="text-sm font-bold text-red-800">The difficulty perception</h3>
          </div>
          <p className="text-base text-red-800 font-semibold text-center py-2">
            "IPv6 is too complex to deploy. The addresses alone are unreadable!"
          </p>
        </div>
        <div className="bg-white p-3 rounded-lg shadow border border-gray-200">
          <div className="font-mono text-xs text-center space-y-2 py-1">
            <div className="text-red-600">2001:0db8:0046:a1d1:0000:0000:0000:0001</div>
            <div className="text-orange-500">2001:db8:46:a1d1:0:0:0:1</div>
            <div className="text-green-600 text-sm font-bold">2001:db8:46:a1d1::1</div>
          </div>
          <p className="text-xs text-center text-gray-500 mt-1">Same address — RFC 5952 compression makes it manageable</p>
        </div>
        <div className="bg-blue-50 p-3 rounded-lg text-center">
          <p className="text-sm font-bold text-blue-800">→ The reality is more nuanced…</p>
        </div>
      </div>
    ),
  },

  // ─── Reality: IPv6 Address Rules ─────────────────────────────────────────
  {
    title: 'Reality: IPv6 Addresses Are Manageable',
    subtitle: 'RFC 5952 defines simple, consistent rules for address representation',
    content: (
      <div className="flex flex-col space-y-3 max-w-3xl mx-auto">
        <div className="bg-blue-50 p-3 rounded-lg border-l-4 border-blue-500">
          <h3 className="text-sm font-bold text-blue-900 mb-2">IPv6 Address Structure (RFC 5952)</h3>
          <div className="font-mono text-xs bg-white p-2 rounded border overflow-x-auto">
            <div className="text-gray-400 text-center mb-1">128 bits = 8 groups of 16 bits</div>
            <div className="text-blue-800 font-bold text-center">2001 : 0db8 : 0046 : a1d1 : 0000 : 0000 : 0000 : 0001</div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div className="bg-white p-3 rounded-lg shadow border border-blue-200">
            <h4 className="text-sm font-bold text-blue-900 mb-1">Compression rules</h4>
            <ul className="space-y-1 text-xs text-gray-700">
              <li>• Drop leading zeros: <code>0046</code> → <code>46</code></li>
              <li>• Use <code>::</code> once for longest zero run</li>
              <li>• Full → Compressed: <span className="font-mono text-green-700">2001:db8:46:a1d1::1</span></li>
            </ul>
          </div>
          <div className="bg-white p-3 rounded-lg shadow border border-blue-200">
            <h4 className="text-sm font-bold text-blue-900 mb-1">Prefix / Interface ID</h4>
            <ul className="space-y-1 text-xs text-gray-700">
              <li>• First 64 bits = network prefix</li>
              <li>• Last 64 bits = interface identifier</li>
              <li>• Interface IDs are always /64 in IPv6</li>
            </ul>
          </div>
        </div>
      </div>
    ),
  },

  // ─── IPv6 Address Space Infinity ─────────────────────────────────────────
  {
    title: 'Perception: We Will Run Out of IPv6!',
    subtitle: 'Surely 128 bits can\'t be enough forever?',
    content: (
      <div className="flex flex-col space-y-3 max-w-3xl mx-auto">
        <div className="bg-white p-3 rounded-lg shadow border border-blue-200 text-center">
          <p className="text-sm text-gray-700 mb-2">Addresses in a single <strong>/64 subnet</strong>:</p>
          <span className="text-2xl font-bold text-blue-700">18,446,744,073,709,600,000</span>
        </div>
        <div className="bg-white p-3 rounded-lg shadow border border-blue-200">
          <h4 className="text-sm font-bold text-blue-900 mb-2 text-center">How long at 10M allocations/second?</h4>
          <div className="space-y-1 text-xs">
            <div className="flex justify-between p-2 bg-blue-50 rounded">
              <span>10,000,000 addr/sec × 31,536,000 sec/year =</span>
              <span className="font-bold">315,360,000,000,000 / year</span>
            </div>
            <div className="flex justify-between p-2 bg-green-50 rounded border border-green-200">
              <span>Time to deplete one /64:</span>
              <span className="font-bold text-green-700">≈ 58,494 years</span>
            </div>
            <div className="flex justify-between p-2 bg-green-100 rounded border border-green-300">
              <span>A /48 has 65,536 /64s → 65,536 × 58,494 =</span>
              <span className="font-bold text-green-800">3.8 Billion years</span>
            </div>
          </div>
        </div>
        <div className="bg-blue-50 p-2 rounded-lg text-center">
          <p className="text-xs text-blue-900">Earth is ~4.5 billion years old. IPv6 scarcity is not a concern.</p>
        </div>
      </div>
    ),
  },

  // ─── Different things I can do with IPv6 ─────────────────────────────────
  {
    title: 'What You Can Do With the Scale of IPv6',
    subtitle: 'New possibilities that were simply impossible with IPv4+NAT',
    content: (
      <div className="flex flex-col space-y-3 max-w-3xl mx-auto">
        <div className="bg-blue-50 p-3 rounded-lg border-l-4 border-blue-500">
          <h3 className="text-sm font-bold text-blue-900 mb-1">Datacenter & container use-cases</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          <div className="bg-white p-3 rounded-lg shadow border border-blue-200">
            <h4 className="text-sm font-bold text-blue-800 mb-1">1. Direct container exposure</h4>
            <p className="text-xs text-gray-700">Expose every container with its own public IPv6 address — no NAT, no port mapping.</p>
          </div>
          <div className="bg-white p-3 rounded-lg shadow border border-blue-200">
            <h4 className="text-sm font-bold text-blue-800 mb-1">2. Massive scale spin-up</h4>
            <p className="text-xs text-gray-700">Spin up 10 million containers per second — each gets a unique address from the same /64.</p>
          </div>
          <div className="bg-white p-3 rounded-lg shadow border border-blue-200">
            <h4 className="text-sm font-bold text-blue-800 mb-1">3. Ephemeral addressing</h4>
            <p className="text-xs text-gray-700">Burn the address with the container — no address reuse conflicts, no state cleanup.</p>
          </div>
        </div>
        <div className="bg-green-50 p-2 rounded-lg border-l-4 border-green-400">
          <p className="text-xs text-green-900">These patterns are in use today in major cloud and CDN environments running IPv6-only infrastructure.</p>
        </div>
      </div>
    ),
  },

  // ─── Country Mandates ────────────────────────────────────────────────────
  {
    title: 'Country IPv6 Mandates',
    subtitle: 'Government policy is accelerating IPv6 deployment worldwide',
    content: (
      <div className="flex flex-col space-y-3 max-w-3xl mx-auto">
        <div className="bg-blue-50 p-3 rounded-lg border-l-4 border-blue-500">
          <div className="flex items-center gap-2 mb-1">
            <Users className="w-4 h-4 text-blue-600" />
            <h3 className="text-sm font-bold text-blue-900">50+ countries with IPv6 mandates or encouragement (now–2030+)</h3>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div className="bg-white p-3 rounded-lg shadow border border-blue-200">
            <h4 className="text-sm font-bold text-blue-900 mb-1">Countries with mandates include</h4>
            <ul className="space-y-0.5 text-xs text-gray-700">
              <li>• United States (federal agencies)</li>
              <li>• India (national deployment targets)</li>
              <li>• China (major ISPs &amp; government)</li>
              <li>• European Union (telecom regulations)</li>
              <li>• Brazil, Malaysia, Japan, and many more</li>
            </ul>
          </div>
          <div className="bg-white p-3 rounded-lg shadow border border-blue-200">
            <h4 className="text-sm font-bold text-blue-900 mb-1">Implications for enterprises</h4>
            <ul className="space-y-0.5 text-xs text-gray-700">
              <li>• Compliance deadlines are real and approaching</li>
              <li>• Government procurement requires IPv6 support</li>
              <li>• ISPs in mandated regions may drop IPv4-only services</li>
              <li>• Customers and partners expect IPv6 capability</li>
            </ul>
          </div>
        </div>
      </div>
    ),
  },

  // ─── Business Case: AWS IPv4 ───────────────────────────────────────────────
  {
    title: 'Business Case: IPv4 Is More Expensive Than Broccoli',
    subtitle: 'AWS now charges for every public IPv4 address',
    content: (
      <div className="flex flex-col space-y-3 max-w-3xl mx-auto">
        <div className="bg-orange-50 p-3 rounded-lg border-l-4 border-orange-500">
          <div className="flex items-center gap-2 mb-1">
            <DollarSign className="w-4 h-4 text-orange-600" />
            <h3 className="text-sm font-bold text-orange-900">AWS public IPv4 pricing (since February 2024)</h3>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          <div className="bg-white p-3 rounded-lg shadow border border-orange-200 text-center">
            <div className="text-2xl font-bold text-orange-600">$0.005</div>
            <div className="text-xs text-gray-600">per IP per hour</div>
          </div>
          <div className="bg-orange-50 p-3 rounded-lg border-2 border-orange-400 text-center">
            <div className="text-3xl font-bold text-orange-700">€37.24</div>
            <div className="text-xs text-gray-600 font-semibold">per IP per year</div>
          </div>
          <div className="bg-white p-3 rounded-lg shadow border border-orange-200 text-center">
            <div className="text-2xl font-bold text-red-600">€37,240</div>
            <div className="text-xs text-gray-600">for 1,000 IPs/year</div>
          </div>
        </div>
        <div className="bg-white p-3 rounded-lg shadow border border-gray-200">
          <ul className="space-y-1 text-xs text-gray-700">
            <li>• Applies to ALL public IPv4 addresses — even idle ones</li>
            <li>• Large enterprises with thousands of public IPs face significant annual cost increases</li>
            <li>• IPv6 addresses carry no charge — globally routable addresses are free</li>
          </ul>
        </div>
        <p className="text-xs text-gray-500">
          Source: <a href="https://aws.amazon.com/blogs/aws/new-aws-public-ipv4-address-charge-public-ip-insights/" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:underline">aws.amazon.com – New AWS Public IPv4 Address Charge</a>
        </p>
      </div>
    ),
  },

  // ─── Deploy IPv6 NOW! ──────────────────────────────────────────────────────
  {
    title: 'I Would Love to Deploy IPv6 NOW!',
    subtitle: 'The motivation is clear — let\'s look at what it takes',
    content: (
      <div className="flex flex-col items-center justify-center h-full space-y-5 px-4">
        <TrendingUp className="w-14 h-14 text-blue-500" />
        <div className="bg-blue-50 p-5 rounded-lg border-l-4 border-blue-500 max-w-2xl">
          <p className="text-sm font-bold text-blue-900 mb-2">The case is compelling:</p>
          <ul className="text-sm text-gray-700 space-y-1">
            <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" /><span>IPv4 costs rising: cloud, ISP, and operational overhead</span></li>
            <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" /><span>50+ government mandates worldwide, deadlines approaching</span></li>
            <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" /><span>51% of top websites already support IPv6 today</span></li>
            <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" /><span>IPv6-only datacenters are operational at major cloud scale</span></li>
            <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" /><span>Mobile networks already IPv6-first in many regions</span></li>
          </ul>
        </div>
        <p className="text-xs text-gray-500 italic text-center max-w-xl">
          "IPv6 is Internet broccoli. Good for us in the long run but no immediate sugar rush from deploying it now" — Guido Frissaer
        </p>
      </div>
    ),
  },
];
