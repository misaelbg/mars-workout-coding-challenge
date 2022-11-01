import clsx from "clsx";
import Image from "next/image";
import type { GetServerSideProps } from "next";
import Heading from "@/common/components/Heading";
import type { NextPageAndLayout } from "@/types/app.type";
import WorkoutsService from "@/services/workouts.service";
import VideoPlayer from "@/common/components/VideoPlayer";
import { formatVideoDuration } from "@/common/utils/media";
import type { WorkoutPageProps, Workout } from "@/types/workouts.type";

const WorkoutPage: NextPageAndLayout<WorkoutPageProps> = ({
  selected,
  playlist,
}) => {
  return (
    <>
      <div className="px-5 grid lg:grid-cols-[70%_30%]">
        <div>
          <VideoPlayer src={selected.media} />
          <Heading content={selected.title} />
          <p className="text-slate-600 text-lg">{selected.description}</p>
        </div>

        <div>
          {playlist.map((workout) => (
            <a
              key={workout.id}
              href={`/workouts/${workout.id}`}
              className={clsx({
                "flex gap-5 cursor-pointer hover:bg-gray-50 px-6 py-4": true,
                "bg-yellow-50": selected.id === workout.id,
              })}
            >
              <Image
                className="w-28 max-h-16"
                src={workout.thumbnail}
                alt={workout.description}
                width={112}
                height={64}
              />

              <div className="overflow-hidden">
                <h2>
                  <span className="font-semibold font-cal text-lg text-slate-800">
                    {workout.title}
                  </span>
                  <span className="text-sm italic text-slate-600 truncate">
                    {" "}
                    • {formatVideoDuration(Math.round(workout.duration))}
                  </span>
                </h2>
                <p className="text-md italic text-slate-600 my-1 truncate">
                  {workout.description}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </>
  );
};

export default WorkoutPage;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { data } = await WorkoutsService.getAll();

  const id = context?.params?.slug?.[0];

  if (typeof id !== "string") throw new Error("missing id");

  const playlist = data.record;

  const workout = playlist.find((item: Workout) => item.id === id);

  if (!workout) return { notFound: true };

  return {
    props: {
      playlist,
      selected: workout,
    },
  };
};
