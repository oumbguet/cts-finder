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
    { name: "Cours de l'Illiade", lines: ["A"], position: [5, 97, 10.8, 2.5] },
    { name: "Parc Malraux", lines: ["A"], position: [16.1, 97, 10.8, 2.5] },
    { name: "Illkirch Lixenbuhl", lines: ["A"], position: [27.2, 97, 10.8, 2.5] },
    { name: "Campus d'Illkirch", lines: ["A"], position: [37.2, 94.1, 17.4, 2.2] },
    { name: "Leclerc", lines: ["A"], position: [16.4, 90, 17, 2] },
    { name: "Colonne", lines: ["A"], position: [19.4, 87.3, 17, 2] },
    { name: "Baggersee", lines: ["A"], position: [41.4, 88.9, 17, 2] },
    { name: "Hohwart", lines: ["A"], position: [24.7, 83.3, 17, 2] },
    { name: "Émile Mathis", lines: ["A"], position: [28, 80.8, 17, 2] },
    { name: "Lycée Couffignal", lines: ["A"], position: [31.2, 78.4, 17, 2] },
    { name: "Krimmeri Stade de la Meinau", lines: ["A"], position: [34.4, 75, 17, 3] },
    { name: "Schluthfeld", lines: ["A"], position: [37.8, 72.7, 17, 2] },
    { name: "Cervantès", lines: ["A"], position: [20.2, 28.4, 11, 2] },
    { name: "Le Galet", lines: ["A"], position: [23.2, 24.4, 8, 2] },
    { name: "Parc des Sports Zénith", lines: ["A"], position: [19, 12.3, 11, 4.4] },

    { name: "Hoenheim Gare", lines: ["B"], position: [48.5, 1, 15.3, 4.2] },
    { name: "Général de Gaulle", lines: ["B"], position: [49.5, 8.7, 15.3, 3] },
    { name: "Le Ried", lines: ["B"], position: [49.5, 11.9, 15.3, 2.5] },
    { name: "Lycée Marc Bloch", lines: ["B"], position: [49.5, 14.7, 15.3, 3] },
    { name: "Pont Phario", lines: ["B"], position: [49.5, 18, 15.3, 2.4] },
    { name: "Le Marais", lines: ["B"], position: [49.5, 20.7, 15.3, 2.1] },
    { name: "Futura Glacière", lines: ["B"], position: [49.5, 20.7, 15.3, 2.1] },
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
    { name: "Wolfisheim Henri Rendu", lines: ["F"], position: [1.4, 1.2, 12.4, 3.2] },

    { name: "Espace Européen de l'Entreprise", lines: ["G"], position: [15.2, 1.2, 15.3, 4.6] },
    { name: "Rotterdam", lines: ["G"], position: [0, 0, 14, 2] },

    { name: "Esplanade", lines: ["C", "E"], position: [0, 0, 14, 2] },
];

export { lines, stops };