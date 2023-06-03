<?php
    class Admin extends Utilisateur {
        public const ABONNEMENT = 30;

        public function getAbonnement() {
            return self::ABONNEMENT;
        }
    }
?>