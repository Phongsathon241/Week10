import React from 'react';
import { Link } from '@remix-run/react';

interface OrdersProp {
  orderNo: string;
  confirmDate: string;
  orderStatus: string;
  priceTotal: string;
  customer: string;
}

const OrderCard: React.FC<OrdersProp> = ({ orderNo, confirmDate, orderStatus, priceTotal, customer }) => {
  return (
    <div className="max-w-lg mx-auto bg-gray-100 shadow-md rounded-xl overflow-hidden border border-gray-400">
      <div className="p-8">
        <div className="mb-5 border-b pb-3 border-gray-300">
          <h3 className="text-2xl font-bold text-gray-900">Order #{orderNo}</h3>
        </div>

        <div className="text-gray-700 space-y-2">
          <p><span className="font-medium">Customer:</span> {customer}</p>
          <p><span className="font-medium">Order Date:</span> {confirmDate}</p>
          <p><span className="font-medium">Status:</span> <span className={`px-2 py-1 rounded ${orderStatus === 'Completed' ? 'bg-green-500 text-white' : 'bg-yellow-500 text-white'}`}>{orderStatus}</span></p>
          <p><span className="font-medium">Total Price:</span> <span className="text-lg font-semibold text-blue-600">฿{priceTotal}</span></p>
        </div>

        <div className="mt-6 flex justify-center">
          <Link to={`/order/${orderNo}`} className="px-5 py-2 bg-blue-500 text-white font-semibold rounded-xl hover:bg-blue-700 transition duration-300 shadow-md">
            View Order Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OrderCard;
