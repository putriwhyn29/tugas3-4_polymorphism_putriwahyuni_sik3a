class Kapal {
    constructor(nama, jenis, panjang, lebar) {
        this.nama = nama;
        this.jenis = jenis;
        this.panjang = panjang;
        this.lebar = lebar;
        this._status = "Berlabuh"; 
    }

    berlayar() {
        this._status = "Berlayar";
        return `Kapal ${this.nama} telah berlayar.`;
    }

    berhenti() {
        this._status = "Berlabuh";
        return `Kapal ${this.nama} telah berlabuh.`;
    }

    infoKapal() {
        return `Kapal ${this.nama} adalah jenis ${this.jenis} yang berukuran ${this.panjang} x ${this.lebar} meter. Status saat ini: ${this._status}.`;
    }
}

class KapalPenumpang extends Kapal {
    constructor(nama, jenis, panjang, lebar, kapasitasPenumpang) {
        super(nama, jenis, panjang, lebar);
        this.kapasitasPenumpang = kapasitasPenumpang;
    }

    naikPenumpang(jumlahPenumpang) {
        if (jumlahPenumpang > this.kapasitasPenumpang) {
            return `Penumpang melebihi kapasitas! Kapasitas maksimum: ${this.kapasitasPenumpang}.`;
        }
        this._status = "Penuh";
        return `Kapal ${this.nama} telah penuh dengan ${jumlahPenumpang} penumpang.`;
    }

    turunPenumpang(jumlahPenumpang) {
        this._status = "Kosong";
        return `${jumlahPenumpang} penumpang telah turun dari kapal ${this.nama}. Kapal sekarang kosong.`;
    }

    aksi() {
        return `Kapal ${this.nama} sedang memuat atau menurunkan penumpang.`;
    }

    infoKapal() {
        return `${super.infoKapal()} Kapal ini memiliki kapasitas ${this.kapasitasPenumpang} penumpang.`;
    }
}

class KapalKargo extends Kapal {
    constructor(nama, jenis, panjang, lebar, kapasitasMuatan) {
        super(nama, jenis, panjang, lebar);
        this.kapasitasMuatan = kapasitasMuatan;
    }

    aksi() {
        return `Kapal ${this.nama} sedang memuat atau membongkar kargo.`;
    }

    infoKapal() {
        return `${super.infoKapal()} Kapal ini dapat membawa muatan hingga ${this.kapasitasMuatan} ton.`;
    }
}

class KapalTanker extends Kapal {
    constructor(nama, jenis, panjang, lebar, kapasitasMinyak) {
        super(nama, jenis, panjang, lebar);
        this.kapasitasMinyak = kapasitasMinyak;
    }

    aksi() {
        return `Kapal ${this.nama} sedang mengisi atau mengosongkan minyak.`;
    }

    infoKapal() {
        return `${super.infoKapal()} Kapal ini dapat membawa ${this.kapasitasMinyak} liter minyak.`;
    }
}

class KapalLayar extends Kapal {
    constructor(nama, jenis, panjang, lebar, jumlahLayar) {
        super(nama, jenis, panjang, lebar);
        this.jumlahLayar = jumlahLayar;
    }

    aksi() {
        return `Kapal ${this.nama} sedang mengatur layarnya untuk berlayar.`;
    }

    infoKapal() {
        return `${super.infoKapal()} Kapal ini dilengkapi dengan ${this.jumlahLayar} layar.`;
    }
}

class KapalPatroli extends Kapal {
    constructor(nama, jenis, panjang, lebar, kecepatanMaks) {
        super(nama, jenis, panjang, lebar);
        this.kecepatanMaks = kecepatanMaks;
    }

    aksi() {
        return `Kapal ${this.nama} sedang melakukan patroli laut.`;
    }

    infoKapal() {
        return `${super.infoKapal()} Kapal patroli ini memiliki kecepatan maksimum ${this.kecepatanMaks} knot.`;
    }
}

