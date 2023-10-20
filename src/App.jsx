import Auction from "./Components/Auction/Auction";
import Collection from "./Components/Collection/Collection";
import Drop from "./Components/Drop/Drop";
import Header from "./Components/Header/Header";
import Hero from "./Components/Hero/Hero";
import Influencers from "./Components/Influencers/Influencers";
import Trending from "./Components/Trending/Trending";
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
      <Trending/>
      <Auction/>
      <Influencers/>
      <Drop/>
    </div>
  )
}