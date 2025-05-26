export const events = [
    {
        name: "Better Chinatown AAPI Parade", 
        date: "June 1, 2025 10:00 AM",
        location: "5th Ave & W 56th St, Manhattan",
        link: "https://www.google.com/maps/place/5th+Ave+%26+W+56th+St,+New+York,+NY+10019/@40.762303,-73.9770485,17z/data=!3m1!4b1!4m6!3m5!1s0x89c258fa5ec016af:0x8fe25acf88756f2d!8m2!3d40.762299!4d-73.9744736!16s%2Fg%2F11hb66qfb1?entry=ttu&g_ep=EgoyMDI1MDUxMi4wIKXMDSoASAFQAw%3D%3D",
    },
    {
        name: "NYC Lung Force Walk",
        date: "May 17, 2025 8:00AM",
        location: "South Street Seaport, Pier 16",
        link: "https://maps.app.goo.gl/Uc6386FszSZziqyJ8",
    },
]

export default function UpcomingEvents(){
    if (events.length > 0){
        return (
            <div className="p-4 grid grid-cols-1 gap-6">
                    {events.map(({name, location, date, link}, index) => (
                        <a href={link} key={index}>
                            <div
                            className="bg-gray-500 shadow-md rounded-lg p-4 transition transform hover:scale-105 duration-200"
                            >
                            <h2 className="text-xl font-semibold mb-2 text-(--foreground)"> {name}</h2>
                            <p className="text-sm text-gray-200">📍 {location}</p>
                            <p className="text-sm text-gray-200">📅 {date}</p>
                            </div>
                        </a>

                    ))}
            </div>
        )
    }
    else{
        return (
            <p className="text-gray-400">There are no upcoming events</p>
        )
    }
}