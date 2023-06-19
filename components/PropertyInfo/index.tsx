import type { NextPage } from "next";

//Utilizo nextPage por que se va a llamar desde el backend la informacion de las propiedades
const PropertyInfo: NextPage = () => {
  return (
    <div className="flex flex-row container mx-auto">
      <h3>PropertyInfo</h3>
    </div>
  );
};

export default PropertyInfo;
