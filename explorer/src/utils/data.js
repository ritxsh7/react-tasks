export const data = {
  name: "react-tutorial",
  id: 1,
  isFolder: true,
  isRoot: true,
  folders: [
    {
      name: "node_modules",
      id: 2,
      isFolder: true,
      folders: [
        {
          name: ".bin",
        },
      ],
    },
    {
      name: "src",
      id: 3,
      isFolder: true,
      folders: [
        {
          name: "components",
          id: 4,
          isFolder: true,
          folders: [
            {
              name: "Header.jsx",
              isFolder: false,
            },
            {
              name: "Icon.jsx",
              isFolder: false,
            },
          ],
        },
        {
          name: "index.html",
          isFolder: false,
        },
      ],
    },
  ],
};
