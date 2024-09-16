import React from "react";

interface ContributionsSVGProps {
  contributions: string[];
}

interface Day {
  date: string;
  count: number;
}

type Week = Day[];

const ContributionsSVG: React.FC<ContributionsSVGProps> = ({
  contributions,
}) => {
  const today = new Date();
  const sixMonthsAgo = new Date(today);
  sixMonthsAgo.setMonth(today.getMonth() - 6);

  const contributionsMap = new Map<string, number>();
  contributions.forEach((date) => {
    const commitDate = new Date(date);
    if (commitDate >= sixMonthsAgo && commitDate <= today) {
      const dateString = commitDate.toISOString().split("T")[0];
      contributionsMap.set(
        dateString,
        (contributionsMap.get(dateString) || 0) + 1
      );
    }
  });

  const weeks: Week[] = [];
  for (let d = new Date(sixMonthsAgo); d <= today; d.setDate(d.getDate() + 1)) {
    const dateString = d.toISOString().split("T")[0];
    const weekIndex = Math.floor(
      (d.getTime() - sixMonthsAgo.getTime()) / (7 * 24 * 60 * 60 * 1000)
    );
    if (!weeks[weekIndex]) weeks[weekIndex] = [];
    weeks[weekIndex].push({
      date: dateString,
      count: contributionsMap.get(dateString) || 0,
    });
  }

  const maxCount = Math.max(...Array.from(contributionsMap.values()), 1);

  return (
    <svg width="100%" height="100%" viewBox="0 0 26 7">
      {weeks.map((week, weekIndex) =>
        week
          .slice(0, 7)
          .map((day, dayIndex) => (
            <rect
              key={day.date}
              x={weekIndex}
              y={dayIndex}
              width={0.9}
              height={0.9}
              rx={0.2}
              ry={0.2}
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
