import React from 'react';
import styles from './styles.scss';

export default () => {
  return (
    <div className={styles.Root}>
      <div className={styles.Section}>
        <h2 className={styles.IntroTitle}>hi</h2>
        <h1 className={styles.Title}>my name is Bryan Potter</h1>
        <h2 className={styles.SubTitle}>I help teams make great software</h2>
      </div>

      {/* <div className={styles.Section}>
        <h2 className={styles.SectionTitle}>What kind of things I do</h2>
      </div> */}
    </div>
  );
};
