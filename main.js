let input = document.getElementById('input');
let btn = document.getElementById('btn');
let msg = document.getElementById('msg');


btn.onclick = function() {
	var el =  input.value;
	msg.innerHTML = el;
	input.value = '';
}

