import Thumb from "../../assets/images//thumb_house.png";
import './notification.css'

const Notification = () => {

return(
<div className="notifications-container">
  <h1> Notifications </h1>
  <hr />
  <div className="section">
    <div className="description">
      <p> Price Drop</p>
      <p> Your 1234 Main Street saved home</p>
      <p className="bedbath">$325k | 3beds | 3ba | 1986 sqft</p>
    </div>
    <div className="thumbing">
      <img src= {Thumb} alt="house" />
    </div>
  </div>

  <div className="section">
    <div className="description">
      <p> New Listing</p>
      <p> Your 1234 Main Street saved home</p>
      <p className="bedbath">$325k | 3beds | 3ba | 1986 sqft</p>
    </div>
    <div className="thumbing">
      <img src= {Thumb} alt="house" />
    </div>
  </div>

  <div className="section">
    <div className="description">
      <p> New Tour</p>
      <p> Your 1234 Main Street saved home</p>
      <p className="bedbath"s>$325k | 3beds | 3ba | 1986 sqft</p>
    </div>
    <div className="thumbing">
      <img src= {Thumb} alt="house" />
    </div>
  </div>

  <div className="section">
    <div className="description">
      <p> Sold!</p>
      <p> Your 1234 Main Street saved home</p>
      <p className="bedbath"s>$325k | 3beds | 3ba | 1986 sqft</p>
    </div>
    <div className="thumbing">
      <img src= {Thumb} alt="house" />
    </div>
  </div>

  <div className="section">
    <div className="description">
      <p> Price Drop</p>
      <p> Your 1234 Main Street saved home</p>
      <p className="bedbath"s>$325k | 3beds | 3ba | 1986 sqft</p>
    </div>
    <div className="thumbing">
      <img src= {Thumb} alt="house" />
    </div>
  </div>
</div>
)

}
export default Notification