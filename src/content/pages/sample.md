---
title: "Read the opening chapters"
description: "Read the first three chapters of Human Software by Richard W. Bown: a night shift that goes wrong, an American executive arriving to restructure Sandport, and the price of keeping the systems running."
---

## 1. The Wake-up Call

She feels the cold, alone in the silence. Pooled in darkness, the dressing gown wrapped tightly, headphones on. The sleep in her muscles given way to tension. Confusion is the single note in her head. The cursor blinks.

The laptop screen is too bright. Beth checks the time. 3:27 a.m. Already an hour on this call, no one talking, but everyone still staring at the shared screen. She looks back at her terminal window, the cursor awaiting her command. She closes her eyes for a second. The room spins slowly.

A ping from a DM startles her, loud in her ears. She worriedly looks at the volume control before realising only she can hear it, the house still asleep upstairs. Pune has been tracking the problem for ninety minutes. As third-line support, she has only been involved for the last fifty. The phone call rattled the ancient Blackberry across the bedside table to wake her. She squeezed out of bed and slid quietly over the landing past her kids’ bedrooms to make her way downstairs.

Tinnitus was OK once you got used to tuning it out. Standing too close to the PA at a gig. A night of damage and inattention. And suddenly there you go, not even into your mid-thirties with damaged ears. Spiking in the quiet mornings like this when tired, when ill. The price of enjoyment.

Ping.

Sanjay: do you want to try it again

She reloads the front-end in her browser. There’s still a login window popping up when there shouldn’t be one.

BethW: no, still happening

A thoughtful pause on the other end of the chat. No typing.

She goes back to her scattered thoughts. Sometimes on these nights, you were in control. You were the one making the changes. Sometimes you were the one assisting, ensuring that the other person had another pair of eyes to help them. It was always a team effort. And teams can only move as fast as the slowest player. Sometimes it’s faster to go it alone, but that is a risk. Sometimes you need to take a risk to get back into bed for the remainder of the night.

These are the skills that no one teaches you. They are forgotten as soon as they are remembered, or you are born with some innate ability to handle the unsociable hours.

She opens the code editor and checks yesterday’s change. Two sign-offs are required, but the system allows you to override. Override. Merge. Done.

A shiver of thought flits across her brain. A slight panic rises. It would have been safe, right? The test coverage is good? A doubt. She pushes the thought down, and the brain takes over, reminding her that there is nothing more that can be done. Wait until tomorrow. They are already most of the way through a fix.

The laptop hums away steadily, pumping more hot air out onto the dirty plates. Drying them. Caking them. Why couldn’t the kids or Dominic ever clean up after themselves? Beth stretches and stands to edge through to the kitchen area. Sliding in dining chairs that catch on the floor. The carpet under her feet is warm and soft but could do with cleaning. The cat is asleep now, having rotated and picked its way into a warm, comfortable spot on the sofa.

It’s fine. There are checks in place.

She flips on the kettle and looks at herself in the glass of the kitchen cabinet. Black hair in a bob, tucked behind her ears. A nose stud. A flannelette nightie under her fluffy dressing gown. Rock and roll.

<div class="sample-scene-break" aria-hidden="true">❖</div>

In the weak sunshine of a fresh late-winter morning, coastal air rolls over a wasteland where huge Victorian warehouses once stood. They still have a few old wharves along the Wantsum, but up here, closer to the old power station, most have been replaced with large purpose-built aluminium sheds filled with endless racks of servers and their ancient 1970s operations centre. She’s not the first. At least twenty cars are here already.

All of the support people are answering customer calls. There is red on the usually placid green and blue monitoring screens. Above, overlooking the whole open-plan space, is a global map showing the impacted areas of this latest outage. It looks like air freight and shipping terminals are suffering, plus there would be knock-on effects in the supply chains. That’s bad news for all of their customers, but it’s the new ones who will be most displeased.

Beth keeps her head down and makes her way straight to the incident room. Ian is wearing that red jumper that’s a size too small and almost the same colour as his large, neatly-bearded face. He is a small man with a loud voice, a barrel chest, a hearty laugh and a paunch to match. But there is no laughing this morning.

