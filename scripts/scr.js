jsondata = `{
    "homepage": {
      "introduction": {
        "name": "Sara Hrnciar",
        "title": "Software Developer",
        "careerGoals": "im so good at coding."
      },
      "profilePicture": "path/to/profile-picture.jpg",
      "quickLinks": {
        "resume": "path/to/resume.pdf",
        "linkedin": "https://www.linkedin.com/iforgot",
        "github": "https://github.com/shrncr"
      },
      "navigationBar": [
        {
          "label": "About Me",
          "link": "/about"
        },
        {
          "label": "Projects",
          "link": "/projects"
        },
        {
          "label": "Contact",
          "link": "/contact"
        }
      ]
    },
    "aboutMe": {
      "biography": "learn abt me",
      "skills": [
        {
          "name": "HTML",
          "proficiency": 90,
          "icon": "path/to/html-icon.png"
        },
        {
          "name": "CSS",
          "proficiency": 80,
          "icon": "path/to/css-icon.png"
        },
        {
          "name": "JavaScript",
          "proficiency": 85,
          "icon": "path/to/js-icon.png"
        }
      ],
      "resumeLink": "path/to/resume.pdf",
      "images": [
        {
          "src": "path/to/image1.jpg",
          "alt": "Description of image 1"
        },
        {
          "src": "path/to/image2.jpg",
          "alt": "Description of image 2"
        }
      ]
    },
    "projects": [
      {
        "title": "Glazer Children's Museum",
        "description": "Developed a web-based application for use in children's museum in downtown Tampa ",
        "technologies": ["HTML", "CSS", "JavaScript", "React", "Node.js", "AWS", "MongoDB"],
        "liveDemo": "https://thelearningproject.vercel.app",
        "codeRepository": "https://github.com/shrncr/gcm",
        "screenshots": [
          {
            "src": "../images/gcm.png",
            "alt": "Screenshot of Project 1"
          }
        ],
        "category": "Web Applications"
      },
      {
        "title": "Pin The Bay",
        "description": "A geoguesser for places around Tampa Bay!",
        "technologies": ["React", "Node.js", "MongoDB"],
        "liveDemo": "https://pinthebay.com",
        "codeRepository": "https://github.com/shrncr/ptb",
        "screenshots": [
          {
            "src": "../images/ptb.png",
            "alt": "Screenshot of Project 2"
          }
        ],
        "category": "Web Dev"
      },
      {
        "title": "NightlyReel",
        "description": "Suggests similar movies/shows within a range of streaming services!",
        "technologies": ["React", "Node.js", "MongoDB"],
        "liveDemo": "https://nightlyreel.com",
        "codeRepository": "https://github.com/shrncr/ptb",
        "screenshots": [
          {
            "src": "../images/nightlyreel.png",
            "alt": "Screenshot of Project 2"
          }
        ],
        "category": "Web Dev"
      }
    ],
    "contact": {
      "contactForm": {
        "fields": [
          {
            "label": "Name",
            "type": "text",
            "required": true
          },
          {
            "label": "Mobile Number",
            "type": "tel",
            "required": false
          },
          {
            "label": "Email",
            "type": "email",
            "required": true
          },
          {
            "label": "Subject",
            "type": "text",
            "required": false
          },
          {
            "label": "Message",
            "type": "textarea",
            "required": true
          }
        ]
      },
      "contactInformation": {
        "email": "your.email@example.com",
        "phoneNumber": "123-456-7890",
        "socialLinks": {
          "linkedin": "https://www.linkedin.com/in/yourprofile",
          "github": "https://github.com/yourprofile"
        }
      },
      "googleMaps": {
        "enabled": false,
        "location": "Your location address"
      }
    }
  }
  `;
data = JSON.parse(jsondata);

    const projectsContainer = document.getElementById('icontain');
    projectsContainer.innerHTML = ''; // Clear any existing content

    // Iterate over each project in the JSON
    data.projects.forEach(project => {
      // Create the project item container
      const projectItem = document.createElement('a');
      projectItem.href = project.liveDemo;
      projectItem.target = "_blank"
      projectItem.className = 'item';
      
      // Create the overlay for images
      const overlay = document.createElement('figure');
      overlay.className = 'overlay';
      const img = document.createElement('img');
      img.src = project.screenshots[0].src; // Use the first screenshot
      img.alt = project.screenshots[0].alt || project.title;
      overlay.appendChild(img);

      // Create the inner hover details
      const innerHover = document.createElement('div');
      innerHover.className = 'innerHover';
      const technologies = document.createElement('span');
      technologies.innerHTML = `<p>Technologies Used:</p><p>${project.technologies.join(', ')}</p>`;
      const description = document.createElement('span');
      description.innerHTML = `<p>Description:</p><p>${project.description}</p>`;
      innerHover.appendChild(technologies);
      innerHover.appendChild(description);

      // Create the title
      const title = document.createElement('p');
      title.className = 'title';
      title.textContent = project.title;

      // Append all elements to the project item
      projectItem.appendChild(overlay);
      projectItem.appendChild(innerHover);
      projectItem.appendChild(title);

      // Append the project item to the projects container
      projectsContainer.appendChild(projectItem);
    });
  
