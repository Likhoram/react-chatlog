import './App.css';
import ChatLog from './components/ChatLog';
import messages from './data/messages.json';

<ChatLog entries={messages} />;

const App = () => {
  return (
    <div id="App">
      <header>
        <h1>Chat between Vladimir and Estragon</h1>
      </header>
      <main>
        <ChatLog entries={messages} />
      </main>
    </div>
  );
};

export default App;
