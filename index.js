'use strict';


function generateKeys() {
	const symbols = `1!2@3#4$5%67&89_qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM`;
	const arrResult = [];
	const arraySymbols = symbols.split('');
	
	for (let i = 0; i < 10; i++) {
		arrResult.push(arraySymbols[Math.floor(Math.random() * arraySymbols.length)])
	}
	
	const key = arrResult.join('');
	document.querySelector('.resultKeys').innerHTML = `<span style="color: tomato; font-weight: bold">KEY</span>: ${key}`;
	
	let reg = /\$\d+/;
	if (key.match(reg)) {
		const win = key.match(reg)
		alert(`УРА!! вы выиграли ${win}`)
	}
}

document.getElementById('btn').addEventListener('click', generateKeys);