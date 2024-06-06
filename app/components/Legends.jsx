import React from "react";
import Image from "next/image";

// images
import george from "./assets/legends/George-Best.jpg";
import cantona from "./assets/legends/cantona.jpeg";
import ronaldo from "./assets/legends/Cristiano-Ronaldo.jpg";
import beckham from "./assets/legends/David-Beckham.jpg";
import law from "./assets/legends/Denis-Law.jpg";
import scholes from "./assets/legends/Paul-Scholes.jpg";
import keane from "./assets/legends/Roy-Keane.jpg";
import gigs from "./assets/legends/Ryan-Giggs.jpg";
import ferguson from "./assets/legends/Sir Alex Ferguson.jpg";
import busby from "./assets/legends/Sir Matt Busby.webp";
import charlton from "./assets/legends/Sir-Bobby-Charlton.jpg";
import rooney from "./assets/legends/Wayne-Rooney.jpg";

const legendsProfile = [
  {
    src: george,
    playerName: "George Best",
    position: "Forward",
    contribution: "One of the greatest dribblers in the history of football.",
  },
  {
    src: charlton,
    playerName: "Sir Bobby Charlton",
    position: "Forward/Midfielder",
    contribution:
      "All-time leading goalscorer for Manchester United and England.",
  },
  {
    src: cantona,
    playerName: "Eric Cantona",
    position: "Forward",
    contribution:
      "Iconic figure who played a pivotal role in United's resurgence in the 1990s.",
  },
  {
    src: gigs,
    playerName: "Ryan Giggs",
    position: "Midfielder",
    contribution:
      "Most decorated player in English football history, serving United for over two decades.",
  },
  {
    src: keane,
    playerName: "Roy Keane",
    position: "Midfielder",
    contribution:
      "Inspirational captain known for his leadership and tenacity on the field.",
  },
  {
    src: scholes,
    playerName: "Paul Scholes",
    position: "Midfielder",
    contribution:
      "Regarded as one of the greatest midfielders of his generation.",
  },
  {
    src: beckham,
    playerName: "David Beckham",
    position: "Midfielder",
    contribution: "Renowned for his crossing ability and set-piece prowess.",
  },
  {
    src: rooney,
    playerName: "Wayne Rooney",
    position: "Forward/Midfielder",
    contribution: "Manchester United's all-time leading goalscorer.",
  },
  {
    src: ronaldo,
    playerName: "Cristiano Ronaldo",
    position: "Forward",
    contribution:
      "Prolific goalscorer and one of the greatest footballers of all time.",
  },
  {
    src: law,
    playerName: "Denis Law",
    position: "Forward",
    contribution:
      "Scored 237 goals for Manchester United, including a crucial role in their European Cup win.",
  },
  {
    src: busby,
    playerName: "Sir Matt Busby",
    position: "Manager",
    contribution: "Led United to their first European Cup triumph in 1968.",
  },
  {
    src: ferguson,
    playerName: "Sir Alex Ferguson",
    position: "Manager",
    contribution:
      "Most successful manager in Manchester United's history, winning numerous domestic and international titles.",
  },
];

export default function Legends() {
  return (
    <main>
      <div className="p-8 bg-lightGray">
        <h3 className="text-darkRed font-bold text-center">Hall of Fame</h3>
        {legendsProfile.map((legend) => (
          <div key={legend.playerName} className="legend-card border-gold">
            <Image
              src={legend.src}
              alt={legend.playerName}
              className="legend-image"
              layout="responsive"
              width={300}
              height={300}
            />
            <h2 className="text-darkRed font-bold">{legend.playerName}</h2>
            <h3 className="text-black font-light">{legend.position}</h3>
            <p className="text-black">{legend.contribution}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
