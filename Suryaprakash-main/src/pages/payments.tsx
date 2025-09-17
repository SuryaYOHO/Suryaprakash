// src/pages/payments/Payments.tsx
import React from "react";

const Payments: React.FC = () => {
  const paymentRecords = [
    { date: "2025-08-01", description: "Tuition Fee - August", amount: 5000, status: "Paid" },
    { date: "2025-07-01", description: "Tuition Fee - July", amount: 5000, status: "Paid" },
    { date: "2025-06-01", description: "Tuition Fee - June", amount: 5000, status: "Pending" },
  ];

  const totalPaid = paymentRecords
    .filter(p => p.status === "Paid")
    .reduce((sum, p) => sum + p.amount, 0);

  const totalPending = paymentRecords
    .filter(p => p.status === "Pending")
    .reduce((sum, p) => sum + p.amount, 0);

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold text-gray-900">Payments</h1>
      <p className="text-gray-600">
        View your payment history and check upcoming dues.
      </p>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-green-100 rounded-lg p-4 shadow-sm border border-gray-200">
          <h2 className="text-lg font-semibold text-green-700">Total Paid</h2>
          <p className="text-2xl font-bold text-green-900">₹{totalPaid}</p>
        </div>
        <div className="bg-red-100 rounded-lg p-4 shadow-sm border border-gray-200">
          <h2 className="text-lg font-semibold text-red-700">Total Pending</h2>
          <p className="text-2xl font-bold text-red-900">₹{totalPending}</p>
        </div>
      </div>

      {/* Payment History Table */}
      <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Payment History</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto">
            <thead>
              <tr className="bg-gray-100">
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Date</th>
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Description</th>
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Amount</th>
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Status</th>
              </tr>
            </thead>
            <tbody>
              {paymentRecords.map((record, index) => (
                <tr key={index} className="border-b">
                  <td className="px-4 py-2 text-sm text-gray-600">{record.date}</td>
                  <td className="px-4 py-2 text-sm text-gray-600">{record.description}</td>
                  <td className="px-4 py-2 text-sm text-gray-600">₹{record.amount}</td>
                  <td
                    className={`px-4 py-2 text-sm font-medium ${
                      record.status === "Paid" ? "text-green-600" : "text-red-600"
                    }`}
                  >
                    {record.status}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Payments;
