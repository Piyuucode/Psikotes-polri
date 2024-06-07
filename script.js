const question = document.getElementById("question");
const options = document.getElementById("options");
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");
const submitButton = document.getElementById("submit"); // Assuming you have a button with the ID 'submit'

const totalQuestions = 100;
let currentQuestion = 0;
let score = 0;
let creditTeknis = 0;
let creditVerbal = 0;
let creditAbstrak = 0;

const questions = [
  {
    questionNumber: 1,
    questionType: "teknis",
    question: "1. 21 + 27 : 4 - 3 x 5 =",
    options: ["9", "12.75", "32", "27.5", "45"],
    answer: 4,
  },

  {
    questionNumber: 2,
    questionType: "Teknis",
    question:
      "2. -27 , 1 , -19 , 2 , -11 , 4 , -3 , 8 , 5 , 16 , 13 , 32 , 21 , 64, ..., ...",
    options: [" 28, 128", " 29, 129", "29 , 128", " 128, 29", "129, 28"],
    answer: 2,
  },

  {
    questionNumber: 3,
    questionType: "verbal",
    question: "3. Pilihlah dua kata yang memiliki makna paling dekat (SINONIM)",
    options: ["muram", "silau", "gelap", "gerah", "kelam"],
    answer: [2, 4],
  },

  {
    questionNumber: 4,
    questionType: "Abstrak",
    question: '4. <img src="88.jpg">',
    options: ["a", "b", "c", "d", "e"],
    answer: 2,
  },

  {
    questionNumber: 5,
    questionType: "verbal",
    question: "5. Pilihlah dua kata yang memiliki makna paling dekat (SINONIM)",
    options: ["kendala", "gundah", "dilema", "gulana", "resah"],
    answer: [1, 4],
  },

  {
    questionNumber: 6,
    questionType: "Teknis",
    question:
      "6. 27 , 12 , 24 , 15 , 21 , 16 , 18 , ... , 15 , 21 , 12 , 22 , ... , 24 , 6 , 27 , 3 , 28",
    options: [" 18, 10", "18 , 9", "9, 10", "9, 18", "10, 18"],
    answer: 1,
  },

  {
    questionNumber: 7,
    questionType: "Abstrak",
    question: '7. <img src="89.jpg">',
    options: ["a", "b", "c", "d", "e"],
    answer: 1,
  },

  {
    questionNumber: 8,
    questionType: "Teknis",
    question: "8. 36 : 9 – 3 x 13 =",
    options: ["-35", "-21", "14", "39", "42"],
    answer: 3,
  },

  {
    questionNumber: 9,
    questionType: "verbal",
    question: "9. Pilihlah dua kata yang memiliki makna paling dekat (SINONIM)",
    options: ["inti", "maksud", "substansi", "fakta", "isi"],
    answer: [0, 2],
  },

  {
    questionNumber: 10,
    questionType: "verbal",
    question:
      "10. Pilihlah dua kata yang memiliki makna paling dekat (SINONIM)",
    options: ["selaras", "adaptasi", "perencanaan", "penyesuaian", "perubahan"],
    answer: [1, 3],
  },

  {
    questionNumber: 11,
    questionType: "Teknis",
    question: "11. 21 + 27 : 4 - 3 x 5 =",
    options: ["12.75", "21", "27.50", "44", "52.25"],
    answer: 0,
  },

  {
    questionNumber: 12,
    questionType: "Abstrak",
    question: '12. <img src="90.jpg">',
    options: ["a", "b", "c", "d", "e"],
    answer: 2,
  },

  {
    questionNumber: 13,
    questionType: "verbal",
    question:
      "13. Pilihlah dua kata yang memiliki makna paling dekat (SINONIM)",
    options: ["tanda", "perilaku", "kantor", "karakter", "marka"],
    answer: [0, 4],
  },

  {
    questionNumber: 14,
    questionType: "Teknis",
    question:
      "14. 4 , 32 , 6 , 8 , 29 , 7 , 12 , 26 , 9 , 16 , 23 , 12 , 20 ,20 , 16 , ... , 17 , ...",
    options: ["23, 21", "24, 21", "24, 22", "24 , 21 ", "23, 22"],
    answer: 3,
  },

  {
    questionNumber: 15,
    questionType: "Abstrak",
    question: '15. <img src="91.jpg">',
    options: ["a", "b", "c", "d", "e"],
    answer: 3,
  },

  {
    questionNumber: 16,
    questionType: "verbal",
    question:
      "16. Pilihlah dua kata yang memiliki makna paling dekat (SINONIM)",
    options: ["kesepakatan", "konversi", "kemauan", "konvensi", "kehadiran"],
    answer: [0, 3],
  },

  {
    questionNumber: 17,
    questionType: "Teknis",
    question: "17. 36 : 9 – 3 x 13 =",
    options: ["-35", "-14", "-5", "15", "28"],
    answer: 0,
  },

  {
    questionNumber: 18,
    questionType: "verbal",
    question:
      "18. Pilihlah dua kata yang memiliki makna paling dekat (SINONIM)",
    options: ["kontestan", "kandidat", "calon", "juara", "kredensal"],
    answer: [1, 2],
  },

  {
    questionNumber: 19,
    questionType: "verbal",
    question:
      "19. Pilihlah dua kata yang memiliki makna paling dekat (ANTONIM)",
    options: ["spesial", "biasa", "generik", "paten", "istimewa"],
    answer: [0, 2],
  },

  {
    questionNumber: 20,
    questionType: "Teknis",
    question:
      "20. 5 , 51 , 102 , 18 , 45 , 90 , 31 , 39 , 78 , 44 , 33 , 66 , 57, 27 , 54 , ... , ... , 42",
    options: ["70, 22", "68, 22", "70 , 21", "22, 21", "68, 22"],
    answer: 2,
  },

  {
    questionNumber: 21,
    questionType: "verbal",
    question:
      "21. Pilihlah dua kata yang memiliki makna paling dekat (ANTONIM)",
    options: ["konsentrasi", "labil", "spora", "fluktuatif", "stabil"],
    answer: [3, 4],
  },

  {
    questionNumber: 22,
    questionType: "Teknis",
    question:
      "22. Jika kata SEMPAT menjadi QHLNDS, maka BERITA akan ditulis...",
    options: ["ZQHGWZ", "ZHQHZW", "ZQHHZW", "ZWHQWZ", "ZHQGWZ"],
    answer: 4,
  },

  {
    questionNumber: 23,
    questionType: "Abstrak",
    question: '23. <img src="92.jpg">',
    options: ["1", "2", "3", "4", "5", "6", "7", "8"],
    answer: 7,
  },

  {
    questionNumber: 24,
    questionType: "Teknis",
    question: '24. <img src="10.jpg">',
    options: ["-2", "-4", "3", "4", "6"],
    answer: 0,
  },

  {
    questionNumber: 25,
    questionType: "verbal",
    question:
      "25. Pilihlah dua kata yang memiliki makna paling dekat (ANTONIM)",
    options: ["artifisial", "imitasi", "batas", "autentik", "limit"],
    answer: [1, 3],
  },

  {
    questionNumber: 26,
    questionType: "Teknis",
    question: '26. <img src="11.jpg">',
    options: ["18", "22", "26", "28", "30"],
    answer: 2,
  },

  {
    questionNumber: 27,
    questionType: "verbal",
    question:
      "27. Pilihlah dua kata yang memiliki makna paling dekat (ANTONIM)",
    options: ["absolut", "lembap", "ragu", "nisbi", "panas"],
    answer: [0, 3],
  },

  {
    questionNumber: 28,
    questionType: "verbal",
    question:
      "28. Pilihlah dua kata yang memiliki makna paling dekat (ANTONIM)",
    options: ["sekarang", "moderat", "nanti", "konservatif", "kuno"],
    answer: [1, 3],
  },

  {
    questionNumber: 29,
    questionType: "Abstrak",
    question: '29. <img src="93.jpg">',
    options: ["a", "b", "c", "d", "e"],
    answer: 1,
  },

  {
    questionNumber: 30,
    questionType: "Teknis",
    question: '30. <img src="12.jpg">',
    options: ["36", "44", "68", "72", "84"],
    answer: 4,
  },

  {
    questionNumber: 31,
    questionType: "verbal",
    question:
      "31. Pilihlah dua kata yang memiliki makna paling dekat (ANTONIM)",
    options: ["diam", "komponen", "terbang", "sementara", "permanen"],
    answer: [3, 4],
  },

  {
    questionNumber: 32,
    questionType: "Teknis",
    question:
      "32. Jarak kota A ke kota B dalam peta adalah 4,5cm. Jika skala peta tersebut adalah 1: 2.000.000, maka jarak sebenarnya adalah...",
    options: ["90 hm", "900 km", "9.000 dam", "90.000 dm", "900.000 m"],
    answer: 2,
  },

  {
    questionNumber: 33,
    questionType: "Abstrak",
    question: '33. <img src="94.jpg">',
    options: ["a", "b", "c", "d", "e"],
    answer: 4,
  },

  {
    questionNumber: 34,
    questionType: "verbal",
    question:
      "34. Pilihlah dua kata yang memiliki makna paling dekat (ANTONIM)",
    options: ["baik", "kualitas", "salah", "kuantitas", "imunitas"],
    answer: [0, 3],
  },

  {
    questionNumber: 35,
    questionType: "verbal",
    question: "35. Benang – kain – baju =",
    options: [
      "Sabun – CPO – sawit",
      " Padi – beras – nasi",
      "Terigu – mie – baso",
      "Daun kelapa – ketupat - sayur",
      "Kelapa – rending - santan",
    ],
    answer: 1,
  },

  {
    questionNumber: 36,
    questionType: "Teknis",
    question:
      "36. Jarak kota C ke kota D adalah 100 km. Jika Andi hendak menggambar peta dengan skala 1: 1.250.000, maka jarak kota C ke kota D dalam peta adalah...cm",
    options: ["8 mm", "8 cm", " 2 cm", "16 mm", "4 dm"],
    answer: 1,
  },

  {
    questionNumber: 37,
    questionType: "Teknis",
    question:
      "37. Jarak antara kota A ke kota B adalah 80 km. Jika pada peta digambar 5 mm, berapakah skala peta tersebut ?",
    options: [
      "1 : 1.600",
      "1 : 16.000",
      "1 : 160.000",
      "1 : 1.600.000",
      "1 : 16.000.000",
    ],
    answer: 4,
  },

  {
    questionNumber: 38,
    questionType: "verbal",
    question: "38. Pasar – toko – warung =",
    options: [
      "Ojek – taksi – bus ",
      "Obeng – tang – kunci",
      "Cicak – buaya – kadal",
      "Bus – kereta – kapa",
      "Elang – merpati - pipit",
    ],
    answer: 4,
  },

  {
    questionNumber: 39,
    questionType: "Abstrak",
    question: '39. <img src="95.jpg">',
    options: ["a", "b", "c", "d", "e"],
    answer: 1,
  },

  {
    questionNumber: 40,
    questionType: "verbal",
    question: "40. Ulama – pendeta – pastur =",
    options: [
      "Waktu – siang – malam",
      "Tamtama – bintara – perwira ",
      "Piring – sendok – garpu",
      "Keju – coklat – martabak ",
      "Telur – berudu – katak",
    ],
    answer: 2,
  },

  {
    questionNumber: 41,
    questionType: "Teknis",
    question: "41. 26 km + 1500 m – 24hm + 3800 dam =",
    options: ["63,1 km", "6310 hm", "631 km", "6.310 dam", "63.100 dm"],
    answer: 4,
  },

  {
    questionNumber: 42,
    questionType: "Abstrak",
    question: '42. <img src="96.jpg">',
    options: ["a", "b", "c", "d", "e"],
    answer: 0,
  },

  {
    questionNumber: 43,
    questionType: "verbal",
    question: "43. Kenyang - makan – lapar =",
    options: [
      "Minum – segar - haus",
      "gatal - garuk - lecet",
      "kesal - marah - lega",
      "segar - mandi - gerah",
      "ujian - baik - senang",
    ],
    answer: 3,
  },

  {
    questionNumber: 44,
    questionType: "Teknis",
    question:
      "44. Sebuah kendaraan mengangkut 1.25 ton beras, 4 kwintal beras, 80 kg pupuk, 150 ons gula dan 160 liter minyak tanah. Jika berat jenis minyak tanah adalah 0.8, berapakah berat total muatan kendaraan tersebut ?",
    options: ["1870 kg", "1871 kg", "1872 kg", "1873 kg", "1874 kg"],
    answer: 3,
  },

  {
    questionNumber: 45,
    questionType: "verbal",
    question: "45. Rumah : teras = ... : ...",
    options: ["Manusia", "Kereta", "Kepala", "Stasiun", "Wajah"],
    answer: [0, 4],
  },

  {
    questionNumber: 46,
    questionType: "Abstrak",
    question: '46. <img src="97.jpg">',
    options: ["a", "b", "c", "d", "e"],
    answer: 4,
  },

  {
    questionNumber: 47,
    questionType: "verbal",
    question: "47. Air : ... = Api : ...",
    options: ["Dalam", "Basah", "Terang", "Panas", "Terbakar"],
    answer: [1, 4],
  },

  {
    questionNumber: 48,
    questionType: "verbal",
    question: "48. ... : kue = Batu : ... ",
    options: ["Susu", "Terigu", "Bata", "Semen", "Rumah"],
    answer: [1, 3],
  },

  {
    questionNumber: 49,
    questionType: "Teknis",
    question: "49. 0,8 km² + 12 hm² + 17,5 dam² + 850 m² = ...ha",
    options: ["92,26", "30,25", "922,6", "302,5", "9226"],
    answer: 0,
  },

  {
    questionNumber: 50,
    questionType: "verbal",
    question: "50. Kiri : merah = ... : ...",
    options: ["Kanan", "Hijau", "Kuning", "Biru", "Putih"],
    answer: [0, 1],
  },

  {
    questionNumber: 51,
    questionType: "Teknis",
    question:
      "51. Jika waktu selama 1,25 tahun, 3 smester, 4 caturwulan, dan 2 triwulan digunakan untuk menanam cabai yang usia tanamnya 5 bulan. Berapa kali masa tanam dapat dilakukan ?",
    options: ["10", "11", "12", "13", "14"],
    answer: 1,
  },

  {
    questionNumber: 52,
    questionType: "Teknis",
    question: "52. 0,8 m³ + 245 dm³ + 55000 cm³ = ... Liter",
    options: ["110", "875", "1100", "5753", "8750"],
    answer: 2,
  },

  {
    questionNumber: 53,
    questionType: "verbal",
    question: "53. Carilah satu kata yang paling jauh.",
    options: ["Berdesir", "Gemuruh", "Sepoi-sepoi", "Berhembus", "Lantang"],
    answer: 4,
  },

  {
    questionNumber: 54,
    questionType: "verbal",
    question: "54. Carilah satu kata yang paling jauh.",
    options: ["Kedai", "Warung", "Agen", "Toko", "Kios"],
    answer: 2,
  },

  {
    questionNumber: 55,
    questionType: "Abstrak",
    question: '55. <img src="98.jpg">',
    options: ["a", "b", "c", "d", "e"],
    answer: 3,
  },

  {
    questionNumber: 56,
    questionType: "verbal",
    question: "56. Carilah satu kata yang paling jauh.",
    options: ["Kipas angin ", "Setrika", "Lemari es", "Pompa air", "AC"],
    answer: 1,
  },

  {
    questionNumber: 57,
    questionType: "Teknis",
    question:
      "57. Sebuah bus biasanya menempuh jarak 150 km dalam waktu 4,5 jam. Jika dengan kecepatan yang sama hendak menempuh jarak 210 km, berapa lama waktu yang diperlukan ?",
    options: [
      "6 jam 10 menit",
      "6 jam 12 menit",
      "6 jam 15 menit",
      "6 jam 18 menit",
      "6 jam 21 menit",
    ],
    answer: 2,
  },

  {
    questionNumber: 58,
    questionType: "verbal",
    question: "58. Carilah satu kata yang paling jauh.",
    options: ["Terbesar", "Terlihat", "Tersebar", "Terantuk", "Terpukul"],
    answer: 0,
  },

  {
    questionNumber: 59,
    questionType: "Verbal",
    question:
      "59. Jika Kardi makan kacang maka Beni makan bubur. Jika Beni tak makan bubur maka Irwan makan iga bakar.Kenyataannya Beni makan bakso, jadi……",
    options: [
      "Kardi makan iga bakar.",
      "Kardi makan kacang.",
      "Beni juga makan bubur.",
      "Irwan makan iga bakar",
      "Irwan tak makan iga bakar.",
    ],
    answer: 3,
  },

  {
    questionNumber: 60,
    questionType: "Teknis",
    question: "60. SUKAR, ARSUK, UKARS, RSUKA, ...",
    options: ["KASRU", "RAKUS", "KASUR", "RUSAK", "KARSU"],
    answer: 3,
  },

  {
    questionNumber: 61,
    questionType: "verbal",
    question: "61. Carilah satu kata yang paling jauh.",
    options: ["Rokan", "Mahakam", "Siak", "Kampar", "Batanghari"],
    answer: 1,
  },

  {
    questionNumber: 62,
    questionType: "Teknis",
    question:
      "62. Pukul 15.00 Adi dari Jakarta berkendara menuju Tegal dengan kecepatan 48 km/jam. Jika pukul 15.20 Budi hendak menyusul Budi dengan kecepatan 60 km/jam, pukul berapakah Adi akan tersusul Budi ?",
    options: ["16.40", "16.48", "16.56", "17.02", "17.08"],
    answer: 4,
  },

  {
    questionNumber: 63,
    questionType: "verbal",
    question: "63. Carilah satu kata yang paling jauh.",
    options: ["Menari", "Memakai", "Memahami", "Merogoh", "Menuai"],
    answer: 2,
  },

  {
    questionNumber: 64,
    questionType: "Teknis",
    question: "64. 3,25 gros + 2,5 kodi + 6,5 lusin =",
    options: ["596", "597", "598", "599", "570"],
    answer: 0,
  },

  {
    questionNumber: 65,
    questionType: "verbal",
    question: "65. Carilah satu kata yang paling jauh.",
    options: ["Nyamuk", "Lalat", "Capung", "Laron", "Kupu-kupu"],
    answer: 3,
  },

  {
    questionNumber: 66,
    questionType: "verbal",
    question:
      "66. Carilah satu kata sejenis atau himpunan Durian – nangka – cempedak – timbul ",
    options: ["Rambutan", "Salak", "Sukun", "Sirsak", "Nanas"],
    answer: 2,
  },
  {
    questionNumber: 67,
    questionType: "Verbal",
    question:
      "67. Sebagian A yang B adalah X, B yang c adalah Y, sedangkan C yang A adalah Z. Jika X yang Y dan Z adalah N dan B yang tidak Z adalah P maka…",
    options: [
      "Sebagian Z adalah N bukan A",
      "N adalah A adalah C",
      "Sebagian X adalah B adalah N.",
      "Y adalah A adalah B.",
      "Sebagian C adalah C bukan Y",
    ],
    answer: 1,
  },

  {
    questionNumber: 68,
    questionType: "verbal",
    question:
      "68. Carilah satu kata sejenis atau himpunan Hotel – losmen – motel - penginapan",
    options: ["Pondok", "Villa", "Pendopo", "Bungalau", "Resort"],
    answer: 4,
  },

  {
    questionNumber: 69,
    questionType: "Teknis",
    question:
      "69. Sueb dan Beus bersekolah di sekolah yang sama. Jarak rumah Sueb 2,5 km sedangkan jarak jarak rumah Beus ke sekolah 3,5 km. Biasanya Sueb berjalan kaki dengan kecepatan 4 km/jam sedangkan Beus naik sepeda dengan kecepatan 7 km/jam. Jika Sueb berangkat ke Sekolah pukul 06.45, pukul berapakah Beus harus berangkat agar tiba bersamaan dengan Sueb ?",
    options: ["06.35", "06.40", "06.50", "06.55", "07.00"],
    answer: 0,
  },

  {
    questionNumber: 70,
    questionType: "verbal",
    question:
      "70. Carilah satu kata sejenis atau himpunan Kadal – cicak – buaya – komodo",
    options: ["Anoa", "Penyu", "Yaki", "Tarsius", "Lemur"],
    answer: 1,
  },

  {
    questionNumber: 71,
    questionType: "Teknis",
    question:
      "71. Sebatang kayu sepanjang 130 cm dipotong menjadi dua bagian dimana bagian terpanjang 60% lebih panjang dibanding bagiang pendek. Berapa centimeterkah bagian terpanjang ?",
    options: ["70", "75", "80", "85", "90"],
    answer: 2,
  },

  {
    questionNumber: 72,
    questionType: "verbal",
    question:
      "72. Carilah satu kata sejenis atau himpunan Galunggung – Pangrango – Ceremai – Papandayan ",
    options: ["Merapi", "Lawu", "Krakatau", "Raung", "Tampomas"],
    answer: 4,
  },

  {
    questionNumber: 73,
    questionType: "Teknis",
    question: "73. 2 milenium - 14 windu + 13 lustrum + 4 abad + 4 dasawarsa =",
    options: ["1815", "1816", "1817", "1818", "1819"],
    answer: 2,
  },

  {
    questionNumber: 74,
    questionType: "verbal",
    question:
      "74. Carilah satu kata sejenis atau himpunan Jepang – Belanda – Inggris – Saudi Arabia",
    options: ["Penjajah", "Republik", "Presidensial", "Monarki", "Parlementer"],
    answer: 3,
  },

  {
    questionNumber: 75,
    questionType: "teknis",
    question:
      "75. Usia ayah dan ibu terpaut 6 tahun dan setara 15% usia ibu. Jika ibu lebih tua dari ayah, berapakah jumlah usia keduanya ?",
    options: ["74 tahun", "75 tahun", "76 tahun", "77 tahun", "78 tahun"],
    answer: 0,
  },

  {
    questionNumber: 76,
    questionType: "Verbal",
    question:
      "76. Jika hujan deras pasti didahului mendung namun jika mendung tidak selalu hujan. Jika hari hujan biasanya ada pelangi. Kenyataanya hari ini tidak ada pelangi. Kesimpulannya adalah….",
    options: [
      "Hari ini tidak hujan deras.",
      "Hari ini tidak mendung.",
      "Hari ini mungkin mendung",
      "Hari ini hujan deras.",
      "Hari ini mendung.",
    ],
    answer: 2,
  },

  {
    questionNumber: 77,
    questionType: "Teknis",
    question:
      "77. Sebuah tas dijual seharga Rp 270.000,-. Dari harga tersebut si pedagang sudah mengantungi keuntungan sebesar 35%. Berapakah modal pembelian tas tersebut ?",
    options: [
      "Rp 180.000,-",
      "Rp 190.000,-",
      "Rp 200.000,-",
      "Rp 210.000,-",
      "Rp 220.000,-",
    ],
    answer: 2,
  },

  {
    questionNumber: 78,
    questionType: "Verbal",
    question:
      "78. Carilah satu kata sejenis atau himpunan Minyak goreng – sabun – margarine - lipstik",
    options: ["Bio diesel", "Yoghurt", "Susu", "Pelumas", "Keju"],
    answer: 0,
  },

  {
    questionNumber: 79,
    questionType: "Verbal",
    question:
      "79. Di wilayah Jabodetabek hanya Tangerang dan Bekasi yang berudara panas dan terasa gerah. Rumah Rima berada di wilayah Jabodetabek dan terasa gerah. Jadi…",
    options: [
      "Rumah Rima berada di di Tangerang.",
      "Rumah Rima berada di di Bekasi.",
      "Rumah Rima kemungkinan berada di di Tangerang.",
      "Rumah Rima berudara panas",
      "Rumah Rima berada di Jabodetabek.",
    ],
    answer: 4,
  },

  {
    questionNumber: 80,
    questionType: "Teknis",
    question: "80. 4 gros + 6 kodi + 2 lusin =",
    options: ["5 gros", "37 kodi", "38 kodi", "50 lusin", "72 lusin"],
    answer: 0,
  },

  {
    questionNumber: 81,
    questionType: "Teknis",
    question:
      "81. Shinta hendak membeli sebuah tas dengan banderol harga Rp 400.000,- diberi label potongan harga 40% + 10%, dan memiliki kupon potongan sebesar Rp 50.000,-, berapakah Shinta harus mengeluarkan uang untuk membeli tas tersebut?",
    options: [
      "Rp 150.000,-",
      "Rp 166.000,-",
      "Rp 175.000,-",
      "Rp 194.000,-",
      "Rp 198.000,-",
    ],
    answer: 1,
  },

  {
    questionNumber: 82,
    questionType: "Verbal",
    question:
      "82. Carilah satu kata sejenis atau himpunan Meraih – merengkuh – mengumpulkan – mengikat ",
    options: ["Menabur", "Menanam", "Memberi", "Merasa", "Menampung"],
    answer: 4,
  },

  {
    questionNumber: 83,
    questionType: "Verbal",
    question:
      "83. Ada enam kota dalam satu ruas jalan A, B, C, D, dan E yang jarak antar kota dari kota sebelumnya sama. Jarak terjauh adalah A dan C, jarak A ke F dua kali jarak A ke B dan empat kali jara D ke F. Jika jarak E ke D sama dengan jarak D ke C, tempat yang berada tepat di tengah-tengah adalah…..",
    options: [
      "Antara kota A dan F",
      "Antara kota E dan A",
      "Antara kota B dan D",
      "Antara kota D dan C",
      "Antara kota F dan A",
    ],
    answer: 2,
  },

  {
    questionNumber: 84,
    questionType: "Teknis",
    question:
      "84. 0,6 milenium - 3 windu + 6 lustrum + 1,2 abad - 15 dasawarsa = ...windu.",
    options: ["71", "72", "73", "74", "75"],
    answer: 1,
  },

  {
    questionNumber: 85,
    questionType: "Verbal",
    question:
      "85. Bila hendak naik kereta api harus membayar kontan atau memiliki tiket langganan. Ari naik kereta api padahal tidak membayar kontan. Jadi…",
    options: [
      "Ari tidak memiliki uang kontan.",
      "Ari membayar uang kontan setiap naik kereta api.",
      "Ari memiliki tiket langganan.",
      "Ari tidak perlu membayar untuk naik kereta api.",
      "Ari tidak memiliki tiket langganan.",
    ],
    answer: 2,
  },

  {
    questionNumber: 86,
    questionType: "Abstrak",
    question: '86. <img src="99.jpg">',
    options: ["a", "b", "c", "d", "e"],
    answer: 2,
  },

  {
    questionNumber: 87,
    questionType: "Teknis",
    question:
      "87. Gani membayar Rp 696.000,- satu set furniture yang diberikan potongan harga 20% + 20%. Jika harga tersebut juga Karen Gani memiliki kupon potongan harga sebesar Rp 200.000,-, berapakah banderol furniture tersebut ?",
    options: [
      "Rp 1.200.000,-",
      "Rp 1.250.000,-",
      "Rp 1.300.000,-",
      "Rp 1.350.000,-",
      "Rp 1.400.000,-",
    ],
    answer: 4,
  },

  {
    questionNumber: 88,
    questionType: "Verbal",
    question:
      "88. Semua yang berkumis tebal adalah polisi. Sebagian polisi tidak berkumis, Andri berkumis tebal dan pendek. Jadi…",
    options: [
      "Tidak ada Polisi yang tidak berkumis tebal.",
      "Andri bukan polisi karena bertubuh pendek.",
      "Tidak ada Polisi yang berkumis tebal.",
      "Andri adalah polisi bertubuh pendek.",
      "Andri bukan polisi meskipun berkumis tebal.",
    ],
    answer: 3,
  },

  {
    questionNumber: 89,
    questionType: "Teknis",
    question:
      "89. Sebatang kayu sepanjang 240 cm dipotong menjadi dua bagian dimana bagian terpendek 60% dibanding bagiang terpanjang. Berapa centimeterkah bagian terpendek ?",
    options: ["70", "75", "80", "90", "100"],
    answer: 3,
  },

  {
    questionNumber: 90,
    questionType: "Verbal",
    question:
      "90. Semua polisi bertubuh tiggi. Sebagian polisi senang bermain catur. Jadi….",
    options: [
      "Sebagian yang senang bermain catur bertubuh tinggi.",
      "Orang yang bertubuh tinggi pasti senang bermain catur.",
      "Antara polisi dan main catur tidak memiliki hubungan",
      "Orang yang bertubuh tinggi tidak senang bermain catur.",
      "Sebagian yang bertubuh tinggi senang bermain catur.",
    ],
    answer: 4,
  },

  {
    questionNumber: 91,
    questionType: "Teknis",
    question:
      "91. Usia paman 50% lebih tua dibanding Ani sedangkan usia kakak 2 tahun lebih tuan dari Ani. Jika jumlah usia mereka 65 tahun, berapakah usia kakak ?",
    options: ["18 tahun", "19 tahun", "20 tahun", "21 tahun", "22 tahun"],
    answer: 2,
  },

  {
    questionNumber: 92,
    questionType: "Teknis",
    question: '92. <img src="32.jpg">',
    options: ["18O", "18P", "30P", "28G", "30G"],
    answer: [0, 4],
  },

  {
    questionNumber: 93,
    questionType: "Verbal",
    question:
      "93. Jika kondisi awak kereta api sehat dan rangkaian kereta api bagus, maka kereta tiba di tujuan sesuai jadwal. Jika kereta tiba di tujuan sesuai jadwal maka penumpang puas. Jika penumpang puas maka jumlah penumpang bus umum akan berkurang. Ternyata jumlah penumpang bus umum bertambah banyak.",
    options: [
      "Penumpang kereta api naik kereta yang rangkaiannya bagus namun awaknya tidak sehat.",
      "Penumpang kereta api naik kereta yang rangkaiannya tidak bagus meskipun awaknya sehat.",
      "Penumpang kereta api naik kereta yang rangkaiannya bagus dan awaknya sehat.",
      "Penumpang kereta api naik kereta yang rangkaiannya tidak bagus dan awaknya tidak sehat.",
      "Penumpang kereta api naik kereta yang rangkaiannya tidak bagus atau awaknya tidak sehat.",
    ],
    answer: 4,
  },

  {
    questionNumber: 94,
    questionType: "Abstrak",
    question: '94. <img src="100.jpg">',
    options: ["a", "b", "c", "d", "e"],
    answer: 1,
  },

  {
    questionNumber: 95,
    questionType: "Teknis",
    question:
      "95. Paman memiliki uang X rupiah yang dibagikan kepada N keponakannya masing-masing mendapat Rp 60.000,-. Jika dua anak tetangga ikut mendapat bagian maka masing-masing mendapat Rp 45.000,-. Berapakah uang yang dimiliki Paman ?",
    options: [
      "Rp 350.000,-",
      "Rp 360.000,-",
      " Rp 390.000,-",
      "Rp 450.000,-",
      "Rp 480.000,-",
    ],
    answer: 1,
  },

  {
    questionNumber: 96,
    questionType: "Verbal",
    question:
      "96. Adi adalah adik Budi . Chaca adalah kaka Adi yang lebih tua dari Budi. Dudi lebih tua dari Budi meskipun tidak leih tua dari Edi. Siapakah anak yang tepat pertengahan ?",
    options: ["Adi", "Budi", "Chaca", "Dudi", "Edi"],
    answer: 1,
  },

  {
    questionNumber: 97,
    questionType: "Teknis",
    question: '97. <img src="34.jpg">',
    options: ["8", "12", "14", "16", "18"],
    answer: 2,
  },

  {
    questionNumber: 98,
    questionType: "Verbal",
    question:
      "98. Amir hanya mau minum obat jika sudah dibelikan makanan kesukaannya. Jika sudah punya permen karet, Amir bisa melupakan roti keju. Roti keju lebih disukai Amir ketimbang singkong bakar namun sama sukanya dengan bala-bala. Es duren lebih disukai amir dibanding bala-bala namun tidak sesuka permen karet. Jika hari ini Amir sudah minum obat maka amir sudah dibelikan…..",
    options: [
      "Permen karet.",
      "Roti keju.",
      "Bala-bala",
      "Es duren.",
      "Singkong bakar.",
    ],
    answer: 0,
  },

  {
    questionNumber: 99,
    questionType: "Teknis",
    question: "99. 30% dari 180 adalah ...% dari 300",
    options: ["15", "18", "20", "21", "22"],
    answer: 1,
  },

  {
    questionNumber: 100,
    questionType: "Teknis",
    question:
      "100. Tinggi rata-rata 45 orang siswa adalah 167 cm. Jika 6 orang tertinggi tidak diikut sertakan maka rata-rata sisanya adalah 165 cm. Berapakah rata-rata tinggi enam orang tersebut ?",
    options: ["172", "174", "175", "178", "180"],
    answer: 4,
  },
];

