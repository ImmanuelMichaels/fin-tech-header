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
        <img src="/mastercard.png" alt="mastercard logo" />
        <img src="/visa.png" alt="visa logo" />
      </div>

      <div className="offers-container">
          <h1>Bank with <span>Finfix</span>.</h1>
          <p>Enjoy a <span>transfer success rate of 99.9%</span> and experience seamless payment transfers. Need to pay some bills, pay a business or send money to a friend? Finfix transfers go through every time. We mean it.</p>
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
      <div className="info-container">
        <div className="container">
            <div className="content">
              <div className="personal-tools-left">
                <div className="small-title">
                  <h2>Instant Transfer</h2>
                </div>
                <div className="text">
                  <h1>Fund your Account, Make Transfers, Pay Bills</h1>
                    <p>  Live life on your own terms! Add money to your Finfix wallet and transfer to other bank accounts for free. Enjoy bonuses on airtime 
                      & data top-ups and fast bill payments at no extra charge.</p>
                </div>

                <div className="cta-container">
                  <button>Get Started</button>
                </div>
              </div>
              <div className="image">
                <img src="/public/tool3.png" alt="" />
              </div>
            </div>
        </div>

        <div className="container">
            <div className="content">
              <div className="personal-tools-left">
                <div className="small-title">
                  <h2>Personal Account</h2>
                </div>
                <div className="text">
                  <h1>One app for all your banking needs</h1>
                    <p>Need to manage your money with ease? We know that your money is important to you, and we take that seriously. Manage your money, make payments and pay bills all from our banking app.</p>
                </div>

                <div className="cta-container">
                  <button>Get Started</button>
                </div>
              </div>
              <div className="image">
                <img src="/hero.png" alt="" />
              </div>
            </div>
        </div>

        <div className="container">
            <div className="content">
              <div className="image">
                <img src="/card.png" alt="" />
              </div>
              <div className="personal-tools-left">
                <div className="small-title">
                  <h2>Debit Cards</h2>
                </div>
                <div className="text">
                  <h1>Instant Debit cards that always work</h1>
                    <p>If transfers aren’t your jam, we get it. Request a debit card and have it delivered to you within 48 hours. Activate it in minutes, and start using it right away.</p>
                </div>

                <div className="cta-container">
                  <button>Get Started</button>
                </div>
              </div>
            </div>
        </div>
      </div>
    
    {/* Why Banking with us */}
      <div className="bg-ys">
        <div className="heading-text">
          <p id='a'>Other Benefits</p>
          <p id='b'>More Reasons to Bank with Finfix</p>
        </div>
        <div className="b-boxes">
          <div className="b-box-content">
              <div className="icon">
                <img src="/icons/art.svg" alt="" />
              </div>
              <div className="text-section">
                <p className="s-head">Advanced Safety Measures</p>
                <h3 className='benefit-sub-head'>State-of-the-art security</h3>
                <p>Finfix uses up-to-date cybersecurity technology to protect your information and prevent unauthorized use.</p>
              </div>
          </div>
          <div className="b-box-content">
              <div className="icon">
                <img src="/icons/pro.svg" alt="" />
              </div>
              <div className="text-section">
                <p className="s-head">Insurance</p>
                <h3 className='benefit-sub-head'>Protection and peace of mind</h3>
                <p>Your funds are insured for up to N250,000 by the Nigerian Deposit Insurance Corporation.</p>
              </div>
          </div>
          <div className="b-box-content">
              <div className="icon">
                <img src="/icons/sim.svg" alt="" />
              </div>
              <div className="text-section">
                <p className="s-head">Simple Limit Upgrade</p>
                <h3 className='benefit-sub-head'>Upgrade Your Limits Easily</h3>
                <p>Reach for the Stars! Effortlessly upgrade your transaction limits and explore new financial possibilities.</p>
              </div>
          </div>
          <div className="b-box-content">
              <div className="icon">
                <img src="/icons/virtual.svg" alt="" />
              </div>
              <div className="text-section">
                <p className="s-head">Virtual Card</p>
                <h3 className='benefit-sub-head'>Extra Layer of Security</h3>
                <p>Stay secure while shopping online with our virtual card feature. Shop confidently, knowing your actual card details are protected.</p>
              </div>
          </div>
          <div className="b-box-content">
              <div className="icon">
                <img src="/icons/business.svg" alt="" />
              </div>
              <div className="text-section">
                <p className="s-head">99.9% reliability</p>
                <h3 className='benefit-sub-head'>Say goodbye to downtimes</h3>
                <p>Pay anywhere with confidence using a banking solution that always never goes offline.</p>
              </div>
          </div>
          <div className="b-box-content">
              <div className="icon">
                <img src="/icons/clock.svg" alt="" />
              </div>
              <div className="text-section">
                <p className="s-head">Anytime, anywhere</p>
                <h3 className='benefit-sub-head'>Round the Clock support</h3>
                <p>We’re always here to talk. Reach our support team however you need to -  by phone, email, in the app, or check out the Help Center.</p>
              </div>
          </div>
        </div>
      
      </div>
    </div>
  )
}

export default Header