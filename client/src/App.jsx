import { useState } from 'react'
import './App.css'
import NavBar from './navbar'
import ProfileCards from './profilecards'


// this is the data I will be parsing into the map method - it is an alternate to a database data
const teamMembers = [
  { id: 1, name: "Sarah Connor", role: "Lead Engineer", isActive: "Active", level: "Senior", image: "https://i.pravatar.cc/150?u=1" },
  { id: 2, name: "Marcus Wright", role: "UI Designer", isActive: "Away", level: "Junior", image: "https://i.pravatar.cc/150?u=2" },
  { id: 3, name: "Kyle Reese", role: "Frontend Developer", isActive: "Active", level: "Mid", image: "https://i.pravatar.cc/150?u=3" },
  { id: 4, name: "Grace Harper", role: "Frontend Developer", isActive: "Inactive", level: "Senior", image: "https://i.pravatar.cc/150?u=4" },
];

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBar />
      <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
        {teamMembers.map((Members)=>(
          <ProfileCards
            key={Members.id}
            name={Members.name}
            role={Members.role}
            isActive={Members.isActive}
          />
        ))}
      </div>
    </>
  )
}

export default App
