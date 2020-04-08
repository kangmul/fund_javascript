var penumpang = [];

var tambahPenumpang = function(namaPenumpang, penumpang){
	// jika angkos kosong;
	if (penumpang.length == 0){
		// tambah penumpang di awal array
		penumpang.push(namaPenumpang);
		// kembalikan isi array dan keluar dari function
		return penumpang;		
		}
		
	// tapi else
	else {
		// telusuri seluruh kursi di awal
		for (var i = 0; i < penumpang.length ; i++;){
			// jika ada kursi kosong
			if (penumpang[i] == undefined){
				// tambah penumpang dikursi tersebut
				penumpang[i] == namaPenumpang;
				// kembalikan isi array dan keluar dari function
				return penumpang;
			}
		}
			
				
				
			// jika ada nama penumpang yang sama
				// keluarkan notifikasi kesalahan
				// kembalikan isi array dan keluar dari function
			// jika semua kursi sudah terisi
			else {	
				penumpang.push();
				// tambah penumpang di akhir array
				// kembalikan isi array dan keluar dari function
			}
	}

}
// function tambahPenumpang(nama , tambah){
// 	var nama;
// 	var tambah = penumpang.push(nama);
// }

// tambahPenumpang();
// console.log(penumpang);