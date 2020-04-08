var noangkot = 1;
var jumlahangkot = 10;
var angkotberoperasi = 6;

for (noangkot; noangkot <= jumlahangkot ; noangkot++){
	if (noangkot <= angkotberoperasi && noangkot !== 5 ) {
		console.log("Angkot No. " + noangkot + " beroperasi dengan baik");
	} else if (noangkot === 8 || noangkot === 10 || noangkot === 5){
		console.log("Angkot No. " + noangkot + " sedang lembur");
	} else {
		console.log("Angkot No. " + noangkot + " sedang tidak beroperasi");
	}
}