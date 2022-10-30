import Logo from "@/common/components/Logo";
import Head from "@/common/components/Head";
import HomeButton from "@/common/components/nav/HomeButton";
import LoginButton from "@/common/components/nav/LoginButton";

const Nav = () => {
  return (
    <>
      <Head
        title="CG Mars Workouts"
        description="Frontend Coding Challenge - Created by @misaelbg"
      />

      <nav className="p-4 mb-6 flex items-center space-x-3">
        <ul className="flex gap-2">
          <li>
            <HomeButton />
          </li>
        </ul>
        <div className="flex-1 flex justify-center">
          <Logo width={160} height={33} text="Workouts Library" />
        </div>
        <div className="text-right text-sm">
          <LoginButton />
        </div>
      </nav>
    </>
  );
};

export default Nav;
