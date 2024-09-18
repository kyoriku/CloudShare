import React, { useState, useRef } from 'react';

const ThoughtForm = ({ onThoughtAdded }) => {
  const [formState, setFormState] = useState({
    username: "",
    thought: "",
    image: ""
  });
  const [characterCount, setCharacterCount] = useState(0);
  const [isUploading, setIsUploading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(''); // State to hold error message
  const fileInput = useRef(null);

  const handleChange = (event) => {
    if (event.target.value.length <= 280) {
      setFormState({ ...formState, [event.target.name]: event.target.value });
      setCharacterCount(event.target.value.length);

      // Clear error message if user starts typing the name
      if (event.target.name === 'username' && errorMessage) {
        setErrorMessage('');
      }
    }
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    
    // Prevent submission if no name is entered
    if (!formState.username) {
      setErrorMessage("Please enter your name."); // Set error message
      return;
    }

    setIsUploading(true);

    // Handle image upload if a file is selected
    let imageUrl = formState.image;
    if (fileInput.current.files.length > 0) {
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
        imageUrl = postResponse.Location;
        console.log('postImage: ', imageUrl);
      } catch (error) {
        console.log(error);
      }
    }

    // Submit the form data even if thought is empty
    try {
      const res = await fetch('/api/users', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          ...formState, 
          image: imageUrl, 
          thought: formState.thought || "" // Ensure thought is at least an empty string
        }),
      });
      const data = await res.json();
      console.log(data);
      onThoughtAdded(data); // Add the new thought to the list
    } catch (error) {
      console.error('Error posting thought:', error);
    } finally {
      // Reset form state and upload status
      setFormState({ username: "", thought: "", image: "" });
      setCharacterCount(0);
      setIsUploading(false);

      // Reset file input
      if (fileInput.current) {
        fileInput.current.value = '';
      }
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
        {/* Conditionally render error message if username is missing */}
        {errorMessage && <p className="text-error">{errorMessage}</p>}
        
        <textarea
          placeholder="Here's a new thought (optional)..."
          name="thought"
          value={formState.thought}
          className="form-input col-12 "
          onChange={handleChange}
        />
        <label className="form-input col-12 p-1">
          Add an image to your thought:
          <input type="file" ref={fileInput} className="form-input p-2" />
        </label>
        <button className="btn col-12" type="submit" disabled={isUploading}>
          {isUploading ? 'Submitting...' : 'Submit'}
        </button>
      </form>
    </div>
  );
};

export default ThoughtForm;
