<?php
// Koneksi ke database
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "psikologi";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Koneksi gagal: " . $conn->connect_error);
}

// Ambil data dari formulir
$creditTeknis = $_POST['creditTeknis'];
$creditVerbal = $_POST['creditVerbal'];
$creditAbstrak = $_POST['creditAbstrak'];
// Hitung total skor
$totalScore = $creditTeknis + $creditVerbal + $creditAbstrak;

// Simpan skor ke database
$sql = "INSERT INTO scores (creditTeknis, creditVerbal, creditAbstrak)
VALUES ('$creditTeknis', '$creditVerbal', '$creditAbstrak')";

if ($conn->query($sql) === TRUE) {
    echo "Skor berhasil disimpan";
} else {
    echo "Kesalahan: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>
