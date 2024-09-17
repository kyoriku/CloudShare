import React, { useState, useRef } from 'react';

const ThoughtForm = ({ onThoughtAdded }) => {
  const [formState, setFormState] = useState({
    username: "",
    thought: "",
    image: ""
  });
  const [characterCount, setCharacterCount] = useState(0);
  const fileInput = useRef(null);

  const handleChange = (event) => {
    if (event.target.value.length <= 280) {
      setFormState({ ...formState, [event.target.name]: event.target.value });
      setCharacterCount(event.target.value.length);
    }
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const res = await fetch('/api/users', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formState),
      });
      const data = await res.json();
      console.log(data);
      onThoughtAdded(data); // Add the new thought to the list
    } catch (error) {
      console.error('Error posting thought:', error);
    }

    // Reset form state
    setFormState({ username: "", thought: "", image: "" });
    setCharacterCount(0);

    // Reset file input
    if (fileInput.current) {
      fileInput.current.value = '';
    }
  };

  const handleImageUpload = async (event) => {
    event.preventDefault();
    const data = new FormData();
    data.append('image', fileInput.current.files[0]);

    try {
      const res = await fetch('/api/image-upload', {
        mode: 'cors',
        method: 'POST',
        body: data,
      });
      if (!res.ok) throw new Error(res.statusText);
      const postResponse = await res.json();
      setFormState({ ...formState, image: postResponse.Location });
      console.log('postImage: ', postResponse.Location);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <p className={`m-0 ${characterCount === 280 ? "text-error" : ""}`}>
        Character Count: {characterCount}/280
      </p>
      <form
        className="flex-row justify-center justify-space-between-md align-stretch"
        onSubmit={handleFormSubmit}
      >
        <input
          placeholder="Name"
          name="username"
          value={formState.username}
          className="form-input col-12 "
          onChange={handleChange}
        />
        <textarea
          placeholder="Here's a new thought..."
          name="thought"
          value={formState.thought}
          className="form-input col-12 "
          onChange={handleChange}
        />
        <label className="form-input col-12  p-1">
          Add an image to your thought:
          <input type="file" ref={fileInput} className="form-input p-2" />
          <button className="btn" onClick={handleImageUpload} type="button">
            Upload
          </button>
        </label>
        <button className="btn col-12 " type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ThoughtForm;