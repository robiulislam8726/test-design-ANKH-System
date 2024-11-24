import Card from "../Card/Card";

import ramen from '../../assets/ramen.png';



  const Masonry = () => {
    const cards = [
      { title: "Robiul", description: "Description 1", image: ramen }
      
    ];
  
    const chunkedCards = [
      cards.slice(0, 3),
      cards.slice(3, 6),
      cards.slice(6, 9),
      cards.slice(9, 12)
    ];
  
    return (
      <div className="grid mt-2 grid-cols-1 md:grid-cols-2 gap-4">
        {chunkedCards.map((group, index) => (
          <div key={index} className="grid gap-4">
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
  