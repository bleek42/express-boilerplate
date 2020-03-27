/* eslint-disable strict */
const uuid = require('uuid/v4');

const bookmarks = [
  { id: uuid(),
    title: 'Reddit',
    url: 'https://www.reddit.com',
    description: 'The front page of the internet',
    rating: 5
  },
  { id: uuid(),
    title: 'Quora',
    url: 'https://www.quora.com',
    description: 'A place to gain and share knowledge',
    rating: 4
  },
  { id: uuid(),
    title: 'YouTube',
    url: 'https://www.youtube.com',
    description: 'Broadcast yourself',
    rating: 5
  },
];
  
module.exports = { bookmarks };