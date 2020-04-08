alert('Selamat Datang');

var tanya = true;

while ( tanya ){
	var nama = prompt('Masukan Nama Anda :');
	alert('Hai, ' + nama);


	tanya = confirm('Coba Lagi ?');
}

alert('Terima Kasih !');