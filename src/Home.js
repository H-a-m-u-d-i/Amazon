import React from 'react'
import "./Home.css"
import Product from './Product'

function Home() {
  return (
    <div className="home">
        <div className="home__container">
            <img
            className="home__image"
            src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
            alt=""
            />
            <div className='home__row'>
            <Product
            id="12321341"
            title="Clever Fox Budget Planner
            If you're serious about saving money in the new year, get yourself this budget planner from Clever Fox. "
            price={11.96}
            rating={5}
            image="https://akns-images.eonline.com/eol_images/Entire_Site/20211129/rs_640x640-211229195812-EB3CA1AF-0FA2-475B-81EB-39E142EB3E74.png?fit=around%7C400:400&output-quality=90&crop=400:400;center,top"
          />
          <Product
            id="49538094"
            title="Dash Deluxe Compact Masticating Slow Juicer"
            price={79.99}
            rating={4}
            image="https://www.eatingwell.com/thmb/qvAriCQsSbk9m6Nd-N-OHAesyTI=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/dash-deluxe-compact-masticating-slow-juicer-b4510afb4a8141ceb3c747d891bf4dc8.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="4903850"
            title="Realme 9 Pro+
            Qualcomm Snapdragon 695 5G Processor"
            price={525}
            rating={3}
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThqDOjY3RVL_s0F1HX9soHoYaQzu3T0bz5nw&usqp=CAU"
            
          />
          <Product
            id="23445930"
            title="KitchenAid Full-Size Dish Rack"
            price={98.99}
            rating={5}
            image="https://www.eatingwell.com/thmb/L1W6IghqdKhkA6oO01fSNo88L3Y=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/kitchenaid-full-size-dish-rack-ef6558928ef84672b2606fd5f4d75899.jpg"
          />
          <Product
            id="3254354345"
            title="CeraVe Moisturizing Cream and Hydrating Face Wash Trial Combo)"
            price={28.99}
            rating={4}
            image="https://media.glamour.com/photos/61ba1b2b1332636732e2c4a7/3:4/w_960%2Cc_limit/cerave%2520bundle.png"
          />
        </div>
        <div className="home__row">
          <Product
            id="90829332"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
            price={1094.98}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="4903850"
            title="Nekteck Shiatsu Back and Neck Massager"
            price={69.99}
            rating={3}
            image="https://media.glamour.com/photos/618e6b22d0c50748d439a4ad/3:4/w_960%2Cc_limit/Nekteck%2520Shiatsu%2520Back%2520and%2520Neck%2520Massager.png"
            
          />
          <Product
            id="23445930"
            title="Parachute Organic Cloud Cotton Duvet Cover Set"
            price={240}
            rating={5}
            image="https://media.glamour.com/photos/63dff7b838cf710097af61ee/3:4/w_640%2Cc_limit/Parachute%2520Organic%2520Cloud%2520Cotton%2520Duvet%2520Cover%2520Set%2520.png"
          />
          <Product
            id="3254354345"
            title="Patagonia Ultralight Black Hole Tote/Backpack"
            price={99}
            rating={4}
            image="https://media.glamour.com/photos/641b02bbb80f2edfbccc8eb6/3:4/w_640%2Cc_limit/Patagonia%2520Ultralight%2520Black%2520Hole%2520Tote%2520Pack.png"
          />
        </div>


        </div>
    </div>
  )
}

export default Home