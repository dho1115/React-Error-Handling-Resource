import ComponentOne from './components/componentone/ComponentOne';
import './App.css'
import { ErrorBoundary } from 'react-error-boundary';

function App() {

  const items = [{ category: { type: "apple" } }, { category: { type: "iced tea" } }, { category: "crackers" }, { category: { type: "bottled water" } }, { category: { type: "Rotisserie Chicken" } }, { category: { type: { miscellaneous: "Orange Juice" } } }];

  function ErrorRenderTemplate({ error }) {
    return (
      <div style={{ backgroundColor: 'hotpink', border: '1.5px solid black', padding: '1%', margin: '7.5%' }}>
        <strong>*Caught by error boundary.</strong>
        <h1>SOMETHING WENT WRONG INSIDE App.jsx!!!</h1>
        <h1>I CANNOT .map() through items because: </h1>
        <div style={{ backgroundColor: 'bisque', padding: '5%', margin: '1%', border: '1.5px solid black', display: 'flex', justifyContent: 'center'}}>
          <h3>{JSON.stringify({error, errorMessage: error.message})}</h3>
        </div>
        <h3 style={{color: 'yellow'}}>You can remove this message by going inside ComponentOne.jsx and changing const name = item.category.name.brand.throwErrorHere; to a string or something else. This is what is raisng the error!!!</h3>
      </div>
    )
  }
  
  try {
    return (
      <div>
        <header>
          <h3>CURRENT ITEMS ARE:</h3>
        </header>
        <ErrorBoundary fallbackRender={ErrorRenderTemplate}>
          {
            items.map((val, idx) => <ComponentOne item={val} color={idx}/>)
          }
        </ErrorBoundary>        
      </div>
    )
  } catch (error) {
    return (
      <div>
        <h3>Oh, CRAP!!! App.jsx is telling you that you have an error!!! {error.message}</h3>
      </div>
    )
  }
  
}

export default App
