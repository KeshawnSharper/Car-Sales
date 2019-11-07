import React,{useReducer}from 'react';
import { Button } from 'react-bulma-components'

const AdditionalFeature = props => {
  
  console.log(props.feature)
  return (
    // <li onClick={dispatch({type:"ADD_FEATURE",payload:props.feature.id})}>
    <li >
      <Button color="danger" size="large" onClick={() => props.buyItem(props.feature)}>Add</Button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

export default AdditionalFeature;
