import React, { Component } from 'react';
import './App.css';
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
    this.handleDeleteClick = this.handleDeleteClick.bind(this);
  }

  handleClick () {
    const newNotes = this.state.notes.slice();
    newNotes.push({id: newNotes.length, title: "", description: ""});
    this.setState({
      notes: newNotes,
    });
  }

  handleChange (id, title, description) {
    this.setState({
      notes: this.state.notes.map(note => (note.id === id ? {id, title, description} : note))
  });
  }

  handleDeleteClick (id) {
    const newNotes = this.state.notes.filter(note => note.id !== id);
    this.setState({
      notes: newNotes,
    });
  }

  render() {
    return (
      <div>
        <Button onClick={this.handleClick} />
        <Notes notes={this.state.notes} onChange={this.handleChange} onDelete={this.handleDeleteClick} />
      </div>
    );
  }
}

export default App;
