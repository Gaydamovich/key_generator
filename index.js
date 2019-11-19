'use strict';


function generateKeys() {
	const symbols = `1!2@3#4$5%67&89_qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM`;
	const arrResult = [];
	const arraySymbols = symbols.split('');
	
	for (let i = 0; i < 15; i++) {
		arrResult.push(arraySymbols[Math.floor(Math.random() * arraySymbols.length)])
	}
	
	const key = arrResult.join('');
	document.querySelector('.resultKeys').innerHTML = `<span style="color: tomato">Key</span>: ${key}`;
}

document.getElementById('btn').addEventListener('click', generateKeys);