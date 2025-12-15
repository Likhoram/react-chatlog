import './ChatLog.css';
import PropTypes from 'prop-types';
import ChatEntry from './ChatEntry';

const ChatLog = ({ entries }) => {
  return (
    <>
      <ul>
        {entries.map((chatEntry) => (
          <ChatEntry
            key={chatEntry.id}
            sender={chatEntry.sender}
            body={chatEntry.body}
            timeStamp={chatEntry.timeStamp}
          />
        ))}
      </ul>
    </>
  );
};

ChatLog.propTypes = {
  entries: PropTypes.arrayOf(
    PropTypes.shape({
      sender: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
      timeStamp: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default ChatLog;
