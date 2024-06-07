<?php
// Koneksi ke database
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "psikologi";

// Membuat koneksi baru
$conn = new mysqli($servername, $username, $password, $dbname);

// Memeriksa koneksi
if ($conn->connect_error) {
    die("Koneksi gagal: " . $conn->connect_error);
}

// Query untuk mengambil data skor dari database kepribadian
$sql = "SELECT * FROM kepribadian ORDER BY id DESC LIMIT 1";
$result = $conn->query($sql);

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="icon" href="polri.png" type="image/png">
    <title>Score - Kepribadian</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background: linear-gradient(109.6deg, rgba(45,116,213,1) 11.2%, rgba(121,137,212,1) 91.2%);
            margin: 0;
            padding: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
        }

        h2 {
            text-align: center;
            color: #333;
            font-size: 24px;
            margin-bottom: 20px;
        }

        table {
            border-collapse: collapse;
            width: 100%;
            background-color: #fff;
            box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
        }

        th, td {
            border: 1px solid #dddddd;
            text-align: left;
            padding: 8px;
        }

        th {
            background-color: #f2f2f2;
        }

        .button {
            background-color: #38419D;
            color: #fff;
            padding: 10px 20px;
            border: none;
            border-radius: 8px;
            cursor: pointer;
            text-decoration: none;
            display: block;
            margin: 20px auto;
            transition: background-color 0.3s;
        }

        .button:hover {
            background-color: #ffffff;
            color: #333;
            transition: background-color 0.3s;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.521);
        }

        .container {
            width: 80%;
            border-radius: 10px;
            background-color: #ffffff;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            padding: 20px;
        }
    </style>
</head>
<body>
    <div class="container">
        <h2>Score Kepribadian</h2>
        <table>
            <tr>
                <th>Percaya Diri</th>
                <th>Pengendalian Diri</th>
                <th>Proposial</th>
                <th>Penyesuaian</th>
            </tr>
            <?php
            if ($result && $result->num_rows > 0) {
                while ($row = $result->fetch_assoc()) {
                    echo "<tr>
                            <td>" . $row["percayaDiri"] . "</td>
                            <td>" . $row["pengendalianDiri"] . "</td>
                            <td>" . $row["proposial"] . "</td>
                            <td>" . $row["penyesuaian"] . "</td>
                        </tr>";
                }
            } else {
                echo "<tr><td colspan='7'>Tidak ada skor</td></tr>";
            }
            ?>
        </table>
        <a href="welcome-kecermatan.html" class="button">Berikutnya</a>
    </div>
</body>
</html>
