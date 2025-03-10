import Card from "./components/Card";

export default function App() {
  const fruits = [
    {
      id: 1337,
      name: "🍌 Banana",
      color: "yellow",
    },
    {
      id: 1338,
      name: "🍏 Apple",
      color: "green",
    },
    {
      id: 1339,
      name: "🍊 Orange",
      color: "orange",
    },
    {
      id: 1340,
      name: "🫐 Blue Berries",
      color: "purple",
    },
    {
      id: 1341,
      name: "🥭 Mango",
      color: "red",
    },
  ];

  return (
    <div className="app">
      {fruits.map((fruit) => {
        return <Card key={fruit.id} name={fruit.name} color={fruit.color} />; // zu beginn des Ausführungsblocks ist ein RETURN zu verwenden
      })}
    </div>
  );
}
