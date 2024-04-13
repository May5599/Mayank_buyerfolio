import {useState} from 'react';
import { GoogleMap, useLoadScript, MarkerF, InfoWindow } from '@react-google-maps/api';
const libraries = ['places'];

const Map = () => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_API_KEY,
    libraries,
    });
    const [ selected, setSelected ] = useState({});
  
  const onSelect = item => {
    setSelected(item);
  }

  if (loadError) {
    return <div>Error loading maps</div>;
  }

  if (!isLoaded) {
    return <div>Loading maps</div>;
  }
  
  const locations = [
    {
      name: "Location 1",
      location: { 
        lat: 43.668163994,
        lng: -79.370331852,
      },
    },
    {
      name: "Location 2",
      location: { 
        lat: 43.665,
        lng: -79.352,
      },
    },
    {
      name: "Location 3",
      location: { 
        lat: 43.66578,
        lng: -79.3731,
      },
    },
    
  ];
  
	// const mapStyles = {        
  //   height: "55vh",
  //   width: "50vw",
  // };
	
  const defaultCenter = {
    lat: 43.668163994, lng: -79.370331852
  }

  return (
      <div className="google-map">
        <GoogleMap
          // mapContainerStyle={mapStyles}
          mapContainerStyle={{width: '100%',height: '55vh'}}
          zoom={13}
          center={defaultCenter}>
          {
            locations.map(item => {
              return (
              <MarkerF key={item.name} 
              position={item.location} 
              title={item.name} 
              onClick={() => onSelect(item)}
              />

              )
            })
          }
                {  selected.location && 
                  (
                    <InfoWindow
                    position={selected.location}
                    clickable={true}
                    onCloseClick={() => setSelected({})}
                    >
                    <p>{selected.name}</p>
                    </InfoWindow>
                  )
               }
          
     </GoogleMap>
     </div>
  )
}
export default Map;