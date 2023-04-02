import Card from "@/components/card/Card";
import CardList from "@/components/cardList/CardList";
import CardListSelect from "@/components/cardListSelect/CardListSelect";
import React from "react";
const cards = [
  {
    id: 1,
    instaName: "@lorenzo",
    photo: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg",
  },
  {
    id: 2,
    instaName: "@sanza",
    photo: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg",
  },
  {
    id: 3,
    instaName: "@lorenzo",
    photo: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg",
  },
  {
    id: 4,
    instaName: "@sanza",
    photo: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg",
  },
];

export default function page() {
  return (
    <>
      <CardListSelect cards={cards} />
    </>
  );
}
