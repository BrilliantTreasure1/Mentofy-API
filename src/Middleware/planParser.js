function parsePlan(rawText) {
  const structuredPlan = { months: [], tips: [] };
  const lines = rawText.split('\n').map(l => l.trim()).filter(Boolean);

  let currentMonth = null;
  let currentWeek = null;

  lines.forEach(line => {
    // ماه
    const monthMatch = line.match(/ماه\s*\d+/);
    if (monthMatch) {
      if (currentMonth) structuredPlan.months.push(currentMonth);
      currentMonth = { name: line, weeks: [] };
      currentWeek = null;
      return;
    }

    // هفته
    const weekMatch = line.match(/هفته\s*\d+/);
    if (weekMatch && currentMonth) {
      currentWeek = { name: line, days: [] };
      currentMonth.weeks.push(currentWeek);
      return;
    }

    // روز
    const dayMatch = line.match(/روز\s*[\d\w]+[:\s]/);
    if (dayMatch && currentWeek) {
      currentWeek.days.push({ day: dayMatch[0], exercise: line.replace(dayMatch[0], '').trim(), description: '' });
      return;
    }

    // نکات تکمیلی
    if (/نکات تکمیلی/i.test(line)) {
      const tipsIndex = lines.indexOf(line);
      structuredPlan.tips = lines.slice(tipsIndex + 1).filter(l => l && /^\d+/.test(l));
      return;
    }
  });

  if (currentMonth) structuredPlan.months.push(currentMonth);

  return structuredPlan;
}


module.exports = {parsePlan};
