const generateEmployee = (id: number, name: string, position: string, avatar: string) => {
  return {
    id,
    name,
    position,
    avatar,
  };
};
export const employees = [
  generateEmployee(3, "Romaura Rojas", "Project Manager", "./images/romaura.jfif"),
  generateEmployee(2, "Roman Rojas", "CTO & Lead Engineer", "./images/roman_3.jfif"),
  generateEmployee(1, "Marcio Rodrigues", "Software Engineer", "./images/marcio.jfif"),
];
