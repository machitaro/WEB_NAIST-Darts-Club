import { RuleSection } from "../components/RuleSection";

export const RuleContent = ({ gameData }) => {
  return (
    <div key={gameData.title} className="w-2/3 md:w-1/2 xl:1/3 mx-auto">
      {Object.entries(gameData.sections).map(([key, section], index) => (
        <RuleSection
          key={key}
          title={section.title}
          points={section.points}
          index={index}
        />
      ))}
    </div>
  );
};