import './App.css';
import Navbar from './components/navbar/Navbar';
import Slider from './components/slider/Slider';
import DealOfTheDay from './components/dealOfTheDay/DealOfTheDay';
import Footer from './components/footer/Footer';

const products = [
  {slider:[{
    title: "Indian wear",
    imgUrl:"https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/1/29/444124dd-05bd-499d-a9b9-97419918c49e1643437121498-Valentine-s-Edit_Dk.jpg"
  },
  {
    title: "T-shirts",
    imgUrl:"https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/1/29/bb8d81a2-200e-4c56-a3a5-c541bdf8f2e41643443238208-T-Shirts_Desk.jpg"
  },
  {
    title: "Handbags",
    imgUrl:"https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/1/29/04111d50-dd48-4397-aef7-37e72bc41add1643443635917-Handbags---Wallets_Desk.jpg"
  }


  ]},
   {dealsOfTheDay:[{
       title : "under 799",
       imgUrl : "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/1/31/1f8a00f6-f94c-4982-b2b6-21328917061d1643598555257-Under799.jpg"
     },
     {
      title : "casual wear",
      imgUrl : "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/1/29/1af19962-e430-4376-8ca5-ec64c85750c81643442861409-Casual-Wear--1-.jpg"
    },
    {
      title : "kurtas",
      imgUrl : "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/1/29/257ae827-746c-4123-ad26-fc5e6374870c1643442909495-Kurtas.jpg"
    },
    {
      title : "flats and heals",
      imgUrl : "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/1/29/493664ca-f883-4d9b-8bca-4ae63ad1c4e51643442958391-Flats---Heels.jpg"
    },
    {
      title : "kids wear",
      imgUrl : "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/1/29/3cb258ea-5d16-48da-b2da-84aa6b307e561643442993043-Kids-Wear.jpg"
    },
    ]}


]

function App() {
  
  return (
    <div className="App">
      <Navbar/>
      <Slider prod = {products[0]}/>
      <DealOfTheDay prod = {products[1]}/>
      <Footer/>
    </div>
  );
}

export default App;
