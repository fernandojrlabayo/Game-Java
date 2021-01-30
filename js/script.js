/* global monogatari */

// Define the messages used in the game.
monogatari.action ('message').messages ({
	'JavaGameIntro': {
		title: 'Welcome to our Version of Java Gamification',
		body: `
			We hope you would enjoy playing at the same time learning inside this game. Good luck and enjoy coding!
		`
	},
	
	'YourfirsJavaProgram': {
		title: 'Your first Java Program',
		body: `
			<p>Lest's start creating a simple program that prints "Hello World" to the screen.</p>

			<p>class Myclass{</p>
				<span> public static void main (String []args) { </span>
				<span> system.out.println("Hello World);</span>
				<p> }</p>
			<span>}</span>
		
		
		`
	},
	
	'JavaIntro':{
		title:'Java',
		subtitle:'Java is a high level, modern programming language designed in the early 1990s by Sun Microsystems, and currently owned by Oracle.',
		body:`
			Java is <b>Platform Independent</b>, which means that you only need to write the program once to be able to run it on different platforms.
		 	Java is <b>portable,robust,</b> and <b>dynamic,</b> with the ability to fit the needs of virtually any typesof application.
			`
	},
	'testing':{
		title:'Test your codes Here',
		body:`<iframe height="400px" width="100%" src="https://repl.it/@jaytinosa/test?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>`
	},
	'FirstJavaProgram':{
		title:'First Java Program',
		subtitle:'Let us start by creating a simple program that prints "Hello World" to the screen',
		body:`<iframe height="400px" width="100%" src="https://repl.it/@jaytinosa/test?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>`
	},
	'FirstJavaProgram1':{
		title:'Hello World!',
		body:`
		In Java, every line of code that can actually run needs to be inside a <b>class</b><br>
		In our example, we named the class <b>MyClass</b>. You will learn more about classes in the upcoming modules.<br>
		In Java, each  application has an entry point, which is a <u>method</u> called <b>main</b><br>
		Along with main, the keywords <b>public</b> and <b>static</b> will also be explained later.
		`
	},
	'Q1':{
		body:`Which method is the starting point for all java programs?`
	},
	'MainMethod':{
		title:'The main Method',
		subtitle:'To run our program, the main method must be identical to this signature:',
		body:`
			public static void main(String[]args)<br>
			public - anyone can access it.<br>
			static - method can be run without creating an instance of the class containing the main method<br>
			void - method does not return any value<br>
			main - the name of the method
		`
	},
	'Q2':{
		body:`Declare a method called hello()`
	},
	'println':{
		title:'System.out.println()',
		subtitle:'Next is the body of the main method, enclosed in curly braces:',
		body:`
			{<br>
			System.out.println();<br>
			}<br>
			println - prints a line of text to the screen.
			The System class and its out stream are used to access println
		`
	},


	'Q3':{
		body:`Which method prints text in a Java program?`
	},
	'Semicolons':{
		title:'Semicolons in Java',
		subtitle:'You can pass a different text as the parameters to the println method to print it.',
		body:`
			In Java, each code statementmust end with a semicolon.
		`
	},
	'Q4':{
		body:`
			What is missing in this line of code?<br>
			class Apples{<br>
				public static void main(String[]args){<br>
					System.out.println("Hello World!")<br>
				}<br>
			}
		`
	},
	'Variable': {
		title: 'Variables',
		subtitle: '<b>Variables</b> store data for processing. A variable is given a name (or <b>identifier</b>), such as area, age, height, and the like. The name uniquely identifies each variable, assigning a value to the variable retrieving the value stored.',
		body: `
		'Variables have <b>types</b>. Some examples:<br>-<mark>int</mark>: for integers (whole numbers) such as 123 and -456<br>- <b>double</b> : for floating-point or real numbers with optional decimal points and fractional parts in fixed or scientific notations, such as 3.1416, -55.66.<br>-<mark>String</mark>: for text such as "Hello" or "Good Morning". Text strings are enclosed within double quotes.<br><br>You can declare a variable of a type and assign it a value.<br><b>Example</b>:<br><br><mark>String</mark> <b>name</b> = <mark>"David"</mark>;<br> This creates a variable called <b>name</b> of type String, and assigns it the value "David".'
		`
	},
	'VariableQ': {	
		body: `
		<p>Which variable type would you use for a city name?<p>
		`
	},
	'Variables2': {
		title: 'Examples of variable declarations:',
		body: `
			class MyClass {<br> public static void main (String[] args){<br>String name = "David";<br>int age = 42;<br>double score = 15.9;<br>char group = 'Z';<br>}<br>}`
	},
	'Variables2Q':{
		title:'What is missing?',
		body:`
			class Apples{
				public static void main(String[]args){<br>
					String name = "John";<br>
					age=24;<br>
					double height = 189.87;<br>
				}<br>
			}
		`
	},
	'userInput': {
		title: 'While Java provides many different methods for getting use input, the <b>Scanner</b> object is the most common, and perharps the easiest to implement. Import the <b>Scanner</b> class to us the <b>Scanner</b> object, as seen here:',
		body: `<mark>import java.util.<b>Scanner</b>;
		<p>In order to use the <b>Scanner</b> class, create an <u>instance</u> of the class by using the following syntax:</p>
		<b>Scanner</b> myVar = new <b>Scanner</b>(System.in);
		<p>You can now read in different kinds of input data that the user enters.<br>Here are some methods that are available through the Scanner class:<br>Read a byte - nextByte()<br>Read a short - nextShort()<br>Read an <u>int</u> - nextInt()<br>Read a long - nextLong()<br>Read a <u>float</u> - nextFloat()<br>Read a double - nextDouble()<br>Read a <u>boolean</u> - nextBoolean()<br>Read a complete line - nextLine()<br>Read a word - next()
		<br>
		<p><b>Example of a program used to get user input:</b><br>import java.util.Scanner;<br><br>class MyClass {<br><blockquote>public <u>static void</u> main(<u>String</u>[]args){<br><br><blockquote>Scanner myVar = new Scanner(System.in);<br><blockquote>System.out.printIn(myVar.nextLine());<br>}<br>}
		`
	},		
	'userInputQ1': {
		title: 'Select the the right answer to get user input.',
		body:`
		<label for="variable">import java.util.Scanner;<br>class test {<br><blockquote>public static void main(String[] args){<br></label>
			<select id="input" name="input">
				<option value="nextLine">nextLine</option>
				<option value="Scanner">Scanner</option>
			</select> sc = new Scanner(System.in);<br>
			String st = sc.<select id="input" name="input">
			<option value="Scanner">Scanner</option>
			<option value="nextLine">nextLine</option>
		</select>();<br>}<br>}
		`
	},
	'primitiveOps': {
		title: 'The Math Operators',
		subtitle: 'Java provides a rich set of operators to use in manipulating variable. A value used on either side of an operator is called an <b>operand</b>.<br>For example, in the expression below, the nubmers 6 and 3 are operands of the plus operator:<br>',
		body: ` 
			<mark>int x = 6 + 3;</mark>
			<br></br>
			Java arithmetic operators:
			<br><b>+ addition</b>
			<br><b>- substraction</b>
			<br><b>* multiplication</b>
			<br><b>/ division</b>
			<br><b>% modulo</b>`
	},
	'primitiveOpsQ': {
		subtitle: 'Select answer to declare an integer variable and set its value to 5.',
		body:`
		<select id="intV" name="intV">
		<option value="double">double</option>
		<option value="int">int</option>
		</select> var = <select id="intV1" name="intV1">
				<option value="3">3</option>
				<option value="5">5</option>
		</select>`  
	},
	'primitiveOps2': {
		title: 'Addition',
		subtitle: 'The + operator adds together two values, such as twi constants, a constant and a variable, or a variable and a variable. Here are a few examples of addition:',
		body: `
			int sum1 = 50 + 10;<br>
			int sum2 = sum1 + 66;<br>
			int sum3 = sum2 + sum2;	
		
		<h3>Substraction</h3>
		<p>The - operator subtracts one value from another.</p> 
		<p>
			int sum1 = 1000 - 10;<br>
			int sum2 = sum1 - 5;<br>
			int sum3 = sum1 - sum2;	
		</p>`
	},
	'primitiveOpsQ2': {
		subtitle: 'Select answer to print sum of the two variables.',
		body: `
			int x 2; int y = 4;<br>
			int result = x <select id="primO" name="primO">
			<option value="-">-</option>
			<option value="+">+</option>
			</select><select id="primO1" name="primO1">
			<option value="3">3</option>
			<option value="y">y</option>
			</select>;<br>
			System.out.printIn(<select id="primO2" name="primO2">
			<option value="equals">equals</option>
			<option value="result">result</option>
			</select>);
		`
	},
	'primitiveOps3': {
		title: 'Multiplication',
		subtitle: 'The * operator multiplies two values.',
		body: `
			int sum1 = 1000 * 2;<br>
			int sum2 = sum1 * 10;<br>
			int sum3 = sum2 * sum2;	
		
		<h3>Division</h3>
		<p>The / operator divides one value by another.</p> 
		<p>
			int sum1 = 1000 / 5;<br>
			int sum2 = sum1 / 2;<br>
			int sum3 = sum1 / sum2;	
		</p>`
	},
	'primitiveOpsQ3': {
		subtitle: 'What is the result of the following code?',
		body: `
			int x = 15; int y = 4;<br>
			int result = x / y;<br>
			System.out,printIn(result);
			<select id="var" name="var">
			<option value="4">4</option>
			<option value="5">5</option>
			<option value="3">3</option>
			<option value="11">11</option>
			</select>`
	}, 
	'primitiveOps4': {
		title: 'Modulo',
		subtitle: 'The <b>modulo</b> (or remainder) math operation performs an <u>integer</u> division of one value by another, and returns the remainder of that division.<br>The operator for the modulo operation is the percentage (%) character.<br><b>Example:</b>',
		body: `
			int value = 23;<br>
			int res = value % 6;// res is 5<br>
			`
	},
	'primitiveOpsQ4': {
		subtitle: 'What value is stored in the result variable?',
		body: `
			int x = 8; int y = 5;<br>
			int result = x % y;<br>
			System.out,printIn(result);
			<select id="var" name="var">
			<option value="8">8</option>
			<option value="5">5</option>
			<option value="3">3</option>
			<option value="3.5">3.5</option>
			</select>`
	}, 
	'incrDecr': {
		title: 'Increment Operators',
		subtitle: 'An <b>increment</b> or <b>decrement</b> operator provides a more convenient and compact way to increase or decrease the value of a variable by <b>one</b>.<br>For example, the statement <b>x=x+1;</b>can be simplified to <b>++x;</b><br><b>Example:</b>',
		body: `
			int test = 5;<br>
			++test;<br>// test is now 6
			<br>
			<br>
			<p>The <b>decrement</b> operator (-) is used to decrease the value of a variable by one.
			<br>
			<br>
			int test = 5;<br>
			--test;<br>// test is now 4
			`
	},
	'incrDecr1': {
		title: 'Prefix & Postfix',
		subtitle: 'Two forms <b>prefix</b> and <b>postfix</b>, may be used with both the increment and decrement operators.<br>Withe prefix form, the operator appears before the operand, while in postfix form, the operator appears after the operand. Below is an explantation of how the two forms work:<br><b>Prefix:</b> Increments the variable value and uses the new value in the expressions.<br><b>Example:</b>',
		body: `
			int x = 34;<br>
			int y = ++x;// y is 35
			<br>
			<br>
			<p>The value of x is first incremented to 35, and is then assigned to y, so the values of both x and y are now 35.<br><b>Postfix:</b> The variable value is first used in the expression and is then increased.<br><b>Example:</b>
			<br>
			<br>
			int x = 34;<br>
			int y = x++;// y is 34<br>
			`
		},
		'incrDecrQ1': {
			subtitle: 'What is the output of the following code?',
			body: `
				int x = 14;<br>
				System.out,printIn(x++);
				<select id="incr" name="incr">
				<option value="8">8</option>
				<option value="14">14</option>
				<option value="13">13</option>
				<option value="15">15</option>
				</select>`
		}, 
		'incrDecr2': {
			title: 'Assignment Operators',
			subtitle: 'You are alread familiar with the <b>assignments</b> operator (=), which assigns a value to a variable.',
			body: `
				int value = 5;<br>
				<br>
				<p>This assigned the value 5 to a variable called <b>value</b> of type <u>int</u>.<br><br> Java provides a number of assignment operators to make it easier to write code.<br><b>Addition and assignment (+=):</b>
				<br>
				<br>
				int num1 = 4;<br>
				int num2 = 8;<br>
				num2 += num1;// num2 = num2 + num1;
				<br>
				// num2 is 12 and num1 is 4
				<p><b>Subtraction and assignment (-=):</b></p>
				<br>
				<br>
				int num1 = 4;<br>
				int num2 = 8;<br>
				num2 -= num1;// num2 = num2 - num1;
				<br>
				// num2 is 4 and num1 is 4
				`
		},
		'incrDecrQ2': {
			subtitle: 'Select the answer in the following code to print 13.',
			body: `
				int x = 25;int y;<br>
				y = <select id="var" name="var">
				<option value="8">8</option>
				<option value="x">x</option>
				<option value="xy">xy</option>
				</select> - 12;<br>
				System.out,printIn(<select id="incr" name="incr">
				<option value="++x">++x</option>
				<option value="result">result</option>
				<option value="y">y</option>
				</select>);
				`
		}, 
		'strings1': {
			title: 'Strings',
			subtitle: 'A <u><b>String</b></u> is and object that represents a sequence of characters.<br>For example, "Hello" is a string of 5 characters.<br><br><b>Example:</b>',
			body: `
				<b>String</b> s = "SoloLearn";<br><br>
				<p>You are allowed to define an empty string. For example, <u><b>String</b></u> str = "";
				`
		},
		'stringQ1': {
			subtitle: 'Select the answer to print "Hello".',
			body: `
				<select id="str" name="str">
				<option value="int">int</option>
				<option value="str">str</option>
				<option value="String">String</option>
				</select> var;<br>var = "Hello";<br>
				System.out,printIn(<select id="incr" name="incr">
				<option value="s">s</option>
				<option value="result">result</option>
				<option value="var">var</option>
				</select>);
				`
		}, 
		'strings2': {
			title: 'String Concatenation',
			subtitle: 'The + (plus) operator between strings adds them together to make a new string. This process is called <b>concatenation</b>.<br>The resulted string is the first string put together with the second string.<br><b>Example:</b>',
			body: `
				<b>String</b> firstName, lastName;<br> firstName = "David";<br>
				lastName = "Williams";<br><br>
				System.out,printIn("My name is " + firsName +""+lastName);<br><br>

				<p>The <u><b>char</b></u> data type represents a single character;
				`
		},
		'stringQ2': {
			subtitle: 'Select answer of which statement in regard to the char data type is true?',
			body: `
				<select id="str1" name="str1">
				<option value="hello">"hello" is a char</"option>
				<option value="k">'k' is a char</option>
				<option value="char">char is used to store numeric values</option>
				</select>
				`
		},
		'moduleQ1': {
			subtitle: 'Please select answer in a code to declare two variables of type int and print their sum using sum variable.',
			body: `
				int x = 4;<br>
				<select id="opr1" name="opr1">
				<option value="int">int</option>
				<option value="str">str</option>
				<option value="var">var</option>
				</select> y = 7;
				<br>
				int sume = x <select id="opr2" name="opr2">
				<option value="-">-</option>
				<option value="*">*</option>
				<option value="+">+</option>
				</select> y;
				<br>
				System.out,printIn(<select id="var" name="var">
				<option value="sum">sum</option>
				<option value="result">result</option>
				<option value="equals">equals</option>
				</select>);
				`
		},
		'moduleQ2': {
			subtitle: 'In ever Java program...',
			body: `
				<select id="str1" name="str1">
				<option value="1">...there must be a method called "main".</"option>
				<option value="2">...all of the variables must be integers</option>
				<option value="3">...there must be at least two variables declared.</option>
				</select>
				`
		}, 
		'moduleQ3': {
			subtitle: 'Please select answer to output the name',
			body: `
				<select id="str1" name="str1">
				<option value="int">int</option>
				<option value="str">String</option>
				<option value="var">var</option>
				</select> name;
				<br>
				name = "David";
				<br>
				System.out,printIn(<select id="var" name="var">
				<option value="name">name</option>
				<option value="result">result</option>
				<option value="equals">equals</option>
				</select>);
				`
		},
		
		'UniversityExam': {
			subtitle: 'Welcome to the Ulaps University Entrance Exam',
			body: `
					Game to be continued.........
				`
		},
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
	'fun': 'mainBgm.mp3',
	'trouble': 's1s2.mp3',
	'first': 'w-saitama.mp3',
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
	'university':'university.jpeg',
	'hang-out': 'beach-hang.jpg',
	'studyroom':'hangout.jpg',
});


