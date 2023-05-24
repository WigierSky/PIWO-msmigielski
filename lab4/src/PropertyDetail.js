import React, { useState } from "react";
import Property from "./components/HouseComponent";
import Nav from "./components/NavComponent";

const PropertyDetail = ({ id, properties }) => {
  const [propertyToDisplay, setPropertyToDisplay] = useState(null);

  // Find the property with the matching id
  const property = properties && properties.find((prop) => prop.id === id);

  // Set the found property to be displayed
  if (property) {
    setPropertyToDisplay(property);
  }

  return (
    <div>
      <Nav />
      {propertyToDisplay && <Property property={propertyToDisplay} />}
    </div>
  );
};

export default PropertyDetail;
