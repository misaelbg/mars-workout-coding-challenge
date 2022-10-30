import WorkoutCard from "./WorkoutCard";
import type { WorkoutGridProps } from "@/types/workouts.type";

const WorkoutGrid = ({ workouts }: WorkoutGridProps) => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {workouts.map((workout) => (
          <WorkoutCard key={workout.id} workout={workout} />
        ))}
      </div>
    </>
  );
};

export default WorkoutGrid;
