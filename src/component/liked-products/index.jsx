import React, { useContext } from 'react';
import { MainContext } from '../../context/useMainContext';
import { Rating } from '@material-tailwind/react';

const LikedProducts = ({ data, cart }) => {
  const { addToCart, removeFromCart } = useContext(MainContext);

  return (
    <div className="relative flex gap-x-4 border-2 border-blue-gray-200 rounded mt-6">
      <div className="w-[102px] h-[90px]">
        <img
          src={data.image}
          width={102}
          className="w-full h-full object-contain"
        />
      </div>
      <div className="">
        <h3 className="text-sm font-normal text-title-color">{data.title}</h3>
        <div className="mt-2 flex items-center gap-x-3">
          <Rating value={4} />
          <span className="text-sm text-blue-gray-700 font-normal leading-5">
            (12) отзывов
          </span>
        </div>

        <span className="block mt-5 text-base text-title-color leading-6">
          9000
        </span>
      </div>
      <button
        onClick={() => cart ? removeFromCart(data.id) : addToCart(data)}
        className="absolute top-2 right-2 text-base font-medium leading-[26px] text-primary">
        {
            cart ?"- Удалить" : "+ Добавить"  
        }
      </button>
    </div>
  );
};

export default LikedProducts;
