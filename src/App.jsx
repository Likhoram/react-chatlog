import './App.css';
import ChatEntry from './components/ChatEntry';
import messages from './data/messages.json';

const App = () => {
  return (
    <div id="App">
      <header>
        <h1>Chat between Vladimir and Estragon</h1>
      </header>
      <main>
        <ChatEntry
          sender={messages[0].sender}
          body={messages[0].body}
          timeStamp={messages[0].timeStamp}
        />
      </main>
    </div>
  );
};

export default App;