class KapalSelam extends Kapal {
    constructor(nama, jenis, panjang, lebar, kedalamanMaks) {
        super(nama, jenis, panjang, lebar);
        this.kedalamanMaks = kedalamanMaks;
    }

    aksi() {
        return `Kapal ${this.nama} sedang menyelam atau muncul ke permukaan.`;
    }

    infoKapal() {
        return `${super.infoKapal()} Kapal selam ini dapat menyelam hingga kedalaman ${this.kedalamanMaks} meter.`;
    }
}

class KapalPenangkapIkan extends Kapal {
    constructor(nama, jenis, panjang, lebar, kapasitasIkan) {
        super(nama, jenis, panjang, lebar);
        this.kapasitasIkan = kapasitasIkan;
    }

    aksi() {
        return `Kapal ${this.nama} sedang menangkap ikan.`;
    }

    infoKapal() {
        return `${super.infoKapal()} Kapal ini memiliki kapasitas tangkapan ikan hingga ${this.kapasitasIkan} ton.`;
    }
}

class KapalFeri extends Kapal {
    constructor(nama, jenis, panjang, lebar, kapasitasKendaraan) {
        super(nama, jenis, panjang, lebar);
        this.kapasitasKendaraan = kapasitasKendaraan;
    }

    aksi() {
        return `Kapal ${this.nama} sedang mengangkut kendaraan.`;
    }

    infoKapal() {
        return `${super.infoKapal()} Kapal feri ini dapat membawa hingga ${this.kapasitasKendaraan} kendaraan.`;
    }
}

class KapalPenelitian extends Kapal {
    constructor(nama, jenis, panjang, lebar, peralatanPenelitian) {
        super(nama, jenis, panjang, lebar);
        this.peralatanPenelitian = peralatanPenelitian;
    }

    aksi() {
        return `Kapal ${this.nama} sedang melakukan penelitian dengan peralatan ${this.peralatanPenelitian}.`;
    }

    infoKapal() {
        return `${super.infoKapal()} Kapal ini dilengkapi dengan peralatan penelitian seperti ${this.peralatanPenelitian}.`;
    }
}

function tampilkanInfoKapal(kapal) {
    console.log(kapal.infoKapal());
    console.log(kapal.aksi());
}

const kapalPenumpang = new KapalPenumpang("Kapal Pesiar", "Penumpang", 300, 50, 1000);
const kapalKargo = new KapalKargo("Kapal Kargo Nusantara", "Kargo", 200, 30, 50000);
const kapalTanker = new KapalTanker("Kapal Tanker Bahari", "Tanker", 250, 40, 100000);
const kapalLayar = new KapalLayar("Kapal Layar Tradisional", "Layar", 60, 15, 3);
const kapalPatroli = new KapalPatroli("Kapal Patroli Maritim", "Patroli", 80, 15, 35);
const kapalSelam = new KapalSelam("Kapal Selam Siluman", "Selam", 70, 12, 500);
const kapalPenangkapIkan = new KapalPenangkapIkan("Kapal Nelayan Nusantara", "Penangkap Ikan", 100, 20, 150);
const kapalFeri = new KapalFeri("Feri Penyeberangan Sumatera", "Feri", 120, 25, 200);
const kapalPenelitian = new KapalPenelitian("Kapal Penelitian Samudera", "Penelitian", 100, 20, "sonar, kamera bawah laut, dan sensor lingkungan");

tampilkanInfoKapal(kapalPenumpang);
tampilkanInfoKapal(kapalKargo);
tampilkanInfoKapal(kapalTanker);
tampilkanInfoKapal(kapalLayar);
tampilkanInfoKapal(kapalPatroli);
tampilkanInfoKapal(kapalSelam);
tampilkanInfoKapal(kapalPenangkapIkan);
tampilkanInfoKapal(kapalFeri);
tampilkanInfoKapal(kapalPenelitian);
