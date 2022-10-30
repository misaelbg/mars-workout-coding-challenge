import type { NextPage } from "next";
import { useState, useEffect } from "react";
import { Workout } from "@/types/workouts.type";
import Loader from "@/common/components/Loader";
import Heading from "@/common/components/Heading";
import WorkoutGrid from "@/components/WorkoutGrid";
import workoutsService from "@/services/workouts.service";

const Home: NextPage = () => {
  const [loading, setLoader] = useState(true);
  const [workouts, setWorkouts] = useState<Workout[]>([]);
  const [headingContent, setHeadingContent] = useState(
    "There are no workouts to view"
  );

  useEffect(() => {
    (async () => {
      const { data } = await workoutsService.getAll();

      if (data.record.length > 0) {
        setWorkouts(data.record);
        setHeadingContent("Body Workout Videos");
        setLoader(false);
      }
    })();
  }, []);

  if (loading) return <Loader />;

  return (
    <>
      <Heading content={headingContent} />
      <WorkoutGrid workouts={workouts} />
    </>
  );
};

export default Home;
