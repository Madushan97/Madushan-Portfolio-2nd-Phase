import React, { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import portfolioData from '../../data/portfolio.json'

const Portfolio = () => {

    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        const timer = setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)

        return () => {
            clearTimeout(timer)
        }
    })

    // const renderPortfolio = (portfolio) => {
    //     return (
    //         <div className="images-container">
    //             {
    //                 portfolio.map((port, idx) => {
    //                     return (
    //                         <div className="image-box" key={idx}>
    //                             <img
    //                                 src={port.cover}
    //                                 alt="Project"
    //                                 className="portfolio-image" />
    //                             <div className="content">
    //                                 <p className="title">{port.title}</p>
    //                                 <h4 className="description">{port.description}</h4>
    //                                 <button className="btn" onClick={() => window.open(port.url)}>VIEW</button>
    //                             </div>
    //                         </div>
    //                     )
    //                 })
    //             }
    //         </div>
    //     )
    // }

    return (
        <>
            <div className="container portfolio-page">
                <h1 className="page-title">
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={"Projects".split("")}
                        idx={15}
                    />
                </h1>


            </div>
            <Loader type="pacman" />
        </>
    )
}

export default Portfolio;