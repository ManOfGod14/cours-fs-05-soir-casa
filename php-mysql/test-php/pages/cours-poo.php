<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cours programmation Orientée Objet en PHP</title>
    <link rel="stylesheet" href="../style.css">
</head>
<body>
    <?php require_once "../layouts/header.php"; ?>
    <?php include "../layouts/separator.php"; ?>

    <h1>Cours programmation Orientée Objet en PHP</h1>

    <h2>Encapsulation et visibilité des propriétés et méthodes en PHP</h2>
    <p>Depuis la version PHP 7.1.0, nous avons la possibilité de définir des niveaux de visibilité ou d’accessibilité différents pour les propriétés, méthodes et constantes en utilisant les mot clefs : <b>public, private et protected</b>.</p>
    <p>
        <ul>
            <li><b>public</b> : Les propriétés, méthodes ou constantes définies avec le mot clef <b>public</b> seront être accessibles partout (depuis l’intérieur ou l’extérieur de la classe)</li>
            <li><b>private</b> : Les propriétés, méthodes ou constantes définies avec le mot clef <b>private</b> seront accessibles uniquement que depuis l’intérieur de la classe où elles ont été définies.</li>
            <li><b>protected</b> : Les propriétés, méthodes ou constantes définies avec le mot clef <b>protected</b> seront accessibles que depuis l’intérieur de la classe qui les a définies et depuis les classes qui en héritent de cette classe.</li>
        </ul>
    </p>

    <h2>Classes et objets en PHP</h2>
    <?php
        require "../classes/user.php";

        // instancier la classe User (créer un instance de la classe User)
        $user = new User();
    ?>

    <h4>Exemple d'utilisation des propriétés</h4>
    <?php
        $user->userId = 1;
        $user->userName = "Maliki";
        $user->userPassword = "88585";

        echo "<span>ID : " . $user->userId . "</span><br />";
        echo "<span>Nom : " . $user->userName ."</span><br />";
        echo "<span>Password : " . $user->userPassword . "</span><br />";
    ?>

    <h4>Exemple d'utilisation des méthodes</h4>
    <?php
        $user->setUserId(2);
        $user->setUserName("t.maliki");
        $user->setUserPassword("285441");

        echo "<span>ID : " . $user->getUserId() . "</span><br />";
        echo "<span>Nom : " . $user->getUserName() ."</span><br />";
        echo "<span>Password : " . $user->getUserPassword() . "</span><br />";
        echo "<span>Date/Heure : " . $user->getDateTime() . "</span><br />";
        echo "<span>Référence : " . $user->getUserRef() . "</span><br />";
    ?>

    <h4>Les méthodes constructeur et destructeur en PHP</h4>
    <?php
        require_once "../classes/utilisateur.php";
    ?>

    <?php
        $maliki = new Utilisateur("TCHEROU", "Maliki", "123456");
        $nabil = new Utilisateur("MOKHLISS", "Nabil", "5865655");
        $younes = new Utilisateur("EL HAYAT", "Younes", "74444");
        $mohcine = new Utilisateur("LABZAZE", "Mohcine", "4877877");
        
        echo "<span>Nom : " . $maliki->getNom() . "</span><br />";
        echo "<span>Prénom : " . $maliki->getPrenom() ."</span><br />";
        echo "<span>Password : " . $maliki->getPassword() . "</span><br />";
    ?>

    <div>
        <h4>Ajouter un utilisateur</h4>
        <form action="" method="post">
            <label>Nom :</label>
            <input type="text" name="nom">

            <br /><br />
            <label>Prénom :</label>
            <input type="text" name="prenom">
            
            <br /><br />
            <label>Password :</label>
            <input type="password" name="password">

            <br /><br />
            <button type="submit">Créer un utilisateur</button>
        </form>

        <h5>Résultat : </h5>
        <?php
            if(isset($_POST['nom']) && isset($_POST['prenom']) && isset($_POST['password'])) {
                $nom = $_POST['nom'];
                $prenom = $_POST['prenom'];
                $pass = $_POST['password'];
                $addUser = new Utilisateur($nom, $prenom, $pass);

                echo "<span>Nom : " . $addUser->getNom() . "</span><br />";
                echo "<span>Prénom : " . $addUser->getPrenom() ."</span><br />";
                echo "<span>Password en claire : " . $addUser->getPassword() . "</span><br />";
                echo "<span>Password hasher/crypter : " . $addUser->hashPassword($addUser->getPassword()) . "</span><br />";
            }
        ?>
    </div>

    <h4>Classes étendues / Héritage en PHP Orienté Objet</h4>
    <?php
        require_once "../classes/admin.php";

        $admin = new Admin("Administrator", "Test", "123456");

        echo "<span>Nom : " . $admin->getNom() . "</span><br />";
        echo "<span>Prénom : " . $admin->getPrenom() ."</span><br />";
        echo "<span>Password en claire : " . $admin->getPassword() . "</span><br />";
        echo "<span>Password hasher/crypter : " . $admin->hashPassword($admin->getPassword()) . "</span><br />";
    ?>

    <?php include "../layouts/separator.php"; ?>
    <?php require_once "../layouts/footer.php"; ?>
</body>
</html>