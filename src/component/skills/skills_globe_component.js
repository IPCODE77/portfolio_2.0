import React, { useEffect } from 'react';
import styled from 'styled-components';
import html from "../../image/html.png"; // Importing the image

const ParentDiv = styled.div`
  position: relative;
  width: 800px;  /* Adjusted width */
  height: 800px; /* Adjusted height */
  overflow: hidden; /* Prevents the sphere from spilling out */
  margin-top: -23rem;
`;

const SphereContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform-style: preserve-3d;
  animation: horizontal-rotate 10s linear infinite;
  transform: translate(-50%, -50%); /* Centers the sphere */
`;

const IconContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform-origin: center;
  transform: translate(-50%, -50%);
  text-align: center;
`;

const Tooltip = styled.div`
  position: absolute;
  bottom: 40px;
  left: 50%;
  transform: translateX(-50%);
  padding: 6px 12px;
  background: rgba(0, 0, 0, 0.8);
  color: white;
  font-size: 12px;
  border-radius: 4px;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.3s ease;
  white-space: nowrap;
`;

const Sphere = () => {
  useEffect(() => {
    const skills = [
      { icon: `${html}`, tooltip: 'HTML5' },  // Using image for HTML
      { icon: 'fab fa-css3-alt', tooltip: 'CSS3' },
      { icon: 'fab fa-js-square', tooltip: 'JavaScript' },
      { icon: 'fab fa-react', tooltip: 'React' },
      { icon: 'fab fa-node-js', tooltip: 'Node.js' },
      { icon: 'fab fa-java', tooltip: 'Java' },
      { icon: 'fas fa-database', tooltip: 'SQL' },
      { icon: 'fab fa-python', tooltip: 'Python' },
      { icon: 'fab fa-git', tooltip: 'Git' },
      { icon: 'fab fa-docker', tooltip: 'Docker' },
      { icon: 'fab fa-aws', tooltip: 'AWS' },
      { icon: 'fab fa-angular', tooltip: 'Angular' }
    ];

    const radius = 100;  // Adjusted radius to fit within the parent container
    const sphere = document.getElementById('sphere');

    skills.forEach((skill, index) => {
      const phi = Math.acos(-1 + (2 * index) / skills.length); // Vertical angle
      const theta = Math.sqrt(skills.length * Math.PI) * phi; // Horizontal angle

      const x = radius * Math.cos(theta) * Math.sin(phi);
      const y = radius * Math.sin(theta) * Math.sin(phi);
      const z = radius * Math.cos(phi);

      const iconContainer = document.createElement('div');
      iconContainer.className = 'icon-container';
      iconContainer.style.transform = `translate(-50%, -50%) translate3d(${x}px, ${y}px, ${z}px)`;

      // Check if the icon is an image or font icon and append accordingly
      let icon;
      if (skill.icon.includes('http')) {
        // If it's an image URL (for HTML5 in this case)
        icon = document.createElement('img');
        icon.src = skill.icon;
        icon.alt = skill.tooltip;
        icon.style.width = '40px'; // Adjust the size of the image
        icon.style.height = '40px';
      } else {
        // Else it's a font icon
        icon = document.createElement('i');
        icon.className = skill.icon;
        icon.style.fontSize = '24px'; // Adjust icon size to fit better
      }

      const tooltip = document.createElement('div');
      tooltip.className = 'tooltip';
      tooltip.textContent = skill.tooltip;

      iconContainer.appendChild(icon);
      iconContainer.appendChild(tooltip);
      sphere.appendChild(iconContainer);
    });
  }, []);

  return (
    <SphereContainer id="sphere">
      {/* Icons will be appended here via JavaScript */}
    </SphereContainer>
  );
};

const App = () => {
  return (
    <ParentDiv>
      <Sphere />
    </ParentDiv>
  );
};

export default App;