// Define the Characters
monogatari.characters ({
	'sidekick': {
		name: 'Joe',
		color: '#5bcaff',
		expressions:{
			normal:'ex-saitama.png'
		},
		sprites:{
			normal:'saitama.png'
		}
	},
	'dad':{
		name: 'Father',
		color: '#1e88e5',
		expressions:{
			sad:'ex-fathersad.png'
		},
		sprites:{
			sad:'fathersad.png'
		}
	},
	'mom':{
		name: 'Mother',
		color: '#d81b60',
		expressions:{
			sad:'ex-m-sad.png',
			normal:'ex-m-sad.png'
		},
		sprites:{
			sad:'m-sad.png',
			normal:'m.png',
			duo: 'f-m.png'
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
			normal:'p-hppy.png',
			happy:'p-exctd.png'
		},
		sprites:{
			sad:'player.png',
			normal:'player.png',
			happy:'player.png'
		}
	},
	's1':{
		name: 'Student 1',
		color: '#d81b60',
		expressions:{
			normal:'ex-s1.png',
			duo:'s1-s2.png'
		},
		sprites:{
			normal:'s1.png',
			duo:'s1-s2.png'
		}
	},
	's2':{
		name: 'Student 2',
		color: '#1e88e5',
		expressions:{
			normal:'ex-s2.png',
		},
		sprites:{
			normal:'s2.png'
		}
	},
	'nanderf':{
		name:'Mr. Nanderf',
		color:'#1e88e5',
		expressions:{
			normal:'ex-nanderf.png'
		},

		sprites:{
			normal:'nanderf.png'
		}
	
	},
});

