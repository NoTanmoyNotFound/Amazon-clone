import React from 'react'
import "./Home.css"
import Product from './Product'

function Home() {
    return (
        <div className='home'>
            <div className="home__container">
                <img className='home__image' src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/Gateway/ATFGW/MHS_GW_Candle-holders_PC-under._CB560634205_.jpg"  />

                <div className="home__row">
                    <Product />
                    <Product />
                    
                    {/* product */}
                </div>
                <div className="home__row">
                    {/* product */}
                    {/* product */}
                    {/* product */}
                </div>
                <div className="home__row">
                    {/* product */}
                </div>
            </div>
        </div>
    )
}

export default Home
