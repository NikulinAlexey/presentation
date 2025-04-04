import { Presentation } from "./Presentation";
import About from "./About";
import CareerTimeline from "./CareerTimeline";
import ResponsibilitiesSlide from "./ResponsibilitiesSlide";
import GoalsSlide from "./GoalsSlide";
import AchievementsSlide from "./AchievementsSlide";
import ProcessImprovementSlide from "./ProcessImprovementSlide";
import ConclusionSlide from "./ConclusionSlide";
import EducationSlide from "./EducationSlide";

function App() {
  const slides = [
    {
      id: "1",
      title: "Обо мне",
      content: <About />,
    },
    {
      id: "2",
      title: "Мой карьерный путь в компании",
      content: <CareerTimeline />,
    },
    {
      id: "3",
      title: "Мои обязанности и роли",
      content: <ResponsibilitiesSlide />,
    },
    {
      id: "4",
      title: "Достижения за период",
      content: <AchievementsSlide />,
    },
    {
      id: "5",
      title: "Развитие и обучение",
      content: <EducationSlide />,
    },
    {
      id: "6",
      title: "Цели на следующий период",
      content: <GoalsSlide />,
    },
    {
      id: "7",
      title: "Идеи по улучшению процессов и технологий",
      content: <ProcessImprovementSlide />,
    },
    {
      id: "8",
      title: "Спасибо за внимание",
      content: <ConclusionSlide />,
    },
  ];
  return <Presentation slides={slides} />;
}

export default App;
