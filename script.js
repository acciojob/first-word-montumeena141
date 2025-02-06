function firstWord(s) {
  // your code here
	let sp=s.split(" ");
	return sp[0];
	
}

// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));
