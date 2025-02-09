export default function PaymentError() {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center">
        <div className="bg-white p-6 rounded-2xl shadow-lg max-w-md">
          <h2 className="text-2xl font-semibold text-red-600">Payment Failed!</h2>
          <p className="text-gray-700 mt-2">
            Unfortunately, your payment could not be processed. Please try again.
          </p>
          <p className="text-lg font-bold text-gray-900 mt-4">Jhazz Bank Limited</p>
        </div>
      </div>
    );
  }
  