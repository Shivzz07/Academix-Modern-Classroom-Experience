import React, { useState } from 'react'
import { createContext } from 'react'

export const TasksContext = createContext();


export const TasksProvider = ({children}) => {
  const emojis = [..."😀😃😄😁😆😅😂🤣😊😇🙂🙃😉😌😍🥰😘😗😙😚😋😛😜😝🤪🤨🧐🤓😎🥸🤩🥳😏😒😞😔😟😕🙁☹️😣😖😫😩🥺😢😭😤😠😡🤬🤯😳🥵🥶😱😨😰😥😓🤗🤔🤭🤫🤥😶😐😑😬🙄😯😦😧😮😲🥱😴🤤😪😵🤐🥴🤢🤮🤧😷🤒🤕🤑🤠😈👿👹👺🤡💩👻💀☠️👽👾🤖🎃😺😸😹😻😼😽🙀😿😾🐶🐱🐭🐹🐰🦊🐻🐼🐻‍❄️🐨🐯🦁🐮🐷🐽🐸🐵🙈🙉🙊🐒🐔🐧🐦🐤🐣🐥🦆🦅🦉🦇🐺🐗🐴🦄🐝🪲🐞🦋🐌🐛🦟🪰🪱🐜🐢🐍🦎🐙🦑🦐🦞🦀🐡🐠🐟🐬🐳🐋🦈🐊🐅🐆🦓🦍🦧🐘🦣🦛🦏🐪🐫🦒🦘🦬🐃🐂🐄🐎🐖🐏🐑🦙🐐🦌🐕🐩🦮🐕‍🦺🐈🐈‍⬛🪶🐓🦃🦚🦜🦢🦩🕊️🐇🦝🦨🦡🦫🦦🦥🐁🐀🐿️🦔🍎🍏🍊🍋🍌🍉🍇🍓🫐🍈🍒🍑🥭🍍🥥🥝🍅🍆🥑🥦🥬🥒🌶️🫑🌽🥕🫒🧄🧅🥔🍠🥐🥯🍞🥖🥨🧀🥚🍳🧈🥞🧇🥓🥩🍗🍖🌭🍔🍟🍕🥪🥙🧆🌮🌯🥗🥘🍝🍜🍲🍛🍣🍱🥟🍤🍙🍚🍘🍥🥠🥮🍢🍡🍧🍨🍦🥧🧁🍰🎂🍮🍭🍬🍫🍿🍩🍪🥛🍼🫖☕🍵🍶🍺🍻🥂🍷🥃🍸🍹🧉🍾⚽🏀🏈⚾🥎🎾🏐🏉🎱🏓🏸🥅🏒🏑🏏🥍🏹🎣🤿🥊🥋🎽🛹🛼🛷⛸️🥌🎿⛷️🏂🪂🚗🚕🚙🚌🚎🏎️🚓🚑🚒🚐🛻🚚🚛🚜🛵🏍️🛺🚲🛴🚨🚦🚥🚧🛑⛽🚏🗺️🗿🗽🗼🏰🏯🎡🎢🎠⛲🎪🎭🎨🎬🎤🎧🎼🎹🥁🎷🎺🎸🪕🎻🎲🧩♟️🎯🎳🎮🕹️🎰"].slice(0, 400);
    

    const colors = [
    "#FF5733", "#33FF57", "#3357FF", "#FF33A8", "#A833FF",
    "#33FFF6", "#FFC300", "#FF8D1A", "#8DFF1A", "#1AFF8D",
    "#1A8DFF", "#8D1AFF", "#FF1A8D", "#4CAF50", "#2196F3",
    "#9C27B0", "#E91E63", "#FF9800", "#795548", "#607D8B",
    "#00BCD4", "#CDDC39", "#F44336", "#3F51B5", "#009688",
    "#673AB7", "#FFEB3B", "#03A9F4", "#8BC34A", "#FF5722",
    "#1ABC9C", "#2ECC71", "#3498DB", "#9B59B6", "#34495E",
    "#16A085", "#27AE60", "#2980B9", "#8E44AD", "#2C3E50",
    "#F1C40F", "#E67E22", "#E74C3C", "#95A5A6", "#D35400",
    "#C0392B", "#BDC3C7", "#7F8C8D", "#FF6F61", "#6B5B95",
    "#88B04B", "#F7CAC9", "#92A8D1", "#955251", "#B565A7",
    "#009B77", "#DD4124", "#D65076", "#45B8AC", "#EFC050",
    "#5B5EA6", "#9B2335", "#DFCFBE", "#55B4B0", "#E15D44",
    "#7FCDCD", "#BC243C", "#C3447A", "#98B4D4", "#FFB7B2",
    "#91A8D0", "#034F84", "#F7786B", "#9896A4", "#DD4132",
    "#BFD641", "#7BC4C4", "#FFA500", "#40E0D0", "#8A2BE2",
    "#20B2AA", "#DC143C", "#00FA9A", "#4682B4", "#D2691E",
    "#9ACD32", "#FF4500", "#6A5ACD", "#2E8B57", "#483D8B"
  ];
  const [random_color] = useState(() => colors[Math.floor(Math.random() * colors.length)]);
  const [random_emoji] = useState(() => emojis[Math.floor(Math.random() * emojis.length)]);
    

    const[task_stat, settask_stat] = useState([
  { 
     id : 0,
    "title" : "OOPS Revision", 
    month_name : "May",
    "date" : "2026-4-19",
    "deadline" : "2026-4-20", 
    "content" : "Revise the core OOPS pillars—Encapsulation, Abstraction, Inheritance, and Polymorphism—along with concepts like class, object, constructor, and method overloading/overriding Go through the GeeksforGeeks OOPS Concept articles (C++/Java) and rework the example codes and practice questions provided there Focus especially on interview-based questions and output-based problems from GFG to strengthen conceptual clarity", 
    accepted_status : "pending",
  }, 
  { 
    id : 1,
    "title" : "OS Revision", 
    month_name : "January",
    "date" : "2026-0-16", 
    "deadline": "2026-0-17", 
    "content" : "Revise the core OOPS pillars—Encapsulation, Abstraction, Inheritance, and Polymorphism—along with concepts like class, object, constructor, and method overloading/overriding Go through the GeeksforGeeks OOPS Concept articles (C++/Java) and rework the example codes and practice questions provided there Focus especially on interview-based questions and output-based problems from GFG to strengthen conceptual clarity", 
    accepted_status : "pending",
  },
  { 
     id : 2,
    "title" : "OOPS Revision", 
    month_name : "May",
    "date" : "2026-4-29", 
    "deadline" : "2026-4-30", 
    "content" : "Revise the core OOPS pillars—Encapsulation, Abstraction, Inheritance, and Polymorphism—along with concepts like class, object, constructor, and method overloading/overriding Go through the GeeksforGeeks OOPS Concept articles (C++/Java) and rework the example codes and practice questions provided there Focus especially on interview-based questions and output-based problems from GFG to strengthen conceptual clarity", 
    accepted_status : "pending",
  }, 
]);

const updateTask = (id, newStatus) => {
  settask_stat(prevTask =>
    prevTask.map(task =>
      task.id == id ? {...task, accepted_status:newStatus} : task
    )
  )
}

    return <TasksContext.Provider value={{random_emoji,random_color, task_stat, updateTask}}>{children}</TasksContext.Provider>
}
