import React from 'react';
import './css/app.css';
import Cards from './Cards';
import Subscribe from './Subscribe';
import Footer from './Footer';

 const App = () =>{
   return(
<React.Fragment>
   <header className = "header-nav"></header>
   <main className ="container">
     <Cards/>
     <Subscribe/>
     <Footer/>
     <div className = "row-sixth">
       <p>Powered by <a href="#">your team</a></p>
     </div>
   </main>
</React.Fragment>
   )
 }
export default App;
