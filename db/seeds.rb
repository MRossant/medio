# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# Create Users
User.destroy_all
ActiveRecord::Base.connection.reset_pk_sequence!('users')

user1 = User.create!(email: "john.appleseed@demo.com", full_name: "John Appleseed", handle: "@JApp", password: "123456")
user2 = User.create!(email: "2@123.com", full_name: "Rick James", handle: "@RJames", password: "123456")
user3 = User.create!(email: "3@123.com", full_name: "Michael Jackson", handle: "@MJ", password: "123456")
user4 = User.create!(email: "4@123.com", full_name: "Darren Hill", handle: "@DHill", password: "123456")
user5 = User.create!(email: "5@123.com", full_name: "Alvin Zablan", handle: "@AZ", password: "123456")
user6 = User.create!(email: "6@123.com", full_name: "Raz Efron", handle: "@REf", password: "123456")
user7 = User.create!(email: "7@123.com", full_name: "Albert Einstein", handle: "@Einstein", password: "123456")
user8 = User.create!(email: "8@123.com", full_name: "Al Greene", handle: "@Greene", password: "123456")
user9 = User.create!(email: "9@123.com", full_name: "Ray Li", handle: "@RayLi", password: "123456")
user10 = User.create!(email: "10@123.com", full_name: "Matteo Rossant", handle: "@mrossant", password: "123456")
user11 = User.create!(email: "11@123.com", full_name: "Leroy Jenkins", handle: "@Leroy", password: "123456")
user12 = User.create!(email: "12@123.com", full_name: "Vitalik Buterin", handle: "@vitalik", password: "123456")
user13 = User.create!(email: "13@123.com", full_name: "Joe Lubin", handle: "@Lubin", password: "123456")
user14 = User.create!(email: "14@123.com", full_name: "Martha Stewart", handle: "@Stewart", password: "123456")
user15 = User.create!(email: "15@123.com", full_name: "Jack Dorsey", handle: "@Dorsey", password: "123456")
user16 = User.create!(email: "16@123.com", full_name: "Elon Musk", handle: "@Musk", password: "123456")
user17 = User.create!(email: "17@123.com", full_name: "Jeff Bezos", handle: "@Bezos", password: "123456")
user18 = User.create!(email: "18@123.com", full_name: "Adam Aaron", handle: "@adama", password: "123456")
user19 = User.create!(email: "19@123.com", full_name: "Rick Ross", handle: "@RickRoss", password: "123456")
user20 = User.create!(email: "20@123.com", full_name: "Mattei Rosanovich", handle: "@Rosano", password: "123456")
user21 = User.create!(email: "21@123.com", full_name: "David Chapelle", handle: "@Chap", password: "123456")
user22 = User.create!(email: "22@123.com", full_name: "Snoop Dogg", handle: "@snoop", password: "123456")
user23 = User.create!(email: "23@123.com", full_name: "Billie Eilish", handle: "@billie", password: "123456")
user24 = User.create!(email: "24@123.com", full_name: "Ela Baser", handle: "@ebaser", password: "123456")
user25 = User.create!(email: "25@123.com", full_name: "Marc Ferlet", handle: "@ferlet", password: "123456")

# Create Stories
Story.destroy_all
ActiveRecord::Base.connection.reset_pk_sequence!('stories')

