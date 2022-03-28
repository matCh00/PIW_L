import React, { useEffect, useLayoutEffect, useState, useContext } from 'react'
import { StudentsContext } from './Students'
import "./Components.css";

const ShowStudents = () => {

  const {description, tag, subject, click, setClick} = useContext(StudentsContext);

  const [studentList, setStudentList] = useState([]);

  let index = 0;

  // po wczytaniu strony
  useEffect(() => {

    // pobieranie danych z serwera json
    const getTasks = async () => {
      const res = await fetch("http://localhost:5000/students");
      const data = await res.json();
      setStudentList(data);
    }
    getTasks();
  }, []);


  // nasłuchiwanie naciśnięcia przycisku z innego componentu
  useEffect(() => {
    console.log("changed click");

    const getTasks = async () => {
      const res = await fetch("http://localhost:5000/students");
      const data = await res.json();

      if (subject ==="" || subject ===" " || subject === undefined || subject === null) {
        setStudentList(data);
      }
      else {
        setStudentList(data.filter((e) => {
          return e.class === subject;
        }));
      }
    }
    getTasks();

  }, [click])


  return (
    <div className="showStudents__container">

      {studentList.map(s => {
        return (
          <div className="showStudents__element" key={s.id} id={s.id}> 
            <h1> {s.name}  </h1>
            <h3> {s.class} </h3>
            <h4> {s.description} </h4>  
            {s.tags.map(t => {
              return (
                <div className="showStudents__elementTags" key={t}>
                  <h4> {t} </h4>
                </div>
              )
            })}   
            <button onClick={() => {document.getElementById(s.id).style.display = "none"}}>disappear</button>
          </div>
        )
      })
      }
      

      {/* 
        <div className="showStudents__element" key={studentList[index].id}> 

        {console.log(studentList[index])}{console.log(index)}

          <h1> {studentList[index].name}  </h1>
          <h3> {studentList[index].class} </h3>
          <h4> {studentList[index].description} </h4>  
          {studentList[index].tags.map(t => {
            return (
              <div className="showStudents__elementTags" key={t}>
                <h4> {t} </h4>
              </div>
            )
          })}   
        </div>
        */}

    </div>
  )
}

export default ShowStudents