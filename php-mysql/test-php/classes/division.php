<?php
    class Division {
        public $numerateur;
        public $denominateur;

        public function __construct($nume, $deno) {
            $this->numerateur = $nume;
            $this->denominateur = $deno;
        }

        public function calculer() {
            if($this->denominateur == 0) {
                throw new Exception("La division par 0 est impossible !", 20);
            } else {
                try {
                    return $this->numerateur / $this->denominateur;
                } catch (Exception $e) {
                    return "Message d'erreur : " . $e->getMessage() . "<br />" .
                    "Code de l'erreur : " . $e->getCode() . "<br />" .
                    "Fichier : " . $e->getFile();
                }
            }
        }
    }
?>