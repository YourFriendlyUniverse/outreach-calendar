'use client';
import { useState } from 'react'
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import { generateDates } from "@/app/util/generate-calendar";
import { startOfToday, format, getMonth, subMonths, addMonths } from "date-fns";

export const monthFullName = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
]

export const events = [
  {
    name: "Better Chinatown AAPI Parade", 
    date: new Date("June 1, 2025 10:00:00"),
    location: "5th Ave & W 56th St, Manhattan"
  },
  {
    name: "NYC Lung Force Walk",
    date: new Date("May 17, 2025 8:00:00"),
    location: "South Street Seaport, Pier 16",
  },
]


export default function Calendar() {
    const daysOfWeek = ["S", "M", "T", "W", "T", "F", "S"]
    const today = startOfToday()
    const [selectedDay, setSelectedDate] = useState(today)

    return (
        <div className="h-84 w-128">
            <div className="flex justify-between">
                <h1 className="font-bold">{monthFullName[getMonth(selectedDay)]}, {format(selectedDay, 'yyyy')}</h1>
                <div className="flex items-center gap-3">
                <GrFormPrevious
                    className="size-5 cursor-pointer hover:bg-(--foreground)"
                    onClick={() => {
                    setSelectedDate(subMonths(selectedDay, 1))
                    }}
                />
                <h1 className="cursor-pointer">Today</h1>
                <GrFormNext
                    className="size-5 cursor-pointer gap-5"
                    onClick={() => {
                    setSelectedDate(addMonths(selectedDay, 1))
                    }}
                />
                </div>
            </div>
            <div className="w-full grid grid-cols-7">
                {daysOfWeek.map((day, index) =>{
                return <h1 key={index} className="grid place-content-center text-m h-12">{day}</h1>
                })}
            </div>
            <div className="w-full grid grid-cols-7 items-center">
                {generateDates(selectedDay, today).map(({ isCurrMonth, date, isToday, hasEvent }, index) => {
                    if (hasEvent){
                        return (
                            <div key = {index} className="h-12 border-t border-gray-500 grid place-content-center">
                            <h1
                            className="bg-purple-500 grid place-content-center size-10 rounded-full text-(--background) hover:bg-violet-400 hover:text-(--background) transition-all cursor-pointer"
                            onClick={ () => {

                            }}
                            >
                            {format(date, 'd')}
                            </h1>
                            </div>
                        )
                    }

                    if (isToday){
                        return (
                        <div key = {index} className="h-12 border-t border-gray-500 grid place-content-center">
                            <h1 className="bg-red-500 grid place-content-center size-10 rounded-full text-(--background) cursor-pointer">
                            {format(date, 'd')}
                            </h1>
                        </div>
                        )
                    }
    
                    else if (isCurrMonth){
                        return (
                        <div key = {index} className="h-12 grid border-t border-gray-500 place-content-center">
                            <h1 className="grid place-content-center size-10 rounded-full hover:bg-(--foreground) hover:text-(--background) transition-all cursor-pointer">
                            {format(date, 'd')}
                            </h1>
                        </div>
                        )
                    }
    
                    else{
                        return (
                        <div key = {index} className="h-12 border-t border-gray-500 grid place-content-center text-(--not-curr-month)">
                            <h1 className="grid place-content-center size-10 rounded-full hover:bg-(--foreground) hover:text-(--background) transition-all cursor-pointer">
                            {format(date, 'd')}
                            </h1>
                        </div>
                        )
                    }
                })}
            </div>
        </div>
    )
}