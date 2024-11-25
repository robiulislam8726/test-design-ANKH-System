import Card from "../Card/Card";

import ramen from '../../assets/ramen.png';



  const Masonry = () => {
    const cards = [
      { title: "1", description: "Description 1", image: ramen },
      { title: "2", description: "Description 1",image: ramen  },
      { title: "3", description: "Description 1", image: ramen },
      { title: "4", description: "Description 1", image: ramen },
      { title: "5", description: "Description 1", image: ramen },
      { title: "6", description: "Description 1", image: ramen },
      { title: "7", description: "Description 1", image: ramen },
      { title: "8", description: "Description 1", image: ramen },
      { title: "9", description: "Description 1", image: ramen },
      { title: "10", description: "Description 1", image: ramen },
      { title: "11", description: "Description 1", image: ramen }
      
    ];
  
    const chunkedCards = [
      cards.slice(0, 3),
      cards.slice(3, 6),
      cards.slice(6, 9),
      cards.slice(9, 12)
    ];
  
    return (
      <div className="gap-4 grid grid-cols-1 md:grid-cols-2">
        {chunkedCards.map((group, index) => (
          <div key={index} className="gap-4 grid">
            {group.map((card, idx) => (
              <Card
                key={idx}
                title={card.title}
                description={card.description}
                image={card.image}
              />
            ))}
          </div>
        ))}
      </div>
    );
  };
  
  export default Masonry;
  