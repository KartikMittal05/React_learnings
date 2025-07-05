import React from 'react';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  let foodItems = ['Dal', 'Rice', 'Chapati', 'Paneer', 'Salad'];

  return (
    <React.Fragment>
      <h1>Healthy Food</h1>

       {/* ternary operator conditional rendering others are If-else rendering , logical operator  */}
      {foodItems.length === 0 ? <h3>I am still hungry.</h3>:null}

      <ul class="list-group">

         {/* Using map to iterate over foodItems array and render each item */}

        {foodItems.map((item) => (
          <li class="list-group-item" key={item}>
            {item}
          </li>
        ))

        }

      </ul>
    </React.Fragment>
  );
}

export default App;
