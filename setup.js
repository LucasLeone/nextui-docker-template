const fs = require("fs");
const path = require("path");

const messages = `
Success! Created your-project-name at your-project-path
Inside that directory, you can run several commands:

  docker compose -f docker-compose.yml build
    Generate the image

  docker compose -f docker-compose.yml up
    Up the container in localhost:3000/

We suggest that you begin by typing:

  cd your-project-name
  docker compose -f docker-compose.yml build
`;

// Replace placeholders with actual project name and path
const projectName = path.basename(process.cwd());
const projectPath = process.cwd();
const finalMessage = messages
  .replace(/your-project-name/g, projectName)
  .replace(/your-project-path/g, projectPath);

console.log(finalMessage);