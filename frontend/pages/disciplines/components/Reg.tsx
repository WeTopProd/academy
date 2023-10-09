import React from 'react';
import { useAppDispatch, useAppSelector } from '../../../redux/store';
import styles from '../Disciplines.module.scss';
import Block3Step1 from './Block3Step1';
import { nextBtn } from '../../../redux/slices/disciplines/disciplineChooseControlSlice';
import StepsTracker from './StepsTracker';
import Block3Step2 from './Block3Step2';

const Reg = ({ id }) => {
  const disciplines = useAppSelector((state) => state.disciplines);
  const step = useAppSelector((state) => state.disciplineChooseControl.step);
  const dispatch = useAppDispatch();

  const { type_lessons, count_lessons, count_people } = useAppSelector(
    (state) => state.disciplineChooseControl.chosen
  );

  const nextButtonOnClick = () => {
    if (step < 3) {
      dispatch(nextBtn(step + 1));
    } else {
      alert('working');
    }
  };

  return (
    <div className={styles.disciplines_reg_mainWrapper}>
      <div className={styles.block1}>
        <h1>запись на дисциплину</h1>
        <h2>Выбор дисциплины</h2>
      </div>
      <div className={styles.block2}>
        <StepsTracker />
      </div>
      <div className={styles.block3}>
        <div className={styles.innerBloc3Wrapper}>
          {step == 1 ? (
            <Block3Step1 />
          ) : step == 2 ? (
            <Block3Step2 />
          ) : (
            <div>3</div>
          )}
        </div>
        <div className={styles.nextBtnDiv}>
          <button onClick={nextButtonOnClick}>Далее</button>
        </div>
      </div>
    </div>
  );
};

export default Reg;
