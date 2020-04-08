// Pengertin THIS
// console.log(this);
// ternyata this adalah window

// cara ke 1 function declaration
function halo(){
	console.log(this);
	// console.log("Hallo");
}
this.halo();
// this mengembalikan scope global

// cara ke 2 Objek Literal
// var obj = {a : 20};
// obj.halo = function(){
// 	console.log(this);
// 	console.log('HAIIIIIII');
// }

// obj.halo();
// this mengembalikan objeck bersangkutan

// cara ke 3 dengna constructor

// function  Hallo(){
// 	console.log('DAMANG ?');
// }

// new Hallo();
// this yang dipanggil meruakan objek yang baru dibuat