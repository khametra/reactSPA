import React from 'react';
const imgs=require('./indian.jpg');
const Home = () => {
return(
  <div class="text-center">
    <h1>Welcome to Indian Cricket Team Home Page!</h1>

  <img src={imgs}/>

  </div>
)
}
export default Home
