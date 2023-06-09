<?php
    /**
     * MySQLi
     */
    $servername = 'localhost';
    $username = 'root';
    $password = '';
    $dbname = 'test_db';

    // établir la connexion à la base de donnees
    $dbConnect = mysqli_connect($servername, $username, $password);

    // vérifier la connexion
    if(!$dbConnect) {
        "<h5>".die('Erreur : '.mysqli_connect_error())."</h5>";
    } else {
        echo '<h5>Connecté avec succès en utilisant MySQLi !</h5>';
    }

    // pour fermer la connexion
    // mysqli_close($dbConnect);
?>