import type { NextPage } from "next";

const Home:NextPage =()=>{
  return <div className="bg-slate-400 py-10 px-5 grid gap-10">
    <div className="bg-white p-6 rounded-2xl shadow-xl">
      <span className="font-semibold text-3xl">Select Item</span>
      <div className="flex justify-between my-2">
        <span className="text-gray-500">Gray Chair</span>
        <span className="font-semibold">$19</span>
      </div>
      <div className="flex justify-between">
        <span className="text-gray-500">Tooly Table</span>
        <span className="font-semibold">$81</span>
      </div>
      <div className="flex justify-between mt-2 pt-2 border-t-2 border-dashed">
        <span>Total</span>
        <span className="font-semibold">$10</span>
      </div>
      <div className="mt-5 p-2 bg-blue-500 text-white text-center rounded-xl w-2/4 mx-auto">Checkout</div>
    </div>
    <div className="bg-white overflow-hidden rounded-3xl shadow-xl">
      <div className="bg-blue-500 p-6 pb-14">
        <span className="text-white text-2xl">Profile</span>
      </div>
      <div className="bg-white rounded-3xl p-6 relative -top-5">
        <div className="flex relative -top-16 items-end justify-between">
          <div className="flex flex-col teims-center">
            <span className="text-sm text-gray-500">Orders</span>
            <span className="font-medium">340</span>
          </div>
          <div className="h-24 w-24 bg-red-400 rounded-full"/>
          <div className="flex flex-col items-center">
            <span className="text-sm text-gray-500">Spent</span>
            <span className="font-medium">$340</span>
          </div>
        </div>
        <div className="relative flex flex-col items-center -mt-10 -mb-5">
          <span className="text-lg font-medium">Tony Molly</span>
          <span className="text-sm text-gray-500">미국</span>
        </div>
      </div>
    </div>

    <div className="bg-white p-10 rounded-2xl shadow-xl"></div>
    <div className="bg-white p-10 rounded-2xl shadow-xl"></div>

  </div>;
}

export default Home;