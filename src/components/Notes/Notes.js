import React from 'react';
import Note from '../Note/Note';

class Notes extends React.Component {

  render() {
    return (
      this.props.notes.map(note => {
        return <Note />;
      })
    );
  }
}

export default Notes;