const answers = [];

const shortcuts = document.querySelectorAll("#questionShortcuts li a");

function displayQuestion() {
  question.innerHTML = `<h2>${questions[currentQuestion].question}</h2>`;
  options.innerHTML = "";

  questions[currentQuestion].options.forEach((option, index) => {
    const li = document.createElement("li");
    li.innerHTML = `<input type="checkbox" name="option" value="${index}" id="option${index}"><label for="option${index}">${option}</label>`;
    options.appendChild(li);
  });

  const selectedAnswers = answers[currentQuestion];
  if (selectedAnswers !== undefined) {
    selectedAnswers.forEach((selectedAnswer) => {
      const checkbox = document.getElementById(`option${selectedAnswer}`);
      checkbox.checked = true;
    });
  }
}

function submitAnswers() {
  let score = 0;
  let scoreTeknis = 0;
  let scoreVerbal = 0;
  let scoreAbstrak = 0;

  for (let i = 0; i < totalQuestions; i++) {
    if (answers[i] === undefined) {
      alert("Jawab dulu semua pertanyaan!!.");
      return;
    }
  }

  for (let i = 0; i < totalQuestions; i++) {
    if (parseInt(answers[i]) === questions[i].answer) {
      score++;
    }

    // Check the question type and update credit accordingly
    if (questions[i].questionType === "Teknis") {
      scoreTeknis++;
    } else if (questions[i].questionType === "Verbal") {
      scoreVerbal++;
    } else if (questions[i].questionType === "Abstrak") {
      scoreAbstrak++;
    }
  }

  let persentaseBenar = (score / totalQuestions) * 100;

  // Menyesuaikan logika untuk perhitungan credit berdasarkan skor
  let creditTeknis, creditVerbal, creditAbstrak;

  if (persentaseBenar >= 79) {
    creditTeknis = 4;
    creditVerbal = 4;
    creditAbstrak = 4;
  } else if (persentaseBenar >= 66) {
    creditTeknis = 3;
    creditVerbal = 3;
    creditAbstrak = 3;
  } else if (persentaseBenar >= 56) {
    creditTeknis = 2;
    creditVerbal = 2;
    creditAbstrak = 2;
  } else if (persentaseBenar >= 46) {
    creditTeknis = 1;
    creditVerbal = 1;
    creditAbstrak = 1;
  } else {
    creditTeknis = 0;
    creditVerbal = 0;
    creditAbstrak = 0;
  }

  // Menghitung total_credit dan mengirimkan nilainya
  const total_credit =
    parseFloat(creditTeknis) +
    parseFloat(creditVerbal) +
    parseFloat(creditAbstrak);

  // Mengirimkan nilai score beserta total_credit
  const formData = new FormData();
  formData.append("creditTeknis", creditTeknis);
  formData.append("creditVerbal", creditVerbal);
  formData.append("creditAbstrak", creditAbstrak);

  fetch("submit-answer.php", {
    method: "POST",
    body: formData,
  })
    .then((response) => response.text())
    .then((data) => {
      alert(`Jawaban anda telah tersimpan, good luck!`);

      window.location.href = "welcome-kepribadian.html";
      console.log(data); // Menampilkan pesan balasan dari skrip PHP
      // Melakukan tindakan lain setelah data disimpan, seperti redirect
    })
    .catch((error) => console.error("Error:", error));
}

