import React from 'react'
import "./Product.css"

function Product(props) {
    return (
        <div>
            <div className="Product">
                <h2>{props.title}</h2>


                <img src={props.img} className="pim"/>
                <a className="thelink" href=" ">{props.link}</a>

            </div>
            
        </div>
    )
}

export default Product
