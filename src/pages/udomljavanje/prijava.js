import React, { useState } from 'react'
import Layout from '../../components/Layout'
import { navigate } from "gatsby"
import * as styles from "../../styles/form.module.css"

export default function Form(props) {
    const [ submit, setSubmit ] = useState(false)

    const isBrowser = () => typeof window !== "undefined"

    if(!props.location.state && isBrowser()) {
        navigate("/udomljavanje")
        return (
            <>
            </>
        )
    }

    if(!props.location.state) {
        return (
            <>
            </>
        )
    }
    
    
    const babysit = props.location.state.babysit

    function handleSubmit(e) {
        e.preventDefault()    
        setSubmit(true)
    }

    if (submit) {
        return (
            <Layout>
                <div className={styles.formContainer} >
                    {babysit.status === "dom" &&
                        <p>Uspješno ste odabrali udomitelja za Vašeg ljubimca! <br/> Ubrzo ćete biti kontaktirani za potvrdu rezervacije.</p>
                    }
                    {babysit.status === "udomi" &&
                        <p>Vaša prijava je uspješno zaprimljena! <br/> Ubrzo će Vas kontaktirati neko iz našeg tima za naredne korake.</p>
                    }
                </div>
            </Layout>
        )
    }

    return (
        <Layout>
            <div>
                <h1 className={styles.title} > {babysit.title} </h1>
                <div className={styles.formContainer} >
                    <form onSubmit={handleSubmit} >
                        <label>Ime: <br/>
                                <input type="text" id="fname" name="fname" minLength="3" required  />
                        </label>
                        <label>Prezime: <br/>
                                <input type="text" id="sname" name="sname" minLength="3" required  />
                        </label>
                        <label>Email: <br/>
                                <input type="email" id="mail" name="mail" required  />
                        </label>

                        {babysit.status === "dom" &&
                            <div class={styles.peepscontainer} >
                                {babysit.peeps.map( (peep, index) => 
                                    {return(
                                        <div key={index} className={styles.peeps} >
                                            <h5> <input type="radio" name="available" required /> {peep.name} - {peep.location} </h5>
                                            <span> {peep.homeType} </span>
                                            <p> {peep.price}KM/dan</p>
                                            <div className={styles.animals} >
                                                {peep.animalType.map((animal, index) => 
                                                    {
                                                        return(
                                                             <span key={index} > {animal} </span>
                                                            
                                                        )
                                                    }
                                                )}
                                            </div>
                                            <div className={styles.days} >
                                                {peep.availableDays.map((day, index) => 
                                                    {
                                                        return(
                                                             <span key={index} > {day} </span>
                                                            
                                                        )
                                                    }
                                                )}
                                            </div>
                                        </div>
                                    )}
                                )
                                }
                            </div>
                        }

                        {babysit.status === "udomi" &&
                            <>
                                <label>Lokacija: <br/>
                                    <input type="text" id="location" name="location" required  />
                                </label>
                                <p> Dani kojima želite udomiti: </p>
                                <div className={styles.dayscontainer} >
                                    <label> Ponedjeljak <br/>
                                        <input type="checkbox" id="ponedjeljak" name="ponedjeljak" value="ponedjeljak" />
                                    </label>
                                    <label> Utorak <br/>
                                        <input type="checkbox" id="utorak" name="utorak" value="utorak" />
                                    </label>
                                    <label>  Srijeda <br/>
                                        <input type="checkbox" id="srijeda" name="srijeda" value="srijeda" />
                                    </label>
                                    <label> Četvrtak <br/>
                                        <input type="checkbox" id="cetvrtak" name="cetvrtak" value="cetvrtak" />
                                    </label>
                                    <label> Petak <br/>
                                        <input type="checkbox" id="petak" name="petak" value="petak" />
                                    </label>
                                    <label>  Subota <br/>
                                        <input type="checkbox" id="subota" name="subota" value="subota" />
                                    </label>
                                    <label>  Nedjelja <br/>
                                        <input type="checkbox" id="nedjelja" name="nedjelja" value="nedjelja" />
                                    </label>
                                </div>

                                <p>Životinje koje bi čuvali: </p> 
                                <div className={styles.animalType} >
                                    <label> Pas 
                                        <input type="checkbox" id="Pas" name="Pas" value="Pas" />
                                    </label>
                                    <label> Mačka 
                                        <input type="checkbox" id="Mačka" name="Mačka" value="Mačka" />
                                    </label>
                                </div>

                                <label>Živite u: <br/> 
                                    <select id="houseType" className={styles.houseType} >
                                        <option value="Kuća">Kući</option>
                                        <option value="Stan">Stanu</option>
                                    </select> 
                                </label>

                                <label>  Vaša cijena na dan: <br/>
                                    <input type="number" id="cijena" name="cijena" min="0" />
                                </label>
                            </>
                        }

                        <label> Posebni zahtjevi: <br/>
                                <textarea />
                        </label>
                        <button> Pošalji </button>
                    </form>
                </div>
            </div>
        </Layout>
    )
}