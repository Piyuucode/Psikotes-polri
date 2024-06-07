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
$percayaDiriCredit = $_POST['percayaDiri'];
$pengendalianDiriCredit = $_POST['pengendalianDiri'];
$proposialCredit = $_POST['proposial'];
$penyesuaianCredit = $_POST['penyesuaian'];

// Simpan skor ke database
$sql = "INSERT INTO kepribadian (percayaDiri, pengendalianDiri, proposial, penyesuaian)
VALUES ('$percayaDiriCredit', '$pengendalianDiriCredit', '$proposialCredit', '$penyesuaianCredit')";

if ($conn->query($sql) === TRUE) {
    echo "Skor kepribadian berhasil disimpan";
} else {
    echo "Kesalahan: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>
