const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end(`<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Food ordering</title>
      <link href="https://fonts.googleapis.com/css2?family=Licorice&family=Readex+Pro:wght@300;400&family=Vujahday+Script&display=swap" rel="stylesheet">
      <link href="https://fonts.googleapis.com/css2?family=Baloo+2&display=swap" rel="stylesheet">
      <!-- <link rel="stylesheet" href="css/style.css"> -->
      <!-- <link rel="stylesheet" href="css/style.css"> -->
      <style>
          .navbar{
              display: flex;
              justify-content: center;
              border:2px solid black;
              font-family: 'Baloo 2', cursive;
          }
          
          .nav{
              text-decoration: none;
              padding: 2px 2px;
              margin: 2px 2px;
              color:rgb(81 39 39);
          }
          .nav:hover{
              color: rgb(83, 83, 83);
          }
          .container{
              display:flex;
              flex-direction: column;
              justify-content: center;
              align-items: center;
              border: 2px solid red;
              padding: 12px;
              margin: 10px;
  
          }
          .container h2{
              display: flex;
              justify-content: center;
              font-size: 2rem;
              font-family: 'Licorice', cursive;
  
          }
          .container p{
              text-align: center;
              width: 33%;
              font-size: 1rem;
  
          }
          .container::before{
              content: "";
              background: url() no-repeat center center;
              width: 100%;
              height: 100%;
              position: absolute;
              z-index: -1;
              opacity: 0.8;
          }
          .box{
              display: flex;
              text-align: center;
              padding: 2px 2px;
              margin: 10px 10px;
              
          }
          .food{
              border: 2px solid black;
              padding: 2px 2px;
              margin: 2px 2px;
              
          }
          .order{
              border:2px solid black;
              padding: 2px 2px;
              margin: 2px 2px;
          }
          .delivery{
              border: 2px solid black;
              padding: 2px 2px;
              margin: 2px 2px;
  
          }
          .contact{
              display: flex;
              justify-content: center;
              flex-direction: column;
              align-items: center;
              border: 2px solid black;
              padding: 2px 2px;
              margin: 2px 2px;
              
          }
          .contact h2{
              display: flex;
              justify-content: center;
          }
          .contact input{
              display: flex;
              flex-direction: column;
              justify-content: center;
              align-items: center;    
          }
          .about{
              display: flex;
              justify-content: center;
              align-items: center;
              flex-direction: column;
              border: 2px solid black;
              margin: 12px 2px;
          }
          .about h3{
              padding: 23px;
          }
          .about p{
              padding: 0px 2px;
              margin: 0px 2px;
              width:34%;
          }      
      </style>
  </head>
  <body>
      <nav class="navbar">
          <ul>
           <a href="#" class="nav" id="nav1" target="_blank" >Home</a> 
           <a href="#" class="nav" id="nav2" target="_blank" >Services</a> 
           <a href="#" class="nav" id="nav3" target="_blank" >About</a>  
           <a href="#" class="nav" id="nav4" target="_blank" >Contact us</a> 
          </ul>
      </nav>
      <section class="container">
              <h2>Welcome to this food Ordering Website</h2>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa quas, distinctio similique officiis blanditiis voluptatibus dignissimos dolore dolorum odio officia, alias error quos corrupti facilis veniam accusantium excepturi vel totam nihil nemo assumenda a.</p>
       </section>
       <section class="box">
           <div class="food">
               <h4>Food</h4>
               <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit dolore iure, corrupti totam nisi ipsam quam suscipit enim laboriosam laborum! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur rerum illum exercitationem temporibus ex aperiam ab dicta, corrupti autem, optio provident sunt impedit quae asperiores eveniet? Velit quas totam earum quisquam quam tempore esse?\</p>
               <button class="btn">Menu...</button>
           </div>
           <div class="order">
               <h4>Order</h4>
               <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit dolore iure, corrupti totam nisi ipsam quam suscipit enim laboriosam laborum! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur rerum illum exercitationem temporibus ex aperiam ab dicta, corrupti autem, optio provident sunt impedit quae asperiores eveniet? Velit quas totam earum quisquam quam tempore esse?\</p>
           </div>
           <div class="delivery">
               <h4>Delivery</h4>
               <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit dolore iure, corrupti totam nisi ipsam quam suscipit enim laboriosam laborum! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur rerum illum exercitationem temporibus ex aperiam ab dicta, corrupti autem, optio provident sunt impedit quae asperiores eveniet? Velit quas totam earum quisquam quam tempore esse?\</p>
           </div>
       </section>
       <section class="contact">
           <h2>Contact us</h2>
           <form action="php">
               <label for="name">Name:</label>
               <input type="text" name="name" id="name" placeholder="Enter you Name">
               <label for="address">Address:</label>
               <input type="text" name="address" id="address" placeholder="Enter you Address">
               <label for="email">Email:</label>
               <input type="text" name="email" id="email" placeholder="Enter you email">
               <label for="phone">Phone:</label>
               <input type="text" name="phone" id="phone" placeholder="Enter you Phone no.">
           </form>
       </section>
       <section class="about">
           <h3>About</h3>
           <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero fuga harum nostrum, ducimus possimus laborum doloribus voluptatum, quisquam, dolore quo modi aperiam repellat hic vero atque! Natus adipisci minima ullam maxime animi. Sapiente, ipsum?</p>
       </section>
  </body>
  </html>`);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
// console.log("Hello world")