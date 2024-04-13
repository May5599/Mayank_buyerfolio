import { Link } from "react-router-dom";
import './proplist_styles/propertylist.css'

const PropertyList = ({properties}) => {
  
    return (
        <div className="props-main">
          <h1> All Properties </h1>
          <div className="props-list">
            { properties.map((item) => (
              <div className="preview" key={item.id} >
                <Link to={`/properties/${item.id}`} state={{ data: properties }}>
                  <img src={item.cover} alt='property'></img>
                </Link>
              </div>  
            ))}
          </div>
       </div> 
    );  
  }
       
export default PropertyList;