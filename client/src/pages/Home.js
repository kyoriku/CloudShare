import React, { useState, useEffect } from 'react';
import ThoughtList from '../components/ThoughtList';
import ThoughtForm from '../components/ThoughtForm';

const Home = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [thoughts, setThoughts] = useState([]);

  const fetchThoughts = async () => {
    try {
      const res = await fetch('/api/users');
      const jsonData = await res.json();
      const _data = jsonData.sort((a, b) =>
        a.createdAt < b.createdAt ? 1 : -1,
      );
      setThoughts([..._data]);
      setIsLoaded(true);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchThoughts();
  }, []);

  const addThought = (newThought) => {
    setThoughts([newThought, ...thoughts]);
  };

  return (
    <main>
      <div className="flex-row justify-space-between">
        <div className="col-12 mb-3">
          <ThoughtForm onThoughtAdded={addThought} />
        </div>
        <div className={`col-12 mb-3 `}>
          {!isLoaded ? (
            <div>Loading...</div>
          ) : (
            <ThoughtList thoughts={thoughts} setThoughts={setThoughts} title="Recent Posts" />
          )}
        </div>
      </div>
    </main>
  );
};

export default Home;