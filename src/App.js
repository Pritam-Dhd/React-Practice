import './App.css';
import Header from './Components/Header';
import { Footer,Footer2 } from './Components/Footer';

function App() {
  return (
    <>
    {/* Header and Footer */}
    <div className="App">
      <div className='body'>
          <Header name={"Pritam"} income={20000}/>
          <Header name={"Pritam1"} income={40000}/>
          <Header name={"Pritam2"} income={50000} />
        </div>
      <footer>
        <Footer name={"Pritam"}/>
        <Footer2 />
      </footer>
    </div>

    
    </>
  );
}

export default App;