Ian slams the table. “Why is this happening now, of all days?”

Silence. They let him continue.

“Why didn’t the automated backout work?”

Michaela leaves a beat and sighs discreetly. Her faded New York accent punctuating the short silence.

“You knew this was a risk, Ian, adding those new clients Abinghouse and Voldermeet, but y’all went ahead anyway.” Michaela looks pointedly at Alison, their product manager, who stares back impassively and continues to listen.

Michaela is slim, dark skinned, wearing jeans and a jacket with black, deeply-curled hair. She’s a couple of months older than Beth, doesn’t take any shit from anyone, let alone Ian and, a long time ago, was her best friend at school.

She goes on: “We agreed a few weeks ago that stability was our number one priority. We can’t do both – we can’t guarantee stability when we’re aggressively expanding our customer base.”

Ian looks dumbly at Michaela. “What do you mean, ‘We went ahead’? This was Product’s decision and Support said it would be fine.” He’s not buying it.

Michaela is Beth’s team lead, their Product Owner. She’s good at dealing with this management bullshit. Beth wonders why she’s even been brought along to this meeting. She keeps her mouth shut and surreptitiously raises her eyebrows to Grant, her teammate in DevOps, and he twinkles the hint of a smile back.

At this point, Alison speaks up. British, clipped tones, smart business suit, mid-forties. She’s the newest member of the management team. She’s smart and she’s quick, which is annoying. She’s the one who made them bend the rules.

“Yes, we pushed for it. Support and Dev said it would be fine.”

It’s clear to Beth now. Alison called this meeting to get Ian to chew them out. Michaela sighs again, a little more obviously and trots out a weary response.

“Ian, you know that we agreed that stability was important so we said don’t push any more customers onto either system before getting us to sign off.”

Alison pushes back. “You’re aware that ChainLink is the one we need to be able to onboard customers onto effortlessly, right? It’s the first step on our product ladder.”

“Except for the new people,” corrects Michaela, waving her hand to indicate the new clients.

Alison nods, accepting this point. “Except for our new clients who just use our infrastructure. Yes. But our core business is ERP. Without that backbone, we don’t get to sell warehouse management, so TrolleyTrack, plus we don’t get to do supply chain and order management with ChainLink.”

Beth rolls her eyes. Honestly, they could all do without the lecture on their own systems. These systems are all she has known for most of the last few years.

Michaela looks to interrupt but Alison holds up her hand and raises her voice.

“But, it’s our infrastructure stuff, the new products, that are the way forward. In future if there’s contention over where you should use resource,” at this she looks distastefully at Beth and Grant, “then know that you should focus on a good experience.”

Grant looks a little shocked. Beth is determined not to rise to this bait. Ian can take it instead.

Ian shakes his head. He might be simply forgetful or Machiavellian; it’s sometimes hard to tell. He also doesn’t like Alison taking charge like this, but he doesn’t immediately challenge the new woman. Instead, he rounds on the dev team as if he feels this is what he should do.

“So listen to what Alison says, please. Your job in tech is to make it stick, right? You guys,” he points at Beth, Grant and Michaela in turn, the two women who both wince slightly inside, “you guys need to make this happen.”

This feels like a betrayal. What’s changed since Alison came on board? Not much, really, apart from more noise and accusations like this. Self-obsessed as ever, thinks Beth. Why doesn’t he understand that none of them wants to be up in the middle of the night nursing these 24/7 systems through their death throes? Nonetheless, here they all are, after another sleepless night.

The worst thing, Beth thinks as she emerges from the meeting room’s stale air and goes to her desk, is that this was all avoidable. If they could all just stop for a minute and understand where they needed to spend their time as a team, as a group, they could probably fix all of this in a month or two. Maybe.

