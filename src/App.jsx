import Card from "./components/Card";

function App() {
  // i direclty took the images from picsum.photos and added the address of it.
  const cards = [
    {
      image: "https://picsum.photos/id/1015/100/100",
      title: "Card 1",
      description: "This is card 1 description."
    },
    {
      image: "https://picsum.photos/id/1025/100/100",
      title: "Card 2",
      description: "This is card 2 description."
    },
    {
      image: "https://picsum.photos/id/1035/100/100",
      title: "Card 3",
      description: "This is card 3 description."
    },
    {
      image: "https://picsum.photos/id/1044/100/100",
      title: "Card 4",
      description: "This is card 4 description."
    },
    {
      image: "https://picsum.photos/id/1050/100/100",
      title: "Card 5",
      description: "This is card 5 description."
    },
    {
      image: "https://picsum.photos/id/1069/100/100",
      title: "Card 6",
      description: "This is card 6 description."
    },
    {
      image: "https://picsum.photos/seed/picsum/450/300",
      title: "Card 7",
      description: "This is card 7 description."
    },
    {
      image: "https://picsum.photos/200/300",
      title: "Card 8",
      description: "This is card 8 description."
    },
    {
      image: "https://picsum.photos/id/12/3888/2592",
      title: "Card 9",
      description: "This is card 9 description."
    }
  ];

  return (
    <div className="container">
      <h1>All the cards are here.</h1>

      <div className="card-list">
        {cards.map((item, index) => (
          <Card
            key={index}
            image={item.image}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </div>
  );
}

export default App;