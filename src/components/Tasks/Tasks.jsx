import React, { useState } from "react";
import styles from "./tasks.module.css";
 

const Tasks = () => {
  // NOTE: do not delete `data-cy` key value pair
  let arr=JSON.parse(localStorage.getItem("data"))||[];
  const [arrvalue,setarrvalue]=useState(arr);
 
  return (
    <>
      <ul data-cy="tasks" className={styles.tasks}>
        { arr.map((ele)=>{return <li>{ele}</li>})}
      </ul>
      <div data-cy="tasks-empty" className={styles.empty}>
        {/* Show when No Tasks are present */}
      </div> 
    </>
    
  );
};

export default Tasks;
