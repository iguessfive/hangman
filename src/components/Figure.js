import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

const UpdateFigure = () => {
    const figure = useSelector((state) => state.figure.hangmanDrawing)
    
    return (
        <div>
            <img className="figure" src={figure}/>
        </div>
    )
}

export default UpdateFigure;


