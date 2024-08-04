/**
 * write a method to fetch media image url
 * @param {*} media function take as input
 * @return {*} media image url
 */
export const fetchMediaUrl = (
  media: { [x: string]: { [x: string]: string }[] }[]
): string => {
  return media?.[0]?.["media-metadata"]?.[2]?.["url"] || "";
};

/**
 * write a method to get publish day and month
 * @param {*} media function take as input published date
 * @return {*} day and month
 */
export const getDateAndMonth = (date: string): string => {
  const dateObj = new Date(date);
  const month = dateObj.toLocaleString("default", { month: "long" });
  const day = dateObj.getDate();
  return day + " " + month;
};
