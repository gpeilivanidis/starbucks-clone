import Navbar from "./components/Navbar";
import Section from "./components/Section";
import imgA from './assets/images/a.webp';
import imgB from './assets/images/b.webp';
import imgC from './assets/images/c2.webp';
import imgD from './assets/images/d.jpg';
import imgE from './assets/images/e.webp';
import imgF from './assets/images/f.webp';

function App() {

    const images = [
        {url: imgA, alt: "illustration of hamburger, phone and coffee"},
        {url: imgB, alt: "illustration of colored empowered person holding empowering coffee"},
        {url: imgC, alt: "illustration of hamburger, phone and coffee"},
        {url: imgD, alt: "illustration of hamburger, phone and coffee"},
        {url: imgE, alt: "illustration of hamburger, phone and coffee"},
        {url: imgF, alt: "illustration of hamburger, phone and coffee"},
    ];
    
  return (
    <>
        <header>
            <Navbar />
        </header>

        <main>
            <Section
             sectionClass="section-a"
             img={images[0]}
             infoClass="py5 px6"
             infoContainerClass="flex-column justify-space-between items-center">
                
                <h1 className='text-center'>Turn your usual into free faves*</h1>

                <a href="#" className='btn'>Join Starbucks Rewards</a>
    
            </Section>

            <Section
             sectionClass="section-b"
             img={images[1]}
             swapOrder={true}
             infoClass="py4 px5"
             infoContainerClass="flex-column justify-center items-center text-center">

                <h2 className="semi-bold mbe3">Planet-positive tips</h2>

                <p className="text-md">April is earth month, but our commitment to reducing our environmental impact is year round. Try these tips on your next Starbucks visit.</p>

                <a href="#" className="btn mbs4">Learn how</a>

                
            </Section>

            <Section
             sectionClass="section-c"
             img={images[2]}
             infoClass="py5 px6"
             infoContainerClass="flex-column justify-center items-center text-center">
                
                <h2 className='semi-bold mbe3'>Iced shaken awakening</h2>

                <p className="text-md">Introducing our new Iced Toasted Vanilla Oatmilk Shaken Espresso with rich, creamy layers and nondairy goodness.</p>

                <a href="#" className="btn mbs4">Order now</a>
    
            </Section>

            <Section
             sectionClass="section-d"
             img={images[3]}
             swapOrder={true}
             infoClass="py4 px5"
             infoContainerClass="flex-column justify-center items-center text-center">

                <h2 className="semi-bold text-md mbe3">Vegetarian goodness</h2>

                <p className="text-sm">Our Spinach, Feta & Egg White Wrap offers a meatless way to seize the day.</p>

                <a href="#" className="btn mbs4">Order now</a>

                
            </Section>

            <Section
             sectionClass="section-e"
             img={images[5]}
             infoClass="py4 px5"
             infoContainerClass="flex-column justify-center items-center text-center">

                <h2 className="semi-bold mbe3">Earning 4,500 Bonus Stars is Super Starifying</h2>

                <p className="text-sm">Earn more Stars and even more Rewards with a <strong>$0 intro annual fee for your first year</strong> with the Starbucks® Rewards Visa® Card. Plus your Stars won’t expire – an exclusive Starbucks benefit for cardmembers. Now that’s Super Starifying.</p>

                <a href="#" className="btn mbs4">Learn more</a>

                
            </Section>

            <div className="disclmaimer text-xs text-center my5 pbs7">
                *At participating stores. Some restrictions apply. See <a href="#">starbucks.com/rewards</a> for details.
            </div>
        </main>

    </>
  );
}

export default App;
