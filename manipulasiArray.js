// Mengisi elemen array pada tiap-tiap index


var arr = ["a" , 1 , true, "Muluk" , "Dharmayana", 18 , 8, 1986];
console.log(arr[5]);

// Menghapus isi dari index pada array
arr[2] = undefined;

console.log(arr);

//menampilkan isi array dengan metode loop
var arr1 = ["Roni Indrabudi" , "Rahmat" , "Eki Kartiwa" , "Muluk Dharmayana" , "Nopa Nurhikmayana"];

for (var i = 0 ; i < arr1.length ; i++){
	console.log('Crew Sheetfed ke ' + [i+1] + ' ' +arr1[i]);
}