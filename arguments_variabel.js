function cekArguments(){
	return arguments;
}

var coba = cekArguments(1,5,8,"hallo",false);

function tambah(){
	hasil = 0;
	for(var i = 0; i < arguments.length; i++)
	{
		hasil += arguments[i];
	}
	return hasil;
}

var hasil = (1 > 0) ? "BENAR" : "Salah";
console.log(hasil);

