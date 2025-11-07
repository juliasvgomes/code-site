import "boxicons/css/boxicons.min.css";
import robot from "../assets/robot.png";

const Hero = () => {
  return (
    <main className="flex lg:mt-20 flex-col lg:flex-row items-center justify-between min-h-[calc(90vh-6rem)]">
      <div className="max-w-xl ml-[5%] z-10 mt-[90%] md:mt-[60%] lg:mt-0">
        <div className="relative w-[95%] sm:w-48 h-10 bg-gradient-to-r from-[#656565] to-[#e99b63] shadow-[0_0_15px_rgba(255,255,255,0.4)] rounded-full">
          <div className="absolute inset-[3px] bg-black rounded-full flex items-center justify-center gap-1">
            <i className="bx bx-diamond"></i> INTRODUCING
          </div>
        </div>

        <h1 className="text-3x1 sm:text-4x1 md:text-5x1 lg:text-6x1  font-semibold tracking-wider my-8">
          EMAIL FOR
          <br />
          DEVELOPERS
        </h1>

        <p className="text-base sm:text-lg tracking-wider text-gray-400 max-w-[25rem] lg:max-w-[30rem]">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos
          fuga pariatur, facilis odit sit architecto illo consequuntur animi!
          Saepe illo quisquam dolor! Ratione aspernatur optio autem nostrum.
          Voluptatem, nesciunt debitis.
        </p>

        <div className="flex gap-4 mt-12">
          <a
            className="border border-[#2a2a2a] py-2 sm:py-3 px-4 sm:px-5 rounded-full sm:text-lg text-sm font-semibold tracking-wider transition-all duration-300 hover:bg-[#1a1a1a]"
            href="#"
          >
            Documentation <i className="bx bx-link-external"></i>
          </a>

          <a
            className="border border-[#2a2a2a] py-2 sm:py-3 px-8 sm:px-10 rounded-full sm:text-lg text-sm font-semibold tracking-wider transition-all duration-300 hover:bg-[#1a1a1a] bg-gray-300 text-black hover:text-white"
            href="#"
          >
            GetStarted <i className="bx bx-link-external"></i>
          </a>
        </div>
      </div>

      <img
        src={robot}
        alt="Robot illustration"
        className="absolute right-[5%] top-[10%] w-[36rem] z-10 mix-blend-lighten"
      />
    </main>
  );
};

export default Hero;
