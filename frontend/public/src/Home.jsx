// import React, { useState, useEffect } from 'react';
// import flowring from './assets/flowring.jpeg';
// import seed from './assets/seed.jpeg';
// import germination from './assets/germination.jpeg';
// import sprout from './assets/sprout.jpeg';
// import sp from './assets/sp.jpeg';
// import vegitation from './assets/vegitation.jpeg';
// import ripping from './assets/ripping.jpeg';
// import fruit from './assets/fruitformation.jpeg';
// import './Home.css';
// import Header from './Header';
// import App from './App';
// import Footer from './Footer'

// const Home = () => {
  // const [showModal, setShowModal] = useState(true);

  // const closeModal = () => {
  //   setShowModal(false);
  // };

  // useEffect(() => {
  //   setShowModal(true);
  // }, []);

//   return (
//     <div>
//       <Header />
//       {showModal && <App closeModal={closeModal} />}
//       <h1>TOMATO LIFE CYCLE</h1>
//       <div className="timeline">
//         <div className="container left">
//           <div className="content">
//             <div className="content_pic_text">
//               <img className="img_dim" src={seed} alt="src" />
//               <h2>Seed planting</h2>
//             </div>
//             <div>
//               <p className="Content_text">
//                 Tomato seeds are typically planted indoors in pots about 6-8 weeks before the last frost. The seeds need to be planted in moist, well-draining soil at a depth of about ¼ inch.
//               </p>
//             </div>
//           </div>
//         </div>
//         <div className="container right">
//           <div className="content">
//             <div className="content_pic_text">
//               <img className="img_dim" src={germination} alt="src" />
//               <h2>Germination<span>(6-8 days)</span></h2>
//             </div>
//             <div>
//               <p className="Content_text">
//                 This is the stage when the seed sprouts and a root emerges. It takes about 5-10 days for tomato seeds to germinate. Once the seedlings have emerged, they need to be placed in a sunny location and watered regularly.
//               </p>
//             </div>
//           </div>
//         </div>
//         <div className="container left">
//           <div className="content">
//             <div className="content_pic_text">
//               <img className="img_dim" src={sprout} alt="src" />
//               <h2>Sprouting<span>(31-43 days)</span></h2>
//             </div>
//             <div>
//               <p className="Content_text">
//                 The sprout will continue to grow roots and leaves. This stage lasts for about 2-3 weeks. During this time, the seedlings should be thinned out so that there is only one plant per pot.
//               </p>
//             </div>
//           </div>
//         </div>
//         <div className="container right">
//           <div className="content">
//             <div className="content_pic_text">
//               <img className="img_dim" src={sp} alt="src" />
//               <h2>Seedling <span>(45+ days)</span></h2>
//             </div>
//             <div>
//               <p className="Content_text">
//                 Once the plant has a few sets of true leaves, it is considered a seedling. This is the time to transplant tomato seedlings outdoors, if you are growing them in pots. Seedlings should be transplanted after the danger of frost has passed and the soil temperature has warmed to at least 60 degrees Fahrenheit.
//               </p>
//             </div>
//           </div>
//         </div>
//         <div className="container left">
//           <div className="content">
//             <div className="content_pic_text">
//               <img className="img_dim" src={vegitation} alt="src" />
//               <h2>Vegetative growth <span>(51-68 days)</span></h2>
//             </div>
//             <div>
//               <p className="Content_text">
//                 The plant will focus on growing strong stems and leaves during this time. This stage lasts for about 4-6 weeks. During this time, the plants should be watered regularly and fertilized with a balanced fertilizer.
//               </p>
//             </div>
//           </div>
//         </div>
//         <div className="container right">
//           <div className="content">
//             <div className="content_pic_text">
//               <img className="img_dim" src={flowring} alt="src" />
//               <h2>Flowering<span>(71+ days)</span></h2>
//             </div>
//             <div>
//               <p className="Content_text">
//                 Flowers will begin to appear on the plant. This is a sign that the plant is mature and ready to start producing fruit. Flowering typically begins 4-6 weeks after transplanting outdoors.
//               </p>
//             </div>
//           </div>
//         </div>
//         <div className="container left">
//           <div className="content">
//             <div className="content_pic_text">
//               <img className="img_dim" src={fruit} alt="src" />
//               <h2>Fruit formation<span>(111-121 days)</span></h2>
//             </div>
//             <div>
//               <p className="Content_text">
//                 The flowers will pollinate and develop into tomatoes. Fruit development takes about 4-6 weeks, depending on the variety of tomato. During this time, the plants should be watered regularly and fertilized with a fertilizer that is high in phosphorus.
//               </p>
//             </div>
//           </div>
//         </div>
//         <div className="container right">
//           <div className="content">
//             <div className="content_pic_text">
//               <img className="img_dim" src={ripping} alt="src" />
//               <h2>Ripening<span>(126-131 days)</span></h2>
//             </div>
//             <div>
//               <p className="Content_text">
//                 The tomatoes will change color from green to red (or yellow, or orange, depending on the variety) as they ripen. Tomatoes take about 3-4 weeks to ripen. Once the tomatoes are ripe, they can be harvested by carefully picking them from the vine.
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//       <Footer />
//     </div>
//   );
// };

