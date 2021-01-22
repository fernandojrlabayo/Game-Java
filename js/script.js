/* global monogatari */

// Define the messages used in the game.
monogatari.action ('message').messages ({
	'Help': {
		title: 'Help',
		subtitle: 'Some useful Links',
		body: `
			<p><a href='https://developers.monogatari.io/documentation/'>Documentation</a> - Everything you need to know.</p>
			<p><a href='https://monogatari.io/demo/'>Demo</a> - A simple Demo.</p>
		`
	}
});

// Define the notifications used in the game
monogatari.action ('notification').notifications ({
	'Welcome': {
		title: 'Welcome',
		body: 'This is the Monogatari VN Engine',
		icon: ''
	}
});

// Define the Particles JS Configurations used in the game
monogatari.action ('particles').particles ({

});

// Define the canvas objects used in the game
monogatari.action ('canvas').objects ({

});

// Credits of the people involved in the creation of this awesome game
monogatari.configuration ('credits', {

});


// Define the images that will be available on your game's image gallery
monogatari.assets ('gallery', {

});

// Define the music used in the game.
monogatari.assets ('music', {

});

// Define the voice files used in the game.
monogatari.assets ('voices', {

});

// Define the sounds used in the game.
monogatari.assets ('sounds', {

});

// Define the videos used in the game.
monogatari.assets ('videos', {
});

// Define the images used in the game.
monogatari.assets ('images', {

});

// Define the backgrounds for each scene.
monogatari.assets ('scenes', {
	'house': 'oldhouse.jpg',
	'school': 'school.jpg',
	'beach': 'beach.jpg',
	'leaving': 'leaving.gif',
	'street': 'street.jpg',
	'reporter':'r-street.jpg'
});


// Define the Characters
monogatari.characters ({
	'sidekick': {
		name: 'Saitama',
		color: '#5bcaff',
		expressions:{
			normal:'saitama.png'
		},
		sprites:{
			normal:'saitama.png'
		}
	},
	'dad':{
		name: 'Father',
		color: '#1e88e5',
		expressions:{
			sad:'fathersad.png'
		},
		sprites:{
			sad:'fathersad.png'
		}
	},
	'mom':{
		name: 'Mother',
		color: '#d81b60',
		expressions:{
			sad:'m-sad.png'
		},
		sprites:{
			sad:'m-sad.png'
		}
	},
	'reporter':{
		name: 'XSe Reporter',
		color: '#ffeb3b',
		expressions:{
			normal:'r-solo.png'
		},
		sprites:{
			normal:'r-solo.png'
		}
	},
	'p':{
		name: '{{player.name}}',
		color: '#decaff',
		expressions:{
			sad:'p-sad.png',
			normal:'p-norm.png',
			happy:'p-hppy.png'
		},
		sprites:{
			sad:'p-sad.png',
			normal:'p-norm.png',
			happy:'p-hppy.png'
		}
	},
	's1':{
		name: 'Student 1',
		color: '#d81b60'
	},
	's2':{
		name: 'Student 2',
		color: '#1e88e5'
	}
});

