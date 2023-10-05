import Link from 'next/link';
import Image from 'next/image';
import {
  styles,
  aboutpng,
  disc,
  teachers,
  answers,
  callback,
  logotype,
  login,
  profileIcon,
} from './imports';
import { useEffect, useState } from 'react';
import { Button, Modal } from 'antd';
import { useAppDispatch, useAppSelector } from '../../../redux/store';

import { openModal } from '../../../redux/slices/modalSlice';
import LoginForm from '../../UniversalComponents/Forms/LoginForm/LoginForm';
import { sent, resetSent } from '../../../redux/slices/sendFormConfirmation';
import { RegistrationForm } from '../../UniversalComponents/Forms/registerationForm/RegistrationForm';
import { loginApi2 } from '../../../redux/api/loginApi';
import {
  switchUserProfile,
  userInit,
} from '../../../redux/slices/user/userSlice';

const Header = (): JSX.Element => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const user = useAppSelector((state) => state.user.user);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const token = localStorage.getItem('token');

    token.length > 5 &&
      token != '' &&
      loginApi2
        .getInfoByToken(token)
        .then((data) => {
          console.log(data);
          // date_of_birth: data.date_of_birth || null 
          dispatch(userInit({ ...data, token, }))
      });
  }, []);

  const handler = {
    contactUs: () => {
      dispatch(openModal(true));
      dispatch(resetSent(true));
    },
    ok: () => {
      setIsModalOpen(false);
    },
    Cancel: () => {
      setIsModalOpen(false);
    },
    showModal: () => {
      setIsModalOpen(true);
    },
    scroll: (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
      e.preventDefault();
      const href = e.currentTarget.href;
      const targetId = href.replace(/.*\#/, '');
      const elem = document.getElementById(targetId);
      elem?.scrollIntoView({
        behavior: 'smooth',
      });
    },
    userProfilePage: () => {
      dispatch(switchUserProfile('MainUserProfile'));
    },
  };

  const [logRegToggler, setLogRegToggler] = useState(true);

  return (
    <header className={styles.page_header}>
      <nav>
        <div className={styles.header_wrapper}>
          <Link href="/">
            <div className={styles.logotype}>
              <Image
                src={logotype}
                placeholder="blur"
                width={176}
                height={76}
                alt="Логотип"
              />
            </div>
          </Link>
          <ul className="menu">
            <li>
              <Link href="#about" onClick={handler.scroll}>
                <Image src={aboutpng} alt="О нас" />
                <span>О нас</span>
              </Link>
            </li>
            <li>
              <Link href="#disciplines" onClick={handler.scroll}>
                <Image src={disc} alt="Дисциплины" />
                <span> Дисциплины</span>
              </Link>
            </li>
            <li>
              <Link href="#teachers" onClick={handler.scroll}>
                <Image src={teachers} alt="Преподователи" />
                <span>Преподаватели</span>
              </Link>
            </li>
            <li>
              <Link href="#questions" onClick={handler.scroll}>
                <Image src={answers} alt="Ответы на вопросы" />
                <span>Ответы на вопросы</span>
              </Link>
            </li>
          </ul>
        </div>
        <div className={styles.feed_back}>
          <div onClick={handler.contactUs}>
            <button className={styles.text}>Обратный звонок</button>
            <button className={styles.phone}>
              <Image src={callback} alt="Обратный звонок" />
            </button>
          </div>

          {user.phone?.length < 5 ? (
            <Link href="#login">
              <div className={styles.login_wrapper} onClick={handler.showModal}>
                <Image src={login} className={styles.login} alt="Логин" />
              </div>
            </Link>
          ) : (
            <Link href="/userProfile">
              <div
                className={styles.login_wrapper}
                onClick={handler.userProfilePage}
              >
                <Image
                  src={profileIcon}
                  className={styles.login}
                  alt="user_Profile"
                />
              </div>
            </Link>
          )}

          <>
            <Modal
              title="Вход в личный кабинет"
              open={isModalOpen}
              onOk={handler.ok}
              onCancel={handler.Cancel}
              footer={null}
            >
              {logRegToggler ? (
                <LoginForm setLogRegToggler={setLogRegToggler} />
              ) : (
                <RegistrationForm setLogRegToggler={setLogRegToggler} />
              )}
            </Modal>
          </>
        </div>
      </nav>
    </header>
  );
};

export default Header;
