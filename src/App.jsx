import { useState } from "react";
import "./App.css";
import { TShirt } from "@phosphor-icons/react/dist/ssr";
import { Heart, ShoppingCart } from "phosphor-react";

function App() {
  const [activeColor, setActiveColor] = useState("white");
  const handleColorClick = (color) => {
    setActiveColor(color);
  };

  const colorOptions = ["white", "black", "yellow", "blue", "red"];

  const getImageSource = (color) => {
    return `../src/assets/images/tshirt_${color}.png`;
  };
  return (
    <>
      <header>
        <section className="banner-wrapper">
          <nav className="navbar">
            <a href="#" className="navbar-brand">
              <p>
                <TShirt className="navbar-icon" weight="fill" />
              </p>

              <span>T-Shirt</span>
            </a>
            <div className="nav-icons">
              <a href="#">
                <p>
                  <ShoppingCart className="navbar-icon" weight="fill" />
                </p>
              </a>
              <a href="#">
                <p>
                  <Heart className="navbar-icon" weight="fill" />
                </p>
              </a>
            </div>
          </nav>
          <div className="banner-content">
            <div className="banner-left">
              <h2>
                <span>get t-shirt</span> of your selection
              </h2>
              <p>
                Comfort meets style in our premium cotton T-shirt. This
                versatile wardrobe essential boasts a tailored fit, soft fabric,
                and enduring quality. Elevate your casual look with this
                must-have fashion staple.
              </p>
              <button type="button">read more</button>

              <div className="color-content">
                <h3>select color</h3>
                <div className="color-groups">
                  {colorOptions.map((color) => (
                    <div
                      key={color}
                      className={`color color-${color} ${
                        activeColor === color ? "active-color" : ""
                      }`}
                      onClick={() => handleColorClick(color)}
                    ></div>
                  ))}
                </div>
              </div>
            </div>

            <div class="banner-right">
              <img
                src={getImageSource(activeColor)}
                alt={`T-shirt in ${activeColor}`}
              />
            </div>
          </div>
        </section>
      </header>
    </>
  );
}

export default App;
