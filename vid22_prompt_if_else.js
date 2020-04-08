var angka = prompt("MASUKAN NILAI :");
if ( angka % 2 === 0){
	alert(angka + " adalah Bilangan Genap !");
} else if (angka % 2 === 1){
	alert(angka + " adalah Bilangan Ganjil !");
} else {
	alert("Yang anda masukan = " + angka + " (BUKAN ANGKA !!)");
}