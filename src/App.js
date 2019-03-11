import React, { Component } from 'react';
import './App.css';
import Note from './components/Note/Note';
import Notes from './components/Notes/Notes';
import Button from './components/Button/Button';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [<Note />, <Note />]
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick () {
    const newNotes = this.state.notes.slice();
    newNotes.push(<Note />);
    this.setState({
      notes: newNotes,
    });
  }

  render() {
    return (
      <div>
        <Button onClick={this.handleClick} />
        <Notes notes={this.state.notes} />
      </div>
    );
  }
}

export default App;
