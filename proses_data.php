<?php
if(isset($_POST['email']) && isset($_POST['password'])) {
    $email = $_POST['email'];
    $password = $_POST['password'];
    $emailAsli = "rajaTerakhir@gmail.com";
    $passwordAsli = "PuhSepuh01!";
 



    if ($email==$emailAsli && $password==$passwordAsli) {
        // Set cookie untuk email dengan masa berlaku 24 jam jika "Remember Me" dicentang
        if (isset($_POST['rememberMe']) && $_POST['rememberMe'] == 'on') {
            setcookie('email_cookie', $email, time() + 86400, '/');
        }

        session_start();
        $_SESSION['login'] = true;
        $_SESSION['email'] = $email;
        echo'sucsess';
    }
    else{
        echo'gagal';
    }


}
    
