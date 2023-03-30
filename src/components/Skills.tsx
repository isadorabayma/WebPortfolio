interface CvProps {
  rotate: String;
  z: Number;
  color: String;
}

export function Skills(props: CvProps) {
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
    <div
    className={`transition-all ease-in delay-150 duration-1000 absolute top-0 z-${props.z} drop-shadow-xl hover:drop-shadow-2xl w-[35rem] h-[50rem] m-16  hover:ml-72 ${props.rotate} hover:rotate-0 hover:m-4 ring-1 ring-gray-900/5 ${props.color} hover:z-30`}
    >
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
    </div>
  );
}
