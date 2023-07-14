import React from "react";
import { ResponsiveContainer, PieChart, Pie, Legend } from "recharts";

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
const PieGraph = (props: Props) => {
  const rankedData = data.map((user, index) => {
    const startIndex = Math.max(0, index - 2);
    const endIndex = Math.min(data.length - 1, index + 2);
    const similarUsers = data.slice(startIndex, endIndex + 1);
    const similarUsersRank = similarUsers.map(calculateRank);
    const userRank = calculateRank(user);
    const aboveAvg = similarUsersRank.filter((r) => r > userRank).length;
    const belowAvg = similarUsersRank.filter((r) => r < userRank).length;
    return {
      ...user,
      aboveAvg,
      belowAvg,
    };
  });

  return (
    <ResponsiveContainer width="100%" height="100%">
      <PieChart>
        <Pie
          data={rankedData}
          dataKey="aboveAvg"
          nameKey="name"
          cx="50%"
          cy="50%"
          outerRadius={60}
          fill="#8884d8"
        />
        <Pie
          data={rankedData}
          dataKey="belowAvg"
          nameKey="name"
          cx="50%"
          cy="50%"
          innerRadius={70}
          outerRadius={90}
          fill="#82ca9d"
          label
        />
        <Legend />
      </PieChart>
    </ResponsiveContainer>
  );
};

export default PieGraph;
