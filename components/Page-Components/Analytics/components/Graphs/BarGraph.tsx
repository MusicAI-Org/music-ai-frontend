import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "User 1",
    followers: 100,
    followings: 50,
    friends: 75,
    likes: 200,
    dislikes: 50,
  },
  {
    name: "User 2",
    followers: 200,
    followings: 100,
    friends: 150,
    likes: 300,
    dislikes: 75,
  },
  {
    name: "User 3",
    followers: 300,
    followings: 150,
    friends: 225,
    likes: 400,
    dislikes: 100,
  },
  {
    name: "User 4",
    followers: 400,
    followings: 200,
    friends: 300,
    likes: 500,
    dislikes: 125,
  },
  {
    name: "User 5",
    followers: 500,
    followings: 250,
    friends: 375,
    likes: 60,
    dislikes: 150,
  },
];

const calculateRank = (user: {
  name?: string;
  followers: any;
  followings: any;
  friends: any;
  likes: any;
  dislikes: any;
}) => {
  const { followers, followings, friends, likes, dislikes } = user;
  return (
    followers * 0.2 +
    followings * 0.2 +
    friends * 0.2 +
    likes * 0.3 -
    dislikes * 0.1
  );
};

interface Props {
  statsData: {
    allUsersData: [Object];
    dislikesCount: number;
    likesCount: number;
    rank: number;
    role: string;
    totalUsers: number;
    viewsCount: number;
  };
}

const BarGraph = (props: Props): JSX.Element => {
  const rankedData = data.map((user, index, array) => ({
    ...user,
    rank: calculateRank(user),
    prevUser1: array[index - 2] ? array[index - 2].name : "",
    prevUser2: array[index - 1] ? array[index - 1].name : "",
    nextUser1: array[index + 1] ? array[index + 1].name : "",
    nextUser2: array[index + 2] ? array[index + 2].name : "",
  }));

  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        width={500}
        height={300}
        data={rankedData}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="rank" fill="#8884d8" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default BarGraph;
