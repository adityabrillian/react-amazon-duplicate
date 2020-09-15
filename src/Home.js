import React from 'react';
import './Home.css';
import Product from './Product';

export default function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img
                    src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
                    alt=""
                    className="home__image"
                />
                <div className="home__row">
                    <Product
                        id="2132132141"
                        title="The lean startup"
                        price={200}
                        image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
                        rating={3}
                    />
                    <Product
                        id="1232132141"
                        title="Kenwood kMix Stand Mixer"
                        price={110}
                        image="https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg"
                        rating={4}
                    />
                </div>

                <div className="home__row">
                    <Product
                        id="1234132141"
                        title="FitBit band"
                        price={292}
                        image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
                        rating={3}
                    />
                    <Product
                        id="1233332141"
                        title="Amazon Echo"
                        price={344}
                        image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?"
                        rating={5}
                    />
                    <Product
                        id="1232132123"
                        title="New Apple iPad Pro"
                        price={500}
                        image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L.AC_SX385_.jpg"
                        rating={2}
                    />
                </div>

                <div className="home__row">
                    <Product
                        id="1112132141"
                        title="Samsung LED Monitor"
                        price={630}
                        image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
                        rating={4}
                    />
                </div>
            </div>
        </div>
    );
}
