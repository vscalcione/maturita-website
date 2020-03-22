<?php

	$mittent_name = $_POST['name'] . $_POST['surname'];
	$mitten_email = $_POST['email'];
	$destination_email = "vincenzo99.scalcione@gmail.com";

	$object_email = "Test Email"
	$body_email = $_POST['message'];

    if (mail($destination_email, $object_email, $body_email))
      echo "Messaggio inviato con successo a " . $destination_email;
    else
      echo "Errore. Nessun messaggio inviato.";
?>
