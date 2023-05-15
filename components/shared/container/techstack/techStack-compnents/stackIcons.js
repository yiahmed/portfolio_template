import React from "react";
import { Icon } from "@iconify/react";

const icons = [
  {
    name: "React",
    icon: "vscode-icons:file-type-reactjs",
  },
  {
    name: "Next.js",
    icon: "vscode-icons:file-type-next",
  },
  {
    name: "JavaScript",
    icon: "vscode-icons:file-type-js-official",
  },
  {
    name: "TypeScript",
    icon: "vscode-icons:file-type-typescript-official",
  },
  {
    name: "Tailwind CSS",
    icon: "vscode-icons:file-type-tailwind",
  },
  {
    name: "HTML",
    icon: "vscode-icons:file-type-html",
  },
  {
    name: "CSS",
    icon: "vscode-icons:file-type-css",
  },
  {
    name: "Git",
    icon: "vscode-icons:file-type-git",
  },
  {
    name: "PostgreSQL",
    icon: "vscode-icons:file-type-pgsql",
  },
  {
    name: "Ruby",
    icon: "vscode-icons:file-type-ruby",
  },
  {
    name: "Rails",
    icon: "/rails.svg",
  },
  {
    name: "Jest",
    icon: "vscode-icons:file-type-jest",
  },
  {
    name: "Material-UI",
    icon: "/material-ui.svg",
  },
  {
    name: "Sass",
    icon: "/sass.svg",
  },
];

const StackIcons = () => {
  return (
    <>
      <div className="text-white grid grid-cols-2 gap-4">
        {icons.map((icon, index) => (
          <div
            key={index}
            className={`flex items-center space-x-3 ${
              index % 2 === 1 ? "pl-24" : ""
            }`}
          >
            {icon.icon.endsWith(".svg") ? (
              <img src={icon.icon} alt={icon.name} width={35} />
            ) : (
              <Icon icon={icon.icon} width={35} />
            )}
            <h3>{icon.name}</h3>
          </div>
        ))}
      </div>
    </>
  );
};

export default StackIcons;


