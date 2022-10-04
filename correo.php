<?php
$to = "hearagmu@gmail.com";
$subject = "Asunto del email";
$message = "Este es mi primer envío de email con PHP";
 

if (mail($to, $subject, $message)) {
    echo 'ok';
} else {
    echo 'naranjas';
}


?>