// Assuming you have a form with an ID 'answersForm'
const answersForm = new FormData();
answersForm.append("answers", JSON.stringify(answers));

// Submit the answers to the server-side script (replace 'submit_answers.php' with your script)
fetch("submit-answers.php", {
  method: "POST",
  body: answersForm,
})
  .then((response) => response.json())
  .then((data) => {
    // Handle the response from the server (e.g., show a success message)
    console.log(data);
  })
  .catch((error) => console.error("Error:", error));

function getQuestion() {
  fetch("get_question.php")
    .then((response) => response.json())
    .then((data) => {
      // Mengganti konten soal di dalam elemen dengan ID 'question'
      document.getElementById("question").innerHTML = `
            <h2>Soal No. ${data.question_number}</h2>
            <p>Sisa waktu : 02.00</p>
            <p>Petunjuk pengerjaan</p>
            <p>${data.question_text}</p>
        `;
    })
    .catch((error) => console.error("Error:", error));
}

// Panggil fungsi getQuestion saat halaman dimuat
getQuestion();

nextButton.addEventListener("click", () => {
  currentQuestion++;

  if (currentQuestion >= totalQuestions) {
    currentQuestion = totalQuestions - 1;
    // Tambahkan logika atau tindakan lain saat mencapai pertanyaan terakhir
    alert("Ini adalah pertanyaan terakhir.");
  }

  displayQuestion();
});

