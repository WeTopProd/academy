import React, { Children, useState, useEffect } from 'react';
import { Button, Modal } from 'antd';
import { useAppDispatch, useAppSelector } from '../../../redux/store';
import FeedBackForm from '../Forms/FeedBackForm/FeedBackForm';
import { closeModal } from '../../../redux/slices/modalSlice';
import styles from './styles.module.scss';
import FeedBackSent from '../Forms/FeedBackForm/FeedBackSent';

interface props {
  title: string;
}

const UniverseModal: React.FC<props> = ({ title }: props, sent: any) => {
  const modal = useAppSelector((state) => state.modal);

  const { isSent } = useAppSelector((state) => state.sent);

  const dispatch = useAppDispatch();

  // const [isModalOpen, setIsModalOpen] = useState(modal);

  const showModal = () => {};

  const handleOk = () => {};

  const handleCancel = () => {
    dispatch(closeModal(true));
  };



  return (
    <>
      {!isSent ? (
        <Modal
          title={title}
          open={modal.isOpen}
          onCancel={handleCancel}
          className={styles.modal_container}
          footer={null}
          destroyOnClose={true}
        >
          <FeedBackForm />
        </Modal>
      ) : (
        <Modal
          open={modal.isOpen}
          onCancel={handleCancel}
          className={styles.modal_container}
          footer={null}
          destroyOnClose={true}
          // style={styleModal}
        >
          <FeedBackSent />
        </Modal>
      )}
    </>
  );
};

export default UniverseModal;
