import { useState } from 'react'
import './App.css'
import NavBar from './navbar'
import ProfileCards from './profilecards'
import techTeams from '../imageParser'


// this is the data I will be parsing into the map method - it is an alternate to a database data
const teamMembers = [
  { id: 1, name: "Sarah Connor", role: "Lead Engineer", isActive: "Active", level: "Senior", avatar: techTeams.team6 },
  { id: 2, name: "Marcus Wright", role: "UI Designer", isActive: "Away", level: "Junior", avatar: techTeams.team2 },
  { id: 3, name: "Kyle Reese", role: "Frontend Developer", isActive: "Active", level: "Mid", avatar: techTeams.team1 },
  { id: 4, name: "Grace Harper", role: "Frontend Developer", isActive: "Inactive", level: "Senior", avatar: techTeams.team4 },
];

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBar />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 md:pl-10">
        {/* used map method to iterate over the teamMembers to create corresponding html elements */}
        {teamMembers.map((Members)=>(
          <ProfileCards
            key={Members.id}
            name={Members.name}
            avatar={Members.avatar}
            role={Members.role}
            isActive={Members.isActive}
          />
        ))}
      </div>
    </>
  )
}

export default App
