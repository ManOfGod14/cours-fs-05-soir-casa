<?php
     /**
     * PDO
     */
    $servername = 'localhost';
    $username = 'root';
    $password = '';
    $dbname = 'test_db';

    try {
        $dbConnectPDO = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
        
        // permet de définir le mode d'erreur de PDO sur l'Exception
        $dbConnectPDO->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

        // echo '<h5>Connecté avec succès en utilisant PDO !</h5>';
    } catch(PDOException $e) {
        echo "<h5>Erreur : ". $e->getMessage() ."</h5>";
    }

    // pour fermer la connexion
    // $dbConnectPDO = null;
?>