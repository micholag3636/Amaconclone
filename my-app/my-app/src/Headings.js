import React from 'react'
import "./Headings.css"
import TocIcon from '@material-ui/icons/Toc';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

function Headings() {
    return (
        <div >
            <div className="Headings">
                <div className="First">
                    <button>
                    
                    <TocIcon className="icon"/ >
                    <h3 className="sh1">All</h3>
                    </button>
                </div>
                <div>
                    <button >
                    <h3>Best Sellers</h3>
                    </button>


                </div>
                <div>
                    <button >
                    <h3>Prime Video</h3>
                    </button>


                </div>
                <div>
                    <button >
                    <h3>Today's Deals</h3>
                    </button>


                </div>
                <div>
                    <button >
                    <h3>Customer Service</h3>
                    </button>


                </div>
                <div>
                    <button >
                    <h3>New Releases</h3>
                    </button>


                </div>
                <div>
                    <button >
                    <h3 className="sh12"> Prime</h3>
                    <ArrowDropDownIcon className="icons"/>
                    </button>


                </div>
                <div>
                    <button >
                    <h3>Books</h3>
                    </button>


                </div>
                <div>
                    <button >
                    <h3>Gift Ideas</h3>
                    </button>


                </div>
                <div>
                    <button >
                    <h3>Electronics</h3>
                    </button>


                </div>
                <div>
                    <button >
                    <h3>Gift Cards & Top Up</h3>
                    </button>


                </div>
                <div>
                    <button >
                    <h3>Home & Garden</h3>
                    </button>


                </div>
                <div>
                    <button >
                    <h3>Beauty</h3>
                    </button>


                </div>
                <div>
                    <button >
                    <h3>Vouchers</h3>
                    </button>


                </div>
                <div>
                    <button >
                    <h3>Kindle Books</h3>
                    </button>


                </div>
                
                
                




            </div>
            
        </div>
    )
}

export default Headings
