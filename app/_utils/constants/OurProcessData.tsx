export interface OurProcessItemProps {
  step: number;
  title: string;
  image: string;
}

const ourProccessData: OurProcessItemProps[] = [
  {
    step: 1,
    title: "Discovery & Onboarding",
    image: "/assets/images/Discovery-Onboarding.png",
  },
  {
    step: 2,
    title: "Design",
    image: "/assets/images/Design.png",
  },
  {
    step: 3,
    title: "Development",
    image: "/assets/images/Development-pic.png",
  },
  {
    step: 4,
    title: "Quality Assurance",
    image: "/assets/images/Quality-Assurance.png",
  },
  {
    step: 5,
    title: "Launch & Training",
    image: "/assets/images/Launch-Training.png",
  },
  {
    step: 6,
    title: "Post-Launch Support",
    image: "/assets/images/Post-Launch-Support.png",
  },
];

export default ourProccessData;
