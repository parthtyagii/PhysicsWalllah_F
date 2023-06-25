import './App.css';
import Main from './Components/Main/Main';
import Navbar from './Components/Navbar/Navbar';



function App() {

  return (
    <div className='w-full min-h-screen flex flex-col justify-start items-center bg-gray-100 '>

      <Navbar />
      <Main />

    </div>
  )
};

export default App;