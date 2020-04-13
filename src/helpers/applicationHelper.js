/* 
type = string
*/
export const riskLevelConverter = (riskLevel = "") => {
  console.log("riskLevel", typeof riskLevel);
  switch (riskLevel) {
    case "0":
      return "low";
    case "1":
      return "medium";
    case "2":
      return "high";
    default:
      return "low";
  }
};
