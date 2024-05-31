import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const ramenData = [
  {
    name: "Shoyu Ramen",
    ingredients:
      "Soy sauce-based broth, noodles, chashu (pork belly), menma (bamboo shoots), nori (seaweed), green onions",
    price: 12,
    photoName: "ramen/shoyu.jpg",
    soldOut: false,
  },
  {
    name: "Miso Ramen",
    ingredients:
      "Miso-based broth, noodles, ground pork, bean sprouts, corn, butter, green onions",
    price: 14,
    photoName: "ramen/miso.jpg",
    soldOut: false,
  },
  {
    name: "Tonkotsu Ramen",
    ingredients:
      "Pork bone broth, noodles, chashu (pork belly), soft-boiled egg, kikurage (wood ear mushrooms), green onions",
    price: 15,
    photoName: "ramen/tonkotsu.jpg",
    soldOut: false,
  },
  {
    name: "Shio Ramen",
    ingredients:
      "Salt-based broth, noodles, chashu (pork belly), boiled egg, green onions, narutomaki (fish cake), nori (seaweed)",
    price: 11,
    photoName: "ramen/shio.jpg",
    soldOut: false,
  },
  {
    name: "Spicy Ramen",
    ingredients:
      "Spicy miso or soy sauce-based broth, noodles, chashu (pork belly), soft-boiled egg, chili oil, green onions",
    price: 13,
    photoName: "ramen/spicy.jpg",
    soldOut: true,
  },
  {
    name: "Seafood Ramen",
    ingredients:
      "Seafood-based broth, noodles, shrimp, squid, fish cakes, green onions, nori (seaweed)",
    price: 16,
    photoName: "ramen/seafood.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="header">
      <h1>Best Ramen Shop</h1>
    </header>
  );
}

function Menu() {
  return (
    <div className="menu">
      <h2>Menu</h2>
      <Ramen
        name="Shoyu Ramen"
        ingredients="Soy sauce-based broth, noodles, chashu (pork belly), menma (bamboo shoots), nori (seaweed), green onions"
        photoName="ramen/shoyu.jpg"
        price={800}
      />
      <Ramen
        name="Miso Ramen"
        ingredients="Miso-based broth, noodles, ground pork, bean sprouts, corn, butter, green onions"
        photoName="ramen/miso.jpg"
        price={900}
      />
      <Ramen
        name="Tonkotsu Ramen"
        ingredients="Pork bone broth, noodles, chashu (pork belly), soft-boiled egg, kikurage (wood ear mushrooms), green onions"
        photoName="ramen/tonkotsu.jpg"
        price={1000}
      />
      <Ramen
        name="Shio Ramen"
        ingredients="Salt-based broth, noodles, chashu (pork belly), boiled egg, green onions, narutomaki (fish cake), nori (seaweed)"
        photoName="ramen/shio.jpg"
        price={750}
      />
      <Ramen
        name="Spicy Ramen"
        ingredients="Spicy miso or soy sauce-based broth, noodles, chashu (pork belly), soft-boiled egg, chili oil, green onions"
        photoName="ramen/spicy.jpg"
        price={850}
      />
      <Ramen
        name="Seafood Ramen"
        ingredients="Seafood-based broth, noodles, shrimp, squid, fish cakes, green onions, nori (seaweed)"
        photoName="ramen/seafood.jpg"
        price={1100}
      />
    </div>
  );
}

function Ramen(props) {
  return (
    <div className="ramen">
      <img src={props.photoName} alt={props.name} />
      <div>
        <h3>{props.name}</h3>
        <p>{props.ingredients}</p>
        <span>{"¥"+ props.price}</span>
      </div>
    </div>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour < closeHour;

  return (
    <footer className="footer">
      {new Date().toLocaleDateString()} We're open
    </footer>
  );
  // return React.createElement("footer", null, "copyright 2022"); // for testing only
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
