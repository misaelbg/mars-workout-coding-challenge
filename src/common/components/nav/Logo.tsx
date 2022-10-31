import Link from "next/link";
import Image from "next/image";
import { LogoProps } from "@/types/logo.type";

const logoAltDefault = "Workouts Library";

const logoUrl =
  "https://s3.amazonaws.com/cgcdn/global-ui/images/logos/campgladiator/full-color-black.svg";

const Logo = ({ width, height, text }: LogoProps) => {
  return (
    <Link href="/" className="flex justify-center items-center" passHref>
      <Image
        className="mr-3 h-6 sm:h-9"
        alt={text || logoAltDefault}
        height={height}
        src={logoUrl}
        width={width}
      />
      {text && (
        <span className="logo-text self-center text-xl font-semibold whitespace-nowrap dark:text-white">
          {text}
        </span>
      )}
    </Link>
  );
};

export default Logo;
