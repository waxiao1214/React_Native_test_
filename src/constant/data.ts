const RECT_1 = require('../assets/img/Rect_1.png')
const RECT_2 = require('../assets/img/Rect_2.png')
const RECT_3 = require('../assets/img/Rect_3.png')
const USER = require('../assets/img/user.png')
const VOTER1 = require('../assets/img/voter1.png')
const VOTER2 = require('../assets/img/voter2.png')
const VOTER3 = require('../assets/img/voter3.png')

export const user = {
  image: USER,
  firstName: "Brooklyn",
  lastName: "Simmons",
  score: 4.7,
  rating: 128
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
    score: 4.1,
    reviews: 12,
  },
  {
    id: "_2_post",
    backImage: RECT_2,
    title: "Party Party",
    city: "Berlin",
    distance: "5km",
    date: "31 Dec 2020",
    rating: "3 / 14",
    reviews: 81,
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
    reviews: 123,
    score: 4.7,
  }
];

export const reviews = [
  {
    post_id: "_1_post",
    reviews: [
      {
        id:"_1_review_1_post",
        image: VOTER3,
        rating: 3,
        voter: "Markus Lanze",
        commit: "Markus Lanze Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt fermentum blandit nibh rhoncus at. 23 m",
        edited: true,
      },
      {
        id:"_2_review_1_post",
        image: VOTER1,
        voter: "Markus Lanze",
        rating: 4,
        commit: "Markus Lanze Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt fermentum blandit nibh rhoncus at. 23 m",        edited: true,
      },
      {
        id:"_3_review_1_post",
        image: VOTER2,
        voter: "Markus Lanze",
        rating: 5,
        commit: "Markus Lanze Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt fermentum blandit nibh rhoncus at. 23 m",        edited: true,
      },
      {
        id:"_4_review_1_post",
        image: VOTER3,
        rating: 3,
        voter: "Markus Lanze",
        commit: "Markus Lanze Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt fermentum blandit nibh rhoncus at. 23 m",        edited: true,
      },
      {
        id:"_5_review_1_post",
        image: VOTER1,
        voter: "Markus Lanze",
        rating: 4,
        commit: "Markus Lanze Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt fermentum blandit nibh rhoncus at. 23 m",        edited: true,
      },
    ],
  },
  {
    post_id: "_2_post",
    reviews: [
      {
        id:"_1_review_2_post",
        image: VOTER2,
        voter: "Markus Lanze",
        rating: 5,
        commit: "Markus Lanze Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt fermentum blandit nibh rhoncus at. 23 m",        edited: true,
      },
      {
        id:"_2_review_2_post",
        voter: "Markus Lanze",
        image: VOTER3,
        rating: 3,
        commit: "Markus Lanze Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt fermentum blandit nibh rhoncus at. 23 m",        edited: true,
      },
      {
        id:"_3_review_2_post",
        voter: "Markus Lanze",
        image: VOTER2,
        rating: 4,
        commit: "Markus Lanze Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt fermentum blandit nibh rhoncus at. 23 m",        edited: true,
      },
      {
        id:"_4_review_2_post",
        image: VOTER1,
        rating: 5,
        voter: "Markus Lanze",
        commit: "Markus Lanze Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt fermentum blandit nibh rhoncus at. 23 m",        edited: true,
      },
      {
        id:"_5_review_2_post",
        image: VOTER3,
        rating: 3,
        voter: "Markus Lanze",
        commit: "Markus Lanze Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt fermentum blandit nibh rhoncus at. 23 m",        edited: true,
      },
      {
        id:"_6_review_2_post",
        image: VOTER2,
        rating: 4,
        voter: "Markus Lanze",
        commit: "Markus Lanze Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt fermentum blandit nibh rhoncus at. 23 m",        edited: true,
      },
    ],
  },
  {
    post_id: "_3_post",
    reviews: [
      {
        id:"_1_review_3_post",
        image: VOTER1,
        rating: 5,
        voter: "Markus Lanze",
        commit: "Markus Lanze Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt fermentum blandit nibh rhoncus at. 23 m",        edited: true,
      },
      {
        id:"_2_review_3_post",
        image: VOTER2,
        rating: 3,
        voter: "Markus Lanze",
        commit: "Markus Lanze Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt fermentum blandit nibh rhoncus at. 23 m",        edited: true,
      },
      {
        id:"_3_review_3_post",
        image: VOTER3,
        rating: 4,
        voter: "Markus Lanze",
        commit: "Markus Lanze Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt fermentum blandit nibh rhoncus at. 23 m",        edited: true,
      },
      {
        id:"_4_review_3_post",
        image: VOTER2,
        rating: 5,
        voter: "Markus Lanze",
        commit: "Markus Lanze Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt fermentum blandit nibh rhoncus at. 23 m",        edited: true,
      },
    ],
  },
];