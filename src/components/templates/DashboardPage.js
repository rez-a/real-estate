import React from 'react';

const DashboardPage = ({ createdAt }) => {
  return (
    <div>
      <h1 className="text-xl text-blue-600 font-semibold">سلام 👋</h1>
      <p className="text-neutral-400 mt-3">
        آگهی های خود را منتشر کنید تا هزاران نفر آن را مشاهده نمایند
      </p>
      <p className="bg-blue-50 text-sm w-fit px-2 py-0.5 rounded mt-8">
        <span className="text-neutral-400">تاریخ عضویت : </span>
        <span className="text-blue-600 font-semibold">
          {new Date(createdAt).toLocaleDateString('fa-IR')}
        </span>
      </p>
    </div>
  );
};

export default DashboardPage;
