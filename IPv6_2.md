<!-- Slide number: 1 -->
# Let’s Deploy IPv6 NOW!
Nicole Wajer – Technical Solutions Architect – Chief Stroopwafel Officer
March 13th, 2026

### Notes:

<!-- Slide number: 2 -->

![](PicturePlaceholder6.jpg)
Nicole

![](Picture2.jpg)

![A colorful sphere with white text Description automatically generated](Picture2.jpg)

![](Picture3.jpg)

<!-- Slide number: 3 -->

![](Picture12.jpg)
# How is IPv6 like Broccoli ?

![](Picture4.jpg)

<!-- Slide number: 4 -->

![](Picture4.jpg)
2001:0db8:4646:0001:0000:0000:0000:1e2a

<!-- Slide number: 5 -->

![A hand with a word written on it Description automatically generated](PicturePlaceholder9.jpg)

<!-- Slide number: 6 -->
# Header Comparison
IPv6 Header (40B)
Version
Traffic Class

Flow Label

Payload Length

Next Header

Hop Limit

Source Address

Destination Address

IPv4 Header (20-60B)
Version
IHL

Type of Service

Total Length

Identification

Flags
 Offset

Time to Live

Protocol

Header Checksum
Source Address

Destination Address

Options

Padding

Header Length fixed
Unchanged
Modifed
Removed
New
Options in extension headers
Upper layer checksums use Pseudo Header format: SRC/DST + NH + PL

### Notes:
Version: This field is in an IPv4 packet and simply tells us what version of IP we are running. Since this is an IPv6 packet it’s going to have a value of 6
Traffic Class: This is the equivalent of the DiffServ/DSCP portion of the IPv4 packet which carries the QoS markings of the packet. Just like in IPv4 the first 6 bits are designated for the DSCP value, and the next 2 bits are for ECN (Explicit Congestion Notifications) capable devices.
Flow Label: This field is 20 bits long and is defined in RFC 6437, in order to identify a flow one has to find the last Next Header and the Protocol Numbers, which may be far away from the IPv6 Header, because of Extension Headers. If the Flow Label were used, all useful information would be in the IPv6 Header.
Payload Length: Specifies the size of the data payload following the IPv6 header.
Next Header: This field is 8-bits and specifies the layer 4 transport protocol which follows the IP header. These values are hex format as well, you’ll notice ICMPv6 has a value of 0x3a, IPv6 protocol numbers use the same numbers that were used in IPv4.
Hop Limit: This is also an 8-bit field and replaces the TTL field that was in the IPv4 header. Each hop decrements the hop limit value by 1 and when the hop limit reaches Zero the packet is discarded.
Source/Destination: This should go without saying but it tells you the source IPv6 address of the packet and the destination IPv6 address this packet is destined to. As you would expect both of these field are 128-bits each.

Version now always contains 6 rather than 4.
The Internet Header Length (IHL) field that indicates the length of the IPv4 header is no longer needed because the IPv6 header is always 40 bytes long.
Type of Service is now Traffic Class. The original semantics of the IPv4 Type of Service field have been superseded by the diffserv semantics per RFC 2474 [3]. However, in IPv4, both interpretations of the field are in use (although most routers either cannot or are not configured to look at the field anyway). The IPv6 RFCs do not mandate a specific way to use the Traffic Class field, but generally the RFC 2474 diffserv interpretation is assumed.
The Flow Label is new in IPv6. The idea is that packets belonging to the same stream, session, or flow share a common flow label value, making the session easily recognizable without having to look “deep” into the packet. Recognizing a stream or session is often useful in Quality of Service mechanisms. Although few implementations actually look at the flow label, most systems do set different flow labels for packets belonging to different TCP sessions. A zero value in this field means that setting a flow label per session is either not supported or not desired.
The Total Length is the length of the IPv4 packet including the header, but in IPv6,
Payload Length does not include the 40-byte IPv6 header, thereby saving the host or router receiving a packet from having to check whether the packet is large enough to hold the IP header in the first place
—making for a small efficiency gain. Despite the name, the Payload Length field includes the length of any additional headers, not just the length of the user data.

