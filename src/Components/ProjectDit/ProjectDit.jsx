import React from "react";
import { useLoaderData } from "react-router-dom";

const ProjectDit = () => {
  const data = useLoaderData();
  console.log(data);
  return (
    <div>
      <h1>Projects</h1>
    </div>
  );
};

export default ProjectDit;
