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
            $sqlDelClientId1->execute();

            echo "Client supprimé avec succès!";
        ?>
    </div>

    <?php include "../layouts/separator.php"; ?>
    <?php require_once "../layouts/footer.php"; ?>
</body>
</html>