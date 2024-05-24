import React, { useContext } from 'react';
import {
  Dialog,
  DialogHeader,
  DialogBody,
} from '@material-tailwind/react';
import { MainContext } from '../../../context/useMainContext';
import LikedProducts from '../../liked-products';
import { Icons } from '../../../assets/icons';

function LikeModal({ open, handleOpen }) {
  const { likeItems, cartItems } = useContext(MainContext);
  return (
    <>
      <Dialog
        open={open}
        handler={handleOpen}
        className="h-[600px] overflow-y-auto">
        <DialogHeader className='flex items-center justify-between'>
          <p>{likeItems.length ? 'Like Modal' : 'Like Modal is empty'}</p>
          <button onClick={handleOpen}>
            <Icons.closeIcon/>
          </button>
        </DialogHeader>
        <DialogBody>
          {likeItems.length ? (
            <div className="flex flex-col gap-x-5">
              {likeItems.map((el) => (
                <LikedProducts
                  key={el.id}
                  data={el}
                  cart={cartItems.some((item) => item?.id == el?.id)}
                />
              ))}
            </div>
          ) : (
            <h2>Likebox is empty</h2>
          )}
        </DialogBody>
      </Dialog>
    </>
  );
}

export default LikeModal;
