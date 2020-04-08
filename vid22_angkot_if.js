var noAngkot = 1;
var jumlahAngkot = 10;
var angkotBeroperasi = 6;

for (noAngkot; noAngkot <= jumlahAngkot ; noAngkot++){
	if (noAngkot <= angkotBeroperasi) {
		console.log("Angkot No. " + noAngkot + " beroperasi dengan baik.");
	} else {
		console.log("Aangkot No. " + noAngkot + " sedang tidak beroperasi");
	}
}