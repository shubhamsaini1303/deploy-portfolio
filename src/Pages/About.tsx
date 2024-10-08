
// const About = () => {
//   return (
//     <div>
//       <div className="h-[300px]">
//         <h1>about me</h1>
//         <hr />
//       </div>
//       <div className="grid grid-cols-2">
//         <div className="h-[400px] w-[40%]">
//           <img src="" alt="" />
//         </div>
//         <div>
//           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio ea mollitia at qui non dolores, iure quia cupiditate incidunt officiis!</p>
//           <p>lets talk with me</p>
//           <p>email : </p>
//           <p>mobile: </p>
//         </div>
//         <h1>I  create products with customers satisfaction </h1>
//         <h3>about mwembersation</h3>
//         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime saepe ut consequatur neque beatae est reprehenderit praesentium exercitationem officiis hic.</p>
//       </div>
//     </div>
//   )
// }

// export default About


const About = () => {
  return (
    <>

    <div className="container mx-auto px-4">
      <div className="h-[300px] flex flex-col items-center justify-center">
        <h1 className="text-center text-2xl uppercase">About Me</h1>
        <hr className="border-t-2 w-[40%] mt-2" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="flex justify-center md:justify-end">
          <div className="h-[400px] w-[80%] md:w-[40%]">
            <img src="" alt="" className="h-full w-full object-cover" />
          </div>
        </div>
        <div className="flex flex-col justify-center items-center md:items-start text-center md:text-left">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio ea mollitia at qui non dolores, iure quia cupiditate incidunt officiis!</p>
          <p className="mt-4">Let’s talk with me</p>
          <p className="mt-2">Email: example@example.com</p>
          <p>Mobile: 123-456-7890</p>
        </div>
      </div>
      <div className="mt-8 text-center">
        <h1 className="text-2xl uppercase">I Create Products with Customer Satisfaction</h1>
        <h3 className="text-xl mt-4 uppercase">About My Conversation</h3>
        <p className="mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime saepe ut consequatur neque beatae est reprehenderit praesentium exercitationem officiis hic.</p>
      </div>
      {/* <div>
        <h1>Skills</h1>
        <div className="grid grid-cols-3">
          <div>Frontend</div>
          <div>Backend</div>
          <div>Advanced</div>
        </div>
        <button>Download CV</button>
      </div> */}
      {/* skilss section */}
      <div>
      <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl text-center uppercase mb-8">Skills</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {/* Frontend Skills */}
        <div className="bg-black text-white border border-white rounded-lg p-6 text-center">
          <h2 className="text-xl mb-4 uppercase">Frontend</h2>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>React</li>
            <li>Tailwind CSS</li>
          </ul>
        </div>

        {/* Backend Skills */}
        <div className="bg-black text-white border border-white rounded-lg p-6 text-center">
          <h2 className="text-xl mb-4 uppercase">Backend</h2>
          <ul>
            <li>Node.js</li>
            <li>Express.js</li>
            <li>MongoDB</li>
            <li>RESTful APIs</li>
            <li>Authentication</li>
          </ul>
        </div>

        {/* Advanced Skills */}
        <div className="bg-black  text-white border border-white rounded-lg p-6 text-center">
          <h2 className="text-xl mb-4 uppercase">Advanced</h2>
          <ul>
            <li>MERN Stack</li>
            <li>GraphQL</li>
            <li>Serverless</li>
            <li>Testing (Jest, Mocha)</li>
            <li>Docker</li>
          </ul>
        </div>
      </div>

      <div className="text-center mt-8">
        <button className="bg-black text-white border border-white rounded px-6 py-2 hover:bg-white hover:text-black transition duration-300">
          Download CV
        </button>
      </div>
    </div>
      </div>
    </div>
    </>

  );
};

export default About;
