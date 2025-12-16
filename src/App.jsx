import './App.css';
import ChatLog from './components/ChatLog';
import messages from './data/messages.json';
import { useState } from 'react';

const App = () => {
  const [entries, setEntries] = useState(messages);

  const handleOnLike = (id) => {
    setEntries((prevEntries) =>
      prevEntries.map((entry) =>
        entry.id === id ? { ...entry, liked: !entry.liked } : entry
      )
    );
  };

  const handlerCountLikes = () => {
    return entries.filter((entry) => entry.liked).length;
  };

  return (
    <div id="App">
      <header>
        <h1>Chat between Vladimir and Estragon</h1>
        <h2>{handlerCountLikes()} ❤️s</h2>
      </header>
      <main>
        <ChatLog entries={entries} onLike={handleOnLike} />
      </main>
    </div>
  );
};

export default App;
