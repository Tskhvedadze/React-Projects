import React, { useState } from 'react'
import Values from 'values.js'

import SingleColor from '../component/SingleColor'

function App() {
    const [color, setColor] = useState('')
    const [number, setNumber] = useState(10)
    const [error, setError] = useState(false)
    const [list, setList] = useState(new Values('#f15025').all(10))

    const shades = number > 0 ? number : 1

    const handleSubmit = (e) => {
        e.preventDefault()
        try {
            let colors = new Values(color).all(Number(shades))
            setError(false)
            setList(colors)
        } catch (error) {
            setError(true)
            setList([])
            console.error(error)
        }
    }
    return (
        <>
            <section className='container'>
                <h3>color generator</h3>
                <form onSubmit={handleSubmit} className='form'>
                    <input
                        type='text'
                        value={color}
                        onChange={(e) => setColor(e.target.value)}
                        placeholder='#f15025'
                        className={error ? 'error' : null}
                    />
                    <input
                        type='number'
                        value={number}
                        onChange={(e) => setNumber(e.target.value)}
                        placeholder='10'
                    />
                    <button className='btn' type='submit'>
                        submit
                    </button>
                </form>
            </section>
            <section className='colors'>
                {list.map((color, index) => {
                    return <SingleColor key={index} {...color} index={index} />
                })}
            </section>
        </>
    )
}

export default App
