import React from 'react'
import Layout from '../../components/Layout'
import { Link } from 'gatsby'
import * as styles from "../../styles/udomljavanje.module.css"

export default function FluffyAnimals() {
    return (
        <Layout>
            <section>
                <h1  className={styles.title} > Udomljavanje </h1>
                <div className={styles.iconNav} >
                    <p> Tražite privremeni dom za vašeg ljubimca? </p>
                    <Link to="/udomljavanje/prijava" 
                        state={{ babysit: {
                                     title: "Dom za vašeg ljubimca",
                                     status: "dom",
                                     peeps: [
                                         {
                                             name: "Ajla",
                                             price: 35,
                                             location: "Stari Grad",
                                             homeType: "Kuća",
                                             animalType: ["Pas",
                                                "Mačka"],
                                             availableDays: [
                                                 "Ponedjeljak",
                                                 "Subota",
                                                 "Nedjelja"
                                             ]
                                         },
                                         {
                                            name: "Danijela",
                                            price: 30,
                                            location: "Grbavica",
                                            animalType: ["Mačka"],
                                            homeType: "Stan",
                                            availableDays: [
                                                "Subota",
                                                "Nedjelja"
                                            ]
                                        },
                                        {
                                            name: "Dragan",
                                            price: 50,
                                            location: "Otoka",
                                            homeType: "Kuća",
                                            animalType: ["Pas",
                                                "Mačka"],
                                            availableDays: [
                                                "Ponedjeljak",
                                                "Utorak",
                                                "Srijeda",
                                                "Četvrtak",
                                                "Petak"
                                            ]
                                        },
                                        {
                                            name: "Valeria",
                                            price: 40,
                                            location: "Alipašino Polje",
                                            homeType: "Stan",
                                            animalType: ["Pas",
                                               "Mačka"],
                                            availableDays: [
                                                "Utorak",
                                                "Subota"
                                            ]
                                        }
                                     ]
                            } 
                    }} > 
                        <div> <img className="icons" src="/icon for those who are looking for a bbsiter.png" alt="looking for a bbsiter" /> </div> </Link>
                    
                    <p> Želite da privremeno udomite nekog ljubimca? </p>
                    <Link to="/udomljavanje/prijava" 
                        state={{ babysit: {
                                title: "Udomite ljubimca",
                                status: "udomi"
                            }
                    }} > 
                        <div> <img className="icons" src="/icon for those who want to be a bbystier.png" alt="want to be a bbystier" /> </div> </Link>
                </div>
            </section>
        </Layout>
    )
}