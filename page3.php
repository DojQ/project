<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="refresh" content="7">
    <link rel="stylesheet" href="main.css" style="text/css">
    <link rel="stylesheet" href="normalize.css">
    <link href="https://fonts.googleapis.com/css?family=Josefin+Sans" rel="stylesheet">

  </head>
  <body>
    <section class="main_section">
      <div class="header">
          <h1 class="header_items"> CIEKAWOSTKI </h1>
      </div>
      <nav class="main_menu">
       <ul class="main-menu-list">
         <li class="main-menu-items">
           <a href="../project/index.php" class="starter main-menu-items-inside">  BELGIA  </a>
         </li>
         <li class="main-menu-items">
           <a  href="../project/page2.php" class="main-menu-items-inside"> MIASTA </a>
         </li>
         <li class="main-menu-items">
           <a href="../project/page3.php" class="main-menu-items-inside">  CIEKAWOSTKI   </a>
         </li>
         <li class="main-menu-items">
           <a href="../project/page4.php" class="main-menu-items-inside">  WALUTA </a>
         </li>
       </ul>
     </nav>
     <div class="interesting_facts">
          <?php

        include 'dbconnect.php';
        $request = 'SELECT * FROM ciekawostki ORDER BY RAND() LIMIT 2';
        $result = mysqli_query($conn, $request);
        while($rekord = mysqli_fetch_array($result))
          {
            echo $rekord[0]." | ".$rekord[1]."<br>";
          }

        ?>
     </div>



     <footer class="footer">
         <div id="clock" class="clock"></div>
         <div id="date" class="date"></div>
     </footer>

 <script src="main.js"> </script>
    </section>

  </body>
</html>
