<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>Document</title>
</head>
<body>

<?php
    session_start();

    if(isset($_COOKIE['email_cookie'])) {
      if($_COOKIE['email_cookie'] == 'rajaTerakhir@gmail.com') {
        $_SESSION['login'] = true;
      }
    }
    if(!isset($_SESSION["login"])){
        header("Location: login.php");
        exit;
    }

    
    

    ?>
<div class="container-fluid main">
    <div class="card">
        <h1>Hello </h1>
        <H1> <?php $email = isset($_SESSION['email']) ? $_SESSION['email'] : "";
        echo $email ?> </H1>
      <form class="form" action="" method="post" >
       
        <button class="button-submit" type="submit" name="logout" >log out</button>
  
        </form>
    </div>


    <?php
            if(isset($_POST['logout']))
            {
               
                func();
            }
            function func()
            {
                // do stuff 
                $_SESSION= [];
                session_unset();
                session_destroy();
                header("Location: login.php");
                exit();  
            }    
        ?>
        


    
  </div>
</body>
</html>