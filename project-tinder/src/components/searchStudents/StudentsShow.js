import React, { useEffect, useLayoutEffect, useState, useContext } from "react";
import { StudentsContext } from "./Students";
import DatabaseService from "../../services/DatabaseService";
import ImageService from "../../services/ImageService";

const StudentsShow = () => {

  // wczytana lista studentów
  const [studentList, setStudentList] = useState([]);

  // edytowalna lista studentów
  const [filteredStudentList, setFilteredStudentList] = useState([]);

  // stany z innego komponentu
  const {description, tag, subject, click} = useContext(StudentsContext);


  // pobieranie danych z pliku json
  const loadData = () => {

    DatabaseService.getStudentList().then(
      (res) => {
        const data = res.data;
        setStudentList(data);
        setFilteredStudentList(data);
      }
    )
  }


  // wczytanie losowego obrazka
  const setImage = (id) => {
    return ImageService.getImageSource();
  }


  // efekt po wczytaniu strony
  useEffect(() => {
    loadData();
  }, []);


  // nasłuchiwanie naciśnięcia przycisku z innego componentu - nasłuchiwanie zmiany bo nie mam pomysłu jak to inaczej zrobić
  useEffect(() => {
    filterStudents();
  }, [click]);


  const filterDescription = (array) => {
    return array.filter((item) => {
      return item.description.toLowerCase().match(description.toLowerCase());
    })
  };

  const filterTag = (array) => {
    return array.filter((item) => {
      let ifReturn = false;
      item.tags.forEach((element) => {
        if (element.toLowerCase().includes(tag.toLowerCase())) {
          ifReturn = true;
        }
      });
      return ifReturn;
    })
  };

  const filterSubject = (array) => {
    return array.filter((item) => {
      let ifReturn = false;
      item.subject.forEach((element) => {
        if (element.toLowerCase().includes(subject.toLowerCase())) {
          ifReturn = true;
        }
      });
      return ifReturn;
    });
  };


  // filtrowanie studentów
  const filterStudents = () => {

    let tempList = studentList;

    // == bo nie zawsze się wykonywało z ===
    if (subject == "" && description == "" && tag == "") {
      setFilteredStudentList(studentList);
      return;
    } 
    
    if (subject !== "") {
      tempList = filterSubject(tempList);
    } 
    
    if (description !== "") {
      tempList = filterDescription(tempList);
    } 
    
    if (tag !== "") {
      tempList = filterTag(tempList);
    }

    setFilteredStudentList(tempList);
  };


  return (
    <div className="showStudents__container">
      {filteredStudentList.map((s) => {
        return (

          <div className="showStudents__element" key={s.id} id={s.id}>

            <div className="showStudents__elementHeader">
              <h1> {s.name} </h1>
              <img className="showStudents__image" id={s.id + "_image"} src={setImage(s.id + "_image")} />
            </div>
            
            {s.subject.map((c) => {
              return (
                <div className="showStudents__elementSubject" key={c}>
                  <h2> {c} </h2>
                </div>
              );
            })}

            <h3> {s.description} </h3>
            
            {s.tags.map((t) => {
              return (
                <div className="showStudents__elementTags" key={t}>
                  <h4> {t} </h4>
                </div>
              );
            })}     
                   
          </div>
        );
      })}
    </div>
  );
};

export default StudentsShow;
