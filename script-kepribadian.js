const question = document.getElementById("question");
const options = document.getElementById("options");
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");
const submitButton = document.getElementById("submit");

const totalQuestions = 120;
let currentQuestion = 0;
let score = 0;

const questions = [
  {
    questionNumber: 1,
    questionType: "percaya diri",
    question:
      "1. Dalam memutuskan sesuatu saya lebih berkaca kepada kebiasaan-kebiasaan lama.",
    options: ["sangat tidak setuju", "tidak setuju", "setuju", "sangat setuju"],
    answer: 0,
  },

  {
    questionNumber: 2,
    questionType: "percaya diri",
    question: "2. Saya sadar atas setiap tindakan yang akan dilakukan.",
    options: ["sangat tidak setuju", "tidak setuju", "setuju", "sangat setuju"],
    answer: 3,
  },

  {
    questionNumber: 3,
    questionType: "percaya diri",
    question: "3. Lakukan saja dahulu, risiko belakangan.",
    options: ["sangat tidak setuju", "tidak setuju", "setuju", "sangat setuju"],
    answer: 0,
  },

  {
    questionNumber: 4,
    questionType: "percaya diri",
    question: "4. Tidak pernah melakukan sesuatu hanya untuk iseng.",
    options: ["sangat tidak setuju", "tidak setuju", "setuju", "sangat setuju"],
    answer: 3,
  },

  {
    questionNumber: 5,
    questionType: "percaya diri",
    question: "5. Tidak suka melakukan sesuatu yang dibatasi waktunya.",
    options: ["sangat tidak setuju", "tidak setuju", "setuju", "sangat setuju"],
    answer: 0,
  },

  {
    questionNumber: 6,
    questionType: "percaya diri",
    question: "6. Saya orang yang banyak pertimbangan namun rasional.",
    options: ["sangat tidak setuju", "tidak setuju", "setuju", "sangat setuju"],
    answer: 3,
  },

  {
    questionNumber: 7,
    questionType: "percaya diri",
    question:
      "7. Saya yakin pemikiran saya adalah yang terbaik untuk teman-teman.",
    options: ["sangat tidak setuju", "tidak setuju", "setuju", "sangat setuju"],
    answer: 3,
  },

  {
    questionNumber: 8,
    questionType: "percaya diri",
    question:
      "8. Daripada memberi anak tetangga ongkos ke sekolah, lebih baik saya antarkan.",
    options: ["sangat tidak setuju", "tidak setuju", "setuju", "sangat setuju"],
    answer: 2,
  },

  {
    questionNumber: 9,
    questionType: "percaya diri",
    question:
      "9. Saya lebih suka dianggap sebagai orang yang taat aturan daripada dipandang orang yang dermawan.",
    options: ["sangat tidak setuju", "tidak setuju", "setuju", "sangat setuju"],
    answer: 1,
  },

  {
    questionNumber: 10,
    questionType: "percaya diri",
    question:
      "10. Teman-teman sepakat untuk pergi ke suatu tempat pukul 12.00 siang padahal saya bersekolah hingga pukul 14.00 biasanya saya memilih menyusul setelah jam sekolah usai.",
    options: ["sangat tidak setuju", "tidak setuju", "setuju", "sangat setuju"],
    answer: 3,
  },

  {
    questionNumber: 11,
    questionType: "percaya diri",
    question:
      "11. Ketika bermusyawarah lebih mengikuti pendapat tokoh daripada pendapat masyarakat.",
    options: ["sangat tidak setuju", "tidak setuju", "setuju", "sangat setuju"],
    answer: 0,
  },

  {
    questionNumber: 12,
    questionType: "percaya diri",
    question:
      "12. Lebih menyenangkan berbincang-bincang daripada membaca buku pelajaran ketika sedang istirahat.",
    options: ["sangat tidak setuju", "tidak setuju", "setuju", "sangat setuju"],
    answer: 3,
  },

  {
    questionNumber: 13,
    questionType: "percaya diri",
    question: "13. Ikut dengan teman daripada ikut aturan.",
    options: ["sangat tidak setuju", "tidak setuju", "setuju", "sangat setuju"],
    answer: 1,
  },

  {
    questionNumber: 14,
    questionType: "percaya diri",
    question:
      "14. Saya lebih kagum orang yang kreatif daripada orang yang tabah.",
    options: ["sangat tidak setuju", "tidak setuju", "setuju", "sangat setuju"],
    answer: 3,
  },

  {
    questionNumber: 15,
    questionType: "percaya diri",
    question:
      "15. Saat ada tetangga meninggal padahal saya sudah berjanji hadir pada suatu acara, saya mendahulukan datang ke acara tersebut, setelah itu baru ke tetangga saya.",
    options: ["sangat tidak setuju", "tidak setuju", "setuju", "sangat setuju"],
    answer: 1,
  },

  {
    questionNumber: 16,
    questionType: "percaya diri",
    question:
      "16. Saya merasa tenteram bila sendirian daripada berada ditengah banyak orang.",
    options: ["sangat tidak setuju", "tidak setuju", "setuju", "sangat setuju"],
    answer: 1,
  },

  {
    questionNumber: 17,
    questionType: "percaya diri",
    question:
      "17. Jika ingin memiliki pengalaman terkadang sesekali kita harus sedikit melanggar aturan.",
    options: ["sangat tidak setuju", "tidak setuju", "setuju", "sangat setuju"],
    answer: 0,
  },

  {
    questionNumber: 18,
    questionType: "percaya diri",
    question: "18. Pengecut lebih hina dibanding penghianat.",
    options: ["sangat tidak setuju", "tidak setuju", "setuju", "sangat setuju"],
    answer: 0,
  },

  {
    questionNumber: 19,
    questionType: "percaya diri",
    question:
      "19. Lebih baik orang yang bisa menerima kegagalan daripada orang yang mengakui kelalaian.",
    options: ["sangat tidak setuju", "tidak setuju", "setuju", "sangat setuju"],
    answer: 1,
  },

  {
    questionNumber: 20,
    questionType: "percaya diri",
    question: "20. Bersikap berani lebih mulia daripada bersikap jujur.",
    options: ["sangat tidak setuju", "tidak setuju", "setuju", "sangat setuju"],
    answer: 1,
  },

  {
    questionNumber: 21,
    questionType: "percaya diri",
    question: "21. Penghianat lebih hina dibanding pengecut.",
    options: ["sangat tidak setuju", "tidak setuju", "setuju", "sangat setuju"],
    answer: 2,
  },

  {
    questionNumber: 22,
    questionType: "percaya diri",
    question:
      "22. Jika ada kesempatan saya tidak keberatan berbagi dengan orang yang tidak dikenal.",
    options: ["sangat tidak setuju", "tidak setuju", "setuju", "sangat setuju"],
    answer: 3,
  },

  {
    questionNumber: 23,
    questionType: "percaya diri",
    question:
      "23. Saya cenderung melaksanakan kegiatan sesuai kondisi lapangan daripada sesuai rencana.",
    options: ["sangat tidak setuju", "tidak setuju", "setuju", "sangat setuju"],
    answer: 2,
  },

  {
    questionNumber: 24,
    questionType: "percaya diri",
    question: "24. Saya tertarik dengan budaya perlawanan/kritik.",
    options: ["sangat tidak setuju", "tidak setuju", "setuju", "sangat setuju"],
    answer: 0,
  },

  {
    questionNumber: 25,
    questionType: "percaya diri",
    question:
      "25. Datang tepat waktu lebih penting dari menghargai orang lain.",
    options: ["sangat tidak setuju", "tidak setuju", "setuju", "sangat setuju"],
    answer: 1,
  },

  {
    questionNumber: 26,
    questionType: "percaya diri",
    question: "26. Saya sedikit tidak terorganisir.",
    options: ["sangat tidak setuju", "tidak setuju", "setuju", "sangat setuju"],
    answer: 0,
  },

  {
    questionNumber: 27,
    questionType: "percaya diri",
    question: "27. Sering saya merasa kesepian.",
    options: ["sangat tidak setuju", "tidak setuju", "setuju", "sangat setuju"],
    answer: 0,
  },

  {
    questionNumber: 28,
    questionType: "percaya diri",
    question:
      "28. Dalam menghadapi masalah, mencari pemecahan masalah lebih penting dari menghargai pendapat forum.",
    options: ["sangat tidak setuju", "tidak setuju", "setuju", "sangat setuju"],
    answer: 1,
  },

  {
    questionNumber: 29,
    questionType: "percaya diri",
    question: "29. Lebih menyukai memraktikan ide daripada menghasilkan ide.",
    options: ["sangat tidak setuju", "tidak setuju", "setuju", "sangat setuju"],
    answer: 3,
  },

  {
    questionNumber: 30,
    questionType: "percaya diri",
    question: "30. Saya orang yang praktis.",
    options: ["sangat tidak setuju", "tidak setuju", "setuju", "sangat setuju"],
    answer: 3,
  },

  {
    questionNumber: 31,
    questionType: "pengendalian diri",
    question:
      "31. Menyesali perbuatan lebih penting dari memaafkan kesalahan orang lain.",
    options: ["sangat tidak setuju", "tidak setuju", "setuju", "sangat setuju"],
    answer: 1,
  },

  {
    questionNumber: 32,
    questionType: "pengendalian diri",
    question: "32. Saya sangat khawatir bila mengalami luka atau kecelakaan.",
    options: ["sangat tidak setuju", "tidak setuju", "setuju", "sangat setuju"],
    answer: 0,
  },

  {
    questionNumber: 33,
    questionType: "pengendalian diri",
    question: "33. Seburuk apapun kondisi, saya tetap menjaga ketenangan diri.",
    options: ["sangat tidak setuju", "tidak setuju", "setuju", "sangat setuju"],
    answer: 3,
  },

  {
    questionNumber: 34,
    questionType: "pengendalian diri",
    question:
      "34. Mengingat kegagalan yang pernah terjadi lebih penting dari mengambil pelajaran dari kesalahan.",
    options: ["sangat tidak setuju", "tidak setuju", "setuju", "sangat setuju"],
    answer: 1,
  },

  {
    questionNumber: 35,
    questionType: "pengendalian diri",
    question: "35. Keinginan untuk maju menjadi motivasi saya.",
    options: ["sangat tidak setuju", "tidak setuju", "setuju", "sangat setuju"],
    answer: 3,
  },

  {
    questionNumber: 36,
    questionType: "pengendalian diri",
    question:
      "36. Saya sering memulai pekerjaan di akhir waktu, toh selesai juga.",
    options: ["sangat tidak setuju", "tidak setuju", "setuju", "sangat setuju"],
    answer: 0,
  },

  {
    questionNumber: 37,
    questionType: "pengendalian diri",
    question: "37. Ketekunan lebih penting dari kepandaian.",
    options: ["sangat tidak setuju", "tidak setuju", "setuju", "sangat setuju"],
    answer: 3,
  },

  {
    questionNumber: 38,
    questionType: "pengendalian diri",
    question: "38. Saya selalu ingin menjadi pusat perhatian.",
    options: ["sangat tidak setuju", "tidak setuju", "setuju", "sangat setuju"],
    answer: 0,
  },

  {
    questionNumber: 39,
    questionType: "pengendalian diri",
    question: "39. Saya selalu ingin menjadi pusat perhatian.",
    options: ["sangat tidak setuju", "tidak setuju", "setuju", "sangat setuju"],
    answer: 0,
  },

  {
    questionNumber: 40,
    questionType: "pengendalian diri",
    question: "40. Pembohong lebih terpuji dibanding pemabuk.",
    options: ["sangat tidak setuju", "tidak setuju", "setuju", "sangat setuju"],
    answer: 2,
  },

  {
    questionNumber: 41,
    questionType: "pengendalian diri",
    question: "41. Memaksa orang lain lebih menjengkelkan daripada egois.",
    options: ["sangat tidak setuju", "tidak setuju", "setuju", "sangat setuju"],
    answer: 2,
  },

  {
    questionNumber: 42,
    questionType: "pengendalian diri",
    question: "42. Menjadi pemimpin adalah cita-cita yang harus diwujudkan.",
    options: ["sangat tidak setuju", "tidak setuju", "setuju", "sangat setuju"],
    answer: 3,
  },

  {
    questionNumber: 43,
    questionType: "pengendalian diri",
    question:
      "43. Menentukan tujuan berdasarkan inspirasi lebih berharga dibanding berdasarkan logika.",
    options: ["sangat tidak setuju", "tidak setuju", "setuju", "sangat setuju"],
    answer: 1,
  },

  {
    questionNumber: 44,
    questionType: "pengendalian diri",
    question: "44. Saya tidak pernah khawatir dengan apapun.",
    options: ["sangat tidak setuju", "tidak setuju", "setuju", "sangat setuju"],
    answer: 0,
  },

  {
    questionNumber: 45,
    questionType: "pengendalian diri",
    question: "45. Kurang bersemangat lebih baik dari kurang ambisius.",
    options: ["sangat tidak setuju", "tidak setuju", "setuju", "sangat setuju"],
    answer: 1,
  },

  {
    questionNumber: 46,
    questionType: "pengendalian diri",
    question: "46. Kejujuran lebih berharga dibanding pertemanan.",
    options: ["sangat tidak setuju", "tidak setuju", "setuju", "sangat setuju"],
    answer: 3,
  },

  {
    questionNumber: 47,
    questionType: "pengendalian diri",
    question: "47. Lebih baik melayani orang lain daripada menepati janji.",
    options: ["sangat tidak setuju", "tidak setuju", "setuju", "sangat setuju"],
    answer: 3,
  },

  {
    questionNumber: 48,
    questionType: "pengendalian diri",
    question:
      "48. Daripada melampiaskan dengan cara membanting barang, saya lebih suka membalas orang yang telah membuat saya kesal.",
    options: ["sangat tidak setuju", "tidak setuju", "setuju", "sangat setuju"],
    answer: 0,
  },

  {
    questionNumber: 49,
    questionType: "pengendalian diri",
    question: "49. Orang kikir lebih menyebalkan dibanding orang sombong.",
    options: ["sangat tidak setuju", "tidak setuju", "setuju", "sangat setuju"],
    answer: 2,
  },

  {
    questionNumber: 50,
    questionType: "pengendalian diri",
    question: "50. Pengecut masih lebih berharga dibanding orang kejam.",
    options: ["sangat tidak setuju", "tidak setuju", "setuju", "sangat setuju"],
    answer: 2,
  },

  {
    questionNumber: 51,
    questionType: "pengendalian diri",
    question: "51. Saya lebih suka belajar daripada mengajarkan orang lain.",
    options: ["sangat tidak setuju", "tidak setuju", "setuju", "sangat setuju"],
    answer: 1,
  },

  {
    questionNumber: 52,
    questionType: "pengendalian diri",
    question: "52. Pandai bergaul lebih hebat dibanding pandai bicara.",
    options: ["sangat tidak setuju", "tidak setuju", "setuju", "sangat setuju"],
    answer: 3,
  },

  {
    questionNumber: 53,
    questionType: "pengendalian diri",
    question: "53. Lebih baik orang yang sok kuasa dibanding orang rakus.",
    options: ["sangat tidak setuju", "tidak setuju", "setuju", "sangat setuju"],
    answer: 2,
  },

  {
    questionNumber: 54,
    questionType: "pengendalian diri",
    question: "54. Menurut teman-teman, saya cocok menjadi notuler.",
    options: ["sangat tidak setuju", "tidak setuju", "setuju", "sangat setuju"],
    answer: 3,
  },

  {
    questionNumber: 55,
    questionType: "pengendalian diri",
    question: "55. Memaksa orang lain lebih menjengkelkan dibanding egois.",
    options: ["sangat tidak setuju", "tidak setuju", "setuju", "sangat setuju"],
    answer: 3,
  },

  {
    questionNumber: 56,
    questionType: "pengendalian diri",
    question: "56. Disiplin lebih penting dibanding solider terhadap teman.",
    options: ["sangat tidak setuju", "tidak setuju", "setuju", "sangat setuju"],
    answer: 3,
  },

  {
    questionNumber: 57,
    questionType: "pengendalian diri",
    question:
      "57. Lebih menyukai pekerjaan pemandu wisata dibanding perancang system wisata.",
    options: ["sangat tidak setuju", "tidak setuju", "setuju", "sangat setuju"],
    answer: 3,
  },

  {
    questionNumber: 58,
    questionType: "pengendalian diri",
    question:
      "58. Menyelesaikan tugas dengan cara biasa tapi tepat waktu lebih hebat daripada menyelaesaikan tugas dengan cara keratif namun terlambat.",
    options: ["sangat tidak setuju", "tidak setuju", "setuju", "sangat setuju"],
    answer: 3,
  },

  {
    questionNumber: 59,
    questionType: "pengendalian diri",
    question:
      "59. Orang yang memperbaiki kesalahan lebih hebat dibanding orang yang berwawasan.",
    options: ["sangat tidak setuju", "tidak setuju", "setuju", "sangat setuju"],
    answer: 3,
  },

  {
    questionNumber: 60,
    questionType: "pengendalian diri",
    question: "60. Teladan lebih mulia dibanding aturan.",
    options: ["sangat tidak setuju", "tidak setuju", "setuju", "sangat setuju"],
    answer: 3,
  },

  {
    questionNumber: 61,
    questionType: "proposial",
    question: "61. Orang bodoh lebih memalukan dibanding orang yang mencontek.",
    options: ["sangat tidak setuju", "tidak setuju", "setuju", "sangat setuju"],
    answer: 1,
  },

  {
    questionNumber: 62,
    questionType: "proposial",
    question: "62. Merasa bodoh lebih menyedihkan dibanding berbuat curang.",
    options: ["sangat tidak setuju", "tidak setuju", "setuju", "sangat setuju"],
    answer: 1,
  },

  {
    questionNumber: 63,
    questionType: "proposial",
    question: "63. Pendapat ahli pasti lebih baik dari pendapat saya.",
    options: ["sangat tidak setuju", "tidak setuju", "setuju", "sangat setuju"],
    answer: 1,
  },

  {
    questionNumber: 64,
    questionType: "proposial",
    question:
      "64. Saya lebih suka berbohong untuk tujuan yang baik daripada mengatakan sesuatu secara jujur tapi menyakitkan.",
    options: ["sangat tidak setuju", "tidak setuju", "setuju", "sangat setuju"],
    answer: 0,
  },

  {
    questionNumber: 65,
    questionType: "proposial",
    question:
      "65. Saya sering melakukan sesuatu hanya karena menghargai orang di sekeliling saya.",
    options: ["sangat tidak setuju", "tidak setuju", "setuju", "sangat setuju"],
    answer: 3,
  },

  {
    questionNumber: 66,
    questionType: "proposial",
    question:
      "66. Saya lebih memilih membangkitkan diri dari kelelahan agar bisa memenangkan pertandingan daripada mengundurkan diri dari pertandingan untuk menghindari resiko celaka.",
    options: ["sangat tidak setuju", "tidak setuju", "setuju", "sangat setuju"],
    answer: 3,
  },

  {
    questionNumber: 67,
    questionType: "proposial",
    question: "67. Orang malas lebih menyebalkan dibanding orang bodoh.",
    options: ["sangat tidak setuju", "tidak setuju", "setuju", "sangat setuju"],
    answer: 2,
  },

  {
    questionNumber: 68,
    questionType: "proposial",
    question:
      "68. Saya lebih suka berbohong untuk tujuan yang baik daripada mengatakan sesuatu secara jujur tapi menyakitkan.",
    options: ["sangat tidak setuju", "tidak setuju", "setuju", "sangat setuju"],
    answer: 0,
  },

  {
    questionNumber: 69,
    questionType: "proposial",
    question: "69. Kewajiban lebih utama dari kebutuhan.",
    options: ["sangat tidak setuju", "tidak setuju", "setuju", "sangat setuju"],
    answer: 3,
  },

  {
    questionNumber: 70,
    questionType: "proposial",
    question:
      "70. Saya lebih sering merasakan kebutuhan untuk menemui orang lain daripada keinginan untuk berada sendiri.",
    options: ["sangat tidak setuju", "tidak setuju", "setuju", "sangat setuju"],
    answer: 3,
  },

  {
    questionNumber: 71,
    questionType: "proposial",
    question: "71. Kreatifitas lebih dibutuhkan dibanding disiplin.",
    options: ["sangat tidak setuju", "tidak setuju", "setuju", "sangat setuju"],
    answer: 1,
  },

  {
    questionNumber: 72,
    questionType: "proposial",
    question:
      "72. Mengikuti kata hati daripada mengikuti kemauan pada umumnya.",
    options: ["sangat tidak setuju", "tidak setuju", "setuju", "sangat setuju"],
    answer: 1,
  },

  {
    questionNumber: 73,
    questionType: "proposial",
    question:
      "73. Lebih baik langsung mengerjakan tugas daripada memikirkannya terlebih dahulu.",
    options: ["sangat tidak setuju", "tidak setuju", "setuju", "sangat setuju"],
    answer: 3,
  },

  {
    questionNumber: 74,
    questionType: "proposial",
    question: "74. Sukarelawan lebih berharga dibanding pemimpin.",
    options: ["sangat tidak setuju", "tidak setuju", "setuju", "sangat setuju"],
    answer: 3,
  },

  {
    questionNumber: 75,
    questionType: "proposial",
    question:
      "75. Lebih baik membolos sekolah daripada berada di sekolah namun tidak belajar.",
    options: ["sangat tidak setuju", "tidak setuju", "setuju", "sangat setuju"],
    answer: 1,
  },

  {
    questionNumber: 76,
    questionType: "proposial",
    question: "76. Penghianat lebih hina dibanding pengecut.",
    options: ["sangat tidak setuju", "tidak setuju", "setuju", "sangat setuju"],
    answer: 2,
  },

  {
    questionNumber: 77,
    questionType: "proposial",
    question:
      "77. Saya lebih senang berbagi cerita dihadapan rekan-rekan yang sukses daripada menjadi pendengar yang baik.",
    options: ["sangat tidak setuju", "tidak setuju", "setuju", "sangat setuju"],
    answer: 1,
  },

  {
    questionNumber: 78,
    questionType: "proposial",
    question: "78. Memaksa orang lain lebih menjengkelkan daripada egois.",
    options: ["sangat tidak setuju", "tidak setuju", "setuju", "sangat setuju"],
    answer: 3,
  },

  {
    questionNumber: 79,
    questionType: "proposial",
    question: "79. Pembohong lebih hina orang minder.",
    options: ["sangat tidak setuju", "tidak setuju", "setuju", "sangat setuju"],
    answer: 2,
  },

  {
    questionNumber: 80,
    questionType: "proposial",
    question:
      "80. Lebih tertantang mengerjakan tugas yang belumpernah didapat dibanding tugas sulit.",
    options: ["sangat tidak setuju", "tidak setuju", "setuju", "sangat setuju"],
    answer: 3,
  },

  {
    questionNumber: 81,
    questionType: "proposial",
    question:
      "81. Menyelamatkan diri sendiri lebih tepat dibanding berkorban untuk kepentingan orang lain.",
    options: ["sangat tidak setuju", "tidak setuju", "setuju", "sangat setuju"],
    answer: 1,
  },

  {
    questionNumber: 82,
    questionType: "proposial",
    question:
      "82. Lebih baik menjadi orang yang tegas daripada orang yang menyenangkan.",
    options: ["sangat tidak setuju", "tidak setuju", "setuju", "sangat setuju"],
    answer: 1,
  },

  {
    questionNumber: 83,
    questionType: "proposial",
    question:
      "83. Mema’afkan kesalahan sesorang lebih mulia dibanding menolongnya dalam kesulitan.",
    options: ["sangat tidak setuju", "tidak setuju", "setuju", "sangat setuju"],
    answer: 3,
  },

  {
    questionNumber: 84,
    questionType: "proposial",
    question:
      "84. Lebih baik orang yang sombong daripada orang yang pelit/kikir.",
    options: ["sangat tidak setuju", "tidak setuju", "setuju", "sangat setuju"],
    answer: 2,
  },

  {
    questionNumber: 85,
    questionType: "proposial",
    question: "85. Bersikap tenang lebih mulia dibanding mencari ide baru.",
    options: ["sangat tidak setuju", "tidak setuju", "setuju", "sangat setuju"],
    answer: 3,
  },

  {
    questionNumber: 86,
    questionType: "proposial",
    question:
      "86. Saya yakin bahwa peminta-minta yang sering lewat di depan rumah hanya pura-pura pincang.",
    options: ["sangat tidak setuju", "tidak setuju", "setuju", "sangat setuju"],
    answer: 0,
  },

  {
    questionNumber: 87,
    questionType: "proposial",
    question:
      "87. Mudah frustasi masih lebih baik ketimbang takut gagal dalam mengerjakan sesuatu.",
    options: ["sangat tidak setuju", "tidak setuju", "setuju", "sangat setuju"],
    answer: 1,
  },

  {
    questionNumber: 88,
    questionType: "proposial",
    question: "88. Kerja asal-asalan lebih baik dari menunda pekerjaan.",
    options: ["sangat tidak setuju", "tidak setuju", "setuju", "sangat setuju"],
    answer: 2,
  },

  {
    questionNumber: 89,
    questionType: "proposial",
    question:
      "89. Saya merasa tidak nyaman berbicara didepan umum apalagi jika tanpa persiapan.",
    options: ["sangat tidak setuju", "tidak setuju", "setuju", "sangat setuju"],
    answer: 0,
  },

  {
    questionNumber: 90,
    questionType: "proposial",
    question:
      "90. Sifat takut gagal masih lebih baik daripada memiliki rencana terlalu muluk.",
    options: ["sangat tidak setuju", "tidak setuju", "setuju", "sangat setuju"],
    answer: 1,
  },

  {
    questionNumber: 91,
    questionType: "penyesuaian",
    question:
      "91. Melakukan pemerasan lebih hina dibandingkan mempunyai pikiran cabul.",
    options: ["sangat tidak setuju", "tidak setuju", "setuju", "sangat setuju"],
    answer: 2,
  },

  {
    questionNumber: 92,
    questionType: "penyesuaian",
    question: "92. Perhatian dan pemurah adalah kepribadian saya.",
    options: ["sangat tidak setuju", "tidak setuju", "setuju", "sangat setuju"],
    answer: 3,
  },

  {
    questionNumber: 93,
    questionType: "penyesuaian",
    question: "93. Saya merasa kesepian sekali.",
    options: ["sangat tidak setuju", "tidak setuju", "setuju", "sangat setuju"],
    answer: 0,
  },

  {
    questionNumber: 94,
    questionType: "penyesuaian",
    question: "94. Penjudi lebih hina dibanding pemabuk.",
    options: ["sangat tidak setuju", "tidak setuju", "setuju", "sangat setuju"],
    answer: 2,
  },

  {
    questionNumber: 95,
    questionType: "penyesuaian",
    question: "95. Lebih suka menyelesaikan pekerjaan mendahului jadwal.",
    options: ["sangat tidak setuju", "tidak setuju", "setuju", "sangat setuju"],
    answer: 3,
  },

  {
    questionNumber: 96,
    questionType: "penyesuaian",
    question: "96. Saya suka mengambil inisiatif.",
    options: ["sangat tidak setuju", "tidak setuju", "setuju", "sangat setuju"],
    answer: 3,
  },

  {
    questionNumber: 97,
    questionType: "penyesuaian",
    question:
      "97. Lebih baik tidak menolong daripada dilakukan dengan terpaksa.",
    options: ["sangat tidak setuju", "tidak setuju", "setuju", "sangat setuju"],
    answer: 0,
  },

  {
    questionNumber: 98,
    questionType: "penyesuaian",
    question:
      "98. Membiarkan orang menerobos antrian karena sudah ada petugas.",
    options: ["sangat tidak setuju", "tidak setuju", "setuju", "sangat setuju"],
    answer: 3,
  },

  {
    questionNumber: 99,
    questionType: "penyesuaian",
    question: "99. Saya sering diminta saran oleh teman.",
    options: ["sangat tidak setuju", "tidak setuju", "setuju", "sangat setuju"],
    answer: 3,
  },

  {
    questionNumber: 100,
    questionType: "penyesuaian",
    question: "100. Kesetiaan lebih mulia dari tanggung jawab.",
    options: ["sangat tidak setuju", "tidak setuju", "setuju", "sangat setuju"],
    answer: 3,
  },

  {
    questionNumber: 101,
    questionType: "penyesuaian",
    question: "101. Penghianat lebih tidak bermartabat dibanding koruptor.",
    options: ["sangat tidak setuju", "tidak setuju", "setuju", "sangat setuju"],
    answer: 0,
  },

  {
    questionNumber: 102,
    questionType: "penyesuaian",
    question:
      "102. Tidak berani beda pendapat lebih baik daripada kurang ajar pada yang lebih tua.",
    options: ["sangat tidak setuju", "tidak setuju", "setuju", "sangat setuju"],
    answer: 2,
  },

  {
    questionNumber: 103,
    questionType: "penyesuaian",
    question:
      "103. Dalam menghadapi pekerjaan, lebih penting selesai tepat waktu dibanding menyelesaikan secara baik namun melampaui batas waktu.",
    options: ["sangat tidak setuju", "tidak setuju", "setuju", "sangat setuju"],
    answer: 2,
  },

  {
    questionNumber: 104,
    questionType: "penyesuaian",
    question:
      "104. Pengalaman gagal membuat saya sulit dan ragu untuk memulai.",
    options: ["sangat tidak setuju", "tidak setuju", "setuju", "sangat setuju"],
    answer: 0,
  },

  {
    questionNumber: 105,
    questionType: "penyesuaian",
    question:
      "105. Lebih suka bekerja menjadi operator komputer daripada memasarkan komputer karena tidak harus berhadapan dengan banyak orang.",
    options: ["sangat tidak setuju", "tidak setuju", "setuju", "sangat setuju"],
    answer: 1,
  },

  {
    questionNumber: 106,
    questionType: "penyesuaian",
    question:
      "106. Berusaha mengingat-ingat kesalahan apabila ada orang memfitnah saya.",
    options: ["sangat tidak setuju", "tidak setuju", "setuju", "sangat setuju"],
    answer: 3,
  },

  {
    questionNumber: 107,
    questionType: "penyesuaian",
    question:
      "107. Berkorban untuk kepentingan orang lain kurang rasional dibanding mempertahankan diri dalam keadaan sulit sekarang ini.",
    options: ["sangat tidak setuju", "tidak setuju", "setuju", "sangat setuju"],
    answer: 1,
  },

  {
    questionNumber: 108,
    questionType: "penyesuaian",
    question: "108. Menerima suap lebih rendah dibanding melakukan korupsi.",
    options: ["sangat tidak setuju", "tidak setuju", "setuju", "sangat setuju"],
    answer: 1,
  },

  {
    questionNumber: 109,
    questionType: "penyesuaian",
    question: "109. Lebih baik mudah dipengaruhi daripada mudah menyerah.",
    options: ["sangat tidak setuju", "tidak setuju", "setuju", "sangat setuju"],
    answer: 2,
  },

  {
    questionNumber: 110,
    questionType: "penyesuaian",
    question:
      "110. Pada saat liburan saya memilih menyelesaikan pekerjaan kantor di rumah daripada membantu menyelesaikan pekerjaan rumah tangga.",
    options: ["sangat tidak setuju", "tidak setuju", "setuju", "sangat setuju"],
    answer: 1,
  },

  {
    questionNumber: 111,
    questionType: "penyesuaian",
    question:
      "111. Orang yang berpendirian teguh lebih tinggi derajatnya dibanding orang yang penuh sopan santun.",
    options: ["sangat tidak setuju", "tidak setuju", "setuju", "sangat setuju"],
    answer: 1,
  },

  {
    questionNumber: 112,
    questionType: "penyesuaian",
    question: "112. Merasa gugup lebih memalukan dibanding mencontek.",
    options: ["sangat tidak setuju", "tidak setuju", "setuju", "sangat setuju"],
    answer: 0,
  },

  {
    questionNumber: 113,
    questionType: "penyesuaian",
    question: "113. Kerja asal-asalan lebih baik dari menunda pekerjaan.",
    options: ["sangat tidak setuju", "tidak setuju", "setuju", "sangat setuju"],
    answer: 2,
  },

  {
    questionNumber: 114,
    questionType: "penyesuaian",
    question: "114. Saya cenderung mengambil keputusan sesuai kata hati saya.",
    options: ["sangat tidak setuju", "tidak setuju", "setuju", "sangat setuju"],
    answer: 0,
  },

  {
    questionNumber: 115,
    questionType: "penyesuaian",
    question: "115. Kesetiaan lebih mulia dibanding tanggung jawab.",
    options: ["sangat tidak setuju", "tidak setuju", "setuju", "sangat setuju"],
    answer: 3,
  },

  {
    questionNumber: 116,
    questionType: "penyesuaian",
    question:
      "116. Bersifat sok tahu lebih menyebalkan daripada tidak punya pendapat.",
    options: ["sangat tidak setuju", "tidak setuju", "setuju", "sangat setuju"],
    answer: 2,
  },

  {
    questionNumber: 117,
    questionType: "penyesuaian",
    question:
      "117. Menjadi perwakilan kelompok lebih menyenangkan daripada dihargai kelompok.",
    options: ["sangat tidak setuju", "tidak setuju", "setuju", "sangat setuju"],
    answer: 1,
  },

  {
    questionNumber: 118,
    questionType: "penyesuaian",
    question: "118. Bersikap ceroboh lebih positif daripada berpandangan kuno.",
    options: ["sangat tidak setuju", "tidak setuju", "setuju", "sangat setuju"],
    answer: 1,
  },

  {
    questionNumber: 119,
    questionType: "penyesuaian",
    question:
      "119. Menjadi pekerja sosial lebih menyenangkan daripada bekerja di laboratorium karena bisa mengenal banyak orang.",
    options: ["sangat tidak setuju", "tidak setuju", "setuju", "sangat setuju"],
    answer: 3,
  },

  {
    questionNumber: 120,
    questionType: "penyesuaian",
    question:
      "120. Lebih hina menjadi orang yang munafik dibanding orang yang mencari selamat.",
    options: ["sangat tidak setuju", "tidak setuju", "setuju", "sangat setuju"],
    answer: 3,
  },
];