monogatari.script ({
	// The game starts here.
	'Start': [
		{
			'Input': {
				'Text': 'What is your name?',
				'Validation': function (input) {
					return input.trim ().length > 0;
				},
				'Save': function (input) {
					this.storage ({
						player: {
							name: input
						}
					});
					return true;
				},
				'Revert': function () {
					this.storage ({
						player: {
							name: ''
						}
					});
				},
				'Warning': 'You must enter a name!'
			}
		},
		//'jump intro'
		//'jump houseScene'
		//'jump leavingScene'
		//'jump StudentScene'
		'jump houseScene2'
	],
	'intro':[
		//Introduction
		'show scene school with fadeIn',
		'Graduation ceremony has just ended',
		'Your friend Saitama saw you and walks toward your direction',
		'show character sidekick normal at center with fadeIn',
		'sidekick Yeah! Finally we have finished High School. {{player.name}} are you excited to go to College?',
		{'Choice': {
			'Yes': {
				'Text': 'Yes',
				'Do': 'jump sidekickSceneYes'
			},
			'No': {
				'Text': 'No',
				'Do':'jump sidekickSceneNo'
			}
		}}
	],
	'sidekickSceneYes': [
		'show character sidekick normal at center with fadeIn',
		'sidekick Nice, hopefully we can enroll in the same University. Let us go home now.',
		'hide character sidekick with fadeOut',
		'show character p normal at center with fadeIn',
		'p:normal Yes I am excited to see my parents',
		'jump houseScene'
	],
	'sidekickSceneNo': [
		'show character sidekick normal at center with fadeIn',
		'sidekick What? Hope you reconsider your decision. College is very important so that we will prepared for jobs in the future. Let us go home now.',
		'hide character sidekick with fadeOut',
		'show character p normal at center with fadeIn',
		'p Yes I am excited to see my parents',
		'jump houseScene'
	],
	'houseScene':[
		//House Scene
		'show scene house with fadeIn',
		'You went home, kissed your parents and noticed that they are sad.',
		'show character p normal at center with fadeIn',
		'p:normal Why are you sad?',
		'hide character p with fadeOut',
		'show character dad sad at center with fadeIn',
		'dad Hi {{player.name}}, We have something to tell you!',
		'hide character dad with fadeOut',
		'show character p normal at center with fadeIn',
		'p What is it dad?',
		'hide character p with fadeOut',
		'show character dad sad at center with fadeIn',
		'dad Honey, Can you tell it to {{player.name}}?',
		'hide character dad with fadeOut',
		'show character mom sad at center with fadeIn',
		'mom {{player.name}} we cannot afford to send you to college.',
		'hide character mom with fadeOut',
		'show character p normal at center with fadeIn',
		'p What? I cannot believed it!',
		'hide character p with fadeOut',
		'show character mom sad at center with fadeIn',
		'mom Wait {{player.name}}! Where are you going?',
		'hide character mom with fadeOut',
		'jump leavingScene'
	],
	'leavingScene':[
		'show scene leaving with fadeIn',
		'{{player.name}} left the house disappointed and go to the beach.',
		'jump streetScene'
	],
	'streetScene':[
		'show scene street with fadeIn',
		'While walking down the street you heard a news.',
		'jump reporterScene'
	],
	'reporterScene':[
		//reporter scene
		'show scene reporter with fadeIn',
		'reporter:normal Good Morning! This is XSe news channel 69. According to the 2020 survey the most trending job that pays more than 100,000 a month are jobs in Information Technology most notably the java developers.',
		'p Saitama I hear a news about a job that pays a lot of money!',
		'sidekick Really? What is it?',
		'p Java Developer!',
		'sidekick Java? You mean Java the Caveman? Sounds stupid to me.',
		'p No! I am not talking about the cartoon. Why am I talking with a noob? You will never understand it hahaha.',
		'sidekick Really? Can you explain it to me?',
		'p Um um I do not understand it also.',
		'sidekick Haha we are both noobs here',
		'p Okay okay I will get more details about it',
		'sidekick Good see you later noob hahahaha',
		'jump StudentScene'
	],
	'StudentScene':[
		//Student Scene
		's1 I am excited to attend Ulaps University entrance exam! I am very confident that I will pass it',
		's2 Same,I also here that they are training java developers and hiring them. Thanks to my parents I have good internet connection to study and review Java.',
		's1 Come on let us play fortnite at your house today.',
		's2 Sure let us play until midnight!',
		{'Choice': {
			'Dialog': 'Ask them about Ulaps University and Java?',
			'Yes': {
				'Text': 'Yes',
				'Do': 'jump StudentSceneYes'				
			},
			'No':{
				'Text': 'No',
				'Do': 'jump pamphletScene'
			}
		}}
	],
	'StudentSceneYes': [
		'p Um hello? I heard that you are talking about Ulaps University what is it about?',
		's1 Who are you? I do not talk to strangers',
		's2 Hey dude do not be rude to the poor and less educated hahaha',
		's2 By the way, we are preparing for the entrance exam for a German University',
		's1 It is called Ulaps University, Here take this pamphlet if you are interested.',
		's1 They will offer scholarship for people who will get a perfect score in the exam',
		's2 I doubt that you could make it but try it you might get a miracle hahaha',
		'jump houseScene2'
	],
	'pamphletScene': [
		'p Ow they dropped a pamphlet, I will take it.',
		'{{player.name}} went to Saitama',
		'p hey I found a pamphlet about Ulaps University!',
		'sidekick Okay let me see!',
		'Saitama checks the pamphlet',
		'sidekick Okay, they are offering Java Lessons',
		'sidekick So you can now create Java the caveman if you went to this school right?',
		'p Yes! Wait no, not Java the caveman!',
		'sidekick Hahahaha Just kidding I will also go maybe they can also teach how to make a snake like python',
		'jump houseScene2'
	],
	'houseScene2':[
		'Monday morning at your house',
		'You just woke up and quickly take a bath and get some clothes to go outside',
		'p Alright I will go to Ulaps University today and inquire',
		'mom Good Morning {{player.name}}! Where are you going?',
		'p I will go to Ulaps University to inquire.',
		'mom But we do not have the money to support you',
		'p It is okay mom they are offering a scholarship to the examinee who will get a perfect score',
		'mom Wow! That is good but can you make it?',
		'p I will try it mom!',
		'mom Okay, Goodluck {{player.name}}',
		'jump ulapsScene'
	],
	'ulapsScene':[
		
	]
});