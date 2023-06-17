import * as React from "react";

const data = {
    countries: [
      {
        name: "Algeria",
        states: [
          {name: "Adrar", },
          { name: "Chlef",},
          { name: "Laghouat",},
          { name: "Oum El Bouaghi",},
          { name: "Batna",},
          { name: "Béjaia",},
          { name: "Biskra",},
          { name: "Béchar",},
          { name: "Blida",},
          { name: "Bouira",},
          { name: "Tamanrasset",},
          { name: "Tébessa",},
          { name: "Tlemcen",},
          { name: "Tiaret",},
          { name: "Tizi Ouzou",},
          { name: "Alger",},
          { name: "Djelfa",},
          { name: "Jijel",},
          { name: "Sétif",},
          { name: "Saida",},
          { name: "Skikda",},
          { name: "Sidi Bel Abbès",},
          { name: "Annaba",},
          { name: "Guelma",},
          { name: "Constanine",},
          { name: "Médéa",},
          { name: "Mostaganem",},
          { name: "M'Sila",},
          { name: "Mascara",},
          { name: "Ouargla",},
          { name: "Oran",},
          { name: "El Bayadh",},
          { name: "Illizi",},
          { name: "Bordj Bou Arreridj",},
          { name: "Boumerdès",},
          { name: "El Taref",},
          { name: "Tindouf",},
          { name: "Tissemsilt",},
          { name: "El Oued",},
          { name: "Khenchela",},
          { name: "Souk Ahras",},
          { name: "Tipaza",},
          { name: "Mila",},
          { name: "Ain Defla",},
          { name: "Naâma",},
          { name: "Ain Témouchent",},
          { name: "Ghardaia",},
          { name: "Relizane",},
          { name: "Timimoun",},
          { name: "Bordj Badji Mokhtar",},
          { name: "Ouled Djellal",},
          { name: "Béni Abbès",},
          { name: "In Salah",},
          { name: "In Guezzam",},
          { name: "Touggourt",},
          { name: "Djanet",},
          { name: "El M'Ghair",},
          { name: "El Menia",},
        ]
      }
    ]
  };
const Wilaya = () => {
    const [selectedCountry] = React.useState("Algeria");
    const [selectedState, setSelectedState] = React.useState();    

  const availableState = data.countries.find((c) => c.name === selectedCountry);
  /*const availableCities = availableState?.states?.find(
    (s) => s.name === selectedState
  );*/

  return (
    <div className="space-y-3 font-poppins ">
      <div className="text-[#160042]">        
        <select
          class="bg-white py-[10px] w-[80%] px-[20px] text-[#667085]  text-[12px] md:text-[15px] rounded-[7px] border-[1px] focus:border-[#1B76FF] focus:ring-[#1B76FF]"
          placeholder="State"
          value={selectedState}
          onChange={(e) => setSelectedState(e.target.value)}
        >
          <option>Choisir une wilaya</option>
          {availableState?.states.map((e, key) => {
            return (
              <option value={e.name} key={key}>
                {e.name}
              </option>
            );
          })}
        </select>
      </div>
      
    </div>
  );
}

export default Wilaya