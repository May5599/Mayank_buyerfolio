import React from 'react'
import './LandingFirstComp.css';
import Company1 from "../../../assets/icons/company1.png";
import Company2 from "../../../assets/icons/company2.png";
import Company3 from "../../../assets/icons/company3.png";
import Company4 from "../../../assets/icons/company4.png";
import Company5 from "../../../assets/icons/company5.png";
import playstore from "../../../assets/icons/playstore.png"
export default function LandingFirstComp() {
  return (
    <div className='landing-main1'>
      <span className='landing-main1-header'>reimagining<br/><span className='landing-main1-header-ext'>homeownership</span></span>
      <span className='landing-main1-about'>Explore home Co-Ownership with Buyer Folio as your partner! Your Gateway to Connection and Community.</span>
      <div className='landing-main1-btn-cont'>
        <div className='landing-main1-browse-btn'>
           <button>Browse Properties</button>
        </div>
        <div className='store-buttons'>
          <div className='playstore-button'>
            <svg className='store-icons' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 27" fill="none">
              <path d="M5.51365 3.07645C5.37958 3.05888 5.24203 3.06282 5.10178 3.07886C5.07968 3.08138 5.05845 3.0802 5.03626 3.08367C4.87483 3.09846 4.718 3.14677 4.57525 3.22568C4.4864 3.27421 4.40385 3.33406 4.32953 3.4038C3.85941 3.76768 3.59473 4.3855 3.59473 4.91781V15.3426V25.9768C3.59473 26.5089 3.84166 27.1889 4.43484 27.5196C5.02802 27.8504 5.6994 27.7004 6.14081 27.4258C6.14159 27.425 6.14237 27.4242 6.14315 27.4234C6.07162 27.4682 6.47445 27.2271 6.98326 26.9299C7.49207 26.6328 8.19956 26.2193 9.03792 25.7312C10.7146 24.755 12.9181 23.4738 15.1246 22.1905C17.3312 20.9072 19.5416 19.6236 21.2301 18.6402C22.0743 18.1485 22.787 17.7327 23.3058 17.4295C23.8237 17.1268 24.0789 16.9781 24.2348 16.8807C24.6998 16.5907 25.171 16.031 25.1615 15.3089C25.1521 14.5868 24.6799 14.0601 24.2325 13.7997C24.0323 13.6834 19.6603 11.1427 15.2861 8.59813C13.099 7.32585 10.9118 6.05256 9.24151 5.07908C8.40637 4.59234 7.69964 4.17893 7.1892 3.88039C6.67876 3.58186 6.2936 3.35292 6.3327 3.37733C6.33192 3.37733 6.33114 3.37733 6.33036 3.37733C6.09423 3.23059 5.81378 3.11578 5.51365 3.07645ZM5.99104 7.19244L12.8875 15.3354L5.99104 23.4807V15.3426V7.19244ZM10.2993 8.52833C11.5478 9.25498 12.7296 9.9417 14.1067 10.7428C14.9808 11.2513 15.1175 11.3309 15.8946 11.7826L14.4764 13.4579L10.2993 8.52833ZM18.0218 13.0174C19.4162 13.8276 21.5236 15.0535 22.0211 15.3426C21.5113 15.6404 20.8512 16.0279 20.0483 16.4955C19.4905 16.8204 18.6841 17.2903 18.0311 17.6702C18.0079 17.6343 17.9829 17.5998 17.9562 17.5667L16.0654 15.3354L17.9562 13.1017C17.9793 13.0746 18.0011 13.0465 18.0218 13.0174ZM14.4764 17.2128L15.9086 18.9025C15.2155 19.3056 14.6552 19.6329 13.9452 20.0459C12.6106 20.8221 11.4806 21.4805 10.2642 22.1881L14.4764 17.2128Z" fill="white"/>
            </svg>
           </div>
          <div className='applestore-button'>
             <svg  className='store-icons' xmlns="http://www.w3.org/2000/svg" width="20" height="22" viewBox="0 0 25 27" fill="none">
              <path d="M19.3186 1.77539C17.9371 1.85796 16.3511 2.64958 15.4082 3.65767C14.5563 4.57457 13.8842 5.93632 14.1585 7.25375C15.6598 7.29442 17.1667 6.48229 18.0689 5.45571C18.9112 4.49568 19.5498 3.15567 19.3186 1.77539ZM19.4005 7.25134C17.233 7.25134 16.3268 8.62093 14.8255 8.62093C13.2811 8.62093 11.8692 7.33799 10.0001 7.33799C7.45761 7.33923 3.59277 9.76168 3.59277 15.4689C3.59277 20.6609 8.16692 26.4232 10.749 26.4232C12.3173 26.4392 12.6976 25.4089 14.8255 25.3978C16.9558 25.3818 17.4155 26.4367 18.9863 26.4232C20.7548 26.4096 22.1359 24.4107 23.1447 22.8271C23.8684 21.6933 24.1659 21.1145 24.7267 19.8328C20.5655 18.7483 19.7375 11.8461 24.7267 10.419C23.7849 8.76633 21.036 7.25134 19.4005 7.25134Z" fill="white"/>
             </svg>
          </div>
        </div>
      </div>
      <div className='partner-company-cont'>
        <img src={Company1} className='partner-company-logo'/>
        <img src={Company2} className='partner-company-logo'/>
        <img src={Company3} className='partner-company-logo'/>
        <img src={Company4} className='partner-company-logo'/>
        <img src={Company5} className='partner-company-logo'/>
      </div>
    </div>
  )
}