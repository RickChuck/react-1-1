import React, { Component } from "react";
import Product from "./Components/Product";
import CartItem from "./Components/CartItem";
import "./App.css";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
        cart: [],
        hats: [
            {
                id: 1,
                tile: "Big 'ol Hat",
                description: "Get this... It's a big hat",
                price: 47.98,
                imageUrl: "https://via.placeholder.com/150x150"
            },
            {
                id: 2,
                title: "Adamantium hat",
                description: "Ya'll already know",
                price: 11112.99,
                imageUrl: "https://via.placeholder.com/150x150"
            }
        ],
        beachGear: [
            {
                id: 3,
                title: "Tent",
                description: "For sleeping, but outside.",
                price: 32.99,
                imageUrl: "https://via.placeholder.com/150x150"
            }
        ]
      };
    }

    addToCart = item => {
        this.setState({
          cart: [...this.state.cart, item]
        });
      };
    
      checkout = () => {
        this.setState({ cart: [] });
        alert("Purchase is complete!");
      };
    
      render() {
        return (
          <div className="App">
            <section className="products">
              <h1>Products</h1>
              <h2>Hats</h2>
              {this.state.hats.map(item => (
                <Product key={item.id} item={item} addToCart={this.addToCart} />
                
              ))}
    
              <h2>Beach Gear</h2>
              {this.state.beachGear.map(item => (
                <Product key={item.id} item={item} addToCart={this.addToCart} />
              ))}
            </section>
    
            <section className="cart">
              <h1>Cart</h1>
              <h2>
                Total: $
                {this.state.cart.reduce(
                  (totalPrice, product) => (totalPrice += product.price),
                  0
                )}
              </h2>
              <button onClick={this.checkout}>Checkout</button>
              
              {this.state.cart.map(item => (
                <CartItem key={item.id} item={item} />
              ))}
            </section>
          </div>
        );
      }
    }
