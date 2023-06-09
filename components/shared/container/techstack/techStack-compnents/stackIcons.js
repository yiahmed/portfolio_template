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
    name: "Laravel",
    icon: "/laravel-dark.svg",
  },
  {
    name: "PHP",
    icon: "vscode-icons:file-type-php",
  },
  {
    name: "MySQL",
    icon: "/mysql.svg",
  },
];

const StackIcons = () => {
  return (
    <>
      <div className="text-[#CCD6F5] grid grid-cols-2 grid-rows-2 gap-4 sm:grid-cols-4 sm:grid-rows-4 md:grid-cols-2 md:grid-rows-2 lg:grid-cols-4 lg:grid-rows-4">
        {icons.map((icon, index) => (
          <div
            key={index}
            className={`flex items-center space-x-3 ${
              index % 2 === 1 ? "pl-12 sm:pl-12 md:pl-24 lg:pl-24" : ""
            }`}
          >
            {icon.icon.endsWith(".svg") ? (
              <img src={icon.icon} alt={icon.name} width={55} />
            ) : (
              <Icon icon={icon.icon} width={55} />
            )}
            <h3>{icon.name}</h3>
          </div>
        ))}
      </div>
    </>
  );
};

export default StackIcons;
