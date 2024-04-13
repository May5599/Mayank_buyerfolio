import React from 'react';
import '../css/Article.css';
import Navbar from './Navbar';

const ArticleContent = () => {
    return (
        <div>
            <Navbar />        
        <div className="articles">
            <div className="div">
            <div className="group-2">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                        <img src="/images/img_5.png" alt="Facebook" className="social-icon" />
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                        <img src="/images/img_4.png" alt="Twitter" className="social-icon" />
                    </a>
                    <a href="https://gmail.com" target="_blank" rel="noopener noreferrer">
                        <img src="/images/img_3.png" alt="gmail" className="social-icon" />
                    </a>
                    <a href="https://www.pinterest.com" target="_blank" rel="noopener noreferrer">
                        <img src="/images/img_6.png" alt="Pinterest" className="social-icon" />
                    </a>
                    <a href="https://chatterworks.com/" target="_blank" rel="noopener noreferrer">
                        <img src="/images/img_2.png" alt="Chatter" className="social-icon" />
                    </a>
                </div>
                <p className="p">Jun 3, 2022 • 2 min read | Editorial | Market recap</p>
                <p className="text-wrapper-5">Buying A House With Cash</p>
                <p className="text-wrapper-6">
                Rising interest rates. Record-low inventory. Prices estimated to rise 11%. Multiple offer situations. The
                housing market is difficult for buyers in 2022. The best way to win the home you love is to come to the table
                with cash—which is 3x more likely to win. We know that all cash sounds out of reach for many buyers, but
                Ribbon is here to help make it a reality. Here’s what you need to know about buying a house with cash and what
                we can do together.
                </p>
                <p className="some-lenders-won-t">
                    <span className="span">
                        Some lenders won’t allow you to buy a new home until you sell your current home. Getting this timeline
                        exactly right can be a nightmare—especially if you’re moving out of state. Buying a house with cash will
                        eliminate this step, and if you use RibbonCash you’ll be able to move into your new home immediately so you
                        won’t have to live at a hotel or with family or friends while you wait for your home to sell. <br />
                    </span>
                    <span className="text-wrapper-7">
                        {" "}
                        <br />
                    </span>
                </p>
                <p className="text-wrapper-8">
                    Cash means a secure timeline. Cash means less paperwork. Cash means fewer people in the mix. You can see why
                    it’s preferred, no?
                </p>
                <p className="text-wrapper-9">
                    Ribbon helps buyers turn their offers into all cash so they’re 3x more likely to win. Here’s how it works.
                    First, Ribbon purchases the home on behalf of the buyer for all cash. This gives buyers more time to secure
                    financing from a lender or bank. Ribbon then sells the home back at the exact same purchase price. A win-win.
                    To speak with an expert about how RibbonCash can help, book a free consultation.
                </p>
                <p className="text-wrapper-10">It can eliminate appraisal contingencies.</p>
                <p className="buyers-who-are">
                    Buyers who are getting their financing through a bank or a lender will need an appraisal. This step reduces
                    the risk for the financier. It also helps them understand the value of the home you’re looking at, so they
                    feel confident in the mortgage backing they’re offering. Unfortunately, this contingency is one of the major
                    reasons that home sales can fall through. If a home is under appraised, the lender can pass on financing which
                    leaves the buyer in the lurch. <br /> <br />
                    In a strong sellers market, buying a house with cash can eliminate this contingency. This can be beneficial
                    for buyers who are prone to discrimination like Black and/or LGBTIA+ buyers. In 2021, the appraisal
                    contingency was the most common contingency waived—at 28%.
                </p>
                <p className="text-wrapper-11">
                    Inspection contingencies can lead to expensive repairs for sellers or deals falling through all together. This
                    is especially true if a home is a fixer-upper and needs significant upgrades. Cash buyers are more likely to
                    take a home “as is,” so sellers prefer them. While this can lead to unexpected expenses for buyers, it may be
                    beneficial to cover the cost when the market is as hot as it is in 2022. It’s become such a popular choice
                    that in 2021 the number of buyers forgoing this contingency was up 12% in 2021 making it the second most
                    common contingency waived.
                </p>
                <p className="text-wrapper-12">It can eliminate inspection contingencies.</p>
                <p className="text-wrapper-13">It can eliminate the buy before you sell contingency</p>
                <p className="text-wrapper-14">It creates a faster and more secure deal.</p>
                <p className="text-wrapper-15">How to buy a house with cash, using Buyer Folio</p>
                <div className="text-wrapper-16">Recent</div>
                <img className="weekly-post-image" alt="Weekly post image" src="/images/img_7.jpg" />
                <div className="frame-3">
                    <img className="img-2" alt="Growth images" src="/images/article.jpg" />
                    <img className="img-2" alt="Mask group" src="/images/article2.jpg" />
                    <img className="img-2" alt="Mask group" src="/images/article3.jpg" />
                    <img className="img-2" alt="Mask group" src="/images/article4.jpg" />
                </div>
                <div className="frame-4">
                    <p className="text-wrapper-17">Buyer Folio Welcomes Strong Growrth and Fresh Leadership to its Ranks</p>
                    <p className="text-wrapper-18">Selling? Increase Your Home’s “Screen Appeal”</p>
                    <p className="text-wrapper-18">How You Know You Found The Right Buying Agent</p>
                    <p className="text-wrapper-18">Time-Saving Tips for Both Agents and Buyers</p>
                </div>
                <div className="overlap-wrapper">
                    <div className="overlap">
                        <p className="text-wrapper-19">Looking for a New Place? Use This Time to Create Your Wishlist.</p>
                    </div>
                </div>
                        </div>
                    </div> 
                </div>
    )
}
export default ArticleContent;
