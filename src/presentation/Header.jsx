import React from 'react';
import styles from './Header.css';

function Header() {

  return (
    <div className={styles.divheader}>
      <h1 className={styles.appheader}>REST-y</h1>
    </div>
  );
}

export default Header;
