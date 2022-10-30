import type { HeadingProps } from "@/types/heading.type";

const Heading = ({ content, as = "h1" }: HeadingProps) => {
  switch (as) {
    case "h1":
      return (
        <h1 className="text-4xl font-bold mb-8 text-slate-700 font-cal">
          {content}
        </h1>
      );
    case "h2":
      return (
        <h2 className="text-3xl font-bold mb-4 text-slate-600 font-cal">
          {content}
        </h2>
      );
    case "h3":
      return (
        <h3 className="text-2xl font-bold mb-4 text-slate-600 font-cal">
          {content}
        </h3>
      );
    case "h4":
      return (
        <h4 className="text-xl font-bold mb-4 text-slate-600 font-cal">
          {content}
        </h4>
      );
    case "h5":
      return (
        <h5 className="text-lg font-bold mb-4 text-slate-600 font-cal">
          {content}
        </h5>
      );
    case "h6":
      return (
        <h6 className="text-base font-bold mb-4 text-slate-600 font-cal">
          {content}
        </h6>
      );
  }
};

export default Heading;
