import React from 'react'
import Lottie from 'react-lottie'
import animationData from '../../../Lotties/loading-lottie.json'
import classes from '../../Styles/Loading.module.css'

function Loading() {

    const lottieOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    }

    return (
        <>
        <div className={classes.lottie_container}>
            <Lottie
                options={lottieOptions}
                height={200}
                width={200}
            />
        </div>
        </>
    )
}

export default Loading;