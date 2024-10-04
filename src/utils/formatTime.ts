export const formatTime = (time: number) => {
  const minutes = Math.floor(time / 60000)
    .toString()
    .padStart(2, "0");
  const seconds = Math.floor((time % 60000) / 1000)
    .toString()
    .padStart(2, "0");
  const milliseconds = ((time % 1000) / 10).toString().padStart(2, "0");

  return `${minutes}:${seconds}:${milliseconds}`;
};

export const formatFullTime = (date: Date) => {
  const year = date.getFullYear().toString().padStart(4, "0");
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const day = date.getDate().toString().padStart(2, "0");
  const hours = date.getHours().toString().padStart(2, "0");
  const minutes = date.getMinutes().toString().padStart(2, "0");

  return `${year}. ${month}. ${day}. ${hours}:${minutes}`;
};
