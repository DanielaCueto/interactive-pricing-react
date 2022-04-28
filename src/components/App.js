import "../styles/App.css";
import {useState} from 'react'

function App() {
  const viewData = [
    {
      pageViews: "10K",
      monthlyCost: 8,
    },
    {
      pageViews: "50K",
      monthlyCost: 12,
    },
    {
      pageViews: "100K",
      monthlyCost: 16,
    },
    {
      pageViews: "500K",
      monthlyCost: 24,
    },
    {
      pageViews: "1M",
      monthlyCost: 36,
    },
  ]; 

  const [selected, setSelected] = useState(2); 
  const [discountApplied, setDiscountApplied] = useState(false)
  const handleSlider = (ev) => {
    const selectedPacket = ev.target.value; 
    setSelected(selectedPacket) 
  }
  const handleDiscount = (ev) =>{
    const inputChecked= ev.target.checked; 
        setDiscountApplied(inputChecked)
  }
  const selectedPacketObject = viewData[selected]
  let finalPrice = selectedPacketObject.monthlyCost
  if(discountApplied){
    finalPrice = finalPrice * 0.75; 
  }
  return (
    <div className="App">
      <h1>Interactive Pricing Component</h1>
      <div className="page">
        <header className="page__header">
          <h4 className="page__header--title">Simple, traffic-based pricing</h4>
          <span className="page__header--info1">
            Sign-up for our 30 day trial
          </span>
          <br></br>
          <span className="page__header--info2">No credit card required</span>
        </header>
        <main className="main">
          <div className="main__card">
          <span className="main__card--pageviews"> {selectedPacketObject.pageViews} PAGEVIEWS</span>
          <input
            type="range"
            min="0"
            max={viewData.length - 1}
            value={selected}
            name="slider"
            className="page__main--slider"
            onChange={handleSlider}
          />
          <span className="main__card--pricemonth">${finalPrice.toFixed(2)}/month</span>
          </div>
          <div className="main__switch">
            <span>Monthly Billing</span>
            <label className="main__switch--toggle"> 
            <input type="checkbox" className="main__switch--input" onChange={handleDiscount} checked={discountApplied}/>
            <span className="main__switch--sliderround"></span>
            </label>
            <span>Yearly Billing</span>
            <span> - 25%</span>
          </div>
          <ul className="main__listcontainer">
              <li className="main__listcontainer--item">Unlimited websites</li>
              <li className="main__listcontainer--item">100% data ownership</li>
              <li className="main__listcontainer--item">Email reports</li>
          </ul>
          <button className="main__button">Start my trial</button>
        </main>
      </div>
    </div>
  );
}

export default App;
