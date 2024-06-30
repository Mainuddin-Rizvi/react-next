import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

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
  // const style = { color: "red", fontSize: "48px", textTransform: "uppercase" };
  const style = {};

  return (
    <header className="header">
      <h1 style={style}>Fast React Pizza.</h1>
    </header>
  );
}
function Menu() {
  return (
    <main className="menu">
      <h2>Our Menu</h2>
      <Pizza
        name="Pizza Spinaci"
        ingredients="Tomato, mozzarella, spinach, and ricotta cheese"
        photoName="pizzas/spinaci.jpg"
        price={10}
      />

      <Pizza
        name="Pizza Funghi"
        ingredients="Tomato, mozzarella"
        photoName="pizzas/funghi.jpg"
        price={12}
      />
    </main>
  );
}
function Footer() {
  const hour = new Date().getHours();

  const openHour = 12;
  const closeHour = 22;

  const isOpen = hour >= openHour && hour <= closeHour;
  console.log(isOpen);

  // if (hour >= openHour && hour <= closeHour) alert("We're currently open!");
  // else alert("Sorry we're closed!");

  return (
    <footer className="footer">
      {new Date().toLocaleTimeString()} We're Currently Open
    </footer>
  );
  // return React.createElement("footer", null, "We're Currently Open");
}

function Pizza(props) {
  //props passing in component
  return (
    <div className="pizza">
      <img src={props.photoName} alt={props.name} />
      <h2>{props.price}</h2>
      <p>{props.ingredients}</p>
    </div>
  );
}

// New in React 18:
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Before 18
// ReactDOM.render(<App />, document.getElementById("root"));
