import React, { useState, useEffect } from 'react'
import Loading from './components/Loading'
import Tours from './components/Tours'

const url = 'https://course-api.com/react-tours-project'

function App() {
    const [loading, setLoading] = useState(true)
    const [tours, setTours] = useState([])

    const removeTour = (id) => {
        const newTours = tours.filter((tour) => tour.id !== id)
        setTours(newTours)
    }

    const fethTours = async () => {
        setLoading(true)
        try {
            const response = await fetch(url)
            const tours = await response.json()
            setLoading(false)
            setTours(tours)
        } catch (error) {
            setLoading(false)
            console.log(error)
        }
    }

    useEffect(() => {
        fethTours()
    }, [])

    if (loading) {
        return (
            <main>
                <Loading />
            </main>
        )
    }

    if (!tours.length) {
        return (
            <main>
                <div className='title'>
                    <h2>no tours left</h2>
                    <button className='btn' onClick={fethTours}>
                        refresh
                    </button>
                </div>
            </main>
        )
    }

    return (
        <main>
            <Tours tours={tours} removeTour={removeTour} />
        </main>
    )
}

export default App
