import "./aboutDescription.css"
// import { Link } from "react-router-dom";

export default function AboutDescription() {
  return (
    <>
      <div className="aboutWrapper">
        <div className="aboutPictureContainer">
          <img src="" alt="" className="aboutImg" />
        </div>
        <div className="aboutText">
          <h1 className="aboutTitleMain"> OUR CARE </h1>
          <p className="aboutDescription"> The original pioneers of Tel Aviv City's Dog Daycares. We pride ourselves on treating your pets with the same kindness and affection that they receive at home. Our pet pampering services include Daycare, Boarding and Grooming services. We also offer Dog Walking, In-Home Pet Feeding, Pick-up, and Drop-off. You may also stop by and check out our retail section. We also carry a nice selection of fine pet accessories, treats, and health products in our store boutique. </p>
          <br />
          <div>
              <h2 className="aboutTitle">WALKING</h2>
              <p className="aboutDescription"><b>Safety first.</b> Keeping your dog happy and safe is our number one priority. Our dog walking staff is thoroughly checked and vetted and is made up of certified, reliable animal lovers.</p>
              <p className="aboutDescription"><b>Choose your walk.</b> To ensure we provide each dog with the same level of attention they receive at home, we only ever walk in groups of two. Depending on the personality of your dog, we also offer private walks. Choose between a one hour, or thirty minute walk time.</p>
              <p className="aboutDescription"><b>Daily Reports.</b> Dog walkers will also provide a dog walk note which provides pet parents with details of how each walk went. This allows for parents to be updated with essential walk details such as what time your dog was walked, or if there are any other details that our dog walkers may seem necessary to inform parents with.</p>
          </div>
          <div>
              <h2 className="aboutTitle">DAYCARE</h2>
              <p className="aboutDescription"><b>All that your dog needs.</b> Happiness and safety are at the top of our list during daycare. A strong emphasis is placed on individualized attention, with lots of one-on-one playing time with our certified handlers throughout the day.</p>              
              <p className="aboutDescription"><b>Exercise is key.</b> As exercise is a key element in keeping our dogs happy and healthy, several walks are provided throughout the day. This helps ensure that your dog remains housebroken and that our play area remains clean and safe.</p>
              <p className="aboutDescription"><b>Pick Up and Drop Off.</b> If you need assistance getting your dog to and from daycare, pick-up and drop-off services are available if requested.</p>
          </div>
          <div>
              <h2 className="aboutTitle">GROOMING</h2>
              <p className="aboutDescription"><b>Baths.</b> To cater to all canine coats and skin types, our gentle baths use only the finest hypoallergenic products. Depending on the sensitivities and coat type of your dog, we offer oatmeal shampoos, as well as soothing and moisturizing conditioners. </p>
              <p className="aboutDescription"><b>Grooming.</b> Our certified groomers have been trained at accredited academies where the emphasis is on proper technique, scissoring, breed standards, mixed-breed cut design, and canine skin issues. While our groomers are trained on standard breed cuts, we will happily groom your dog to your specifications.</p>
              <p className="aboutDescription"><b>Spa Day.</b> Just like your favorite spa day, our spa experience is a collection of our best services to help relieve the stresses of a busy city dog. A full day of relaxing walks and daycare, followed by a gentle bath and grooming services. Customize a spa package to treat your favorite dog to a day of bliss.</p>
              <p className="aboutDescription"> Following a bath, your dog will receive a thorough brushing and blow out.  A variety of drying techniques are used to meet the specific need of each dog/'s breed and age requirements. </p>
          </div>
          <div>
              <h2 className="aboutTitle">BOARDING</h2>
              <p className="aboutDescription"><b>Private sleeping space.</b> Each dog is provided with their own space. If you feel your dog would be slightly more comfortable sleeping on their own bed, or with some toys or treats, we welcome you to pack them in your pup's overnight bag.</p>
              <p className="aboutDescription"><b>Full day of daycare.</b> Our boarding services include 24-hour supervision, play in daycare spaces, multiple walks daily, fun, and feedings. Your pup will be provided with the food they love, which you may bring along or we can provide on your behalf.</p>
              <p className="aboutDescription"><b>Pick Up and Drop Off.</b> If you need assistance getting your dog to and from daycare, pick-up and drop-off services are available if requested.</p>
          </div>
        </div>
      </div>
    </>
  );
}
