/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/darrenAvatar.json"; // Custom avatar animation with hoodie, jeans and dog

// Illustration
const illustration = {
  animated: true // Set to false to use static SVG illustrations instead of Lottie animations
};

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const greeting = {
  username: "Darren Storey",
  title: "CloudOps, Storage & Automation Specialist",
  subTitle: emoji(
    "Award-winning engineer with 12 years in IT delivering multi-petabyte AWS, FinOps, and platform automation for FTSE 100 and blue-chip firms — 5+ years remote, £10M+ saved annually, and known for high-uptime, secure, and cost-efficient cloud estates."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/dstorey87",
  linkedin: "https://www.linkedin.com/in/darren-storey/",
  gmail: "darrenstorey87@gmail.com",
  facebook: "https://www.facebook.com/DarrenStorey87",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "Core Expertise & Technologies",
  subTitle:
    "AWARD-WINNING DEVOPS & CLOUDOPS SPECIALIST WITH DEEP AWS EXPERTISE",
  skills: [
    emoji(
      "☁️ Architect and manage multi-petabyte AWS cloud infrastructure with S3, FSx, EC2, RDS, Lambda, and VPC"
    ),
    emoji(
      "🔧 Design and implement CI/CD pipelines with XL Release, Jenkins, Terraform, and automated compliance gates"
    ),
    emoji(
      "🛡️ Deliver secure, compliant cloud solutions meeting FCA, GDPR, and ISO 27001 standards"
    ),
    emoji(
      "💰 Drive £10M+ annual cost savings through FinOps optimization and automated resource management"
    ),
    emoji(
      "🚀 Lead DevOps transformation, incident response, and 24/7 platform operations for critical systems"
    ),
    emoji(
      "👥 Mentor teams, build self-service tooling, and champion DevOps culture across organizations"
    ),
    emoji(
      "🏗️ Build and maintain hybrid Windows/Linux environments with automated provisioning, patching, and disaster recovery"
    ),
    emoji(
      "📊 Implement observability and monitoring solutions using CloudWatch, DataDog, and custom health probes"
    ),
    emoji(
      "🔄 Orchestrate blue/green deployments, canary releases, and automated rollback strategies across environments"
    ),
    emoji(
      "⚡ Automate operational workflows using PowerShell, Python, and Groovy reducing manual overhead by 60%"
    ),
    emoji(
      "🎯 Ensure business continuity for critical financial systems through proactive capacity planning and SLA management"
    ),
    emoji(
      "📋 Lead major incident response, root cause analysis, and post-mortem processes as single point of contact"
    ),
    emoji(
      "🌍 Support global, distributed teams with comprehensive documentation, runbooks, and knowledge transfer programs"
    ),
    emoji(
      "💡 Drive innovation through proof-of-concepts, technology evaluation, and strategic cloud adoption roadmaps"
    ),
    emoji(
      "🔐 Maintain enterprise security posture with access controls, compliance auditing, and vulnerability management"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    // Cloud Platforms - Primary Focus
    {
      skillName: "AWS",
      fontAwesomeClassname: "fab fa-aws",
      style: {color: "#FF9900"}
    },
    {
      skillName: "Azure",
      fontAwesomeClassname: "fab fa-microsoft",
      style: {color: "#0078D4"}
    },

    // Infrastructure as Code
    {
      skillName: "Terraform",
      fontAwesomeClassname: "fas fa-code-branch",
      style: {color: "#623CE4"}
    },
    {
      skillName: "Puppet",
      fontAwesomeClassname: "fas fa-server",
      style: {color: "#FFAE1A"}
    },

    // CI/CD & DevOps
    {
      skillName: "Jenkins",
      fontAwesomeClassname: "fas fa-cogs",
      style: {color: "#D33833"}
    },
    {
      skillName: "Git",
      fontAwesomeClassname: "fab fa-git-alt",
      style: {color: "#F05032"}
    },
    {
      skillName: "Docker",
      fontAwesomeClassname: "fab fa-docker",
      style: {color: "#2496ED"}
    },

    // Programming & Scripting
    {
      skillName: "PowerShell",
      fontAwesomeClassname: "fas fa-terminal",
      style: {color: "#012456"}
    },
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python",
      style: {color: "#3776AB"}
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js",
      style: {color: "#F7DF1E"}
    },

    // Databases & Storage
    {
      skillName: "SQL",
      fontAwesomeClassname: "fas fa-database",
      style: {color: "#336791"}
    },
    {
      skillName: "S3",
      fontAwesomeClassname: "fas fa-cloud",
      style: {color: "#FF9900"}
    },

    // Monitoring & Security
    {
      skillName: "CloudWatch",
      fontAwesomeClassname: "fas fa-chart-line",
      style: {color: "#FF9900"}
    },
    {
      skillName: "Security",
      fontAwesomeClassname: "fas fa-shield-alt",
      style: {color: "#28A745"}
    },

    // Networking
    {
      skillName: "VPC",
      fontAwesomeClassname: "fas fa-network-wired",
      style: {color: "#FF9900"}
    },
    {
      skillName: "Linux",
      fontAwesomeClassname: "fab fa-linux",
      style: {color: "#FCC624"}
    },
    {
      skillName: "Windows",
      fontAwesomeClassname: "fab fa-windows",
      style: {color: "#0078D6"}
    },

    // Additional Tools
    {
      skillName: "ServiceNow",
      fontAwesomeClassname: "fas fa-ticket-alt",
      style: {color: "#62D84E"}
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Harvard University",
      logo: require("./assets/images/harvardLogo.png"),
      subHeader: "Master of Science in Computer Science",
      duration: "September 2017 - April 2019",
      desc: "Participated in the research of XXX and published 3 papers.",
      descBullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]
    },
    {
      schoolName: "Stanford University",
      logo: require("./assets/images/stanfordLogo.png"),
      subHeader: "Bachelor of Science in Computer Science",
      duration: "September 2013 - April 2017",
      desc: "Ranked top 10% in the program. Took courses about Software Engineering, Web Security, Operating Systems, ...",
      descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Storage DevOps & CloudOps Engineer (Remote)",
      company: "Aviva",
      companylogo: require("./assets/images/avivaLogo.webp"),
      date: "May 2024 – Present (8 months)",
      location: "Remote, UK & Global Teams",
      desc: "Led DevOps transformation in secure actuarial clean room, architecting AWS-first multi-tenant infrastructure serving £10M+ annual cost savings through automation and optimization.",
      descBullets: [
        "🏗️ Architected multi-petabyte AWS infrastructure (S3, FSx, EC2, RDS, Lambda, VPC) with Windows DFS, Linux systems, and hybrid file architectures ensuring FCA, GDPR & ISO 27001 compliance",
        "🔄 Automated end-to-end release pipelines using XebiaLabs XL Release, Jenkins, Azure DevOps, Git, and Stash with ServiceNow approval gates, eliminating manual maintenance windows",
        "📦 Orchestrated blue/green and canary deployments via Terraform and Puppet modules with drift detection, environment tagging, and compliance controls",
        "⚡ Automated tenancy provisioning, patching, and DR simulations using PowerShell, Groovy, Python reducing operational overhead by 60%",
        "🛡️ Managed 24/7 on-call and major-incident response as Storage SME, leading root-cause analysis, forensic logging, and post-mortems with <5 min MTTR",
        "📊 Implemented observability fabric using CloudWatch metrics, custom health probes, and DataDog dashboards driving automated scaling actions",
        "💰 Drove £10M+ annual cost savings via storage tiering, right-sizing, and workload optimization collaborating with finance and procurement teams",
        "🚀 Migrated 4PB of sensitive data to AWS-native services, coordinating with AWS Enterprise Support for DR validation and rollback planning"
      ],
      technologies: [
        "AWS",
        "Terraform",
        "Jenkins",
        "XL Release",
        "PowerShell",
        "Python",
        "ServiceNow",
        "CloudWatch",
        "S3",
        "FSx",
        "EC2",
        "RDS",
        "Lambda"
      ]
    },
    {
      role: "Storage SME & Technical Analyst (Remote)",
      company: "Aviva",
      companylogo: require("./assets/images/avivaLogo.webp"),
      date: "June 2021 – May 2024 (2 years 11 months)",
      location: "Remote, UK & Global Teams",
      desc: "Principal SME for AWS storage infrastructure in secure actuarial clean room, supporting multi-petabyte workloads and winning company award for resolving critical Windows Server 2019 file lock bug.",
      descBullets: [
        "🏆 Resolved global Windows Server 2019 file lock bug, winning internal company award and stabilizing high-risk actuarial workloads across all Aviva business units",
        "☁️ Managed multi-petabyte AWS storage infrastructure (S3, FSx, EBS) supporting regulated SaaS and financial platforms in production and preproduction environments",
        "🔍 Led Root Cause Analysis for major incidents as single point of contact during platform crises, coordinating technical recovery and stakeholder communications",
        "📈 Delivered legacy system migrations, replatforming 4PB of sensitive financial data into AWS-native services maintaining 99.9% uptime and data integrity",
        "💡 Automated critical operations using PowerShell, Groovy, and Python including backup lifecycle, tenancy management, AMI generation, and access controls",
        "🔒 Maintained platform security and compliance with FCA, GDPR, and ISO 27001 operating in heavily regulated actuarial compute environment",
        "📋 Built self-service runbooks and mentored 6-person offshore support team through shadow shifts and knowledge transfers",
        "🎯 Ensured Prophet and actuarial tools remained operational for quarterly/annual financial reporting through proactive health checks and capacity planning"
      ],
      technologies: [
        "AWS",
        "PowerShell",
        "Groovy",
        "Python",
        "S3",
        "FSx",
        "EBS",
        "CloudWatch",
        "ServiceNow",
        "VMware",
        "Windows Server"
      ]
    },
    {
      role: "Technical Engineer",
      company: "Benenden Health",
      companylogo: require("./assets/images/benendenLogo.webp"),
      date: "October 2017 – July 2019 (1 year 9 months)",
      location: "York, UK",
      desc: "Project workstream lead for Azure migration and Office 365 transformation, supporting secure data transitions and hybrid cloud operations for healthcare organization.",
      descBullets: [
        "🌐 Led Azure migration projects and Active Directory transformation initiatives ensuring seamless transition to cloud infrastructure",
        "☁️ Administered Azure, Office 365, VMware, and Windows Server environments supporting critical healthcare operations",
        "🔧 Deployed and configured Cisco switch and wireless network infrastructure with comprehensive DR operations for multi-site environments",
        "📚 Delivered internal training programs, O365 best practices, and security awareness education ensuring GDPR compliance",
        "🛡️ Managed technical documentation, process improvement initiatives, and security compliance frameworks (GDPR, ITIL)"
      ],
      technologies: [
        "Azure",
        "Office 365",
        "VMware",
        "Windows Server",
        "Cisco",
        "Active Directory",
        "GDPR",
        "ITIL"
      ]
    },
    {
      role: "Systems Administrator",
      company: "Pitman Training Group",
      companylogo: require("./assets/images/pitmanLogo.webp"),
      date: "April 2017 – September 2017 (6 months)",
      location: "Wetherby, UK",
      desc: "Managed Office 365 and Azure infrastructure across 50+ global franchises, implementing automation and security policies for distributed education network.",
      descBullets: [
        "🌍 Managed Office 365 and Azure across 50+ global franchises ensuring consistent performance and 99.5% availability",
        "⚙️ Automated deployment and provisioning tasks using PowerShell scripting, reducing manual effort by 40% and improving configuration consistency",
        "📊 Monitored service health via Microsoft 365 admin center and Azure activity logs, maintaining rapid response to performance issues",
        "🔐 Enforced security policies including password rotation, group permissions, and audit logging meeting GDPR compliance standards",
        "💼 Supported Microsoft Dynamics CRM 2016 integration with Azure AD and comprehensive user access governance"
      ],
      technologies: [
        "Office 365",
        "Azure",
        "PowerShell",
        "Microsoft Dynamics CRM",
        "Azure AD",
        "GDPR"
      ]
    },
    {
      role: "IT Network Engineer",
      company: "York Data Services",
      companylogo: require("./assets/images/ydsLogo.webp"),
      date: "September 2015 – April 2017 (1 year 7 months)",
      location: "York, UK",
      desc: "Delivered full-lifecycle network and IT solutions for regional businesses, from structured cabling to cloud migrations and managed services.",
      descBullets: [
        "🏗️ Designed, built, and managed secure multi-site business networks including broadband/fiber rollout, VDSL, leased lines, and VPNs",
        "📧 Administered and migrated Microsoft Exchange and Office 365 environments for dozens of clients ensuring zero-downtime transitions",
        "🌐 Provisioned domains, DNS, VPNs, remote desktop, and cloud services enabling digital transformation for growing businesses",
        "🏇 Provided critical support for major events including York Racecourse, ensuring high-availability infrastructure during peak operations",
        "💾 Supported Windows Server, SQL, VMware, VEEAM, Cisco, and Juniper environments maintaining business continuity and disaster recovery"
      ],
      technologies: [
        "Windows Server",
        "Office 365",
        "Exchange",
        "VMware",
        "VEEAM",
        "Cisco",
        "Juniper",
        "SQL Server"
      ]
    },
    {
      role: "IT Support Trainee",
      company: "STEM Learning",
      companylogo: require("./assets/images/stemLogo.webp"),
      date: "April 2013 – August 2015 (2 years 4 months)",
      location: "York, UK",
      desc: "Supported multi-platform STEM education environments and cloud migrations while developing expertise in virtualization and mobile device management.",
      descBullets: [
        "💻 Supported staff and delegates on Microsoft, Apple, and Android platforms including Office 365 and cloud-based services",
        "🖥️ Managed ESXi virtualization, backup systems, and iOS MDM coordinating seamless O365 migrations",
        "📖 Delivered comprehensive user training, technical documentation, and onboarding support for cloud and remote services"
      ],
      technologies: [
        "Office 365",
        "ESXi",
        "iOS MDM",
        "Microsoft",
        "Apple",
        "Android"
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: true // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Ready to discuss DevOps transformation or cloud optimization? Let's connect and explore opportunities.",
  number: "+44 7838 652859",
  email_address: "darrenstorey87@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
