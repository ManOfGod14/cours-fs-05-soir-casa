<?php
    require '../resources/db_connect_use_pdo.php';

    $sqlSelectProducts = $dbConnectPDO->prepare("
        SELECT *
        FROM products
    ");
    $sqlSelectProducts->execute();
    $resProducts = $sqlSelectProducts->fetchAll(PDO::FETCH_ASSOC);
?>
<table>
    <thead>
        <tr>
            <th>#</th>
            <th>Designation</th>
            <th>Description</th>
            <th>Prix U</th>
            <th>Stock</th>
        </tr>
    </thead>
    <tbody>
        <?php
            foreach ($resProducts as $key => $product) {
                echo "<tr>";
                echo "<td>". ($key+1) ."</td>";
                echo "<td>". $product['designation'] ."</td>";
                echo "<td>". $product['description'] ."</td>";
                echo "<td>". $product['price'] ."</td>";
                echo "<td>". $product['stock'] ."</td>";
                echo "</tr>";
            }
        ?>
    </tbody>
</table>