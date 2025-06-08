const ContributionCalendar = ({ solvedDates }) => {
  const currentYear = new Date().getFullYear();
  const startDate = new Date(currentYear, 0, 1); // January 1st of current year
  const endDate = new Date(currentYear, 11, 31); // December 31st of current year

  const getDateString = (date) => {
    return date.toISOString().split("T")[0];
  };

  const isDateSolved = (date) => {
    return solvedDates.includes(getDateString(date));
  };

  const getIntensityClass = (date) => {
    if (isDateSolved(date)) {
      return "bg-green-500 hover:bg-green-400";
    }
    return "bg-white/10 hover:bg-white/20";
  };

  const renderCalendar = () => {
    const weeks = [];
    const currentDate = new Date(startDate);

    // Start from the beginning of the week containing January 1st
    const startDay = currentDate.getDay();
    currentDate.setDate(currentDate.getDate() - startDay);

    let weekIndex = 0;
    while (currentDate <= endDate || weekIndex < 53) {
      const days = [];

      for (let day = 0; day < 7; day++) {
        const date = new Date(currentDate);
        const isInCurrentYear = date.getFullYear() === currentYear;
        const isBeforeToday = date <= new Date();

        days.push(
          <div
            key={`${weekIndex}-${day}`}
            className={`w-3 h-3 rounded-sm transition-colors ${
              isInCurrentYear ? getIntensityClass(date) : "bg-transparent"
            }`}
            title={
              isInCurrentYear
                ? `${getDateString(date)}${
                    isDateSolved(date) ? " - Problem solved!" : ""
                  }`
                : ""
            }
          />
        );
        currentDate.setDate(currentDate.getDate() + 1);
      }

      weeks.push(
        <div key={weekIndex} className="flex flex-col gap-1">
          {days}
        </div>
      );

      weekIndex++;

      // Break if we've gone past the end of the year and have enough weeks
      if (currentDate.getFullYear() > currentYear && weekIndex >= 53) {
        break;
      }
    }

    return weeks;
  };

  const monthLabels = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const dayLabels = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  return (
    <div className="w-full">
      {/* Month labels */}
      <div className="flex justify-between mb-2 text-xs text-white/60 px-4">
        {monthLabels.map((month, index) => (
          <span key={month} className="flex-1 text-center">
            {month}
          </span>
        ))}
      </div>

      <div className="flex items-start gap-2">
        {/* Day labels */}
        <div className="flex flex-col gap-1 text-xs text-white/60 pr-2">
          <div className="h-3"></div> {/* Spacer for month labels */}
          {dayLabels.map((day, index) => (
            <div key={day} className="h-3 flex items-center">
              {index % 2 === 1 ? day.slice(0, 3) : ""}
            </div>
          ))}
        </div>

        {/* Calendar grid */}
        <div className="flex gap-1 flex-1 justify-between">
          {renderCalendar()}
        </div>
      </div>
    </div>
  );
};

export default ContributionCalendar;
