const events = [
  {
    year: "1908",
    event: "Manchester United's First League Title",
    description:
      "The club wins its first league title, marking the beginning of its dominance in English football.",
  },
  {
    year: "1910",
    event: "Opening of Old Trafford",
    description:
      "Old Trafford officially opens, becoming the iconic home ground for Manchester United.",
  },
  {
    year: "1948",
    event: "First FA Cup Victory",
    description:
      "Manchester United wins its first FA Cup under Matt Busby, defeating Blackpool 4-2.",
  },
  {
    year: "1958",
    event: "Munich Air Disaster",
    description:
      "A tragic moment where eight players and three staff members lose their lives, profoundly impacting the club's history.",
  },
  {
    year: "1963",
    event: "FA Cup Triumph",
    description:
      "Manchester United wins the FA Cup, their first major trophy after the Munich disaster, signaling the club's resurgence.",
  },
  {
    year: "1968",
    event: "First European Cup Win",
    description:
      "Manchester United becomes the first English club to win the European Cup, defeating Benfica 4-1 at Wembley.",
  },
  {
    year: "1990",
    event: "FA Cup Victory Under Sir Alex Ferguson",
    description:
      "A crucial win that saves Sir Alex Ferguson's job and begins an era of unprecedented success.",
  },
  {
    year: "1993",
    event: "First Premier League Title",
    description:
      "Manchester United wins the inaugural Premier League season, ending a 26-year wait for the league title.",
  },
  {
    year: "1999",
    event: "The Treble",
    description:
      "Manchester United wins the Premier League, FA Cup, and UEFA Champions League in one season, a historic achievement capped by an incredible comeback victory over Bayern Munich in the Champions League final.",
  },
  {
    year: "2008",
    event: "Third Champions League Title",
    description:
      "Manchester United wins the Champions League, defeating Chelsea in a dramatic penalty shootout in Moscow.",
  },
  {
    year: "2013",
    event: "Sir Alex Ferguson's Retirement",
    description:
      "Sir Alex Ferguson retires after winning his 13th Premier League title, ending an illustrious managerial career.",
  },
  {
    year: "2016",
    event: "FA Cup Victory Under Louis van Gaal",
    description:
      "Manchester United wins the FA Cup, defeating Crystal Palace 2-1 in the final.",
  },
  {
    year: "2017",
    event: "UEFA Europa League Triumph",
    description:
      "Manchester United wins the UEFA Europa League under José Mourinho, completing the club's major trophy collection.",
  },
  {
    year: "2023",
    event: "Carabao Cup Victory Under Erik ten Hag",
    description:
      "Manchester United wins the Carabao Cup, marking the first major trophy under manager Erik ten Hag.",
  },
  {
    year: "2024",
    event: "FA Cup Victory Under Erik ten Hag",
    description:
      "Manchester United wins the FA Cup, adding another major trophy to their collection under Erik ten Hag.",
  },
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
              <h1 className="font-bold p-2">
                {" "}
                <span>{event.year} - </span>
                {event.event}
              </h1>
              <p className="border-l-4 border-gold p-2 cursor-pointer hover:shadow-lg">
                {event.description}
              </p>
            </div>
          ))}
        </ul>
      </div>
    </main>
  );
}
