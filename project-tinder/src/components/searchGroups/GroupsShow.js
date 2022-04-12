import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { GroupsContext } from "./Groups";
import chatting1 from "../../assets/images/chatting1.png";
import chatting2 from "../../assets/images/chatting2.png";
import DatabaseService from "../../services/DatabaseService";

const GroupsShow = () => {

  // wczytana lista grup
  const [grouptList, setGroupList] = useState([]);

  // edytowalna lista grup
  const [filteredGrouptList, setFilteredGroupList] = useState([]);

  // stany z innego komponentu
  const {name, members, description, subject, click} = useContext(GroupsContext);


  // pobieranie danych z pliku json
  const loadData = () => {

    DatabaseService.getGroupList().then(
      (res) => {
        const data = res.data;
        setGroupList(data);
        setFilteredGroupList(data);
      }
    )
  }


  // efekt po wczytaniu strony
  useEffect(() => {
    loadData();
  }, []);


  // nasłuchiwanie naciśnięcia przycisku z innego componentu - nasłuchiwanie zmiany bo nie mam pomysłu jak to inaczej zrobić
  useEffect(() => {
    filterGroups();
  }, [click]);


  const filterName = (array) => {
    return array.filter((item) => {
      return item.name.toLowerCase().match(name.toLowerCase())
    });
  };

  const filterMembers = (array) => {
    return array.filter((item) => {
      let ifReturn = false;
      item.members.forEach((element) => {
        if (element.includes(members)) {
          ifReturn = true;
        }
      });
      return ifReturn;
    });
  };

  const filterSubject = (array) => {
    return array.filter((item) => {
      return item.subject.toLowerCase().match(subject.toLowerCase())
    });
  };

  const filterDescription = (array) => {
    return array.filter((item) => {
      return item.description.toLowerCase().match(description.toLowerCase())
    });
  };


  // filtrowanie grup
  const filterGroups = () => {

    let tempList = grouptList;

    // == bo nie zawsze się wykonywało z ===
    if ((name == "") && (members == "") && (description == "") && (subject == "")) {
      setFilteredGroupList(grouptList);
      return;
    }

    if (name !== "") {
      tempList = filterName(tempList);
    }

    if (subject !== "") {
      tempList = filterSubject(tempList);
    }

    if (members !== "") {
      tempList = filterMembers(tempList);
    }

    if (description !== "") {
      tempList = filterDescription(tempList);
    }

    setFilteredGroupList(tempList);
  };


  return (
    <div className="showGroups__container">
      {filteredGrouptList.map((g) => {
        return (

          <div className="showGroups__element" key={g.id} id={g.id}>

            <div className="showGroups__elementHeader">
              <h1> {g.name} </h1>
              <Link to="/send-message" key={g.id} className="showGroups__elementLink" title="Send a message to this group">
                <img src={chatting1} title="Send a message to this group" id="chattingIcon" 
                  onMouseOver={e => e.currentTarget.src = chatting2} 
                  onMouseOut={e => e.currentTarget.src = chatting1}>
                </img>
              </Link>
            </div>

            <h2> {g.subject} </h2>

            {g.members.map((m) => {
              return (
                <div className="showGroups__elementMembers" key={m}>
                  <h2> {m} </h2>
                </div>
              );
            })}

            <h3> {g.description} </h3>    

          </div>
        );
      })}
    </div>
  );
};

export default GroupsShow;