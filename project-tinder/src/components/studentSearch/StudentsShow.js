import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { StudentContext } from "../../contexts/StudentContext";
import { UserContext } from "../../contexts/UserContext";
import { CartContext } from "../../contexts/CartContext";
import DatabaseService from "../../services/DatabaseService";
import ImageService from "../../services/ImageService";


const StudentsShow = () => {

  // wczytana lista studentów
  const [studentList, setStudentList] = useState([]);

  // edytowalna lista studentów
  const [filteredStudentList, setFilteredStudentList] = useState([]);

  // stany z innego komponentu
  const { description, tag, subject, click } = useContext(StudentContext);

  // użytkownik
  const { user, setUser, userLS, setUserLS } = useContext(UserContext);


  // CONTEXT
  const cartContext = useContext(CartContext);

  // REDUCER Z CONTEXT: dodanie do obserwowanych
  const addToCart = (s) => {
    cartContext.dispatch({ type: "ADD_P", person: s });
  };


  // pobieranie danych
  const loadData = () => {
    // DatabaseService.getStudentList().then((res) => {
    //   const data = res.data;
    //   setStudentList(data);
    //   setFilteredStudentList(data);
    // });
    DatabaseService.getStudentList().then((res) => {
      const data = res;
      setStudentList(data);
      setFilteredStudentList(data);
    });
  };


  // po załadowaniu okna
  window.onload = () => {
    if (localStorage.length === 0) {
      // !!!
      ImageService.getImageSource();
    }
  };

  // efekt po zmianie jakiegoś stanu
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
    });
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
    });
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
          <div className="showStudents__element" key={s.id + '_child'} id={s.id}>
            <div className="showStudents__elementHeader">
              <h1> {s.name} </h1>

              {user && (
                <Link
                  to={"/student-page/" + s.id}
                  state={{ student: s }}
                  key={s.id}
                  title="View this student's page"
                >
                  <img
                    className="showStudents__image"
                    id={s.id + "_image"}
                    src={JSON.parse(localStorage.getItem(s.id + "_image"))}
                  />
                </Link>
              )}
            </div>

            {s.subject.map((c) => {
              return (
                <div className="showStudents__elementSubject" key={s + c + '_subject'}>
                  <h2> {c} </h2>
                </div>
              );
            })}

            <h3> {s.description} </h3>

            {s.tags.map((t) => {
              return (
                <div className="showStudents__elementTags" key={s + t + '_tags'}>
                  <h4> {t} </h4>
                </div>
              );
            })}

            {user && (
              <div>
                <button
                  name="addToCartButton"
                  className="button buttonOne addToCart__button"
                  onClick={() => addToCart(s)}
                >
                  Follow
                </button>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default StudentsShow;
