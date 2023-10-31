import React from 'react';
import styles from '../Disciplines.module.scss';
import { useAppSelector } from '../../../redux/store';

const StepsTracker = () => {
  const step = useAppSelector((state) => state.disciplineChooseControl.step);

  return (
    <>
    
      {step == 1 ? (
        <>
          <div className={styles.stepActive}>
            <span>1</span>
          </div>
          <div className={styles.stepNotActive}>
            <span>2</span>
          </div>
          <div className={styles.stepNotActive}>
            <span>3</span>
          </div>
          <div className={styles.centerLine}></div>
        </>
      ) : step == 2 ? (
        <>
          <div className={styles.stepNotActive}>
            <span>1</span>
          </div>
          <div className={styles.stepActive}>
            <span>2</span>
          </div>
          <div className={styles.stepNotActive}>
            <span>3</span>
          </div>
          <div className={styles.centerLine}></div>
        </>
      ) : (
        <>
          <div className={styles.stepNotActive}>
            <span>1</span>
          </div>
          <div className={styles.stepNotActive}>
            <span>2</span>
          </div>
          <div className={styles.stepActive}>
            <span>3</span>
          </div>
          <div className={styles.centerLine}></div>
        </>
      )}
    </>
  );
};

export default StepsTracker;
