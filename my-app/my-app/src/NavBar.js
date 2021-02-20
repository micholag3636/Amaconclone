import React from "react"
import "./NavBar.css"
import LocationOnIcon from '@material-ui/icons/LocationOn';
import SearchIcon from '@material-ui/icons/Search';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Headings from "./Headings.js"


function NavBar(){


    return(
        <div >
            <div className="Nav">
                <div>
                    <img className="logoimg" src="https://i.ibb.co/G2c79h0/amz-removebg-preview.png"/>
                </div>
                <button className="navbut">
                <div className="loc">
                <LocationOnIcon   />

                    <h3 className="droph3" id="addressh3">Select Your Address</h3>
                  

                </div>
                </button>
                <div className="search">
                    

                    <input id="sinput" placeholder="Search"/>
          

                    <div className="slog">
                    <button id="searchb"><SearchIcon /></button>
                    
                    </div  >
                  
                 
                 <div className="sec3">
                     <div>
                      

                         
                         


                     </div>
                     <button className="navbut" >
                     <div className="sec3">
                     <img className="ukflag" src="https://www.countryflags.com/wp-content/uploads/united-kingdom-flag-png-xl.png"></img>
                         
                         <ArrowDropDownIcon className="flagi"/>
                     </div>
                     </button>
                     
                     
                     <button className="navbut">
                         <div className="sec3">
                    <h3 className="droph3">Account & Lists</h3>
                    <ArrowDropDownIcon className="dropicon"/>
                    </div>
                    </button>
                    </div>
                    
                    <button className="navbut">
                    <div className="sec3">
                    <h3 >Returns & Orders</h3>
                    
                    
                    </div>
                    </button>
                    <button className="navbut">
                    <div className="sec3">
                    <ShoppingCartIcon className="icon"/>
                    <h3 className="droph3" id="droph3s">Basket</h3>
                   
                    </div>
                    </button>
                    



                </div>


            </div>
            <Headings />
           






        </div>
       
       


    )


}

export default NavBar