What Alison said made sense from the business perspective, but she’s still naive to the way they work here. Everything is done in a rush. New code is pushed to production and things carry on in their own slipshod, halting fashion. All these managers. All pushing their agenda while living in the fear of failure heaped on them from above. And they’d all heard the rumours. Someone was coming. Something was going to happen finally. Perhaps this would be the change for the better they all needed. Hope is the killer.

She settles down at her desk and docks her laptop. Double monitors. She pulls up last night’s telemetry and looks at the graphs of failure, graphs of recovery. They tweak processes here and there, they bring new resources online in the dev environments to work out what happened. They will nurse these systems through another day to another night. Another weekend wasted at work.

And then she sees it. The mistake that she’d dreaded. The mistake that Grant had missed, too. She had screwed up. This could have rendered half of their systems inoperable if the end-of-week local refreshes hadn’t caught it last night. She shudders. This whole outage could have been catastrophic. She breathes lightly as she tests a fix. Quietly, she creates a PR and sends it to Grant for the first approval, and then sighs in relief.

Peter would be livid about what happened. They always had the best intentions, but the execution was always lacking. Beth felt weary to her bones. There was no Peter at work yesterday.

And Peter had been out with Dominic last night.

## 2. Chrissie’s Arrival

The plane is late, the weather is foul as it touches down at Heathrow with a bump and a squeal of tyres. Chrissie relaxes her hands as the speed sloughs off. She stares out of the window. From first class, the country looks even more dishevelled than the last time she was here. But sometimes these two countries, divided by a common language as her dad always says, seem like different sides of the same universe.

She’s got a banging headache, probably from the mixture of first-class lounge champagne and Vicodin, but at least she got a form of rest. She looks at the watch on her slim wrist: 7:27 a.m. local time. And yet there is still a full day ahead of her.

No one helps her lift her heavy carry-on out of the overhead locker and it’s a stretch for her short frame. For a moment, she wishes Mitchell was here to help. The excitement of travel wore off what feels like days ago, replaced with apprehension for the task ahead. Straightening her travel suit, she makes her way up the airbridge. Business face engaged.

She takes the phone out of flight mode as she waits for immigration. A cavalcade of emails, texts, WhatsApps and Teams and Slack messages flood in. Teams and Slack take precedence. Teams for escalations, Slack for all the operational stuff. She sees a fight between some of the architects and senior devs about the firewall changes again. Eight years into this cloud ‘lift and shift’, there is no sign that it will stop anytime soon. Having moved most of their stuff from their own servers “on-prem” to one cloud provider, they are now in the middle of another migration. Everything moves so slowly and they still have projects everywhere, and always this is talk of more. Things move faster in people’s heads than they can ever happen in real life. They continue to pay ever-increasing amounts of money and hope that things progress. Networks at the heart of all of this confusion, and the bills mount with every passing month.

Her head is already in the detail as she waits for her suitcase. The work relieves the feeling of tiredness as a flood of adrenalin courses through her. Annoyance at inefficiency seems to be the staple mood of her working day.

She’s already on the phone back to head office in downtown Cicero, Illinois as she walks through customs:

“Hey Marcie, it’s me. Sorry to wake you. Yes, fine. Can you do me a favour and help me find the notes for the migration meetings we had a couple of months ago? Yes, the ones about the firewalls, I believe it was? Yep. Thanks. Speak soon.”

There is always noise coming from somewhere, voices clamouring for attention, projects that spring up from nowhere. Executives with their pet programmes, their babies that they nurse through from inception to something they hope will catch the eye of someone higher up in a good way. A risk, a gamble. Anything to make the days, weeks and months more bearable. Chrissie had been on both sides – punting the ideas and running the projects. She knows how it works, and that’s why she is where she is. Always an executive with an excitable architect in tow, pushing something that will only make their lives more complicated.

The driver is in his late fifties, wearing a Sikh’s dastar and a gentle smile. She mouths hello and gives him the thumbs up. Next, she’s on the phone with Mitch to check on the situation with the roof. He sounds in control. She relaxes slightly. The driver wheels her large suitcase, heavy carry-on, and laptop bag towards the waiting Mercedes.

