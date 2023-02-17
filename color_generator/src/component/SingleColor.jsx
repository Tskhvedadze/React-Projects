import React, { useState, useEffect } from 'react'

import rgbToHex from '../utils/utils'

const SingleColor = ({ rgb, weight, index }) => {
    const [alert, setAlert] = useState(false)

    const bcg = rgb.join(',')
    const hex = rgbToHex(...rgb)

    const handleClick = () => {
        setAlert(true)
        navigator.clipboard.writeText(hex)
    }

    useEffect(() => {
        const timeOut = setTimeout(() => {
            setAlert(false)
        }, 2000)

        return () => clearTimeout(timeOut)
    }, [alert])

    return (
        <article
            className={`color ${index > 10 && 'color-light'}`}
            style={{ backgroundColor: `rgb(${bcg})` }}
            onClick={handleClick}
        >
            <p className='percent-value'>{weight}%</p>
            <p className='color-value'>{hex}</p>
            {alert && <p className='alert'>copied to clipboard</p>}
        </article>
    )
}

export default SingleColor
