function setTime() {
    const header = document.getElementById("header");
    header.textContent = new Date().toString();
  }
  setInterval(setTime, 1000);
  console.log("Program Finish");




function divideNumbers(dividend, divisor) {
    try {
      // Periksa apakah kedua input adalah angka
      if (typeof dividend !== 'number' || typeof divisor !== 'number') {
        throw new Error("Input harus berupa angka.");
      }
      
      // Periksa apakah divisor adalah nol
      if (divisor === 0) {
        throw new Error("Tidak bisa membagi dengan nol.");
      }
      
      // Jika tidak ada masalah, lakukan pembagian
      const result = dividend / divisor;
      console.log("Hasil pembagian:", result);
      return result;
  
    } catch (error) {
      // Tangkap dan tampilkan pesan kesalahan
      console.error("Error:", error.message);
    }
  }
  
  // Contoh penggunaan
  divideNumbers(10, 2);     // Output: Hasil pembagian: 5
  divideNumbers(10, 'a');   // Output: Error: Input harus berupa angka.
  divideNumbers(10, 0);     // Output: Error: Tidak bisa membagi dengan nol.
  
  