story1 = Story.create!(title: "The Meaning of Decentralization",
body: '“Decentralization” is one of the words that is used in the cryptoeconomics space the most frequently, 
and is often even viewed as a blockchain’s entire raison d’être, but it is also one of the words that is perhaps 
defined the most poorly. /n Thousands of hours of research, and billions of dollars of hashpower, have been spent for
 the sole purpose of attempting to achieve decentralization, and to protect and improve it, and when discussions get
  rivalrous it is extremely common for proponents of one protocol (or protocol extension) to claim that the opposing
   proposals are “centralized” as the ultimate knockdown argument. /n Many times when people talk about the virtues of a blockchain, they describe the convenience benefits of having “one central database”; that centralization is logical centralization, and it’s a kind of centralization that is arguably in many cases good (though Juan Benet from IPFS would also push for logical decentralization wherever possible, because logically decentralized systems tend to be good at surviving network partitions, work well in regions of the world that have poor connectivity, etc; see also this article from Scuttlebot explicitly advocating logical decentralization). /n 
Architectural centralization often leads to political centralization, though not necessarily — in a formal democracy, politicians meet and hold votes in some physical governance chamber, but the maintainers of this chamber do not end up deriving any substantial amount of power over decision-making as a result. /n In computerized systems, architectural but not political decentralization might happen if there is an online community which uses a centralized forum for convenience, but where there is a widely agreed social contract that if the owners of the forum act maliciously then everyone will move to a different forum (communities that are formed around rebellion against what they see as censorship in another forum likely have this property in practice).
Logical centralization makes architectural decentralization harder, but not impossible — see how decentralized consensus networks have already been proven to work, but are more difficult than maintaining BitTorrent. And logical centralization makes political decentralization harder — in logically centralized systems, it’s harder to resolve contention by simply agreeing to “live and let live”.',
author_id: 12)
story2 = Story.create!(title: "The Field Equations of Gravitation",
body: 'In two recently published papers I have shown how to obtain field equations of gravitation that comply with the
 postulate of general relativity, i.e., which in their general formulation are covariant under arbitrary substitutions of
  space-time variables. Historically they evolved in the following sequence. /n First, I found equations that contain the Newtonian
   theory as an approximation and are also covariant under arbitrary substitutions of determinant 1. Then I found that these equations
    are equivalent to generally-covariant ones if the scalar of the energy tensor of "matter" vanishes. /n The coordinate
     system could then be specialized by the simple rule that v/-g must equal 1, which leads to an immense simplification
      of the equations of the theory. It has to be mentioned, however, that this requires the introduction of the hypothesis that the scalar
       of the energy tensor of matter vanishes. /n I now quite recently found that one can get away without this hypothesis about the energy tensor
        of matter merely by inserting it into the field equations in a slightly different way. The field equations for vacuum, onto which I based
         the explanation of the Mercury perihelion, remain unaffected by this modification. In order not to force the reader constantly to consult
          the previous publications, I repeat here the considerations in their entirety.',
author_id: 7)
story3 = Story.create!(title: "The Mimic and the Maestro: How Mimics become Top Performers",
body: "In the summer of 2013, Robin Thicke released his seminal album and song of the same name Blurred Lines. The industry veteran had crafted and released five previous albums, 
developing something of a cult following. At the age of 16, Thicke had secured a record deal with Interscope, and many in the industry saw him as a prodigy of sorts. /n
A year later Thicke, working under his mentor Brian McKnight, received his first writing credit on McKnight’s second album, I Remember You. /n From then on friends would jokingly call him “Brian McWhite.” 
Thicke’s first few albums had a soulful sound that swooned over melodies about his marriage instead of fleeting promiscuity. And in a field full of black artists, he stood out. /n
“Blurred Lines” was different than Thicke’s previous recordings. The song was more poppy, overtly sexual, and, with a Pharrell co-sign, catapulted Thicke to the forefront of music. Overnight, Thicke became one of 
the biggest acts in the industry. But just as quickly as he struck stardom did his celebrity light dim. His last album’s biggest hit amounted to a paltry #82 on the Billboard Top 100. Arguably, it wasn’t the aggressive
 sexuality, public divorce, or even claims of misogyny that sank his rising tide. Rather, it was the appearance of imitation. /n
Seemingly as quickly as he became famous the lawsuits poured in, suggesting that Thicke’s music was largely the result of copying Marvin Gaye. From the onset, Thicke denied the allegations, stating that
 “it comes right down to knowing the difference between being inspired and stealing.” /n Over the next few years, Thicke’s story would change as he claimed the inspiration came from prescription drugs to Pharrell
  being the primary innovator behind the song. Regardless, the court battles ensued and were eventually settled, but the damage had been done. Thicke was labelled a clone, a cultural appropriator, an imitator.",
author_id: 8)
story4 = Story.create!(title: "How To Go Broke and Live Large With Your Friends",
body: "Katie took all of my money. And then I went broke. /n
But that’s what friends are for. /n
Tens years later, yesterday, we went to an advance screening of Louis CK’s new movie, “I Love You, Daddy” coming out on November 17. /n
Louis stars, wrote, directors, produces, etc the movie. He filmed it as secretly as possible. /n
Why did Katie O’Hagan (in photo taken at the screening yesterday. We had the whole theater) do such a horrible thing to me? She literally took all my money.",
author_id: 19)
story5 = Story.create!(title: "10 Interview Questions Every Javascript Developer Should Know",
body: "In the years since I wrote this article, a lot has changed. When I wrote it, lots of developers were coming to JavaScript from languages like Java and C++, lacking any understanding of how objects work in JavaScript, and trying to apply obsolete patterns, such as deeply layered inheritance hierarchies. /n
Thanks in part to warnings from influential software developers and framework authors (particularly the authors of React, who wisely listened to the warnings and encouraged better alternatives such as higher order components and React hooks for idiomatic React), the trend of overusing class inheritance in JavaScript has mostly died. And it’s missed by nobody. /n
In recent job interviews, here’s what I do: /n
Ask the candidate to build a click counter using any popular framework (React preferred in 2020). This ridiculously simple app has one job: keep track of how many times the user has clicked the button during the current session. No storage. No network I/O. Just count clicks. It is intentionally ridiculously simple: We’re not trying to stump the developer — we’re just trying to verify that they know how to code. I prefer to do this in a pair programming session via a remote Zoom meeting — no use flying a candidate to some office just to watch them code. /n
Ask the candidate a list of questions about general programming concepts, such as closures and promises. Those questions include common questions related to soft skills — code is only part of what you need to know about a potential hire. You also need to know if the candidate is going to be easy or difficult to work with. Developers who enjoy working together are going to have more fun and be more productive. /n
For the record: Functional programming has mostly won over class inheritance in JavaScript. Libraries and frameworks like React, Redux, RxJS, Lodash, and Ramda dominate over inheritance-based libraries and frameworks. All of them favor functional programming over class-based monolithic code.",
author_id: "5")
story6 = Story.create!(title: "Comedy & The War On Free Speech",
body: "From Amy Schumer to Jerry Seinfeld to Nicole Arbour — comics want you to know that there is a war going on, a war on free speech. /n
No, the US government isn’t rounding up dissenters and shipping them off to labor camps, no we are not in a time of McCarthyism — we’re in an even worse time: /n
A time of Twitter. /n
Did you know that if a comedian makes a joke that, for example, insinuates that Hispanic men are rapists, people will complain? /n
What the fuck is up with that? /n
Did you know that if you are still telling the same tired jokes you were telling 20 years ago with no regard to the changing social and political climate that you probably won’t get tons of laughs on college campuses? /n
Somebody get these kids a copy of the constitution! /n
Did you know that if you make a 10 billion hour long video mocking fat people & saying they smell like sausage, not only will people not believe you when you say you are “just trying to help” but some people might actually call you a jerk? /n
Right now a bald eagle is soaking an American flag with its tears.",
author_id: 21)
story7 = Story.create!(title: "A Proof of Stake Design Philosophy",
body: "Systems like Ethereum (and Bitcoin, and NXT, and Bitshares, etc) are a fundamentally new class of cryptoeconomic organisms — decentralized, jurisdictionless entities that exist entirely in cyberspace, maintained by a combination of cryptography, economics and social consensus. They are kind of like BitTorrent, but they are also not like BitTorrent, as BitTorrent has no concept of state — a distinction that turns out to be crucially important. They are sometimes described as decentralized autonomous corporations, but they are also not quite corporations — you can’t hard fork Microsoft. They are kind of like open source software projects, but they are not quite that either — you can fork a blockchain, but not quite as easily as you can fork OpenOffice. /n
These cryptoeconomic networks come in many flavors — ASIC-based PoW, GPU-based PoW, naive PoS, delegated PoS, hopefully soon Casper PoS — and each of these flavors inevitably comes with its own underlying philosophy. One well-known example is the maximalist vision of proof of work, where “the” correct blockchain, singular, is defined as the chain that miners have burned the largest amount of economic capital to create. Originally a mere in-protocol fork choice rule, this mechanism has in many cases been elevated to a sacred tenet — see this Twitter discussion between myself and Chris DeRose for an example of someone seriously trying to defend the idea in a pure form, even in the face of hash-algorithm-changing protocol hard forks. Bitshares’ delegated proof of stake presents another coherent philosophy, where everything once again flows from a single tenet, but one that can be described even more simply: shareholders vote. /n
Each of these philosophies; Nakamoto consensus, social consensus, shareholder voting consensus, leads to its own set of conclusions and leads to a system of values that makes quite a bit of sense when viewed on its own terms — though they can certainly be criticized when compared against each other. Casper consensus has a philosophical underpinning too, though one that has so far not been as succinctly articulated. /n
Myself, Vlad, Dominic, Jae and others all have their own views on why proof of stake protocols exist and how to design them, but here I intend to explain where I personally am coming from.
I’ll proceed to listing observations and then conclusions directly.",
author_id: 12)
story8 = Story.create!(title: "Liberation Through Radical Decentralization",
body: "Wealthy societies around the world are facing a growing crisis of confidence in established authorities. Stagnating economies, mounting inequality, political corruption and the increasing monopolization of technology for the benefit of elites have provoked a populist backlash. We share and are driven by these feelings of discontent. However, we also fear that the most common responses on both the right and the left (a retreat from technology, markets and international cooperation) would destroy much of what we treasure in contemporary society while worsening the problems they seek to solve. Over the last half decade, each of us has, in his own way, been working on a part of an alternative solution: to find ways to harness markets and technology to radically decentralize power of all sorts and shift our reliance from authority and to formal rules. In what follows, we discuss how these projects interrelate and complement each other. /n
One of us has focused on technological solutions to the increasingly centralized control that has been established by powerful monopolies in the digital economy and financial spheres. Bitcoin and other cryptocurrencies in particular emerged directly as a reaction to the perceived excesses of the traditional financial system, with “The Times 03/Jan/2009 Chancellor on brink of second bailout for banks” carved indelibly into Bitcoin’s genesis block. That said, the decentralized technologies behind cryptocurrencies have potential applications far beyond finance. The news is filled with the failures of centralized systems to protect people’s privacy, ranging from large-scale hacks such as Equifax to more recent concerns around social media privacy. Such events are increasing interest and innovation in “self-sovereign” user-centric identity management systems; the use of a blockchain as an expensive but decentralized and very high-assurance store of data and computation features often in such designs. /n
The other has focused on designing rules of the economic and political games of mainstream society, aiming to both break up and reduce the need for concentrated centralized authority — what he calls “Radical Markets”. Traditional private property tends to create and perpetuate inequality of power, monopolizing resources in a few hands rather than deploying them to their best uses. A truer, radical free market would create greater competition and equality by a greater use of auctions and commonly owned property. One-person-one-vote democracy tends to oppress minorities, who then seek protection from the judicial system or international authorities, thus subverting democracy. A more creative democratic forms that give power to minorities to protect their own most deeply valued interests can restore the legitimacy of government. A leading candidate is “Quadratic Voting” (QV), in which citizens can use a (possibly artificial) currency to buy votes at the cost of the square of the votes bought on the issues that are most important to them. /n
Our projects developed largely separately and each of us has hesitations about especially the near-term aspects of the other’s project. For all their potential, cryptocurrencies show dangerous tendencies towards bubble behavior and the precise set of use cases in which they make the most sense remain to be worked out. Radical new kinds of social institutions, whether technical or economic or political, top-down or bottom-up, are best adopted incrementally and slowly, to give opportunity for experimentation and social learning and reduce the risk that they might disrupt existing social structures in a way that would cause precisely the sort of conflict they seek to heal. /n
Yet both of us also see great potential for collaboration and complementarity between our programs. Because Ethereum and other cryptocurrencies (intentionally) lack trusted judges and other authorities to adjudicate disputes, they depend heavily on formal and transparent rules. The failings of standard property and voting rules quickly manifest themselves when stripped of the protective coating of human-driven judicial discretion. Blockchain-based projects therefore have a strong demand for better rules that can help to maintain the decentralization of economic power and for governance rules that can avoid the need for large bureaucracies these communities cannot support; a Radical Market that can operate successfully on the blockchain is one that most fully achieves the goal of avoiding reliance on discretionary power. Finally, the cryptocurrency community is one with aligned philosophical values, and an unusual openness to innovation, that makes it an ideal place where Radical Market ideas can be tested at relatively limited broader social cost. /n
We thus see many opportunities to collaborate and are actively working to foster connections between our respective communities. Even if neither community achieves its sweeping social ambitions, there are a wide range of narrower contexts where collaborations seem capable of making important social impacts, including using blockchains to improve security of data markets and QV for aggregation of opinions in blockchain-based social networks. And beyond the specific ideas we have worked on, a range of related collaborations seem possible, from using electronic “postage” to deter spam to expanding access to high-quality financial planning for those with limited resources. /n
One particular example of a possible area for collaboration, and which illustrates some of the challenges involved, is the use of QV to address the substantial governance problems blockchain-based communities have faced. There have been many attempts to use votes to gauge community sentiment when deciding on potentially controversial protocol changes, but so far they have been criticized either for being too vulnerable to manipulation by sockpuppets (fake accounts) and malicious voting by non-community-members or for being too skewed toward reflecting the views of a small group of wealthy coin holders. Some form of QV could present a moderate alternative, as participants’ differing strength of views and stake in the community are taken account, but because the cost of buying many votes quickly becomes prohibitive (1000 votes would cost 1,000,000 credits) the ability for a small elite to disproportionately affect outcomes is limited. /n
However, QV also poses important technical and conceptual challenges to existing crypto-currency communities. In particular, QV relies heavily on the notion of verifiable, separate human identities, because a community member could multiply her effective influence dramatically by misrepresenting herself as multiple individuals (sockpuppets). The frequent use of anonymity and pseudonymity in crypto-currency communities is in tension with the need for such clearly-delineated identities, though also naturally gives rise to some of the inegalitarian wealth and power dynamics these communities hoped to avoid. After all, a system that formalizes only capital and not human individuality may inexorably serve wealth rather than humanity. In this sense, experiments with Radical Markets may help clarify important outstanding technical questions within crypto-currency communities. /n
More generally, as we have arguably seen with parts of the internet and the web, excessive and naïve reliance on any formalism intended to decentralize authority can inadvertently have the perverse effect of reestablishing monopolies and oligarchies. Only by making technical systems that offer a variety of mechanisms for checking concentrations of power and by simultaneously building social ideologies constantly on the lookout for failure modes of these mechanisms can we hope to succeed where previous attempts at decentralizing authority have failed. But we are hopeful that some combination of blockchain and Radical Markets technologies can make an important contribution to breaking up the most oppressive forms of corporate, government and technical power and building towards a more free, open and cooperative world in the 21st century.",
author_id: 12)
story8 = Story.create!(title: "Making the World's Best Shakshuka",
body: "Shakshuka may be at the apex of eggs-for-dinner recipes, though in Israel it is breakfast food, a bright, spicy start to the day with a pile of pita or challah served on the side. (It also makes excellent brunch or lunch food.) It’s a one-skillet recipe of eggs baked in a tomato-red pepper sauce spiced with cumin, paprika and cayenne. First you make that sauce, which comes together fairly quickly on top of the stove, then you gently crack each of the eggs into the pan, nestling them into the sauce. The pan is moved into the oven to finish. Shakshuka originated in North Africa, and like many great dishes there are as many versions as there are cooks who have embraced it. This one strays from more traditional renditions by adding crumbled feta cheese, which softens into creamy nuggets in the oven’s heat. /n
PREPARATION /n
Step 1 /n
Heat oven to 375 degrees. Heat oil in a large skillet over medium-low. Add onion and bell pepper. Cook gently until very soft, about 20 minutes. Add garlic and cook until tender, 1 to 2 minutes; stir in cumin, paprika and cayenne, and cook 1 minute. Pour in tomatoes and season with 3/4 teaspoon salt and 1/4 teaspoon pepper; simmer until tomatoes have thickened, about 10 minutes. Taste and add more salt and pepper if needed. Stir in crumbled feta. /n
Step 2 /n
Gently crack eggs into skillet over tomatoes. Season eggs with salt and pepper. Transfer skillet to oven and bake until eggs are just set, 7 to 10 minutes. Sprinkle with cilantro and serve with hot sauce.",
author_id: "6")

# Create Bookmarks
Bookmark.destroy_all
ActiveRecord::Base.connection.reset_pk_sequence!('bookmarks')