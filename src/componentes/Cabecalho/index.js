import React from 'react'
import styles from './Cabecalho.module.css'

export default function Cabecalho(props) {
  return (
    <div className={styles.cabecalho}>

    <img className= {styles.logo} src ={props.logo} />
    <p className={styles.titulo}>{props.titulo}</p>
    </div>  
  )
}
