interface AnimatedSquareProps {
  delay: number;
  color: string;
}

const AnimatedSquare: React.FC<AnimatedSquareProps> = ({ delay, color }) => (
  <div
    className={`w-11 h-11 rounded-sm ${color} animate-pulse`}
    style={{
      animationDelay: `${delay}s`,
    }}
  />
);

const SquareGrid: React.FC = () => {
  const colors: string[] = [
    "bg-green-700 bg-opacity-10",
    "bg-green-700 bg-opacity-20",
    "bg-green-700 bg-opacity-40",
    "bg-green-700 bg-opacity-20",
    "bg-green-700 bg-opacity-50",
    "bg-green-700 bg-opacity-40",
    "bg-green-500 bg-opacity-20",
    "bg-green-700 bg-opacity-40",
    "bg-green-500 bg-opacity-40",
    "bg-green-700 bg-opacity-10",
  ];

  return (
    <div className="grid grid-cols-9 gap-y-[3px] w-full h-full">
      {[...Array(81)].map((_, i) => (
        <AnimatedSquare
          key={i}
          delay={(i * 0.3) % 2}
          color={colors[Math.floor(Math.random() * colors.length)]}
        />
      ))}
    </div>
  );
};

export default SquareGrid;
