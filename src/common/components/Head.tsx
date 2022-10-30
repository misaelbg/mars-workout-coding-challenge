import NextHead from "next/head";
import { HeadProps } from "@/types/head.type";

const Head = ({ title, description }: HeadProps) => {
  return (
    <NextHead>
      <title>{title}</title>
      <meta
        name="description"
        content={description}
      />
      <link rel="icon" href="/images/favicon.ico" />
    </NextHead>
  );
};

export default Head;
