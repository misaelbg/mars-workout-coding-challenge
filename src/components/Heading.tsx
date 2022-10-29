export type HeadingProps = {
  content: React.ReactNode;
};

const Heading = ({ content }: HeadingProps) => {
  return (
    <h1 className="text-4xl font-bold mb-8 text-slate-700 font-cal">
      {content}
    </h1>
  );
};

export default Heading;
