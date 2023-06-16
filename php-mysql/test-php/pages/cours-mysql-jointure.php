<?php
    // connexion à la base de données 
    // require_once '../resources/db_connect_use_pdo.php';
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Les jointures en SQL</title>
    <link rel="stylesheet" href="../style.css">
    <link rel="stylesheet" href="../formulaire.css">
</head>
<body>
    <?php require_once "../layouts/header.php"; ?>
    <?php include "../layouts/separator.php"; ?>

    <h1>Les jointures en SQL</h1>
    <p>Le but des jointures en SQL est de nous permettre de pouvoir manipuler plusieurs tables.</p>

    <div>
        <h4>Création des tables products et orders</h4>

        <h4>Formulaire pour ajouter produit</h4>
        <?php
            require_once "./products/add-product.php";
        ?>

        <h4>Liste des produits</h4>
        <?php
            require_once "./products/list-products.php";
        ?>

        <h4>la jointure INNER JOIN</h4>
        <?php
            $sqlInnerJoin3table = $dbConnectPDO->prepare("
                SELECT c.id AS idC, c.nom, c.prenom, p.id AS idP, p.designation, p.price, o.quantity
                FROM orders o
                INNER JOIN clients c
                    ON o.id_clients = c.id
                INNER JOIN products p
                    ON o.id_products = p.id
            ");

            $sqlInnerJoin3table->execute();
            $resSqlInnerJoin3table = $sqlInnerJoin3table->fetchAll(PDO::FETCH_ASSOC);

            echo "<pre>";
            echo print_r($resSqlInnerJoin3table);
            echo "<pre>";
        ?>

        <h4>Utilisation de la clause where pour faire une jointure entre 3 tables</h4>
        <?php
            $sqlWhereJoin3table = $dbConnectPDO->prepare("
                SELECT c.id AS idC, c.nom, c.prenom, p.id AS idP, p.designation, p.price, o.quantity
                FROM orders o, clients c, products p
                WHERE o.id_clients = c.id AND o.id_products = p.id
            ");

            $sqlWhereJoin3table->execute();
            $resSqlWhereJoin3table = $sqlWhereJoin3table->fetchAll(PDO::FETCH_ASSOC);

            echo "<pre>";
            echo print_r($resSqlWhereJoin3table);
            echo "<pre>";
        ?>
    </div>

    <?php 
        // fermer la connexion à la base de données
        // $dbConnectPDO = NULL; 
    ?>

    <?php include "../layouts/separator.php"; ?>
    <?php require_once "../layouts/footer.php"; ?>
</body>
</html>