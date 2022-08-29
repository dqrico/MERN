import React from 'react';
import { useParams } from 'react-router-dom';

const ParamsComponent = (props)=>{

    const {word, color, bgCol} = useParams();

    return(
        <div>
            {
                isNaN(word)?  //Check IF word param is not a number:
                <p style={
                    //If color param exists, style element with passed in values
                    color? 
                    {color: color, backgroundColor: bgCol}
                    :null
                }>
                    This is a word: {word}
                </p>
                : //Check IF the word param IS a number:
                <p>
                    This is a number: {word}
                </p>
            }
        </div>
    )
}

export default ParamsComponent;