import React from 'react';
import PropTypes from 'prop-types';
import styles from './Header.css';

function Results({ results }) {
  return (
    <div label="json-results" className={styles.results}>
      <h3>Results:</h3>
      <p>{JSON.stringify(results)}</p>
    </div>
  );
}

Results.propTypes = {
  results: PropTypes.any.isRequired
};

export default Results;
