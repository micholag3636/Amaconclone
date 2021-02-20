import React from 'react'
import "./Main.css"
import Product from "./Product.js"
import ImageSlider from "./ImageSlider.js"
import { render } from 'react-dom'





function Main() {
    return (
        <div>
          
            <div className="Main">
            <div className="back"> 
            <Product link="Learn more" title="Start 30 days free Amazon Music Unlimited" img="https://images-eu.ssl-images-amazon.com/images/G/02/AmazonMusic/2021/Marketing/EvergreenQ1/Gateway/UK-EN_AMU_EvergreenQ1_DMUX-3799_JZ_OnS_GW_CategoryCard_D_379x304_1X._SY304_CB661789485_.jpg"/>
            <Product link="Find out more"title="Free delivery on your first order" img="https://images-eu.ssl-images-amazon.com/images/G/02/Gateway/Lifecycle/NTA/XCM_Manual_1221983_1157171_FR_dex_it_free_shipping_379x304_8f45ac54-8355-4883-ac32-14596176be39_v2._SY304_CB433639772_.jpg"/>
            <Product link="Learn more" title="Free streaming music" img="https://images-eu.ssl-images-amazon.com/images/G/02/AmazonMusic/2021/Marketing/EvergreenQ1/Gateway/UK-EN_AMF_EvergreenQ1_DMUX-3799_JZ_OnS_GW_CategoryCard_D_379x304_1X._SY304_CB661903594_.jpg/"/>

            <div className="Product" id="cp"> 
            <div>
            <h2 id="butt" > Today's Deals</h2>
            <p id="boxp">Looking for a Deal? Browse 1000s of Deals on top selling products</p>

            <a id="slink" className="thelink" href="">Shop all Deals</a>
            </div>
                

               
               <img className="mainimg"src="https://images-eu.ssl-images-amazon.com/images/G/01/ape/fallback/static/GB_GC_GW_backup_._V278268465_.jpg"/> 
                
            </div>
            
           </div>
           
            
            
            </div>
            
        </div>
    )
}

export default Main
