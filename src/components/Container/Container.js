import React from 'react';
import styles from './Container.scss';

const Container = () => (
  <div className={styles.component}>
    {this.props.children}
  </div>

);

export default Container;