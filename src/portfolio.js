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

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "York College",
      logo: require("./assets/images/ydsLogo.webp"), // Using ydsLogo.webp as placeholder
      subHeader: "BTEC Level 3 Extended Diploma in IT",
      duration: "September 2011 - June 2013",
      desc: "Comprehensive IT education covering software development, networking, and system administration fundamentals.",
      descBullets: [
        "Distinction* in Software Development modules",
        "Merit in Networking and System Administration",
        "Completed final year project on database management systems"
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "AWS/Cloud Infrastructure", //Insert stack or technology you have experience in
      progressPercentage: "95%" //Insert relative proficiency in percentage
    },
    {
      Stack: "DevOps/Automation",
      progressPercentage: "80%"
    },
    {
      Stack: "Storage & Platform Engineering",
      progressPercentage: "95%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Storage DevOps Engineer",
      company: "Aviva",
      companylogo: require("./assets/images/avivaLogo.webp"),
      date: "July 2024 – Present",
      desc: "Leading storage infrastructure automation and optimization initiatives for enterprise-scale insurance operations.",
      descBullets: [
        "Implemented automated storage provisioning using Ansible and PowerShell, reducing deployment time by 70%",
        "Optimized NetApp storage systems, improving performance by 40% and reducing costs by 25%",
        "Designed disaster recovery solutions ensuring 99.99% uptime for critical business applications"
      ]
    },
    {
      role: "CloudOps Engineer",
      company: "Aviva",
      companylogo: require("./assets/images/avivaLogo.webp"),
      date: "January 2023 – July 2024",
      desc: "Managed multi-cloud infrastructure supporting millions of insurance customers across AWS and Azure platforms.",
      descBullets: [
        "Orchestrated cloud migrations for 50+ applications using Terraform and CloudFormation",
        "Reduced infrastructure costs by 35% through right-sizing and automated resource management",
        "Implemented comprehensive monitoring with Prometheus and Grafana, achieving 99.95% uptime"
      ]
    },
    {
      role: "DevOps Engineer",
      company: "Aviva",
      companylogo: require("./assets/images/avivaLogo.webp"),
      date: "July 2021 – January 2023",
      desc: "Developed CI/CD pipelines and infrastructure automation for insurance platform modernization.",
      descBullets: [
        "Built Jenkins pipelines reducing deployment time from hours to minutes",
        "Containerized 30+ legacy applications using Docker and Kubernetes",
        "Established Infrastructure as Code practices using Terraform and Ansible"
      ]
    },
    {
      role: "Technical Operations Specialist",
      company: "Benenden Health",
      companylogo: require("./assets/images/benendenLogo.png"),
      date: "September 2019 – July 2021",
      desc: "Supported healthcare IT infrastructure and application deployment for membership management systems.",
      descBullets: [
        "Maintained critical healthcare applications serving 900,000+ members",
        "Implemented backup and recovery procedures reducing RTO by 60%",
        "Collaborated with development teams to optimize application performance"
      ]
    },
    {
      role: "IT Support Specialist",
      company: "Pitman Training",
      companylogo: require("./assets/images/pitmanLogo.png"),
      date: "March 2017 – September 2019",
      desc: "Provided comprehensive IT support and system administration for educational technology platforms.",
      descBullets: [
        "Managed Windows Server environments and Active Directory for multiple training centers",
        "Resolved 95% of incidents within SLA timeframes",
        "Led migration to cloud-based learning management systems"
      ]
    },
    {
      role: "IT Support Trainee",
      company: "York Data Services",
      companylogo: require("./assets/images/ydsLogo.webp"),
      date: "June 2013 – March 2017",
      desc: "Gained foundational experience in IT support and system administration while developing technical expertise.",
      descBullets: [
        "Provided first-line support for 200+ users across multiple client sites",
        "Assisted with server maintenance and network troubleshooting",
        "Completed Microsoft and CompTIA certifications during training period"
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
  title: "Major Projects & Achievements",
  subtitle: "KEY INFRASTRUCTURE PROJECTS AND CLOUD TRANSFORMATIONS I'VE LED",
  projects: [
    {
      image: require("./assets/images/avivaLogo.webp"),
      projectName: "AWS Multi-Petabyte Storage Migration",
      projectDesc: "Led the migration of 4PB of sensitive financial data to AWS-native services, ensuring FCA compliance and achieving £10M+ annual cost savings through automation and optimization.",
      footerLink: [
        {
          name: "View Achievement",
          url: "https://www.linkedin.com/in/darren-storey/"
        }
      ]
    },
    {
      image: require("./assets/images/benendenLogo.png"),
      projectName: "Azure Migration & Office 365 Transformation",
      projectDesc: "Project workstream lead for comprehensive Azure migration and O365 transformation across healthcare organization, ensuring zero-downtime transitions and GDPR compliance.",
      footerLink: [
        {
          name: "Learn More",
          url: "https://www.linkedin.com/in/darren-storey/"
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
    "Professional achievements, industry recognition, and technical certifications that demonstrate expertise in cloud infrastructure and DevOps.",

  achievementsCards: [
    {
      title: "Aviva Company Award Winner",
      subtitle:
        "Won internal company award for resolving critical global Windows Server 2019 file lock bug, stabilizing high-risk actuarial workloads across all Aviva business units.",
      image: require("./assets/images/avivaLogo.webp"),
      imageAlt: "Aviva Award Logo",
      footerLink: [
        {
          name: "Learn More",
          url: "https://www.linkedin.com/in/darren-storey/"
        }
      ]
    },
    {
      title: "AWS Cloud Specialist",
      subtitle:
        "Extensive hands-on experience with AWS services including S3, FSx, EC2, RDS, Lambda, VPC, and CloudWatch, managing multi-petabyte infrastructure.",
      image: require("./assets/images/facebookLogo.png"), // Using as placeholder - will need AWS logo
      imageAlt: "AWS Certification Logo",
      footerLink: [
        {
          name: "View Portfolio",
          url: "https://github.com/dstorey87"
        }
      ]
    },
    {
      title: "DevOps & Automation Expert",
      subtitle: "Proven track record in CI/CD pipeline automation, infrastructure as code with Terraform, and achieving 60% reduction in operational overhead through PowerShell and Python automation.",
      image: require("./assets/images/facebookLogo.png"), // Using as placeholder
      imageAlt: "DevOps Excellence Logo",
      footerLink: [
        {name: "GitHub Profile", url: "https://github.com/dstorey87"},
        {
          name: "LinkedIn Profile",
          url: "https://www.linkedin.com/in/darren-storey/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Technical Articles & Insights",
  subtitle:
    "Sharing knowledge and insights from 12+ years of experience in cloud infrastructure, DevOps automation, and platform engineering.",
  displayMediumBlogs: "false", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://www.linkedin.com/in/darren-storey/",
      title: "AWS Multi-Petabyte Storage Migration: Lessons Learned",
      description:
        "Key insights from migrating 4PB of sensitive financial data to AWS-native services while maintaining FCA compliance and achieving significant cost savings."
    },
    {
      url: "https://www.linkedin.com/in/darren-storey/",
      title: "DevOps Transformation in Regulated Environments",
      description:
        "How we implemented CI/CD pipelines and infrastructure automation in highly regulated financial services while meeting GDPR and ISO 27001 requirements."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS & PRESENTATIONS",
  subtitle: emoji(
    "SHARING EXPERTISE IN CLOUD INFRASTRUCTURE AND DEVOPS TRANSFORMATION 🎙️"
  ),

  talks: [
    {
      title: "AWS Storage Optimization Strategies",
      subtitle: "Internal presentation on achieving £10M+ annual cost savings",
      slides_url: "https://www.linkedin.com/in/darren-storey/",
      event_url: "https://www.linkedin.com/in/darren-storey/"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast & Interviews 🎙️"),
  subtitle: "DISCUSSING CLOUD INFRASTRUCTURE AND DEVOPS TRANSFORMATION",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    // "https://anchor.fm/codevcast/embed/episodes/DevStory---Darren-Storey-DevOps-Engineer-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
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

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

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
