import React, { useEffect, useState } from "react";
import PageTitle from "./../../components/Typography/PageTitle";
import { Bus, User, Route, Users } from "lucide-react";
import InfoCard from "../../components/Cards/InfoCard";
import axios from "axios";
import QuickActions from "../../components/Cards/QuickActions";

const Dashboard = ({isEmployeePath}) => {
  return (
    <main className="antialiased p-10 w-full h-full  bg-gray-200 dark:bg-gray-700 md:ml-64  pt-20 ">
      <div className="mt-8 mb-6 ">
        <PageTitle>Dashboard </PageTitle>
        <p className="text-sm font-light   dark:text-gray-300 text-gray-600">
          Real-time transportation management insights
        </p>
      </div>

      <DashboardCards isEmployeePath={isEmployeePath} />
      <Cards isEmployeePath={isEmployeePath}/>
    </main>
  );
};

export default Dashboard;



const DashboardCards = ({isEmployeePath}) => {
  const stats = [
    {
      title: "Active Buses",
      value: "12",
      icon: Bus,
      color: "bg-blue-500/30",
      textColor: "text-blue-500",
      change: "+2 from yesterday",
    },
    {
      title: "Total Drivers",
      value: "28",
      icon: User,
      color: "bg-green-500/30",
      textColor: "text-green-500",
      change: "All active",
    },
    {
      title: "Active Routes",
      value: "8",
      icon: Route,
      color: "bg-purple-500/30",
      textColor: "text-purple-700",
      change: "3 in progress",
    },
    {
      title: "Total Passengers",
      value: "1,847",
      icon: Users,
      color: "bg-orange-500/30",
      textColor: "text-orange-400",
      change: "+45 this week",
    },
  ];

  return (
    <div className=" grid gap-4 mb-8 md:grid-cols-2 xl:grid-cols-4 lg:grid-cols-4 ">
      {stats.map((stat, index) => {
        const Icon = stat.icon;
        // const Icon = iconMap[stat.icon]; // dynamically get icon component
        return (
          <InfoCard
            key={index}
            title={stat.title}
            value={stat.value}
            change={stat.change}
          >
            <div className={`p-3  ${stat.textColor}  rounded-xl ${stat.color}`}>
              <Icon size={26} />
            </div>
          </InfoCard>
        );
      })}
    </div>
  );
};

const Cards = ({isEmployeePath}) => {
  
  const activities = [
    { time: "10:30 AM", text: "Bus #7 completed Route A", type: "success" },
    {
      time: "10:15 AM",
      text: "Driver John Smith started Route B",
      type: "info",
    },
    {
      time: "09:45 AM",
      text: "Delay reported on Route C - 10 mins",
      type: "warning",
    },
    { time: "09:30 AM", text: "Bus #3 maintenance scheduled", type: "info" },
    { time: "09:30 AM", text: "Bus #3 maintenance scheduled", type: "info" },
    { time: "09:30 AM", text: "Bus #3 maintenance scheduled", type: "info" },
  ];

  return (
    <>
      <div className="grid gap-6 mb-8 md:grid-cols-2">
        {/* SIMPLE CARD */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
          {/* Header */}
          <h2 className="text-lg font-light dark:text-gray-300">
            Recent Activity
          </h2>
          <p className="text-sm  text-gray-500 dark:text-gray-400 mb-4">
            Latest transportation updates
          </p>

          {/* Content */}
          <div className="space-y-4">
            {activities.map((activity, idx) => (
              <div
                key={idx}
                className="flex items-start gap-3 pb-3 border-b border-gray-200
              dark:border-gray-600 last:border-0 last:pb-0"
              >
                {/* Dot Indicator */}
                <div className="w-2 h-2 rounded-full bg-blue-500 mt-2"></div>

                {/* Text */}
                <div className="flex-1">
                  <p className="text-gray-800 dark:text-gray-300 text-sm">
                    {activity.text}
                  </p>
                  <p className="text-gray-400 dark:text-gray-500 text-xs mt-1">
                    {activity.time}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      {!isEmployeePath &&  <div className="bg-white dark:bg-gray-800 h-90 rounded-xl shadow-lg p-6">
          <QuickActions />
        </div>}
      </div>
    </>
  );
};
