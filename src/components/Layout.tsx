export type LayoutProps = {
  content: React.ReactNode;
};

const Layout = ({ content }: LayoutProps) => {
  return (
    <>
      <main className="mx-auto max-w-full md:max-w-6xl min-h-screen px-5">
        {content}
      </main>
    </>
  );
};

export default Layout;
