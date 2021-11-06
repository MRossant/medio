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
body: "Katie took all of my money. And then I went broke.
But that’s what friends are for.
Tens years later, yesterday, we went to an advance screening of Louis CK’s new movie, “I Love You, Daddy” coming out on November 17.
Louis stars, wrote, directors, produces, etc the movie. He filmed it as secretly as possible.
Why did Katie O’Hagan (in photo taken at the screening yesterday. We had the whole theater) do such a horrible thing to me? She literally took all my money.",
author_id: 19)
story5 = Story.create!(title: "10 Interview Questions Every Javascript Developer Should Know",
body: "In the years since I wrote this article, a lot has changed. When I wrote it, lots of developers were coming to JavaScript from languages like Java and C++, lacking any understanding of how objects work in JavaScript, and trying to apply obsolete patterns, such as deeply layered inheritance hierarchies.
Thanks in part to warnings from influential software developers and framework authors (particularly the authors of React, who wisely listened to the warnings and encouraged better alternatives such as higher order components and React hooks for idiomatic React), the trend of overusing class inheritance in JavaScript has mostly died. And it’s missed by nobody.
In recent job interviews, here’s what I do:
Ask the candidate to build a click counter using any popular framework (React preferred in 2020). This ridiculously simple app has one job: keep track of how many times the user has clicked the button during the current session. No storage. No network I/O. Just count clicks. It is intentionally ridiculously simple: We’re not trying to stump the developer — we’re just trying to verify that they know how to code. I prefer to do this in a pair programming session via a remote Zoom meeting — no use flying a candidate to some office just to watch them code.
Ask the candidate a list of questions about general programming concepts, such as closures and promises. Those questions include common questions related to soft skills — code is only part of what you need to know about a potential hire. You also need to know if the candidate is going to be easy or difficult to work with. Developers who enjoy working together are going to have more fun and be more productive.
For the record: Functional programming has mostly won over class inheritance in JavaScript. Libraries and frameworks like React, Redux, RxJS, Lodash, and Ramda dominate over inheritance-based libraries and frameworks. All of them favor functional programming over class-based monolithic code.",
author_id: "5")
story6 = Story.create!(title: "Comedy & The War On Free Speech",
body: "From Amy Schumer to Jerry Seinfeld to Nicole Arbour — comics want you to know that there is a war going on, a war on free speech.
No, the US government isn’t rounding up dissenters and shipping them off to labor camps, no we are not in a time of McCarthyism — we’re in an even worse time:
A time of Twitter.
Did you know that if a comedian makes a joke that, for example, insinuates that Hispanic men are rapists, people will complain?
What the fuck is up with that?
Did you know that if you are still telling the same tired jokes you were telling 20 years ago with no regard to the changing social and political climate that you probably won’t get tons of laughs on college campuses?
Somebody get these kids a copy of the constitution!
Did you know that if you make a 10 billion hour long video mocking fat people & saying they smell like sausage, not only will people not believe you when you say you are “just trying to help” but some people might actually call you a jerk?
Right now a bald eagle is soaking an American flag with its tears.
",
author_id: 21)