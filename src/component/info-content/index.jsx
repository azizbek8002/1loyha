import React from 'react';
import Title from '../title';
import { Icons } from '../../assets/icons';
import { Button, Rating } from '@material-tailwind/react';
import { UnderlineTabs } from '../tabs';

const InfoContent = ({product}) => {
  return (
    <div className="container">
      <div className="flex items-center justify-between gap-8 mt-10">
        <div className="max-w-[500px] w-[100%] relative h-[579px] border-2 border-gray">
          <button className="absolute top-0 left-0 bg-primary text-white px-7 py-3 uppercase rounded">
            SALE
          </button>

          <img
            src={product[0]?.image}
            alt={product[0]?.title}
            className="w-full mt-16 h-[375px]"
          />

          <h2 className="text-center text-3xl text-blue-gray-300 line-through font-light mt-5">
            1 200 475 ₽
          </h2>
          <h2 className="text-center text-[40px] text-title-color font-bold mt-2">
            1 100 475 ₽
          </h2>
        </div>

        <div className="max-w-[570px] w-[100%] h-[579px]">
          <Title>Гидроцикл BRP SeaDoo GTI 155hp SE Long Blue Metallic</Title>
          <span className="text-sm text-blue-gray-300 font-normal">
            Код товара: 366666-2{' '}
          </span>
          <div className="flex items-center justify-between w-[150px] gap-7 mt-5">
            <button>
              <Icons.likeIcon />
            </button>
            <Rating value={4} />
          </div>
          <UnderlineTabs />

          <Button
            type="button"
            className="bg-primary text-white py-4 px-14 mt-5 text-sm font-normal uppercase rounded-sm">
            купить
          </Button>
        </div>
      </div>
    </div>
  );
};

export default InfoContent;
