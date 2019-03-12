import React from 'react';
import './Note.css';

class Note extends React.Component {

  handleChange = (e) => {
    e.target.id === "title" ? this.props.onChange(this.props.id, e.target.value) : this.props.onChange(this.props.id, this.props.title, e.target.value);
  }

  render() {
    return (
      <div className="Note">
        <input id="title" type="text" value={this.props.title} onChange={this.handleChange} />
        <input id="desc" type="text" value={this.props.description} onChange={this.handleChange} />
      </div>
    );
  }
}

export default Note;
