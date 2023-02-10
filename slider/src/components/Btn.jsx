import React from 'react'

const Btn = ({ className, children }) => {
    return (
        <>
            <button className={className}>{children}</button>
        </>
    )
}

export default Btn
