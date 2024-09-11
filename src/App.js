// src/App.js
import React, { useState } from 'react';


function App() {
    const [inputText, setInputText] = useState('');
    const [data, setData] = useState({
        dob: '',
        ip: '',
        email: '',
        pin: '',
        phone: ''
    });

    const extractData = () => {
      const text = inputText.toLowerCase();
        const extractedData = {
          dob: (text.match(/date\s*of\s*birth\s*is\s*([\d\-\/]{10,})/i) || [])[1]?.trim() || '',
          ip: (text.match(/ip\s*address\s*is\s*((?:\d{1,3}\.){3}\d{1,3})/i) || [])[1]?.trim() || '',
          email: (text.match(/email\s*is\s*([\w\.\+\-]+@[\w\.\-]+\.[a-zA-Z]{2,})/i) || [])[1]?.trim() || '',
          pin: (text.match(/pin\s*code\s*is\s*(\d{6})/i) || [])[1]?.trim() || '',
          phone: (text.match(/phone\s*number\s*is\s*(\d{10,15})/i) || [])[1]?.trim() || ''
        };
        setData(extractedData);
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-white-100 w-3/4 mx-auto">
            <textarea
                className="w-full h-32 p-2 border border-gray-300 rounded"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder="Enter your text here"
            />
            <div className="flex justify-center mt-4">
                <button
                    onClick={extractData}
                    className="px-4 py-2 text-white bg-blue-500 rounded"
                >
                    Submit
                </button>
            </div>
            <table className="w-full mt-4 border border-gray-300">
                <thead>
                    <tr className="bg-gray-200">
                        <th className="px-4 py-2 border border-gray-300">Date of Birth</th>
                        <th className="px-4 py-2 border border-gray-300">IP Address</th>
                        <th className="px-4 py-2 border border-gray-300">Email</th>
                        <th className="px-4 py-2 border border-gray-300">Pincode</th>
                        <th className="px-4 py-2 border border-gray-300">Phone</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="px-4 py-2 border border-gray-300">{data.dob}</td>
                        <td className="px-4 py-2 border border-gray-300">{data.ip}</td>
                        <td className="px-4 py-2 border border-gray-300">{data.email}</td>
                        <td className="px-4 py-2 border border-gray-300">{data.pin}</td>
                        <td className="px-4 py-2 border border-gray-300">{data.phone}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default App;
