import TEMPLATE_ONE_IMG from "../assets/template-1.png";
import TEMPLATE_TWO_IMG from "../assets/template-2.png";
import TEMPLATE_THREE_IMG from "../assets/template-3.png";

export const resumeTemplates = [
  {
    id: "01",
    thumbnailImg: TEMPLATE_ONE_IMG,
    colorPaletteCode: "themeOne",
  },
  {
    id: "02",
    thumbnailImg: TEMPLATE_TWO_IMG,
    colorPaletteCode: "themeTwo",
  },
  {
    id: "03",
    thumbnailImg: TEMPLATE_THREE_IMG,
    colorPaletteCode: "themeThree",
  },
];

export const themeColorPalettes = {
  themeOne: [
    ["#E8FDFF", "#A1F4FD", "#CFEAFF", "#008B0B", "#4A5565"],

    ["#E9FBFB", "#A4E8F7", "#9362DA", "#2AC9A0", "#3D4C5A"],
    ["#F5FAFF", "#D8E0FB", "#92C5F2", "#B57991", "#4B4BC5"],
    ["#F7F9FF", "#AFC6D9", "#A6C6A0", "#33795F", "#2A3A57"],
    ["#FFFFFF", "#D3DFD2", "#F6E0DA", "#F79C91", "#2D3748"],
    ["#FFFFF0", "#F3DFD2", "#B8E0D4", "#34C9F9", "#3B4C48"],

    ["#FFFCDF", "#F3DFD2", "#F0E0DA", "#F7F9C1", "#283344"],
    ["#FFF8F0", "#F6D8F9", "#9CFCF1", "#EAE7BA", "#2B3442"],
    ["#F9DCFF", "#F3DFF0", "#E0CFF9", "#996CFF", "#222222"],
    ["#E3F2FD", "#9CACA9", "#8a8d74", "#1E80E5", "#0D47A1"],
    ["#FFF7F0", "#D3DFD2", "#E8E0DA", "#F79C91", "#3B4C48"],

    ["#F9DCFF", "#F3DFF0", "#E0CFF9", "#996CFF", "#2B3442"],
    ["#E3F2FD", "#9CACA9", "#8a8d74", "#1E80E5", "#0D47A1"],
  ],
};

export const DUMMY_RESUME_DATA = {
  profileInfo: {
    profileImg: null,
    previewUrl: "",
    fullName: "John Darwin",
    designation: "Senior Design Engineer",
    summary:
      "Innovative and detail-oriented design engineer with over 6 years of experience crafting intuitive web applications, scalable component systems, and accessible interfaces across top tech companies.",
  },
  contactInfo: {
    email: "johndarwin@example.com",
    phone: "+1 (123) 456-7890",
    location: "San Francisco, CA, USA",
    linkedin: "https://linkedin.com/in/john-darwin",
    github: "https://github.com/johndarwin",
    website: "https://johndarwin.dev",
  },
  workExperience: [
    {
      company: "Netflix",
      role: "Senior Design Engineer",
      startDate: "Jan 2022",
      endDate: "Present",
      description:
        "Led the design and development of scalable UI frameworks for Netflix Originals, collaborated with cross-functional teams to enhance user experience, and introduced performance-driven design systems.",
    },
    {
      company: "Apple",
      role: "Design Engineer",
      startDate: "Jul 2020",
      endDate: "Dec 2021",
      description:
        "Worked on iOS/macOS design patterns and accessibility-focused UI components. Contributed to system-wide design consistency across Apple web platforms.",
    },
    {
      company: "Amazon",
      role: "Design Engineer",
      startDate: "May 2018",
      endDate: "Jun 2020",
      description:
        "Developed frontend components for Amazon Prime. Integrated ML-powered APIs for personalized content and improved customer engagement metrics.",
    },
    {
      company: "Uber",
      role: "Design Engineer (Contract)",
      startDate: "Jan 2017",
      endDate: "Apr 2018",
      description:
        "Redesigned ride request UI for Uber mobile app. Helped streamline interactive maps and animations for a smoother real-time experience.",
    },
  ],
  education: [
    {
      degree: "B.Sc. in Computer Engineering",
      institution: "Stanford University",
      startDate: "2012",
      endDate: "2016",
    },
  ],
  skills: [
    {name: "JavaScript", progress: 95},
    {name: "React", progress: 95},
    {name: "Web Design", progress: 95},
    {name: "Python", progress: 95},
    {name: "Figma", progress: 95},
  ],
  projects: [
    {
      title: "Smart UI Framework for Netflix Originals",
      description:
        "Built a reusable React component library used across Netflix Originals dashboards with full theme support and responsive design.",
      github: "https://github.com/johndarwin/netflix-ui-kit",
      liveDemo: "https://netflix-ui-kit.johndarwin.dev",
    },
    {
      title: "Accessibility Toolkit for Apple",
      description:
        "Developed an internal tool to automate accessibility testing across Apple’s web apps, integrated into CI/CD pipelines.",
      github: "https://github.com/johndarwin/a11y-checker",
      liveDemo: "https://a11y.johndarwin.dev",
    },
  ],
  certifications: [
    {
      title: "Certified UX Designer",
      issuer: "Nielsen Norman Group",
      year: "2023",
    },
    {
      title: "Meta Front-End Developer",
      issuer: "Meta (Coursera)",
      year: "2022",
    },
    {
      title: "AWS Certified Solutions Architect – Associate",
      issuer: "Amazon Web Services",
      year: "2021",
    },
  ],
  languages: [
    {name: "English", progress: 99},
    {name: "German", progress: 90},
  ],
  interests: [
    "Photography",
    "Digital Illustration",
    "Cycling",
    "Playing the Guitar",
    "DIY Tech Projects",
    "Watching Documentaries & Sci-Fi Films",
  ],
};
