/* eslint-disable no-unused-vars */
import Reac, { useEffect, useState } from 'react'
import { FaAngleDoubleRight } from 'react-icons/fa'

const url = 'https://course-api.com/react-tabs-project'
function App() {
    const [loading, setLoading] = useState(true)
    const [jobs, setJobs] = useState([])
    const [values, setValues] = useState(0)

    const fetchJobs = async () => {
        const response = await fetch(url)
        const newJobs = await response.json()
        setJobs(newJobs)
        setLoading(false)
    }

    useEffect(() => {
        fetchJobs()
    }, [])

    if (loading) {
        return (
            <section className='section loading'>
                <h1>loading...</h1>
            </section>
        )
    }

    const { company, dates, duties, title } = jobs[values]

    return (
        <section className='section'>
            <div className='title'>
                <h2>experience</h2>
                <div className='underline' />
            </div>
            <div className='jobs-center'>
                {/* btn container */}
                <div className='btn-container'>
                    {jobs.map((item, index) => {
                        return (
                            <button
                                key={item.id}
                                onClick={() => setValues(index)}
                                className={`job-btn ${
                                    index === values && 'active-btn'
                                }`}
                            >
                                {item.company}
                            </button>
                        )
                    })}
                </div>
                {/* job info */}
                <article className='job-info'>
                    <h3>{title}</h3>
                    <h4>{company}</h4>
                    <p className='job-date'>{dates}</p>
                    {duties.map((duty, index) => {
                        return (
                            <div className='job-desc' key={index}>
                                <FaAngleDoubleRight className='job-icon' />
                                <p>{duty}</p>
                            </div>
                        )
                    })}
                </article>
            </div>
        </section>
    )
}

export default App
