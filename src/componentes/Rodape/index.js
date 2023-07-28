import React from 'react'
import styles from './Rodape.module.css'

export default function Rodape(props) {
  return (
    <div className={styles.rodape}>
    <img className= {styles.insta} src ={props.insta} />
    <img className= {styles.face} src ={props.face} />
    <img className= {styles.twitter} src ={props.twitter} />
    </div>


  
  )
}
