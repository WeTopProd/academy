import React from 'react';
import styles from '../Disciplines.module.scss';
import { useAppDispatch, useAppSelector } from '../../../redux/store';
import { payment_done } from '../../../redux/slices/disciplines/disciplineChooseControlSlice';
import { useRouter } from 'next/router';
import { disciplinesApi } from '../../../redux/api/disciplinesApi';

const Done = () => {
  const paymentStatue = useAppSelector(
    (state) => state.disciplineChooseControl.done
  );
  const chosen = useAppSelector((state)=>state.disciplineChooseControl.chosen)
  const token = useAppSelector((state)=>state.user.user.token)
  const dispatch = useAppDispatch();
  const router = useRouter();

  const confirm = () => {
    disciplinesApi.post(token, chosen).then(data=>{
      paymentStatue && router.push('/');
      dispatch(payment_done(false));
    }).catch(err=>{
      alert(err)})
    
  };
  return (
    <div className={styles.paymentDone}>
      <h1>Вы записаны на занятия!</h1>
      <h2>
        Ждем вас по адресу: Метро Новогиреево г. Москва ул. Сталеваров, 14к1 <br />
        Академия француз<br />
        На Территории Развлекательный комплекс “Француз”
      </h2>
      <div className={styles.DONE_DIV}>
        <button className={styles.DONE_BTN} onClick={()=>router.push('/')}><label>
          Cancel
          </label>
          </button>
        <button className={styles.DONE_BTN} onClick={confirm}><label>confirm</label></button>
      </div>
    </div>
  );
};

export default Done;
