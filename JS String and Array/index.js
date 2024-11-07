// Inisialisasi antrian awal
let queue = ["Ray", "Fiki", "Fadhilla", "Farah"];

// Tambah pembeli baru yaitu Nabila
queue.push("Nabila");

// Tambah dua pembeli baru yaitu Maza dan Elsi
queue.push("Maza", "Elsi");

// Antrian terakhir tidak jadi antri dan pulang
queue.pop();

// Antrian pertama sudah mendapatkan belanjaannya
queue.shift();

// Antrian kedua juga sudah mendapatkan belanjaannya
queue.shift();

// Pembeli baru yang nyerobot antrian yaitu Tomi
queue.unshift("Tomi");

// Menampilkan hasil akhir antrian
console.log("Antrian akhir:", queue);
