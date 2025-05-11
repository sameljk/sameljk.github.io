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
        },{id: "nav-music",
          title: "music",
          description: "A hub for all off my current and past music talent.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/music/";
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
          
            window.location.href = "/blog/2025/2024-05-20-debate-19/";
          
        },
      },{id: "post-should-we-write-another-issue",
        
          title: "Should we write another issue?",
        
        description: "This is a regular I wrote against the _Chalkdust_ team for [_Chalkdust_ issue 20](https://chalkdustmagazine.com/read/issue-20/).",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/debate-20/";
          
        },
      },{id: "post-google-gemini-updates-flash-1-5-gemma-2-and-project-astra",
        
          title: 'Google Gemini updates: Flash 1.5, Gemma 2 and Project Astra <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "We’re sharing updates across our Gemini family of models and a glimpse of Project Astra, our vision for the future of AI assistants.",
        section: "Posts",
        handler: () => {
          
            window.open("https://blog.google/technology/ai/google-gemini-update-flash-ai-assistant-io-2024/", "_blank");
          
        },
      },{id: "post-displaying-external-posts-on-your-al-folio-blog",
        
          title: 'Displaying External Posts on Your al-folio Blog <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://medium.com/@al-folio/displaying-external-posts-on-your-al-folio-blog-b60a1d241a0a?source=rss-17feae71c3c4------2", "_blank");
          
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
