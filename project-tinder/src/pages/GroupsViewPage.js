import React from "react";
import NavBar from "../components/layouts/NavBar";
import Footer from "../components/layouts/Footer";
import GroupsSearch from "../components/groupSearch/GroupsSearch";
import GroupsShow from "../components/groupSearch/GroupsShow";
import { GroupProvider } from "../contexts/GroupContext";
import "../assets/GroupsView.css";
import "../assets/Pages.css";


const GroupsViewPage = () => {
  return (
    <div className="pages__container">
      <NavBar />

      <div className="view__container">
        <GroupProvider>
          <GroupsSearch />
          <GroupsShow />
        </GroupProvider>
      </div>

      <Footer />
    </div>
  );
};

export default GroupsViewPage;