monogatari.script ({
	// The game starts here.
	'Start': [
			'show scene school with fadeIn ',
			'show message JavaGameIntro',
			//'show message moduleQ1 ',
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
		// 'jump intro'
		//'jump houseScene'
		//'jump leavingScene'
		//'jump StudentScene'
		//'jump houseScene2'
		//'jump StudentSceneYes'
		//'jump houseScene2'
		//'jump houseScene3'
		// 'jump BoredomChoiceScene'
		// 'jump userInputScene'
		'jump FirstJavaProgramScene'
		// 'jump variableScene'
		// 'jump FirstJavaProgramScenePart2'
		// 'jump EndReviewscene'
	],
	'intro':[
		//Introduction
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
		'play music fun with volume 75 fade 3',
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
		'show character dad sad normal at left with fadeIn',
		'dad:sad Hi {{player.name}}, We have something to tell you!',
		'p:normal What is it dad?',
		'dad:sad Honey, Can you tell it to {{player.name}}?',
		'show character mom sad at center with fadeIn',
		'mom:sad {{player.name}} we cannot afford to send you to college.',
		'p:normal What? I cannot believed it!',
		'mom:sad Wait {{player.name}}! Where are you going?',
		'jump leavingScene',
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
		'play music trouble with volume 50 fade 5 ',
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
		'show character nanderf normal with fadeIn',
		'nanderf Hello everyone! Welcome to Ulaps University! Please come here to get the reviewer for the entrance exam.',
		'hide character nanderf normal with fadeOut',
		'show character p normal with fadeIn',
		'p:normal Hey! What is your name sir?',
		'hide character p normal with fadeOut',
		'show character nanderf normal with fadeIn',
		'nanderf I am Mr Nanderf, I will be the one facilitating your upcoming Entrance exam',
		'nanderf Today, I will give you the reviewer, here take it. Good luck!',
		'hide character nanderf normal with fadeOut',
		'show character p normal with fadeIn',
		'p:normal Thank you Sir! See you. I will do my best for this. Hehe',
		'jump houseScene3'
		
		
	],
	'houseScene3':[
		'show scene studyroom with fadeIn',
		'show character p normal with fadeIn',
		'p:normal Alright I will start learning Java, Finally I will start realizing my dreams',
		//game interface background needed
		'jump FirstJavaProgramScene'
	],

	'FirstJavaProgramScene':[
		'show scene studyroom with fadeIn',
		'show message JavaIntro',
		'show message FirstJavaProgram',
		{'Choice': {
			'Yes': {
				'Text': 'Continue the game?',
				'Do': 'jump FirstJavaProgramScene1'
			},
			'No': {
				'Text': 'Repeat the scene?',
				'Do':'jump FirstJavaProgramScene'
			}
		}}
	],
	'FirstJavaProgramScene1':[
		'show scene studyroom with fadeIn',
		'show message FirstJavaProgram1',
		{'Choice': {
			'Yes': {
				'Text': 'Continue the game?',
				'Do': 'jump Question1'
			},
			'No': {
				'Text': 'Repeat the scene?',
				'Do':'jump FirstJavaProgramScene'
			}
		}}
	],
	'Question1':[
		'show scene studyroom with fadeIn',
		'show message Q1',
		{'Choice': {
			'Main': {
				'Text': 'Main',
				'Do': 'jump MainMethodScene'
			},
			'static': {
				'Text': 'static',
				'Do':'jump Question1'
			},
			'public': {
				'Text': 'public',
				'Do':'jump Question1'
			}
		}}
	],
	'MainMethodScene':[
		'show scene studyroom with fadeIn',
		'show message MainMethod',
		'jump Question2'
	],
	'Question2':[
		'show scene studyroom with fadeIn',
		'show message Q2',
		{'Choice': {
			'wrong': {
				'Text': 'static hello()',
				'Do': 'jump Question2'
			},
			'wrong1': {
				'Text': 'public hello()',
				'Do':'jump Question2'
			},
			'correct': {
				'Text': 'void hello()',
				'Do':'jump printlnScene'
			}
		}}
	],
	'printlnScene':[
		'show scene studyroom with fadeIn',
		'show message println',
		'jump Question3'
	],
	'Question3':[
		'show scene studyroom with fadeIn',
		'show message testing',
		'show message Q3',
		{'Choice': {
			'wrong': {
				'Text': 'System.printText()',
				'Do': 'jump Question3'
			},
			'wrong1': {
				'Text': 'System.out()',
				'Do':'jump Question3'
			},
			'correct': {
				'Text': 'System.out.println()',
				'Do':'jump SemicolonScene'
			},
			'wrong2': {
				'Text': 'out.WriteText()',
				'Do':'jump Question3'
			},
		}}
	],
	'SemicolonScene':[
		'show scene studyroom with fadeIn',
		'show message Semicolons',
		'jump Question4'
	],
	'Question4':[
		'show scene studyroom with fadeIn',
		'show message Q4',
		{'Choice': {
			'wrong': {
				'Text': '""',
				'Do': 'jump Question4'
			},
			'wrong1': {
				'Text': ',',
				'Do':'jump Question4'
			},
			'wrong2': {
				'Text': ':',
				'Do':'jump Question4'
			},
			'correct': {
				'Text': ';',
				'Do':'jump variableScene'
			},
		}}
	],
	'variableScene':[
		'show scene studyroom with fadeIn',
		'show message Variable',
		'jump Question5'
	],
	'Question5':[
		'show scene studyroom with fadeIn',
		'show message VariableQ',
		{'Choice': {
			'wrong': {
				'Text': 'var',
				'Do': 'jump Question5'
			},
			'wrong1': {
				'Text': 'double',
				'Do':'jump Question5'
			},
			'correct': {
				'Text': 'String',
				'Do':'jump variableScene2'
			},
			'wrong2': {
				'Text': 'int',
				'Do':'jump Question5'
			},
		}}
	],
	'variableScene2':[
		'show scene studyroom with fadeIn',
		'show message Variables2',
		'jump Question6'
	],
	'Question6':[
		'show scene studyroom with fadeIn',
		'show message Variables2Q',
		{'Choice': {
			'wrong': {
				'Text': 'String',
				'Do': 'jump Question6'
			},
			'correct': {
				'Text': 'int',
				'Do':'jump userInputScene'
			},
			'wrong1': {
				'Text': 'char',
				'Do':'jump Question6'
			},
			'wrong2': {
				'Text': 'main',
				'Do':'jump Question6'
			},
		}}
	],
	'userInputScene':[
		'show scene studyroom with fadeIn',
		'show message userInput',
		'jump Question7'
	],
	'Question7':[
		'show scene studyroom with fadeIn',
		'show message userInputQ1',
		'jump BoredomChoiceScene'
	],

	'BoredomChoiceScene':[
		'show scene studyroom with fadeIn',
		{'Choice': {
			'Yes': {
				'Text': 'Continue the game?',
				'Do': 'jump FirstJavaProgramScenePart2'
			},
			'No': {
				'Text': 'Take a break and talk to Joe?',
				'Do':'jump JoeScenePython',
			}
		}}
	],

	'FirstJavaProgramScenePart2':[
		'show scene studyroom with fadeIn',
		'show message primitiveOps',
		'show message primitiveOpsQ',
		'show message primitiveOps2',
		'show message primitiveOpsQ2',
		'show message primitiveOps3',
		'show message primitiveOpsQ3',
		'show message primitiveOps4',
		'show message primitiveOpsQ4',
		'show message incrDecr',
		'show message incrDecr1',
		'show message incrDecrQ1',
		'show message incrDecr2 ',
		'show message incrDecrQ2',
		'show message strings1',
		'show message stringQ1',
		'show message strings2',
		'show message stringQ2',
		'jump EndReviewscene'
	],

	'JoeScenePython':[
		'show scene hang-out with fadeIn',
		'show character sidekick normal with fadeIn',
		'sidekick:normal Hey  {{player.name}}! Where have you been that day?',
		'hide character sidekick normal with fadeOut',
		'show character p normal with fadeIn',
		'p:normal Haha, I am supposed to ask that to you idiot. By the way,I talked to Mr. Nanderf, he is my long-time friend. Hehe',
		'hide character p normal with fadeOut',
		'show character sidekick normal with fadeIn',
		'sidekick:normal Really?',
		'hide character sidekick normal with fadeOut',
		'show character p normal with fadeIn',
		'p:normal Yes. How about you idiot? I have been looking for you!',
		'hide character p normal with fadeOut',
		'show character sidekick normal with fadeIn',
		'sidekick:normal Haha! I came maybe earlier than you. By the way I saw they offer python. Ahaha. Seems easier than Java.',
		'hide character sidekick normal with fadeOut',
		'show character p normal with fadeIn',
		'p:normal Yes. Oh really? So you are really serious in making artworks like snake? Haha!',
		'hide character p normal with fadeOut',
		'show character sidekick normal with fadeIn',
		'sidekick:normal Noob. Hahaha!',
		'hide character sidekick normal with fadeOut',
		'show character p normal with fadeIn',
		'p:normal ahaha ok I got to go now. I just feel bored because Java is so easy. Hehe. See at the Entrance Exam day then.',
		'hide character p normal with fadeOut',
		'show character sidekick normal with fadeIn',
		'sidekick:normal Ok See you. Noob',
		'hide character sidekick normal with fadeOut',
		'jump FirstJavaProgramScenePart2',
	],
	'EndReviewscene':[
		'show scene studyroom with fadeIn',
		'show character p normal with fadeIn',
		'p:normal Haha, At last I am ready to take the exam!',
		'hide character p normal with fadeOut',
		'show character mom normal with fadeIn',
		'mom:normal {{player.name}} What is that smell?',
		'hide character mom with fadeOut',
		'show character p normal with fadeIn',
		'p:normal Haha,Sorry mom I did not take a bath for 3 days to finish reviewing.',
		'hide character p normal with fadeOut',
		'show character mom normal with fadeIn',
		'mom:normal {{player.name}} Really? Oh my God, go to the bathroom and take a bath, you smell stinky!',
		'hide character mom with fadeOut',
		'show character p normal with fadeIn',
		'p:normal Ok mom, tomorrow is the entrance exam wish me luck mom!',
		'hide character p normal with fadeOut',
		'show character mom normal with fadeIn',
		'mom:sad {{player.name}} I know you can make it son, but please take a bath now?',
		'hide character mom with fadeOut',
		'show character p normal with fadeIn',
		'p:normal Ok mom I\'ll take a bath now. Hehe',
		'hide character p normal with fadeOut',
		'jump EntranceExamScene'
		
	],
	'EntranceExamScene': [
		'show scene university with fadeIn',
		'show message UniversityExam'


	]

});