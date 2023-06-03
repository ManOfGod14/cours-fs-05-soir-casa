<?php
    class User {
        // les prorpriétés

        // public : pour accessible la propriété à toute le monde (les fichiers)
        public $userId;
        public $userName;
        public $userPassword;

        // private : pour rendre accessible une propriété uniquement que dans la classe où elle déclarée
        private $userRef;


        /**
         * les méthodes
         * l'objet $this : permet de faire référence à une propriété donnée
         */

        // assigner un valeur a la propriété userId
        public function setUserId($newId) {
            $this->userId = $newId;
        }
        // récupérer la valeur de la propriété userId
        public function getUserId() {
            return $this->userId;
        }

        public function setUserName($newName) {
            $this->userName = $newName;
        }
        public function getUserName() {
            return $this->userName;
        }

        public function setUserPassword($newPass) {
            $this->userPassword = $newPass;
        }
        public function getUserPassword() {
            return $this->userPassword;
        }

        public function getDateTime() {
            // $dt = date('Y-m-d H:i:s'); // format anglais
            $dt = date('d-m-Y H:i:s'); // format français

            $dtt = new DateTime();
            $myDate = $dtt->format('d-m-Y H:i:s');

            return $myDate;
        }

        public function getUserRef() {
            $mdt = $this->getDateTime();

            // convertir une date en time
            $convertDate = strtotime($mdt);

            $this->userRef = $convertDate;

            return $this->userRef;
        }
    }
?>