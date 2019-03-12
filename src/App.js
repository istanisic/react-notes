import React, { Component } from 'react';
import './App.css';
import Note from './components/Note/Note';
import Notes from './components/Notes/Notes';
import Button from './components/Button/Button';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: []
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleClick () {
    const newNotes = this.state.notes.slice();
    newNotes.push({id: newNotes.length, title: "Title", description: "description"});
    this.setState({
      notes: newNotes,
    });
  }

  handleChange (id, title) {
    this.setState({
      notes: this.state.notes.map(note => (note.id === id ? {id, title} : note))
  });
  }

  // changeTitle (title) {
  //   this.setState({
  //     notes: this.state.notes.map(note => (note.id === id ? {title} : note))
  //   })
  // }

  render() {
    return (
      <div>
        <Button onClick={this.handleClick} />
        <Notes notes={this.state.notes} onChange={this.handleChange} />
      </div>
    );
  }
}

export default App;
