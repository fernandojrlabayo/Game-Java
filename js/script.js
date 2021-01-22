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
		//Show sad expression for dad
		'dad Hi {{player.name}}, We have something to tell you!',
		'player What is it dad?',
		//Show expression looking at mom
		'dad Honey, Can you tell it to {{player.name}}?',
		//Show sad expression for mom
		'mom {{player.name}} we cannot afford to send you to college.',
		//Show Expression sad
		'{{player.name}} left the house disappointed and go to the beach.',
		'show character mom sad at right with fadeIn',
		'mom:sad Wait {{player.name}}! Where are you going?',
		'hide character mom with fadeOut',
		'jump beachScene'
	],
	'beachScene':[
		//Beach scene
		'show scene beach with fadeIn',
		'While standing in front of the store beside the beach...',
		'reporter According to the 2020 survey the most trending job that pays more than 100,000 a month are...',
		'reporter jobs in Information Technology most notably the java developers.'
	]
});