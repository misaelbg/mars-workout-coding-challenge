import Link from "next/link";
import Image from "next/image";
import Heading from "../common/components/Heading";
import type { WorkoutCardProps } from "@/types/workouts.type";

const WorkoutCard = ({ workout }: WorkoutCardProps) => {
  const workoutLink = `/workouts/${workout.id}`;

  return (
    <>
      <Link
        href={workoutLink}
        className="w-full border rounded-lg transition shadow-sm hover:shadow-md cursor-pointer"
      >
        <Image
          className="w-full h-96"
          src={workout.thumbnail}
          alt={workout.description}
          width={358}
          height={358}
        />

        <div className="p-8">
          <Heading as="h3" content={workout.title} />
          <p className="text-slate-700">{workout.description}</p>
        </div>
      </Link>
    </>
  );
};

export default WorkoutCard;
