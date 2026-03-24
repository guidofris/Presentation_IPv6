<!-- Slide number: 1 -->
# IPv6 Today
IPv6 Perception vs Reality: Separating Fact from Fiction
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

![A colorful illustration of human head with colorful lights coming out of the brain AI-generated content may be incorrect.](Picture2.jpg)

<!-- Slide number: 5 -->

![A poster of a person's head with colorful lights AI-generated content may be incorrect.](Picture6.jpg)

<!-- Slide number: 6 -->
# Nobody Uses IPv6!

![A person with a confused expression AI-generated content may be incorrect.](Picture4.jpg)
Perception

<!-- Slide number: 7 -->
# The Answer to Life, the Universe, and Everything (But Nobody's Using It)

![](Picture4.jpg)

<!-- Slide number: 8 -->
# Reality

<!-- Slide number: 9 -->
IPv6’s Operational History – Google Viewpoint

![A graph on a white background AI-generated content may be incorrect.](Picture9.jpg)
Source: https://www.google.com/intl/en/ipv6/statistics.html

<!-- Slide number: 10 -->
IPv6’s Operational History – Internet Society

![A map of the world AI-generated content may be incorrect.](Picture6.jpg)
51%
Current percentage of top 1000 websites globally that support IPv6.
Source: https://pulse.internetsociety.org/en/technologies/

<!-- Slide number: 11 -->
# I don’t need IPv6! I have NAT

![](PicturePlaceholder7.jpg)
This doesn’t scale. I want everything connected
Perception
I don’t need IPv6!
I have NAT!
CTF-1911

<!-- Slide number: 12 -->
# Reality

<!-- Slide number: 13 -->

![A comparison of a computer system AI-generated content may be incorrect.](Picture7.jpg)

<!-- Slide number: 14 -->

![](Picture4.jpg)

<!-- Slide number: 15 -->

![A person standing on a chain with a sign on it AI-generated content may be incorrect.](Picture6.jpg)
# IPv6 is difficult
Perception

<!-- Slide number: 16 -->

![A number six made of waffles Description automatically generated](ContentPlaceholder7.jpg)

![A cartoon paper clip with eyes and a message box Description automatically generated](Picture9.jpg)

<!-- Slide number: 17 -->

![A person walking on a path with a sign AI-generated content may be incorrect.](Picture2.jpg)
# Reality

<!-- Slide number: 18 -->
# Addressplaning – made easy

<!-- Slide number: 19 -->

![](Picture3.jpg)

<!-- Slide number: 20 -->
# Address planning with IPv6

![](Picture4.jpg)

<!-- Slide number: 21 -->
# IPv6 Address rules (RFC 5952)
 2001:0db8:0046:a1d1:0000:0000:0000:0001
 2001:db8:46:a1d1:0:0:0:1
  2001:db8:46:a1d1::1
Prefix
Interface Id

2001 : 0db8 : 0046 :  a1d1 :    0000 : 0000 : 0000 : 0001
16 bits
16 bits
16 bits
16 bits
16 bits
16 bits
16 bits
16 bits

### Notes:
Global Route Prefix / Subnet – these are not necessarily fixed, you have more bits to play with to chop up your subnets

Transcript:

All right, so let's take some of these topics one by one and talk a little bit about them. First off, IPv6 addressing as I said, extremely important to understand. It's extremely important to understand the general concepts behind addressing -- how we represent those 128 bits and so on. Two things that I want to highlight to start with. Number one, IPv6 addresses are represented by CIDR rules. So you have an address with a mask, slash, and the length of the mask so far so good. And this is how things are being talked about in the IPv6 address architecture RFC. However, go down the RFC, and later down the road you will see a very strict requirement that comes up there, which says that all interface IDs -- or the host identification -- all interface IDs have to be 64 bits long. So yes in principle you can have masks as long or as short as you want, but when you get to interface IDs, we ask you to use only 64 bits for interface ID. So you will start to have a little bit of a question mark around this discussion when you will talk to your customers, or when customers will bring up addressing scheme designs. And how should we deal with addressing? And how should we look at addressing schemes and so on? And that is a major first topic that you will have to talk about with your customers because a lot of people pay a lot of attention to it. Now in terms of how the addresses look like, as I said, same CIDR representation. You have the addresses segmented into eight groups of four hex characters. This is just for making it easy for us to proceed and talk about the 128-bit overall. The whole idea is again that you will have a prefix side and you will have a host side, which in IPv6 is called an interface ID. Now in terms of representation, if you look here, this is an IPv6 address. It's a globally routable IPv6 address, and we'll see why I'm so confident by just looking at this address to make that statement. And it's important just to remember that in IPv6 you can use various compression rules in order to represent addresses. For example you can compress your group of zeros here. You can compress them into a single zero. And also you can compress a group of groups of zeros into a colon colon like this. Now one note of caution, you can do that compression of groups of zeros, many groups of zeros, you can compress them only once. Otherwise you won't be able to keep track of that -- if you have multiple colon colon in your address, you will not be able to know how many groups of zeros are in each of those compressed areas.

<!-- Slide number: 22 -->
# The IPv6 Address – Practical View

2001 : 0db8  :  0c15 : 00c0   :  0000 :  0000 :  0000 :  0001
Influence
Control

### Notes:

<!-- Slide number: 23 -->
# IPv6-only DataCenters

### Notes:
Presenter:
Read the slide.

<!-- Slide number: 24 -->

![](Picture2.jpg)

![](Picture9.jpg)

![](Picture13.jpg)

![](Picture7.jpg)

![](Picture11.jpg)

<!-- Slide number: 25 -->
# We will run out of IPv6!
Perception
CTF-1911

<!-- Slide number: 26 -->
# Reality

<!-- Slide number: 27 -->

![](Picture3.jpg)
IPv6
IPv4

<!-- Slide number: 28 -->
# Different things I can do with IPv6

1. Expose every container with a public IPv6 address

![A person writing on a whiteboard Description automatically generated](ContentPlaceholder6.jpg)
2. Spin up 10M containers every second

3. Burn the address with the container !!

<!-- Slide number: 29 -->
# Depleting a /64

![A person leaning against a wall Description automatically generated](ContentPlaceholder6.jpg)
Prefix of /64 has
18,446,744,073,709,600,000
IPv6 addresses

<!-- Slide number: 30 -->
# Depleting a /64
Let’s attempt to exhaust all the available IPv6 addresses

![A person running on a bridge Description automatically generated](ContentPlaceholder11.jpg)

<!-- Slide number: 31 -->
# Depleting a /64

We allocate 10,000,000 addresses per second

![A person writing on a whiteboard Description automatically generated](ContentPlaceholder6.jpg)
There are 31,536,000 seconds per year
315,360,000,000,000 addresses per year

<!-- Slide number: 32 -->
# Depleting a /64

We allocate 10,000,000 addresses per second

![A person writing on a whiteboard Description automatically generated](ContentPlaceholder6.jpg)
There are 31,536,000 seconds per year
315,360,000,000,000 addresses per year

<!-- Slide number: 33 -->
# Depleting a /64
18,446,744,073,709,600,000 315,360,000,000,000

![A person touching a wall with letters Description automatically generated](ContentPlaceholder8.jpg)

<!-- Slide number: 34 -->
# Depleting a /64

![A person sitting in a chair with his hands behind his head Description automatically generated](ContentPlaceholder9.jpg)
58,494 year

<!-- Slide number: 35 -->

![A person holding a computer and looking at another person Description automatically generated](PicturePlaceholder7.jpg)
We allocate a /48 to a Data Centre Network
Prefix of /64? We need to Scale!

<!-- Slide number: 36 -->
# Depleting a /48
A /48 contains 65,536 /64’s

![A person writing on a whiteboard Description automatically generated](ContentPlaceholder6.jpg)
It takes 58,494 years to deplete a /64 at 10M addresses per second
315,360,000,000,000 addresses per year

<!-- Slide number: 37 -->
# Depleting a /48
65,536 x 58,494

![A group of women standing in front of a white board with letters Description automatically generated](ContentPlaceholder9.jpg)

<!-- Slide number: 38 -->
# Depleting a /48

![A person sitting in a chair with his hands behind his head Description automatically generated](ContentPlaceholder9.jpg)
3.8B years

![A picture containing text, wall, indoor, clock Description automatically generated](Picture5.jpg)

<!-- Slide number: 39 -->

![A child sitting on stairs holding a phone Description automatically generated](ContentPlaceholder6.jpg)
Nobody uses IPv6!
CTF-1911

<!-- Slide number: 40 -->
# Country “Mandates”

50+ countries have mandate/encouragement for IPv6/IPv6-only between now and 2030+.

![A black background with white text AI-generated content may be incorrect.](Picture696.jpg)
No Mandate
With Mandate
CTF-1911

### Notes:

<!-- Slide number: 41 -->

![A person sitting at a table with a computer Description automatically generated](PicturePlaceholder7.jpg)
Is there a business case deploying IPv6?
CTF-1911

<!-- Slide number: 42 -->
# IPv4 more expensive than Broccoli on AWS

![](Picture4.jpg)
€€€
€ 37.24
Per Year
Per IP

![Table Description automatically generated with medium confidence](Picture2.jpg)
€

![A screenshot of a web page Description automatically generated](Picture15.jpg)

![A screenshot of a web page Description automatically generated](Picture13.jpg)

https://aws.amazon.com/blogs/aws/new-aws-public-ipv4-address-charge-public-ip-insights/
CTF-1911

<!-- Slide number: 43 -->
# IPv4 more expensive than Broccoli on AWS

![](Picture4.jpg)
€€€
€ 37.24
Per Year
Per IP

![Table Description automatically generated with medium confidence](Picture2.jpg)
€

![A screenshot of a web page Description automatically generated](Picture15.jpg)

![A screenshot of a web page Description automatically generated](Picture13.jpg)

https://aws.amazon.com/blogs/aws/new-aws-public-ipv4-address-charge-public-ip-insights/
CTF-1911

<!-- Slide number: 44 -->

![](PicturePlaceholder3.jpg)
I would love to Deploy IPv6 NOW!
CTF-1911

<!-- Slide number: 45 -->
# "IPv6 is Internet broccoli. Good for us in the long run but no immediate sugar rush from deploying it now"
Shameless self promotion of my own Quotes - Nicole Wajer

![](Picture5.jpg)
CISCOU-1038