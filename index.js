'use strict';

let count = 0;

function generateKeys() {
	count++;

	const symbols = `1!2@3#4$5'67&89qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM`;
	const arrResult = [];
	const arraySymbols = symbols.split('');

	for (let i = 0; i < 16; i++) {
		if (i === 5 || i === 10) {
			arrResult.push('_')
		} else {
			arrResult.push(arraySymbols[Math.floor(Math.random() * arraySymbols.length)])
		}
	}

	const key = arrResult.join('');
	document.querySelector('.resultKeys').innerHTML = `<span style="color: tomato; font-weight: bold">KEY</span>: ${key}`;

	let reg = /\$\d+/;
	if (key.match(reg)) {
		const win = key.match(reg);
		alert(`УРА!! вы выиграли ${win}`)
	}
	localStorage.setItem(`key_${count}`, key) // save in localStorage
}

document.getElementById('btn').addEventListener('click', generateKeys);
