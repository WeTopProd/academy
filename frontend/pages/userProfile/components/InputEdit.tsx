import React from 'react';
import styles from '../styles.module.scss';

const InputEdit = ({ title, value, handler }) => {
  return (
    <div className={styles.inputDiv}>
      <span>{title}</span>
      <input value={value} placeholder={title} onChange={handler} />
    </div>
  );
};

export default InputEdit;
