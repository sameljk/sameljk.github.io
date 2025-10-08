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
        },{id: "post-",
        
          title: "",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/2025-10-08-chalkboard-handover/";
          
        },
      },{id: "post-",
        
          title: "",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/2025-10-07-chalkboard-handover/";
          
        },
      },{id: "post-",
        
          title: "",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/2025-06-29-chalkboard-handover/";
          
        },
      },{id: "post-chalkdust-dissertation-prize-2025",
        
          title: "Chalkdust dissertation prize 2025",
        
        description: "This is your opportunity to get your work published as a Chalkdust article.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/chalkdustdissprize/";
          
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
      },{id: "desmos-abc-magnetic-field",
          title: 'ABC magnetic field',
          description: "Field lines in the presence of the Arnold-Beltrami-Childress field.",
          section: "Desmos",handler: () => {
              window.location.href = "/desmos/abc-magnetic-field/";
            },},{id: "desmos-in-cartesian-coordinates",
          title: 'in Cartesian coordinates',
          description: "Good for vector fields in your favourite coordinate system.",
          section: "Desmos",handler: () => {
              window.location.href = "/desmos/cartesian-vector-field/";
            },},{id: "desmos-curl-of-a-field",
          title: 'curl of a field',
          description: "Remember Fleming&#39;s left hand rule?",
          section: "Desmos",handler: () => {
              window.location.href = "/desmos/curl-of-a-field/";
            },},{id: "desmos-cylindrical-switchback-solution",
          title: 'Cylindrical switchback solution',
          description: "A solution for a magnetic switchback that is cylindrically symmetric.",
          section: "Desmos",handler: () => {
              window.location.href = "/desmos/cylindrical-switchback/";
            },},{id: "desmos-in-cylindrical-coordinates",
          title: 'in cylindrical coordinates',
          description: "Good for pipe flows, flow past a cylinder, or anything axisymmetric.",
          section: "Desmos",handler: () => {
              window.location.href = "/desmos/cylindrical-vector-field/";
            },},{id: "desmos-in-spherical-coordinates",
          title: 'in spherical coordinates',
          description: "Good for spherically-defined systems, like planets and stars.",
          section: "Desmos",handler: () => {
              window.location.href = "/desmos/spherical-vector-field/";
            },},{id: "news-released-series-4-of-chalkboard-ultra-listen-here",
          title: 'Released Series 4 of Chalkboard Ultra: listen here.',
          description: "",
          section: "News",},{id: "news-released-series-5-of-chalkboard-ultra-listen-here",
          title: 'Released Series 5 of Chalkboard Ultra: listen here.',
          description: "",
          section: "News",},{id: "news-launched-issue-21-of-chalkdust-magazine",
          title: 'Launched Issue 21 of Chalkdust magazine.',
          description: "",
          section: "News",},{id: "news-accepted-my-offer-to-study-for-a-phd",
          title: 'Accepted my offer to study for a PhD!',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/phd-accept/";
            },},{id: "news-released-series-6-of-chalkboard-ultra-listen-here",
          title: 'Released Series 6 of Chalkboard Ultra: listen here.',
          description: "",
          section: "News",},{id: "projects-chalkboard-ultra-podcast",
          title: 'Chalkboard Ultra podcast',
          description: "A podcast investigating the most interesting concepts, problems and people in all of mathematics.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/chalkboard/";
            },},{id: "projects-chalkdust-magazine",
          title: 'Chalkdust magazine',
          description: "A magazine for the mathematically curious.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/chalkdust/";
            },},{id: "projects-mmath-research-project",
          title: 'MMath research project',
          description: "The Standard Model from a symmetry perspective.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/mmath/";
            },},{id: "projects-linkedin",
          title: 'LinkedIn',
          description: "A quick link to my LinkedIn page.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/redirect/";
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
