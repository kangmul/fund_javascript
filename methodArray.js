var array = ["Roni Indrabudi" , "Rahmat" , "Eki Kartiwa" , "Muluk Dharmayana" , "Nopa Nurhikmayana"];

console.log(array);

Meethod Array 
1 LENGTH (Melihat jumlah elemen)

console.log(array.length);

// 2 PUSH (Menambah isi dari index terakhir)

array.push("Eki Kartiwa", "Muluk Dharmayana" , "Nopa Nurhikmayana");
console.log(array);

// // 3 POP (MEnghapus isi dari index terakhir)
array.pop();
console.log(array);

// 4 JOIN (Merubah isi Array menjadi String )
console.log(array.join());

5 UNSHIFT (Menambah isi array dari index 0 / pertama)
console.log(array.unshift("Muluk Dharmayana"));
console.log(array.join(' - '));


6 SHIFT (Menghapus isi array dari index 0 / pertama)
array.shift();
console.log(array.join());

7. SPLICE ( Menambahkan elemen baru dari index tertentu (Mengiris ARRAY)   kata lain "nyambung")
rumus namaarray.splice( index awal, jumlah yang dihapus , nilai baru )
array.splice(2,2,"UJANG" , "Romli" , "Nurdin");
console.log(array);

8. SLICE (Memotong / mengiris index menjadi array baru)
rumus namaaray.slice (index awal, index akhir)

var arr2 = array.slice(1,4)
console.log(arr2.join(' - '));











