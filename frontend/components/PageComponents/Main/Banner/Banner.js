import styles from './Banner.module.scss';
import IntroBackGround from '../../../UniversalComponents/IntroBackGround/IntroBackGround';
import { useAppDispatch } from '../../../../redux/store';
import { openModal } from '../../../../redux/slices/modalSlice';
import { useRouter } from 'next/router';
import { chooseDiscipline, nextBtn } from '../../../../redux/slices/disciplines/disciplineChooseControlSlice';



const Banner = () => {
    const dispatch = useAppDispatch()
    const router = useRouter();

    const onClick = () => {
        router.push('/disciplines/reg');
      };

    return (
        <section className={styles.banner_container}>
            <div className={styles.background_wrapper}>
                <div className={styles.IntroBackGround}>
                    <IntroBackGround width={'100vw'} />
                </div>
            </div>
            <h2>
                Приходите на первое занятие
            </h2>
            <h1>бесплатно</h1>
            <button onClick={ onClick }>
                записаться
            </button>
        </section>
    );
}

export default Banner;