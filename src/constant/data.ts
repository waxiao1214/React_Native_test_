const RECT_1 = require('../assets/img/Rect_1.png')
const RECT_2 = require('../assets/img/Rect_2.png')
const RECT_3 = require('../assets/img/Rect_3.png')
const USER = require('../assets/img/user.png')

export const user = {
  image: USER,
  firstName: "Brooklyn",
  lastName: "Simmons"
}

export const posts = [
  {
    id: "_1_post",
    backImage: RECT_1,
    title: "New Year Anti-COVID...",
    city: "Berlin",
    distance: "5km",
    date: "31 Dec 2020",
    rating: "3 / 14",
    score: 4.7,
  },
  {
    id: "_2_post",
    backImage: RECT_2,
    title: "Party Party",
    city: "Berlin",
    distance: "5km",
    date: "31 Dec 2020",
    rating: "3 / 14",
    score: 3,
  },
  {
    id: "_3_post",
    backImage: RECT_3,
    title: "Another one party",
    city: "Berlin",
    distance: "5km",
    date: "31 Dec 2020",
    rating: "3 / 14",
    score: 4.7,
  }
];

export const reviews = [
  {
    post_id: "_1_post",
    reviews: [
      {
        image_url: "",
        rating: 5,
        commit: "",
        edited: true,
      },
      {
        image_url: "",
        rating: 5,
        commit: "",
        edited: true,
      },
      {
        image_url: "",
        rating: 5,
        commit: "",
        edited: true,
      },
      {
        image_url: "",
        rating: 5,
        commit: "",
        edited: true,
      },
      {
        image_url: "",
        rating: 5,
        commit: "",
        edited: true,
      },
    ],
  },
  {
    post_id: "_2_post",
    reviews: [
      {
        image_url: "",
        rating: 5,
        commit: "",
        edited: true,
      },
      {
        image_url: "",
        rating: 5,
        commit: "",
        edited: true,
      },
      {
        image_url: "",
        rating: 5,
        commit: "",
        edited: true,
      },
      {
        image_url: "",
        rating: 5,
        commit: "",
        edited: true,
      },
      {
        image_url: "",
        rating: 5,
        commit: "",
        edited: true,
      },
      {
        image_url: "",
        rating: 5,
        commit: "",
        edited: true,
      },
    ],
  },
  {
    post_id: "_3_post",
    reviews: [
      {
        image_url: "",
        rating: 5,
        commit: "",
        edited: true,
      },
      {
        image_url: "",
        rating: 5,
        commit: "",
        edited: true,
      },
      {
        image_url: "",
        rating: 5,
        commit: "",
        edited: true,
      },
      {
        image_url: "",
        rating: 5,
        commit: "",
        edited: true,
      },
    ],
  },
];