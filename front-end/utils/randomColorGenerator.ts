const generateRandomColor = () => {
  const randomNum = Math.floor(Math.random() * 16777215);

  const color = "#" + randomNum.toString(16).padStart(6, "0");
  return color;
};

export { generateRandomColor };
