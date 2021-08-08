import React from 'react';
import styles from './Header.css';
import HistoryItem from './HistoryItem';
import PropTypes from 'prop-types';

function HistoryList({ history }) {
  return (
    <ul label="history-list" className={styles.historyList}>
      <h2>History</h2>
      {history.map((item) => (
        <li key={item.id} className={styles.listItem}>
          <HistoryItem
            method={item.method}
            URL={item.URL}
          />
        </li>
      ))}
    </ul>
  );
}

HistoryList.propTypes = {
  history: PropTypes.array.isRequired
};

export default HistoryList;

