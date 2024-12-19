import React, { useState } from 'react';

const Journal = () => {
  const [entries, setEntries] = useState([]);
  const [newEntry, setNewEntry] = useState('');

  const handleAddEntry = () => {
    // validates input so that its not empty. Then updates the state when the user clicks Add Entry
    if (newEntry.trim()) {
        //put newEntry in entries array at the end w/o mutating it
      setEntries([...entries, newEntry]);
      //clears text area and makes it empty, ready for new inputs
      setNewEntry('');
    }
  };

  const handleDeleteEntry = (indexToDelete) => {
    //at the index of the entry to delete create a new array using filter tha does not include the index we want to delete
    setEntries(entries.filter((_, index) => index !== indexToDelete));
  };
  

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>My Moodie Journal</h1>

      {/* Rich Instruction prompt */}
      <div style={{ maxWidth: '400px', margin: 'auto', border: '1px solid #ccc', padding: '10px', borderRadius: '5px' }}>
        <p>
          <strong>Count Your Blessings:</strong> 1. First thing in the morning, make a list of ten blessings in your life you are grateful for. 2. Write why you are grateful for each blessing.3. Go back and read your list, either in your mind or out loud. When you get to the end of each one, say the magic words, thank you, thank you, thank you, and feel the gratitude for that blessing as much as you possibly can. 4. Repeat the first three steps of this magical practice every morning for the next 27 days.
        </p>
      </div>

      {/* Journal Entry Input Space */}
      <textarea
        value={newEntry} // changes based on the newEntry state
        onChange={(e) => setNewEntry(e.target.value)} // updates to the current text being put/typed inside the text area.
        placeholder="What are the blessings you are grateful for..."
        required
        rows="10" // i believe it was supposed to be 10 things to be thankful
        style={{  maxWidth: '400px', margin: 'auto',  padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
      />
      {/* When button is clicked the handleAddEntry function will be invoked*/}
      <button onClick={handleAddEntry} style={{ padding: '10px 20px', cursor: 'pointer' }}>Note my Mood</button>

      {/* Display the Entries : ordered List style */}
      <ol style={{  maxWidth: '400px', margin: 'auto' , padding: '0', listStyle: 'none' }}>
        {entries.map((entry, index) => (
            //iterate over each entry, letting each index be 1 list item
          <li key={index} style={{  maxWidth: '400px', margin: 'auto' , padding: '10px', border: '1px solid #ccc', borderRadius: '5px' }}>
            <span>{entry}</span>
            <button
              onClick={() => handleDeleteEntry(index)}
              style={{ padding: '5px 10px', backgroundColor: '#ff6666', color: 'white', border: 'none', borderRadius: '3px', cursor: 'pointer' }}
            >
              Remove Entry
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default Journal;
