import { useEffect, useRef } from "react";
import Countdown from "react-countdown";

const Counter = ({ props }) => <span>{props.seconds}</span>




const Timer = ({ start , setStart}) => {

    const timerRef = useRef()

    const handleEnd = ({ start }) => {
        console.log("timer end");
        setStart(false)
    }

    useEffect(() => {
        if (start) {
            timerRef.current.start();
        }
    }, [start])


    return (
        <div className="timer">
            <h3>


                <Countdown
                    date={Date.now() + 5000}
                    renderer={props => <Counter props={props} />}
                    onComplete={handleEnd}
                    autoStart={false}
                    ref={timerRef}
                >
                </Countdown>
                Sec
            </h3>
        </div>
    );
}

export default Timer;