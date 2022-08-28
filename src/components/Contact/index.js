import Loader from 'react-loaders'
import './index.scss'
import AnimattedLetters from '../AnimatedLetters'
import { useEffect, useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'

const Contact = () => {

    const [letterClass, setLetterClass] = useState('text-animate')
    const refForm = useRef()

    useEffect(() => {

        return setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
    }, [])

    const sendEmail = (e) => {

        e.preventDefault()

        emailjs
            .sendForm(
                'service_zjy5nm5',
                'template_cqq6y9k',
                refForm.current,
                'user_hYlNlgi1lKYDwtaqJXz7I'
            )
            .then(
                () => {
                    alert('Message successfully sent :)')
                    window.location.reload(false)
                },
                () => {
                    alert('Failed to send the message, Please try again')
                }
            )
    }

    return (

        <>
            <div className="container contact-page">
                <div className="text-zone">
                    <h1>
                        <AnimattedLetters
                            letterClass={letterClass}
                            strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
                            idx={15}
                        />
                    </h1>
                    <p>
                        I am interested in freelance opportunities as well as internships regarding Frontend Developing - especially on ambitious
                        or large projects. However, if you have any other requests or
                        questions, don't hesitate to contact me using below form either.
                    </p>

                    <div className='contact-form'>
                        <form ref={refForm} onSubmit={sendEmail}>
                            <ul>
                                <li className='half'>
                                    <input type='text' name='name' placeholder='Name' required />
                                </li>

                                <li className='half'>
                                    <input type='email' name='email' placeholder='E-Mail' required />
                                </li>

                                <li>
                                    <input placeholder='Subject' name='subject' type='text' required />
                                </li>

                                <li>
                                    <textarea placeholder='Message' name='message' required></textarea>
                                </li>

                                <li>
                                    <input type='submit' className='flat-button' value='SEND' />
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>

                {/* Map */}
                <div className="info-map">
                    Madushan Nipuna
                    <br />
                    Sri Lanka,
                    <br />
                    274/1, "Sirisevana", Malvatta Road, <br /> Higgashen, Kuruwita, 70500 <br />
                    <span>madushannipuna1997@gmail.com</span>
                </div>

                <div className='map-wrap'>
                    <MapContainer center={[44.96366, 19.61045]}>
                        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                        <Marker position={[44.96366, 19.61045]}>
                            <Popup>Madushan lives here, come over for a cup of coffee 	&#9749;</Popup>
                        </Marker>
                    </MapContainer>
                </div>
            </div>
            <Loader type='pacman' />
        </>
    )
}

export default Contact;