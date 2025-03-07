const generateEmployee = (id: number, name: string, position: string, avatar: string) => {
  return {
    id,
    name,
    position,
    avatar,
  };
};
export const employees = [
  generateEmployee(3, "Romaura Rojas", "Project Manager", "https://images.webfluid.studio/romaura.jfif"),
  generateEmployee(2, "Roman Rojas", "CTO & Lead Engineer", "https://images.webfluid.studio/roman_3.JPG"),
  generateEmployee(1, "Marcio Rodrigues", "Software Engineer", "https://images.webfluid.studio/marcio.jfif"),
];
