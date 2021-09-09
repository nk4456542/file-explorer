export const data = [
  {
    id: 1,
    name: "Instruments",
    isFolder: true,
    children: [
      {
        id: 102,
        name: "Fender",
        isFolder: true,
        children: [
          { id: 103, name: "Acoustic Guitar", children: [], isFolder: true },
          {
            id: 104,
            name: "Electric Guitar",
            children: [
              { id: 104, name: "White", children: null, isFolder: false },
              { id: 104, name: "Black", children: null, isFolder: false },
              { id: 104, name: "Wooden", children: null, isFolder: false },
            ],
            isFolder: true,
          },
          { id: 105, name: "File 3", children: null, isFolder: false },
          { id: 106, name: "File 4", children: null, isFolder: false },
        ],
      },
      {
        id: 107,
        name: "Yamaha",
        isFolder: true,
        children: [
          { id: 108, name: "File 3", children: null, isFolder: false },
          { id: 109, name: "File 4", children: null, isFolder: false },
        ],
      },
      { id: 100, name: "File 1", children: null, isFolder: false },
      { id: 101, name: "File 2", children: null, isFolder: false },
    ],
  },
  {
    id: 2,
    name: "Songs",
    isFolder: true,
    children: [
      { id: 201, name: "File 3", children: null, isFolder: false },
      { id: 202, name: "File 4", children: null, isFolder: false },
    ],
  },
  // {
  //   id: 3,
  //   name: "Folder",
  //   isFolder: true,
  //   children: [],
  // },
  // {
  //   id: 4,
  //   name: "Folder",
  //   isFolder: true,
  //   children: [],
  // },
  // {
  //   id: 5,
  //   name: "Folder",
  //   isFolder: true,
  //   children: [],
  // },
  // {
  //   id: 6,
  //   name: "Folder",
  //   isFolder: true,
  //   children: [],
  // },
  // {
  //   id: 7,
  //   name: "Folder",
  //   isFolder: true,
  //   children: [],
  // },
];

// Consider an Object of the following Schema
//  {
//    id:1,
//    name: "Somename",
//    isFolder: true,
//    children:[]
//  }
