import About from "../../components/home-one/about";
import AutoSlider from "../../components/home-one/auto-slider";
import Hero from "../../components/home-one/hero";
import Projects from "../../components/home-one/projects";
import Services from "../../components/home-one/services";
import Teams from "../../components/home-one/teams";
import Testimonial from "../../components/home-one/testimonial";
import WhyChooseUs from "../../components/home-one/why-choose-us";

// Teams images
import Team1Img from "../../assets/images/team/team1.png";
import Team2Img from "../../assets/images/team/team2.png";
import Team3Img from "../../assets/images/team/team3.png";
import Team4Img from "../../assets/images/team/team4.png";

const servicesData = [
  {
    id: crypto.randomUUID(),
    title: "Marketing Services",
    description:
      "From digital ads to brand strategy, we design marketing campaigns that build awareness, engage customers, and drive measurable results.",
    icon: "icon-design-tools",
  },
  {
    id: crypto.randomUUID(),
    title: "Web Development",
    description:
      "Custom websites that are fast, responsive, and designed to convert. We blend design with functionality to create online experiences that stand out.",
    icon: "icon-branding",
  },
  {
    id: crypto.randomUUID(),
    title: "Graphic Design",
    description:
      "From logos and branding to social media creatives and brochures, we craft visuals that speak louder than words.",
    icon: "icon-web",
  },
  {
    id: crypto.randomUUID(),
    title: "Video Editing",
    description:
      "High-quality, story-driven edits for ads, reels, campaigns, and brand films—tailored to capture attention and boost engagement.",
    icon: "icon-design-thinking",
  },
  {
    id: crypto.randomUUID(),
    title: "Influencer Marketing",
    description:
      "Connecting brands with the right voices. We plan and execute influencer collaborations that drive authenticity and impact.",
    icon: "icon-design-thinking",
  },
  {
    id: crypto.randomUUID(),
    title: " Shoot Planning",
    description:
      "From concept to camera, we handle the end-to-end planning of photo and video shoots—ensuring smooth execution and stunning results.",
    icon: "icon-design-thinking",
  },
];

const teamsData = [
  {
    id: crypto.randomUUID(),
    name: "Andrew Mark",
    designation: "Creative Director",
    img: Team1Img,
  },
  {
    id: crypto.randomUUID(),
    name: "Jack Taylor",
    designation: "Senior Designer",
    img: Team2Img,
  },
  {
    id: crypto.randomUUID(),
    name: "Martine Joy",
    designation: "Project Manager",
    img: Team3Img,
  },
  {
    id: crypto.randomUUID(),
    name: "Adam Straw",
    designation: "Web Developer",
    img: Team4Img,
  },
];

function HomeOne() {
  return (
    <>
      <Hero />
      <Services services={servicesData} />
      <About />
      <Projects />
      <WhyChooseUs />
      <Testimonial />
      <AutoSlider />
      <Teams teams={teamsData} />
    </>
  );
}

export default HomeOne;
