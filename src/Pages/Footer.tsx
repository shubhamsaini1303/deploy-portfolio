
// const Footer = () => {
//   return (
//     <div className="grid grid-cols-3">
//       <div>
//         <img src="" alt="" />
//       </div>
//       <div>
//         <h1>Addres</h1>
//         <p>Lorem ipsum dolor sit.</p>
//         <p>Lorem, ipsum.</p>
//       </div>
//       <div>
//         <h1>Socisl links</h1>
//         <p>facebook</p>
//         <p>instagram</p>
//         <p>twitter</p>
//         <p>linkdin</p>
//       </div>
//     </div>
//   )
// }

// export default Footer

const Footer = () => {
  return (
    <div className="bg-black text-white p-5 sm:p-[20px] grid grid-cols-1 sm:grid-cols-3 gap-10">
      <div className="flex justify-center">
        <img src="" alt="Logo" className="h-[300px] w-[300px]" />
      </div>
      <div>
        <h1 className="text-xl font-bold mb-2">Address</h1>
        <p>Lorem ipsum dolor sit.</p>
        <p>Lorem, ipsum.</p>
      </div>
      <div>
        <h1 className="text-xl font-bold mb-2">Social Links</h1>
        <p>Facebook</p>
        <p>Instagram</p>
        <p>Twitter</p>
        <p>LinkedIn</p>
      </div>
    </div>
  );
}

export default Footer;
