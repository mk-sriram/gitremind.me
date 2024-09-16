import React from "react";

interface ContributionsSVGProps {
  contributions: string[];
}
interface Day {
  date: string;
  count: number;
}

interface Week extends Array<Day> {}

const ContributionsSVG: React.FC<ContributionsSVGProps> = ({
  contributions,
}) => {
  const today = new Date();
  const oneYearAgo = new Date(
    today.getFullYear() - 1,
    today.getMonth(),
    today.getDate()
  );

  const contributionsMap = new Map();
  contributions.forEach((date) => {
    const commitDate = new Date(date);
    if (commitDate >= oneYearAgo && commitDate <= today) {
      const dateString = commitDate.toISOString().split("T")[0];
      contributionsMap.set(
        dateString,
        (contributionsMap.get(dateString) || 0) + 1
      );
    }
  });

  const weeks: Week[] = [];
  for (let d = new Date(oneYearAgo); d <= today; d.setDate(d.getDate() + 1)) {
    const dateString = d.toISOString().split("T")[0];
    const weekIndex = Math.floor(
      (d.getTime() - oneYearAgo.getTime()) / (7 * 24 * 60 * 60 * 1000)
    );
    if (!weeks[weekIndex]) weeks[weekIndex] = [];
    weeks[weekIndex].push({
      date: dateString,
      count: contributionsMap.get(dateString) || 0,
    });
  }
  const maxCount = Math.max(...Array.from(contributionsMap.values()));

  return (
    <svg width="100%" height="100%" viewBox="0 0 52 7">
      {weeks.map((week: Week, weekIndex: number) =>
        week
          .slice(0, 7)
          .map((day: Day, dayIndex: number) => (
            <rect
              key={day.date}
              x={weekIndex}
              y={dayIndex}
              spacing="0.45"
              width="1"
              height="1"
              rx="0.2"
              ry="0.2"
              fill={
                day.count > 0
                  ? `rgba(0, 100, 0, ${day.count / maxCount})`
                  : "#ebedf0"
              }
            />
          ))
      )}
    </svg>
  );
};

export default ContributionsSVG;
