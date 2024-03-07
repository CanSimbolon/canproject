let uangUser;
let buahBuahan = ['Apel', 'Jeruk', 'Pisang', 'Mangga', 'Anggur', 'Melon'];
let hasilSpin = [];
const prompt = require('prompt-sync')()
function inputUang() {
    uangUser = Number(prompt("Masukkan jumlah uang Anda:"));
    console.log(`Uang Anda sekarang adalah ${uangUser}`);
}

function spin() {
    if (uangUser < 1000) {
        console.log('Uang Anda tidak cukup untuk spin. Silakan tambah uang Anda.');
        return false;
    } else {
        uangUser -= 1000;
        console.log(`Uang Anda setelah spin adalah ${uangUser}`);
        hasilSpin = [];
        for (let i = 0; i < 5; i++) {
            hasilSpin.push(buahBuahan[Math.floor(Math.random() * buahBuahan.length)]);
        }
        console.log(`Hasil Spin: ${hasilSpin}`);
        return true;
    }
}

function cekHasil() {
    let counts = {};
    for (let i = 0; i < hasilSpin.length; i++) {
        let num = hasilSpin[i];
        counts[num] = counts[num] ? counts[num] + 1 : 1;
    }

    for (let prop in counts) {
        if (counts[prop] >= 5) {
            uangUser = uangUser * 5;
            console.log(`Selamat! Anda mendapatkan 5 buah ${prop}! Uang Anda sekarang adalah ${uangUser}`);
            return;
        } else if (counts[prop] >= 4) {
            uangUser = uangUser * 4;
            console.log(`Selamat! Anda mendapatkan 4 buah ${prop}! Uang Anda sekarang adalah ${uangUser}`);
            return;
        } else if (counts[prop] >= 3) {
            uangUser = uangUser * 3;
            console.log(`Selamat! Anda mendapatkan 3 buah ${prop}! Uang Anda sekarang adalah ${uangUser}`);
            return;
        }
    }

    console.log('Maaf, Anda belum beruntung. Coba lagi!');
}

function main() {
    let isPlaying = true;
    // User memasukkan jumlah uang
    inputUang();

    while (isPlaying) {
        // User menekan tombol spin
        if (spin()) {
            // Cek hasil spin
            cekHasil();
        }

        // Check if the user's money is depleted
        if (uangUser <= 0) {
            console.log("Uang Anda habis. Silakan tambah uang Anda.");
            inputUang(); // Prompt the user to add more money
        }

        let playAgain = prompt("Apakah Anda ingin spin lagi? (Ya/Tidak)");
        if (playAgain.toLowerCase() !== "ya") {
            isPlaying = false;
        }
    }
}

main();
