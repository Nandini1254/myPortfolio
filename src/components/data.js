// Skills Icons
import htmlIcon from "../images/html.png";
import cssIcon from "../images/css.png";
import reactIcon from "../images/react.png";
import jsIcon from "../images/js.png";
import CIcon from "../images/c-.png";
import BootstrapIcon from "../images/bootstrap.png";
import AntIcon from "../images/ant.png";
import PythonIcon from "../images/python.png";
import JavaIcon from "../images/java.png";
import MysQlIcon from "../images/mySql.png";
import MongoDbIcon from "../images/mongoDb.png";
import NodeJsIcon from "../images/node-js.png";

export default {
  //Contact Email
  contact: {
    contactEmail: "nandinipanchani@gmail.com",
    mobileNo: "9328003668",
    gitHub: "https://github.com/Nandini1254",
    faceBook: "",
    instaGram: "",
    linkDin: "",
  },
  // End Header Details -----------------------

  // Work Section ------------------------
  projects: [
    {
      title: "Online food delivery website", //Project Title - Add Your Project Title Here
      para: "It's like zomato application..I have done this project using django,Html,css,and bootstrap template.for database I used mysql local server.",
      //Project Image - Add Your Project Image Here
      imageSrc: "",
      //Project URL - Add Your Project Url Here
      url: "https://github.com/Nandini1254/food-deliverySystem",
    },
    {
      title: "Online Votig System", //Project Title - Add Your Project Title Here
      para: "It's a website where any can host voting and conducting voting within timeline... I have used PHP,HTml,css and bootstap template and database mysql. ",
      //Project Image - Add Your Project Image Here
      imageSrc: "",
      //Project URL - Add Your Project Url Here
      url: "https://github.com/Nandini1254/online-voting-system",
    },
    {
      title: "E-commerce Website", //Project Title - Add Your Project Title Here
      para: "I made this during learning React and Redux on codeacademy..It's just frontend using react.",
      //Project Image - Add Your Project Image Here
      imageSrc: "",
      //Project URL - Add Your Project Url Here
      url: "https://github.com/Nandini1254/e-commerce-react",
    },
    {
      title: "Online Resume Builder", //Project Title - Add Your Project Title Here
      para: "In this Project I have done part of frontend and linking of data in .net core and I have also learnt that how MVC work in that with EF core.",
      //Project Image - Add Your Project Image Here
      imageSrc: "",
      //Project URL - Add Your Project Url Here
      url: "https://github.com/Nandini1254/WDDN_DotNetCore_Project_CE033_CE096_CE129",
    },
    {
      title: "Online Art gallery", //Project Title - Add Your Project Title Here
      para: "I made this website inspiring by my sister who need this type website for selling her paintings.I have used React,NodeJs ,ExpresJs,and Mysql. It's MERN stack application", //Project Image - Add Your Project Image Here
      imageSrc: "",
      //Project URL - Add Your Project Url Here
      url: "",
    },
  ],

  // End Work Section -----------------------

  // Skills Section ---------------

  //   Import Icons from the top and link it here

  skills: {
    languages: [
      {
        name: "Html",
        img: htmlIcon,
      },
      {
        name: "Css3",
        img: cssIcon,
      },
      {
        name: "Javascript",
        img: jsIcon,
      },
      {
        name: "C++",
        img: CIcon,
      },
      {
        name: "PHP",
        img: reactIcon,
      },
      {
        name: "Java",
        img: JavaIcon,
      },
      {
        name: "MySql",
        img: MysQlIcon,
      },
      {
        name: "MongoDb/Mongoose",
        img: MongoDbIcon,
      },
    ],
    frameWork: [
      {
        name: "React/Redux",
        img: reactIcon,
      },
      {
        name: "NodeJS/ExpressJs",
        img: NodeJsIcon,
      },
      {
        name: "Bootstrap",
        img: BootstrapIcon,
      },
      {
        name: "Ant Design",
        img: AntIcon,
      },
      {
        name: "Django/Python",
        img: PythonIcon,
      },
    ],
  },

  // End Skills Section --------------------------
};
