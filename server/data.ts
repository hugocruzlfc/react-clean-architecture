import { DbUser, DbShout, DbImage } from "./types";

export const users: DbUser[] = [
  {
    id: "user-1",
    type: "user",
    attributes: {
      handle: "darklord",
      avatar: "/cdn/avatars/vader1.jpeg",
      info: "I am the dark lord, the root of all evil. 'Tis I who brought the world to its knees. In blood I was born, and in blood I shall have my vengeance.",
      numShoutsPastDay: 3,
      blockedUserIds: ["user-2"],
      followsUserIds: ["user-3"],
    },
  },
  {
    id: "user-2",
    type: "user",
    attributes: {
      handle: "prettypinkpony",
      numShoutsPastDay: 4,
      avatar: "/cdn/avatars/vader2.jpeg",
      info: "I am Darth Vader, the root of all evil. 'Tis I who brought the world to its knees. In blood I was born, and in blood I shall have my vengeance.",
      blockedUserIds: ["user-1"],
      followsUserIds: ["user-3"],
    },
  },
  {
    id: "user-3",
    type: "user",
    attributes: {
      handle: "fcku",
      avatar: "/cdn/avatars/vader3.jpeg",
      numShoutsPastDay: 2,
      blockedUserIds: [],
      followsUserIds: ["user-1", "user-2"],
    },
  },
];

export const shouts: DbShout[] = [
  {
    id: "shout-1",
    type: "shout",
    createdAt: Date.now(),
    attributes: {
      authorId: "user-1",
      text: "The world sucks!!!!",
      likes: 5,
      reshouts: 0,
    },
    relationships: {
      replies: ["shout-3"],
    },
  },
  {
    id: "shout-2",
    type: "shout",
    createdAt: Date.now() - 6378126,
    attributes: {
      authorId: "user-3",
      text: "The world sucks!!!!",
      likes: 1000,
      reshouts: 666,
    },
    relationships: {
      replies: [],
    },
  },
  {
    id: "shout-3",
    type: "shout",
    createdAt: Date.now() - 8903417,
    attributes: {
      authorId: "user-2",
      text: "You suck @darklord!!!!",
      likes: 1000,
      reshouts: 666,
    },
    relationships: {
      replies: ["shout-4"],
    },
  },
  {
    id: "shout-4",
    type: "shout",
    createdAt: Date.now() - 9338944,
    attributes: {
      authorId: "user-1",
      text: "The world sucks!!!!",
      likes: 1000,
      reshouts: 666,
    },
    relationships: {
      replies: [],
    },
  },
];

export const images: DbImage[] = [
  {
    id: "image-1",
    type: "image",
    attributes: {
      url: "https://media.giphy.com/media/dG7ZiL6ImLyNO/giphy.gif",
    },
  },
];
