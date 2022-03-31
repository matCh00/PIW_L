import React, { Component } from 'react';

export class GroupAnnouncement extends Component {

  constructor(props) {
    super(props);
    this.state = {name: ""};
    this.state = {description: ""};
    this.state = {members: [""], emails: [""]};
    this.state = {subject: ""};
  };

  handleName = (e) => {
    this.setState({name: e});
  };

  handleDescription = (e) => {
    this.setState({description: e});
  };

  handleMembers = (e) => {
    this.setState({members: e});
  };

  handleEmails = (e) => {
    this.setState({emails: e});
  };

  handleSubject = (e) => {
    this.setState({subject: e});
  };

  handleSubmit = async (e) => {
    console.log("add group");
    document.getElementById("groupName").value = "";
    document.getElementById("groupDescription").value = "";
    document.getElementById("groupMembers").value = "";
    document.getElementById("groupEmails").value = "";
    document.getElementById("groupSubject").value = "";

    const group = {
      "name": this.state.name,
      "description": this.state.description,
      "members": this.state.members.split(' '),
      "subject": this.state.subject,
      "emails": this.state.emails.split(' '),
    };

    const res = await fetch('http://localhost:5000/groups', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(group),
    });
  };

  render() {
    return (
      <div className="groupAnnouncement__container">
        <input
          id="groupName"
          className="input inputTwo groupAnnouncement__input"
          type="text"
          onChange={e => this.handleName(e.target.value)}
          spellCheck="false"
          placeholder="type name..."
        />

        <input
          id="groupDescription"
          className="input inputTwo groupAnnouncement__input"
          type="text"
          onChange={e => this.handleDescription(e.target.value)}
          spellCheck="false"
          placeholder="type description..."
        />

        <input
          id="groupMembers"
          className="input inputTwo groupAnnouncement__input"
          type="text"
          onChange={e => this.handleMembers(e.target.value)}
          spellCheck="false"
          placeholder="type members separated by spaces..."
        />

        <input
          id="groupEmails"
          className="input inputTwo groupAnnouncement__input"
          type="text"
          onChange={e => this.handleEmails(e.target.value)}
          spellCheck="false"
          placeholder="and their emails separated by spaces..."
        />

        <input
          id="groupSubject"
          className="input inputTwo groupAnnouncement__input"
          type="text"
          onChange={e => this.handleSubject(e.target.value)}
          spellCheck="false"
          placeholder="type subject..."
        />

        <button
          name="submitGroupButton"
          className="button buttonTwo groupAnnouncement__button"
          onClick={this.handleSubmit}
        >
          Submit
        </button>
      </div>
    )
  };
};

export default GroupAnnouncement;