import React, { useState, useEffect } from 'react'

import rgbToHex from '../utils/utils'

const SingleColor = ({ rgb, weight, index }) => {
    const [alert, setAlert] = useState(false)

    const bcg = rgb.join(',')
    const hex = rgbToHex(...rgb)

    return (
        <article
            className={`color ${index > 10 && 'color-light'}`}
            style={{ backgroundColor: `rgb(${bcg})` }}
        >
            <p className='pecent-value'>{weight}%</p>
            <p className='color-value'>{hex}</p>
        </article>
    )
}

export default SingleColor
