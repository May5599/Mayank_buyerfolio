import React, { useState } from 'react'
import "./FAQ.css";
export default function FAQ() {
  const faq = [
    {
      question: "What is a Property Co-Ownership Agreement?",
      answer: "The purpose of a Property Co-Ownership Agreement is to clearly lay out the rights and obligations of co-owners and protect all parties in the case of a dispute. It is a major commitment to buy a property with others, and it’s best to create a legal agreement to avoid any future conflicts."
    },
    {
      question: "What is the purpose of a Property Co-Ownership Agreement?",
      answer: "The purpose of a Property Co-Ownership Agreement is to clearly lay out the rights and obligations of co-owners and protect all parties in the case of a dispute. It is a major commitment to buy a property with others, and it’s best to create a legal agreement to avoid any future conflicts."
    },
    {
      question: "What are the key components of a Property Co-Ownership Agreement?",
      answer: "The key components of a Property Co-Ownership Agreement include:"
    },
    {
      question: "What are the financial terms of a Property Co-Ownership Agreement? ",
      answer: "Both parties will be responsible for the monthly payment of the property’s mortgage and the overall loan itself. The mortgage payment shall be split between the parties. If the mortgage amount changes during the course of the agreement due to interest rate changes, both parties agree to continue making payments."
    },
    {
      question: "What are the rights and responsibilities of co-owners in a Property Co-Ownership Agreement?",
      answer: "Both parties agree to hold equal rights, interests, and title to the property. Both parties will be equally responsible for the management, maintenance, and financial needs of the house. Neither party shall incur any encumbrance of any kind on the property without the approval of both parties. Both parties agree to maintain confidentiality on all the information shared within the agreement and not disclose any information to a third party."
    },
    {
      question: "What is the ownership percentage in a Property Co-Ownership Agreement?",
      answer: "The ownership percentage might vary based on how much each party pays into the down payment. This will also affect the interest each party has in the property. Make sure to specify the ownership percentage if it’s not an equal 50/50 split."
    }
  ];

  const SingleFAQ = ({ data, index }) => {
    const [openIndex, setOpenIndex] = useState(null);

    return <div className='faq-closed' onClick={() => setOpenIndex(!openIndex)} key={index}>
      <div className='faq-option'>
        <span className='faq-ques'>{data.question}</span>
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="11" viewBox="0 0 26 17" fill="none">
          <g clip-path="url(#clip0_670_176)">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M0.948709 1.59755C0.389769 2.10359 0.346883 2.96691 0.852917 3.52585L11.5318 15.3213C11.7871 15.6032 12.1484 15.7659 12.5287 15.77C12.9091 15.7742 13.2739 15.6197 13.5354 15.3434L24.6997 3.54805C25.2179 3.00047 25.1942 2.13639 24.6466 1.6181C24.099 1.0998 23.235 1.12355 22.7166 1.67114L12.5661 12.3954L2.87702 1.69334C2.37098 1.1344 1.50765 1.09151 0.948709 1.59755Z" fill="#515151" />
          </g>
          <defs>
            <clipPath id="clip0_670_176">
              <rect width="25.9388" height="16.3824" fill="white" transform="translate(0.0617676 0.312622)" />
            </clipPath>
          </defs>
        </svg>
      </div>
      <span className={openIndex ? "faq-ans-open" : 'faq-ans'}>{data.answer}</span>
    </div>
  }

  return (
    <div className='faq-comp'>
      <span className='faq-head'>Frequently&nbsp;<br />Asked&nbsp;<br />Questions</span>
      <div className='faq-wrapper'>
        {
          faq.map((data, index) => (
            <SingleFAQ data={data} index={index} />
          ))
        }
      </div>
    </div>
  )
}
