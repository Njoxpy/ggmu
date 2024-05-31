const events = [
  {
    year: "1878",
    event: "Club founded as Newton Heath LYR F.C.",
    description:
      "Newton Heath LYR Football Club is founded by workers from the Lancashire and Yorkshire Railway depot at Newton Heath.",
  },
  {
    year: "1902",
    event: "Renamed Manchester United F.C.",
    description:
      "Newton Heath LYR Football Club is founded by workers from the Lancashire and Yorkshire Railway depot at Newton Heath.",
  },
  // Add more events here
];

export default function Timeline() {

  return (
    <main>
      <div className="p-8">
        <h1 className="text-red text-center font-bold pb-2">
          Journey Through History
        </h1>
        <ul className="m-2 p-2">
          {events.map((event) => (
            <div key={event.year}>
              <h1 className="font-bold">
                {" "}
                <span>{event.year} - </span>
                {event.event}
              </h1>
              <p className="border-l-4 border-red p-2 cursor-pointer">
                {event.description}
              </p>
            </div>
          ))}
        </ul>
      </div>
    </main>
  );
}


/*
Details on Hover/Click: When hovering over or clicking on an event, display more details.
*/