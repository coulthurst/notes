import React, { Component } from "react";
import NoteList from "./NoteList/NoteList";

class App extends Component {
  notes = [
    {
      id: 1,
      author: "coulthurst",
      title: "First Note",
      body: "This is the first note. Hopefully this works.",
      location: null,
      date: "Dec 27th",
      tags: null
    },
    {
      id: 2,
      author: "coulthurst",
      title: "Groceries",
      body:
        "Apples, pears, steak, mushrooms, wine, cheese, more cheese, and another cheese",
      location: null,
      date: "Dec 27th",
      tags: null
    },
    {
      id: 3,
      author: "colthurst",
      title: "To-Do List",
      body:
        "Originally I was going to make a to-do list, but I think a note taking app will be much better",
      location: null,
      date: "Dec 27th",
      tags: null
    }
  ];

  render() {
    return (
      <div>
        <NoteList notes={this.notes} />
      </div>
    );
  }
}

export default App;
