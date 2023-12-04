/* eslint-disable react-hooks/exhaustive-deps */
'use client'
import { useEffect, useRef, useState } from "react";

const CountUp = ({ start = 0, end, keterangan }) => {
    const [value, setValue] = useState(null)
    const ref = useRef(start)

    const counter = end / 200;

    const Count = () => {
        if(ref.current < end){
            const result = Math.ceil(ref.current + counter);
        if(result > end) return setValue(end);
            setValue(result);
            ref.current = result;
        }
        setTimeout(Count, 60)
    };

    useEffect(() => {
      let isMounted = true;
      if(isMounted){
        Count();
      }
      return () => (isMounted = false);

    }, [end]);
    
    return(
        <div className="counter">
            <h1>{value} {keterangan}</h1>
        </div>
    );
}
export default CountUp;