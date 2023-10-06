import React, { useEffect, useState } from 'react';
import styles from '../styles.module.scss';
import { useAppDispatch, useAppSelector } from '../../../redux/store';



const EditPasswordInput = ({title, value, handler}) => {


  return (
    <div className={styles.inputDiv}>
          <span>{title}</span>
          <input
            value={value}
            placeholder="*********"
            type="password"
            onChange={handler}
          />
        </div>
  );
};

export default EditPasswordInput;
