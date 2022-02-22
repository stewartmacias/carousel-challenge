import React, { useEffect, useState, useRef } from "react";

const ChallengeUseEffect = () => {

    const isInitialMount = useRef(true);
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log("I'm mounting ----->");

        return () => {
            console.log("<----- I'm unmounting");
        }
    }, []);

    useEffect(() => {

        if (isInitialMount.current) {
            isInitialMount.current = false;
        } else {
            console.log(`New value: ${count}`);
        }
    }, [count]);

    return (
        <>
            <div>
                
                <button type='submit' className='button' onClick={() => setCount(count + 1)}>
                    + 1 
                </button>
                <p>Value: {count} </p>
            </div>
        </>
    );
}

export default ChallengeUseEffect;