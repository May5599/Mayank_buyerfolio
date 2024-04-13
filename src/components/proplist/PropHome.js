import PropertyList from './PropertyList';
import { onSnapshot, collection } from "firebase/firestore";
import {useEffect, useState} from 'react'
import {db} from '../../firebase';


const PropHome = () => {
	const [propData, setPropData] = useState([])
	const [isPending, setIsPending] = useState(true)
	
	const colRef = collection(db, 'properties')
	useEffect(() => {
    onSnapshot(colRef, snapshot => {
      setPropData(snapshot.docs.map(doc => {
        return {
          id: doc.id,
          ...doc.data()
        }
      }))
			setIsPending(false)
    })
		
  }, [])
	
	return ( 
			<div className="property-list-home">
				<h1>Home</h1>
			
			{isPending && <div> Loading... </div> }	
			
			{propData && <PropertyList properties={propData}/> } 
	
    </div>	
	 );
}

 
export default PropHome