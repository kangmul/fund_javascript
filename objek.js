// Membuat Objek
// 1 Objek Literal
var mhs = {
	nama : "Muluk Dharmayana",
	nim : "361441007",
	email : "uzumaryuki@gmail.com",
	jurusan : "Teknik Informatika"
};

var mhs1 = {
	nama : "Dede Supriatna",
	nim : "361441001",
	email : "deco@gmail.com",
	jurusan : "Teknik Informatika"
};


// 2 Dengan Function Declaration

function buatObjek (nama, nim, email, jurusan){
	var mhs = {};
	mhs.nama = nama;
	mhs.nim = nim;
	mhs.email = email;
	mhs.jurusan = jurusan;
	return mhs;
}

var mhs2 = buatObjek('Aef Saefurrohman', '361441004', 'aefsaefurohman@gmail.com', 'Teknik Informatika');



// Dengan Constructor
function Mahasiswa(nama, nim, email, jurusan){
	this.nama = nama;
	this.nim = nim;
	this.email = email;
	this.jurusan = jurusan;
}

var mhs3 = new Mahasiswa('Mulyadi', '361541005', 'mulyadimament@yahoo.co,id', 'Teknik Informatika');