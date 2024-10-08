
const Portfolio = () => {
  return (
    <div className="text-center p-4">
      <h1 className="text-black text-2xl sm:text-4xl font-bold mb-4">
        What service you will get from me
      </h1>
      <p className="text-gray-700 mb-6">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit veritatis sint molestiae labore suscipit, ab cupiditate harum officiis tempore officia.
      </p>
      <hr className="border-t-2 border-gray-300 w-1/2 mx-auto mb-6" />
      <p className="text-gray-600">And what you want from me</p>
      <div className="flex flex-wrap justify-center gap-4">
        <img src="" className="h-[300px] w-[50%] md:w-[40%] lg:w-[30%]" alt="Service 1" />
        <img src="" className="h-[300px] w-[50%] md:w-[40%] lg:w-[30%]" alt="Service 2" />
        <img src="" className="h-[300px] w-[50%] md:w-[40%] lg:w-[30%]" alt="Service 3" />
        <img src="" className="h-[300px] w-[50%] md:w-[40%] lg:w-[30%]" alt="Service 4" />
        <img src="" className="h-[300px] w-[50%] md:w-[40%] lg:w-[30%]" alt="Service 5" />
      </div>
    </div>
  );
};

export default Portfolio;
