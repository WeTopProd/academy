import React from 'react';
import { useAppSelector } from '../../../redux/store';
import styles from '../Disciplines.module.scss';

const Reg = ({ id }) => {
  const disciplines = useAppSelector((state) => state.disciplines);

  return (
    <div className={styles.disciplines_reg_mainWrapper}>
      <div className={styles.block1}>
        <h1>запись на дисциплину</h1>
        <h2>Выбор дисциплины</h2>
      </div>
      <div className={styles.block2}>
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
      </div>
      <div className="block3">
        <div>
          <span>Дисциплина</span>
          <select name="disciplines">
            {disciplines.map((el) => {
              if (el.id == id) {
                return <option selected>{el.name}</option>;
              } else {
                return <option>{el.name}</option>;
              }
            })}
          </select>
        </div>
      </div>
    </div>
  );
};

export default Reg;
