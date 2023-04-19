import React from 'react'
import classes from './Input.module.css'

export function InputFile(props) {
  return (
    <input className={classes.input} onChange={(event)=>{
      event.target.value = props.name;
    }}
      
     ></input>
   )
}

export default function Input(props) {
 
  return (
   <input className={classes.input} type="number" 
 
   ></input>
  )
}
