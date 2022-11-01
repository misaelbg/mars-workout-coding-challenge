import Head from "@/common/components/Head";
import Logo from "@/common/components/nav/Logo";
import PromoButton from "@/common/components/nav/PromoButton";

const Nav = () => {
  return (
    <>
      <Head
        title="CG Mars Workouts"
        description="Frontend Coding Challenge - Created by @misaelbg"
      />

      <nav className="bg-white px-2 sm:px-4 py-2.5 dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
        <div className="container flex flex-wrap justify-between items-center mx-auto">
          <Logo width={190} height={40} text="Workouts Library" />
          <div className="flex md:order-2">
            <PromoButton />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
