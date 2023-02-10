import React, { useState, useEffect } from 'react'
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi'
import { FaQuoteRight } from 'react-icons/fa'

import data from '../data/data'
import Btn from '../components/Btn'
function App() {
    const [people, setPeople] = useState(data)
    const [index, setIndex] = useState(0)

    return (
        <section className='section'>
            <div className='title'>
                <h2>
                    <span>/</span>reviwes
                </h2>
            </div>
            <div className='section-center'>
                {people.map(({ id, image, name, quote, title }, index) => {
                    // more stuff coming up

                    return (
                        <article key={id}>
                            <img
                                src={image}
                                alt={name}
                                className='person-img'
                            />
                            <h4>{name}</h4>
                            <p className='title'>{title}</p>
                            <p className='text'>{quote}</p>
                            <FaQuoteRight className='icon' />
                        </article>
                    )
                })}
                <Btn className='prev'>
                    <FiChevronLeft />
                </Btn>
                <Btn className='next'>
                    <FiChevronRight />
                </Btn>
            </div>
        </section>
    )
}

export default App
