import { Leaf, Snowflake, Sprout, Sun, Trees } from 'lucide-react';

interface SeasonDisplayProps {
  season: string;
}

const SeasonDisplay: React.FC<SeasonDisplayProps> = ({ season }) => {
  const seasonIcons = {
    spring: <Sprout color="green" strokeWidth="1" />,
    summer: <Sun color="yellow" strokeWidth="1" />,
    fall: <Trees color="brown" strokeWidth="1" />,
    winter: <Snowflake color="lightblue" strokeWidth="1" />,
  };

  // Use the season prop to determine which icon to display
  const seasonKey = season.toLowerCase() as keyof typeof seasonIcons;

  const SeasonIcon = seasonIcons[seasonKey];

  return (
    <div className="flex items-center">
      Best Season for Use:
      <div className="font-light ml-2">{SeasonIcon}</div>
    </div>
  );
};

export default SeasonDisplay;
