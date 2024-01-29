<?php
if(isset($_POST['name']) && isset($_POST['email']) && isset($_POST['message'])) {
  $name = $_POST['name'];
  $email = $_POST['email'];
  $message = $_POST['message'];

  $to = "noafontaine.pro@gmail.com";
  $subject = "Nouveau message de formulaire de contact";
  $body = "Nom: $name\nEmail: $email\nMessage: $message";

  if(mail($to, $subject, $body)) {
    echo "Message envoyé avec succès";
  } else {
    echo "Une erreur s'est produite lors de l'envoi du message";
  }
}
?>