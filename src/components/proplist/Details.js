
import DetailsInterior from './DetailsInterior';
import DetailsProperty from './DetailsProperty';
import DetailsConstruction from './DetailsConstruction';
import './proplist_styles/details.css'
import MaterialAccordion from './MaterialAccordion';
import {useState, useEffect} from 'react';
import { onSnapshot, doc } from "firebase/firestore"
import {db} from '../../firebase';


const Details = ({id}) => {
	const [interior, setInterior] = useState([]);
	const [property, setProperty] = useState([]);
	const [construction, setConstruction] = useState([]);
	const [utility, setUtility] = useState([]);
	const [community, setCommunity] = useState([]);

	const docRef1 = doc(db,"interior", id);
	const docRef2 = doc(db,"property", id);
	const docRef3 = doc(db,"construction", id);
	const docRef4 = doc(db,"utility", id);
	const docRef5 = doc(db,"community", id);

	useEffect(()=>{
      
      //get single document from interior collection in firebase
      onSnapshot(docRef1, (doc) => {
        setInterior(doc.data())
      })

			//get single document from property collection in firebase
      onSnapshot(docRef2, (doc) => {
        setProperty(doc.data())
      })

			//get single document from construction collection in firebase
      onSnapshot(docRef3, (doc) => {
        setConstruction(doc.data())
      })

			//get single document from utility collection in firebase
      onSnapshot(docRef4, (doc) => {
        setUtility(doc.data())
      })

			//get single document from community collection in firebase
      onSnapshot(docRef5, (doc) => {
        setCommunity(doc.data())
      })
    },[])

	return ( 
		<div className="details-container">
			<h3>Home Details</h3>
			<DetailsInterior data={interior} />
			<DetailsProperty data={property}/>
			<DetailsConstruction data={construction}/>
			<MaterialAccordion data1={utility} data2={community}/>
		</div>
	);
}
 
export default Details;