She’s on another call by the time the car pulls away.

“Arthur. Sorry to disturb you so late but I guessed you’d be awake. How is it going? Yeah, good, thanks, just touched down. Yeah, it will be a long day today. Listen…”

And she’s into a lengthy technical discussion, which she ignores most of, but needs to be alert for. She knows she’s in a tricky position and, as the soon-to-be-announced VP Operations Europe, none of this work is going to go away just like that.

As Philip, the Senior Vice President, her boss, tells her, this could be the making of her, but right now, she feels like she’s just doing what she does best: moving fast and making people justify their wages.

<div class="sample-scene-break" aria-hidden="true">❖</div>

The rain hasn’t stopped all ride. The elevator is out of action, so she struggles up four flights of stairs to the penthouse. The driver helps her with the bags. She already made sure they stopped for cash so she could tip him. She gets a receipt, of course, and thanks him. And then suddenly, she’s alone.

The flat feels cold and empty and a million miles from anywhere. It smells a little damp, despite being on the top of this renovated warehouse. It’s nicely outfitted, if a little dated, but the lights just seem a bit too dark or ineffective, and the windows don’t seem to let enough light in. It feels cramped. A full kitchen with a living room, two bedrooms, both with en-suites in case she has guests, not likely, she thinks. There’s that lift to get her up without taking the stairs. Around here, this is as good as it gets.

Chrissie looks out over the flat, grey countryside swathed in rain. The old abandoned sawmill on the far bank of the channel, with the neat houses next to it. It looks like the kind of place that Scooby Doo and Shaggy would find something amiss in. She looks at the long, slender willow trees on the banks of the brown, ooze-coloured river at the quay.

The location is perfect. A ten-minute drive, or a half-hour cycle or even a long run to the office a few miles away across that brown-grey-looking, slow-flowing water under the bridge.

You can’t miss the bridge; it dominates everything. While she’s been here before, it’s never felt comfortable. It all feels so different, so apart. Like parts of her home have been brought together with parts of the old world, Europe, England, everything. The proportions of distant cooling towers look alien in proportion.

Chrissie lugs her suitcase onto the bed, takes out the pictures of Mitch and Morgan for her bedside table, and then sits down heavily.

She feels sleep tugging at her eyes. But no, it’s lunchtime. Time to get out. The weather can go to hell. She locates her waterproofs at the bottom of her case, touches up her makeup, tucks her hair under a beanie and heads out into the pulsing sheets of rain that the wind whips in from the nearby coast.

Sandport’s core used to be an ancient town south of the Wantsum, but now the broad and smooth-flowing channel splits it in two. A wide, urgent waterway powering the wheels of the local economy. Chrissie sees the barges tied up at the docks on the other side of the channel. The huge bridge towering over it connects the old town to the new. The distant marina marked by yacht masts. The power station and warehouses. The close-formed groups of wind turbines huddled on the shore and in the channel out to the east. It’s an industrial landscape perched on the edge of the world. It reminds her of a smaller version of Rotterdam with all those pipes and wharves and ships, but something is wilder and much less impressive about it.

This is more edge-of-the-world than the endless rolling sprawl of Europort. She can’t forget that chaotic place with its endless industry and oil terminals with fire spewing into the night. A lifetime ago, when Morgan was six, they took the ferry from Rotterdam to explore the North of England, driving around aimlessly. The imposing North. A different country compared to this flatland.

And then Sandport. The town itself is asleep, even at lunchtime on a Friday. The rain worries the residents and workers inside pubs and cafes for a sleepy lunch. She has a few hours to kill before the next meeting, so she starts to explore.

Her grandfather told her about a saying about British Pub culture: “The Walls Have Ears.”

Chrissie finds a cafe in the middle of the town. The service is polite enough without being warm. She waits through one cup of decidedly average coffee and then another. Her phone still full of messages. Time seems to pass so slowly. Mitchell calls again. She confirms she’s OK. The roof is solved. Morgan did well at the tournament.

