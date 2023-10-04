import React, { useState } from 'react';
import { useForm, Resolver } from 'react-hook-form';
import styles from './styles.module.scss';
import { useSendEmailMutation, mailApi2 } from '../../../../redux/api/mailApi';
import InputMask from 'react-input-mask';
import Spinner from '../../spinner/Spinner';
import { useAppDispatch } from '../../../../redux/store';
import { closeModal } from '../../../../redux/slices/modalSlice';
import { sent, resetSent } from '../../../../redux/slices/sendFormConfirmation';


type FormValues = {
  first_name: string;
  phone: string;
  description: string;
};

const resolver: Resolver<FormValues> = async (values) => {
  return {
    values: values.first_name ? values : {},
    errors: !values.first_name
      ? {
          first_name: {
            type: 'required',
            message: 'Обязательное поле',
          },
          phone: {
            type: 'required',
            message: 'Обязательное поле',
          },
        }
      : {},
  };
};

const phoneForBackend = async (phone: string) => {
  ['(', ')', '-', '-'].map((item) => {
    phone = phone.replace(item, '');
  });
  console.log(phone);

  return phone;
};

export default function App() {
  // const [value, setValue] = useState('');
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({ resolver });
  const [sendEmail, { isLoading, isSuccess, isError, status }] =
    useSendEmailMutation();

  // const [toggler, setToggler] = useState(true);
  const dispatch = useAppDispatch();

  const onSubmit = handleSubmit(async (data: FormValues) => {
    data.phone = await phoneForBackend(data.phone);

    mailApi2.sendEmail(1, data).then(() => {
      dispatch(sent(true));
      setTimeout(() => {
        dispatch(closeModal(true));
        dispatch(resetSent(true));
      }, 5000);
    });
  });

  return (
    <>
      <form onSubmit={onSubmit} className={styles.form}>
        <span>и мы свяжемся с вами в ближайшее время</span>
        <input {...register('first_name')} placeholder="Имя" />
        {errors?.first_name && <p>{errors.first_name.message}</p>}
        <InputMask
          mask="+7(999)999-99-99"
          maskChar="_"
          alwaysShowMask
          {...register('phone')}
        />
        {errors?.phone && <p>{errors.phone.message}</p>}
        <textarea {...register('description')} placeholder="Комментарий" />
        {isLoading && (
          <div className={styles.loading}>
            <Spinner />
          </div>
        )}
        {isSuccess && <div className={styles.success}>Успешно</div>}
        {isError && <div className={styles.error}>Ошибка</div>}
        <input type="submit" value={'Отправить'} className={styles.submit} />
      </form>
    </>
  );
}
