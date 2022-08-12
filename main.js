
//  javascript 

const displayWordCount = document.querySelector("#word-count");
const displayCharCount = document.querySelector("#character-count");
const updateCount = () => {
	let message = document.querySelector("#message").value;
	
	let wordCount = (message).split(" ").length;
	
	displayWordCount.innerHTML = wordCount;
	displayCharCount.innerHTML = message.length;
}




