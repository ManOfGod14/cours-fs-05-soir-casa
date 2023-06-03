<?php
    // echo date("Y");
    $year = date("Y");
    $nom = "TCHEROU";
    $prenom = "Maliki";
    $age = 31;
?>

<?php
    // pour créer un cookie
    setcookie('user_name', "MALIKI TCHEROU");
    setcookie('user_pref', 'dark_theme', time() + 3600*24, '/', '', false, true);
?>

<?php
    // pour démarrer une session
    session_start();

    // pour récupérer l'id d'une session
    $id_session = session_id();

    $_SESSION['first_name'] = "Maliki";
    $_SESSION['last_name'] = "TCHEROU";
    $_SESSION['age'] = 31;
    $_SESSION['adresse'] = "31, rue tarik ibn ziad, Casablanca";
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ma première page en PHP</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <?php /*include "header.php";*/ ?>
    <?php require_once "layouts/header.php"; ?>
    <?php include "layouts/separator.php"; ?>

    <h1>Ma première page en PHP</h1>
    <h2>Les variables ne PHP</h2>
    <p>Affichage de l'année avec la structure <b>echo</b> <?php echo ($year); ?></p>
    <p>Affichage de l'année avec la structure <b>print</b> <?php print $year; ?></p>
    
    <p><?php echo "Affichage echo : Je m'appelle ".$prenom." ".$nom." et j'ai ", $age, "ans <br/> J'ai fini avec echo !" ?></p>
    <p><?php print "Affichage print : Je m'appelle ".$prenom." ".$nom." et j'ai ".$age." ans <br/> J'ai fini avec echo !" ?></p>

    <h2>Les types de données en PHP</h2>
    <ul>
        <li>Le type "chaine de caractere" : <b>String</b></li>
        <li>Le type "Nombre entier" : <b>Integer</b></li>
        <li>Le type "Nombre décimal" : <b>Float</b></li>
        <li>Le type "booléen" : <b>Boolean</b></li>
        <li>Le type "booléen" : <b>Boolean</b></li>
        <li>Le type "tableau" : <b>Array</b></li>
        <li>Le type "objet" : <b>Object</b></li>
        <li>Le type "NULL" : <b>NULL</b></li>
        <li>Le type "resource" : <b>Resource</b></li>
    </ul>
    <p>Pour connaitre le type d'une variable on utilise en PHP la fonction gettype</p>
    <p>Le type la varibale $prenom : <?php echo gettype($prenom); ?></p>
    <p>Le type la varibale $age : <?php echo gettype($age); ?></p>

    <h2>Les opérateurs en PHP</h2>
    <p><b>Opérateurs arithmétiques : </b> C'est exactement comme en JS, on l'addition (+); la soustraction (-); /; %; **; ... etc</p>
    <p>Les opérateurs d'affectation et opérateurs combinés :
        <ul>
            <li>.= : Concatène puis affecte le résultat</li>
            <li>+= : Additionne puis affecte le résultat</li>
            <li>-= : Soustrait puis affecte le résultat</li>
            <li>/= : Divise puis affecte le résultat</li>
            <li>*= : Multiplie puis affecte le résultat</li>
            <li>%= : Calcule le modulo puis affecte le résultat</li>
            <li>**= : Elève à la puissance puis affecte le résultat</li>
        </ul>
    </p>

    <h2>Les conditions, les opérateurs de comparaison et les opérateurs logiques</h2>
    <h4>Les conditions :</h4>
    <p>En PHP les conditions sont les suivantes :
        <ul>
            <li>la condition <b>if</b> (si)</li>
            <li>la condition <b>if...else (si...sinon)</b></li>
            <li>la condition <b>if...elseif...else (si...sinon si...sinon)</b></li>
        </ul>
    </p>
    <p>Exemple condition if et else :</p>
    <?php 
        $t = 2;
        if($t > 1) {
            echo "Si condition est vérifiée !";
        } else {
            echo "Si condition non vérifiée !";
        }
    ?>

    <h4>Les opérateurs de comparaisons :</h4>
    <ul>
        <li> == : Sert à tester l'égalité sur des valeurs</li>
        <li> === : Permet de tester l'égalité en termes de valeurs et de types</li>
        <li> != : Ser à tester la différence en valeurs</li>
        <li> <> : Sert à tester la différencde en valeurs</li>
        <li> !== : </li>
        <li> < : </li>
        <li> > : </li>
        <li> <= : </li>
        <li> >= : </li>
    </ul>

    <?php
        $x = 10;
        /**
         * var_dump garde la structure réelle du résultat
         */
        var_dump($x == 4);
        print "<br/>";

        /**
         * echo transformer le résultat en une chaine de caractère avant de l'afficher
         * true devient "1" et false devient "0"
         */
        echo $x == 10; // output 1
        print "<br/>";
        echo $x == 4 ? "Cas où la condition est vérifiée !" : "aCas où la condition n'est ps vérifiée !";
    ?>

    <h4>Les opérateurs logiques :</h4>
    <ul>
        <li> && : Renvoie un true si toutes les comparaisons valent true</li>
        <li> || : Renvoie true si une des comparaisons valent true</li>
        <li> ! : Renvoie true si la comparaison vaut false (et inversement)</li>
    </ul>

    <h2>L'instruction switch :</h2>
    <?php
        $y = 5;
        // 0 : $y stocke la valeur 0
        // 1 : $y stocke la valeur 1
        // 2 : $y stocke la valeur 2
        switch($y) {
            case 0:
                echo "y stocke la valeur 0";
                break;
            
            case 1:
                echo "y stocke la valeur 1";
                break;

            case 2:
                echo "y stocke la valeur 2";
                break;

            default:
                echo "y ne stocke ni 0 ni la valeur ...";
        }
    ?>

    <h2>Les boucles et les opérateurs d'incrémentations :</h2>
    <ul>
        <li>la boucle <b>while</b> (tant que)</li>
        <li>la boucle <b>do...while</b> (faire... tant que)</li>
        <li>la boucle <b>for</b> (pour)</li>
        <li>la boucle <b>foreach</b> (pour chaque)</li>
    </ul>

    <h4>Exemple de la boucle while</h4>
    <?php
        $i = 0;
        while($i < 10) {
            echo "La valeur de i = ". $i . "<br/>";
            $i++;
        }
    ?>

    <h4>Exemple de la boucle for</h4>
    <?php
        for($j = 0; $j < 10; $j++) {
            echo "La valeur de j = ". $j . "<br/>";
        }
    ?>

    <h4>Exemple de la boucle do...while</h4>
    <?php
        $k = 0;
        do {
            echo "La valeur de k = ". $k . "<br/>";
            $k++;
        } while($k < 10)
    ?>

    <h4>Exemple de la boucle foreach</h4>
    <p>La boucle foreach a été crée pour fonctionne qu'avec les tableaux (Array)</p>

    <h2>Utilisation des fonctions include, include_once, require et require_once en PHP :</h2>

    <br />

    <h2>Introduction aux fonctions en PHP :</h2>
    <p>Exemple d'une fonction bonjour() avec "echo" directement dans la fonction pour afficher</p>
    <?php 
        function bonjour() {
            echo "Bonjour tout le monde !";
        }
        bonjour();
    ?>

    <br /><br />
    <p>Exemple d'une fonction bonjour1() avec "echo" hors la fonction pour afficher</p>
    <?php 
        function bonjour1() {
            return "Bonjour tout le monde !";
        }
        echo bonjour1();
    ?>

    <br /><br />
    <p>Exemple d'une fonction bonjour2() avec paramètre</p>
    <?php 
        function bonjour2(string $nomPer = "toi") {
            return "Bonjour ".$nomPer;
        }
        echo bonjour2(), "<br/>";
        echo bonjour2("Maliki");
    ?>

    <h2>Utilisation d'une constante magique en PHP :</h2>
    <?php 
        define("CONST_PI", 3.14);
        echo "Affichede la valeur de ma constante magique PI avec define : ".CONST_PI;
    ?>

    <h2>Gestion des tableaux en >PHP :</h2>
    <?php 
        $tab0 = array(0, 54, 78, 2, 5, 9);
        $tab1 = ["Maliki", "Nabil", "Younes", "Mohcine"];
        echo "La taille de mon tableau tab0 = ".count($tab0);
        print "<br/>";
        echo "La taille de mon tableau tab1 = ".sizeof($tab1);
    ?>
    <p>Exemple d'utilisation de foreach</p>
    
    <?php
        foreach($tab1 as $index => $item) {
            echo "[".$index."] : ".$item."<br/>";
        }
    ?>
    
    <h2>Les varibles superglobales en PHP :</h2>
    <ul>
        <li>$GLOBALS</li>
        <li>$_SERVER</li>
        <li>$_REQUEST</li>
        <li>$_GET</li>
        <li>$_POST</li>
        <li>$_FILES</li>
        <li>$_ENV</li>
        <li>$_COOKIE</li>
        <li>$_SESSION</li>
    </ul>
    
    <h3>Exemple d'utlisation de la variable superglobal $GLOBALS :</h3>
    <?php
        $val1 = "Maliki";
        $val2 = "TCHEROU";
        $val3 = 31;

        function afficheInfos() {
            $mail = "maliki@gmail.com";
            global $val1, $val2, $val3;

            echo 'Je suis '.$GLOBALS['val1'].' '.$GLOBALS['val2'].' j\'ai '.$GLOBALS['val3'].' ans <br/> Mon adresse mail est :'.$mail;
        }
        afficheInfos();

        print("<br/>");

        print_r($GLOBALS);
    ?>

