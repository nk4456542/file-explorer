export const data = [
  {
    id: 1,
    name: "Folder 1",
    children: [
      { id: 100, name: "File 1", children: null },
      { id: 101, name: "File 2", children: null },
      { id: 102, name: "File 2", children: [] },
    ],
  },
  {
    id: 2,
    name: "Folder 2",
    children: [
      { id: 201, name: "File 3", children: null },
      { id: 202, name: "File 4", children: null },
    ],
  },
  {
    id: 3,
    name: "Folder 3",
    children: [
      { id: 301, name: "File 3", children: null },
      { id: 302, name: "File 3", children: null },
    ],
  },
  {
    id: 4,
    name: "File 4",
    children: null,
  },
];
