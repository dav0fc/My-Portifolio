import userData from "../data/user.json";

export default function About() {
  return (
    <section className="text-center p-8">
      <h2 className="text-3xl font-mono font-bold">{userData.name}</h2>
      _____________________________________________

      {userData.phrases.map((phrase, index) => (
        <p key={index} className="text-lg mt-2">
          {phrase}
        </p>
      ))}
    </section>
  );
}
