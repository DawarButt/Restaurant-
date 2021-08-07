import React from "react";
import Productbox from "./productbox";
import pimage1 from "../images/s1.png";
import pimage2 from "../images/s2.png";

function Products() {
    return (
        <div id="products">
            <h1>CHOOSE & ENJOY</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus obcaecati aspernatur blanditiis commodi praesentium consectetur, optio quibusdam fugiat ratione, libero itaque aperiam ab minus sapiente? Quaerat debitis veniam recusandae a.</p>
            <div className="a-container">
                <Productbox className={pimage1} title="Zinger Burger"/>
                <Productbox className={pimage2} title="Chicken Burger"/>
                <Productbox className={pimage1} title="Zinger Burger"/>
                
            </div>

        </div>
    )
}

export default Products;
