const generateEmployee = (id: number, name: string, position: string, avatar: string) => {
  return {
    id,
    name,
    position,
    avatar,
  };
};
export const employees = [
  generateEmployee(3, "Romaura Rojas", "Project Manager", "/assets/images/romaura.jfif"),
  generateEmployee(2, "Roman Rojas", "CTO & Lead Engineer", "/assets/images/roman_3.jfif"),
  generateEmployee(1, "Marcio Rodrigues", "Software Engineer", "/assets/images/marcio.jfif"),
];
