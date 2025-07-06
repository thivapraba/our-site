import React from "react";
import SquareCard from "./SquareCards";

const cardsData = [
  {
    src: "https://picsum.photos/id/1015/400/400",
    title: "Bouquet 1",
    subtitle: "Elegant Roses",
  },
  {
    src: "https://picsum.photos/id/1016/400/400",
    title: "Bouquet 2",
    subtitle: "Fresh Tulips",
  },
  {
    src: "https://picsum.photos/id/1018/400/400",
    title: "Bouquet 3",
    subtitle: "Spring Mix",
  },
  {
    src: "https://picsum.photos/id/1020/400/400",
    title: "Bouquet 4",
    subtitle: "Summer Vibes",
  },
  {
    src: "https://picsum.photos/id/1024/400/400",
    title: "Bouquet 5",
    subtitle: "Classic Whites",
  },
];

function PentagonLayout() {
  return (
    <div className="cards-grid">
      {cardsData.map(({ src, title, subtitle }, i) => (
        <SquareCard key={i} src={src} title={title} subtitle={subtitle} />
      ))}
    </div>
  );
}

export default PentagonLayout;
