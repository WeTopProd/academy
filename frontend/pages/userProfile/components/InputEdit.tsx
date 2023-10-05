import React from 'react';
import InputMask from 'react-input-mask';

import styles from '../styles.module.scss';

const InputEdit = ({ title, value, handler }) => {
  return (
    <>
      {title == 'Телефон' ? (
        <div className={styles.inputDiv}>
        <span>{title}</span>
        <InputMask
          mask="+7(999)999-99-99"
          maskChar="_"
          alwaysShowMask
          value={value}
          onChange={handler}
        />
        </div>
      ) :(title == 'Дата рождения')? <div className={styles.inputDiv}>
      <span>{title}</span>
      <input value={value} placeholder={title} onChange={handler} type='date' />
        </div>
       :(
        <div className={styles.inputDiv}>
          <span>{title}</span>
          <input value={value} placeholder={title} onChange={handler} />
        </div>
      )}
    </>
  );
};

export default InputEdit;
