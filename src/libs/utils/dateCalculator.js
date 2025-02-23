export const dateCalculator = () => {
  const date = new Date();
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0'); // 월은 0부터 시작해서 +1 필요
  const day = String(date.getDate()).padStart(2, '0');

  return `${year}-${month}-${day}`;
};
