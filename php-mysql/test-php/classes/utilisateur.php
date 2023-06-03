<?php 
    class Utilisateur {
        private $nom;
        private $prenom;
        private $password;

        public function __construct($n, $p, $pw)
        {
            $this->nom = $n;
            $this->prenom = $p;
            $this->password = $pw;
        }
        
        public function getNom() {
            return $this->nom;
        }

        public function getPrenom() {
            return $this->prenom;
        }

        public function getPassword() {
            return $this->password;
        }

        public function hashPassword($uPass) {
            // password_hash : pour hasher le mot passe
            return password_hash($uPass, PASSWORD_DEFAULT);
        }

        public function checkPassword($uPass) {
            // password_verify : pour vérifier si deux mot de passe correspondent
            return password_verify($uPass, $this->getPassword());
        }
    }
?>