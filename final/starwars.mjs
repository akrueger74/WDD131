const starwars = [
	{
		planet: 'Hoth',
		region: 'Outer Rim',
        politics: 'Rebel Alliance',
		description: " Hoth is a remote, icy planet in the Star Wars universe, best known as the location of the Rebel Alliance's Echo Base in The Empire Strikes Back. It's covered in snow and ice, with harsh blizzards and freezing temperatures. The planet is home to dangerous native creatures like the Wampa and Tauntauns, which the Rebels use for transportation. Despite its inhospitable environment, Hoth provided the Rebels with temporary shelter from the Empire—until they were discovered and forced to flee.",
		image: '../Hoth.jpeg',
		species: [
			'Tauntauns',
			'Wampas',
		],
		xPercent: 11.7,
		yPercent: 54,
		radiusPercent: 3
	},
	{
		planet: 'Polis Massa',
		region: 'Outer Rim',
        politics: 'neutral',
		description:
			'Polis Massa is an asteroid colony located in the Outer Rim of the Star Wars galaxy. Originally the homeworld of the now-extinct Eellayin species, the planet itself was shattered by a mysterious cataclysm, leaving behind only asteroids. One of these asteroids became the site of a medical and archaeological outpost operated by the Polis Massans, a silent, gray-skinned species known for their calm demeanor and expertise in medicine and cloning.',
		image: '../polismassa.jpeg',
		species: [
			'Kallaidahin',
            'Eellayin (extinct)'
		],
		xPercent: 17.7,
		yPercent: 69,
		radiusPercent: 3
	},
	{
		planet: 'Utapau',
		region: 'Outer Rim',
        politics: 'neutral, later forced into the Separatist Confederacy',
		description:
			'Utapau is a sinkhole-covered planet in the Star Wars universe, located in the Outer Rim. Its surface is dry and rocky, but its major cities are built deep inside massive sinkholes to protect against the planet’s harsh winds. The native species include the peaceful Utai, who work as laborers, and the taller, more refined Pau’ans, who serve as administrators and leaders.nd delicious oven roasted potatoes that go great with almost anything.',
		image: '../utapau.jpeg',
		species: [
			'Utai',
			"Pau'ans",
			'Amanins',
			'Ginnthos',
			'Veractyls',
			'Dactillions'
		],
		xPercent: 34,
		yPercent: 80,
		radiusPercent: 3
	},
	{
		planet: 'Endor',
		region: 'Outer Rim',
        politics: 'Galactic Empire',
		description:
			"Endor, often called the Forest Moon of Endor, is a lush, forest-covered moon orbiting the gas giant of the same name. It's famous for its towering trees, dense woodlands, and peaceful natural environment. Endor is home to several native species, most notably the Ewoks—small, furry, and resourceful creatures who live in treetop villages and play a major role in the Rebel victory in Return of the Jedi.",
		image: '../endor.jpeg',
		species: [
			'Ewoks',
			'Duloks',
			'Yuzzons',
			'Gorax',
			'Wistie',
			'Teeks',
			'Grass Trekkers',
			'Dandelion Warriors',
			'Antary',
            'Arachne',
            'Blowfish',
            'Endor blue butterfly',
            'Finned blaggart',
            'Horse',
            'Barber Bird',
            'Bark lizzard',
            'Bark mite',
            'Bearded jax',
            'Bee',
            'Condor dragon',
            'Dawndaddy',
            'Devil beast',
            'Devil serpent'
		],
		xPercent: 36,
		yPercent: 23,
		radiusPercent: 3
	},
	{
		planet: 'Mustafar',
		region: 'Outer Rim',
        politics: 'Separatist Confederacy',
		description:
			'Mustafar is a volcanic planet in the Outer Rim, known for its fiery landscape, rivers of lava, and constant geological instability. Despite its harsh and deadly environment, it holds significant importance in the Star Wars saga. Mustafar is the site of the fateful duel between Anakin Skywalker and Obi-Wan Kenobi in Revenge of the Sith, where Anakin is severely injured and ultimately transformed into Darth Vader. The planet later becomes home to Vader’s dark fortress. With its dramatic scenery and symbolic ties to destruction and rebirth, Mustafar represents a turning point in the rise of the Empire and the fall of the Jedi.',
		image: '../mustafar.jpeg',
		species: [
			'Mustafarians',
			'Blistmonk',
			'Kubaza beetle',
			'Lava flea',
			'Fire rat',
			'Lizard-crow',
			'Tanray',
			'Spark-roach',
			'Xandank',
			'Krishel',
			'Sher Kar',
			'Roggwart',
            'Tulrus',
            'Lava nymph',
            'Jundak',
            'Darkghast',
            'Alazmec',
            'Irontree',
            'Blistmok',
		],
		xPercent: 38,
		yPercent: 60, 
		radiusPercent: 3
	},
	{
		planet: 'Tatooine',
		region: 'Outer Rim',
        politics: 'neutral',
		description: 'Tatooine is a hot, arid desert planet located in the Outer Rim of the Star Wars galaxy. Known for its twin suns and vast, sandy landscapes, it is a harsh and unforgiving world inhabited by a mix of settlers, smugglers, and native species like the nomadic Tusken Raiders and the scavenging Jawas. Despite its remote location and rough conditions, Tatooine plays a crucial role in galactic history as the homeworld of both Anakin and Luke Skywalker. Its settlements, such as Mos Eisley and Mos Espa, are hubs of shady dealings, podracing, and encounters with iconic characters, making Tatooine one of the most well-known planets in the Star Wars saga.',
		image: '../tatooine.png',
		species: [
			'Human',
			'Hutts',
			'Jawas',
			'Tusken Raiders',
			'Banthas',
			'Dewbacks',
			'Tatooine Howlers',
			'Eeopies',
			'Kryat dragons',
			'Rontos',
            'Scurriers',
            'Womp rats',
            'Wraids',
            'Worrts',
            'Galoomps',
            'Anooba',
            'Jakrab',
            'Profoggs',
            'Sarlacc (not native)',
            'Urusai',
            'Woodoo',
            'Sketto',
            'Gorg',
            'Rancor (not native)'
		],
		xPercent: 91.5,
		yPercent: 76,
		radiusPercent: 3
	},
	{
		planet: 'Felucia',
		region: 'Outer Rim',
		politics: "neutral",
		description:
			"Felucia is a vibrant and exotic jungle planet located in the Outer Rim, known for its dense, alien flora and luminous fungi that dominate the landscape. Its surface is teeming with gigantic plants, strange wildlife, and rich biodiversity, making it both beautiful and dangerous. Felucia is home to native species like the Felucians, a tribal people attuned to nature and the Force. The planet saw heavy conflict during the Clone Wars, including the death of Jedi Master Aayla Secura during Order 66. With its surreal, almost dreamlike environment, Felucia stands out as one of the most visually striking worlds in the Star Wars universe.",
		image: '../Felucia.jpg',
		species: [
			'Felucians',
			'Acklay',
			'Gossam',
			'Human',
			'Ithorian',
			'Rancor. Jungle Rancor',
			'Sarlacc',
			'Tee-muss',
			'Twi-leks',
		],
		xPercent: 90.7,
		yPercent: 60,
		radiusPercent: 3
	},
	{
		planet: 'Yavin 4',
		region: 'Outer Rim',
		politics: 'Galactic Empire, New Republic',
		description:
			"Yavin 4 is a lush, jungle-covered moon orbiting the gas giant Yavin, best known as the location of the Rebel Alliance’s hidden base in A New Hope. Covered in thick forests and ancient, mysterious stone temples built by the long-lost Massassi civilization, the moon has a rich and mystical history. It served as the launch point for the Rebels' successful assault on the first Death Star, marking one of the most pivotal moments in the Galactic Civil War. Yavin 4’s natural beauty and ancient ruins give it a sense of mystery and timelessness, making it a symbol of hope and resistance in the Star Wars galaxy.",
		image: '../yavin.jpg',
		species: [
			'Human',
			'Duros',
			'Massassi (extinct)',
			'Angler',
			'Armored eel',
			'Leviathan grub',
			'Lizard crab',
			'Piranha beetle',
			'Runyip',
			'Stintaril',
			'Whisper bird',
            'Woolamander'
		],
		xPercent: 83.7,
		yPercent: 29,
		radiusPercent: 3
	},
	{
		planet: 'Kashyyyk',
		region: 'Mid Rim',
		politics: 'Galactic Empire, New Republic, Galactic Republic',
		description:
			"Kashyyyk is a lush, forested planet known as the homeworld of the Wookiees, including the legendary Chewbacca. Towering wroshyr trees dominate its landscape, with entire cities built high among their branches to avoid the dangerous wildlife on the forest floor. Located in the Mid Rim, Kashyyyk is rich in natural beauty but also in conflict, having been invaded and occupied multiple times, including during the Clone Wars and by the Empire. The Wookiees are known for their strength, loyalty, and deep connection to their environment, making Kashyyyk a symbol of resilience and natural harmony in the Star Wars galaxy.",
		image: './kashyyyk.png',
		species: [
			'Wookies',
			'Wyyyschokk',
			'Blastail',
			'Night-crawler',
			'Flame beetle',
			'Uwari beetle',
			'Katarn',
			'Shyyyo bird',
			'Sathog',
			'Slyyyg',
			'Gorryl slug',
            'Mylaya'
		],
		xPercent: 80.5,
		yPercent: 43,
		radiusPercent: 3
	},
	{
		planet: 'Mygeeto',
		region: 'Outer Rim',
		politics: 'Separatist Alliance',
		description:
			"Mygeeto is a cold, war-torn planet located in the Outer Rim, known for its icy climate, towering crystalline structures, and urbanized battle-scarred landscapes. Once a wealthy banking world controlled by the InterGalactic Banking Clan, Mygeeto became a major battleground during the Clone Wars. Its glittering cities and bridges span vast frozen valleys, creating a visually striking yet harsh environment. Jedi Master Ki-Adi-Mundi led Republic forces there before being killed during Order 66. Despite its beauty, Mygeeto is a symbol of destruction and political corruption, reflecting the darker side of galactic conflict.",
		image: '../mygeeto.jpg',
		species: [
			'Lurman (Mygeetans)',
			'Muuns (Legends)',
		],
		xPercent: 65.5,
		yPercent: 24,
		radiusPercent: 3
	},
	{
		planet: 'Naboo',
		region: 'Mid Rim',
		politics: 'Galactic Republic',
		description:
			"Naboo is a picturesque and culturally rich planet located in the Mid Rim, known for its rolling green plains, shimmering lakes, and elegant classical architecture. It is inhabited by two primary species: the human Naboo, who live in sophisticated surface cities like Theed, and the amphibious Gungans, who dwell in underwater cities such as Otoh Gunga. Naboo is famous for its peaceful society, artistic heritage, and strong connection to nature. It plays a central role in galactic events as the homeworld of Padmé Amidala and Emperor Palpatine, and is the setting for key moments in The Phantom Menace, including the Battle of Naboo. Its beauty and political importance make it one of the most iconic planets in the Star Wars galaxy.",
		image: '../naboo.jpeg',
		species: [
			'Humans',
			'Gungans',
            'Kaadu',
            'Falumpaset',
            'Fambaa',
            'Shaak',
            'Opee Sea Killer',
            'Sando Aqua Monster',
            'Bursas'
		],
		xPercent: 64.5,
		yPercent: 62.5,
		radiusPercent: 3
	},
	{
		planet: 'Coruscant',
		region: 'Core Worlds',
		politics: 'Galactice Republic',
		description:
			"Coruscant is a vast, ecumenopolis planet at the heart of the Star Wars galaxy, entirely covered by a sprawling cityscape. As the political and cultural center of the galaxy, it houses the Galactic Senate, the Jedi Temple, and various government institutions, making it a hub of power and influence. The planet's surface is completely urbanized, with towering skyscrapers and layers of infrastructure stretching for miles. Coruscant is home to a diverse population, ranging from politicians and diplomats to criminals and street dwellers. It serves as the capital of the Galactic Republic and, later, the Galactic Empire. Its iconic, bustling cityscapes and political significance make Coruscant a symbol of both the galaxy's grandeur and its inherent corruption.",
		image: '../coruscant.jpg',
		species: [
			'Humans',
			'Taung',
            'Zhell',
            'almost every humanoid',
		],
		xPercent: 51.3,
		yPercent: 31,
		radiusPercent: 3
	}

]

export default starwars