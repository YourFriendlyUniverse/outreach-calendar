import Image from "next/image";
import {format, getMonth, startOfToday} from "date-fns";
import React from "react";
import { monthName } from "./util/month-name";
import Calendar from "./ui/calendar";
import UpcomingEvents from "./ui/upcoming-events";

export default function Home() {
  const today = startOfToday()

  return (
    <div className="flex gap-10 sm:divide-x justify-center sm:w-1/2 mx-auto h-screen items-center sm:flex-row flex-col">
      <Calendar/>
      <div className="size-84">
        <h1>Today is {monthName(getMonth(today))} {format(today, " d, yyyy")}</h1>
        <UpcomingEvents/>
        {/* <p>There are no upcoming events</p> */}
      </div>
    </div>
  )
}
