import React from 'react';
import { Link } from '@remix-run/react';

interface OrderProps {
  orderNo: string;
  confirmDate: string;
  orderStatus: string;
  priceTotal: string;
  customer: string;
}

const OrderCard: React.FC<OrderProps> = ({ orderNo, confirmDate, orderStatus, priceTotal, customer }) => {
  return (
    <div className="max-w-lg mx-auto bg-white text-gray-900 rounded-xl shadow-xl border border-gray-300 overflow-hidden">
      <div className="p-8">
        <div className="text-2xl font-extrabold mb-4 text-blue-600">
          Order #{orderNo}
        </div>
        <div className="text-lg mb-2">
          <strong className="text-gray-700">Customer:</strong> <span className="text-gray-800">{customer}</span>
        </div>
        <div className="text-lg mb-2">
          <strong className="text-gray-700">Date:</strong> <span className="text-gray-800">{confirmDate}</span>
        </div>
        <div className="text-lg mb-4">
          <strong className="text-gray-700">Status:</strong> 
          <span className={`ml-2 px-3 py-1 rounded-full text-white ${orderStatus === 'Completed' ? 'bg-green-500' : 'bg-red-500'}`}>{orderStatus}</span>
        </div>
        <div className="text-2xl font-semibold mb-4 text-purple-700">
          ฿{priceTotal}
        </div>

        <div className="mt-5 flex justify-center">
          <Link
            to={`/order/${orderNo}`}
            className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
          >
            View Order
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OrderCard;