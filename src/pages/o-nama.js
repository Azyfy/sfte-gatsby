import React from 'react'
import Layout from '../components/Layout'
import * as styles from "../styles/o-nama.module.css"

export default function About() {
    return (
        <Layout>
            <section class={styles.about} >
                <h1> O nama </h1>

                <div class={styles.container} >
                    <img src="/misija1.png" alt="misija" />
                    <img class={styles.damnpic} src="/vizija1.png" alt="vizija" />
                </div>

                <p> Suite for the Elite je jedinstvena platforma za umrežavanje vlasnika kućnih ljubimaca sa potencijalnim udomiteljima. Tu smo da vam pomognemo da pronađete dom za vama drage životinje kada vi niste u mogućnosti da se pobrinete za njih. </p>
                <p> Sama ideja za pokretanje jedne ovakve platforme je proizašla iz ukazane potrebe naših prijatelja i poznanika za ovakvom vrstom usluge. Nakon sprovedene ankete i među širom skupinom ljudi, shvatili smo da bi ovakva usluga koristila svim vlasnicima kućnih ljubimaca. Radeći detaljnije na koncipiranju platforme, odlučili smo dati priliku i onima koji bi rado pravili društvo našim mezimcima. </p>

                <p> Naš cilj je kreirati zajednicu u kojoj sa sigurnošću u svakom trenutku možemo pronaći podršku i pomoć. </p>
                <p> Mi se nalazimo na početku puta ali samo sa vama možemo doći do našeg cilja! </p>
            </section>
        </Layout>
    )
}