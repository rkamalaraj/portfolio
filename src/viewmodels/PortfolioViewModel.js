import { useState, useEffect } from 'react';

// Portfolio Data Model
export const portfolioData = {
  personalInfo: {
    name: 'Raika Kamalaraj',
    location: ['Boston, MA', 'Rochester, NY'],
    email: 'rsk8463@rit.edu',
    linkedin: 'https://www.linkedin.com/in/raika-kamalaraj/',
    title: 'Web & Mobile Computing Student',
    school: 'RIT',
  },

  about: {
    short: `Hello! I'm a third-year Web & Mobile Computing student at RIT who loves bringing ideas to life in creative and organized ways. I've always enjoyed making things whether that's designing interfaces, structuring projects, or turning a small idea into something thought-out and intentional.`,
    full: `Hi again! My name is Raika and I am constantly drawing inspiration from the world around me. Since I was a kid, I have loved travelling. This is an interest my parents also share so I have been across the globe thanks to them. I was also able to study abroad during college in Croatia, which allowed me to grow and learn how to pursue this dream independently.`,
    hobbies: ['scrapbooking', 'reading', 'photography', 'clay crafting'],
    funFact: "I've been to 20 countries!",
  },

  recentActivities: [
    {
      id: 1,
      title: 'Draeger',
      subtitle: 'Product Qualifications Intern',
      period: 'May 2025 - August 2025',
      icon: 'lightbulb',
      description: 'Throughout these 3 months, I learned the importance of automated testing. Most of my time here was dedicated to using Draeger\'s new internal testing application to transferring "Hotfix" tests used for patches into automated sequences, developing new sequences for the testing application, and performing regression testing using automation for a few features on the Infinity Acute Care System(IACS) patient monitor.',
      imagePlaceholder: 'images/draeger.jpg',
    },
    {
      id: 2,
      title: 'Take Back the Night',
      subtitle: 'Willow Chairman',
      period: 'Apr 2025 - Oct 2025',
      icon: 'star',
      description: 'Take Back the Night is a global movement dedicated to ending sexual violence worldwide. At RIT, we were able to hold a campus-wide event to show solidarity with survivors and to give students awareness of on and off-campus resources available to them. We were also able to raise $429 for the Take Back the Night organization.',
      imagePlaceholder: 'images/tbtn.jpg',
    },
    {
      id: 3,
      title: 'ASL App',
      subtitle: 'Personal Project',
      period: 'Aug 2025 - Present',
      icon: 'phone',
      description: 'In the early months of 2025, my sorority was having a social disconnect between our hearing and deaf/hard of hearing members. We tried ASL apps that were available on the market and nothing was able to meet everyone\'s needs. So throughout this year, I have been working on an app that is concise and intuitive.',
      imagePlaceholder: 'images/asl-app.jpg',
    },
  ],

  education: {
    school: 'Rochester Institute of Technology (RIT)',
    degree: 'Bachelor of Science (BS) in Web and Mobile Computing',
    graduation: 'Expected Dec 2026',
    gpa: '3.1',
    deansList: ['Fall 2024', 'Fall 2025'],
  },

  experiences: [
    {
      id: 'draeger',
      company: 'Draeger',
      role: 'Product Qualifications Intern',
      period: 'May 2025 - Aug 2025',
      location: 'Andover, MA',
      responsibilities: [
        'Performed regression testing for VG10.0 on Infinity Acute Care System(IACS) patient monitor',
        'Developed and executed automated test sequences to improve Dräger\'s internal testing application',
        'Transferred manual tests into automated sequences for "Hotfix" tests used after software patches',
      ],
      skills: ['Automated Software Testing', 'Jira', 'Bitbucket', 'Confluence', 'Microsoft Office'],
      favoriteMemory: 'Monthly team meetings to learn more about the company and what everyone is working on.',
      imagePlaceholder: 'images/experience/draeger.jpg',
    },
    {
      id: 'asa',
      company: 'Alpha Sigma Alpha',
      role: 'External Recruitment Director, Senior CPC Delegate, Willow Chairman',
      period: 'Sept 2024 - Present',
      location: 'Rochester, NY',
      responsibilities: [
        'Organized a campus-wide awareness event supporting survivors of domestic violence',
        'Raised hundreds of dollars for the Take Back the Night Foundation through outreach and fundraising',
        'Connected with potential new members and facilitated informational meetings for them',
        'Communicated information from the College Panhellenic Council to my chapter regarding important deadlines, recruitment restructurings, and other necessary information',
        'In charge of "Continuous Open Bidding" style of recruitment',
      ],
      skills: ['Communication', 'Leadership of a committee', 'Organization', 'Commitment'],
      favoriteMemory: 'Welcoming everyone to our Take Back the Night event and watching all our hard work pay off!',
      imagePlaceholder: 'images/experience/asa.jpg',
    },
    {
      id: 'abercrombie',
      company: 'Abercrombie & Fitch',
      role: 'Store Associate',
      period: 'May 2024 - Nov 2024',
      location: 'Nashua, NH',
      responsibilities: [
        'Ensured sales floor and merchandise were neatly organized and assisted customers',
        'Effectively managed customer transactions and purchases',
      ],
      skills: ['Customer Service', 'Retail Operations', 'Team Collaboration'],
      favoriteMemory: '',
      imagePlaceholder: 'images/experience/abercrombie.jpg',
    },
  ],

  projects: [
    {
      id: 'asl-app',
      title: 'ASL App',
      subtitle: 'Making an app for users to learn ASL through lessons and assignments',
      period: 'August 2025 - Present',
      description: 'Designed an interactive ASL learning app prototype in Figma and developed the front-end in Swift using clean architecture and best software patterns and principles. Integrated backend database using Firebase Firestore to organize and store data.',
      skills: ['Swift', 'SwiftUI', 'Figma'],
      imagePlaceholder: 'images/projects/asl-app.jpg',
      projectLink: '',
      githubLink: '',
    },
    {
      id: 'mentor-match',
      title: 'MentorMatch',
      subtitle: 'Student mentorship platform',
      period: 'Sept 2025 - Dec 2025',
      description: 'Designed MentorMatch, a student mentorship platform addressing social integration at RIT. Applied user-centered design from research through testing, creating intuitive matching interfaces validated through multi-participant usability studies.',
      details: [
        'Conducted user research through interviews, focus groups, and heuristic evaluations, creating personas and journey maps for three student archetypes',
        'Designed high-fidelity Figma prototypes and performed usability testing, identifying 10 key improvements to navigation, filtering, and information architecture',
      ],
      skills: ['Design process', 'Figma', 'Usability Testing', 'Loveable'],
      imagePlaceholder: 'images/projects/mentor-match.jpg',
      projectLink: '',
      githubLink: '',
    },
    {
      id: 'wander-rise',
      title: 'WanderRise',
      subtitle: 'Travel planning application',
      period: 'Nov 2025 - Dec 2025',
      description: 'This application design allows for a traveller to have a lot of flexibility when planning vacations in terms of the experiences they do, and planning on the go.',
      details: [
        'Used good design principles to create an innovative interface designed with all travellers in mind',
        'Filters experiences by the "mood" of the user. Allows for scheduling activities ahead or day-of through application',
      ],
      skills: ['Figma'],
      imagePlaceholder: 'images/projects/wander-rise.jpg',
      projectLink: '',
      githubLink: '',
    },
    {
      id: 'rit-mock',
      title: 'RIT Mock Site',
      subtitle: 'Interactive web application for IST Department',
      period: 'Mar 2025 - May 2025',
      description: 'Delivered an interactive web application displaying IST Department information across multiple data sources with enhanced user experience through modern UI components and responsive design.',
      details: [
        'In the first iteration, created an interactive website for the information technology department using React and front-end technologies such as an accordion interface, scrollable data tables, modal dialogs with pagination, and a faculty directory',
        'In the second iteration, I made a full stack web application using ASP.NET MVC framework with jQuery plug-ins',
      ],
      skills: ['React.js', 'RESTful API Integration', 'MaterialUI', 'ASP.NET MVC(C#)', 'jQuery', 'Bootstrap'],
      imagePlaceholder: 'images/projects/rit-mock.jpg',
      projectLink: '',
      githubLink: '',
    },
    {
      id: 'clutter-closet',
      title: 'Clutter Closet',
      subtitle: 'E-commerce outfit builder',
      period: 'Jan 2025 - Feb 2025',
      description: 'Designed a website for an imaginary brand, "Clutter Closet," where users can create and purchase outfits. Users select options for shirts, pants, and shoes through dropdown menus, then proceed to checkout.',
      details: [
        'Implemented MVC architecture to enhance website organization, functionality, and maintainability',
        'Used JavaScript to add checkout validation and dynamically update item images in dropdown menus for an improved user experience',
      ],
      skills: ['MVC', 'Javascript', 'HTML', 'CSS'],
      imagePlaceholder: 'images/projects/clutter-closet.jpg',
      projectLink: '',
      githubLink: '',
    },
    {
      id: 'nimbus',
      title: 'Nimbus',
      subtitle: 'Smart earbuds noise-cancelling app',
      period: 'Sept 2024 - Dec 2024',
      description: 'Collaborated with a team to develop an app for earbuds to change the noise-cancelling ability based on the user\'s needs and environment.',
      details: [
        'Conducted user research by collecting data, creating personas, and developing storyboards to define the target audience',
        'Performed benchmarking and usability testing, analyzing feedback to refine and improve the app prototype across iterations',
      ],
      skills: ['Design process', 'Figma', 'usability testing'],
      imagePlaceholder: 'images/projects/nimbus.jpg',
      projectLink: '',
      githubLink: '',
    },
  ],
};

// ViewModel Hook
export const usePortfolioViewModel = () => {
  const [data] = useState(portfolioData);
  const [loading, setLoading] = useState(false);

  // Future: Can add data fetching logic here
  useEffect(() => {
    // Simulating data load
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);

  return {
    data,
    loading,
  };
};

export default usePortfolioViewModel;
