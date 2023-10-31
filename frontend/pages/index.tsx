// импорт сверстанных блоков магазина
import About from '../components/PageComponents/Main/About/About';
import Intro from '../components/PageComponents/Main/Intro/Intro';
import Disciplines from '../components/PageComponents/Main/Disciplines/Disciplines';
import Gallery from '../components/PageComponents/Main/Gallery/Gallery';
import Teachers from '../components/PageComponents/Main/Teachers/Teachers';
import Banner from '../components/PageComponents/Main/Banner/Banner';
import Questions from '../components/PageComponents/Main/Questions/Questions';
import FeedBack from '../components/PageComponents/Main/FeedBack/FeedBack';
import store, { useAppDispatch, useAppSelector, wrapper } from '../redux/store';
import { GetServerSideProps, GetStaticProps } from 'next';
import { Provider, useDispatch } from 'react-redux';
import { chooseDiscipline, nextBtn } from '../redux/slices/disciplines/disciplineChooseControlSlice';
import { useEffect } from 'react';


const Index = (): JSX.Element => {
  

  return (
    <>
      <Provider store={store}>
        <main className="mainPage">
          <Intro />
          <About />
          <Disciplines />
          <Banner />
          <Teachers />
          <Questions />
          <Gallery />
          <FeedBack />
        </main>
      </Provider>
    </>
  );
};
export default Index;

export const getServerSideProps: GetServerSideProps =
  wrapper.getServerSideProps((store) => async (ctx) => {
    return { props: {} };
  });
