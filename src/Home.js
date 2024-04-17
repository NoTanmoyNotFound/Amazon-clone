import React from 'react'
import "./Home.css"
import Product from './Product'

function Home() {
    return (
        <div className='home'>
            <div className="home__container">
                <img className='home__image' src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/Gateway/ATFGW/MHS_GW_Candle-holders_PC-under._CB560634205_.jpg" />

                <div className="home__row">
                    <Product
                        id ="12345678"
                        title={"Steve Jobs by Walter Isaacson[Hardcover]"}
                        price={499}
                        image={"https://m.media-amazon.com/images/I/51iau+M4IBL._AC_UY218_.jpg"}
                        rating={4}
                    />
                    <Product
                        id ="22345678"
                        title={"Amazon Echo Dot (5th Gen) | Smart speaker with Bigger sound, Motion Detection, Temperature Sensor, Alexa and Bluetooth| Blue "}
                        price={5499}
                        image={"https://m.media-amazon.com/images/I/81lGxS2ZisL._AC_SY200_.jpg"}
                        rating={5} 
                    />


                </div>
                <div className="home__row">
                    <Product
                    id ="22345678"
                        title={"SteelSeries Apex Pro Mini Mechanical Gaming Keyboard – World’s Fastest Keyboard – Adjustable Actuation – Compact 60% Form Factor – RGB – PBT Keycaps – USB-C"}
                        price={5499}
                        image={"https://images-eu.ssl-images-amazon.com/images/I/71iUUN3rSZL._AC_UL160_SR160,160_.jpg"}
                        rating={5} />
                    <Product />
                    <Product />
                </div>
                <div className="home__row">
                    <Product />
                </div>
            </div>
        </div>
    )
}

export default Home
