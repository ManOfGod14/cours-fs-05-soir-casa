<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>My first web page in Laravel</title>
    <link rel="stylesheet" href="{{ asset('front/style.css') }}">
</head>
<body>
    <h1>My first web page in Laravel</h1>
    <h4>Liste des utilisateurs :</h4>

    <pre>
        <?php 
            print_r($users);
        ?>
    </pre>
</body>
</html>