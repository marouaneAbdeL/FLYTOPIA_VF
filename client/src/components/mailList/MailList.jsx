import { useState } from "react";
import "./mailList.css";

const MailList = () => {
  const [email, setEmail] = useState("");

  const handleInputChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubscribeClick = () => {
    if (email) {
      // Perform subscription logic here
      console.log("Subscribed with email:", email);
    } else {
      console.log("Please enter a valid email address");
    }
  };

  return (
    <div className="mail">
      <h1 className="mailTitle">Unlock Exclusive Deals & Offers!</h1>
      <span className="mailDesc"> Subscribe and be the first to discover amazing deals and experiences in Morocco!</span>
      <div className="mailInputContainer">
        <input
          type="text"
          placeholder="Your Email"
          value={email}
          onChange={handleInputChange}
        />
        <button onClick={handleSubscribeClick}>Subscribe</button>
      </div>
    </div>
  );
};

export default MailList;
