<?php

  if (isset($_POST["message"])){
    $message = "Ce message provient d'une demande de contact via votre site web.

    Prénom : " . $_POST["prenom"] . "
    Nom : " . $_POST["nom"] . "
    Téléphone : " . $_POST["telephone"] . "
    Email : " . $_POST["email"] . "
    Message : " . $_POST["message"];

    $envoie = mail("loris-prepa@gmail.com", "Demande de contact", $message, "From:contact@loris-prepa.com" . $_POST["email"]);

    if ($envoie){
      echo "<p> Le message a bien été envoyé, je vous répondrai par mail dès que possible !</p>";
    }
  }

  ?>