His voice is a powerful presence, as though in the room with her. While it feels good to connect, to hear a friendly voice, she also wishes in a way she hadn’t. She rings off quickly, annoyed.

She would wait alone. She would be patient.

<div class="sample-scene-break" aria-hidden="true">❖</div>

It’s a sweet-looking little place, tucked away in a part of the old town where the quayside falls away to some residential properties by the water. A seafood place, she guesses that she’ll need to get used to that. The restaurant is not far from her apartment. As she walks along the banks of the channel, she senses the current pulling at the feet of the giant bridge.

Charles seems a little softer, a little wider and with a little less hair than the last time she saw him. His smooth-shaven face is smiling broadly as ever and he waits respectfully by the front desk as she walks into the restaurant. No showboating from him. Not yet anyway.

Charles is their Enterprise Architect; their European one. She gets on well with all of the architects, but always particularly Charles, and she feels relieved to see him.

“Chrissie, so good to see you again!” he sounds genuine as he kisses her on both cheeks.

He smells clean and fresh, in a new shirt and tie. The blazer, though, and the trousers she has seen before. Charles’ signature look is usually somewhere between a high-school teacher and a university professor. Nominally smart but always a pleasure.

“Hi Charles, lovely to see you again.” She is happy to see a familiar face. “Thanks so much for meeting me tonight. I hope I didn’t crash your plans too much with your family?”

“Not at all, we couldn’t have you being by yourself on your first night now, could we? Jessica says hello, by the way. Honestly, she’s happy to have me out of the house for a bit.” His trademark wit is already in action.

The service is good. It’s not super attentive, but passable for somewhere that is, let’s face it, she thinks, on the edge of nowhere. The waiters and waitresses are young and easily distracted, but competent enough. They get drinks and appetisers quickly.

“It’s great to have you here, Chrissie. It really is. I hope your arrival here is good news for our legacy systems?”

Chrissie doesn’t rise to the bait of the open question but feels disappointed that it’s come around to business so quickly. She smiles at the older man. “It’s great to be back, Charles. What do you mean exactly?”

“Well, you know we are chronically underinvesting in our core systems…”

“Do I? I’m not sure I follow, Charles?”

“Well, I did bring it to the board’s attention at the last quarterly architecture review, particularly your boss.”

He raises his eyebrows knowingly. She wasn’t at that meeting. He’s just testing to see how much she knows.

“So what did Philip have to say about this important subject?”

A pause. Her directness slightly takes the older man aback, but the smile returns as quickly as it disappears. She thinks she detects a cover-up incoming.

He laughs. “I discussed the modernisation. There was a general agreement. Timelines and budgets are, apparently, for you to consider.”

Chrissie looks at him steadily for a second before speaking. As if reading his mind, she gives him a briefing. He wants business, he gets business.

“I’m here to ensure we achieve the cost savings the board has outlined and press ahead with the new projects. So I can’t make any promises about any modernisation. Those are out-of-band costs, extra costs, Charles. I shouldn’t need to remind you how much budget pressure we are under.”

He looks slightly cowed by her reply, as if he’s out of his depth, which she reminds herself, he is. She is more convinced than ever that Charles’ treatises will go nowhere now. You don’t pound on the door of the COO; it’s not a good look for anyone, no matter how senior or long they’ve been in the company. He’s doing it out of boredom, she thinks. Something for him to play with. She continues.

“In the meantime, how do you see us working best together? To avoid any misunderstandings or overstepping?” Let’s not fall for the charm and keep those dukes up eh, Chrissie? She can hear her father talking as she feels the weight of the words in her mouth.

Back in high school, back in the debating team at college. Those moments of training built up to times like this. She has already assessed the opposition and kept them honest to this point, and can then start manoeuvring them around the ring. This is what she knows. She has learnt from the best.

But she doesn’t need to fear Charles. She also doesn’t need to bully him. He is just happy to have the opportunity to explain his plan to someone who might be able to take action. He sighs and looks out of the window.

“Well, we’re not in the logistics business anymore, Chrissie. We haven’t been a logistics business for years. Look at those docks, they are virtually empty. The future is systems. That’s what Edgar Gerbach got so right. He understood that.”

