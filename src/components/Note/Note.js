import React from 'react';
import './Note.css';
import DeleteButton from '../DeleteButton/DeleteButton';

class Note extends React.Component {

  handleChange = (e) => {
    e.target.id === "title" ? this.props.onChange(this.props.id, e.target.value, this.props.description) : this.props.onChange(this.props.id, this.props.title, e.target.value);
  }

  render() {
    return (
      <div className="Note">
        <input id="title" type="text" value={this.props.title} onChange={this.handleChange} placeholder="Title" />
        <textarea rows="5" id="desc" type="text" value={this.props.description} onChange={this.handleChange} placeholder="Description" />
        <DeleteButton id={this.props.id} onDelete={this.props.onDelete} />
      </div>
    );
  }
}

export default Note;
