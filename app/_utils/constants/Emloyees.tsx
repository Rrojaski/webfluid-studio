const generateEmployee = (id, name, position, avatar) => {
  return {
    id,
    name,
    position,
    avatar,
  };
};
export const employees = [
  generateEmployee(3, "Romaura Rojas", "Project Manager", "https://images.webfluid.studio/romaura.jfif"),
  generateEmployee(2, "Roman Rojas", "CTO & Lead Engineer", "https://images.webfluid.studio/roman.jpg"),
  generateEmployee(1, "Marcio Rodrigues", "Software Engineer", "https://images.webfluid.studio/marcio.jfif"),
];
