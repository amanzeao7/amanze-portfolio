export default function handler(req, res) {
  const jokes = [
    "Why do programmers prefer dark mode? Because light attracts bugs!",
    "Why do Java developers wear glasses? Because they don’t C#.",
    "I told my computer I needed a break, and it said: 'No problem, I’ll go to sleep.'"
  ];
  const randomJoke = jokes[Math.floor(Math.random() * jokes.length)];
  res.status(200).json({ joke: randomJoke });
}
