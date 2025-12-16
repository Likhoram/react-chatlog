import './ChatLog.css';
import PropTypes from 'prop-types';
import ChatEntry from './ChatEntry';

const ChatLog = ({ entries, onLike }) => {
  return (
    <>
      <ul>
        {entries.map((chatEntry) => (
          <ChatEntry
            key={chatEntry.id}
            id={chatEntry.id}
            sender={chatEntry.sender}
            body={chatEntry.body}
            timeStamp={chatEntry.timeStamp}
            liked={chatEntry.liked}
            onLike={onLike}
          />
        ))}
      </ul>
    </>
  );
};

ChatLog.propTypes = {
  entries: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      sender: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
      timeStamp: PropTypes.string.isRequired,
      liked: PropTypes.bool.isRequired,
    })
  ).isRequired,
  onLike: PropTypes.func.isRequired,
};

export default ChatLog;
