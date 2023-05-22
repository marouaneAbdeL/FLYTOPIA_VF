import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import axios from "axios";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import "./activity.css";
import MailList from "../../components/mailList/MailList";
import Header from "../../components/header/Header";

const Activity = () => {
  const [credentials, setCredentials] = useState({
    username: "",
    email: "",
    country: "",
    city: "",
    phone: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const { loading, error, dispatch } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const validateForm = () => {
    let errors = {};
    let isValid = true;

    if (!credentials.username) {
      errors.username = "Username is required";
      isValid = false;
    } else if (credentials.password.length < 1) {
      errors.username = "username must be at least 1 characters long";
      isValid = false;
    }

    if (!credentials.email) {
      errors.email = "Email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(credentials.email)) {
      errors.email = "Email address is invalid";
      isValid = false;
    }

    if (!credentials.password) {
      errors.password = "Password is required";
      isValid = false;
    } else if (credentials.password.length < 6) {
      errors.password = "Password must be at least 6 characters long";
      isValid = false;
    }

    setErrors(errors);

    return isValid;
  };

  const handleClick = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      dispatch({ type: "LOGIN_START" });
      try {
        const res = await axios.post("/auth/register", credentials);
        dispatch({ type: "REGISTER_SUCCESS", payload: res.data.details });
        navigate("/");
      } catch (err) {
        dispatch({ type: "REGISTER_FAILURE", payload: err.response.data });
      }
    }
  };

  return (
    <div>
      <Navbar />
      <Header/>
      <div class="presentation-container">
      <section className={"presentation" + ' ' +  "inverse"}>
            <img src="https://photos.tpn.to/np/fm/ho/mi/653x490.webp" />
            <div>
                <h2>LEARN TO SURF!</h2>
                <h3>Taghazout</h3>
                <p>
                The lessons are highly practical and hands-on to ensure you make the most of your time with us.  Each day the surf instructor drives you to the best waves of the day and spends two hours helping you progress your surfing skills. In the afternoon you get some practice in and make it your own! All of our surf instructors are local and passionate surfers.                </p>
                <p>
                In the evenings you stretch and relax with the vinyasa yoga class at our seafront terrace or the Beach beside us.             
                   </p>
                <a href="https://surftaghazout.com/" target="_blank" rel="noopener noreferrer" className="visitWebsite">
  Visit Website
</a>
              
            </div>
        </section>
        <section className="presentation">
            <img src="https://media.tacdn.com/media/attractions-splice-spp-674x446/06/75/b3/c9.jpg" alt="&lt;votre_nom&gt;" />
            <div>
                <h2>Dive and Fish !</h2>
                <h3>AlHoceima</h3>
                <p>
                Nature exploring is also an option of your journey ? Try our fishing or diving ! Upon arrival on the shore, many locals offer to take you on exhilarating excursions. As for scuba diving, the seabeds of the Mediterranean is ideal for water lovers. It invites you to explore its underwater reliefs composed of many eye-popping caves and atypical vegetation.                </p>
                <a href="https://www.tripadvisor.com/Attraction_Review-g795889-d13800188-Reviews-Moroccan_Diving_Center-Al_Hoceima_Taza_Al_Hoceima_Taounate_Region.html" target="_blank" rel="noopener noreferrer" className="visitWebsite">
  Visit Website
</a>
            </div>
        </section>
        </div>
        
        <section className={"presentation" + ' ' +  "inverse"}>
            <img src="https://cdn.getyourguide.com/img/tour/5d0a5cac58543.jpeg/98.jpg" />
            <div>
                <h2>Quad Bike</h2>
                <h3>Marrakech</h3>
                
                <p>
                Explore the rugged desert, wild palm groves, and rural Berber villages outside Marrakech on a half-day tour by 4WD quad bike. Traverse the palm and desert landscapes of Marrakech on a thrilling ride                </p>
                <a href="https://www.getyourguide.com/marrakech-l208/marrakech-desert-and-palm-grove-quad-bike-tour-t59225/" target="_blank" rel="noopener noreferrer" className="visitWebsite">
  Visit Website
</a>
            </div>
        </section>

        <section className="presentation">
            <img src="https://cdn.kimkim.com/files/a/images/543d48b6aebd861127c3eaac108f29051d0725bf/big-b8582c4fa9c8d1f274565001310561ec.jpg" alt="&lt;votre_nom&gt;" />
            <div>
                <h2>Hors Ride</h2>
                <h3>Essaouira</h3>
                <p>
                Have you ever tried horseback riding?
                                </p>
                <p>
                  No doubt, Morocco is a great horse riding nation, horseback riding in Morocco is a real pleasure. 
                  Since the dawn of time, Morocco has had a passion for horses,
                  nothing more natural than to explore its riches during a horseback ride in Morocco.
                              
                                </p>
                <a href="https://www.yassinecavalier.com/Rando4.php" target="_blank" rel="noopener noreferrer" className="visitWebsite">
  Visit Website
</a>
            </div>
        </section>

        <section className={"presentation" + ' ' +  "inverse"}>
            <img src="https://desert-maroc.com/wordpress2012/wp-content/uploads/LD5A0706-recadre%CC%81.jpg" />
            <div>
                <h2>Camel caravan</h2>
                <h3>Marzouga</h3>
               
                <p>
                Your dive to the south allows you to have a good overview of the beauty of southern Morocco. Palm groves, gorges, gorges, ksars and kasbahs punctuate your journey to the dunes of Merzouga, the setting for your immersion in the Sahara desert. Your adventure begins with a camel caravan that takes you to your camp in the dunes. You dine in the desert and spend a night in a bivouac before returning in the early morning on a camel trek back to civilization.                </p>
                <a href="https://desert-maroc.com/circuit-desert-marrakech-merzouga-fes-8-jours/" target="_blank" rel="noopener noreferrer" className="visitWebsite">
  Visit Website
</a>
              
            </div>
        </section>
        

        
        <MailList/>
    <Footer />
    </div>

 

  );
};

export default Activity;
