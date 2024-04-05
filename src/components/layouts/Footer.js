import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-blue-600 my-4 rounded-xl p-4 text-white flex items-center justify-between">
      <div>
        <h2 className="font-bold text-xl mb-2">
          سامانه خرید و اجاره ملک
        </h2>
        <p className="max-w-2xl">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و
          با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه
          و مجله در ستون و سطرآنچنان که لازم است
        </p>
      </div>
      <ul className="list-disc">
        <li>تعرفه قانونی</li>
        <li>دسترسی سریع</li>
        <li>مشاورین خبره</li>
        <li>قولنامه محضری</li>
      </ul>
    </footer>
  );
};

export default Footer;
