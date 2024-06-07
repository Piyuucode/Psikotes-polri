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
$speedCredit = $_POST['Kecepatan'];
$accuracyCredit = $_POST['Ketelitian'];
$enduranceCredit = $_POST['DayaTahan'];

// Simpan skor ke database
$sql = "INSERT INTO kecermatan (Kecepatan, Ketelitian, DayaTahan)
VALUES ('$speedCredit', '$accuracyCredit', '$enduranceCredit')";
if ($conn->query($sql) === TRUE) {
    echo "Skor kecermatan berhasil disimpan";
} else {
    echo "Kesalahan: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>
