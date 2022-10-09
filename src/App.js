import "./styles.css";

const names = ["Jeremy", "Sharon", "Che", "Asher", "Ethan"];

for (name of names) {
  console.log(name);
  if (name === "Che") {
    console.log('Che is in my list');
    break;
  }
}

let loading = 0;
while (loading < 100) {
  console.log('website is still loading')
  loading ++;
}

// runs until 100 because 101 is greater than 0

export default function App() {
  return (
    <div className="App">
      <h1>For/While Loop</h1>
    </div>
  );
}
