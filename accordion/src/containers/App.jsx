import React from 'react'
import { data } from '../data/data'
import SingleQuestion from '../views/Question'
function App() {
    return (
        <main>
            <div className='container'>
                <h3>questions and answers about login</h3>
                <section className='info'>
                    {data.map((question) => {
                        return (
                            <SingleQuestion key={question.id} {...question} />
                        )
                    })}
                </section>
            </div>
        </main>
    )
}

export default App
