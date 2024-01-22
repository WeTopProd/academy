import React from 'react';
import { useAppDispatch, useAppSelector } from '../../../redux/store';
import styles from '../Disciplines.module.scss';
import Block3Step1 from './Block3Step1';
import {
  nextBtn,
  payment_done,
  step1PolControl,
  step2PolControl,
  step3PolControl,
} from '../../../redux/slices/disciplines/disciplineChooseControlSlice';
import StepsTracker from './StepsTracker';
import Block3Step2 from './Block3Step2';
import Block3Step3 from './Block3Step3';
import Done from './Done';

const Reg = ({ id }) => {
  const disciplines = useAppSelector((state) => state.disciplines.data);
  const step = useAppSelector((state) => state.disciplineChooseControl.step);
  const chosen = useAppSelector(
    (state) => state.disciplineChooseControl.chosen
  );
  const user = useAppSelector((state) => state.user.user);
  const paymentStatue = useAppSelector(
    (state) => state.disciplineChooseControl.done
  );

  const dispatch = useAppDispatch();

  const { type_lessons, count_lessons, count_people } = useAppSelector(
    (state) => state.disciplineChooseControl.chosen
  );

  const nextButtonOnClick = () => {
    if (step == 1) {
      if (
        chosen.discipline &&
        chosen.type_lessons &&
        chosen.count_lessons &&
        chosen.count_people > 0
      ) {
        dispatch(nextBtn(2));
      } else {
        !chosen.discipline && dispatch(step1PolControl('discipline'));
        !chosen.type_lessons && dispatch(step1PolControl('type_lessons'));
        !chosen.count_lessons && dispatch(step1PolControl('count_lessons'));
        chosen.count_people <= 0 && dispatch(step1PolControl('count_people'));
      }
    } else if (step == 2) {
      if (chosen.start_lessons && chosen.general_time) {
        dispatch(nextBtn(3));
      } else {
        !chosen.start_lessons && dispatch(step2PolControl('start_lessons'));
        !chosen.general_time && dispatch(step2PolControl('general_time'));
      }
    } else {
      if (chosen.type_payment && user.email) {
        // POST API!!!
        console.log(chosen);

        dispatch(payment_done(true));
      } else if (!chosen.type_payment) {
        !chosen.type_payment&&dispatch(step3PolControl('type_payment'))
            } else {
        alert('you need to login first!');
      }
    }
  };
  const backButtonOnClick = () => {
    if (step == 1) {
      alert('NONONO');
    } else {
      dispatch(nextBtn(step - 1));
    }
  };

  return (
    <>
      {/*{!paymentStatue ? (*/}
      {/*  <div className={styles.disciplines_reg_mainWrapper}>*/}
      {/*    <div className={styles.block1}>*/}
      {/*      <h1>запись на дисциплину</h1>*/}
      {/*      {step == 1 ? (*/}
      {/*        <h2>Выбор дисциплины</h2>*/}
      {/*      ) : step == 2 ? (*/}
      {/*        <h2>Дата и время занятий</h2>*/}
      {/*      ) : (*/}
      {/*        <h2>Оплата</h2>*/}
      {/*      )}*/}
      {/*    </div>*/}
      {/*    <div className={styles.block2}>*/}
      {/*      <StepsTracker />*/}
      {/*    </div>*/}
      {/*    <div className={styles.block3}>*/}
      {/*      {step > 1 && (*/}
      {/*        <div className={styles.backBtnDiv}>*/}
      {/*          <button onClick={backButtonOnClick}>назад</button>*/}
      {/*        </div>*/}
      {/*      )}*/}

      {/*      <div className={styles.innerBloc3Wrapper}>*/}
      {/*        {step == 1 ? (*/}
      {/*          <Block3Step1 />*/}
      {/*        ) : step == 2 ? (*/}
      {/*          <Block3Step2 />*/}
      {/*        ) : (*/}
      {/*          <Block3Step3 />*/}
      {/*        )}*/}
      {/*      </div>*/}
      {/*      <div className={styles.nextBtnDiv}>*/}
      {/*        <button onClick={nextButtonOnClick}>Далее</button>*/}
      {/*      </div>*/}
      {/*    </div>*/}
      {/*  </div>*/}
      {/*) : (*/}
      {/*  <Done />*/}
      {/*)}*/}
    </>
  );
};

export default Reg;
