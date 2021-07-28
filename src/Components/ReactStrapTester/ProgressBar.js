import React, { useEffect, useState } from "react";
import { Progress } from "reactstrap";

const Example = (props) => {

    // Method one
    const [counter, setCounter] = useState(0);

    useEffect(() => {
      const timeout = setTimeout(() => {
        setCounter(counter + 1);
        console.log('Real counter', counter);
      }, 1000);
  
      return () => {
        clearTimeout(timeout);
        console.log('Timer cleared', counter);
      };
    }, [counter]);

    // Method two
    // const [counter, setCounter] = useState(0);

    // useEffect(() => {
    //   const timeout = setTimeout(() => {
    //     setCounter(prevCounter=> prevCounter + 1);
    //     console.log('Real counter', counter);
    //   }, 1000);
  
    //   return () => {
    //     clearTimeout(timeout);
    //     console.log('Timer cleared', counter);
    //   };
    // }, []);

  return (
    <div>
      {/* <div className="text-center">0%</div>
      <Progress />
      <div className="text-center">25%</div>
      <Progress value="25" />
      <div className="text-center">50%</div>
      <Progress value={50} />
      <div className="text-center">75%</div>
      <Progress value={75} /> */}
      <div className="text-center">{counter}%</div>
      <Progress animated value={counter} max={100} />
      {/* <div className="text-center">Multiple bars</div>
      <Progress multi>
        <Progress bar value="15" />
        <Progress bar color="success" value="30" />
        <Progress bar color="info" value="25" />
        <Progress bar color="warning" value="20" />
        <Progress bar color="danger" value="5" />
      </Progress> */}
    </div>
  );
};

export default Example;
