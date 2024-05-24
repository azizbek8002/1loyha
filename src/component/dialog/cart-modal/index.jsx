import React, { useContext, useEffect, useState } from 'react';
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from '@material-tailwind/react';
import { Icons } from '../../../assets/icons';
import { MainContext } from '../../../context/useMainContext';
import Cart from './cart';

function CartModal({ open, handleOpen }) {
  const { cartItems } = useContext(MainContext);
  let totalSum = 0;

  for (const key of cartItems) {
    totalSum = totalSum + key.price * key.quantity;
  }


  return (
    <>
      <Dialog
        open={open}
        handler={handleOpen}
        className="relative overflow-hidden">
        <DialogHeader className="flex items-center justify-between">
          <h2>Cart Modal</h2>
          <button onClick={handleOpen}>
            <Icons.closeIcon />
          </button>
        </DialogHeader>
        <DialogBody className="h-[500px] overflow-y-auto pb-28 bg-gray flex flex-col gap-3">
          {cartItems.length
            ? cartItems.map((el) => (
                <Cart
                  key={el.id}
                  data={el}
                />
              ))
            : 'Cartbox is empty'}
        </DialogBody>
        {cartItems.length ? (
          <DialogFooter className="absolute bottom-0 left-0 right-0 p-5 bg-gray flex items-end justify-between">
            <div>
              <h3 className="text-base font-normal leading-6 text-title-color">
                Итого:{' '}
                <span className="text-xl font-semibold text-title-color">
                  {`${totalSum.toLocaleString()} ₽  `}
                </span>
              </h3>
              <Button
                type="button"
                className="bg-primary text-white text-base font-medium leading-6 py-2 px-16 rounded-none mt-2">
                Оформить заказ
              </Button>
            </div>

            <Button
              onClick={handleOpen}
              className="text-base font-normal leading-6 border-[1px] border-primary py-2 px-6 text-primary cursor-pointer rounded-none">
              Продолжить покупки
            </Button>
          </DialogFooter>
        ): ""}
      </Dialog>
    </>
  );
}

export default CartModal;
