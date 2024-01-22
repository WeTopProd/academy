import { FC, useEffect } from 'react';
import styles from './Disciplines.module.scss';
import { useRouter } from 'next/router';
import { useAppDispatch, useAppSelector } from '../../redux/store';
import Image from 'next/image';
import Banner from '../../components/PageComponents/Main/Banner/Banner';
import Gallery from '../../components/PageComponents/Main/Gallery/Gallery';
import { useDispatch } from 'react-redux';
import {
  chooseDiscipline,
  nextBtn,
} from '../../redux/slices/disciplines/disciplineChooseControlSlice';
import { disciplinesApi } from '../../redux/api/disciplinesApi';
import { disciplineInit } from '../../redux/slices/disciplines/disciplinesSlice';

const Disciplines = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const {id} = router.query;
};
//
//
//   const disciplines = useAppSelector((state) => state.disciplines.data.find(el=>Number(el.id) == Number(id)))
//
//   const disciplinesAll = useAppSelector(state=>state.disciplines.data)
//   useEffect(() => {
//     disciplinesAll.length == 0 &&
//       disciplinesApi
//         .get()
//         .then((data) => dispatch(disciplineInit(data)))
//   }, [disciplinesAll]);
//
//
//
//   const teacher = useAppSelector((state) =>
//     state.teacher.data.filter((item) => {
//       return item.disciplines.map((i) => i.name);
//     })
//   );
//
//   const onChoose = (id) => {
//     dispatch(chooseDiscipline(id));
//     dispatch(nextBtn(1));
//     router.push('/disciplines/reg');
//   };
//   var teacherListForDis =     useAppSelector((state) => {
//     return state.teacher.data.filter(teacher => teacher.disciplines.some(discipline => discipline.name === disciplines?.name));
//   })
//
//   useEffect(()=>{
//     console.log(disciplines,'----');
//
//   },[])
//
//   return disciplines ? (
//     <main className={styles.disciplines_wrapper}>
//       <section className={styles.disciplines_title_container}>
//         <div className={styles.disciplines_title}>
//           <Image
//             src={disciplines.image_url}
//             width={700}
//             height={400}
//             alt="Фото"
//           />
//           <div className={styles.text_wrapper}>
//             <div className={styles.text}>
//               <h1>{disciplines.name}</h1>
//               <h2>Продолжительность занятия - {disciplines.lesson_duration}</h2>
//               <p>{disciplines.description}</p>
//             </div>
//
//             <button onClick={(e) => onChoose(disciplines.id)}>
//               Записаться <span>на курс</span>
//             </button>
//           </div>
//         </div>
//         <p className={styles.text_small}>{disciplines.description}</p>
//       </section>
//       <section className={styles.blocks_wrapper}>
//         <h1>На курсе {disciplines.name_sklonenie} вы:</h1>
//         <div className={styles.blocks_container}>
//           {disciplines.skills.map((item) => {
//             return (
//               <div className={styles.block}>
//                 <span>{item}</span>
//               </div>
//             );
//           })}
//         </div>
//       </section>
//       <section className={styles.prices_wrapper}>
//         <h1>Цены</h1>
//         <ul>
//           {/*{disciplines.cost.map((item) => {*/}
//           {/*  return (*/}
//           {/*    <li>*/}
//           {/*      <span className={styles.text}>{item.name}</span>*/}
//           {/*      <span className={styles.price}>{item.price}</span>*/}
//           {/*    </li>*/}
//           {/*  );*/}
//           {/*})}*/}
//         </ul>
//         <span className={styles.recomended}>
//           Рекомендуемый курс - {disciplines.recommended_lesson_count} занятий
//         </span>
//       </section>
//       <section className={styles.teacher_wrapper}>
//         <h1>Преподаватели по {disciplines.name_sklonenie}</h1>
//         <div className={styles.teacher_container}>
//           {teacher.length ? (
//             teacherListForDis.map((item) => {
//               return (
//                 <div className={styles.teacher}>
//                   <Image
//                     src={item.image_url + '.png'}
//                     width={200}
//                     height={200}
//                     alt="Фото учителя"
//                   />
//                   <span>{item.full_name}</span>
//                 </div>
//               );
//             })
//           ) : (
//             <>
//               <div className={styles.teacher_skeleton}>
//                 <div className={styles.image}></div>
//                 <div className={styles.text}>
//                   <span className={styles.first_line}></span>
//                   <span className={styles.second_line}></span>
//                 </div>
//               </div>
//             </>
//           )}
//         </div>
//       </section>
//       <Banner />
//     </main>
//   ) : (
//     <div>Loading...</div>
//   );
// };

export default Disciplines;