The Identification, Flags, and Fragment Offset fields are used when IPv4 packets must be fragmented. Fragmentation in IPv6 works very differently (explained later), so these fields are relegated to a header of their own.
Time to Live (TTL) is now called Hop Limit. This field is initialized with a suitable value at the origin of a packet and decremented by each router along the way. When the field reaches zero, the packet is destroyed. This way, packets cannot circle the network forever when there are loops. Per RFC 791 [4], the IPv4 TTL field should be decremented by the number of seconds that a packet is buffered in a router, but keeping track of how long packets are buffered is too difficult to implement, regardless of buffering time. The new name is a better description of what actually happens.
The Protocol field in IPv4 is replaced by Next Header in IPv6. In both cases, the field indicates the type of header that follows the IPv4 or IPv6 header. In most cases, the value of this field would be 6 for TCP or 17 for the User Datagram Protocol (UDP). Because the IPv6 header has a fixed length, any options such as source routing or fragmentation must be implemented as additional headers that sit between the IPv6 header and the higher-layer protocol such as TCP, forming a “protocol chain.”
The IPv4 Header Checksum was removed in IPv6.
The Source Address and Destination Address serve the same function in IPv6 as in IPv4, except that they are now four times as long at 128 bits.

TCP/UDP/ICMPv6 – Checksum based on pseudo header (SRC, DST, Proto#)
Whenever originating a UDP packet for a port in the default mode, an IPv6 node MUST compute a UDP checksum over the packet and the pseudo-header, and, if that computation yields a result of zero, the checksum MUST be changed to hex FFFF for placement in the UDP header, as specified in [RFC2460]. IPv6 receivers MUST by default discard UDP packets containing a zero checksum and SHOULD log the error.
As an alternative, certain protocols that use UDP as a tunnel encapsulation MAY enable zero-checksum mode for a specific port (or set of ports) for sending and/or receiving. Any node implementing zero-checksum mode MUST follow the node requirements specified in Section 4 of "Applicability Statement for the use of IPv6 UDP Datagrams with Zero Checksums" [RFC6936].

Streamlined
Fragmentation fields moved out of base header
IP options moved out of base header
Header Checksum eliminated
Header Length field eliminated
Length field excludes IPv6 header
Alignment changed from 32 to 64 bits
Revised
Time to Live  Hop Limit
Protocol  Next Header
Precedence and TOS  Traffic Class
Addresses increased 32 bits  128 bits
Extended
Flow Label field added

<!-- Slide number: 7 -->
# IPv6 Address family

Broadcast
Link Operations

Transient

Multicast

Solicited Node
IPv6 Address Family
Link Local

Global

Unicast

Anycast

Unique Local

### Notes:

<!-- Slide number: 8 -->
# IPv6 Unicast
IPv6 Address Family
Link Local

Global

Unicast

Unique Local

### Notes:

<!-- Slide number: 9 -->
# IPv6 Unicast Address Types
Link-Local address
Non routable exists on single layer 2 domain (fe80::/10)
fe80:0000:0000:0000:xxxx:xxxx:xxxx:xxxx

Unique Local Address
Routable within administrative domain (fc00::/7)
fc00:~~~~:~~~~:****:xxxx:xxxx:xxxx:xxxx
fd00:~~~~:~~~~:****:xxxx:xxxx:xxxx:xxxx

Global Address
Routable across the Internet (2000::/3)
Documentation Prefix 2001:0db8::/32 (July 2004) & 3fff::/20 (July 2024)
2000:****:****:****:xxxx:xxxx:xxxx:xxxx
3fff:****:****:****:xxxx:xxxx:xxxx:xxxx

### Notes:
FC00::/8—Reserved for future usage, FD00::/8—Locally assigned unique local addresses
Currently released unicast address space, 2000::/3, contains 35 trillion /48 prefixes ((2**45 = 35,184,372,088,832), of which only a small fraction have been allocated.

The Aggregatable Global Unicast Addresses correspond to the principal use of IPv6 addresses for the generic IPv6 traffic and consume the most important part of the address space. The structure enables strict aggregation of routing prefixes in order to limit the number of routing table entries in the global routing table.
	The structure is as follows: **** This is obsolete *** defined in RFC2373 obsoleted by RFC3587
A fixed prefix: 001
A Top-Level Aggregator (TLA) ID, which spans over 13 bits
A reserved field of 8 bits
24 bits for intermediate providers, called Next-Level Aggregator (NLA)
16 bits for the site subnetting, called the Site-Level Aggregator (SLA)
64 bits for the host with the interface ID
	A TLA is a tier-1 provider. Having 13 bits means that more than 8K providers are possible, under the current allocation scheme. The TLAs are connected together in a default-free zone. The NLA field can be subdivided into more fields so a chain of intermediate providers will be possible while still keeping the aggregation. The SLA field represents the site subnetting, where the site can further cut the 16 bits into a hierarchy, but the rightmost part would be the subnet ID. A site has 16 bits to subnet its network.

A global-unicast IPv6 address is start with binary 001, 2000::/3 and it also known as an aggregatable global IPv6 address. Full global-unicast IPv6 address range is from 2000::/3~3FFF:FFFF:FFFF:FFFF:FFFF:FFFF:FFFF/128.

<!-- Slide number: 10 -->
# IPv6 interface ID Assignment
Legacy (IPv4) way
Statically configured

Assigned via DHCPv6

<!-- Slide number: 11 -->
# IPv6 interface ID Assignment
IPv6 way
SLAAC RFC 8981
Temporary Address Extensions for Stateless Address Autoconfiguration in IPv6 formerly Privacy Extensions
Stateless Address Auto Configuration
SLAAC EUI64

![](Graphic138.jpg)

![](Graphic138.jpg)

<!-- Slide number: 12 -->

![Information outline](Graphic2.jpg)
# Host Address Assignment
For Your
Reference
|  | Manual | Stateless | Stateful DHCPv6 |
| --- | --- | --- | --- |
| Pros | Address is stable Controlled assignment Well understood process | Scales well Time to deploy Widely implemented | Well understood process Controlled assignment Time to deploy |
| Cons | Does not scale Time to deploy | No control on assignment process Not well understood Lack of management | Implementation in OS Must design for HA |
The choice of assignment depends on the existing processes and the adaptability of that process
Remember that the methods are not mutually exclusive -  all three can be used
Regardless of choice must still control the stateless address assignment of addresses

### Notes:
Eric Vyncke - #64 wrong flow, should be earlier (dprall should follow slide 49)

<!-- Slide number: 13 -->
# Neighbor Discovery Protocol – (NDP)
Overview

| IPv4 | IPv6 |
| --- | --- |
| ARP Request | Neighbor Solicitation |
| ARP Reply | Neighbor Advertisement |
| Broadcast | Solicited Node Multicast |

### Notes:
	 – Generalized TTL Security Mechanism
A gratuitous ARP would populate cache of all devices on the link.
A gratuitous NA will only update an existing NCE

<!-- Slide number: 14 -->
# Neighbor Discovery Protocol – (NDP)
Configuration

I should use Link Local (fe80::/10) as NDP’s source!
And I need to set the hop limit to 255…

### Notes:
	 – Generalized TTL Security Mechanism
A gratuitous ARP would populate cache of all devices on the link.
A gratuitous NA will only update an existing NCE

Eric Vyncke - #69 LLA was defined as fe80::10 earlier, be consistent (dprall Assume this is fe80::/10)

<!-- Slide number: 15 -->
# Neighbor Discovery Protocol – (NDP)
Neighbor discovery messages
Router advertisement (ICMPv6 type 134)

Router solicitation  (ICMPv6 type 133)

### Notes:
	 – Generalized TTL Security Mechanism
A gratuitous ARP would populate cache of all devices on the link.
A gratuitous NA will only update an existing NCE

<!-- Slide number: 16 -->
# Neighbor Discovery Protocol – (NDP)
Neighbor discovery messages

Neighbor solicitation (ICMPv6 type 135)

Neighbor advertisement (ICMPv6 type 136)

### Notes:
	 – Generalized TTL Security Mechanism
A gratuitous ARP would populate cache of all devices on the link.
A gratuitous NA will only update an existing NCE

<!-- Slide number: 17 -->
# Neighbor Discovery Protocol – (NDP)
Error detection
Neighbor Unreachability Detection
Duplicate Address Detection

### Notes:
	 – Generalized TTL Security Mechanism
A gratuitous ARP would populate cache of all devices on the link.
A gratuitous NA will only update an existing NCE

<!-- Slide number: 18 -->
# Router Solicitation and Advertisement
Router Solicitations (RS) are sent by nodes at boot up
Router Advertisements (RA) are sent by routers periodically
Routers forward packets as well as provide provisioning services

IPv6 Source fe80::a
IPv6 Destination ff02::2

![](Picture13.jpg)

![](Picture12.jpg)

![](ContentPlaceholder19.jpg)

IPv6 Source fe80::1
IPv6 Destination fe80::a
Data Options, subnet prefix, lifetime, autoconfig flag

### Notes:
Eric Vyncke - #73/74 introduce the RS/NS/NA acronyms (dprall Already done in slides 70 and 71)

<!-- Slide number: 19 -->
# Neighbor Solicitation & Advertisement
Node A needs to resolve node B’s link address, Map’s L3 to L2
Multicast for resolution (new), Unicast for reachability (cache)
Node B will add node A to its neighbor cache during this process w/o sending Neighbor Solicitation (NS)

![](Picture12.jpg)

![](Picture11.jpg)

![](Picture52.jpg)

![](Picture51.jpg)

IPv6 Source fe80::a
IPv6 Destination ff02::1:ff00:b
Target Address 2001:db8:46:46::b

IPv6 Source fe80::b
IPv6 Destination fe80::a
Target Address 2001:db8:46:46::b

### Notes:
Eric Vyncke - #73/74 introduce the RS/NS/NA acronyms

<!-- Slide number: 20 -->
# Duplicate Address Detection (DAD)
Performed on Tentative Addresses
Mandatory for SLAAC
Unspecified Source (::)
Probing the Local Link to Verify Address Uniqueness
Microsoft uses a variant known as Optimistic DAD (RFC4429)
Large Scale Networks benefit from Enhanced DAD (RFC7527)

![](Picture52.jpg)

![](Picture51.jpg)

![](Picture19.jpg)

![](Picture18.jpg)

![](Picture68.jpg)

![](Picture67.jpg)
IPv6 Source UNSPEC = ::
IPv6 Dest. A Solicited Node Multicast ff02::1:ff00:a
Query Anyone Using “a”

![](Picture15.jpg)

![](Picture14.jpg)

### Notes:

<!-- Slide number: 21 -->
# Path MTU Discovery
Next Header
Reserved
Fragment Offset
Res
M

Identification
Next Header, 8 bits – commonly Upper Layer (TCP/UDP/ICMPv6)
Fragment Offset, 13 bits – first fragment 0, previous fragment payload /8
More (M), 1 bit – 1 to signal more fragments, with only the last being 0
Identification, 32 bits – same for all fragments of packet
Source
Destination
LinkMTU 1500
R1
R2
R3

![](Graphic138.jpg)

![](Graphic138.jpg)

![](Graphic138.jpg)
MTU  1500
MTU  1400

Packet, MTU=1500 | Payload = 1460
FragmentExtension Header

ICMPv6 Packet Too Big(2), Use MTU=1400
Packet, MTU = 1400 | EH type 44 | Payload=1352
Packet | EH type 44 | Payload=108

### Notes:
Identification (32 bits): This field has been expanded from 16 bits in IPv4 to 32 bits in IPv6.
Evaluating IPv6 Packet Fragmentation
The first problem is that there is widespread ICMP packet filtering in today’s Internet. For IPv4 this was basically a reasonable defense tactic, and if you were willing to have a packet fragmented you cleared the Don’t Fragment bit before sending the packet so that you were not reliant of receiving an ICMP message to indicate a Path sender MTU problem. But in IPv6 the equivalent Don’t Fragment bit functionality is jammed in the “on” position, and the only way fragmentation will be performed is that if the original sender receives the ICMP6 PTB message and then resends the packet fragmented into a size that will meet the specified MTU size. But when ICMP6 PTB messages are filtered then the large packet in silently discarded within the network without any discernible trace. Attempts by the sender to time out and resend the large IPv6 packet will meet with the same fate, so this can lead to a wedged state.

This has been seen in the context of the HTTP protocol, where the path MTU is smaller than the MTU of the host systems at either end. The TCP handshake completes as none of the opening packets are large. The opening HTTP GET packet also makes it through as this is normally not a large packet. However, the first response may be a large packet. If it is silently discarded because of the combination of fragmentation required and ICMP6 filtering, then neither the client nor the server are capable or repairing the situation. The connection hangs.

The second problem is that the ICMP6 PTB message is sent backwards to the source from the interior of a network path. Oddly enough, the IPv6 ICMP PTB message is perhaps the one critical instance in the entire IP architecture where the IP source address is interpreted by anything than the intended destination. The problems here include path asymmetry, in that the source address may be unreachable from the point of the ICMP packet’s generation. There is also the case of tunneling IP-in-IP. Because IPv6 fragmentation can only be performed at the source, should the ICMP message be sent to the tunnel ingress point or to the original source? If the tunnel ingress is used that this assumes that the tunnel egress performs packet reassembly, which can burden the tunnel egress. This is further confounded in the cross protocol case of IPv6-in-IPv4 and IPv4-in-IPv6 [RFC 4459].

The third problem is the combination of IPv6 packet fragmentation and UDP. UDP is an unreliable datagram delivery service, so a sender of a UDP packet is not expected to cache the packet and be prepared to resend it. A UDP packet delivery error can only be effected at the level of the application, and not at the IP or UDP protocol level. So what should a host do upon receipt of an ICMP PTB message if resending the IP packet is not an option? Given that the sender does not cache sent UDP packets the packet header in the ICMP6 message is unhelpful. As the original packet was UDP, the sender does not necessarily have a connection state, so it is not clear how this information should be retained and how and when it should be used. How can a receiver even tell if an ICMP6 PTB packet is genuine? If the sender adds an entry into its local IPv6 forwarding table then it is exposing itself to a potential resource starvation problem. A high volume flow of synthetic PTB messages has the potential to bloat the local IPv6 forwarding table. If the sender ignores the PTB message than the application is left to attempt to recover the transaction.

If it makes little sense in the context of an attempt to fragment a UDP packet, it makes less sense to fragment a TCP packet. In the context of a TCP session, a received ICMP6 PTB Message can be interpreted as a re-definition of the remote end MSS value, and the outgoing TCP segments can be re-framed to conform to this MSS.
Wither Fragmentation?
The basic problem here is that the network was supposed to operate at the IP level and be completely unaware of transport. This implies that IP level fragmentation was meant to work in a manner that does not involve transport protocol interaction. So much of today’s network (firewalls, filters, etc.) is transport-aware and the trailing fragments have no transport context. That means that transport-aware network middleware needs to re-assemble the packet, which could represent a problem and a DOS vulnerability in its own right.

Because routers cannot fragment IPv6 packets, Path MTU Discovery (PMTUD) is mandatory in all cases where links with MTUs larger than 1280 bytes are used for IPv6, so it is imperative that routers generate ICMPv6 packet-too-big messages and that these messages make it back to the source of the offending packet. Filtering out these ICMPv6 messages makes it impossible to communicate reliably.

If you decide that you must filter ICMPv6 packet-too-big messages, you must use an MTU equal to the IPv6 mandatory minimum of 1280 bytes across your network so there is no need for PMTUD.

Upon reception of a packet-too-big message, TCP reduces its packet size to accommodate the smaller MTU on the path in question. However, protocols that run over UDP often cannot arbitrarily reduce their packet size. In IPv4, UDP packets are generally sent without the “don’t fragment” bit set, so routers fragment them if necessary. In IPv6, this setup is not possible; if the packet is too large, the source host has to fragment it. The source host does this by first splitting the packet into unfragmentable and fragmentable parts. The IPv6 header and any headers that must be processed by routers along the way make up the unfragmentable part; the payload data and any headers that have to be processed only on the destination host are the fragmentable part. The fragmentable part is then split into as many parts as required to fit in the path MTU, and each part is transmitted as a packet containing the unfragmentable part, a fragment header, and one of the fragments of the fragmentable part.
The fragment header is 8 bytes, and except for a “next header” field and two reserved fields, it contains the same fragment offset, more fragments, and identification fields as the IPv4 header. The identification field is now 32 bits long and is used to indicate which fragments belong to the same original packet. All fragments except the last one have the “more-fragments” bit set and are multiples of 8 bytes.
After receiving the first fragment (which is not necessarily the first fragment of the original packet), a host waits up to 60 seconds for all other fragments to come in and, if they do, reassembles the original packet by combining all the fragments with the same source and destination addresses and identification field into a single packet. If one or more fragments is lost, the packet cannot be reassembled, so the entire packet is lost.
Note that IPv6 fragmentation has the same problem as IPv4 fragmentation: the TCP or UDP port numbers are available only in the first fragment, making it hard for firewalls and the like to filter fragmented packets. Common solutions are to reassemble the packet prior to filtering or to discard all fragments.

The IPv6 source node sends a packet equal in size to the maximum MTU of its link layer. In the example shown in Figure above, an MTU size of 1500 is used. The packet is forwarded through the network up to the destination, unless it encounters a smaller MTU in the path. When the packet encounters a link with a smaller MTU, the router sends the source node an ICMP error message of type 2, named "packet too big." The content of the ICMP packet includes the MTU size of the next link, which is smaller than the size of the packet (for examples 1400 and 1300 for the last two links in the example).
The source IPv6 node then resends a packet equal to the size of the received maximum MTU. This process repeats until the packet reaches the destination. In this example, the path MTU of the last link is 1300.
IPv6 requires that every link in the internet have an MTU of 1280 octets or greater. On any link that cannot convey a 1280-octet packet in one piece, link-specific fragmentation and reassembly must be provided at a layer below IPv6.
Links that have a configurable MTU (for example, PPP links [RFC-1661]) must be configured to have an MTU of at least 1280 octets; it is recommended that they be configured with an MTU of 1500 octets or greater, to accommodate possible encapsulations (i.e., tunneling) without incurring IPv6-layer fragmentation.

From each link to which a node is directly attached, the node must be able to accept packets as large as that link's MTU.
It is strongly recommended that IPv6 nodes implement Path MTU Discovery [RFC-1981], in order to discover and take advantage of path MTUs greater than 1280 octets. However, a minimal IPv6 implementation (e.g., in a boot ROM) may simply restrict itself to sending packets no larger than 1280 octets, and omit implementation of Path MTU Discovery.
In order to send a packet larger than a path's MTU, a node may use the IPv6 Fragment header to fragment the packet at the source and have it reassembled at the destination(s). However, the use of such fragmentation is discouraged in any application that is able to adjust its packets to fit the measured path MTU (i.e., down to 1280 octets).

PMTUD
Path MTU Discovery failures cause problems that aren’t always obvious and easy to spot.
Especially at this stage of IPv6 deployment where more people have to use tunnels to get IPv6 service, having Path MTU Discovery work correctly is very important and should be included in testing (if it isn’t already).
Bear in mind that PTB packets may come from intermediate routers in the network, typically not from the user’s endpoint, in designing firewall rules and access lists.
Permit PTB packets wherever possible, including access lists used to mitigate DoS attacks (when this is consistent with the type of DoS attack, of course)
Few Path MTU Discovery testing resources seem to exist on the Web. It would be nice to have some/more. As it happens, they probably wouldn’t have helped here since the problem was specific to particular IPv6 networks, but it would have helped eliminate some possibilities more easily.

In IPv4, as long as the DON’T FRAGMENT bit in the IP packet header is clear, the router is permitted to split the payload across several IP packets, fragmenting the packet to match the next hop maximum message size, replicating the IP header in all the fragments (aside from the fragmentation control header fields, of course).

Eric Vyncke - #47 add a legend for frag header (dprall good idea for the header at the top so we know what M is. Becomes a bit busy, just too much to include)

<!-- Slide number: 22 -->
# RFC-1883 - 30 years IPv6!

![A poster of a computer and a rocket AI-generated content may be incorrect.](Picture4.jpg)

![A screenshot of a computer AI-generated content may be incorrect.](Picture7.jpg)

<!-- Slide number: 23 -->
A shift in thinking…
IPv6
IPv4

![](Picture2.jpg)

![](Picture4.jpg)
Addresses
Subnets

<!-- Slide number: 24 -->
# How do IPv4 and IPv6 compare?

![](Picture2.jpg)
Source: https://www.arin.net/reference/training/resources/ipv6_networkplan.pdf

<!-- Slide number: 25 -->

![](Picture3.jpg)

<!-- Slide number: 26 -->
# IPv6 Address Space  -  PA vs. PI
Provider Aggregatable (“Assigned”) (PA)
Original intention for all
Residential and small business
Prefixes may change (DHCPv6-PD)
Provider Independent (PI)
Now more common in Enterprises
Control and stability
Requires AS and extra cost
Often used with BGP (though not always)
Considerations
Local breakout (DIA) at sites?
Will my ISP run BGP with me at each of my sites?
Should I get 1 PI block or per-RIR?
Will I be multihoming?

![](Picture5.jpg)

<!-- Slide number: 27 -->
# The 4 Rules
You don’t want to spend weeks explaining it!
1
Simple

<!-- Slide number: 28 -->
# The 4 Rules
To help troubleshooting and operation of the network
1
Simple
2
Embed information
Examples:
location, country, PIN, VLAN, IPv4 addresses in Link Local and/or Global Addresses

<!-- Slide number: 29 -->
# The 4 Rules
1
Simple
Cater for future growth, mergers & acquisitions, new locations

Reserved vs. assigned
2
Embed information
3
Build-in Reserve

<!-- Slide number: 30 -->
# The 4 Rules
1
Simple
2
Embed information
Good aggregation is essential, just one address block (per location). Ensures scalability and stability
3
Build-in Reserve
Aggregatable
4

<!-- Slide number: 31 -->
# The 4 Rules
Remember Rule #1!!
1
Simple

2
Embed information
3
Build-in Reserve
Aggregatable
4

<!-- Slide number: 32 -->
# Address Plan Methodology

![](Picture4.jpg)
Addressing plan needs to designed globally
Identify the structure of the addressing plan
Hierarchical – control, geography and function
Top-down approach
Different from the IPv4 days when # of hosts per subnet was important (now “unlimited”!)
Count subnets or prefixes required at each level
Build in reserve
Geography - Where and how many locations
E.g., countries, regions, locations, buildings, etc…
Needs to map onto the physical / logical network topology
Function - services, applications, systems, PINs

### Notes:
Decide where it is needed first
Internet presence
Core network/P&T
DC
Not inside the campus/branches, however think of IPv6 security?
Subscribers

Where, how many locations, how many addresses
Decide where do you immediately need/want IPv6?
Internet presence
DC
Not inside the campus/branches, however think of IPv6 security?
Subscribers

<!-- Slide number: 33 -->
# Address Overview Example
Breaking down the /28

/29 Global Level
(50% spares)

/32
per Region

/36
per Sub-Region

/40 per Campus
(256 Buildings)

/48 per Building/Branch
(16 PINs per Building/Branch)

/52 per PIN *
(4096 Subnets / PIN)
* PIN = Place In the Network - A framework to classify functional areas of the network
	e.g., Lab, Desktop, DC, DMZ, etc.
Nibble Boundaries!

### Notes:
Nicole> question would be what if I don’t have a /29 but just a /32 or even /40? (and there might be enterprises with just /48 or less).

<!-- Slide number: 34 -->
# Address Planning Continued
More Examples
2001:0db8::/32 – allocated from RIR
PPPP:PPPP:CGGG:LSSS ::/64
PPPP:PPPP:CGGG:LLSS ::/64
PPPP:PPPP:CGGL:LSSS ::/64
P = Global Prefix from RIR (2001:0db8)C = Campus vs. Cloud vs. ColoG = Geographic breakdownL = Logical/Functional breakdown (PIN)S = Subnet
PPPP:PPPC:GGGL:LSSS ::/64
PPPP:PPPC:GGGG:LLSS ::/64

PPPP:PPPP:CGGG:GLSS ::/64
/48 is longest prefix allowed in global routing tables

### Notes:

<!-- Slide number: 35 -->

![](Picture9.jpg)
# Address Planning Continued
Template Addressing Example
(13th Nibble) Functional Identifier
PIN
(16)
0 = Reserved
2 = Infrastructure
4 = Desktop (wired)
6 = Wireless (corp)
7 = Guest Wi-fi
A = Lab
C = Building DC
E = DMZ
F = Reserved
‘Even’ = Future Use
‘Site’ Identifier
Building/Branch
Subnets / PIN
(4096)
/52
/48
/64
2001:0db8:729c::/48
2001:0db8:729c:4000::/52  -   Desktop PIN
      2001:0db8:729c:4200::/64 – Desktop VLAN 200
        2001:0db8:729c:4201::/64 – Desktop VLAN 201
2001:0db8:029c:a000::/52  -   Lab PIN
        2001:0db8:029c:a004::/64 – Lab Subnet 4
        2001:0db8:029c:a005::/64 – Lab Subnet 5

### Notes:

<!-- Slide number: 36 -->
# The 4 Rules
Remember Rule #1!!
1
Simple

2
Embed information
3
Build-in Reserve
Aggregatable
4

<!-- Slide number: 37 -->
# “Do not fear to waste addresses”

![](Picture6.jpg)
Secret Rule #5

### Notes:

<!-- Slide number: 38 -->

![](PicturePlaceholder7.jpg)
# Let go of traditional thinking

<!-- Slide number: 39 -->
# I'm not so self assured- Transition to IPv6-only

IPv4-Only
Dual Stack
IPv6-Only

<!-- Slide number: 40 -->
# The life on an IPv6-only island/world
What do I need to be concerned about?
IPv6-Only Hosts
IPv6-Only Servers
What is host accessing?
How is service offered?
DNS Issues
Application/Service issues
Can it support IPv6 only?
Assessment process is critical
IP Literals?

NAT Issues

### Notes:
How is it delivered?  (cloud, SLB, tiered application…)
North -> South access (out of DC)
East -> West access  (internal DC)

<!-- Slide number: 41 -->

![](Picture5.jpg)
RFC8925

<!-- Slide number: 42 -->
# The Journey….

IPv4-Only
Dual Stack
IPv6-Only

<!-- Slide number: 43 -->
# The Journey….

IPv4-Only
Dual Stack
IPv6-Mostly
IPv6-Only

<!-- Slide number: 44 -->
What is needed in my network?
NAT64 at the site edge
Router Advertisements options for DNS64 and PREF64
SLAAC-only (no DHCPv6 for address assignment!)
NAT64/DNS64 to access IPv4-only destinations

Centralized DHCPv4 infrastructure

<!-- Slide number: 45 -->
# How does IPv6-mostly work?
IPv4-only
Legacy IP from DHCPv4

IPv6 and has option108 in DHCP request
IPv6 address and hold x time Legacy IP
Client

IPv6

IPv6 but no option 108

Legacy IP

<!-- Slide number: 46 -->
# How does IPv6-mostly work?

IPv4-only
Legacy IP from DHCPv4

IPv6 address and hold x time Legacy IP

IPv6 and has option108 in DHCP request
Client

IPv6
DHCPv4 option 108
“keep DHCPv4 running with a backoff timer, just in case IPv4 needs to be re-enabled”

IPv6 but no option 108

Legacy IP

<!-- Slide number: 47 -->
# Option 108 supported today in….(OS)
https://techcommunity.microsoft.com/t5/networking-blog/windows-11-plans-to-expand-clat-support/ba-p/4078173

<!-- Slide number: 48 -->
# now I find I've changed my mind

![A building with flags in front of it Description automatically generated](ContentPlaceholder8.jpg)

![](Picture6.jpg)

<!-- Slide number: 49 -->
# now I find I've changed my mind

![A building with flags in front of it Description automatically generated](ContentPlaceholder8.jpg)

![](Picture6.jpg)

<!-- Slide number: 50 -->
# now I find I've changed my mind

![A building with flags in front of it Description automatically generated](ContentPlaceholder8.jpg)

![](Picture6.jpg)

<!-- Slide number: 51 -->
# now I find I've changed my mind

![A building with flags in front of it Description automatically generated](ContentPlaceholder8.jpg)

![](Picture6.jpg)

<!-- Slide number: 52 -->
# now I find I've changed my mind

![A building with flags in front of it Description automatically generated](ContentPlaceholder8.jpg)

![](Picture6.jpg)

<!-- Slide number: 53 -->
# A nice path towards your IPv6-only journey

![A cartoon of a unicorn holding a broom Description automatically generated](Picture3.jpg)
IPv4
IPv4
IPv4
IPv4
IPv4
IPv4
IPv4
IPv4
IPv4
IPv4
IPv4
IPv4
IPv4
IPv4
IPv4
IPv4
IPv4
IPv4
IPv4
IPv4
IPv4
IPv4

<!-- Slide number: 54 -->
# "IPv6 is Internet broccoli. Good for us in the long run but no immediate sugar rush from deploying it now"
Shameless self promotion of my own Quotes - Nicole Wajer

![](Picture5.jpg)

<!-- Slide number: 55 -->

![](Picture3.jpg)
# Thank You