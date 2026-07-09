import React from 'react'
      import TextType from './TextType';

function Typewriter() {
  return (
    <div id="home" className='text-lg tracking-widest hidden xl:py-45 sm:flex flex-col lg:py-25 '>


<TextType
  text={["Academix is a modern learning platform that transforms routine coursework into engaging challenges. Instead of traditional one-way task distribution, it creates an interactive space where students can attempt, submit, and refine their work with built-in support from an AI assistant..",
     "The platform introduces Aura, a unique reward system that students earn through successful task completions. Aura not only tracks progress but also motivates students by turning academic efforts into tangible recognition, encouraging consistency and participation.", 
    "A leaderboard highlights top performers, fostering a sense of healthy competition and community. By blending structured academics with gamification and AI guidance, Academix makes learning more dynamic, motivating, and rewarding."]}
  typingSpeed={25}
  pauseDuration={5000}
  showCursor={true}
  cursorCharacter=""
/>

    </div>
  )
}
 
export default Typewriter
