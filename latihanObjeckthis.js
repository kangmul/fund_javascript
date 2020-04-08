// kasus, angkot mempunyai supir, trayek, penumpang dan uang kas.
// inisialisasi penumpang da uang kas = kosong.
// supir mempunyai nama.

// membuat objek dengan constructor
function objekAngkot(supir, trayek, penumpang, kas){
	this.supir = supir;
	this.trayek = trayek;
	this.penumpang = penumpang;
	this.kas = kas;

	// method pengelola jika ada penumpang naik
	this.penumpangNaik = function(namaPenumpang){
		this.penumpang.push(namaPenumpang);
		return this.penumpang;
	}

	// method pengelola jika penumpang turun
	this.penumpangTurun = function(namaPenumpang, bayar){
		if (this.penumpang.length === 0){
			alert('Belum ada penumpang');
			return false;
		}
		for(var i = 0; i < this.penumpang.length; i++){
			if (this.penumpang[i] == namaPenumpang){
				this.penumpang[i] == undefined;
				this.kas += bayar;
				this.penumpang.splice([i],1);
				return this.penumpang;
			}
		}

	}
}

let angkot1 = new objekAngkot('Aef', ['Lewipanjang','Soreang'],[],0);
let angkot2 = new objekAngkot('john',['Cibiru','Caheum'],[],20000);