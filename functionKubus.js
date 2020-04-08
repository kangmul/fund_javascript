var sisiKubusA = 8;
var sisiKubusB = 3;
var kubusA, 
	jumlahVolumeDuaKubus;

function hitungVolume(a){
	var volume;
	volume = a * a * a;
	return volume;
}

kubusA = hitungVolume(sisiKubusA);

console.log("volume kubus 8 cm : " + kubusA +" cm");

// menjumlahkan volume 2 buah kubus

function jumlahDuaKubus(kubusA, kubusB){
	return kubusA * kubusA * kubusA + kubusB * kubusB * kubusB;
}

jumlahVolumeDuaKubus = jumlahDuaKubus(sisiKubusA,sisiKubusB);

console.log("jumlah dua kubus : " + jumlahVolumeDuaKubus);

