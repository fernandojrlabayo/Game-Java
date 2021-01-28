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
	},
	'question2':{
		title: 'Please Complete the code to print Hello World',
		body: `
			<p>class Main {</p>
			<p>&nbsp public static void main(String[]args){</p>
			<p>&nbsp }</p>
			<p>}</p>
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
	'reporter':'r-street.jpg',
	's-home':'s-home.jpg',
	'sidekickhouse':'sidekickhouse.jpg',
	'university':'university.jpeg'
});


// Define the Characters
monogatari.characters ({
	'sidekick': {
		name: 'Joe',
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
			sad:'m-sad.png',
			normal:'m.png'
		},
		sprites:{
			sad:'m-sad.png',
			normal:'m.png'
		}
	},
	'fathermother':{
		name: 'Father & Mother',
		color: '#428CEB',
		sprites: {
			sad: 'f-m.png'
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
		color: '#d81b60',
		expressions:{
			normal:'s1.png',
			duo:'s1-2.png'
		},
		sprites:{
			normal:'s1.png',
			duo:'s1-2.png'
		}
	},
	's2':{
		name: 'Student 2',
		color: '#1e88e5',
		expressions:{
			normal:'s2.png',
		},
		sprites:{
			normal:'s2.png'
		}
	},
	'nanderf':{
		name:'Mr. Nanderf',
		color:'#1e88e5'
	
	},
});

monogatari.script ({
	// The game starts here.
	'Start': [
			'show scene school with fadeIn',
		{
			'Input': {
				'Class': 'myInput someClass otherClass',
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
		//'jump houseScene2'
		//'jump StudentSceneYes'
		//'jump houseScene2'
		'jump houseScene3'
	],
	'intro':[
		//Introduction
		'show message Help',
		'Our main character is an average student, did not even received an award since birth',
		'{{player.name}}\'s Father is a fisherman and {{player.name}}\'s mother is a fish market vendor at the small town of Ternate Batangas',
		'And now finally after uncounted cutting classes, uncaught cheating during exams, and couple of school\'s violation,{{player.name}}\'s graduation has come',
		'show scene school with fadeIn',
		'Graduation ceremony has just ended',
		'After the graduation ceremony...',
		'jump sidekickIntro'
	],
	'sidekickIntro':[
		'show character sidekick normal at center with fadeIn',
		'sidekick:normal Yeah! Finally we have finished High School. {{player.name}} are you excited to go to College?',
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
		'sidekick:normal Nice, hopefully we can enroll in the same University. Let us go home now.',
		'hide character sidekick with fadeOut',
		'show character p normal at center with fadeIn',
		'p:normal Yes I am excited to see my parents',
		'jump houseScene'
	],
	'sidekickSceneNo': [
		'show character sidekick normal at center with fadeIn',
		'sidekick What? Hope you reconsider your decision. College is very important so that we will prepared for jobs in the future.',
		'hide character sidekick with fadeOut',
		'jump sidekickIntro'
	],
	'houseScene':[
		//House Scene
		'show scene house with fadeIn',
		'When {{player.name}} arived home, {{player.name}} noticed that they are sad.',
		'p:normal Why are you sad?',
		'show character dad sad normal at center with fadeIn',
		'dad:sad Hi {{player.name}}, We have something to tell you!',
		'p:normal What is it dad?',
		'dad:sad Honey, Can you tell it to {{player.name}}?',
		'show character mom sad at right with fadeIn',
		'mom:sad {{player.name}} we cannot afford to send you to college.',
		'p:normal What? I cannot believed it!',
		'show character fathermother sad at center with fadeIn',
		'mom:sad Wait {{player.name}}! Where are you going?',
		'jump leavingScene'
	],
	'leavingScene':[
		'show scene leaving with fadeIn',
		'{{player.name}} left the house disappointed and go to the town.',
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
		'p:normal Wow that is interesting I should tell it to Joe',
		'jump sidekickHouseScene'
	],
	'sidekickHouseScene':[
		'show scene sidekickhouse with fadeIn',
		'show character p normal at right with fadeIn',
		'p:normal Joe I hear a news about a job that pays a lot of money!',
		'show character sidekick normal at center with fadeIn',
		'sidekick:normal Really? What is it?',
		'p:normal Java Developer!',
		'sidekick:normal Java? You mean Java the Caveman? Sounds stupid to me.',
		'p:normal No! I am not talking about the cartoon. Why am I talking with a noob? You will never understand it hahaha.',
		'sidekick:normal Really? Can you explain it to me?',
		'p:normal Um um I do not understand it also.',
		'sidekick:normal Haha we are both noobs here',
		'p:normal Okay okay I will get more details about it',
		'sidekick:normal Good see you later noob hahahaha',
		'jump StudentScene'
	],
	'StudentScene':[
		//Student Scene
		'show scene s-home with fadeIn',
		'show character s1 normal at center with fadeIn',
		's1:normal I am excited to attend Ulaps University entrance exam! I am very confident that I will pass it',
		'show character s2 normal at right with fadeIn',
		's2:normal Same,I also here that they are training java developers and hiring them. Thanks to my parents I have good internet connection to study and review Java.',
		's1:normal Come on let us play fortnite at your house today.',
		's2:normal Sure let us play until midnight!',
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
		'show scene s-home with fadeIn',
		'show character s1 duo at center with fadeIn',
		'You slowly walk towards the 2 students',
		'p:normal Um hello? I heard that you are talking about Ulaps University what is it about?',
		's1:normal Who are you? I do not talk to strangers',
		's2:normal Hey dude do not be rude to the poor and less educated hahaha',
		's2:normal By the way, we are preparing for the entrance exam for a German University',
		's1:normal It is called Ulaps University, Here take this pamphlet if you are interested.',
		's1:normal They will offer scholarship for people who will get a perfect score in the exam',
		's2:normal I doubt that you could make it but try it, you might get a miracle hahaha',
		'jump houseScene2'
	],
	'pamphletScene': [
		'show scene s-home with fadeIn',
		'p:normal Ow they dropped a pamphlet, I will take it.',
		'{{player.name}} went to Joe',
		'jump sidekickHouseScene2'
	],
	'sidekickHouseScene2':[
		'show scene sidekickhouse with fadeIn',
		'show character p normal at center with fadeIn',
		'p:normal Hey I found a pamphlet about Ulaps University!',
		'show character sidekick normal at right with fadeIn',
		'sidekick:normal Okay let me see!',
		'Joe checks the pamphlet',
		'sidekick:normal Okay, they are offering Java Lessons',
		'sidekick:normal So you can now create Java the caveman if you went to this school right?',
		'p:normal Yes! Wait no, not Java the caveman!',
		'sidekick:normal Hahahaha Just kidding I will also go maybe they can also teach how to make a snake like python',
		'jump houseScene2'
	],
	'houseScene2':[
		'show scene house with fadeIn',
		'Monday morning at {{player.name}}\'s house...',
		'{{player.name}} just woke up and quickly take a bath and get some clothes to go outside',
		'show character p normal with fadeIn',
		'p:normal Alright I will go to Ulaps University today and inquire',
		'hide character p with fadeOut',
		'show character mom normal with fadeIn',
		'mom:normal Good Morning {{player.name}}! Where are you going?',
		'hide character mom with fadeOut',
		'show character p normal with fadeIn',
		'p:normal I will go to Ulaps University to inquire.',
		'hide character p with fadeOut',
		'show character mom normal with fadeIn',
		'mom:normal But we do not have the money to support you',
		'hide character mom with fadeOut',
		'show character p normal with fadeIn',
		'p:normal It is okay mom they are offering a scholarship to the examinee who will get a perfect score',
		'hide character p wuth fadeOut',
		'show character mom normal with fadeIn',
		'mom:normal Wow! That is good but can you make it?',
		'hide character mom with fadeOut',
		'show character p normal with fadeOut',
		'p:normal I will try it mom!',
		'hide character p with fadeOut',
		'show character p normal with fadeIn',
		'mom:normal Okay, Goodluck {{player.name}}',
		'hide character p with fadeOut',
		'jump ulapsScene'
	],
	'ulapsScene':[
		'show scene university with fadeIn',
		'At Ulaps University, while looking for Joe...',
		'nanderf Hello everyone! Welcome to Ulaps University! Please come here to get the reviewer for the entrance exam.',
		'show character p normal with fadeIn',
		'p:normal Hey! What is your name sir?',
		'hide character p normal with fadeOut',
		//need to show character of nanderf
		'nanderf I am Mr Nanderf, I will be the one facilitating your upcoming Entrance exam',
		'nanderf Today, I will give you the reviewer, here take it. Good luck!',
		// need to hide character of nanderf
		'show character p normal with fadeIn',
		'p:normal Thank you Sir! See you. I will do my best for this. Hehe',
		'jump houseScene3'
		
		
	],
	'houseScene3':[
		'show scene house with fadeIn',
		'show character p normal with fadeIn',
		'p:normal Alright I will start learning Java, Finally I will start realizing my dreams',
		//game interface background needed
		'jump Question2'
	],
	'Question2':[
		'show message question2',
		{'Choice': {
			'Yes': {
				'Text': 'System.out.print(Hello World);',
				'Do': 'jump sidekickSceneYes'
			},
			'No': {
				'Text': 'System.out.println(Hello World);',
				'Do':'jump sidekickSceneNo'
			}
		}}
		
	]
});