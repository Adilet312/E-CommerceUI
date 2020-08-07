import React from 'react';
import './css/app.css';
import jeans1 from './assets/jeans1.jpeg';
import jeans2 from './assets/jeans2.jpeg';
import jeans3 from './assets/jeans3.jpeg';
import jeans4 from './assets/jeans4.jpeg';
import mainImage from './assets/main.jpeg';

 const App = () =>{
   return(
<React.Fragment>
   <header className = "header-nav"></header>
   <main className ="container">
     <div className = "row-first">
       <figure>
         <span>Jeans</span>
         <div className = "header-icons">
           <i id = "cart" className="fas fa-shopping-cart"></i>
           <i id = "search" className="fas fa-search"></i>
         </div>
       </figure>
     </div>
     <div className = "row-second">
       <a href = "#">
         <figure>
           <img src = {mainImage}/>
         </figure>
       </a>
     </div>
     <ul className = "row-third-products">
       <li className = "item1">
         <a href = "#">
           <figure>
             <img src = {jeans1}/>
             <figcaption>Ripped Skinny Jeans $24.99</figcaption>
           </figure>
         </a>
       </li>
       <li className = "item2">
         <a href = "#">
           <figure>
             <img src = {jeans2}/>
             <figcaption>Mega Ripped Jeans $19.99</figcaption>
           </figure>
         </a>
       </li>
       <li className = "item3">
         <a href = "#">
           <figure>
             <img src = {jeans3}/>
             <figcaption>Washed Skinny Jeans $20.50</figcaption>
           </figure>
         </a>
       </li>
       <li className = "item4">
         <a href = "#">
           <figure>
             <img src = {jeans3}/>
             <figcaption>Vintage Skinny Jeans $14.99</figcaption>
           </figure>
         </a>
       </li>
       <li className = "item5">
         <a href = "#">
           <figure>
             <img src = {jeans1}/>
             <figcaption>Ripped Skinny Jeans $24.99</figcaption>
           </figure>
         </a>
       </li>
       <li className = "item6">
         <a href = "#">
           <figure>
             <img src = {jeans2}/>
             <figcaption>Mega Ripped Jeans $19.99</figcaption>
           </figure>
         </a>
       </li>
       <li className = "item7">
         <a href = "#">
           <figure>
             <img src = {jeans3}/>
             <figcaption>Washed Skinny Jeans $20.50</figcaption>
           </figure>
         </a>
       </li>
       <li className = "item8">
         <a href = "#">
           <figure>
             <img src = {jeans3}/>
             <figcaption>Vintage Skinny Jeans $14.99</figcaption>
           </figure>
         </a>
       </li>
     </ul>
     <div className = "row-fourth"></div>
     <div className = "row-fifth"></div>
     <div className = "row-sixth"></div>
   </main>
</React.Fragment>
   )
 }
export default App;
