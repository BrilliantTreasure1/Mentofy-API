function parsePlan(rawText) {
    const lines = rawText.split("\n").map(l => l.trim()).filter(Boolean);
  
    const result = { months: [] };
    let currentMonth = null;
    let currentWeek = null;
    let currentDay = null;
  
    for (const line of lines) {
      if (line.startsWith("### ماه")) {
        // شروع ماه جدید
        currentMonth = { name: line.replace("###", "").trim(), weeks: [] };
        result.months.push(currentMonth);
      } else if (line.startsWith("### هفته")) {
        // شروع هفته جدید
        currentWeek = { name: line.replace("###", "").trim(), days: [] };
        currentMonth.weeks.push(currentWeek);
      } else if (/^-\s*روز/.test(line)) {
        // شروع روز جدید
        currentDay = {
          name: line.replace("-", "").trim(),
          task: "",
          exercise: ""
        };
        currentWeek.days.push(currentDay);
      } else if (line.startsWith("- مطالعه") || line.startsWith("- نصب") || line.startsWith("- تمرین") || line.startsWith("- اجرای")) {
        // تسک اصلی
        if (currentDay) {
          currentDay.task += (currentDay.task ? " " : "") + line.replace("-", "").trim();
        }
      } else if (line.startsWith("تمرین:")) {
        // تمرین
        if (currentDay) {
          currentDay.exercise += (currentDay.exercise ? " " : "") + line.replace("تمرین:", "").trim();
        }
      }
    }
  
    return result;
  }
  
  module.exports = { parsePlan };
  