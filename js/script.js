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
});


// Define the Characters
monogatari.characters ({
	'sidekick': {
		name: 'Saitama',
		color: '#5bcaff'
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
			sad:'mothersad.png'
		}
	},
	'reporter':{
		name: 'XSe Reporter',
		color: '#ffeb3b'
	},
	'p':{
		name: '{{player.name}}',
		color: '#decaff',
		expressions:{
			sad:'p-sad.png',
			normal:'normal.png'
		},
		sprites:{
			sad:'p-sad.png'
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
		'jump intro'
	],
	'intro':[
		//Introduction
		'show scene school with fadeIn',
		'Graduation ceremony has just ended',
		'Your friend Saitama saw you and walks toward your direction',
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
		'sidekick Nice, hopefully we can enroll in the same University. Let us go home now.',
		'p Yes I am excited to see my parents',
		'jump houseScene'
	],
	'sidekickSceneNo': [
		'sidekick What? Hope you reconsider your decision. College is very important so that we will prepared for jobs in the future. Let us go home now.',
		'p Yes I am excited to see my parents',
		'jump houseScene'
	],
	'houseScene':[
		//House Scene
		'show scene house with fadeIn',
		'You went home, kissed your parents and noticed that they are sad.',
		'p Why are you sad?',
		'show character dad sad at center with fadeIn',
		'dad:sad Hi {{player.name}}, We have something to tell you!',
		'hide character dad with fadeOut',
		'p What is it dad?',
		'show character dad sad at center with fadeIn',
		'dad:sad Honey, Can you tell it to {{player.name}}?',
		'hide character dad with fadeOut',
		'show character mom sad at right with fadeIn',
		'mom:sad {{player.name}} we cannot afford to send you to college.',
		'hide character mom with fadeOut',
		'{{player.name}} left the house disappointed and go to the beach.',
		'show character mom sad at right with fadeIn',
		'mom:sad Wait {{player.name}}! Where are you going?',
		'hide character mom with fadeOut',
		'jump beachScene'
	],
	'beachScene':[
		//Beach scene
		'show scene beach with fadeIn',
		'While standing in front of the store beside the sea shore',
		'reporter Good Morning! This is XSe news channel 69. According to the 2020 survey the most trending job that pays more than 100,000 a month are jobs in Information Technology most notably the java developers.',
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
		's2 I doubt that you could make it but try it you might get a miracle hahaha'
	],
	'pamphletScene': [
		'p Ow they dropped a pamphlet, I will take it.'
	]
});