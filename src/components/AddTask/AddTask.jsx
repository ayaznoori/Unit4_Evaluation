import React, { useState } from "react";
import Tasks from "../Tasks/Tasks";
import styles from "./addTask.module.css";

const AddTask = () => {
  // NOTE: do not delete `data-cy` key value pair
  const [itvalue,setitvalue]=useState("");
  const [itarr,setitarr]=useState([]);
  const itemadding=(e)=>{
       setitvalue(e.target.value);
  }
  const adding=()=>{
    if(itvalue.length>0){
      setitarr([...itarr,itvalue]);
      setitvalue("");
      Tasks();
    }
  }
  localStorage.setItem("data",JSON.stringify(itarr));
  return (
    <div className={styles.todoForm}>
      <input data-cy="add-task-input" type="text" className={styles.inputbox}  placeholder="Add here..."
       onChange={itemadding}/>
      <button data-cy="add-task-button" className={styles.inputbutton} onClick={adding} >+</button>
    </div>
  );
 
};

export default AddTask;