<h3>Exemple d'utlisation de la variable superglobal $_SERVER :</h3>
    <p>La superglobal $_SERVER contient des variables définies 
        par le serveur utilisé ainsi que les informations relatives au script</p>
    <?php
        // renvoie le nom du fichier contenant le script
        echo $_SERVER['PHP_SELF'].'<br/>';

        // renvoie l'adresse IP du serveur qui héberge le fichier
        echo $_SERVER['SERVER_ADDR'].'<br/>';

        // renvoie le nom du serveur qui héberge le fichier
        echo $_SERVER['SERVER_NAME'].'<br/>';

        // renvoie l'adresse IP du visiteur qui demande la page
        echo $_SERVER['REMOTE_ADDR'].'<br/>';

        // renvoie une valeur non vide si le script a été appelé via le protocole HTTPS
        echo $_SERVER['HTTPS'].'<br/>';
    ?>

    <h3>La variable superglobal $_REQUEST :</h3>
    <p>La variable superglobal $_REQUEST va contenir toutes les variables envoyées via HTTP GET, HTTP POST et par les cookies HTTP</p>
    <p> Cette dernière est un tableau associatif qui contient les variables $_GET, $_POST et $_COOKIE</p>

    <h3>La variable superglobal $_ENV</h3>
    <p>La variable superglobal $_ENV va contenir des informations liées à l'environnement dans lequel s'éxécute le script</p>
    <?php
        echo $_ENV['USER']. ' exécute actuellement ce script';
    ?>

    <h3>La variable superglobal $_FILES</h3>
    <p>La variable superglobal $_FILES va contenir des informations sur un fichier téléchargé : le type du fichier, sa taille, son nom, etc.</p>

    <h3>Les variables superglobales $_GET et $_POST</h3>
    <p>les superglobales $_GET et $_POST vont être utilisés pour gérer/manipuler les informations envoyées via un formulaire HTML</p>
    <?php
        if(isset($_POST['prenom'])) {
            echo "Bonjour je m'appelle ".$_POST['prenom'];
        }
    ?>

    <h3>La variable superglobal $_COOKIE</h3>
    <p>La variable superglobal $_COOKIE est un tableau associatif qui contient toutes les variables passées via les cookies HTTP</p>

    <h3>La variable superglobal $_SESSION</h3>
    <p>La variable superglobal $_SESSION est un tableau associatif qui contient toutes les variables de session</p>

    <h2>Création et gestion des cookies en PHP</h2>
    <?php
        if(isset($_COOKIE['user_name'])) {
            echo "Votre nom enregistré dans le cookie est : ".$_COOKIE['user_name'];
        }
    ?>

    <h2>Création et gestion des sessions en PHP</h2>
    <?php
        if($id_session) {
            echo "ID de session récupérer via la fonction prédéfinie 
            session_id() : ".$id_session."<br /><br />";
        }

        if(isset($_COOKIE['PHPSESSID'])) {
            echo "ID de session récupérer via $_COOKIE : ".$_COOKIE['PHPSESSID']."<br />";
        }

        
        // $_SESSION = [
        //     'first_name' => "",
        //     'last_name' => "",
        //     'age' => "",
        //     'domicile' => "",
        // ]
        // isset : permet de vérifier l'existance d'un clé dans tableau
        if(isset($_SESSION['age'])) {
            echo "Tu as : ".$_SESSION['age']." ans <br />";

            // unset : permet de supprimer un clé dans un tableau
            unset($_SESSION['age']);
            // $_SESSION = [
            //     'first_name' => "",
            //     'last_name' => "",
            //     'domicile' => "",
            // ]
        }

        if(isset($_SESSION['age'])) {
            echo "Après suppression de age : ".$_SESSION['age']." ans <br />";
        }

        // session_destroy() : permet de détruire une session
        session_destroy();
        // $_SESSION = [];
        
        // affichons first_name, last_name
        echo "Contenu du nom : ".$_SESSION['last_name']."<br />";
        echo "Contenu du prénom : ".$_SESSION['first_name']."<br />";

        print_r($_SESSION);
    ?>

    <?php include "layouts/separator.php"; ?>
    <?php require_once "layouts/footer.php"; ?>
</body>
</html>