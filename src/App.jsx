import ComponentOne from './components/componentone/ComponentOne';
import './App.css'

function App() {

  const items = [{ category: { type: "apple" } }, { category: { type: "iced tea" } }, { category: "crackers" }, {category: {type: "bottled water"}}, {category: {type: "Rotisserie Chicken"}}, {category: {type: {miscellaneous: "Orange Juice"}}}];

  return (
    <div>
      <header>
        <h3>CURRENT ITEMS ARE:</h3>
      </header>
      {
        items.map((val, idx) => <ComponentOne item={val} color={idx}/>)
      }
    </div>
  )
}

export default App