Chrissie lets the veteran continue. He does so, slowly, picking his words carefully, but increasingly passionately. Almost pleadingly.

“We should ask ourselves why we still have these old systems when our customers want more? They want more flexibility. They want more power. We’re running on systems that are thirty-plus years old. They are creaking. We need to modernise. We need new thinking, new technology, new investment.”

This is the standard spiel she’s heard before. Give more money to technology. She tries not to roll her eyes.

“Yes, Charles, that sounds logical if we were staying in the logistics business, right?”

Charles isn’t listening, however.

“It’s our day-to-day. Did you hear that we had a pretty major incident last night with ChainLink?”

“When don’t we?” she answers sarcastically, almost out of frustration. He doesn’t get it, fixated on the past. When he doesn’t reply, she raises her eyebrows and pauses. Inhales. If it were that important, Ian would’ve called, surely?

“I’m sorry, I didn’t get the details. What exactly happened?”

Charles doesn’t seem surprised at her flippancy. He’s a master at controlling his emotions. She can sense something different this time. Something is wrong. He takes his opportunity calmly.

“What happened specifically is almost irrelevant. The fact is, we’re spending plenty of time and money chasing our tails. We could be smarter and fix things as we go, rather than always playing catch-up. It’s not all about the future right now.”

Chrissie reassesses him. He is gently trying to get his point across. It’s unlike this man to make a stand.

She almost blinks in surprise at understanding this, but she understands the warning. There is an otherworldliness to this situation. She has to remind herself that she is actually here. She is actually the one in charge. Suddenly she feels even more tired.

## 3. Grounded

Upstairs, Eric’s high-pitched, distant, unbroken voice accompanies shouting and banging from behind his closed bedroom door. Distant but audible:

“HOW” _thunk_ “MANY” _thunk_ “MORE” _thunk_ “TIMES?”

Dominic continues making dinner as the noise and thumping continue. Beth is exhausted. It’s not enough that she has to come home to this after a long day. Dominic is helping, she thinks, but he could be more involved.

She took some time to talk to her son about his screentime and why they were taking his phone away for the night. Dominic looks guilty but offers:

“It’s the right thing. Thank you for doing that.”

Beth says nothing. She sits at the breakfast bar, now answering a message from work. She feels angry. Not at Dominic, not at Eric. Just angry.

“How was it today?” Dominic asks, tentatively. She flashes him a look that says, “don’t ask” and then instantly regrets it.

Dominic fetches the bottle of wine from the fridge door and pours her a large glass. She takes it wordlessly and takes a swig. Then she nods and looks up. “I’m just going to sit down and watch something brain-deadening.” Smiling thinly.

“Sure. Go for it.” Dominic nods and looks down at the cutting board.

She surreptitiously watches him pick at a fleck of paint on his thumbnail, washes it off in the sink before returning to the vegetables. There’s a certain way that the food is made in this house that they have perhaps tacitly agreed. Was it her way? Was it his way? She knows that he wants to know how to help more. But perhaps right now, just making dinner is enough, picking up Eric is enough, keeping the house relatively tidy. Work is tough for her. Home is tough for them all. She wishes her home were cleaner, but he has no energy for it, no eye for it, and they have no spare money to hire someone. The kids, well, they are kids. Maddie is seventeen and is as helpful as she is unhelpful in equal measure, but she is at least not angry anymore. Not so much, at least.

They have learned to let Eric cool down. It is a time of arguments, eye-rolling, and door slamming. Sometimes, it feels like this phase will never stop. Dominic has told her that sometimes he feels trapped in this house, trapped with these kids who aren’t his. Why should he care? Twelve is a tricky age. Dominic sometimes speaks wistfully of his youth in the West Country. It was all fresh air, bicycles, hills, cricket, and football, as far as he says. Perhaps not enough landscape for him here. It seems like another century away. Maddie is good with him, though. Good with both Eric and Dominic. Sometimes Beth accuses Dominic of being the dominant one. She says he is the one who gets angry, the one who throws out the baby with the bathwater, but maybe it does feel sometimes like they are all living her life. Is it because she’s the breadwinner? Maddie has echoes of Beth in her. Wilful, strong. She can see why, sometimes, Dominic might feel sidelined.

