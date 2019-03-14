import React from 'react';
import './DeleteButton.css';

class DeleteButton extends React.Component {

  handleDeleteClick = (e) => {
    e.preventDefault();
    if (window.confirm("Delete?")) this.props.onDelete(this.props.id);
  }

  render() {
    return (
      <a href="#" class="btn btn-primary a-btn-slide-text" onClick={this.handleDeleteClick}>
       <span class="glyphicon glyphicon-remove" aria-hidden="true"></span>
        <span><strong>Delete</strong></span>
      </a>
    );
  }
}

export default DeleteButton;
