import { Router, Shield, Activity } from 'lucide-react';
import { SlideType } from './types';

export const ipv6OperationsNdpSlides: SlideType[] = [
  // ─── Title slide ──────────────────────────────────────────────────────────
  {
    title: '',
    subtitle: '',
    content: (
      <div className="flex flex-col items-center justify-center h-full space-y-6 px-4">
        <Router className="w-20 h-20 text-purple-500" />
        <h1 className="text-5xl md:text-6xl font-bold text-purple-900 text-center">IPv6 Operations</h1>
        <p className="text-xl md:text-2xl text-gray-600 text-center max-w-2xl">
          Let's Deploy IPv6 NOW! — Headers, Addressing, NDP, and PMTUD in practice.
        </p>
        <p className="text-sm text-gray-500 text-center">Nicole Wajer – Technical Solutions Architect – Chief Stroopwafel Officer</p>
        <div className="flex space-x-2 mt-4">
          <div className="w-3 h-3 bg-purple-300 rounded-full"></div>
          <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
          <div className="w-3 h-3 bg-purple-300 rounded-full"></div>
        </div>
      </div>
    ),
  },

  // ─── IPv6 Address Example ─────────────────────────────────────────────────
  {
    title: 'What Does an IPv6 Address Actually Look Like?',
    subtitle: 'A real globally-routable IPv6 address',
    content: (
      <div className="flex flex-col items-center justify-center h-full space-y-6 px-4">
        <div className="bg-purple-50 p-6 rounded-lg border border-purple-200 w-full max-w-2xl text-center">
          <p className="text-xs text-gray-500 mb-3">Full 128-bit IPv6 address (documentation prefix)</p>
          <div className="font-mono text-2xl text-purple-900 font-bold tracking-wider">
            2001:0db8:4646:0001:
          </div>
          <div className="font-mono text-2xl text-purple-700 font-bold tracking-wider">
            0000:0000:0000:1e2a
          </div>
          <div className="mt-3 text-gray-500 text-sm">↓ Compressed via RFC 5952:</div>
          <div className="font-mono text-xl text-green-700 font-bold mt-1">
            2001:db8:4646:1::1e2a
          </div>
        </div>
        <p className="text-sm text-gray-600 text-center max-w-xl">
          128 bits, 8 groups of 16 bits (hextets), separated by colons.
          All interface IDs are always 64 bits long.
        </p>
      </div>
    ),
  },

  // ─── IPv4 vs IPv6 Header Comparison ──────────────────────────────────────
  {
    title: 'IPv4 vs IPv6: Header Comparison',
    subtitle: 'IPv6 has a fixed 40-byte header — simpler, faster to process',
    content: (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-w-3xl mx-auto">
        <div className="bg-red-50 p-3 rounded-lg border border-red-200">
          <h3 className="text-sm font-bold text-red-800 mb-2">IPv4 Header (20–60 bytes)</h3>
          <div className="text-xs space-y-0.5 font-mono">
            <div className="bg-white p-1 rounded border">Version | IHL | Type of Service | Total Length</div>
            <div className="bg-white p-1 rounded border">Identification | Flags | Fragment Offset</div>
            <div className="bg-white p-1 rounded border">Time to Live | Protocol | Header Checksum</div>
            <div className="bg-white p-1 rounded border">Source Address (32 bits)</div>
            <div className="bg-white p-1 rounded border">Destination Address (32 bits)</div>
            <div className="bg-yellow-100 p-1 rounded border border-yellow-300">Options &amp; Padding (variable!)</div>
          </div>
        </div>
        <div className="bg-purple-50 p-3 rounded-lg border border-purple-200">
          <h3 className="text-sm font-bold text-purple-800 mb-2">IPv6 Header (always 40 bytes)</h3>
          <div className="text-xs space-y-0.5 font-mono">
            <div className="bg-white p-1 rounded border">Version | Traffic Class | Flow Label (20b)</div>
            <div className="bg-white p-1 rounded border">Payload Length | Next Header | Hop Limit</div>
            <div className="bg-purple-100 p-1 rounded border border-purple-300">Source Address (128 bits)</div>
            <div className="bg-purple-100 p-1 rounded border border-purple-300">Destination Address (128 bits)</div>
          </div>
          <div className="mt-2 text-xs text-gray-600">
            <div className="flex gap-2 flex-wrap">
              <span className="bg-green-100 px-1 rounded">✓ No checksum</span>
              <span className="bg-green-100 px-1 rounded">✓ No fragmentation fields</span>
              <span className="bg-green-100 px-1 rounded">✓ Fixed length</span>
            </div>
          </div>
        </div>
      </div>
    ),
  },

  // ─── Header Field Changes ─────────────────────────────────────────────────
  {
    title: 'What Changed: Key Header Field Differences',
    subtitle: 'Streamlined, revised, and extended from IPv4',
    content: (
      <div className="flex flex-col space-y-2 max-w-3xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
          <div className="bg-green-50 p-3 rounded-lg border border-green-200">
            <h4 className="text-xs font-bold text-green-800 mb-1 uppercase">Streamlined (Removed)</h4>
            <ul className="space-y-0.5 text-xs text-gray-700">
              <li>• Fragmentation fields → Extension Header</li>
              <li>• IP options → Extension Headers</li>
              <li>• Header Checksum → eliminated</li>
              <li>• Header Length field → fixed 40B</li>
              <li>• Alignment: 32b → 64b</li>
            </ul>
          </div>
          <div className="bg-blue-50 p-3 rounded-lg border border-blue-200">
            <h4 className="text-xs font-bold text-blue-800 mb-1 uppercase">Revised (Renamed)</h4>
            <ul className="space-y-0.5 text-xs text-gray-700">
              <li>• TTL → Hop Limit</li>
              <li>• Protocol → Next Header</li>
              <li>• TOS → Traffic Class</li>
              <li>• Addresses: 32 bits → 128 bits</li>
            </ul>
          </div>
          <div className="bg-purple-50 p-3 rounded-lg border border-purple-200">
            <h4 className="text-xs font-bold text-purple-800 mb-1 uppercase">Extended (New)</h4>
            <ul className="space-y-0.5 text-xs text-gray-700">
              <li>• Flow Label field (20 bits)</li>
              <li>• Extension header chain</li>
            </ul>
            <div className="mt-2 text-xs text-purple-700 bg-purple-100 p-1 rounded">
              Upper layer checksums use Pseudo Header: SRC + DST + NH + PL
            </div>
          </div>
        </div>
        <div className="bg-gray-50 p-2 rounded border text-xs text-gray-600">
          Options in extension headers only travel where needed. Base header always processed identically.
        </div>
      </div>
    ),
  },

  // ─── IPv6 Address Family ──────────────────────────────────────────────────
  {
    title: 'IPv6 Address Family',
    subtitle: 'Three fundamental address types replace IPv4\'s broadcast',
    content: (
      <div className="flex flex-col space-y-3 max-w-3xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          <div className="bg-blue-50 p-3 rounded-lg border border-blue-200">
            <h3 className="text-sm font-bold text-blue-800 mb-1">Unicast</h3>
            <ul className="space-y-0.5 text-xs text-gray-700">
              <li>• Link-Local (<code className="text-blue-700">fe80::/10</code>)</li>
              <li>• Unique Local (<code className="text-blue-700">fc00::/7</code>)</li>
              <li>• Global (<code className="text-blue-700">2000::/3</code>)</li>
              <li>• One source → one destination</li>
            </ul>
          </div>
          <div className="bg-purple-50 p-3 rounded-lg border border-purple-200">
            <h3 className="text-sm font-bold text-purple-800 mb-1">Multicast</h3>
            <ul className="space-y-0.5 text-xs text-gray-700">
              <li>• Replaces IPv4 broadcast entirely</li>
              <li>• Solicited-Node: <code className="text-purple-700">ff02::1:ff00:0/104</code></li>
              <li>• All Routers: <code className="text-purple-700">ff02::2</code></li>
              <li>• All Nodes: <code className="text-purple-700">ff02::1</code></li>
            </ul>
          </div>
          <div className="bg-green-50 p-3 rounded-lg border border-green-200">
            <h3 className="text-sm font-bold text-green-800 mb-1">Anycast</h3>
            <ul className="space-y-0.5 text-xs text-gray-700">
              <li>• One address → nearest of many</li>
              <li>• Used for services &amp; CDN</li>
              <li>• No special syntax — same as unicast</li>
            </ul>
          </div>
        </div>
        <div className="bg-red-50 p-2 rounded border border-red-200 text-xs text-red-800">
          <strong>Note:</strong> IPv6 has NO broadcast. All "broadcast-like" operations use multicast instead.
        </div>
      </div>
    ),
  },

  // ─── IPv6 Unicast Address Types ────────────────────────────────────────────
  {
    title: 'IPv6 Unicast Address Types',
    subtitle: 'Link-local, unique local, and global addresses',
    content: (
      <div className="flex flex-col space-y-2 max-w-3xl mx-auto">
        <div className="bg-blue-50 p-3 rounded-lg border border-blue-200">
          <h4 className="text-sm font-bold text-blue-900 mb-1">Link-Local Address</h4>
          <p className="text-xs text-gray-700 mb-1">Not routable — exists on single L2 domain only. Required on every interface.</p>
          <div className="font-mono text-xs bg-white p-1 rounded"><span className="text-blue-700">fe80::/10</span> → <span className="text-gray-500">fe80:0000:0000:0000:xxxx:xxxx:xxxx:xxxx</span></div>
        </div>
        <div className="bg-green-50 p-3 rounded-lg border border-green-200">
          <h4 className="text-sm font-bold text-green-900 mb-1">Unique Local Address (ULA)</h4>
          <p className="text-xs text-gray-700 mb-1">Routable within an administrative domain. Similar to RFC1918 private ranges.</p>
          <div className="font-mono text-xs bg-white p-1 rounded"><span className="text-green-700">fc00::/7</span> (fc00::/8 reserved, <span className="text-green-700">fd00::/8</span> locally assigned)</div>
        </div>
        <div className="bg-purple-50 p-3 rounded-lg border border-purple-200">
          <h4 className="text-sm font-bold text-purple-900 mb-1">Global Unicast Address</h4>
          <p className="text-xs text-gray-700 mb-1">Routable across the Internet. Assigned by RIRs.</p>
          <div className="font-mono text-xs bg-white p-1 rounded space-y-0.5">
            <div><span className="text-purple-700">2000::/3</span> — current global space</div>
            <div className="text-gray-500">Documentation: 2001:0db8::/32 &amp; 3fff::/20</div>
          </div>
        </div>
      </div>
    ),
  },

  // ─── Interface ID Assignment ──────────────────────────────────────────────
  {
    title: 'IPv6 Interface ID Assignment',
    subtitle: 'Multiple methods — choose based on your operational model',
    content: (
      <div className="flex flex-col space-y-3 max-w-3xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div className="bg-gray-50 p-3 rounded-lg border border-gray-200">
            <h4 className="text-sm font-bold text-gray-800 mb-1">Legacy (IPv4) way</h4>
            <ul className="space-y-1 text-xs text-gray-700">
              <li>• <strong>Static:</strong> manually configured address</li>
              <li>• <strong>DHCPv6:</strong> stateful address assignment from server</li>
            </ul>
          </div>
          <div className="bg-purple-50 p-3 rounded-lg border border-purple-200">
            <h4 className="text-sm font-bold text-purple-800 mb-1">IPv6 way (preferred)</h4>
            <ul className="space-y-1 text-xs text-gray-700">
              <li>• <strong>SLAAC EUI-64:</strong> derived from MAC address</li>
              <li>• <strong>SLAAC RFC 8981:</strong> privacy/temporary extensions — random, rotating IIDs</li>
              <li>• <strong>Stateless DHCPv6:</strong> address via SLAAC + config from DHCPv6</li>
            </ul>
          </div>
        </div>
        <div className="bg-white p-3 rounded-lg shadow border border-gray-200">
          <h4 className="text-sm font-bold text-gray-800 mb-1">SLAAC EUI-64 example</h4>
          <div className="font-mono text-xs bg-gray-50 p-2 rounded">
            <div>MAC: <span className="text-blue-700">aa:bb:cc:dd:ee:ff</span></div>
            <div>Insert <span className="text-orange-600">ff:fe</span> in middle, flip 7th bit</div>
            <div>IID: <span className="text-green-700">a8bb:ccff:fedd:eeff</span></div>
          </div>
        </div>
      </div>
    ),
  },

  // ─── Host Address Assignment Table ────────────────────────────────────────
  {
    title: 'Host Address Assignment: Method Comparison',
    subtitle: 'Manual, Stateless (SLAAC), or Stateful DHCPv6',
    content: (
      <div className="flex flex-col space-y-2 max-w-3xl mx-auto">
        <div className="overflow-x-auto">
          <table className="w-full text-xs border-collapse">
            <thead>
              <tr className="bg-purple-100">
                <th className="p-2 text-left border border-purple-300"></th>
                <th className="p-2 text-center border border-purple-300">Manual</th>
                <th className="p-2 text-center border border-purple-300">Stateless (SLAAC)</th>
                <th className="p-2 text-center border border-purple-300">Stateful DHCPv6</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-2 font-bold text-green-700 border border-gray-200">Pros</td>
                <td className="p-2 border border-gray-200">
                  <ul className="space-y-0.5 text-gray-700">
                    <li>✓ Stable address</li>
                    <li>✓ Controlled</li>
                    <li>✓ Well understood</li>
                  </ul>
                </td>
                <td className="p-2 border border-gray-200">
                  <ul className="space-y-0.5 text-gray-700">
                    <li>✓ Scales well</li>
                    <li>✓ Fast to deploy</li>
                    <li>✓ Widely implemented</li>
                  </ul>
                </td>
                <td className="p-2 border border-gray-200">
                  <ul className="space-y-0.5 text-gray-700">
                    <li>✓ Well understood</li>
                    <li>✓ Controlled</li>
                    <li>✓ Faster deploy</li>
                  </ul>
                </td>
              </tr>
              <tr className="bg-gray-50">
                <td className="p-2 font-bold text-red-700 border border-gray-200">Cons</td>
                <td className="p-2 border border-gray-200">
                  <ul className="space-y-0.5 text-gray-700">
                    <li>✗ Doesn't scale</li>
                    <li>✗ Slow to deploy</li>
                  </ul>
                </td>
                <td className="p-2 border border-gray-200">
                  <ul className="space-y-0.5 text-gray-700">
                    <li>✗ No control over assignment</li>
                    <li>✗ Lack of management visibility</li>
                  </ul>
                </td>
                <td className="p-2 border border-gray-200">
                  <ul className="space-y-0.5 text-gray-700">
                    <li>✗ OS implementation required</li>
                    <li>✗ Must design for HA</li>
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="bg-purple-50 p-2 rounded text-xs text-purple-800">
          Methods are not mutually exclusive — all three can coexist. You must still control stateless address assignment regardless.
        </div>
      </div>
    ),
  },

  // ─── NDP Overview ─────────────────────────────────────────────────────────
  {
    title: 'Neighbor Discovery Protocol (NDP) — Overview',
    subtitle: 'NDP replaces ARP and adds new capabilities',
    content: (
      <div className="flex flex-col space-y-3 max-w-3xl mx-auto">
        <div className="bg-purple-50 p-3 rounded-lg border-l-4 border-purple-500">
          <p className="text-xs text-gray-700">NDP (RFC 4861) uses ICMPv6 messages to handle neighbor and router discovery, address configuration, and reachability detection — all in one unified protocol.</p>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-xs border-collapse">
            <thead>
              <tr className="bg-purple-100">
                <th className="p-2 text-left border border-purple-300">IPv4</th>
                <th className="p-2 text-left border border-purple-300">IPv6 (NDP)</th>
                <th className="p-2 text-left border border-purple-300">ICMPv6 Type</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white">
                <td className="p-2 border border-gray-200">ARP Request</td>
                <td className="p-2 border border-gray-200">Neighbor Solicitation (NS)</td>
                <td className="p-2 border border-gray-200 font-mono">135</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="p-2 border border-gray-200">ARP Reply</td>
                <td className="p-2 border border-gray-200">Neighbor Advertisement (NA)</td>
                <td className="p-2 border border-gray-200 font-mono">136</td>
              </tr>
              <tr className="bg-white">
                <td className="p-2 border border-gray-200">Router Discovery</td>
                <td className="p-2 border border-gray-200">Router Solicitation (RS)</td>
                <td className="p-2 border border-gray-200 font-mono">133</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="p-2 border border-gray-200">ICMP Router Adv.</td>
                <td className="p-2 border border-gray-200">Router Advertisement (RA)</td>
                <td className="p-2 border border-gray-200 font-mono">134</td>
              </tr>
              <tr className="bg-white">
                <td className="p-2 border border-gray-200">Broadcast</td>
                <td className="p-2 border border-gray-200">Solicited-Node Multicast</td>
                <td className="p-2 border border-gray-200">ff02::1:ffxx:xxxx</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    ),
  },

  // ─── NDP Configuration ────────────────────────────────────────────────────
  {
    title: 'NDP Configuration: Critical Details',
    subtitle: 'Get these wrong and NDP won\'t work reliably',
    content: (
      <div className="flex flex-col space-y-3 max-w-3xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div className="bg-purple-50 p-3 rounded-lg border-l-4 border-purple-500">
            <h4 className="text-sm font-bold text-purple-900 mb-1">Source address rule</h4>
            <div className="font-mono text-xs bg-white p-2 rounded border mb-1">Source: fe80::/10 (Link-Local)</div>
            <p className="text-xs text-gray-700">All NDP messages MUST use Link-Local addresses as source. NDP never uses global addresses.</p>
          </div>
          <div className="bg-orange-50 p-3 rounded-lg border-l-4 border-orange-500">
            <h4 className="text-sm font-bold text-orange-900 mb-1">Hop limit rule</h4>
            <div className="font-mono text-xs bg-white p-2 rounded border mb-1">Hop Limit: 255</div>
            <p className="text-xs text-gray-700">All NDP messages MUST set Hop Limit to 255. Receivers MUST discard packets with Hop Limit ≠ 255 — this is GTSM protection against off-link attackers.</p>
          </div>
        </div>
        <div className="bg-blue-50 p-3 rounded-lg border border-blue-200">
          <h4 className="text-sm font-bold text-blue-900 mb-1">Solicited-Node Multicast (SNM)</h4>
          <div className="font-mono text-xs bg-white p-1 rounded border">ff02::1:ff<span className="text-blue-700">xx:xxxx</span> — last 24 bits of IPv6 address</div>
          <p className="text-xs text-gray-600 mt-1">Much more efficient than broadcast — only hosts that match the last 24 bits process the NS message.</p>
        </div>
      </div>
    ),
  },

  // ─── Router Solicitation & Advertisement ─────────────────────────────────
  {
    title: 'Router Solicitation & Advertisement',
    subtitle: 'How hosts discover routers and obtain network configuration',
    content: (
      <div className="flex flex-col space-y-3 max-w-3xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div className="bg-blue-50 p-3 rounded-lg border border-blue-200">
            <h4 className="text-sm font-bold text-blue-800 mb-1">Router Solicitation (RS) — Type 133</h4>
            <ul className="space-y-0.5 text-xs text-gray-700">
              <li>• Sent by hosts at boot or interface up</li>
              <li>• Source: <code>fe80::a</code> (host link-local)</li>
              <li>• Destination: <code>ff02::2</code> (all-routers multicast)</li>
              <li>• "Please send me your RA now"</li>
            </ul>
          </div>
          <div className="bg-purple-50 p-3 rounded-lg border border-purple-200">
            <h4 className="text-sm font-bold text-purple-800 mb-1">Router Advertisement (RA) — Type 134</h4>
            <ul className="space-y-0.5 text-xs text-gray-700">
              <li>• Sent by routers periodically AND in response to RS</li>
              <li>• Source: <code>fe80::1</code> (router link-local)</li>
              <li>• Destination: <code>fe80::a</code> (host) or <code>ff02::1</code></li>
              <li>• Contains: subnet prefix, lifetime, autoconfig flags, DNS info</li>
            </ul>
          </div>
        </div>
        <div className="bg-white p-3 rounded-lg shadow border text-xs">
          <div className="font-mono space-y-1 text-center">
            <div><span className="text-blue-700">Host</span> → RS → <span className="text-purple-700">ff02::2</span> (all routers)</div>
            <div><span className="text-purple-700">Router</span> → RA → <span className="text-blue-700">Host</span> | Data: prefix, MTU, flags, DNS</div>
          </div>
        </div>
      </div>
    ),
  },

  // ─── Neighbor Solicitation & Advertisement ────────────────────────────────
  {
    title: 'Neighbor Solicitation & Advertisement',
    subtitle: 'Layer 3-to-Layer 2 address resolution (replacing ARP)',
    content: (
      <div className="flex flex-col space-y-3 max-w-3xl mx-auto">
        <div className="bg-purple-50 p-3 rounded-lg border-l-4 border-purple-500">
          <h4 className="text-sm font-bold text-purple-900 mb-1">Key differences from IPv4 ARP</h4>
          <ul className="space-y-0.5 text-xs text-gray-700">
            <li>• NS uses Solicited-Node Multicast, not broadcast — far more efficient at scale</li>
            <li>• Node B adds Node A to its neighbor cache <em>during</em> NS processing (no extra exchange needed)</li>
            <li>• NA is unicast for reachability checks, multicast only for initial resolution</li>
          </ul>
        </div>
        <div className="bg-white p-3 rounded-lg shadow border text-xs font-mono space-y-1">
          <div className="text-blue-700">Node A → NS → Destination: ff02::1:ff00:b (Solicited-Node Multicast for B)</div>
          <div className="text-gray-500 ml-4">Target: 2001:db8:46:46::b</div>
          <div className="text-purple-700">Node B → NA → Source: fe80::b, Destination: fe80::a</div>
          <div className="text-gray-500 ml-4">Target: 2001:db8:46:46::b, with B's MAC</div>
        </div>
        <div className="bg-blue-50 p-2 rounded text-xs text-blue-800">
          A gratuitous ARP would populate all devices' caches. A Gratuitous NA will only update an existing Neighbor Cache Entry (NCE).
        </div>
      </div>
    ),
  },

  // ─── DAD ─────────────────────────────────────────────────────────────────
  {
    title: 'Duplicate Address Detection (DAD)',
    subtitle: 'Verifying uniqueness before using an address',
    content: (
      <div className="flex flex-col space-y-3 max-w-3xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div className="bg-purple-50 p-3 rounded-lg border border-purple-200">
            <h4 className="text-sm font-bold text-purple-900 mb-1">How DAD works</h4>
            <ul className="space-y-0.5 text-xs text-gray-700">
              <li>• Performed on <em>tentative</em> addresses before use</li>
              <li>• Source: <code>:: (unspecified)</code></li>
              <li>• Dest: Solicited-Node Multicast of the tentative address</li>
              <li>• "Is anyone else using this address?"</li>
              <li>• If NA reply received → conflict → address rejected</li>
            </ul>
          </div>
          <div className="bg-white p-3 rounded-lg shadow border border-gray-200">
            <h4 className="text-sm font-bold text-gray-800 mb-1">DAD variants</h4>
            <ul className="space-y-0.5 text-xs text-gray-700">
              <li>• <strong>Standard DAD:</strong> RFC 4862 — mandatory for SLAAC</li>
              <li>• <strong>Optimistic DAD:</strong> RFC 4429 — used by Windows (can use address tentatively)</li>
              <li>• <strong>Enhanced DAD:</strong> RFC 7527 — benefits large scale networks</li>
            </ul>
          </div>
        </div>
        <div className="bg-orange-50 p-2 rounded text-xs text-orange-800 border border-orange-200">
          <div className="font-mono">:: → NS → ff02::1:ff00:a (tentative address) → "Anyone using <em>a</em>?"</div>
        </div>
      </div>
    ),
  },

  // ─── NDP Error Detection ──────────────────────────────────────────────────
  {
    title: 'NDP Error Detection',
    subtitle: 'Neighbor Unreachability Detection and proactive failure handling',
    content: (
      <div className="flex flex-col space-y-3 max-w-3xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div className="bg-purple-50 p-3 rounded-lg border border-purple-200">
            <h4 className="text-sm font-bold text-purple-900 mb-1">Neighbor Unreachability Detection (NUD)</h4>
            <ul className="space-y-0.5 text-xs text-gray-700">
              <li>• Proactively tests if neighbor is still reachable</li>
              <li>• Triggered by upper-layer hints (TCP acks, etc.)</li>
              <li>• Sends unicast NS to verify reachability</li>
              <li>• More efficient than IPv4's ARP re-query behavior</li>
            </ul>
          </div>
          <div className="bg-orange-50 p-3 rounded-lg border border-orange-200">
            <Activity className="w-4 h-4 text-orange-600 mb-1" />
            <h4 className="text-sm font-bold text-orange-900 mb-1">Duplicate Address Detection (DAD)</h4>
            <ul className="space-y-0.5 text-xs text-gray-700">
              <li>• Runs before any address is fully used</li>
              <li>• Mandatory for SLAAC-assigned addresses</li>
              <li>• Detects accidental or malicious duplicates</li>
            </ul>
          </div>
        </div>
        <div className="bg-blue-50 p-3 rounded-lg">
          <p className="text-xs text-blue-900">
            <Shield className="inline w-4 h-4 mr-1" />
            GTSM (Generalized TTL Security Mechanism) — Hop Limit 255 prevents off-link spoofing of NDP messages.
          </p>
        </div>
      </div>
    ),
  },

  // ─── Path MTU Discovery ────────────────────────────────────────────────────
  {
    title: 'Path MTU Discovery (PMTUD)',
    subtitle: 'IPv6 never fragments in-network — only the source can fragment',
    content: (
      <div className="flex flex-col space-y-2 max-w-3xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          <div className="bg-purple-50 p-3 rounded-lg border border-purple-200">
            <h4 className="text-sm font-bold text-purple-900 mb-1">Fragment Extension Header</h4>
            <div className="font-mono text-xs bg-white p-2 rounded border space-y-0.5">
              <div>Next Header (8b) | Reserved</div>
              <div>Fragment Offset (13b) | Res | M</div>
              <div>Identification (32b)</div>
            </div>
            <ul className="space-y-0.5 text-xs text-gray-600 mt-1">
              <li>• M=1: more fragments follow</li>
              <li>• Only source sets Fragment header</li>
              <li>• Min MTU: <strong>1280 bytes</strong></li>
            </ul>
          </div>
          <div className="bg-white p-3 rounded-lg shadow border border-gray-200">
            <h4 className="text-sm font-bold text-gray-800 mb-1">PMTUD Process</h4>
            <div className="text-xs space-y-1">
              <div className="flex items-start gap-1">
                <span className="text-purple-600 font-bold">1.</span>
                <span>Source sends packet at MTU 1500</span>
              </div>
              <div className="flex items-start gap-1">
                <span className="text-orange-600 font-bold">2.</span>
                <span>Router with MTU 1400 sends ICMPv6 <strong>Packet Too Big</strong> (type 2)</span>
              </div>
              <div className="flex items-start gap-1">
                <span className="text-green-600 font-bold">3.</span>
                <span>Source resends at MTU 1400 with Fragment EH</span>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-red-50 p-2 rounded border border-red-200 text-xs text-red-800">
          <strong>Critical:</strong> ICMPv6 Packet Too Big MUST be permitted through firewalls. Blocking it causes hard-to-debug application hangs (PMTUD black hole).
        </div>
      </div>
    ),
  },

  // ─── RFC-1883 Milestone ────────────────────────────────────────────────────
  {
    title: 'RFC 1883 — 30 Years of IPv6',
    subtitle: 'IPv6 was defined in December 1995 — it\'s here to stay',
    content: (
      <div className="flex flex-col items-center justify-center h-full space-y-5 px-4">
        <div className="bg-purple-50 p-6 rounded-lg border border-purple-200 text-center max-w-2xl">
          <div className="text-6xl font-bold text-purple-700 mb-2">30</div>
          <div className="text-xl font-semibold text-purple-900">Years of IPv6</div>
          <p className="text-sm text-gray-600 mt-3">RFC 1883 — December 1995<br/>IPv6 has been in production use since the late 1990s</p>
        </div>
        <div className="grid grid-cols-3 gap-3 w-full max-w-2xl">
          <div className="bg-white p-3 rounded-lg shadow border text-center text-xs">
            <div className="font-bold text-purple-700">1995</div>
            <div className="text-gray-600">RFC 1883 published</div>
          </div>
          <div className="bg-white p-3 rounded-lg shadow border text-center text-xs">
            <div className="font-bold text-blue-700">2012</div>
            <div className="text-gray-600">World IPv6 Launch Day</div>
          </div>
          <div className="bg-white p-3 rounded-lg shadow border text-center text-xs">
            <div className="font-bold text-green-700">Today</div>
            <div className="text-gray-600">Mainstream deployment</div>
          </div>
        </div>
        <p className="text-xs text-gray-500 italic text-center">
          The technology is mature, the tooling is ready, and the business case is clear.
        </p>
      </div>
    ),
  },
];
