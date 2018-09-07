<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <link rel="stylesheet" href="main.css" style="text/css">
    <link rel="stylesheet" href="normalize.css">
    <link href="https://fonts.googleapis.com/css?family=Josefin+Sans" rel="stylesheet">
    <title>BELGIA</title>
  </head>
  <body>
    <section class="main_section">
      <div class="header">
          <h1 class="header_items"> WALUTA </h1>
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
           <a href="../project/page3.php" class="main-menu-items-inside">  ZDJECIA   </a>
         </li>
         <li class="main-menu-items">
           <a href="../project/page4.php" class="main-menu-items-inside">  WALUTA </a>
         </li>
       </ul>
     </nav>
     <div class="currency">
       <div class="currency-button">
       <a onclick="waluta()">WALUTA</a>
       </div>
       <div id="currency-answer" class="currency-answer"></div>
       </div>

     <footer class="footer">
         <div id="clock" class="clock"></div>
         <div id="date" class="date"></div>
     </footer>

 <script src="main.js"> </script>
    </section>

  </body>
</html>
