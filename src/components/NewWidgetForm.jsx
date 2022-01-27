import React, { useState } from 'react';

const NewWidgetForm = ({ addWidget }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleChange = (e) => {
    const input = {
      name: e.target.name,
      value: e.target.value,
    };
    if (input.name === 'title') {
      setTitle(input.value);
    } else if (input.name === 'description') {
      setDescription(input.value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && description) {
      var newForm = {
        title: title,
        description: description,
      };
      addWidget(newForm);
      setTitle('');
      setDescription('');
    } else if (!title && description) {
      alert('Please enter a title.');
    } else if (title && !description) {
      alert('Please enter a brief description.');
    } else {
      alert('Please enter a title and description.');
    }
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <span>Title:</span>
      <input
        name="title"
        type="text"
        value={title}
        onChange={(e) => handleChange(e)}
      />
      <span>Description:</span>
      <input
        name="description"
        type="text"
        value={description}
        onChange={(e) => handleChange(e)}
      />
      <button className="new">New</button>
    </form>
  );
};

export default NewWidgetForm;
