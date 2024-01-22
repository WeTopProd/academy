import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../redux/store';
import styles from '../Disciplines.module.scss';
import { type_payment_control } from '../../../redux/slices/disciplines/disciplineChooseControlSlice';

const Block3Step3 = () => {
  const paymentType = useAppSelector(
    (state) => state.disciplineChooseControl.chosen.type_payment
  );
  const [card, setCard] = useState(paymentType == 'card' ? true : false);
  const [cash, setCash] = useState(paymentType == 'cash' ? true : false);
  const dispatch = useAppDispatch();

  const stepControl = useAppSelector(
    (state) => state.disciplineChooseControl.stepPolControl[3]
  );

  const handler = {
    card: () => {
      setCard(true);
      setCash(false);
      dispatch(type_payment_control('card'));
    },
    cash: () => {
      setCard(false);
      setCash(true);
      dispatch(type_payment_control('cash'));
    },
  };

  const chosen = useAppSelector(
    (state) => state.disciplineChooseControl.chosen
  );

  const allDis = useAppSelector((state) => state.disciplines.data);
  const chosenDis = useAppSelector((state) => state.disciplines.data).filter(
    (el) => el.id == chosen.discipline
  );

  // const type = chosenDis[0].cost.filter((el) => el.type == chosen.type_lessons);

  const [total, setTotal] = useState(0);
  // useEffect(() => {
  //   type[0].price && chosen.count_people && chosen.count_lessons
  //     ? setTotal(
  //         Number(type[0].price.replace(/\D/g, '')) *
  //           chosen.count_people *
  //           chosen.count_lessons
  //       )
  //     : null;
  // }, [type[0].price, chosen.count_people, chosen.count_lessons]);

  // return (
    // <div className={styles.step3Wrapper}>
    //   <div className={styles.step3Div1}>
    //     <div className={styles.step3RadiusInputDiv}>
    //       <div>
    //         <input
    //           type="radio"
    //           className={styles.input_Radios}
    //           checked={cash}
    //           onClick={handler.cash}
    //           />
    //       </div>
    //       <div>оплата наличными</div>
    //     </div>
    //
    //     <div className={styles.step3RadiusInputDiv}>
    //       <div>
    //         <input
    //           type="radio"
    //           className={styles.input_Radios}
    //           checked={card}
    //           onClick={handler.card}
    //           />
    //       </div>
    //       <div>онлайн оплата</div>
    //     </div>
    //           {stepControl.type_payment ? (
    //             <label className={styles.POLYACONTROL}>обязательные поля»</label>
    //           ) : null}
    //   </div>
    //   <div className={styles.step3Div2}>
    //     <div>
    //       <span>Дисциплина: </span>
    //       <label> {chosenDis[0].name}</label>
    //     </div>
    //     <div>
    //       <span> Вид занятий: </span> <label> {type[0].name} </label>
    //     </div>
    //     <div>
    //       <span> Количество занятий: </span>{' '}
    //       <label> {chosen.count_lessons}</label>
    //     </div>
    //     <div>
    //       <span> Количество человек: </span>{' '}
    //       <label> {chosen.count_people}</label>
    //     </div>
    //     <div>
    //       <span> Дата: </span> <label> {chosen.start_lessons}</label>
    //     </div>
    //     <div>
    //       <span> Время: </span> <label> {chosen.general_time}</label>
    //     </div>
    //     <span className={styles.paymentText}>К оплате: {total}</span>
    //   </div>
    // </div>
  // );
};

export default Block3Step3;