const answers = [];

function displayQuestion() {
  question.innerHTML = `<h2>${questions[currentQuestion].question}</h2>`;
  options.innerHTML = "";

  questions[currentQuestion].options.forEach((option, index) => {
    const li = document.createElement("li");
    li.innerHTML = `<input type="radio" name="option" value="${index}" id="option${index}"><label for="option${index}">${option}</label>`;
    options.appendChild(li);
  });

  // Check if the current question already has a selected answer
  const selectedAnswer = answers[currentQuestion];
  if (selectedAnswer !== undefined) {
    const radio = document.getElementById(`option${selectedAnswer}`);
    radio.checked = true;
  }
}

// Variable to track if answers have been submitted
let answersSubmitted = false;

function submitAnswers() {
  // Check if answers have already been submitted
  if (answersSubmitted) {
    // If answers have been submitted, alert and return
    return;
  }

  // Variable to track if alert has been shown
  let alertShown = false;

  // Validate if all questions have been answered
  for (let i = 0; i < totalQuestions; i++) {
    if (answers[i] === undefined) {
      alert("Please answer all questions before submitting.");
      return;
    }
  }

  // Set answersSubmitted to true to prevent further submissions
  answersSubmitted = true;

  // Calculate the score for each category
  let percayaDiriScore = 0;
  let pengendalianDiriScore = 0;
  let proposialScore = 0;
  let penyesuaianScore = 0;

  for (let i = 0; i < totalQuestions; i++) {
    const correctAnswerIndex = questions[i].answerIndex;
    const selectedAnswerIndex = parseInt(answers[i]);
    const selectedAnswer = questions[i].options[selectedAnswerIndex];

    // Determine score based on selected answer and correct answer
    let score = 0;
    if (selectedAnswerIndex === correctAnswerIndex) {
      score = 4;
    } else if (
      (selectedAnswerIndex === 0 && correctAnswerIndex === 1) ||
      (selectedAnswerIndex === 1 && correctAnswerIndex === 2) ||
      (selectedAnswerIndex === 2 && correctAnswerIndex === 3) ||
      (selectedAnswerIndex === 3 && correctAnswerIndex === 0)
    ) {
      score = 3;
    } else if (
      (selectedAnswerIndex === 0 && correctAnswerIndex === 2) ||
      (selectedAnswerIndex === 1 && correctAnswerIndex === 3) ||
      (selectedAnswerIndex === 2 && correctAnswerIndex === 0) ||
      (selectedAnswerIndex === 3 && correctAnswerIndex === 1)
    ) {
      score = 2;
    } else {
      score = 1;
    }

    switch (questions[i].questionType) {
      case "percaya diri":
        percayaDiriScore += score;
        break;
      case "pengendalian diri":
        pengendalianDiriScore += score;
        break;
      case "proposial":
        proposialScore += score;
        break;
      case "penyesuaian":
        penyesuaianScore += score;
        break;
      default:
        console.error("Invalid question type:", questions[i].questionType);
    }
  }

  function calculateCredit(totalScore) {
    let credit = 0;
    if (totalScore >= 110) {
      credit = 4;
    } else if (totalScore >= 105) {
      credit = 3;
    } else if (totalScore >= 101) {
      credit = 2;
    } else if (totalScore >= 96) {
      credit = 1;
    } else {
      credit = 0; // Jika kurang dari 15, maka kreditnya 0
    }
    return credit;
  }

  const percayaDiriCredit = calculateCredit(percayaDiriScore);
  const pengendalianDiriCredit = calculateCredit(pengendalianDiriScore);
  const proposialCredit = calculateCredit(proposialScore);
  const penyesuaianCredit = calculateCredit(penyesuaianScore);

  const formData = new FormData();

  formData.append("percayaDiri", percayaDiriCredit);
  formData.append("pengendalianDiri", pengendalianDiriCredit);
  formData.append("proposial", proposialCredit);
  formData.append("penyesuaian", penyesuaianCredit);

  fetch("submit-kepribadian.php", {
    method: "POST",
    body: formData,
  })
    .then((response) => response.text())
    .then((data) => {
      window.location.href = "welcome-kecermatan.html";
      console.log(data);
    })
    .catch((error) => console.error("Error:", error))
    .finally(() => {
      alertShown = true; // Pindahkan ke sini agar pasti dipanggil
      alert(`Jawaban anda telah tersimpan, good luck!`);
    });
}



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

      // Setelah mendapatkan pertanyaan, langsung tampilkan
      displayQuestion();
    })
    .catch((error) => console.error("Error:", error));
}

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

