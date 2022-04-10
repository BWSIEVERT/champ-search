import React from 'react'
import classes from '../Styles/noData.module.css'
import NotFound from '../Components/notFound'

function noData({error}) {
    console.log(error)
    return (
        <>
        <NotFound />
        </>
    )
}

export default noData;