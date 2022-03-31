import React, { createContext, useState } from "react";
import Aunty from "../Aunty/Aunty";
import Father from "../Father/Father";
import Uncle from "../Uncle/Uncle";
import "./GrandPa.css";

export const RingContext = createContext("Ring");

const GrandPa = () => {
    const [house, setHouse] = useState(1);

    const ornament = "Diamond Ring";

    const handleBuyAHouse = () => {
        const newHouseCount = house + 1;
        setHouse(newHouseCount);
    };
    return (
        <RingContext.Provider value={ornament}>
            <div className="grandpa">
                <h3>GrandPa</h3>
                <button onClick={handleBuyAHouse}>Buy A House</button>
                <p>House: {house}</p>
                <section style={{ display: "flex" }}>
                    <Father house={house} />
                    <Uncle house={house} />
                    <Aunty house={house} />
                </section>
            </div>
        </RingContext.Provider>
    );
};

export default GrandPa;
