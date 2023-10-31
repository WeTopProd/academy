import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../../redux/store';
import Reg from '../components/Reg';
import { payment_done } from '../../../redux/slices/disciplines/disciplineChooseControlSlice';

const page = () => {
  // DSC_id = Discipline Choose Control id
  const id = useAppSelector((state) => state.disciplineChooseControl.DSC_id);
  const user = useAppSelector((state) => state.user.user);
  const router = useRouter();
  const paymentStatue = useAppSelector(state=>state.disciplineChooseControl.done)
  const dispatch = useAppDispatch()

  const alerts = {
    noDSC: () => {
      router.push('/');
    },
  };
  useEffect(() => {
    !id && alerts.noDSC();
  }, [paymentStatue]);

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
