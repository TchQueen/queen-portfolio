import { AboutMeData, Game, GameEngine, LinkImageSource, MediaType, Platform } from "./types";

export const PersonalInfo: AboutMeData = {
  name: "QUEEN AYONOTE-YUSUF",
  role: "GAME DEVELOPER / DESIGNER",
  introduction: "AN ASPIRING GAME DEVELOPER FOCUSED ON STORYTELLING, DESIGN, AND LOTS OF EXPERIMENTATION.",
  description: `Hello and welcome to my Portfolio! My name is Queen and I’m a game developer.
  After taking my first steps into game development, I've found that I greatly enjoy combining art, storytelling, and design to create fun, immersive worlds. I like to tinker with different parts of the process to to shape games from the ground up.
  I'm currently focused on creating small games as I continue to expand my knowledge base. From crafting visual novels in Ren'Py to funny arcade games with Ruby, I hope I'm able to share my ideas with these playable experiences.`,
  image: `${process.env.PUBLIC_URL}/images/Profile.gif`,
  cvUri: `${process.env.PUBLIC_URL}/files/Queen.pdf`,
  links: {
    github: "https://github.com/TchQueen",
    itchIO: "https://maurmischief.itch.io/",
    linkedIn: "https://www.linkedin.com/in/queen-ayonote-yusuf-b3b40a213?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  }
};

export const games: Game[] = [
  {
    name: "PUPPETS",
    description: `Puppets is a brief, atmospheric narrative game exploring control, perspective, and survival. Play as a rat, a cat, or a hidden child route, and see the same alley through three intertwining perspectives.
    I was the main developer, where I wrote the story, designed the pixel art, and built the game in Ren’Py.`,
    genres: ["Visual Novel", "Interactive Fiction", "Psychological Horror"],
    platforms: [Platform.Windows, Platform.MacOs, Platform.Linux],
    engine: GameEngine.RenPy,
    links: [
      { source: LinkImageSource.Github, url: "https://github.com/TchQueen/Puppets" },
      { source: LinkImageSource.ItchIo, url: "https://maurmischief.itch.io/puppets" },
    ],
    media: [
      { source: "/images/games/PUPPETS/Puppets_Screenshot_4.png", type: MediaType.Image },
      { source: "/images/games/PUPPETS/Puppets_Screenshot_3.jpg", type: MediaType.Image },
      { source: "/images/games/PUPPETS/Puppets_Screenshot_1.png", type: MediaType.Image },
      { source: "/images/games/PUPPETS/Puppets_Screenshot_2.png", type: MediaType.Image },
    ],
  },
  {
    name: "FIREFIGHTER VS BUGS",
    description: `A fun arcade game. Built in DragonRuby over the course of a month, the game puts players in the shoes of a scared firefighter avoiding swarms of bugs.
    I was the sole developer, where I focused on creating chaotic, playful mechanics and a fun visual style that makes the game feel both whimsical and unpredictable.`,
    genres: ["Action", "Arcade"],
    platforms: [Platform.Windows, Platform.MacOs, Platform.Linux, Platform.Web],
    engine: GameEngine.DragonRuby,
    links: [
      { source: LinkImageSource.Github, url: "https://github.com/TchQueen/Firefighter-Vs-Bugs" },
      { source: LinkImageSource.ItchIo, url: "https://maurmischief.itch.io/firefighters-vs-bugs" },
    ],
    media: [
<<<<<<< HEAD
      { source: "/images/games/FIREFIGHTER VS BUGS/Firefighter_Screenshot_1.png", type: MediaType.Image },
      { source: "/images/games/FIREFIGHTER VS BUGS/Firefighter_Screenshot_2.gif", type: MediaType.Image },
      { source: "/images/games/FIREFIGHTER VS BUGS/Firefighter_Screenshot_3.png", type: MediaType.Image },
      { source: "/images/games/FIREFIGHTER VS BUGS/Firefighter_Screenshot_4.png", type: MediaType.Image },
=======
      { source: "/images/games/FIREFIGHTER_VS_BUGS/Firefighter_Screenshot_1.png", type: MediaType.Image },
      { source: "/images/games/FIREFIGHTER_VS_BUGS/Firefighter_Screenshot_2.gif", type: MediaType.Image },
      { source: "/images/games/FIREFIGHTER_VS_BUGS/Firefighter_Screenshot_3.png", type: MediaType.Image },
      { source: "/images/games/FIREFIGHTER_VS_BUGS/Firefighter_Screenshot_4.png", type: MediaType.Image },
>>>>>>> origin/main
    ],
  },
  {
    name: "MORROW",
    description: `Morrow is a short, cozy visual novel about a horse and a cat meeting for the first time and sharing their stories.
    I was the main developer, where I handled story writing, art, programming, and music composition. It was built using the Ren’Py engine.`,
    genres: ["Visual Novel", "Interactive Fiction", "Cozy Game"],
    platforms: [Platform.Windows, Platform.MacOs, Platform.Linux],
    engine: GameEngine.RenPy,
    links: [
      { source: LinkImageSource.Github, url: "https://github.com/TchQueen/Morrow" },
      { source: LinkImageSource.ItchIo, url: "https://maurmischief.itch.io/morrow" },
    ],
    media: [
      { source: "/images/games/MORROW/Morrow_Screenshot_4.png", type: MediaType.Image },
      { source: "/images/games/MORROW/Morrow_Screenshot_3.png", type: MediaType.Image },
      { source: "/images/games/MORROW/Morrow_Screenshot_2.png", type: MediaType.Image },
      { source: "/images/games/MORROW/Morrow_Screenshot_1.png", type: MediaType.Image },
    ],
  }
];
