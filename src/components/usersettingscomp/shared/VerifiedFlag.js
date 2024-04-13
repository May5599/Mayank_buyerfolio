import React from 'react';
import "./verifiedFlag.css"

const statusStyles = {
  Verified: {
    backgroundColor: '#07A717',
    color: 'white',
    height: '95%',
  },
  Verify: {
    backgroundColor: '#7731E4',
    color: 'white',
    height: '95%',
  },
  NotVerified: {
    backgroundColor: '#FF3C3C',
    color: 'white',
    height: '95%',
  },
};


const VerifiedFlag = ({ status }) => {
  const style = {
    ...statusStyles[status.replace(' ', '')],
  };

  return <span className='verified-flag' style={style}>{status}</span>;
};

export default VerifiedFlag;
