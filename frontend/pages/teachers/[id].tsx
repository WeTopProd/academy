import { FC, useEffect } from 'react';
import styles from './Teachers.module.scss';
import { useRouter } from 'next/router';
import { useAppDispatch, useAppSelector } from '../../redux/store';
import Image from 'next/image';
import actorIcon from '../../public/imgs/icons/actor_icon.png';
import { openModal } from '../../redux/slices/modalSlice';
import { teachersApi } from '../../redux/api/teachersApi';
import { teachersInit } from '../../redux/slices/teacher/teacherSlice';

const Teacher: FC<any> = () => {
  const router = useRouter();
  const { id } = router.query;

  const teachers = useAppSelector((state) => state.teacher.data);

  const teacher = useAppSelector((state) =>
    state.teacher.data.find((item) => {
      return item.id == Number(id) && item;
    })
  );
  const dispatch = useAppDispatch();
  useEffect(() => {
    console.log(teacher, 'lkjhjkl');
  }, []);

  useEffect(() => {
    teachers.length == 0 &&
      teachersApi.get().then((data) => {
        dispatch(teachersInit(data));
      });
  }, [teachers]);
  ///
  return teacher ? (
    <main className={styles.teachers_wrapper}>
      <div className={styles.teachers_container}>
        <div className={styles.fullname_skills}>
          <h1>{teacher.full_name}</h1>
          <ul>
            {teacher.skills.map((item) => {
              return (
                <li>
                  <Image
                    src={actorIcon}
                    width={23}
                    height={23}
                    alt="actor icon"
                  />
                  <span>{item}</span>
                </li>
              );
            })}
          </ul>
        </div>
        <div className={styles.image_block}>
          <Image
            src={teacher.image_url}
            alt="Фото учителя"
            width={606}
            height={478}
          />
          <h3>
            <div className={styles.line}></div>
            {teacher.greetings}
          </h3>
        </div>
      </div>
      <h3 className={styles.greeting_small}>
        <div className={styles.line}></div>
        {teacher.greetings}
      </h3>
      <div className={styles.unique_wrapper}>
        <span>{teacher.unique}</span>
      </div>
      <div className={styles.blocks_wrapper}>
        <h1>
          На курсе{' '}
          {teacher.disciplines.map((item) => {
            return item.attr + ', ';
          })}
          вы:
        </h1>
        <div className={styles.blocks_container}>
          {Array.isArray(teacher.future) ? (
            teacher.future.map((item) => {
              return (
                <div className={styles.block}>
                  <span>{item}</span>
                </div>
              );
            })
          ) : (
            <div className={styles.block}>
              <span>{teacher.future}</span>
            </div>
          )}
        </div>
        <div className={styles.buttons_wrapper}>
          <button onClick={() => dispatch(openModal(true))}>
            Записаться на курс
          </button>
        </div>
      </div>
    </main>
  ) : (
    <div>Loading...</div>
  );
};

export default Teacher;
