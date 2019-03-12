import React from 'react';
import Note from '../Note/Note';

class Notes extends React.Component {

  render() {
    return (
      this.props.notes.map((note, index) => {
        return <Note id={note.id} title={note.title} description={note.description} onChange={this.props.onChange} />;
      })
    );
  }
}

export default Notes;
