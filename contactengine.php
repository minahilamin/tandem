<?php


$emailto = "tandeminnovation@gmail.com";
$subject = "Website Submission";
$name = $_POST['name']; 
$organization = $_POST['organization']; 
$email = $_POST['email']; 
$message = $_POST['message']; 

// validation
$errors = '';
$myemail = 'tandeminnovation@gmail.com';
if(empty($_POST['name'])  || 
   empty($_POST['organization']) ||
   empty($_POST['email']) || 
   empty($_POST['message']))
{
    $errors .= "\n Error: all fields are required";
}
 
if (!preg_match(
"/^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})$/i", 
$email))
{
    $errors .= "\n Error: Invalid email address";
}

// prepare email body text
if( empty($errors))
 
{
 
$to = $myemail;
 
$email_subject = "Website Submission: $organization";
 
$email_body = "You have received a new message. ".
 
" Here are the details:\n Name: $name \n ".
 
"Email: $email \n Message \n $message";
 
$headers = "From: $myemail\n";
 
$headers .= "Reply-To: $email_address";
 
mail($to,$email_subject,$email_body,$headers);
 
//redirect to the 'thank you' page
 
header('Location: contact-form-thank-you.html');
 
}
    
?>