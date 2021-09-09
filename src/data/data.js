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
              {
                id: 104,
                name: "White",
                children: null,
                text: "This is a text file",
                isFolder: false,
              },
              {
                id: 104,
                name: "Black",
                children: null,
                text: "This is a text file",
                isFolder: false,
              },
              {
                id: 104,
                name: "Wooden",
                children: null,
                text: "This is a text file",
                isFolder: false,
              },
            ],
            isFolder: true,
          },
          {
            id: 105,
            name: "File 3",
            children: null,
            text: "This is a text file",
            isFolder: false,
          },
          {
            id: 106,
            name: "File 4",
            children: null,
            text: "This is a text file",
            isFolder: false,
          },
        ],
      },
      {
        id: 107,
        name: "Yamaha",
        isFolder: true,
        children: [
          {
            id: 108,
            name: "File 3",
            children: null,
            text: "This is a text file",
            isFolder: false,
          },
          {
            id: 109,
            name: "File 4",
            children: null,
            text: "This is a text file",
            isFolder: false,
          },
        ],
      },
      {
        id: 100,
        name: "File 1",
        children: null,
        text: "This is a text file",
        isFolder: false,
      },
      {
        id: 101,
        name: "File 2",
        children: null,
        text: "This is a text file",
        isFolder: false,
      },
    ],
  },
  {
    id: 2,
    name: "Songs",
    isFolder: true,
    children: [
      {
        id: 201,
        name: "File 3",
        children: null,
        text: "This is a text file",
        isFolder: false,
      },
      {
        id: 202,
        name: "File 4",
        children: null,
        text: "This is a text file",
        isFolder: false,
      },
    ],
  },
];

export const flatData = [
  {
    id: 1,
    name: "Instruments",
    isFolder: true,
    children: [
      {
        id: 100,
        name: "File 1",
        children: null,
        text: "This is a text file",
        isFolder: false,
      },
      {
        id: 101,
        name: "File 2",
        children: null,
        text: "This is a text file",
        isFolder: false,
      },
    ],
  },
  {
    id: 102,
    name: "Fender",
    isFolder: true,
    children: [
      {
        id: 105,
        name: "File 3",
        children: null,
        text: "This is a text file",
        isFolder: false,
      },
      {
        id: 106,
        name: "File 4",
        children: null,
        text: "This is a text file",
        isFolder: false,
      },
    ],
  },
  { id: 103, name: "Acoustic Guitar", children: [], isFolder: true },
  {
    id: 104,
    name: "Electric Guitar",
    children: [
      {
        id: 1001,
        name: "White",
        children: null,
        text: "This is a text file",
        isFolder: false,
      },
      {
        id: 1002,
        name: "Black",
        children: null,
        text: "This is a text file",
        isFolder: false,
      },
      {
        id: 1003,
        name: "Wooden",
        children: null,
        text: "This is a text file",
        isFolder: false,
      },
    ],
    isFolder: true,
  },

  {
    id: 107,
    name: "Yamaha",
    isFolder: true,
    children: [
      {
        id: 108,
        name: "File 3",
        children: null,
        text: "This is a text file",
        isFolder: false,
      },
      {
        id: 109,
        name: "File 4",
        children: null,
        text: "This is a text file",
        isFolder: false,
      },
    ],
  },
  {
    id: 2,
    name: "Songs",
    isFolder: true,
    children: [
      {
        id: 201,
        name: "File 3",
        children: null,
        text: "This is a text file",
        isFolder: false,
      },
      {
        id: 202,
        name: "File 4",
        children: null,
        text: "This is a text file",
        isFolder: false,
      },
    ],
  },
];
