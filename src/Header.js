import React from 'react'

function Header(props) {
    return (
        <div>
            <div style={{ width:"100%", backgroundColor:"grey", height:"30px" }}>
                {
                    props.countItems ? (
                        <div style={{textAlign:"center"}}>
                        <i class="fas fa-shopping-basket mx-auto">{props.countItems}</i>    
                        </div>
                    ) : (
                        <p className="lead mb-1 text-center">Cart is Empty</p>
                    )
                }
            </div>
        </div>
    )
}

export default Header
