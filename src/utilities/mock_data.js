import purpleR from "../assets/RectanglePurple.svg";
import yellowR from "../assets/RectangleYellow.svg";
import greenR from "../assets/RectangleGreen.svg";
import firstSlide from "../assets/firstSlide.svg";
import secondSlide from "../assets/secondSlide.png";
import thirdSlide from "../assets/thirdSlide.png";

export const MOCK_STEPS = [
  {
    id: 1,
    title: "Resume Screening",
    details:
      "Candidates are assessed through skill based questions in a virtual setting. Allowing you to gauge personality and cultural fit.",
  },
  {
    id: 2,
    title: "Video Interview",
    details:
      "Candidates are assessed through skill based questions in a virtual setting. Allowing you to gauge personality and cultural fit.",
  },
  {
    id: 3,
    title: "Technical Evaluation",
    details:
      "Candidates are assessed through skill based questions in a virtual setting. Allowing you to gauge personality and cultural fit.",
  },
  {
    id: 4,
    title: "Application Review",
    details:
      "Candidates are assessed through skill based questions in a virtual setting. Allowing you to gauge personality and cultural fit.",
  },
  {
    id: 5,
    title: "Lets get to work",
    details:
      "Candidates are assessed through skill based questions in a virtual setting. Allowing you to gauge personality and cultural fit.",
  },
];

export const MOCKFAQs = [
  {
    id: 1,
    type: "General",
    subType: "",
    question: "I want to work part-time, is that possible",
  },
  {
    id: 2,
    type: "",
    subType: "",
    question: "How long are the average projects?",
  },
  {
    id: 3,
    type: "",
    subType: "",
    question: "How does the payment works?",
  },
  {
    id: 4,
    type: "",
    subType: "",
    question: "How much can I earn?",
  },
  {
    id: 5,
    type: "General",
    subType: "Joining Process",
    question: "I want to work part-time, is that possible",
  },
  {
    id: 6,
    type: "",
    subType: "",
    question: "How long are the average projects?",
  },
  {
    id: 7,
    type: "",
    subType: "",
    question: "How does the payment works?",
  },
  {
    id: 8,
    type: "",
    subType: "",
    question: "How much can I earn?",
  },
];

export const MOCK_CAROUSEL_DATA = [
  {
    id: 1,
    title: "Onboard without the risk.",
    image: firstSlide,
    list: [
      "We pick the best for you to select.",
      "Thousands of vetted candidates in dozens of categories.",
      "Risk-free resource swapping for the best fit.",
    ],
    rectangle: purpleR,
  },
  {
    id: 2,
    title: "An open book.",
    image: secondSlide,
    list: [
      "Easy and transparent one-to-one chat with candidates.",
      "Simple and convenient payment methods.",
      "Review past ratings.",
    ],
    rectangle: yellowR,
  },
  {
    id: 3,
    title: "Stay in the loop.",
    image: thirdSlide,
    list: [
      "Track your staff activity down to every minute with screenshots.",
      "Comprehensive timesheet data to process payments.",
      "Create projects to organize and assign tasks more effectively.",
    ],
    rectangle: greenR,
  },
];
