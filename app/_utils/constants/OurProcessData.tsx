export interface OurProcessItemProps {
  step: number;
  title: string;
  image: string;
}

const ourProccessData: OurProcessItemProps[] = [
  {
    step: 1,
    title: "Discovery & Onboarding",
    image: "/images/Discovery-Onboarding.png",
  },
  {
    step: 2,
    title: "Design",
    image: "/images/Design.png",
  },
  {
    step: 3,
    title: "Development",
    image: "/images/Development-pic.png",
  },
  {
    step: 4,
    title: "Quality Assurance",
    image: "/images/Quality-Assurance.png",
  },
  {
    step: 5,
    title: "Launch & Training",
    image: "/images/Launch-Training.png",
  },
  {
    step: 6,
    title: "Post-Launch Support",
    image: "/images/Post-Launch-Support.png",
  },
];

export default ourProccessData;
