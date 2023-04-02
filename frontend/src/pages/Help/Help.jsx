import React from "react";
import Navbar from '../../components/navbar/Navbar'
import Helpsub from "./helpsub/Helpsub";
import './help.css'

const Help = () => {
  var booking_help = [
    {
      heading: "Q: How do I book an equipment on Farm Easy",
      content:
        "A: You can search and book any equipment available in your location."
    },
    {
      heading: "Q: What happens if I return the equipment late?",
      content:
        "A: A penalty will be applicable for th amount of time you are late."
    },
    {
      heading: "Q: How do I end my booking?",
      content:
        "A: you can end your booking by visiting the Booking History page"
    }
  ]
  var renting_help = [
    {
      heading: "Q: How can I rent my equipment or implements?",
      content: "A: You can rent out your equipment by becoming a provider."
    },
    {
      heading: "Q: How do I refund my amount?",
      content:
        "A: You can refund your payments or amount by logging to your stripe account affiliated to farmease."
    },
    {
      heading: "Q: What types of equipment can I list for booking?",
      content:
        "A: You can post all types of farming eqipment on Krishi Sadhan. For Example, Trucks, Tractors, etc."
    }
  ];
  return (
    <>
      <Navbar />
      <div className="farmeasy__help section__padding">
        <div className="farmeasy__help-topic"><p>Need some Help?</p></div>
        <div className="farmeasy__help-container">
          <div className="farmeasy__help-container1">
            <Helpsub topic="Booking help" helplist={booking_help} />
          </div>
          <div className="farmeasy__help-container2">
            <Helpsub topic="Renting Help" helplist={renting_help} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Help;
