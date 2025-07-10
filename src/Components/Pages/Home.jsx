import React from 'react'
import '../Styles/Header.css';

const Header = () => {

  return (
    <div className="header-container">
      {/* Hero */}
      <div className="hero-container">

      <div className="content" id='hero-img-con'>
          <img src="/public/IMG_3457 (2).jpg" alt="" loading='lazy' className='hero-image'/>
        </div>
        
        <div className="content" id='hero-title-con'>
          <div className="title">Secure & Seamless Banking at Your <span>Convenience.</span></div>
          <img src="/line.png" alt="line" className='line-drawing'/>
          <div className="text">
            <p>Track expenses in real time. Discover the power of our app, 
              designed to put you in control of your financial journey
            </p>
            <button>Get the app</button>
          </div>
        </div>
        
      </div>
      {/* Banner */}
      <div className="partners">
        <img src="/cbn.png" alt="cbn logo" />
        <img src="/ndic.png" alt="nigeria deposit insurance commission logo" />
        <img src="/nibb.png" alt="nibbs logo" />
        <img src="/public/mastercard.png" alt="" />
        <img src="/public/visa.png" alt="" />
      </div>

      <div className="offers-container">
        <div className="offer-content">
          <div className="box">
            <div id="top-inner">
              <img src="/icons/profile-white.png" alt="transfer" />
            </div>

            <div id="bottom-inner">
              <h4 className='title'>Easy Account Opening</h4>
              <p>Instant account opening with amazing welcome bonuses </p>
            </div>
          </div>
          <div className="box">
            <div id="top-inner">
              <img src="/icons/white-arrow.png" alt="transfer" />
            </div>

            <div id="bottom-inner">
              <h4 className='title'>Instant Transfer</h4>
              <p>Instant transfer with 100% successful rate to all banks in Nigeria anytime.</p>
            </div>
          </div>
          <div className="box">
            <div id="top-inner">
              <img src="/icons/airtime.png" alt="transfer" />
            </div>

            <div id="bottom-inner">
              <h4 className='title'>Airtime/Data Top Up Cashback</h4>
              <p>Upto 10% instant cashback on airtime/data top-up everytime.</p>
            </div>
          </div>
          <div className="box">
            <div id="top-inner">
              <img src="/icons/card.png" alt="transfer" />
            </div>

            <div id="bottom-inner">
              <h4 className='title'>Instant and Free Debit Card</h4>
              <p>Apply and get a card instantly at selected opay agents or apply via opay App, enjoy 10 free ATM withdrawal monthly and zero maintainace fee. </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header