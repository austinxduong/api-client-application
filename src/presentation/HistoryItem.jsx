/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import styles from './Header.css';

function HistoryItem({ method, URL }) {

  return (
    <div>
      {method} {URL}
    </div>
  );
}

HistoryItem.PropTypes = { 
  method: PropTypes.string.isRequired,
  URL: PropTypes.string.isRequired
};

export default HistoryItem;
