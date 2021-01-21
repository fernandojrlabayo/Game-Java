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
	'house': 'house.jpeg',
	'school': 'school.jpg',
	'beach': 'beach.jpg',
});


// Define the Characters
monogatari.characters ({
	'yui': {
		name: 'Yui',
		color: '#5bcaff'
	},
	'dad':{
		name: 'Father',
		color: '#1e88e5'
	},
	'mom':{
		name: 'Mother',
		color: '#d81b60'
	},
	'reporter':{
		name: 'XSe Reporter',
		color: '#ffeb3b'
	},
	'player':{
		name: '{{player.name}}',
		color: '#decaff'
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
		'show scene school with fadeIn',
		'yui Yehey! Finally we have finished High School. Are you excited to go to College?',
		{'Choice': {
			'Yes': {
				'Text': 'Yes',
				'Do': 'yui Nice'
			},
			'No': {
				'Text': 'No',
				'Do':'yui No'
			}
		}},
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
		'show scene beach with fadeIn',
		'While standing in front of the store beside the beach...',
		'reporter According to the 2020 survey the most trending job that pays more than 100,000 a month are...',
		'reporter jobs in Information Technology most notably the java developers.'
	]
});