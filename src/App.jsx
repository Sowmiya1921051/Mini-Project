import Collection from "./Components/Collection/Collection";
import Header from "./Components/Header/Header";
import Hero from "./Components/Hero/Hero";
import Wallet from "./Components/Wallet/Wallet";
import Work from './Components/Work/Work'

export default function App() {
  return (
    <div className="bg-violet-black ">
      <Header/>
      <Hero/>
      <Wallet/>
      <Work/>
      <Collection/>
    </div>
  )
}