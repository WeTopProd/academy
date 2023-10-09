import H1 from '../../../UniversalComponents/H1/H1.jsx';
import styles from './Disciplines.module.scss';
import SmallCard from "./smallCard/SmallCard.js";
import LargeCard from "./largeCard/LargeCard.js";


// import photos
import web_designer from '../../../../imgs/main/Desciplines/web-designer.png';
import web_programmist from '../../../../imgs/main/Desciplines/web-programmist.png';
import web_programmist_square from '../../../../imgs/main/Desciplines/web-programmist-square.png';
import vedushii from '../../../../imgs/main/Desciplines/vedushii.png';
import bloger from '../../../../imgs/main/Desciplines/bloger.png';
import pantomima from '../../../../imgs/main/Desciplines/pantomima.png';
import pantomima_square from '../../../../imgs/main/Desciplines/pantomima-square.png';
import vokal from '../../../../imgs/main/Desciplines/vokal.png';
import actor from '../../../../imgs/main/Desciplines/actor.png';
import actor_square from '../../../../imgs/main/Desciplines/actor-square.png';
import step from '../../../../imgs/main/Desciplines/step.png';
import clown from '../../../../imgs/main/Desciplines/clown.png';
import barmen from '../../../../imgs/main/Desciplines/barmen.png';
import billiard from '../../../../imgs/main/Desciplines/billiards.png';
import billiard_square from '../../../../imgs/main/Desciplines/billiards-square.png';
import standup from '../../../../imgs/main/Desciplines/standup.png';
import { useRef } from 'react';
import { useAppDispatch, useAppSelector } from '../../../../redux/store';

const Disciplines = () => {
    const seeMore = useRef(null)
    const handleClick = () => {
        seeMore.current.style.height = 'auto'
    }

    const disciplines = useAppSelector((state) => state.disciplines)
    return (
        <section className={styles.disciplines} id="disciplines">
            <h1 className={styles.h1}>Наши дисциплины</h1>
            <h1 className={styles.mobileL}>Дисциплины</h1>
            <div className={styles.disciplines_wrapper} ref={seeMore}>
                {disciplines.map((item,i) => {
                    return item.ImageURLResize ?
                        <LargeCard
                            IMG_SRC={item.ImageURL + item.ImageType}
                            text={item.name}
                            resize={item.ImageURL + item.ImageURLResize + item.ImageType}
                            id={item.id}
                            key={i}
                        />
                        :
                        <SmallCard
                            IMG_SRC={item.ImageURL + item.ImageType}
                            text={item.name}
                            id={item.id}
                            key={i}

                        />
                })}
                
            </div>
            <div className={styles.see_more} onClick={() => handleClick()}>
                <span>Смотреть еще</span>
            </div>

        </section>
    );
}

export default Disciplines;