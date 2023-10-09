import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { useAppSelector } from '../../../redux/store';
import Reg from '../components/Reg';

const page = () => {
  // DSC_id = Discipline Choose Control id
  const id = useAppSelector((state) => state.disciplineChooseControl.DSC_id);
  const router = useRouter();
  useEffect(() => {
    !id && router.push('/');
  }, []);

  return (
    <>
      {id ? (
        <Reg id={id} />
      ) : (
        <div>You're Being Re-Diredcted to The Main Page...</div>
      )}
    </>
  );
};

export default page;
