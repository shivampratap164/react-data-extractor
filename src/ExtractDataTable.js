// // src/ExtractDataTable.js
// import React, { useState } from 'react';

// const ExtractDataTable = () => {
//   const [data, setData] = useState({
//     dob: '',
//     ip: '',
//     email: '',
//     pin: '',
//     phone: ''
//   });

//   const extractData = () => {
//     const text = document.getElementById('inputText').value;
//     const extractedData = {
//       dob: text.match(/date of birth is ([\d-]+)/i)[1],
//       ip: text.match(/ip address is ([\d.]+)/i)[1],
//       email: text.match(/email is ([\w@.]+)/i)[1],
//       pin: text.match(/pin code is (\d+)/i)[1],
//       phone: text.match(/phone number is (\d+)/i)[1]
//     };
//     setData(extractedData);
//   };

//   return (
//     <div className="w-3/4">
//       <textarea id="inputText" className="w-full h-32 p-2 border border-gray-300 rounded">
//         my name is chandra mouli. my phone number is 7013454664. my ip address is 191.172.45.2. my pin code is 136119. my date of birth is 23-05-2004. my email is 12213120@nitkkr.ac.in
//       </textarea>
//       <div className="flex justify-center mt-4">
//         <button onClick={extractData} className="px-4 py-2 text-white bg-blue-500 rounded">Submit</button>
//       </div>
//       <table className="w-full mt-4 border border-gray-300">
//         <thead>
//           <tr className="bg-gray-200">
//             <th className="px-4 py-2 border border-gray-300">Date of Birth</th>
//             <th className="px-4 py-2 border border-gray-300">Ip Address</th>
//             <th className="px-4 py-2 border border-gray-300">Email</th>
//             <th className="px-4 py-2 border border-gray-300">Pincode</th>
//             <th className="px-4 py-2 border border-gray-300">Phone</th>
//           </tr>
//         </thead>
//         <tbody>
//           <tr>
//             <td id="dob" className="px-4 py-2 border border-gray-300">{data.dob}</td>
//             <td id="ip" className="px-4 py-2 border border-gray-300">{data.ip}</td>
//             <td id="email" className="px-4 py-2 border border-gray-300">{data.email}</td>
//             <td id="pin" className="px-4 py-2 border border-gray-300">{data.pin}</td>
//             <td id="phone" className="px-4 py-2 border border-gray-300">{data.phone}</td>
//           </tr>
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default ExtractDataTable;