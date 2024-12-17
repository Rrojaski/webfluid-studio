export interface OurProcessItemProps {
  step: number;
  title: string;
  image: string;
}

const ourProccessData: OurProcessItemProps[] = [
  {
    step: 1,
    title: "Discovery & Onboarding",
    image: "https://images.webfluid.studio/Discovery-Onboarding.png",
  },
  {
    step: 2,
    title: "Design",
    image: "https://images.webfluid.studio/Design.png",
  },
  {
    step: 3,
    title: "Development",
    image: "https://images.webfluid.studio/Development-pic.png",
  },
  {
    step: 4,
    title: "Quality Assurance",
    image: "https://images.webfluid.studio/Quality-Assurance.png",
  },
  {
    step: 5,
    title: "Launch & Training",
    image: "https://images.webfluid.studio/Launch-Training.png",
  },
  {
    step: 6,
    title: "Post-Launch Support",
    image: "https://images.webfluid.studio/Post-Launch-Support.png",
  },
];

export default ourProccessData;