prevButton.addEventListener("click", () => {
  currentQuestion--;

  if (currentQuestion < 0) {
    currentQuestion = 0;
  }

  displayQuestion();
});

// Function to navigate to a specific question when a shortcut is clicked
function goToQuestion(questionNumber) {
  if (questionNumber >= 1 && questionNumber <= questions.length) {
    // Adjust to 0-based index before calling loadQuestion
    loadQuestion(questionNumber - 1);
    console.log("Navigating to Question " + questionNumber);

    // Update the shortcuts when navigating to a question
    shortcuts.forEach((shortcut, index) => {
      if (index === questionNumber - 1) {
        shortcut.classList.add("hover");
      } else {
        shortcut.classList.remove("hover");
      }
    });
  } else {
    console.error("Invalid question number: " + questionNumber);
  }
}

function updateShortcutStyles() {
  shortcuts.forEach((shortcut, index) => {
    if (answers[index] !== undefined) {
      shortcut.classList.add("answered");
    } else {
      shortcut.classList.remove("answered");
    }
  });
}

// Call the function to update shortcut styles when initializing
updateShortcutStyles();

shortcuts.forEach((shortcut, index) => {
  shortcut.addEventListener("mouseenter", () => {
    if (answers[index] !== undefined) {
      shortcut.classList.add("answered-hover");
    } else {
      shortcut.classList.add("hover");
    }
  });

  shortcut.addEventListener("click", (event) => {
    event.preventDefault(); // Mencegah perilaku default dari link

    // Perbarui nomor pertanyaan saat shortcut diklik
    currentQuestion = index;
    // Tampilkan pertanyaan yang sesuai dengan nomor pertanyaan saat ini
    displayQuestion();

    // Hapus semua kelas 'hover' dari shortcut
    shortcuts.forEach((s, i) => {
      if (i !== index) {
        s.classList.remove("hover");
      }
    });
    // Tambahkan kelas 'hover' pada shortcut yang diklik
    shortcut.classList.add("hover");

    // Pastikan ukuran font soal tidak berubah saat shortcut diklik
    const questionElement = document.getElementById("question");
    const currentFontSize = window.getComputedStyle(questionElement).fontSize;
    questionElement.style.fontSize = currentFontSize;
  });

  shortcut.addEventListener("mouseleave", () => {
    if (answers[index] !== undefined) {
      shortcut.classList.remove("answered-hover");
    } else {
      shortcut.classList.remove("hover");
    }
  });

  // Function to handle click on shortcut
  options.addEventListener("click", (event) => {
    const selectedOptions = [];
    options
      .querySelectorAll('input[type="checkbox"]:checked')
      .forEach((checkbox) => {
        selectedOptions.push(parseInt(checkbox.value));
      });
    answers[currentQuestion] = selectedOptions;

    // Update shortcut styles after answering the question
    updateShortcutStyles();
  });
});

options.addEventListener("click", (event) => {
  const selectedOptions = [];
  options
    .querySelectorAll('input[type="checkbox"]:checked')
    .forEach((checkbox) => {
      selectedOptions.push(parseInt(checkbox.value));
    });
  answers[currentQuestion] = selectedOptions;
});

document.addEventListener("DOMContentLoaded", () => {
  displayQuestion();
  startTimer(); // Panggil fungsi startTimer() saat halaman dimuat
});
