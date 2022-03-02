import React, { useState ,useEffect} from 'react'
import firebase from './firebase.js'
import './App.css'
import Todo from './todo.js';
import { FaPlus } from "react-icons/fa";
import { FaRegTrashAlt } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";


//

const App = () => {

  const [item, setItem] = useState([])
  const [inputText, setInputText] = useState("")

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);


useEffect(()=>{

  firebase.firestore().collection('todos').onSnapshot(snapshot=>{
    setItem(snapshot.docs.map( doc =>( {id:doc.id , todo:doc.data().todoList})))
    // console.log(snapshot.docs.map(doc=>({id:doc.id,todo:doc.data().todoList})))
    // console.log(snapshot)
  })

},[])

  

  const inputItem = (e) => {
    setInputText(e.target.value)

  

  }

 


  


  const itemList = () => {
    //  setItem((oldArray) => {
    //   return [...oldArray, inputText]
    // })
    
    //Add Data into fireBase
    firebase.firestore().collection('todos').add({
      todoList:inputText
      
    })
    setInputText("")
  
  }
  
  
  

const deleteItems=(id)=>{
  console.log("deleted")

  setItem((oldArray)=>{
    return oldArray.filter((currentArray,index)=>{
      return id!== index;
    })
  })
}



  return (
    <>
      <div className="main" data-aos={"fade-down"}>


        <div className="inpt">
          <input type="text" value={inputText} onChange={inputItem} placeholder="Enter Todos" />
          
          <button><FaPlus className="btn_icon" onClick={itemList} /></button>
        </div>


        <div className="list">
          <ul>
            {
                
                 item.map((text, index) => (
                    <Todo key={index} text={text} index={index} deleteItems={deleteItems} />
               
                 ))

            }
          </ul>
        </div>


      </div>
    </>
  )
}

export default App




