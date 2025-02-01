import { Settings, CropRotate, ViewInAr, PieChart, Code, BarChart, CloudOutlined, FavoriteBorder, Public, PersonOutlined, AddLocationAltOutlined, PhoneIphone, EmailOutlined, LinkedIn, GitHub , Instagram, YouTube,} from "@mui/icons-material"

export const navlink = [
  {
    url: "/",
    text: "Home",
  },
  {
    url: "/about",
    text: "About",
  },
  {
    url: "/services",
    text: "Services",
  },
  {
    url: "/portfolio",
    text: "Portfolio",
  },
  {
    url: "/testimonials",
    text: "Testimonials",
  },
  {
    url: "/blog",
    text: "Blog",
  },
  {
    url: "/contact",
    text: "Contact",
  },
]
export const home = [
  {
    text: "HELLO I'M",
    name: "MOHSIN EJAZ",
    post: "FRONTEND DEVELOPER",
    design: "UI / UX DESIGNER",
    desc: "Asalaam-u-Alaikum, i am Mohsin Ejaz doing my Bachelor in Computer Science (Bscs).And i am aspiring Frontend Developer with a passion for creating dynamic and user-friendly web applications",
  },
]
export const about = [
  {
    desc: "I am Mohsin Ejaz, a dedicated Computer Science sstudent and aspiring Frontend Developer with a passion for creating dynamic and user-friendly web applications. I specialize in crafting responsive and interactive user interfaces using modern technologies like HTML, CSS, JavaScript,Bootstrap, and React.I have hands-on experience with modern frontend frameworks and libraries like React.js.",
    desc1: " My goal is to bridge the gap between design and functionality, delivering seamless digital experiences. I am always eager to learn new technologies and take on challenging projects that enhance my problem-solving skills and expand my technical expertise.",
    cover: "./images/my1.png",
  },
]
export const services = [
  {
    id: 1,
    icon: <Settings />,
    title: "Creative Design",
    desc: "Crafting visually appealing and user-friendly designs for engaging digital experiences.",
  },
  {
    id: 2,
    icon: <CropRotate />,
    title: "Clean Code",
    desc: "Writing optimized, well-structured, and maintainable code for high performance and scalability.",
  },
  {
    id: 3,
    icon: <ViewInAr />,
    title: "Responsive Design",
    desc: "Building fully responsive websites for seamless performance across all devices and screens.",
  },
  {
    id: 4,
    icon: <PieChart />,
    title: "Material UI	",
    desc: "Creating modern, elegant, and consistent interfaces using Material UI components.",
  },
  {
    id: 5,
    icon: <Code />,
    title: "Material UI Icons",
    desc: "Enhancing user interaction with sleek and intuitive Material UI icons.",
  },
  {
    id: 6,
    icon: <BarChart />,
    title: "Awesome Support",
    desc: "Providing reliable, timely support and continuous assistance for successful project delivery.",
  },
]
export const project = [
  {
    id: 1,
    icon: <CloudOutlined />,
    num: "20",
    title: "HAPPY CLIENTS",
  },
  {
    id: 2,
    icon: <FavoriteBorder />,
    num: "25",
    title: "PROJECTS COMPELETED",
  },
  {
    id: 3,
    icon: <Public />,
    num: "18",
    title: "FILES DOWNLOADED",
  },
  {
    id: 4,
    icon: <PersonOutlined />,
    num: "4555",
    title: "LINES OF CODE",
  },
]
export const portfolio = [
  {
    id: 1,
    cover: "../images/port/port1.png",
    name: "Brand",
    category: "marketing",

  },
  {
    id: 2,
    cover: "../images/port/port2.png",
    name: "Brand",
    category: "design",

  },
  {
    id: 3,
    cover: "../images/port/port3.png",
    name: "Brand",
    category: "development",

  },
  {
    id: 4,
    cover: "../images/port/port4.png",
    name: "Brand",
    category: "marketing",

  },
  {
    id: 5,
    cover: "../images/port/port5.png",
    name: "Brand",
    category: "design",

  },
  {
    id: 6,
    cover: "../images/port/port6.png",
    name: "Brand",
    category: "development",

  },
]
export const testimonials = [
  {
    id: 1,
    text: "Mohsin Ejaz brings creativity and precision to every project. His eye for design and attention to detail in frontend development have transformed ideas into stunning, user-friendly interfaces. A true professional dedicated to delivering exceptional results.",
    image: "./images/my.png",
    name: "Mohsin Ejaz",
    post: "Front End Developer",
  },
  {
    id: 2,
    text: "Muhammad Hanif is an exceptional frontend developer with a strong grasp of modern web technologies. His innovative solutions and clean code consistently exceed expectations. A reliable team player committed to excellence.",
    image: "./images/Hanif.png",
    name: "Muhammad Hanif",
    post: "Front End Developer",
  },
  {
    id: 3,
    text: "Ghulam Mustafa's expertise in React development is truly impressive. His ability to build dynamic, high-performance web applications with scalable architecture has been a game-changer. An innovative thinker and a valuable asset to any team.",
    image: "./images/Mustafa.png",
    name: "Ghulam Mustafa",
    post: "React Developer",
  },
]

export const blog = [
  {
    id: 1,
    title: "Full Stack Development",
    desc: "Full stack development bridging frontend and backend",
    cover: "./images/blogs/blog1.jpeg",
    link: "https://medium.com/@mohsinejaz734/full-stack-development-bridging-frontend-and-backend-c8c04a256c77",
  },
  {
    id: 2,
    title: "The MERN Stack",
    desc: "A Comprehensive Guide for Modern Web Development",
    cover: "./images/blogs/blog2.png",
    link: "https://medium.com/@mohsinejaz734/the-mern-stack-ec9407b9f11f",
  },
  {
    id: 3,
    title: " React Frontend Developer",
    desc: "Becoming a React Frontend Developer",
    cover: "./images/blogs/blog3.jpeg",
    link: "https://medium.com/@mohsinejaz734/react-frontend-developer-55c43cdff202",
  },
];


export const contact = [
  {
    icon: <AddLocationAltOutlined />,
    text1: "Gilgit Baltistan, Skardu",
    text2: "Tufail Colony Near Mashabrumb Hotel Skardu",
  },
  {
    icon: <PhoneIphone />,
    text1: "03434868545",
    text2: "03554732074",
  },
  {
    icon: <EmailOutlined />,
    text1: "mohsinejaz734@gmail.com",
    text2: "allvideos1324@gmail.com",
  },
]
export const social = [
  {
    icon: <LinkedIn/>,
    link: "https://www.linkedin.com/in/mohsin-ejaz22/",
  },
  {
    icon: <GitHub />,
    link: "https://github.com/mohsin-ejaz22   ",
  },
  {
    icon: <Instagram />,
    link: "https://www.instagram.com/mohsin.ejaz22",
  },
  {
    icon: <YouTube />,
    link: "https://youtube.com/@worldknowledgeacademy?si=8GO-SzSJz-Hem69j",
  },

]

   
