import React, { Component } from "react";

export default class App extends Component {
    constructor() {
        super();
        this.state() = {
            products: [
                {
                    id: 1,
                    imageUrl: "",
                    title:"",
                    price:12.99,
                    description:""
                },
                {
                    id: 2,
                    imageUrl: "",
                    title:"",
                    price:8.99,
                    description:""
                },
                {
                    id: 2,
                    imageUrl: "",
                    title:"",
                    price:5.99,
                    description:""
                },
            ],
            cart: []
        };
    }
    render(){
        return(
            <div className="App">
             <section className="products">
              <h1>Products</h1>
             </section>

             <section className="cart">
              <h1>Cart</h1>
             </section>
            </div>
        )
    }
}
