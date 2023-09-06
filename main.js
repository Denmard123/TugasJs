const klik = document.getElementById("klik");

const hasil = document.getElementById("hasil"); 

const selesai = document.getElementById("selesai"); 

const reset = document.getElementById("reset"); 


let angka = 0; 

klik.addEventListener("click", function(){

	angka++;
	
	hasil.textContent = angka; 

});

selesai.addEventListener("click", function(){

alert("Hasil: " + angka);

Reset();

});

reset.addEventListener("click", function(){

angka = 0; 

hasil.textContent = angka;

})