import {gridLevels} from '../interface/grid.interface';

export const GRID_CONFIG: gridLevels[] = [
  {
    id: 1,
    title: "მცენარის მორწყვა",
    description: "გამოიყენე grid-column-start რომ წყალი მცენარეზე მოათავსო",
    instructions:
      "შენი პირველი დავალებაა მცენარის მორწყვა! მცენარე მდებარეობს მე-3 სვეტში. გამოიყენე grid-column-start: 3; რომ წყალი სწორ ადგილას მოათავსო.",
    initialCSS: `#garden {
  display: grid;
  grid-template-columns: 20% 20% 20% 20% 20%;
  grid-template-rows: 20% 20% 20% 20% 20%;
}

#water {
  grid-column-start: ;
}`,
    targetCSS: "grid-column-start: 3",
    gridItems: [],
    waterPosition: { row: 1, col: 3 },
    plantPositions: [{ row: 1, col: 3, plant: "🌱" }],
    hint: "მცენარე მდებარეობს მე-3 სვეტში. დაწერე: grid-column-start: 3;",
  },
  {
    id: 2,
    title: "ორი მცენარის მორწყვა",
    description: "გამოიყენე grid-column რომ წყალი ორ მცენარეზე გაავრცელო",
    instructions:
      "ახლა უნდა მორწყო ორი მცენარე! ისინი მდებარეობენ მე-2 და მე-4 სვეტებში. გამოიყენე grid-column: 2 / 5; რომ წყალი ორივე მცენარეზე გაავრცელო.",
    initialCSS: `#garden {
  display: grid;
  grid-template-columns: 20% 20% 20% 20% 20%;
  grid-template-rows: 20% 20% 20% 20% 20%;
}

#water {
  grid-column: ;
}`,
    targetCSS: "grid-column: 2 / 5",
    gridItems: [],
    waterPosition: { row: 1, col: 2 },
    plantPositions: [
      { row: 1, col: 2, plant: "🌿" },
      { row: 1, col: 4, plant: "🌺" },
    ],
    hint: "წყალი უნდა დაიწყოს მე-2 სვეტიდან და დასრულდეს მე-5 სვეტამდე: grid-column: 2 / 5;",
  },
  {
    id: 3,
    title: "ვერტიკალური მორწყვა",
    description: "გამოიყენე grid-row-start რომ წყალი ქვემოთ მოათავსო",
    instructions:
      "ამჯერად მცენარე მე-3 რიგშია. გამოიყენე grid-row-start: 3; რომ წყალი ვერტიკალურად სწორ ადგილას მოათავსო.",
    initialCSS: `#garden {
  display: grid;
  grid-template-columns: 20% 20% 20% 20% 20%;
  grid-template-rows: 20% 20% 20% 20% 20%;
}

#water {
  grid-row-start: ;
}`,
    targetCSS: "grid-row-start: 3",
    gridItems: [],
    waterPosition: { row: 3, col: 1 },
    plantPositions: [{ row: 3, col: 1, plant: "🌻" }],
    hint: "მცენარე მე-3 რიგშია. დაწერე: grid-row-start: 3;",
  },
  {
    id: 4,
    title: "რიგების გავრცელება",
    description: "გამოიყენე grid-row რომ წყალი რამდენიმე რიგზე გაავრცელო",
    instructions: "ორი მცენარე მე-2 და მე-4 რიგებშია. გამოიყენე grid-row: 2 / 5; რომ წყალი ორივე მცენარეზე მიაღწიოს.",
    initialCSS: `#garden {
  display: grid;
  grid-template-columns: 20% 20% 20% 20% 20%;
  grid-template-rows: 20% 20% 20% 20% 20%;
}

#water {
  grid-row: ;
}`,
    targetCSS: "grid-row: 2 / 5",
    gridItems: [],
    waterPosition: { row: 2, col: 1 },
    plantPositions: [
      { row: 2, col: 1, plant: "🌷" },
      { row: 4, col: 1, plant: "🌹" },
    ],
    hint: "წყალი უნდა დაიწყოს მე-2 რიგიდან და დასრულდეს მე-5 რიგამდე: grid-row: 2 / 5;",
  },
  {
    id: 5,
    title: "კუთხური მორწყვა",
    description: "გამოიყენე grid-column და grid-row ერთად",
    instructions:
      "მცენარე მდებარეობს მე-3 სვეტში და მე-2 რიგში. გამოიყენე ორივე თვისება რომ წყალი ზუსტ ადგილას მოათავსო.",
    initialCSS: `#garden {
  display: grid;
  grid-template-columns: 20% 20% 20% 20% 20%;
  grid-template-rows: 20% 20% 20% 20% 20%;
}

#water {
  grid-column: ;
  grid-row: ;
}`,
    targetCSS: "grid-column: 3, grid-row: 2",
    gridItems: [],
    waterPosition: { row: 2, col: 3 },
    plantPositions: [{ row: 2, col: 3, plant: "🌼" }],
    hint: "გამოიყენე grid-column: 3; და grid-row: 2; ერთად.",
  },
  {
    id: 6,
    title: "ფართობის მორწყვა",
    description: "გამოიყენე grid-area რომ დიდი ფართობი მორწყო",
    instructions: "ოთხი მცენარე კვადრატულ ფართობშია განლაგებული. გამოიყენე grid-area: 2 / 2 / 4 / 4; რომ ყველა მორწყო.",
    initialCSS: `#garden {
  display: grid;
  grid-template-columns: 20% 20% 20% 20% 20%;
  grid-template-rows: 20% 20% 20% 20% 20%;
}

#water {
  grid-area: ;
}`,
    targetCSS: "grid-area: 2 / 2 / 4 / 4",
    gridItems: [],
    waterPosition: { row: 2, col: 2 },
    plantPositions: [
      { row: 2, col: 2, plant: "🌺" },
      { row: 2, col: 3, plant: "🌸" },
      { row: 3, col: 2, plant: "🌻" },
      { row: 3, col: 3, plant: "🌷" },
    ],
    hint: "grid-area ფორმატია: row-start / column-start / row-end / column-end",
  },
  {
    id: 7,
    title: "სვეტების ზომები",
    description: "შეცვალე grid-template-columns რომ მცენარეები სწორად განლაგდეს",
    instructions:
      "მცენარეები უნდა იყოს განსხვავებული ზომის სვეტებში. გამოიყენე grid-template-columns: 100px 3fr 2fr; რომ სწორი პროპორციები შექმნა.",
    initialCSS: `#garden {
  display: grid;
  grid-template-columns: ;
  grid-template-rows: 20% 20% 20% 20% 20%;
}

#water {
  grid-column: 1 / 4;
}`,
    targetCSS: "grid-template-columns: 100px 3fr 2fr",
    gridItems: [],
    waterPosition: { row: 1, col: 1 },
    plantPositions: [
      { row: 1, col: 1, plant: "🌱" },
      { row: 1, col: 2, plant: "🌿" },
      { row: 1, col: 3, plant: "🌺" },
    ],
    hint: "გამოიყენე: 100px 3fr 2fr - პირველი სვეტი 100px, მეორე 3 ნაწილი, მესამე 2 ნაწილი",
  },
  {
    id: 8,
    title: "რიგების ზომები",
    description: "შეცვალე grid-template-rows რომ მცენარეები სწორად განლაგდეს",
    instructions:
      "მცენარეები უნდა იყოს განსხვავებული სიმაღლის რიგებში. გამოიყენე grid-template-rows: 50px 1fr 1fr; რომ სწორი განლაგება შექმნა.",
    initialCSS: `#garden {
  display: grid;
  grid-template-columns: 20% 20% 20% 20% 20%;
  grid-template-rows: ;
}

#water {
  grid-row: 1 / 4;
}`,
    targetCSS: "grid-template-rows: 50px 1fr 1fr",
    gridItems: [],
    waterPosition: { row: 1, col: 1 },
    plantPositions: [
      { row: 1, col: 1, plant: "🌱" },
      { row: 2, col: 1, plant: "🌿" },
      { row: 3, col: 1, plant: "🌺" },
    ],
    hint: "გამოიყენე: 50px 1fr 1fr - პირველი რიგი 50px, დანარჩენი თანაბრად",
  },
  {
    id: 9,
    title: "ღია სივრცე",
    description: "გამოიყენე gap რომ მცენარეებს შორის ადგილი შექმნა",
    instructions:
      "მცენარეებს შორის ღია სივრცე უნდა იყოს. გამოიყენე gap: 10px; რომ ყველა ელემენტს შორის 10px ღია ადგილი შექმნა.",
    initialCSS: `#garden {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  gap: ;
}

#water {
  grid-area: 1 / 1 / 4 / 4;
}`,
    targetCSS: "gap: 10px",
    gridItems: [],
    waterPosition: { row: 1, col: 1 },
    plantPositions: [
      { row: 1, col: 1, plant: "🌱" },
      { row: 1, col: 2, plant: "🌿" },
      { row: 1, col: 3, plant: "🌺" },
      { row: 2, col: 1, plant: "🌻" },
      { row: 2, col: 2, plant: "🌷" },
      { row: 2, col: 3, plant: "🌹" },
      { row: 3, col: 1, plant: "🌼" },
      { row: 3, col: 2, plant: "🌸" },
      { row: 3, col: 3, plant: "🌵" },
    ],
    hint: "gap თვისება ქმნის ღია სივრცეს ყველა grid ელემენტს შორის",
  },
  {
    id: 10,
    title: "ჰორიზონტალური განლაგება",
    description: "გამოიყენე justify-items რომ მცენარეები ცენტრში მოათავსო",
    instructions:
      "მცენარეები უნდა იყოს თავიანთი უჯრების ცენტრში. გამოიყენე justify-items: center; რომ ყველა ჰორიზონტალურად ცენტრში მოათავსო.",
    initialCSS: `#garden {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  justify-items: ;
}

#water {
  grid-area: 2 / 2 / 3 / 3;
}`,
    targetCSS: "justify-items: center",
    gridItems: [],
    waterPosition: { row: 2, col: 2 },
    plantPositions: [
      { row: 1, col: 1, plant: "🌱" },
      { row: 1, col: 2, plant: "🌿" },
      { row: 1, col: 3, plant: "🌺" },
      { row: 2, col: 1, plant: "🌻" },
      { row: 2, col: 2, plant: "🌷" },
      { row: 2, col: 3, plant: "🌹" },
      { row: 3, col: 1, plant: "🌼" },
      { row: 3, col: 2, plant: "🌸" },
      { row: 3, col: 3, plant: "🌵" },
    ],
    hint: "justify-items: center; ყველა ელემენტს ჰორიზონტალურად ცენტრში ათავსებს",
  },
  {
    id: 11,
    title: "ვერტიკალური განლაგება",
    description: "გამოიყენე align-items რომ მცენარეები ვერტიკალურად ცენტრში მოათავსო",
    instructions:
      "მცენარეები უნდა იყოს თავიანთი უჯრების ვერტიკალურ ცენტრში. გამოიყენე align-items: center; რომ ყველა ვერტიკალურად ცენტრში მოათავსო.",
    initialCSS: `#garden {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 100px 100px 100px;
  align-items: ;
}

#water {
  grid-area: 1 / 1 / 4 / 4;
}`,
    targetCSS: "align-items: center",
    gridItems: [],
    waterPosition: { row: 1, col: 1 },
    plantPositions: [
      { row: 1, col: 1, plant: "🌱" },
      { row: 1, col: 2, plant: "🌿" },
      { row: 1, col: 3, plant: "🌺" },
      { row: 2, col: 1, plant: "🌻" },
      { row: 2, col: 2, plant: "🌷" },
      { row: 2, col: 3, plant: "🌹" },
      { row: 3, col: 1, plant: "🌼" },
      { row: 3, col: 2, plant: "🌸" },
      { row: 3, col: 3, plant: "🌵" },
    ],
    hint: "align-items: center; ყველა ელემენტს ვერტიკალურად ცენტრში ათავსებს",
  },
  {
    id: 12,
    title: "მასტერ ბაღბანი",
    description: "გამოიყენე ყველა ცოდნა რომ იდეალური ბაღი შექმნა",
    instructions:
      "ეს არის ფინალური გამოწვევა! შექმენი იდეალური ბაღი სადაც ყველა მცენარე სწორად არის მორწყული. გამოიყენე grid-area: 2 / 2 / 4 / 4; და justify-items: center; და align-items: center;",
    initialCSS: `#garden {
  display: grid;
  grid-template-columns: 1fr 2fr 2fr 1fr;
  grid-template-rows: 1fr 2fr 2fr 1fr;
  gap: 5px;
  justify-items: ;
  align-items: ;
}

#water {
  grid-area: ;
}`,
    targetCSS: "grid-area: 2 / 2 / 4 / 4, justify-items: center, align-items: center",
    gridItems: [],
    waterPosition: { row: 2, col: 2 },
    plantPositions: [
      { row: 2, col: 2, plant: "🌺" },
      { row: 2, col: 3, plant: "🌸" },
      { row: 3, col: 2, plant: "🌻" },
      { row: 3, col: 3, plant: "🌷" },
    ],
    hint: "გამოიყენე სამივე თვისება: grid-area, justify-items და align-items",
  },
]
