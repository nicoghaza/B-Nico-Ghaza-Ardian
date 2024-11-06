// Mendeklarasikan variabel bertipe String
const namaDepan = "Nico";
const namaBelakang = "Ghaza Ardian";

// Menggabungkan string menggunakan template literal
const namaLengkap = `${namaDepan} ${namaBelakang}`;

// Menampilkan hasil di konsol
console.log("Nama Depan:", namaDepan);
console.log("Nama Belakang:", namaBelakang);
console.log("Nama Lengkap:", namaLengkap);




// Contoh Boolean
const isLoggedIn = true;
const hasPremiumAccount = false;

// Menampilkan data boolean di konsol
console.log("User login status:", isLoggedIn); // Output: User login status: true
console.log("User has premium account:", hasPremiumAccount); // Output: User has premium account: false



// Contoh operasi dasar
const num1 = 10;
const num2 = 5;

// Penjumlahan
const sum = num1 + num2;
console.log("Penjumlahan:", sum); // Output: Penjumlahan: 15



// Mendeklarasikan sebuah array
const buah = ["Apel", "Jeruk", "Mangga"];
console.log("Array Awal:", buah);

// Mengakses elemen array
console.log("Elemen pertama:", buah[0]);
console.log("Elemen kedua:", buah[1]);
console.log("Elemen ketiga:", buah[2]);

// Menambahkan elemen baru ke array
buah.push("Pisang");
console.log("Setelah menambah Pisang:", buah);



// Tipe Data: Object
const alamat = {
    jalan: "Jl. Situ Indah Cimanggis Depok",
    kota: "Depok",
    kodePos: 16451
  };
  console.log("Object:", alamat);