import Card1 from "../Card/Card1";
import Card2 from "../Card/Card2";
import Card3 from "../Card/Card3";
import Card4 from "../Card/Card4";
import Card5 from "../Card/Card5";
import Card6 from "../Card/Card6";





const Masonry = () => {


  const cards = [
    { Component: Card1, props: { title: "新東京オフィスの地図はこちら", description: "〒105-0001 港区虎ノ門2-7-16 エグゼクティブタワー虎ノ門 504", image: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg" } },
    { Component: Card2, props: { title: "Card 2", description: "Description 2", image: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg" } },
    { Component: Card3, props: { title: "Card 3", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime illum voluptate natus accusantium ipsum error alias, commodi nulla labore sequi, amet aliquam sed similique so" } },
    { Component: Card4, props: { title: "電話・FAX番号が変わりました", description: "Description 4", image: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg" } },
    { Component: Card5, props: { title: "虎ノ門の由来って？", description: "Description 5"  } },
    { Component: Card6, props: { title: "Card 6", description: "Description 6", highlight: true } },

  ];

  // Divide cards into two chunks for two-column layout
  const chunkedCards = [
    cards.slice(0, 3), // First column: Cards 1, 2, 3
    cards.slice(3, 6), // Second column: Cards 4, 5, 6
  ];

  return (
    <div className="gap-4 grid grid-cols-1 md:grid-cols-2 mt-2">
      {chunkedCards.map((group, index) => (
        <div key={index} className="gap-4 grid">
          {group.map(({ Component, props }, idx) => (
            <Component key={idx} {...props} />
          ))}
        </div>
      ))}
    </div>
  );
};

export default Masonry;
