import './App.css';
import FourthComponent from './components/FourthComponent';
import Header from "./components/Header";
import SecondComponent from './components/secondComponent';
import ThirdComponent from './components/ThirdComponent';

export default function App()
{
  return <div>
    <Header />
    <SecondComponent />
    <ThirdComponent />
    <FourthComponent />
  </div>
}