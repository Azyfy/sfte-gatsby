import React from 'react'
import Layout from '../components/Layout'
import * as styles from "../styles/home.module.css"

export default function Home() {

  return (
    <section>
      <div className={styles.logoContainer} >
        <img src="/My project.png" alt="logo" />
      </div>

      <h1 className={styles.title} > Suite for the Elite </h1>
      
      <div className={styles.introContainer} >
        <div class={styles.trap} >
          <div class={styles.topline} ></div>
          <div class={styles.leftline} ></div>
          <div class={styles.rightline} ></div>
          <div class={styles.bottomline} ></div>
        </div>
        <div>
          <p class={styles.firstpara} > Dobro došli na oficijelnu platformu <em> Suite for the Elite </em>. </p>
          <p class={styles.secondpara} > Pred vama se nalazi zajednica ljubitelja životinja, prva ovakvog tipa na našim prostorima. </p>
          <p> Budite slobodni da istražite kakve sve mogućnosti nudimo. </p>
        </div>
      </div>
      <Layout>
      </Layout>
    </section>
  )
}
