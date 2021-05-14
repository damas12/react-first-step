export const settings = {
  columnCreatorText: 'Add new column',
  cardCreatorText: 'Add new card',
  creator: {
    buttonOK: 'OK',
    buttonCancel: 'Cancel',
    defaultText: 'Add new item',
  },
  search: {
    defaultText: 'Search...',
    icon: 'search',
  },
  defaultListDescription: '<p>I can do all the things!!!</p>',
  defaultColumnIcon: 'list-alt',
  defaultHeaderLogoIcon: 'hotdog',
};

export const pageContents = {
  title: 'My first React app',
  subtitle: 'A simple to-do app, with lists, columns and cards',
};

export const listData = {
  title: 'Things to do <sup>soon!</sup>',
  description: 'Interesting things I want to check out!',
  image: 'http://uploads.kodilla.com/bootcamp/fer/11.react/space.png',
  columns: [
    {
      key: 0,
      title: 'Books',
      icon: 'book',
      cards: [
        {
          key: 0,
          title: 'This Is Going to Hurt',
        },
        {
          key: 1,
          title: 'Interpreter of Maladies',
        },
      ],
    },
    {
      key: 1,
      title: 'Movies',
      icon: 'film',
      cards: [
        {
          key: 0,
          title: 'Harry Potter',
        },
        {
          key: 1,
          title: 'Star Wars',
        },
      ],
    },
    {
      key: 2,
      title: 'Games',
      icon: 'gamepad',
      cards: [
        {
          key: 0,
          title: 'The Witcher',
        },
        {
          key: 1,
          title: 'Skyrim',
        },
      ],
    },
  ],
};

const lists = [
  {
    id: 'list-1',
    title: 'Things to do <sup>soon!</sup>',
    description: 'Interesting things I want to check out!',
    image: 'http://uploads.kodilla.com/bootcamp/fer/11.react/space.png',
  },
];

const columns = [
  {
    id: 'column-1',
    listId: 'list-1',
    title: 'Books',
    icon: 'book',
  },
  {
    id: 'column-2',
    listId: 'list-1',
    title: 'Movies',
    icon: 'film',
  },
  {
    id: 'column-3',
    listId: 'list-1',
    title: 'Games',
    icon: 'gamepad',
  },
  {
    id: 'column-4',
    listId: 'list-2',
    title: 'Strange column',
    icon: 'question',
  },
];
export const faq = {
  title: 'faq',
  image: 'http://uploads.kodilla.com/bootcamp/fer/11.react/space.png',
  text: 'Nunc imperdiet quam vitae nunc sagittis semper porta non augue. Fusce leo leo, elementum ac cursus quis, pellentesque sit amet augue. Ut non nisl ac erat vulputate iaculis. Etiam justo odio, bibendum sit amet massa at, vestibulum porttitor turpis. Morbi erat massa, commodo eu massa ut, rhoncus tincidunt mi. Morbi posuere leo sollicitudin, auctor velit commodo, ullamcorper massa. In quis vulputate enim, faucibus viverra risus. Sed fermentum lacus et diam mollis aliquam. Fusce mollis nibh ac tincidunt iaculis. Suspendisse pulvinar, nulla pellentesque sodales ullamcorper, turpis velit consectetur leo, lobortis molestie massa enim sit amet nulla.',
};
export const info = {
  title: 'info',
  image: 'http://uploads.kodilla.com/bootcamp/fer/11.react/space.png',
  text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tincidunt magna magna, ac feugiat tortor pulvinar sed. Vestibulum nibh erat, dictum ac risus quis, consectetur pulvinar odio. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Morbi cursus mi mollis lectus ultrices tempor. Ut vulputate, urna ac laoreet semper, metus neque interdum dui, et lobortis dolor orci in mauris. Curabitur congue facilisis placerat. Praesent fermentum, risus et scelerisque bibendum, sem felis mollis est, vitae pulvinar sapien mauris ac dui. Integer fermentum, felis at semper dictum, massa odio aliquam justo, ac consectetur quam felis quis nibh. Proin non odio a libero vulputate sagittis. Curabitur posuere nulla eu magna molestie, eget ultrices dui tempus.',
};



const cards = [
  {
    id: 'card-1',
    columnId: 'column-1',
    title: 'This Is Going to Hurt',
  },
  {
    id: 'card-2',
    columnId: 'column-1',
    title: 'Interpreter of Maladies',
  },
  {
    id: 'card-3',
    columnId: 'column-2',
    title: 'Harry Potter',
  },
  {
    id: 'card-4',
    columnId: 'column-2',
    title: 'Star Wars',
  },
  {
    id: 'card-5',
    columnId: 'column-3',
    title: 'The Witcher',
  },
  {
    id: 'card-6',
    columnId: 'column-3',
    title: 'Skyrim',
  },
];

const initialStoreData = {
  app: { ...pageContents },
  lists: [...lists],
  columns: [...columns],
  cards: [...cards],
};

export default initialStoreData;