// export default Home;

import React, { useState,useEffect  } from 'react';
import flowring from './assets/flowring.jpeg';
import seed from './assets/seed.jpeg';
import germination from './assets/germination.jpeg';
import sprout from './assets/sprout.jpeg';
import sp from './assets/sp.jpeg';
import vegitation from './assets/vegitation.jpeg';
import ripping from './assets/ripping.jpeg';
import fruit from './assets/fruitformation.jpeg';
import './Home.css';
import Header from './Header';
import Footer from './Footer';
import right from './assets/right-arrow.png';
import left from './assets/arrow.png';
import cycle from './assets/cycle.jpg';
import App from './App'

const Home = () => {
  const [currentCard, setCurrentCard] = useState(0);
  const [showModal, setShowModal] = useState(true);

  const closeModal = () => {
    setShowModal(false);
  };

  useEffect(() => {
    setShowModal(true);
  }, []);

  const cards = [
    {
      img: seed,
      title: "Seed planting",
      text: "Tomato seeds are sensitive to temperature fluctuations and require a consistent temperature of around 70-80 degrees Fahrenheit for optimal germination. It's important to use a seed-starting mix that is light and sterile to prevent diseases. Providing bottom heat or using a seedling heat mat can promote quicker and more uniform germination."
      },
    {
      img: germination,
      title: "Germination (6-8 days)",
      text: "During germination, maintaining consistent moisture is crucial. Using a humidity dome or covering the pots with plastic wrap can help retain moisture until the seeds sprout. Once seedlings appear, thinning them out ensures that each plant has enough space and resources to grow vigorously."
     },
    {
      img: sprout,
      title: "Sprouting (31-43 days)",
      text: "As seedlings develop, gradually introduce them to outdoor conditions to acclimate them (a process known as hardening off) before transplanting them into the garden. This helps prevent transplant shock and prepares them for the change in environment."
     },
    {
      img: sp,
      title: "Seedling (45+ days)",
      text: "When transplanting seedlings outdoors, choose a sunny location with well-drained soil enriched with organic matter. Space tomato plants according to their specific variety recommendations to ensure adequate airflow and sunlight penetration, which helps prevent diseases like blight."
     },
    {
      img: vegitation,
      title: "Vegetative growth (51-68 days)",
      text: "Supporting tomato plants with stakes, cages, or trellises as they grow taller and develop heavier fruit prevents branches from breaking and keeps fruit off the ground, reducing the risk of pests and diseases. Regular pruning of suckers (side shoots) directs the plant's energy into fruit production." },
    {
      img: flowring,
      title: "Flowering (71+ days)",
      text: "Encouraging pollinators such as bees by planting companion flowers nearby can improve fruit set. If growing tomatoes in a greenhouse or indoor setting, manually shaking the plants gently can aid in pollination. Maintaining consistent soil moisture during flowering supports healthy fruit development."
     },
    {
      img: fruit,
      title: "Fruit formation (111-121 days)",
      text: "Applying mulch around tomato plants helps retain soil moisture and regulate soil temperature, particularly during hot weather. This promotes even fruit development and reduces water stress, which can cause blossom end rot—a common issue in tomatoes."
    },
    {
      img: ripping,
      title: "Ripening (126-131 days)",
      text: "To encourage even ripening, gently rotate tomatoes as they mature, ensuring all sides receive adequate sunlight. Harvest tomatoes when they are firm and fully colored, as they continue to ripen after being picked. Storing tomatoes at room temperature, away from direct sunlight, can extend their shelf life." }
  ];

  const nextCard = () => {
    setCurrentCard((prevCard) => (prevCard + 1) % cards.length);
  };

  const prevCard = () => {
    setCurrentCard((prevCard) => (prevCard - 1 + cards.length) % cards.length);
  };

  useEffect(()=>{
    const handlekeyDown = (event)=>{
      if (event.key==='ArrowRight'){
        nextCard();
      }else if(event.key==='ArrowLeft'){
        prevCard();
      }
    };

    window.addEventListener('keydown',handlekeyDown);

    return ()=>{
      window.removeEventListener('keydown',handlekeyDown);
    };
  },[])

  

  return (
    <div className='Top_cont'>
      <Header />
      {/* {showModal && <App closeModal={closeModal} />} */}
      <h1>Introduction to Tomato cultivation</h1>
      <div className="Top_cont_sub">
          <div className="Top_cont_sub1">
            <img src={cycle}/>
            <h4>Life Cycle</h4>
          </div>
        {/* <div className="Top_cont_sub2">
          <div className="Top_cont_sub2_text">
            <p><span>Key Crop for Farmers:</span> Tomatoes are crucial for small and marginal farmers, providing substantial income through multiple harvests annually</p>
          </div>
          <div className="Top_cont_sub2_text">
            <p><span>Versatile and Integral:</span> Thriving in diverse Indian climates, tomatoes are vital to the food processing industry, used in products like ketchup and sauces.</p>
          </div>
          <div className="Top_cont_sub2_text">
          <p><span>Challenges and Improvements:</span> Despite price volatility, efforts in storage and market linkages are critical for stability.</p>
          </div>
          <div className="Top_cont_sub2_text">
          <p><span>Technological Advancements:</span>  Advances, subsidies, and sustainable practices have boosted yields, efficiency, and align with India's agricultural sustainability goals.</p>
          </div>
          <div className="Top_cont_sub2_text">
            <p><span>Economic and Employment Impact:</span> Tomato cultivation supports economic stability through domestic demand, exports, and significantly contributes to rural employment.</p>
          </div>
        </div> */}
        <div className="Top_cont_sub2_text">
    <ul>
        <li >
            <p><span>Key Crop for Farmers:</span> Tomatoes are crucial for small and marginal farmers, providing substantial income through multiple harvests annually. Their versatility in culinary use and high market demand ensure consistent profitability year-round.</p>
        </li>
        <li >
            <p><span>Versatile and Integral:</span> Thriving in diverse Indian climates, tomatoes are vital to the food processing industry. They are key ingredients in products like ketchup and sauces, sustaining a robust market presence and supporting agricultural diversification.</p>
        </li>
        <li >
            <p><span>Challenges and Improvements:</span> Despite price volatility, efforts in storage and market linkages are critical for stability. Innovations in cold storage and logistics infrastructure are pivotal in mitigating losses and ensuring fair market prices for farmers.</p>
        </li>
        <li >
            <p><span>Technological Advancements:</span> Advances, subsidies, and sustainable practices have boosted yields, efficiency, and align with India's agricultural sustainability goals. Investments in greenhouse technology and water-efficient irrigation systems enhance productivity while conserving natural resources.</p>
        </li>
        <li >
            <p><span>Economic and Employment Impact:</span> Tomato cultivation supports economic stability through domestic demand, exports, and significantly contributes to rural employment.</p>
        </li>
    </ul>
</div>

      </div>
      <h1 className='Top_cont_h1'>Stage of tomato growth</h1>
      <div className="timeline">    
        {cards.map((card, index) => (
          <div key={index} className={`container ${index === currentCard ? 'active' : ''}`}>
            <div className="cont_test">
            <div className="navigation">              
              <img onClick={prevCard} src={left} alt='left'/>
            </div>  
            <div className="content_home">  
                <div className="content_pic_text">
                <img className="img_dim" src={card.img} alt={card.title} />
                <h2>{card.title}</h2>
              </div>
              <div>
                <p className="Content_text">{card.text}</p>
              </div>
            </div>
           
            <div className="navigation">
             <img onClick={nextCard} src={right} alt='right'/>
            </div>  
            </div>         
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Home;







