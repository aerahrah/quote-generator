const categoryColorOptions = {
  happiness: "#d97706",
  anger: "#ef4444",
  courage: "#8b5cf6",
  fitness: "#22c55e",
  love: "#ec4899",
  history: "#0ea5e9",
};

export const getCategoryColor = (category) => {
  return categoryColorOptions[category] || "#4299E1";
};
