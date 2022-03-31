import React from "react";
import "./Cart.css";

const Cart = ({ cart, handleRemoveFromCart }) => {
    // Conditional rendering options
    // 1. Element variable
    // 2. ternary operator
    // 3. && operator (shorthand) (if true then next)
    // 4. || operator (shorthand) (if false then next)

    // 1. Element variable
    /* let command;
    if (cart.length === 0) {
        command = <p>Please add at least one item!!!</p>;
    } else if (cart.length === 1) {
        command = <p>Please add more...</p>;
    } else {
        command = (
            <p>
                <small>Thanks for adding item</small>
            </p>
        );
    } */

    return (
        <div>
            <h2>Item Selected: {cart.length}</h2>

            {cart.map((tShirt) => (
                <p key={tShirt._id}>
                    {tShirt.name}
                    <button onClick={() => handleRemoveFromCart(tShirt)}>
                        X
                    </button>
                </p>
            ))}

            {/* 1. Element variable */}
            {/* {command} */}

            {/* 2. ternary operator */}
            {/* {cart.length !== 4 ? (
                <p>Keep Adding</p>
            ) : (
                <button>Remove All</button>
            )} */}

            {/* 3. && operator (shorthand) (if true then next) */}
            {/* {cart.length === 3 && (
                <div className="orange">
                    <h3>Triangle</h3>
                    <p>Gift</p>
                </div>
            )} */}

            {/* 4. || operator (shorthand) (if false then next) */}
            {/* {cart.length === 0 || <p className="orange">YAY! You are buying</p>} */}
        </div>
    );
};

export default Cart;
