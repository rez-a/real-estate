import React from 'react';
import { IoIosHome } from 'react-icons/io';
import { CiLocationOn, CiCalendarDate } from 'react-icons/ci';
import { AiOutlinePhone } from 'react-icons/ai';
import Title from '../modules/fileDetails/Title';
import ListItems from '../modules/fileDetails/ListItems';
import SidebarCard from '../modules/fileDetails/SidebarCard';
import allCategories from 'src/constants/allCategories';
import ShareBox from '../modules/fileDetails/ShareBox';
import { Toaster } from 'react-hot-toast';

const FileDetailsPage = ({
  title,
  description,
  address,
  phone,
  price,
  realState,
  category,
  constructorDate,
  amenities,
  rules,
}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
      <div className="col-span-1 md:col-span-2 lg:col-span-3 xl:col-span-4">
        <h1 className="font-bold text-2xl text-blue-600">{title}</h1>
        <p className="text-neutral-400 text-xs">
          <CiLocationOn className="inline ml-1" />
          <span>{address}</span>
        </p>
        <div className="mt-8">
          <Title title="توضیحات" />
          <p className="text-sm text-justify">{description}</p>
        </div>
        <div className="mt-8">
          <Title title="امکانات" />
          <ListItems list={amenities} />
        </div>
        <div className="mt-8">
          <Title title="قوانین" />
          <ListItems list={rules} />
        </div>
      </div>
      <div>
        <SidebarCard>
          <IoIosHome
            size={50}
            className="bg-blue-600 text-white rounded-full p-2 mx-auto"
          />
          <h2 className="text-sm font-semibold text-black text-center my-4">
            املاک {realState}
          </h2>
          <p className="text-neutral-400 text-xs">
            <AiOutlinePhone className="inline ml-1" />
            <span>{phone}</span>
          </p>
        </SidebarCard>
        <SidebarCard>
          <ShareBox />
        </SidebarCard>
        <SidebarCard>
          <p className="text-neutral-400 text-sm">
            <IoIosHome className="inline ml-1 text-blue-600" />
            <span>
              {Object.values(
                allCategories.find(
                  (item) => Object.keys(item) == category
                )
              )}
            </span>
          </p>
          <p className="my-3 text-neutral-400 text-sm">
            <span className="ml-1">
              {Number(price).toLocaleString('fa-IR')}
            </span>
            <span>تومان</span>
          </p>
          <p className="text-neutral-400 text-sm">
            <CiCalendarDate className="inline ml-1 text-blue-600" />
            <span>
              {new Date(constructorDate).toLocaleDateString('fa-IR')}
            </span>
          </p>
        </SidebarCard>
      </div>
      <Toaster />
    </div>
  );
};

export default FileDetailsPage;
