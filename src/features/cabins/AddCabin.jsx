import { useState } from 'react';
import Button from '../../ui/Button';
import CreateCabinForm from './CreateCabinForm';
import Modal from '../../ui/Modal';

export default function AddCabin() {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const handleClose = () => setIsOpenModal(false);

  return (
    <>
      <Button onClick={() => setIsOpenModal((show) => !show)}>
        Add new cabin
      </Button>

      {isOpenModal && (
        <Modal onClose={handleClose}>
          <CreateCabinForm onCloseModal={handleClose} />
        </Modal>
      )}
    </>
  );
}
