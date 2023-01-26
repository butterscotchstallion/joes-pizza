import './App.css';
import React, { useEffect } from 'react';
import Slice from './components/slice.component';

function App() {
  useEffect(() => {
    document.title = "Joe's Pizza";
  });
  const pizzaSlices = [
    { 
      id: 0,
      name: 'Heaven', 
      filename: 'pizza-1.jpg', 
      altText: 'Pizza slice',
      description: 'A decadent slice of heaven, blessed by an ancient shaman.',
      price: 3.99,
      color: 'purple'
    },
    { 
      id: 1,
      name: 'Corgi-Crafted Pepperoni', 
      filename: 'pizza-2.jpg', 
      altText: 'Pizza slice 2',
      description: 'Pepperonis hand-crafted by a pack of super-intelligent corgis.',
      price: 7.99,
      color: 'goldenrod'
    },
    { 
      id: 2,
      name: 'Embiggened Extra Cheese', 
      filename: 'pizza-3.jpg', 
      altText: 'Pizza slice 3',
      description: 'An exquisite slice embiggened by secret techniques.',
      price: 9.99,
      color: 'green'
    },
    { 
      id: 3,
      name: 'Whispers from an Old God', 
      filename: 'pizza-8.jpg', 
      altText: 'Pizza slice 8',
      description: 'The last whispers of a dying god.',
      price: 9.99,
      color: 'green'
    },
    { 
      id: 4,
      name: 'Cheesey Perfection', 
      filename: 'pizza-5.jpg', 
      altText: 'Pizza slice 5',
      description: 'An incredible amalgamation of cheese.',
      price: 9.99,
      color: 'green'
    },
    { 
      id: 5,
      name: 'The Big One', 
      filename: 'pizza-9.jpg', 
      altText: 'Pizza slice 9',
      description: 'The illustrious Big One, returned at last.',
      price: 9.99,
      color: 'green'
    },
  ];
  const gridItems = pizzaSlices.map((slice) => {
    return (
      <div key={slice.id} className="pizza-grid-item">
        <Slice info={slice} />
      </div>
    );
  });
  return (
    <div className="App">
      <div className="App-grid">
        <header className="App-header header">
          <h1>Joe's Pizza</h1>
          <h4><a href="tel:9995551212">999-555-1212</a></h4>
        </header>

        <section className="content">
          <div className="pizza-grid">
            {gridItems}
          </div>
        </section>

        <footer>
          Joe's Pizza &copy;
        </footer>
      </div>
    </div>
  );
}

export default App;
