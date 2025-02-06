import { useVerifyOrderQuery } from '../redux/features/order/orderApi'
import { useSearchParams } from 'react-router'
import Loading from './share/Loading';
import { useEffect, useState } from "react";
import { FaCheckCircle, FaDownload, FaShare } from "react-icons/fa";

const ThankYou = () => {
    const [searchParams] = useSearchParams(); 
    const {data, isLoading}  = useVerifyOrderQuery(searchParams.get('order_id'))
    console.log(data);

    const [countdown, setCountdown] = useState(5);
    const [isRedirecting, setIsRedirecting] = useState(true);
  
    const transactionDetails = {
      transactionId: "TXN789456123",
      amount: "$299.99",
      date: new Date().toLocaleString(),
      customerName: "John Doe"
    };
  
    useEffect(() => {
      if (isRedirecting && countdown > 0) {
        const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
        return () => clearTimeout(timer);
      }
      if (countdown === 0) {
        handleContinue();
      }
    }, [countdown, isRedirecting]);
  
    const handleContinue = () => {
      window.location.replace('http://localhost:5173')
    };
  
    const handleDownload = () => {
      console.log("Downloading receipt...");
    };
  
    const handleShare = () => {
      console.log("Opening share options...");
    };
    
    if(isLoading) {
        return <Loading/>
    }
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 flex items-center justify-center p-4">
      <div className="max-w-xl w-full bg-white rounded-2xl shadow-xl p-8 space-y-8 animate-fade-in">
        <div className="text-center space-y-4">
          <div className="flex justify-center">
            <FaCheckCircle className="text-green-500 text-7xl animate-scale" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
            Thank You for Your Payment!
          </h1>
          <p className="text-gray-600 text-lg">
            Your transaction was processed successfully
          </p>
        </div>

        <div className="bg-gray-50 rounded-xl p-6 space-y-4">
          <h2 className="text-xl font-semibold text-gray-700">Transaction Details</h2>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="text-gray-600">Transaction ID:</span>
              <span className="font-medium">{transactionDetails.transactionId}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Amount:</span>
              <span className="font-medium">{transactionDetails.amount}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Date & Time:</span>
              <span className="font-medium">{transactionDetails.date}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Customer Name:</span>
              <span className="font-medium">{transactionDetails.customerName}</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={handleDownload}
            className="flex items-center justify-center gap-2 px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors duration-300"
          >
            <FaDownload /> Download Receipt
          </button>
          <button
            onClick={handleShare}
            className="flex items-center justify-center gap-2 px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-300"
          >
            <FaShare /> Share
          </button>
        </div>

        <div className="text-center">
          {isRedirecting && (
            <p className="text-gray-500">
              Redirecting to home in {countdown} seconds...
            </p>
          )}
          <button
            onClick={handleContinue}
            className="mt-4 text-blue-600 hover:text-blue-800 font-medium"
          >
            Return to Home
          </button>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes scale {
          0% { transform: scale(0.8); }
          50% { transform: scale(1.2); }
          100% { transform: scale(1); }
        }
        .animate-fade-in {
          animation: fade-in 0.6s ease-out;
        }
        .animate-scale {
          animation: scale 0.8s ease-out;
        }
      `}</style>
    </div>
  )
}

export default ThankYou