submitButton.addEventListener("click", () => {
  submitAnswers();
});

options.addEventListener("click", (event) => {
  const selectedOption = event.target.value;
  answers[currentQuestion] = selectedOption;
});

document.addEventListener("DOMContentLoaded", () => {
  displayQuestion();
  startTimer(); // Panggil fungsi startTimer() saat halaman dimuat
});

function goToQuestion(questionNumber) {
  if (questionNumber >= 1 && questionNumber <= questions.length) {
    // Adjust to 0-based index before calling loadQuestion
    loadQuestion(questionNumber - 1);
    console.log("Navigating to Question " + questionNumber);
  } else {
    console.error("Invalid question number: " + questionNumber);
  }
}

function loadQuestion(index) {
  // Add the logic to update the displayed question based on the provided index
  // For example:
  const questionContainer = document.getElementById("question");
  questionContainer.innerHTML = questions[index].question;
  // ... (add logic to update options as well)
}

let duration = 2700; // Durasi pengerjaan dalam detik (contoh: 120 detik = 2 menit)
let timerInterval;
let startTime; // Adicionamos variável para armazenar o tempo inicial

function startTimer() {
  startTime = Date.now(); // Armazenar o tempo inicial
  timerInterval = setInterval(updateTimer, 1000);
}

function updateTimer() {
  const elapsedTime = Math.floor((Date.now() - startTime) / 1000); // Calcular o tempo decorrido em segundos
  const remainingTime = duration - elapsedTime; // Calcular o tempo restante

  if (remainingTime <= 0) {
    // Verificar se o tempo restante é menor ou igual a zero
    clearInterval(timerInterval);
    document.getElementById("minutes").innerText = "00";
    document.getElementById("seconds").innerText = "00";
    alert("Waktu pengerjaan habis.");
    // Tambahkan tindakan lain yang ingin dilakukan saat waktu habis
  } else {
    const minutes = Math.floor(remainingTime / 60);
    const seconds = remainingTime % 60;

    document.getElementById("minutes").innerText = padZero(minutes);
    document.getElementById("seconds").innerText = padZero(seconds);
  }
}

function padZero(value) {
  return value < 10 ? "0" + value : value;
}

document.addEventListener("DOMContentLoaded", startTimer);

function checkAllQuestionsAnswered() {
  const allQuestionsAnswered = true; // Change this condition
  document.getElementById("submit").disabled = !allQuestionsAnswered;
}

// Call the function to check all questions when the document is loaded
document.addEventListener("DOMContentLoaded", checkAllQuestionsAnswered);

function checkAllQuestionsAnswered() {
  const allQuestionsAnswered = true; // Replace with your logic to check if all questions are answered

  // Enable or disable the submit button based on the condition and whether the time is up
  document.getElementById("submit").disabled =
    !allQuestionsAnswered || isTimeUp;
  // Disable navigation buttons if the time is up
  document.getElementById("next").disabled = isTimeUp;
  document.getElementById("prev").disabled = isTimeUp;
}
