import Link from "next/link";

const PromoButton = () => {
  return (
    <Link
      type="button"
      href="https://account.campgladiator.com/#/home"
      className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-2xl text-xs px-5 py-2 text-center mr-3 md:mr-0 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
    >
      GET FREE WORKOUTS
    </Link>
  );
};

export default PromoButton;
