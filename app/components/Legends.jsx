import React from 'react'

// javascript object for working with images
/* 
Legends list

Players
- George best
- Sir Boby Charlton
- Eric Cantona
- Ryan Gigs
- Roy Keane
- Paul Scholes
- David Beckham
- Wayne Rooney
- Cristiano Ronaldo
- Denis Law

Coaches
- Sir Matt Busby
- Sir Alex Fergusson

Download coaches images
*/
const legendsProfile = [
  {
    src: " image path",
    playerName: "Legend Name",
    position: "Player Position/ Coach Title",
    contribution: "Player/Coach Contribution to the team"
  }
]
export default function Legends() {
  return (
    <main>
      <div className='p-8 bg-lightGray'>
        <h3 className='text-darkRed font-bold text-center'>Hall of Fame</h3>
        <div className='legend-grid'>
          <img src="" alt="Legend" />
          <h1 className='font-bold'>Player Name</h1>
          <h2>Player Position</h2>
          <p>Contribution To The Team</p>
        </div>
        <div>
        </div>
    </div>
    </main>
  )
}
