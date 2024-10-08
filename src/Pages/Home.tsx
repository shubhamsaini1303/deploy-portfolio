const Home = () => {


// Function to generate a random color
const randomColor = () => {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

const skillsData = [
  { skill: 'HTML', percentage: 80 },
  { skill: 'CSS', percentage: 80 },
  { skill: 'JavaScript', percentage: 80 },
  { skill: 'Bootstrap', percentage: 80 },
  { skill: 'Tailwind CSS', percentage: 80 },
  { skill: 'React', percentage: 80 },
  { skill: 'Node.js', percentage: 70 },
  { skill: 'Express.js', percentage: 70 },
  { skill: 'MongoDB', percentage: 70 },
  { skill: 'Password Encryption', percentage: 70 },
  { skill: 'Authentication & ECMAScript', percentage: 70 },
  { skill: 'RTK Query', percentage: 70 },
  { skill: 'React Redux', percentage: 70 },
  { skill: 'Git & GitHub', percentage: 70 },
  { skill: 'Web Designing', percentage: 70 },
  { skill: 'Figma', percentage: 70 },
];

  return (
    <>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6 items-center">
      {/* Left Section */}
      <div className="text-center md:text-left">
        <h1 className="text-2xl font-bold mb-4">
          I'M A FULL STACK WEB DEVELOPER
        </h1>
        <h2 className="text-xl font-semibold mb-4">SHUBHAM SAINI</h2>
        <p className="text-[20px] mb-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo ex odit
          eaque mollitia optio, et deserunt. Iste fugit, dolore quos beatae
          optio nesciunt, et totam harum iusto quas sapiente id illum
          consequuntur non! Enim distinctio doloremque quos asperiores dolore
          optio, inventore perspiciatis quis quam ad voluptatem recusandae
          accusantium praesentium iure.
        </p>
      </div>

      {/* Right Section - Image */}
      <div className="flex justify-center md:justify-end">
        <div className="relative">
          <img
            src=""
            alt="Profile"
            className="h-[300px] w-[300px] bg-black object-cover"
          />
          {/* Gradient effect: From bottom-right to top-left */}
          <div className="absolute inset-0 bg-gradient-to-tr from-black to-transparent"></div>
        </div>
      </div>
    </div>
{/* About Section */}
<div className="w-full md:w-3/4 mx-auto my-10">
  <h1 className="text-3xl font-bold text-center mb-4">About Me</h1>
  <hr className="mx-auto w-1/2 mb-6" />
  <h3 className="text-center text-lg mb-4">One Line For related in yourself</h3>
  <div className="text-center md:text-left">
    <h2 className="text-2xl font-semibold mb-4">
      Developing With a Person While Explaining the World
    </h2>
    <p className="text-lg">
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam ut
      possimus tempore nemo vero rem vel odio temporibus mollitia, placeat
      omnis, porro error accusantium aperiam nobis quae minima qui nihil?
    </p>
  </div>
</div>

{/* Contact Section */}
<div className="w-full md:w-3/4 mx-auto my-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
  <div className="order-2 md:order-1">
    <h1 className="text-3xl font-bold mb-4">Contact Me</h1>
    <h3 className="text-lg mb-2">One line for your contact related</h3>
    <p className="text-lg mb-2">About Your Work</p>
    <p className="text-lg mb-2">About Team</p>
    <p className="text-lg">Related line to your dreams</p>
  </div>

  <div className="order-1 md:order-2 flex justify-center md:justify-end">
    <img
      src=""
      alt="Contact"
      className="h-[300px] w-[250px] md:h-[350px] md:w-[300px] bg-gray-200"
    />
  </div>
</div>

 {/* Service Providing Section */}
<div className="w-full md:w-3/4 mx-auto my-10">
  {/* Section Heading */}
  <h1 className="text-3xl font-bold text-center mb-4">What Service I'm Providing</h1>
  <hr className="mx-auto w-1/2 mb-6" />
  <h3 className="text-center text-lg mb-4 underline decoration-gray-500 decoration-2">About 20-40 Works</h3>

  {/* Services Grid */}
  <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
    {/* Service Item */}
    <div className="hero relative group bg-gray-100 p-6 rounded-lg shadow-lg hover:cursor-pointer transition-all duration-300">
      <div className="text-center">
        <p className="mb-2">🖌️</p>
        <h1 className="text-2xl font-bold uppercase mb-2">UI/UX Developer</h1>
        <p className="opacity-100 group-hover:opacity-0 transition-opacity duration-300">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum, eveniet molestias tenetur ipsa a dolor assumenda sed in voluptatibus totam?
        </p>
      </div>
      
      {/* Full-screen data on hover/click */}
      <div className="absolute inset-0 bg-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center z-10 p-6">
        <div>
          <h1 className="text-3xl font-bold uppercase mb-4">UI/UX Developer</h1>
          <p className="text-lg">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum, eveniet molestias tenetur ipsa a dolor assumenda sed in voluptatibus totam? Laborum, eveniet molestias tenetur ipsa a dolor assumenda sed in voluptatibus totam?
          </p>
        </div>
      </div>
    </div>

    {/* Repeating the same layout for other services */}
    <div className="hero relative group bg-gray-100 p-6 rounded-lg shadow-lg hover:cursor-pointer transition-all duration-300">
      <div className="text-center">
        <p className="mb-2">🖌️</p>
        <h1 className="text-2xl font-bold uppercase mb-2">UI/UX Developer</h1>
        <p className="opacity-100 group-hover:opacity-0 transition-opacity duration-300">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum, eveniet molestias tenetur ipsa a dolor assumenda sed in voluptatibus totam?
        </p>
      </div>
      
      <div className="absolute inset-0 bg-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center z-10 p-6">
        <div>
          <h1 className="text-3xl font-bold uppercase mb-4">UI/UX Developer</h1>
          <p className="text-lg">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum, eveniet molestias tenetur ipsa a dolor assumenda sed in voluptatibus totam? Laborum, eveniet molestias tenetur ipsa a dolor assumenda sed in voluptatibus totam?
          </p>
        </div>
      </div>
    </div>

    <div className="hero relative group bg-gray-100 p-6 rounded-lg shadow-lg hover:cursor-pointer transition-all duration-300">
      <div className="text-center">
        <p className="mb-2">🖌️</p>
        <h1 className="text-2xl font-bold uppercase mb-2">UI/UX Developer</h1>
        <p className="opacity-100 group-hover:opacity-0 transition-opacity duration-300">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum, eveniet molestias tenetur ipsa a dolor assumenda sed in voluptatibus totam?
        </p>
      </div>
      
      <div className="absolute inset-0 bg-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center z-10 p-6">
        <div>
          <h1 className="text-3xl font-bold uppercase mb-4">UI/UX Developer</h1>
          <p className="text-lg">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum, eveniet molestias tenetur ipsa a dolor assumenda sed in voluptatibus totam? Laborum, eveniet molestias tenetur ipsa a dolor assumenda sed in voluptatibus totam?
          </p>
        </div>
      </div>
    </div>
  </div>
</div>

{/* work exprience */}

<div className=" p-10">
  <h1 className="text-xl text-center uppercase text-black">Work Experience</h1>
  <p className="text-center">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, laborum!
  </p>
  <hr className="my-4" />
  <div className="grid grid-cols-1 md:grid-cols-3 gap-10 w-4/5 mx-auto">
    <div className="text-center">
      <h1 className="text-xl uppercase">UI/UX Developer</h1>
      <h5 className="text-center bg-red-600 text-white py-1">2022-2024</h5>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae voluptas quo adipisci aliquid culpa laborum laudantium officia reprehenderit explicabo cupiditate.
      </p>
      <h4 className="uppercase">UI/UX Developer</h4>
    </div>
    <div className="text-center">
      <h1 className="text-xl uppercase">UI/UX Developer</h1>
      <h5 className="text-center bg-red-600 text-white py-1">2022-2024</h5>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae voluptas quo adipisci aliquid culpa laborum laudantium officia reprehenderit explicabo cupiditate.
      </p>
      <h4 className="uppercase">UI/UX Developer</h4>
    </div>   <div className="text-center">
      <h1 className="text-xl uppercase">UI/UX Developer</h1>
      <h5 className="text-center bg-red-600 text-white py-1">2022-2024</h5>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae voluptas quo adipisci aliquid culpa laborum laudantium officia reprehenderit explicabo cupiditate.
      </p>
      <h4 className="uppercase">UI/UX Developer</h4>
    </div>
  </div>
</div>

{/* skills progress */}
<div className="p-8">
      <h1 className="text-2xl text-center mb-6 uppercase font-bold">Skills</h1>
      <div className="w-4/5 mx-auto space-y-4">
        {skillsData.map((skill) => (
          <div key={skill.skill} className="text-center">
            <p className="font-semibold mb-2">{skill.skill}</p>
            <div className="w-full bg-gray-200 rounded-full h-4">
              <div
                className="h-4 rounded-full"
                style={{
                  width: `${skill.percentage}%`,
                  backgroundColor: randomColor(),
                }}
              ></div>
            </div>
            <p className="mt-1">{skill.percentage}%</p>
          </div>
        ))}
      </div>
    </div>

</>

  );
};

export default Home;
