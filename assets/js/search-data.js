// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-projects",
          title: "projects",
          description: "A growing catelogue of projects that I am working on or have worked on previously.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-blog",
          title: "blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-desmos",
          title: "desmos",
          description: "I make a lot of Desmos files. Here are the ones I&#39;m most proud of. If you have suggestions or improvements, please let me know!",
          section: "Navigation",
          handler: () => {
            window.location.href = "/desmos/";
          },
        },{id: "nav-teaching",
          title: "teaching",
          description: "A page for my teaching and tutoring.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "Here is a web description of my CV. You can read on, or download it as a PDF using the button above.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "post-how-i-like-my-vector-fields",
        
          title: "How I like my vector fields",
        
        description: "Want to know the secrets behind my Desmos files?",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/vector-fields/";
          
        },
      },{id: "post-a-symmetric-universe",
        
          title: "A symmetric universe",
        
        description: "An article I wrote for Chalkdust issue 21.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/symmetry/";
          
        },
      },{id: "post-should-we-write-another-issue",
        
          title: "Should we write another issue?",
        
        description: "A regular I wrote against the Chalkdust team for Chalkdust issue 20.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/debate-20/";
          
        },
      },{id: "post-counting-down-to-doomsday",
        
          title: "Counting down to doomsday",
        
        description: "My pit against Matt Enlow in the Big Internet Math-Off 2024.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/math-off/";
          
        },
      },{id: "post-what-39-s-the-best-way-to-end-a-proof",
        
          title: "What&#39;s the best way to end a proof?",
        
        description: "A regular I wrote against Clare Wallace for Chalkdust issue 19.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/debate-19/";
          
        },
      },{id: "news-released-episode-33-of-chalkboard-ultra-a-random-walk-in-the-park",
          title: 'Released Episode 33 of Chalkboard Ultra: A Random Walk in the Park',
          description: "",
          section: "News",},{id: "news-launched-issue-21-of-chalkdust-magazine",
          title: 'Launched Issue 21 of Chalkdust magazine',
          description: "",
          section: "News",},{id: "news-accepted-my-offer-to-study-for-a-phd",
          title: 'Accepted my offer to study for a PhD!',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/phd-accept/";
            },},{id: "projects-abc-magnetic-field",
          title: 'ABC magnetic field',
          description: "Field lines in the presence of the Arnold-Beltrami-Childress field.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/abc-magnetic-field/";
            },},{id: "projects-chalkboard-ultra-podcast",
          title: 'Chalkboard Ultra podcast',
          description: "A podcast investigating the most interesting concepts, problems and people in all of mathematics.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/chalkboard/";
            },},{id: "projects-chalkdust-magazine",
          title: 'Chalkdust magazine',
          description: "A magazine for the mathematically curious.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/chalkdust/";
            },},{id: "projects-in-cylindrical-coordinates",
          title: 'in cylindrical coordinates',
          description: "Good for pipe flows, flow past a cylinder, or anything axisymmetric.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/cylindrical-vector-field/";
            },},{id: "projects-mmath-research-project",
          title: 'MMath research project',
          description: "The Standard Model from a symmetry perspective.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/mmath/";
            },},{id: "projects-quantum-funk-theory",
          title: 'Quantum Funk Theory',
          description: "Funk fusion.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/qft/";
            },},{id: "projects-linkedin",
          title: 'LinkedIn',
          description: "A quick link to my LinkedIn page.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/redirect/";
            },},{id: "projects-in-spherical-coordinates",
          title: 'in spherical coordinates',
          description: "Good for spherically-defined systems, like planets and stars.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/spherical-vector-field/";
            },},{id: "projects-in-cartesian-coordinates",
          title: 'in Cartesian coordinates',
          description: "Good for vector fields in your favourite coordinate system.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/vector-field/";
            },},{
        id: 'social-bluesky',
        title: 'Bluesky',
        section: 'Socials',
        handler: () => {
          window.open("https://bsky.app/profile/sameljk.bsky.social", "_blank");
        },
      },{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%73%61%6D%75%65%6C.%6B%61%79@%64%75%72%68%61%6D.%61%63.%75%6B", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/sameljk", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/sam-kay", "_blank");
        },
      },{
        id: 'social-spotify',
        title: 'Spotify',
        section: 'Socials',
        handler: () => {
          window.open("https://open.spotify.com/user/31bth3hr37bn5ezxek6yrz3cke2i", "_blank");
        },
      },{
        id: 'social-custom_social',
        title: 'Custom_social',
        section: 'Socials',
        handler: () => {
          window.open("https://www.alberteinstein.com/", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
