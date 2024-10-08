
// const Contact = () => {
//   return (
//     <div>
//       <div>
//         <h1>Contact ME </h1>
//         <hr />
//       </div>
//       <div className="grid grid-cols-3">
//         <div>
//           <h2>Moblie icon</h2>
//           <p>+912333333</p>
//           <h3>monady t- sunday from 10:00 am - 10:00 pm</h3>
//         </div>
//         <div>
//           <h2>Address Icon</h2>
//           <p>alwar city rajasthan</p>
//           <h3>kali mori alwar</h3>
//         </div>
//         <div>
//           <h2>gmail icon</h2>
//           <p>siddharth@gmailcom</p>
//           <h3>contact me every time</h3>
//         </div>
//       </div>
//       <div className="grid grid-cols-2">
//         <div>
//           <h1>Get In Touch </h1>
//           <input type="text" name="" id=""  />
//           <input type="text" name="" id=""  />
//           <input type="address" name="" id=""  />
//           <button>send message</button>
//         </div>
//         <div>
//           <h1>message me </h1>
//           <hr />
//           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat perferendis provident sunt dicta fuga repellendus aut. Doloribus ipsam, sequi deserunt quidem quia assumenda cumque dolor quisquam, voluptatibus libero voluptatem optio.</p>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Contact


const Contact = () => {
  return (
    <div className="p-4">
      <div className="text-center mb-6">
        <h1 className="text-2xl sm:text-4xl font-bold">Contact Me</h1>
        <hr className="border-t-2 border-gray-300 w-1/2 mx-auto mt-2" />
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 mb-10">
        <div className="text-center">
          <h2 className="text-xl font-semibold">Mobile Icon</h2>
          <p className="text-gray-700">+912333333</p>
          <h3 className="text-sm text-gray-600">Monday - Sunday, 10:00 AM - 10:00 PM</h3>
        </div>
        <div className="text-center">
          <h2 className="text-xl font-semibold">Address Icon</h2>
          <p className="text-gray-700">Alwar City, Rajasthan</p>
          <h3 className="text-sm text-gray-600">Kali Mori, Alwar</h3>
        </div>
        <div className="text-center">
          <h2 className="text-xl font-semibold">Gmail Icon</h2>
          <p className="text-gray-700">siddharth@gmail.com</p>
          <h3 className="text-sm text-gray-600">Contact me anytime</h3>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold mb-4">Get In Touch</h1>
          <input type="text" placeholder="Name" className="w-full p-2 mb-4 border-none rounded shadow-md focus:ring-2 focus:ring-blue-500" />
          <input type="text" placeholder="Email" className="w-full p-2 mb-4 border-none rounded shadow-md focus:ring-2 focus:ring-blue-500" />
          <input type="text" placeholder="Address" className="w-full p-2 mb-4 border-none rounded shadow-md focus:ring-2 focus:ring-blue-500" />
          <button className="px-4 py-2 bg-blue-500 text-white rounded shadow-md hover:bg-blue-600">Send Message</button>
        </div>
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold mb-4">Message Me</h1>
          <hr className="border-t-2 border-gray-300 w-1/2 mb-4" />
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat perferendis provident sunt dicta fuga repellendus aut. Doloribus ipsam, sequi deserunt quidem quia assumenda cumque dolor quisquam, voluptatibus libero voluptatem optio.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
