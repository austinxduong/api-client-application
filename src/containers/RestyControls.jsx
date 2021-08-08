/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';
import { styles } from 'ansi-colors';

const Controls = ({ onChange, submitChange, json, url, method }) => {

  return (
    <div className={styles.bigDiv}>
      <form className={styles.form} onSubmit={submitChange}>

        <input type="text" placeholder="URL" className={styles.url} onChange={onChange} />

        <section className={styles.getAllButtons}>
          <div className={styles.radios}>
            <input className={styles.radioButton} type="radio" name="method" value="GET" checked={method === 'GET'} onChange={onChange}/>
            <label className={styles.formLabels}>GET</label>

            <input className={styles.radioButton} type="radio" name="method" value="POST" checked={method === 'POST'} onChange={onChange}/>
            <label className={styles.formLabels}>POST</label>

            <input className={styles.radioButton} type="radio" name="method" value="PUT" checked={method === 'PUT'} onChange={onChange}/>
            <label className={styles.formLabels}>PUT</label>

            <input className={styles.radioButton} type="radio" name="method" value="DELETE" checked={method === 'DELETE'} onChange={onChange}/>
            <label className={styles.formLabels}>DELETE</label>
          </div>
        </section>
      </form>
    </div>
  );
};

Controls.propTypes = {
  onChange: PropTypes.func.isRequired,
  submitChange: PropTypes.func.isRequired,
  json: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  method: PropTypes.string.isRequired
};
