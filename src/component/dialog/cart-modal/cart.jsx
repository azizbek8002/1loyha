import React, { useContext } from 'react';
import { Icons } from '../../../assets/icons';
import { MainContext } from '../../../context/useMainContext';

const Cart = ({ data }) => {
  const { image, id, title, price, quantity } = data;
  const {  addOne, removeOne, removeFromCart } = useContext(MainContext);
  return (
    <div className="flex gap-3 bg-white relative">
      <div className="w-[136px] h-[120px]">
        <img
          className="w-full h-full object-contain"
          src={image}
          alt={title}
        />
      </div>
      <div className="">
        <h3 className="text-base font-medium mt-2 leading-6 text-title-color">
          {title}
        </h3>
        <p className="mt-1 text-xs font-normal leading-6 text-title-color">
          + Подарок:{' '}
          <a
            className="text-xs font-normal leading-6 text-primary underline"
            href="#!">
            “Приложение к замкам Golden Service”
          </a>
        </p>

        <div className="flex gap-3 items-center mt-2">
          <button
            className="text-2xl text-black px-3 py-2 disabled:text-blue-gray-500"
            disabled={quantity == 1}
            onClick={() => removeOne(id)}>
            -
          </button>
          <span className="text-sm font-medium leading-6 text-black py-2 px-6 border-[1px] border-blue-gray-200">
            {quantity}
          </span>
          <button
            className="text-2xl text-black px-3 py-2"
            onClick={() => addOne(id)}>
            +
          </button>
        </div>

        <button onClick={() => removeFromCart(id)} className="flex items-center gap-1 absolute top-2 right-2">
          <Icons.trashIcon />
        </button>

        <span className="absolute bottom-1 right-1">
          {(price * quantity).toLocaleString()}
        </span>
      </div>
    </div>
  );
};

export default Cart;
