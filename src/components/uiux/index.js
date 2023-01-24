import { useEffect, useState } from 'react';
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss'

const Uiux = () => {

    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        const timer = setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)

        return () => {
            clearTimeout(timer)
        }
    })

    return (
        <>
            <div className="container uiux-page">
                <h1 className="page-title">
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={"UI / UX".split("")}
                        idx={15}
                    />
                </h1>


            </div>
            <Loader type="pacman" />
        </>
    )
}

export default Uiux;