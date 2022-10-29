import type { NextPage } from "next";

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

export type HomeProps = {
  workouts: Workout[];
};

const Home: NextPage<HomeProps> = ({ workouts }) => {
  return (<></>);
};

export default Home;
