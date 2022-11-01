export type Workout = {
  description: string;
  thumbnail: string;
  levelTag: string;
  media: string;
  title: string;
  impactTag: string;
  id: string;
  trainerId: string;
  duration: number;
};

export type WorkoutCardProps = {
  workout: Workout;
};

export type WorkoutGridProps = {
  workouts: Workout[],
};

export type WorkoutPageProps = {
  selected: Workout,
  playlist: Workout[],
};
