const lines = [
    { color: "#ec2825", name: "A" },
    { color: "#00adef", name: "B" },
    { color: "#f49622", name: "C" },
    { color: "#0aae56", name: "D" },
    { color: "#8682be", name: "E" },
    { color: "#8bc540", name: "F" },
    { color: "#f2c118", name: "G" },
];
const stops = [
    { name: "Graffenstaden", lines: ["A"], position: [1, 89.8, 14, 1.8] },
    { name: "Cours de l'Illiade", lines: ["A"], position: [1, 89.8, 14, 1.8] },

    { name: "Lingolsheim Tiergartel", lines: ["B"], position: [1, 82.3, 11.8, 3.3] },
    { name: "Lingolsheim Alouettes", lines: ["B"], position: [4.4, 78.2, 20, 3] },
    { name: "Bohrie", lines: ["B"], position: [7.4, 76.1, 20, 1.8] },
    { name: "Ostwald Hôtel de Ville", lines: ["B"], position: [9.8, 74.1, 20, 1.8] },
    { name: "Wihrel", lines: ["B"], position: [12.6, 72, 20, 1.8] },
    { name: "Elmerforst", lines: ["B"], position: [15.2, 70, 20, 1.8] },
    { name: "Martin Schongauer", lines: ["B"], position: [17.6, 68, 20, 1.8] },
    { name: "Montagne Verte", lines: ["B"], position: [20.3, 66, 20, 1.8] },

    { name: "Lycée Jean Monnet", lines: ["C"], position: [0, 0, 14, 2] },
    { name: "Kehl Bahnhof", lines: ["D"], position: [0, 0, 14, 2] },
    { name: "Mélanie", lines: ["E"], position: [0, 0, 14, 2] },
    { name: "Place d'Islande", lines: ["F"], position: [0, 0, 14, 2] },
    { name: "Comtes", lines: ["F"], position: [0, 0, 14, 2] },
    { name: "Rotterdam", lines: ["G"], position: [0, 0, 14, 2] },
    { name: "Esplanade", lines: ["C", "E"], position: [0, 0, 14, 2] },
];

export { lines, stops };