That glass of wine seems to have disappeared. She finds some more and returns to her thoughts, watching the news without taking anything in. Beth sees Dominic looking at himself in the reflection of the chrome refrigerator. Tall, slightly hunched, thin, middle-aged, but with dark black hair. How would she describe him? Gaunt? Haunted? What does Peter call him: “Lanky, miserable streak of piss.” She smiles to herself. She can tell that he wants to say something. But there’s no one to talk to. The TV is now on. Eric is upstairs. He is calmer now in his room, doing whatever. Maddie is not back yet.

Dominic continues to tidy up the ends of the vegetables.

<div class="sample-scene-break" aria-hidden="true">❖</div>

She had fallen for his look. His hair long over his eyes and short at the back. He looked like a Goth, lanky, sometimes a bit sheepish or separate. Definitely different. Maybe an Ian Curtis type, long and sad. Deeply sad. They’d met at a conference. She was in London for the day. He was working in the City and living in Tonbridge, a London suburb. Recently divorced. Somehow, that came out early in their conversation.

They had started talking over a shared hatred of server virtualisation. He’d got excited and somehow had started giving her his life story. He had no idea how that happened. It was like he could talk to her like any of his friends. The friends who met up every Tuesday night in the same pub. She understood him despite her relative youth. A gap which made him self-conscious, but an openness which made him not care about it. He talked.

“I’m good at finding patterns in things. What people do, what things happen in systems.”

Beth paused for a second. She looked up at him quizzically.

“You don’t talk much like a manager.”

Dominic clears his throat. He hadn’t expected to have to justify his thoughts. He wasn’t used to most people paying attention to them. Maybe this wasn’t the type of conversation that she was expecting to have.

“I don’t think I am a manager. At least not a very good one.” He laughed and then thought about it a little longer. “I’m too thin-skinned. I’m bad at lying to people. I wasn’t a very good techie either, but I was at least, erm, passionate. Dedicated, once.”

She nodded. She liked the use of the word ‘passionate’.

“And you think those are important traits in a boss?” She smiled at him encouragingly.

Picking his words carefully, he continued. “I think most managers have a plan, but it’s not always clearly communicated. Sometimes they are just good people and then it comes down to having to manage expectations against what their bosses want or the company wants. Even that often means having to lie to people. Or at least being cautious with the truth of a situation.”

They both let his words hang in the air for a few more moments.

“And the other types of manager?”

He looks a bit grimmer, a bit darker. “Those people, well you just hope not to meet them. But they seem to be everywhere.”

Beth looked at him again, nodded as if deciding. “OK, so what about the patterns things you said?”

This was more familiar territory to him.

“You need to be able to spot patterns and re-use code accordingly or modify your design in order to make it make sense. And humans make patterns out of everything. We use self-similarity to make our lives easier. We copy things. We re-use things. It makes explaining things easier. This abstraction is shared. It’s a shortcut.”

She nods, following along just about. She can tell he is more excited about this subject.

“But we can overuse this too. So, we could for example copy/paste code from one place to another to re-use it. And if we do that, then we have a support problem – we have to maintain multiple versions of the same code, possibly with the same bug replicated multiple times over our codebase.”

He is warming to his subject.

“Instead, we could use a library – a reusable component that we include with our software build – but that adds complexity to our configuration. So, which is correct? Honestly, there is no right answer, but whole consulting industries and experts seem to live on these types of ideas.”

He smiles, pleased with somehow being able to communicate something that he’d never truly put into words. Then he realises he’s been babbling and tries to make amends.

“Listen, I just read a book or two about this, I’m not usually this geeky about software process.”

They both laugh.

A week later, Dominic receives a message from her. Just a note to say that it was nice talking to him and did you see that domain-driven design meetup that had just started?

