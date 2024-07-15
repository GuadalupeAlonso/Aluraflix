import React from "react";
import Button from '@mui/material/Button';


export const Boton = (props) => {
  return(    
    <Button 
      style={{marginLeft:`${props.mleft}`, marginRight:`${props.mright}` }} variant="contained" onClick={props.onClick} type={props.type}>
      {props.nombre}      
    </Button>
  );
}