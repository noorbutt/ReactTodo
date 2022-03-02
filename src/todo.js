import React, { useEffect } from 'react'
import { FaRegTrashAlt } from "react-icons/fa";
import './App.css'
import firebase from './firebase.js'
import AOS from "aos";
import "aos/dist/aos.css";







const Todo = ({text,index,deleteItems}) => {
    
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
 
    return  <li  data-aos={"fade-down"} > <FaRegTrashAlt className="delete" onClick={(event)=>firebase.firestore().collection('todos').doc(text.id).delete()} /> {text.todo}</li>
    
}

export default Todo;
