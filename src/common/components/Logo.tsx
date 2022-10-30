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
        alt={text || logoAltDefault}
        height={height}
        src={logoUrl}
        width={width}
      />
      {text && (
        <span className="inline-block ml-3 font-medium truncate text-slate-700">
          {text}
        </span>
      )}
    </Link>
  );
};

export default Logo;
