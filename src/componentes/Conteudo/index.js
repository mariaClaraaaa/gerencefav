import React from 'react'
import styles from './Conteudo.module.css'

export default function Conteudo(props) {
  return (
    <div className={styles.conteudo}>
    <p className={styles.conteudoFav}></p>
    </div>  
  )
}