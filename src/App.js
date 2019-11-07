import React,{useState} from 'react';
import { connect } from "react-redux"
import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';


const App = (props) => {
  
  const removeFeature = item => {
    // dispatch an action here to remove an item

    props.dispatch({type:"REMOVE_FEATURE",payload:item})
  
    console.log(props.car)
  };

  const buyItem = item => {
    props.dispatch({type:"ADD_FEATURE",payload:item})
console.log(props.car)
  };
  console.log(props.car)
  return (
    <div className="boxes">
      <div className="box">
        <Header car={props.car} />
        <AddedFeatures car={props.car} removeFeature={removeFeature}/>
      </div>
      <div className="box">
        <AdditionalFeatures additionalFeatures={props.additionalFeatures} buyItem={buyItem}/>
        <Total car={props.car} additionalPrice={props.additionalPrice} />
      </div>
    </div>
  );
};
function mapStateToProps(state){
  return {
    car:state.car,
    additionalFeatures:state.additionalFeatures,
    additionalPrice:state.additionalPrice
  }
}

export default connect(mapStateToProps) (App);
