<?php
    require '../../resources/db_connect_use_pdo.php';

    if(isset($_POST['productSubmit'])) {
        
        $designation = $_POST['designation'];
        $description = $_POST['description'];
        $price = $_POST['price'];
        $stock = $_POST['stock'];

        // préparation d'une requete sql
        $sqlInsertProduct = $dbConnectPDO->prepare("
            INSERT INTO products (
                designation,
                description, 
                price,
                stock
            ) 
            VALUES (
                :designation,
                :description,
                :price,
                :stock
            )
        ");

        $sqlInsertProduct->bindParam(':designation', $designation);
        $sqlInsertProduct->bindParam(':description', $description);
        $sqlInsertProduct->bindParam(':price', $price);
        $sqlInsertProduct->bindParam(':stock', $stock);

        $sqlInsertProduct->execute();
        // echo 'Product created successfully !';

        header("location: ../cours-mysql-jointure.php");
        echo "<meta http-equiv='refresh' content='0; url = '/>";
    } else {
        header("location: ../cours-mysql-jointure.php");
        echo "<meta http-equiv='refresh' content='0; url = '/>";
    }
?>