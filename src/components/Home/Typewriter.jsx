import React from "react";
import TextType from "./TextType";
import { useTheme } from "../../context/ThemeContext";

function Typewriter() {
  const { dark } = useTheme();
  return (
    <div
      id="home"
      className="text-lg tracking-widest hidden xl:py-45 sm:flex flex-col justify-center items-center lg:py-25 dark:hidden "
    >
      <TextType
        text={[
          "Welcome to Academix—a Gen Z learning experience where quests await, emotes speak louder than words, Aura becomes your flex, and every rank is another step toward the top.",
          "Forget lifeless dashboards and endless submissions. Every feature is designed to feel like a game, where every quest brings you closer to the top, every achievement means something, and every rank is earned.",
          "Whether you're chasing the leaderboard, collecting Aura, or completing your next quest, Academix turns the daily academic grind into something you'll actually want to log in for.",
        ]}
        typingSpeed={25}
        pauseDuration={5000}
        showCursor={true}
        cursorCharacter=""
      />
    </div>
  );
}

export default Typewriter;
