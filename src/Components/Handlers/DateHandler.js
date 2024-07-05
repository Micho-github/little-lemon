
export const getCurrentWeek = (date) => {
    const currentWeek = [];
    for (let i = 0; i < 7; i++) {
      const day = date.clone().add(i, 'days');
      currentWeek.push({
        day: day.format('ddd'),
        date: day.format('DD'),
        fulldate: day.format("DD/MM"),
      });
    }
    return currentWeek;
  };

export const getCurrentMonth = (date) => {
    const currentMonth = [];
    for (let i = 0; i < 30; i++) {
      const day = date.clone().add(i, 'days');
      currentMonth.push(
        { day: day.format('ddd'),
          date: day.format('DD'),
          fulldate: day.format("DD/MM"),
        });
    }
    return currentMonth;
  };