Dominic often thinks back to those days. He was just divorced, living in a flat in a town he didn’t pick or grow up in. Starting again in some ways, not learning from the mistakes of others. He was looking for something that didn’t seem to exist.

<div class="sample-scene-break" aria-hidden="true">❖</div>

It wasn’t ever going to be simple. She was in a spiral and somehow had held it together for that evening. Eric was only just one year old. Her mum and dad had him for the day. A young Maddie asleep in the spare room.

Beth came home late. The dark station, no one around, she took the short walk back to her parents’ place. Exhausted and with another day of work tomorrow. She fell into the sofa bed in the living room – made up for her with her favourite teddy on the pillow. Tomorrow, reality would bite. She would drop Maddie off at school and then Eric would go to the childminder and she would get back to her little flat on the other side of town. It had felt good to pretend that there was normality somewhere, this tall, stable, sensible man. Perhaps she would contact him again? London seemed a stretch, but perhaps they could work something out?

It hadn’t been long since Luke had left. There was no way they could’ve kept living on that boat. With a baby, it was hard work, and Luke had no plan to move on to land. He was too wedded to his life. Maddie loved it there, but it wasn’t working for them. Luke was getting cold feet about the whole arrangement. Acting strangely, staying out late, coming home, being weird. He wasn’t aggressive towards her or the kids ever, but he was distant. Unhelpful. Going nowhere.

Did she want to start something with someone else right now? And someone else who was also obviously a project? She closed her eyes and tried to remember Dominic’s face. A kind face. A gentle face. A sad face. There was a story there that she felt like she wanted to get to know.

<div class="sample-scene-break" aria-hidden="true">❖</div>

Dominic can hear Beth talking calmly to Eric. He quietly watches her talk to her son.

“If I give you this telephone back, please remember what we talked about yesterday? Online, you are still interacting with real people. So what do we do?”

Eric looks up at his mum.

“What do we do?” she prompts him.

“We treat people with respect.” He murmurs.

“Yep, that’s exactly right.”

Dominic watches this interaction and wonders why he can’t do this, why he can’t command respect from Eric. Or perhaps he can, or perhaps he tries too hard to be his friend.

Beth continues.

“So if I give you this telephone back. You promise to treat people with respect, right? Otherwise, you’ll get into trouble and not just with me and Dominic.”

Eric is still now. Not moving. Listening to his mother.

Beth notices this. She clicks the phone off and bends down further to his level. Bringing her head close to him.

“Listen, sweetheart. All I’m saying is that the phone gives you a choice. You need to make the right choices; otherwise, we must make those choices for you.”

Eric looks slightly confused and scared now. He nods. “OK, mum.”

<div class="sample-scene-break" aria-hidden="true">❖</div>

It’s early Saturday morning. Dominic is still in bed. Beth’s up and dressed and has been working on her hair and makeup for the last ten minutes. He’s trying not to be annoyed by the hour, the disturbed sleep and the noise of the hairdryer, but he’s failing. She clicks it off. Despite himself, he hears himself whine:

“So why do you have to go in today?”

She takes her time replying. She’s measured, in control:

“You know why. It’s the job. You know the job. These things don’t sleep, Dom.”

Beth shakes her head minutely. Gentle but instantly frustrated. Both of them are. Dominic colours a little against the white sheets. His face hardens. He mumbles: “It’s a choice, Beth.”

She waits a second before replying so as not to get angry. “Let’s not talk about this now, please.”

“And there’s this ridiculous conference thing.” He’s piling on.

“Dom. Not now.”

His face collapses a little. She stops and looks at him, all anger disappearing. She is in control again.

He breathes deeply and then continues: “You know what? I just…”

She walks over, sits on the bed, and places her hand on his.

“I know, love. I know. I’m sorry.”

She checks her phone. “Listen, I’ve got to go. We’ll talk later, right?”

They both close their eyes and he feels tears behind his eyelids on this early morning in the springtime. This early, dark morning in the springtime before the rain.
