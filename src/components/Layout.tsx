import Nav from "./Nav";
import { LayoutProps } from "@/types/layout.type";

const Layout = ({ content }: LayoutProps) => {
  return (
    <>
      <Nav />
      <main className="mx-auto max-w-full md:max-w-6xl min-h-screen px-5">
        {content}
      </main>
    </>
  );
};

export default Layout;
