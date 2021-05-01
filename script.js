// // Assignment Code
// let generateBtn = document.querySelector("#generate");

// // for (let i = 0; i < 8; i ++i) {
// //   newPassword = newPassword + characters.charAt(math.floor(math.random() * size));
// // }

// // Write password to the #password input

// function writePassword() {
//   let password = generatePassword();

//   let passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

// // // Add event listener to generate button
// // generateBtn.addEventListener("click", writePassword);

// // let length >=8, <=127; charset=" abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTYUVWXYZ0123456789 !"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
// // for (let i = 0, n = charset.length; i < length, ++i) {
// //   newPassword += charset.charAt (math.floor(math.random) * n));
// //   return newPassword;
// // }

// // for (let i = 0; i < 8; i ++i) {
// //   console.log(i);
// // }

// if (lengthChoice >= 8 && lengthChoice <= 128) {

//   prompt("would you like to use uppercase?");
//   prompt("would you like to use lowercase");
//   prompt("would you like to use numbers?");
//   prompt("would you like to use special characters?");

//    if (Math.floor(math.random));
//   else if ();
//   else ();{
//     window.alert(newPassword)
// }
//   return;
// }

// function testLength() {
// let lengthChoice = parseInt(prompt("choose a password length", "8 to 128"));
// if (lengthChoice >= 8 && lengthChoice <= 128) {
//   console.log("Good choice");
// } else {
//   window.alert("please choose another number");
// }
// return lengthChoice;----------------------------------------------------------------------------
// } --------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------
//let newFinalPassword ;
// Assignment Code
let generateBtn = document.querySelector('#generate');

// Write password to the #password input

function writePassword() {
	//overall function
	let password = generatePassword(); // password is a function

	let passwordText = document.querySelector('#password'); //points the password to the html
	passwordText.value = password;
}

function generatePassword() {
	// creating three variables,
	let userNumber = Prompt1(); //variable that contains user's first choice-length of characters
	let userChoices = Prompt2(); // variable contains users choices of character types
	let password = makePassword(userNumber, userChoices); //holds user choices for creation of password
	return password;
}

function Prompt1() {
	//collects the user's choice- length of characters
	let lengthChoice = prompt('how many characters would you like in your password; please choose between 8 and 128'); //validate the entry isn't a word
	lengthChoice = parseInt(lengthChoice);
	// console.log(typeof(lengthChoice)) //was using parseInt, but now requiring user to enter interger (or retry)
	if (lengthChoice === null) {
		alert('try again?');
		return;
	}
	if (isNaN(lengthChoice)) {
		alert('enter a number value');
		return Prompt1(); 
	}
	//                                                                     .....................how to get so "cancel" will end program???
	//  else if (lengthChoice >= 8 && lengthChoice <= 128) {
	//if (lengthChoice < 8 || lengthChoice > 128) ;//                   .......else if does not return a function....
	// return getPrompt1();;
	//  console.log(lengthChoice + " is acceptable")
	//continue;
	//}// else {   //else if (lengthChoice < 8 || lengthChoice > 128)
	// alert("Please choose a number between 8 and 128");
	//return ;
	//}
	if (lengthChoice < 8 || lengthChoice > 128) {
		alert('password must be between 8 and 128 characters, please try again');
		return Prompt1();
		// } else (lengthChoice === ("Please choose a number between 8 and 128"));
		// return Prompt1();
		//
	}
	return lengthChoice;
}

function Prompt2() {
	let lowerCaseArray = [
		'a',
		'b',
		'c',
		'd',
		'e',
		'f',
		'g',
		'h',
		'i',
		'j',
		'k',
		'l',
		'm',
		'n',
		'o',
		'p',
		'q',
		'r',
		's',
		't',
		'u',
		'v',
		'w',
		'x',
		'y',
		'z'
	];

	let upperCaseArray = [
		'A',
		'B',
		'C',
		'D',
		'E',
		'F',
		'G',
		'H',
		'I',
		'J',
		'K',
		'L',
		'M',
		'N',
		'O',
		'P',
		'Q',
		'R',
		'S',
		'T',
		'U',
		'V',
		'W',
		'X',
		'Y',
		'Z'
	];

	let numbersArray = [ '0', '1', '2', '3', '4', '5', '6', '7', '8', '9' ];

	let specCharArray = [
		'!',
		' ',
		'"',
		'#',
		'$',
		'%',
		'&',
		"'",
		'(',
		')',
		'*',
		'+',
		',',
		'-',
		'.',
		'/',
		':',
		';',
		'<',
		'=',
		'>',
		'?',
		'@',
		'[',
		'^',
		'_',
		'`',
		'{',
		'|',
		'}',
		'~'
	];

	let choicesArray = [];

	let upperCase = confirm('click okay to use uppercase letters.');
	if (upperCase === true) {
		choicesArray = choicesArray.concat(upperCaseArray);
	} //console.log(choicesArray)

	let lowerCase = confirm('click okay to use lower case letters.');
	if (lowerCase === true) {
		choicesArray = choicesArray.concat(lowerCaseArray);
	} //console.log(choicesArray);

	let numbers = confirm('click okay to use numbers');
	if (numbers === true) {
		choicesArray = choicesArray.concat(numbersArray);
	} //console.log(choicesArray)//

	let specChar = confirm('click okay to use special characters');
	if (specChar === true) {
		choicesArray = choicesArray.concat(specCharArray);
	}

	console.log(choicesArray);
	if (choicesArray.length < 1) {
		alert("you didn't select any character types, please try again.");
		Prompt2(); //to run prompts again if there is no character selection
	} else {
		return choicesArray;
	}
}

// let password ;
//   writePassword.call;

function makePassword(userNumber, userChoices) {
	// console.log(userChoices.length) //0
	let finalPassword = [];
	for (i = 0; i < userNumber; i++) {
		let random = Math.floor(Math.random() * userChoices.length);
		finalPassword.push(userChoices[random]);
		console.log(random);
	}

	finalPassword = finalPassword.join(''); //turns the final password array into a string
	//  console.log(finalPassword);
	//----------------------------dispaly password somhow---------------------

	//window.alert(finalPassword);//displays password in a popup window, but not in the password window...

	//return ("password");
	// console.log(typeof writePassword);
	// } makePassword(); {
	// value.finalPassword = ("#password");
	// return this.#password;
	// newFinalPassword = finalPassword;
	return finalPassword; //.//join("");  ///omg
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);
//document.write(password);
// this.finalPassword = password;
//document.getElementById("password")
//.value="finalPassword";
// function gfg_Run() {
//   el_down.innerHTML = generatePassword();
// }
