<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Introduction aux Bases de Données (SQL, MySQL et phpMyAdmin)</title>
    <link rel="stylesheet" href="../style.css">
</head>
<body>
    <?php require_once "../layouts/header.php"; ?>
    <?php include "../layouts/separator.php"; ?>

    <h1>Introduction aux Bases de Données (SQL, MySQL et phpMyAdmin)</h1>
    <p>SQL : Structured Query Language (Language de Requêtes Structuré en français)</p>
    <p>MySQL : est un système de gestion de bases données</p>
    <p>
        Nous disposons de deux façons différentes pour manipuler nos bases de données MySQL :
        <ul>
            <li>En passant par phpMyAdmin : est un logiciel gratuit qui permet de gérer directement les bases de données MySQL</li>
            <li>En utilisant les Script PHP</li>
        </ul>
    </p>

    <h2>Comment se connecter à MySQL en PHP</h2>
    <p>
        Nous avons deux API (Application Programming Interface) que PHP propose :
        <ul>
            <li>L'extension MySQLi</li>
            <li>L'entension PDO (PHP Data Objects)</li>
        </ul>
    </p>
    <?php
        require_once '../resources/db_connect_use_pdo.php';
         
        // requete de create d'une database
        // $sqlCreateDb = 'CREATE DATABASE test_db2';

        // exécution de la requete
        // $dbConnectPDO->exec($sqlCreateDb);
        // echo 'Database created';

        // requete de create d'une table
        // $sqlCreateTbClients = "CREATE TABLE clients (
        //     id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
        //     nom VARCHAR(255) NOT NULL,
        //     prenom VARCHAR(255) NOT NULL,
        //     email VARCHAR(255) NOT NULL,
        //     adresse VARCHAR(255),
        //     created_at TIMESTAMP,
        //     updated_at TIMESTAMP,
        //     deleted_at TIMESTAMP,
        //     UNIQUE(email)
        // )";

        // // exécution de la requete
        // $dbConnectPDO->exec($sqlCreateTbClients);
        // echo 'Table created';

        // requete d'insertion de valeurs dans une table
        // $sqlInsertClients = "INSERT INTO clients (
        //     id, 
        //     nom, 
        //     prenom, 
        //     email, 
        //     adresse, 
        //     created_at, 
        //     updated_at, 
        //     deleted_at
        // ) 
        // VALUES (
        //     NULL, 
        //     'John', 
        //     'Doe', 
        //     'johndoe@example.com', 
        //     'Casa, bernoussi', 
        //     '2020-01-01 12:01:01', 
        //     NULL, 
        //     NULL
        // )";

        // // exécution de la requete
        // $dbConnectPDO->exec($sqlInsertClients);
        // echo 'Inserted';
    ?>

    <h2>Les requêtes MySQL préparées avec PDO en PHP</h2>
    <p>Comment préparer une requête SQL, pour se faire nous avons étapes :</p>
    <ul>
        <li>Etape 1 : Création d'un template ou schema de requête, en précisant pas les valeurs réelles dans la requête mais en utilisant plutôt des marqueurs nommés (sous forme <b>:nom</b>) ou des marqueurs intérrogatifs (sous forme <b>?</b>). Les marqueurs nommés ou intérrogatifs (paramètres) vont nous permettre de remplacer les vrais valeurs lors de l'exécution de la requête</li>
        <li>Etape 2 : Une fois le template crée, la base de données va analyser, compiler, faire des optimisations sur notre template de requête SQL et va stocker le resultat sans l'exécution</li>
        <li>Etape 3 : En fin, nous allons lier les valeurs à nos marqueurs et la base de données va exécuter la requête</li>
    </ul>
    <h4>Les méthodes execute(), bindParam(), et bindValue()</h4>
    <ul>
        <li><b>execute()</b> : va permettre d'exécuter la requête préparée</li>
        <li><b>bindParam()</b> :  va lier un paramètre à un nom de variable spécifique.</li>
        <li><b>bindValue()</b> : va parmettre d'associer directement une valeur à un paramètre</li>
    </ul>

    <div>
        <h4>Ajouter un client</h4>
        <form action="" method="post">
            <label>Nom :</label>
            <input type="text" name="nom" required>

            <br /><br />
            <label>Prénom :</label>
            <input type="text" name="prenom" required>
            
            <br /><br />
            <label>Email :</label>
            <input type="email" name="email" required>

            <br /><br />
            <label>Adresse :</label>
            <input type="text" name="adresse" required>

            <br /><br />
            <button type="submit">Créer un client</button>
        </form>
        
        <?php
            $nom = NULL;
            $prenom = NULL;
            $email = NULL;
            $adresse = NULL;
            if(isset($_POST['nom']) && isset($_POST['prenom']) && isset($_POST['email']) && isset($_POST['adresse'])) {
                $nom = $_POST['nom'];
                $prenom = $_POST['prenom'];
                $email = $_POST['email'];
                $adresse = $_POST['adresse'];

                // préparation d'une requete sql
                $sqlPrepareInsertClients = $dbConnectPDO->prepare("
                    INSERT INTO clients (
                        nom,
                        prenom, 
                        email, 
                        adresse
                    ) 
                    VALUES (
                        :nom, 
                        :prenom, 
                        :email, 
                        :adresse
                    )
                ");

                // A
                // bindValue
                // $sqlPrepareInsertClients->bindValue(':nom', $nom);
                // $sqlPrepareInsertClients->bindValue(':prenom', $prenom);
                // $sqlPrepareInsertClients->bindValue(':email', $email);
                // $sqlPrepareInsertClients->bindValue(':adresse', $adresse);

                // bindParam
                $sqlPrepareInsertClients->bindParam(':nom', $nom);
                $sqlPrepareInsertClients->bindParam(':prenom', $prenom);
                $sqlPrepareInsertClients->bindParam(':email', $email);
                $sqlPrepareInsertClients->bindParam(':adresse', $adresse);

                $sqlPrepareInsertClients->execute();
                echo "Client crée avec succès !";
            }

        ?>
        <h4>Données saisies :</h4>
        <?php
            echo "<span>Nom : " . $nom . "</span><br />";
            echo "<span>Prénom : " . $prenom ."</span><br />";
            echo "<span>Email : " . $email . "</span><br />";
            echo "<span>Adresse : " . $adresse . "</span><br />";
        ?>
    </div>

    <div>
        <h4>Ajouter un un élément dans test_tab</h4>
        <form action="" method="post">
            <label>Nom :</label>
            <input type="text" name="tnom" required>

            <br /><br />
            <label>Prénom :</label>
            <input type="text" name="tprenom" required>
            
            <br /><br />
            <label>Email :</label>
            <input type="email" name="temail" required>

            <br /><br />
            <button type="submit">Créer un client</button>
        </form>
        
        <?php
            $tnom = NULL;
            $tprenom = NULL;
            $temail = NULL;
            if(isset($_POST['tnom']) && isset($_POST['tprenom']) && isset($_POST['temail'])) {
                $tnom = $_POST['tnom'];
                $tprenom = $_POST['tprenom'];
                $temail = $_POST['temail'];

                // préparation d'une requete sql
                $sqlPrepareInsertClients2 = $dbConnectPDO->prepare("
                    INSERT INTO test_tab (
                        nom,
                        prenom, 
                        email
                    ) 
                    VALUES (
                        ?,
                        ?,
                        ?
                    )
                ");

                // bindParam
                $sqlPrepareInsertClients2->bindParam(1, $tnom);
                $sqlPrepareInsertClients2->bindParam(2, $tprenom);
                $sqlPrepareInsertClients2->bindParam(3, $temail);

                $sqlPrepareInsertClients2->execute();
                echo "Element test_tab crée avec succès !";
            }
        ?>
    </div>

    <div>
        <h4>Modifier les informations d'un élément d'une table</h4>
        <?php
            $sqlEditClientId2 = $dbConnectPDO->prepare("
                UPDATE clients
                SET adresse = :adresse
                WHERE id=2
            ");

            $sqlEditClientId2->bindValue(':adresse', "Faculté de medecine, Casablanca");
            $sqlEditClientId2->execute();
            echo "Client modifié avec succès!";
        ?>
    </div>

    <div>
        <h4>Supprimer une ligne d'une table</h4>
        <?php
            $sqlDelClientId1 = $dbConnectPDO->prepare("
                DELETE FROM clients
                WHERE id=1
            ");
            // $sqlDelClientId1->execute();
            // echo "Client supprimé avec succès!";
        ?>
    </div>
    
    <div>
        <h4>Sélection simple de données dans une table MySQL en PHP</h4>
        <h5>Sélectionnez tous les éléments de table clients</h5>
        <?php
            $sqlSelectClients = $dbConnectPDO->prepare("
                SELECT *
                FROM clients
            ");
            $sqlSelectClients->execute();
            $resClients = $sqlSelectClients->fetchAll(PDO::FETCH_ASSOC);

            echo "<pre>";
                print_r($resClients);
            echo "</pre>";
        ?>

        <h5>Sélectionnez le nom, prenom de la table clients</h5>
        <?php
            $sqlSelectClients2 = $dbConnectPDO->prepare("
                SELECT nom, prenom
                FROM clients
            ");
            $sqlSelectClients2->execute();
            $resClients2 = $sqlSelectClients2->fetchAll(PDO::FETCH_ASSOC);

            echo "<pre>";
                print_r($resClients2);
            echo "</pre>";
        ?>

        <h5>Récupération des valeurs uniques (par colonne) dans une table</h5>
        <?php
            $sqlSelectClients3 = $dbConnectPDO->prepare("
                SELECT DISTINCT prenom
                FROM clients
            ");
            $sqlSelectClients3->execute();
            $resClients3 = $sqlSelectClients3->fetchAll(PDO::FETCH_ASSOC);

            echo "<pre>";
                print_r($resClients3);
            echo "</pre>";
        ?>

        <h5>Ordonner les valeurs récupérées dans une table</h5>
        <?php
            $sqlSelectClients4 = $dbConnectPDO->prepare("
                SELECT nom, prenom
                FROM clients
                ORDER BY nom ASC, prenom DESC
            ");
            $sqlSelectClients4->execute();
            $resClients4 = $sqlSelectClients4->fetchAll(PDO::FETCH_ASSOC);

            echo "<pre>";
                print_r($resClients4);
            echo "</pre>";
        ?>
    </div>

    <div>
        <h4>Utilisation des critères de sélection pour sélectionner des données dans une table MySQL</h4>

        <h5>La clause SQL WHERE (pour conditionner une requête)</h5>
        <?php
            $sqlSelectClients5 = $dbConnectPDO->prepare("
                SELECT id, nom, prenom
                FROM clients
                WHERE nom = 'Baba'
            ");
            $sqlSelectClients5->execute();
            $resClients5 = $sqlSelectClients5->fetchAll(PDO::FETCH_ASSOC);

            echo "<pre>";
                print_r($resClients5);
            echo "</pre>";
        ?>

        <h5>Les opérateurs SQL AND, OR et NOT</h5>
        <h6>AND</h6>
        <?php
            $sqlSelectClients6 = $dbConnectPDO->prepare("
                SELECT id, nom, prenom, age
                FROM clients
                WHERE nom = 'Baba' AND age >= 18
            ");
            $sqlSelectClients6->execute();
            $resClients6 = $sqlSelectClients6->fetchAll(PDO::FETCH_ASSOC);

            echo "<pre>";
                print_r($resClients6);
            echo "</pre>";
        ?>

        <br/>
        <h6>NOT</h6>
        <?php
            $sqlSelectClients6 = $dbConnectPDO->prepare("
                SELECT id, nom, prenom, age
                FROM clients
                WHERE NOT nom = 'Baba'
            ");
            $sqlSelectClients6->execute();
            $resClients6 = $sqlSelectClients6->fetchAll(PDO::FETCH_ASSOC);

            echo "<pre>";
                print_r($resClients6);
            echo "</pre>";
        ?>

        <h5>La clause LIMIT</h5>
        <?php
            $sqlSelectClients7 = $dbConnectPDO->prepare("
                SELECT id, nom, prenom
                FROM clients
                LIMIT 2 OFFSET 2
            ");
            $sqlSelectClients7->execute();
            $resClients7 = $sqlSelectClients7->fetchAll(PDO::FETCH_ASSOC);

            echo "<pre>";
                print_r($resClients7);
            echo "</pre>";
        ?>

        <h5>L'opérateur SQL LIKE (pour les recherches)</h5>
        <?php
            $sqlSelectClients8 = $dbConnectPDO->prepare("
                SELECT id, nom, prenom
                FROM clients
                WHERE nom LIKE '%t%' OR prenom LIKE '%a%'
            ");
            $sqlSelectClients8->execute();
            $resClients8 = $sqlSelectClients8->fetchAll(PDO::FETCH_ASSOC);

            echo "<pre>";
                print_r($resClients8);
            echo "</pre>";
        ?>

        <h5>Les opérateurs IN et BETWEEN</h5>
        <h6>IN</h6>
        <?php
            $sqlSelectClients9 = $dbConnectPDO->prepare("
                SELECT id, nom, prenom, age
                FROM clients
                WHERE age IN (18, 19, 25)
            ");
            $sqlSelectClients9->execute();
            $resClients9 = $sqlSelectClients9->fetchAll(PDO::FETCH_ASSOC);

            echo "<pre>";
                print_r($resClients9);
            echo "</pre>";
        ?>
        <h6>BETWEEN</h6>
        <?php
            $sqlSelectClients9 = $dbConnectPDO->prepare("
                SELECT id, nom, prenom, age
                FROM clients
                WHERE age BETWEEN 18 AND 30
            ");
            $sqlSelectClients9->execute();
            $resClients9 = $sqlSelectClients9->fetchAll(PDO::FETCH_ASSOC);

            echo "<pre>";
                print_r($resClients9);
            echo "</pre>";
        ?>
    </div>

    <div>
        <h4>Utilisation des fonctions d'agrégations et scalaires en SQL</h4>
        <h5>Les fonctions min, max, count, avg, sum, length, round et now</h5>
        <h6>MIN</h6>
        <?php
            $sqlSelectClients10 = $dbConnectPDO->prepare("
                SELECT MIN(age) AS minAge
                FROM clients
            ");
            $sqlSelectClients10->execute();
            $resClients10 = $sqlSelectClients10->fetchAll(PDO::FETCH_ASSOC);

            echo "<pre>";
                print_r($resClients10);
            echo "</pre>";
        ?>
        <h6>MAX</h6>
        <?php
            $sqlSelectClients11 = $dbConnectPDO->prepare("
                SELECT MAX(age) AS maxAge
                FROM clients
            ");
            $sqlSelectClients11->execute();
            $resClients11 = $sqlSelectClients11->fetchAll(PDO::FETCH_ASSOC);

            echo "<pre>";
                print_r($resClients11);
            echo "</pre>";
        ?>
        <h6>COUNT</h6>
        <?php
            $sqlSelectClients12 = $dbConnectPDO->prepare("
                SELECT COUNT(id) AS nbrClient
                FROM clients
                WHERE age >= 18
            ");
            $sqlSelectClients12->execute();
            $resClients12 = $sqlSelectClients12->fetchAll(PDO::FETCH_ASSOC);

            echo "<pre>";
                print_r($resClients12);
            echo "</pre>";
        ?>
        <h6>AVG/ROUND</h6>
        <?php
            $sqlSelectClients13 = $dbConnectPDO->prepare("
                SELECT ROUND(AVG(age), 2) AS moyenneAge
                FROM clients
            ");
            $sqlSelectClients13->execute();
            $resClients13 = $sqlSelectClients13->fetchAll(PDO::FETCH_ASSOC);

            echo "<pre>";
                print_r($resClients13);
            echo "</pre>";
        ?>
        <h6>SUM</h6>
        <?php
            $sqlSelectClients14 = $dbConnectPDO->prepare("
                SELECT SUM(age) AS sommeAge
                FROM clients
            ");
            $sqlSelectClients14->execute();
            $resClients14 = $sqlSelectClients14->fetchAll(PDO::FETCH_ASSOC);

            echo "<pre>";
                print_r($resClients14);
            echo "</pre>";
        ?>
        <h6>NOW : </h6>
        <?php
            $sqlSelectClients15 = $dbConnectPDO->prepare("
                SELECT nom, prenom, NOW() AS dateHeure
                FROM clients
            ");
            $sqlSelectClients15->execute();
            $resClients15 = $sqlSelectClients15->fetchAll(PDO::FETCH_ASSOC);

            echo "<pre>";
                print_r($resClients15);
            echo "</pre>";
        ?>
        <h6>LENGTH : </h6>
        <?php
            $sqlSelectClients16 = $dbConnectPDO->prepare("
                SELECT nom, LENGTH(nom) AS tailleN, prenom, LENGTH(prenom) AS tailleP
                FROM clients
            ");
            $sqlSelectClients16->execute();
            $resClients16 = $sqlSelectClients16->fetchAll(PDO::FETCH_ASSOC);

            echo "<pre>";
                print_r($resClients16);
            echo "</pre>";
        ?>

        <h5>L'instruction GROUP BY</h5>
        <?php
            $sqlSelectClients17 = $dbConnectPDO->prepare("
                SELECT COUNT(id) AS nbrClient, age
                FROM clients
                GROUP BY age
            ");
            $sqlSelectClients17->execute();
            $resClients17 = $sqlSelectClients17->fetchAll(PDO::FETCH_ASSOC);

            echo "<pre>";
                print_r($resClients17);
            echo "</pre>";
        ?>

        <h5>La clause SQL HAVING</h5>
        <?php
            $sqlSelectClients18 = $dbConnectPDO->prepare("
                SELECT COUNT(id) AS nbrClient, age
                FROM clients
                GROUP BY age
                HAVING COUNT(id) < 2
            ");
            $sqlSelectClients18->execute();
            $resClients18 = $sqlSelectClients18->fetchAll(PDO::FETCH_ASSOC);

            echo "<pre>";
                print_r($resClients18);
            echo "</pre>";
        ?>
    </div>

    <?php 
        // fermer la connexion à la base de données
        $dbConnectPDO = NULL; 
    ?>

    <?php include "../layouts/separator.php"; ?>
    <?php require_once "../layouts/footer.php"; ?>
</body>
</html>