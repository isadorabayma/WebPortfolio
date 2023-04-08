export function Skills() {
  const skills = [
    "React",
    "Html",
    "CSS",
    "Node Js",
    "mySQL",
    "MongoDB",
    "Docker",
    "Typescript",
    "JavaScript",
  ];
  return (
      <div className="p-10 w-4/6">
        <p className="p-10 text-2xl m-auto">Skills</p>
        <ul>
          {skills.map((skill) => {
            return (
              <li className="p-1 pt-0 text-lg text-justify w-full">{skill}</li>
            );
          })}
        </ul>
      </div>
  );
}
