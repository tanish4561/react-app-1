import React from "react";
import "./Pricing.css"; // Import CSS for styling

const plans = [
  { name: "Basic", price: "$10/month", features: ["1 Website", "Basic Support", "10GB Storage"] },
  { name: "Pro", price: "$30/month", features: ["5 Websites", "Priority Support", "50GB Storage"] },
  { name: "Enterprise", price: "$50/month", features: ["Unlimited Websites", "24/7 Support", "1TB Storage"] },
];

const Pricing = () => {
  return (
    <div className="pricing-container">
      <h2 className="pricing-heading">Pricing Plans</h2>
      <div className="pricing-card-container">
        {plans.map((plan, index) => (
          <div key={index} className="pricing-card">
            <h3>{plan.name}</h3>
            <h4>{plan.price}</h4>
            <ul>
              {plan.features.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>
            <button className="pricing-button">Choose Plan</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
