<?php
$conn = mysqli_connect("localhost", "root", "", "psikologi");

if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

$query_kecerdasan = "SELECT * FROM scores";
$skor_kecerdasan = mysqli_query($conn, $query_kecerdasan);

$query_kepribadian = "SELECT * FROM kepribadian";
$skor_kepribadian = mysqli_query($conn, $query_kepribadian);

$query_kecermatan = "SELECT * FROM kecermatan";
$skor_kecermatan = mysqli_query($conn, $query_kecermatan);

mysqli_close($conn);
?>



<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="icon" href="polri.png" type="image/png">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
        integrity="sha512-n+gg5W5nys+6Bfjq+7fiP6hvqsFP6i8qf35d1c5lGucM1pNU5TCp0bBlZwWIOPL1dGj2qLBoHg4mCqDTc1Kz+A=="
        crossorigin="anonymous" referrerpolicy="no-referrer" />
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Poppins:400,700&display=swap">
    <title>Final-score - Psikotes</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-image: linear-gradient(109.6deg, rgba(45, 116, 213, 1) 11.2%, rgba(121, 137, 212, 1) 91.2%);
            ;
            margin: 0;
            padding: 20px;
            display: flex;
            flex-direction: column;
            align-items: center;
        }

        .table-container {
            display: flex;
            margin-bottom: 20px;
        }

        .table-container table {
            margin-right: 20px;
            border-collapse: collapse;
            width: 250px;
        }

        th,
        td {
            border: 1px solid black;
            padding: 8px;
        }

        th {
            background-color: orange;
        }

        .total-credit-column {
            display: flex;
            flex-direction: column;
        }

        .total-credit-column table {
            margin: 0;
            width: auto;
        }

        canvas {
            margin-top: 20px;
            max-width: 50%;
            /* Perkecil ukuran grafik */
            max-height: 30%;
            margin-bottom: 5%;
        }

        h1 {
            text-align: center;
            color: #333;
            /* Warna judul */
            margin-bottom: 20px;
        }

        .table-container table {
            background-color: #fff;
            /* Warna latar belakang tabel */
            border-radius: 8px;
            /* Sudut border */
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
            /* Bayangan tabel */
        }

        .total-credit-column table {
            background-color: #f2f2f2;
            /* Warna latar belakang total credit */
            border-radius: 8px;
            /* Sudut border */
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
            /* Bayangan total credit */
        }

        .container {
            display: flex;
            flex-direction: column;
            padding: 20px;
            justify-content: center;
            text-align: center;
            align-items: center;
            padding-left: 40px;
            padding-right: 40px;
            width: 85%;
            margin-top: 5%;
            margin-left: 4%;
            border-radius: 10px;
            background-color: #ffffff;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }
    </style>
</head>

<body>
    <div class="container">
        <h1>FINAL SCORE</h1>
        <div class="table-container">
            <?php
            if (mysqli_num_rows($skor_kecerdasan) > 0) {
                echo "<table>
                        <tr>
                            <th>ID</th>
                            <th>I Kecerdasan</th>
                            <th>Credit</th>
                        </tr>";

                $firstRow = true; // Membuat variabel untuk menandai baris pertama
                while ($row = mysqli_fetch_assoc($skor_kecerdasan)) {
                    echo "<tr>";
                    
                    // Output ID hanya di baris pertama
                    if ($firstRow) {
                        echo "<td rowspan='3'>{$row['id']}</td>";
                        $firstRow = true; // Setel menjadi false setelah baris pertama
                    }
                    
                    echo "
                        <td>Teknis</td>
                        <td>{$row['creditTeknis']}</td>
                    </tr>
                    <tr>
                        <td>Verbal</td>
                        <td>{$row['creditVerbal']}</td>
                    </tr>
                    <tr>
                        <td>Abstrak</td>
                        <td>{$row['creditAbstrak']}</td>
                    </tr>";
                }

                echo "</table>";

                // Hitung total credit untuk kecerdasan
                $total_credit_kecerdasan = 0;
                mysqli_data_seek($skor_kecerdasan, 0); // Mengatur ulang pointer hasil kueri
                while ($row = mysqli_fetch_assoc($skor_kecerdasan)) {
                    $total_credit_kecerdasan += $row['creditTeknis'] + $row['creditVerbal'] + $row['creditAbstrak'];
                }
                echo "<div class='total-credit-column'>
                        <table>
                            <tr>
                                <th>Total Credit</th>
                            </tr>
                            <tr>
                                <td>{$total_credit_kecerdasan}</td>
                            </tr>
                        </table>
                    </div>";
            } else {
                echo "Tidak ada skor.";
            }
            ?>
        </div>

        <div class="table-container">
            <?php
            if (mysqli_num_rows($skor_kepribadian) > 0) {
                echo "<table>
                        <tr>
                            <th>ID</th>
                            <th>II Kepribadian</th>
                            <th>Credit</th>
                        </tr>";

                $firstRow = true; // Membuat variabel untuk menandai baris pertama
                while ($row = mysqli_fetch_assoc($skor_kepribadian)) {
                    echo "<tr>";
                    
                    // Output ID hanya di baris pertama
                    if ($firstRow) {
                        echo "<td rowspan='5'>{$row['id']}</td>";
                        $firstRow = true; // Setel menjadi false setelah baris pertama
                    }

                    echo "<tr>
                            <td>Percaya diri</td>
                            <td>{$row['percayaDiri']}</td>
                        </tr>
                        <tr>
                            <td>Pengendalian</td>
                            <td>{$row['pengendalianDiri']}</td>
                        </tr>
                        <tr>
                            <td>Proposial</td>
                            <td>{$row['proposial']}</td>
                        </tr>
                        <tr>
                            <td>Penyesuaian</td>
                            <td>{$row['penyesuaian']}</td>
                        </tr>";
                }

                echo "</table>";

                // Hitung total credit untuk kepribadian
                $total_credit_kepribadian = 0;
                mysqli_data_seek($skor_kepribadian, 0); // Mengatur ulang pointer hasil kueri
                while ($row = mysqli_fetch_assoc($skor_kepribadian)) {
                    $total_credit_kepribadian += $row['percayaDiri'] + $row['pengendalianDiri'] + $row['proposial'] + $row['penyesuaian'];
                }
                echo "<div class='total-credit-column'>
                        <table>
                            <tr>
                                <th>Total Credit</th>
                            </tr>
                            <tr>
                                <td>{$total_credit_kepribadian}</td>
                            </tr>
                        </table>
                    </div>";
            } else {
                echo "Tidak ada skor.";
            }
            ?>
        </div>

        <div class="table-container">
            <?php
            if (mysqli_num_rows($skor_kecermatan) > 0) {
                echo "<table>
                        <tr>
                            <th>ID</th>
                            <th>III Kecermatan</th>
                            <th>Credit</th>
                        </tr>";

                        $firstRow = true; // Membuat variabel untuk menandai baris pertama
                        while ($row = mysqli_fetch_assoc($skor_kecermatan)) {
                            echo "<tr>";
                            
                            // Output ID hanya di baris pertama
                            if ($firstRow) {
                                echo "<td rowspan='4'>{$row['id']}</td>";
                                $firstRow = true; // Setel menjadi false setelah baris pertama
                            }

                        echo "<tr>
                            <td>Kecepatan</td>
                            <td>{$row['Kecepatan']}</td>
                        </tr>
                        <tr>
                            <td>Ketelitian</td>
                            <td>{$row['Ketelitian']}</td>
                        </tr>
                        <tr>
                            <td>Daya tahan</td>
                            <td>{$row['DayaTahan']}</td>
                        </tr>";
                }

                echo "</table>";

                // Hitung total credit untuk kecermatan
                $total_credit_kecermatan = 0;
                mysqli_data_seek($skor_kecermatan, 0); // Mengatur ulang pointer hasil kueri
                while ($row = mysqli_fetch_assoc($skor_kecermatan)) {
                    $total_credit_kecermatan += $row['Kecepatan'] + $row['Ketelitian'] + $row['DayaTahan'];
                }
                echo "<div class='total-credit-column'>
                        <table>
                            <tr>
                                <th>Total Credit</th>
                            </tr>
                            <tr>
                                <td>{$total_credit_kecermatan}</td>
                            </tr>
                        </table>
                    </div>";
            } else {
                echo "Tidak ada skor.";
            }
            ?>
        </div>

        <canvas id="grafik-ketelitian" width="300" height="200"></canvas>
        <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
        <script>
            // Data untuk grafik ketelitian
            const dataKetelitian = {
                labels: ["Kecepatan", "Ketelitian", "Daya Tahan"],
                datasets: [{
                    label: "Ketelitian",
                    data: [
                        <?php
                        mysqli_data_seek($skor_kecermatan, 0); // Mengatur ulang pointer hasil kueri
                        while ($row = mysqli_fetch_assoc($skor_kecermatan)) {
                            echo "{$row['Kecepatan']}, {$row['Ketelitian']}, {$row['DayaTahan']}";
                        }
                        ?>
                    ],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                    ],
                    borderWidth: 1
                }]
            };

            // Konfigurasi grafik
            const configKetelitian = {
                type: 'bar',
                data: dataKetelitian,
                options: {
                    scales: {
                        y: {
                            beginAtZero: true
                        }
                    }
                }
            };

            // Menggambar grafik ketelitian
            var myChart = new Chart(
                document.getElementById('grafik-ketelitian'),
                configKetelitian
            );
        </script>

        <?php
        $total_credit_semua = $total_credit_kecerdasan + $total_credit_kepribadian + $total_credit_kecermatan + 40;
        ?>

        <div class="table-container">
            <table>
                <tr>
                    <th>Nilai akhir</th>
                </tr>
                <tr>
                    <td>
                        <?php echo $total_credit_semua; ?>
                    </td>
                </tr>
            </table>
        </div>

    </div>
</body>

</html>