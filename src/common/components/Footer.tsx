import GithubButton from "./GithubButtom";

const Footer = () => (
  <footer className="lg:h-auto sm:h-40 h-30 max-w-screen-xl xl:mx-auto mx-5 rounded-lg px-5 lg:pt-3 pt-0 pb-3 flex flex-col lg:flex-row space-y-3 lg:space-y-0 justify-between items-center sticky bottom-5 bg-white border-t-4 border-black drop-shadow-lg transition-all ease-in-out duration-150">
    <div className="text-center lg:text-left">
      <p className="font-cal text-lg sm:text-2xl text-black">
        Workouts Library - Code Challenge
      </p>
      <p className="text-sm text-gray-700 mt-2 lg:mt-0">
        This is just an example for the {" "}
        <a
          className="text-black font-semibold underline"
          href="https://campgladiator.com/"
          rel="noreferrer"
          target="_blank"
        >
          campGladiator
        </a>{" "}
        codding challenge.
      </p>
    </div>
    <div className="flex space-y-3 sm:space-y-0 sm:space-x-3 sm:flex-row flex-col lg:w-auto w-full text-center">
      <GithubButton />
    </div>
  </footer>
);

export default Footer;
