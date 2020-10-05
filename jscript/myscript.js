
function rot13(msg){
	return msg.replace(/[a-zA-Z]/g,
		function(d){
			return String.fromCharCode((d <= 'Z' ? 90 : 122) >= (d = d.charCodeAt(0) + 13) ? d : d -26);				
	});
}

function update() {
	document.getElementById('outdata').value = rot13(document.getElementById('indata').value);
}


function about(){
	var msgAbout = "ROT-13 - это частный случай шифра Цезаря.<br>Примечателен тем, что один и тот же алгоритм используется для шифрования и дешифрования.<br>Применим только для английского алфавита<br>"
	var name = document.getElementById('about');
    about = name.value;
    document.getElementById('about').innerHTML = msgAbout;
}