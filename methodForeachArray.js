 var angka = [1,2,3,4,5,6,11,12,13,14,15];
// jika pengulangn menggunakan for

// for (var i = 0 ; i < angka.length ; i++){
// 	console.log(angka[i]);
// }

// dengan menggunakan forEach

// angka.forEach(function(j) {
// 	console.log(j);
// });


// var nama = ["Muluk Dharmayana" , "Rina Agustini" , "Rumaisha Indy Dharmayana" , "Muammar Ayyash"];

// nama.forEach(function(i,j){
// 	console.log('Keluarga No ' + (j+1) + ' Nama ' + i );
// });

// dengan menggunakan MAP
var kendaraan = ['Motor' , 'Mobil' , 'Sepeda'];
var cetak = kendaraan.map(function(k){
	return k;
});

console.log(cetak.join(' - '));

var cetakAngka = angka.map(function(e){
	return e + 100;
})

console.log(cetakAngka.join(' - '));

// dengan SHORT

