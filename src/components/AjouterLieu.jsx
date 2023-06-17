import React, { useState } from 'react';
import carte from '../assets/map.png'
import Wilaya from './Wilaya.jsx'
import FeedBackPopUp from './FeedBackPopUp';
import LeafletMap from './LeafletMap';
const MAX_COUNT = 5;


const AjouterLieu = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    spotName: '',
    spotLocation: '',
    spotDescription: '',
    spotVisits : 0,
    spotCategory:'',
    spotTheme:'',
    spotHours: {},
  });
  const daysOfWeek = ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'];
  const handleNext = () => {
    setCurrentStep((prevStep) => prevStep + 1);
  };

  const handlePrevious = () => {
    setCurrentStep((prevStep) => prevStep - 1);
  };
  const goBack = () =>{
    window.history.back();
  };
  /*const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };*/
  const handleChange = (e) => {
    const { name, value, type, dataset } = e.target;

    if (type === 'checkbox') {
      const isChecked = e.target.checked;
      setFormData((prevData) => ({
        ...prevData,
        [name]: isChecked ? [...prevData[name], value] : prevData[name].filter((day) => day !== value),
      }));
    } else if (type === 'time') {
      const { day, field } = dataset;
      const hours = { ...formData.spotHours[day], [field]: value };
      setFormData((prevData) => ({
        ...prevData,
        spotHours: {
          ...prevData.spotHours,
          [day]: hours,
        },
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form submission or data processing here
    console.log(formData);
    // Reset form data and go back to the first step
    setFormData({
      spotName: '',
      spotLocation: '',
      spotDescription: '',
      spotVisits : 0,
      spotCategory:'',
      spotTheme:'',
      spotHours: {},
    });
    setCurrentStep(1);
  };

  const calculateProgressPercentage = () => {
    return ((currentStep ) / 6) * 100;
  };
  const data = {
    countries: [
      {
        name: "Algeria",
        states: [
          {name: "Adrar", },{ name: "Chlef",},{ name: "Laghouat",},{ name: "Oum El Bouaghi",},{ name: "Batna",},{ name: "Béjaia",},{ name: "Biskra",},{ name: "Béchar",},{ name: "Blida",},{ name: "Bouira",},{ name: "Tamanrasset",},{ name: "Tébessa",},{ name: "Tlemcen",},{ name: "Tiaret",},{ name: "Tizi Ouzou",},{ name: "Alger",},{ name: "Djelfa",},{ name: "Jijel",},{ name: "Sétif",},{ name: "Saida",},{ name: "Skikda",},{ name: "Sidi Bel Abbès",},{ name: "Annaba",},{ name: "Guelma",},{ name: "Constanine",},{ name: "Médéa",},{ name: "Mostaganem",},{ name: "M'Sila",},{ name: "Mascara",},{ name: "Ouargla",},{ name: "Oran",},{ name: "El Bayadh",},{ name: "Illizi",},{ name: "Bordj Bou Arreridj",},{ name: "Boumerdès",},{ name: "El Taref",},{ name: "Tindouf",},{ name: "Tissemsilt",},{ name: "El Oued",},{ name: "Khenchela",},{ name: "Souk Ahras",},{ name: "Tipaza",},{ name: "Mila",},{ name: "Ain Defla",},{ name: "Naâma",},{ name: "Ain Témouchent",},{ name: "Ghardaia",},{ name: "Relizane",},{ name: "Timimoun",},{ name: "Bordj Badji Mokhtar",},{ name: "Ouled Djellal",},{ name: "Béni Abbès",},{ name: "In Salah",},{ name: "In Guezzam",},
          { name: "Touggourt",},{ name: "Djanet",},{ name: "El M'Ghair",},{ name: "El Menia",},
        ]
      }
    ]
  };

  const [selectedCountry] = React.useState("Algeria");
    const [selectedState, setSelectedState] = React.useState();    

  const availableState = data.countries.find((c) => c.name === selectedCountry);
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [fileLimit, setFileLimit] = useState(false);
  const handleUploadFiles = (files) => {
    const uploaded = [...uploadedFiles];
    let limitExceeded = false;
    files.some((file) => {
      if (uploaded.findIndex((f) => f.name === file.name) === -1) {
        uploaded.push(file);
        if (uploaded.length === MAX_COUNT) setFileLimit(true);
        if (uploaded.length > MAX_COUNT) {
          alert(`You can only add a maximum of ${MAX_COUNT} files`);
          setFileLimit(false);
          limitExceeded = true;
          return true;
        }
      }
    });
    if (!limitExceeded) setUploadedFiles(uploaded);
  };

  const handleFileEvent = (e) => {
    const chosenFiles = Array.prototype.slice.call(e.target.files);
    handleUploadFiles(chosenFiles);
  };
  return (
    <div class="flex md:flex-row flex-col bg-[#fff]">      
        <div class="md:w-[50%] flex flex-col justify-between">
            <div class="">             
              <svg onClick={goBack} class="cursor-pointer" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512" fill="#1B76FF"><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"/></svg>
                <form onSubmit={handleSubmit}>
            {currentStep === 1 && (
           
          <div class=" mt-[20%] ">
          <h1 class="text-[#110000] text-[27px] ml-[40%] mb-[10px] font-[700] ">Adresse</h1>
          <div class=" flex flex-col gap-[20px] ml-[13%]">
              <div>
                  <h1 class="text-[#667085] font-[600] text-[13px]">Wilaya</h1>
                  <div className="text-[#160042]">        
                      <select
                        class="bg-white py-[10px] w-[80%] px-[20px] text-[#667085] text-[12px] md:text-[15px] rounded-[7px] border-[1px] focus:border-[#1B76FF] focus:ring-[#1B76FF]"
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
              <div>
                  <h1 class="text-[#667085] font-[600] text-[13px]">Adresse du lieu</h1>
                  <input
                      type="text"
                       id="spotLocation" name="spotLocation" value={formData.spotLocation} onChange={handleChange}
                      class="bg-white py-[10px] w-[80%] px-[20px] text-[#667085]  text-[12px] md:text-[15px] rounded-[7px] border-[1px] focus:border-[#1B76FF] focus:ring-[#1B76FF]"
                      placeholder='Quartier ou rue'
                  ></input>
              </div>
              <div>
                  <h1 class="text-[#667085] font-[600] text-[13px]">Nombre de visites</h1>
                  <input
                      type="text"
                       id="spotVisits" name="spotVisits" value={formData.spotVisits} onChange={handleChange}
                      class="bg-white py-[10px] w-[80%] px-[20px] text-[#667085]  text-[12px] md:text-[15px] rounded-[7px] border-[1px] focus:border-[#1B76FF] focus:ring-[#1B76FF]"
                      placeholder=''
                  ></input>
              </div>
          </div>
      </div>        
            )}

        {currentStep === 2 && (
                      <div class=" mt-[20%] ">
                      <h1 class="text-[#110000] text-[27px] ml-[25%] mb-[10px] font-[700] ">Informations Générales</h1>
                      <div class=" flex flex-col gap-[20px] ml-[13%]">
                          <div>
                          <h1 class="text-[#667085] font-[600] text-[13px]">Titre</h1>
                          <input
                              type="text"
                              id="spotName" name="spotName" value={formData.spotName} onChange={handleChange}
                              class="bg-white py-[10px] w-[80%] px-[20px] text-[#667085]  text-[12px] md:text-[15px] rounded-[7px] border-[1px] focus:border-[#1B76FF] focus:ring-[#1B76FF]"
                              placeholder='Ajouter un titre...'
                      ></input>
                          </div>
                          <div>
                              <h1 class="text-[#667085] font-[600] text-[13px]">Description</h1>
                              <input
                                  type="text"
                                  id="spotDescription" name="spotDescription" value={formData.spotDescription} onChange={handleChange}
                                  class="bg-white pb-[50px] w-[80%] h-[100px] px-[20px] text-start text-[#667085]  text-[12px] md:text-[15px] rounded-[7px] border-[1px] focus:border-[#1B76FF] focus:ring-[#1B76FF]"
                                  placeholder='Ajouter une description...'
                              ></input>
                          </div>
                      </div>            
                                   
                    </div> 
        )}

        {currentStep === 3 && (
          <div class=" mt-[15%] ">
          <h1 class="text-[#110000] text-[27px] ml-[40%] mb-[30px] font-[700] ">Catégorie</h1>
          <div class=" flex flex-col gap-[20px] ml-[33%]">
              <button class="py-[10px] w-[50%] px-[20px] rounded-[7px] border-[1px] hover:bg-[#1B76FF] hover:text-white focus:bg-[#1B76FF] focus:text-white focus:border-[#1B76FF] focus:ring-[#1B76FF]" 
              type="button"
              name="spotCategory" value="monument"
              onClick={handleChange}>
                  Monument
              </button> 
              <button class="py-[10px] w-[50%] px-[20px] rounded-[7px] border-[1px] hover:bg-[#1B76FF] hover:text-white focus:bg-[#1B76FF] focus:text-white focus:border-[#1B76FF] focus:ring-[#1B76FF]" 
              type="button"
              name="spotCategory" value="museum"
              onClick={handleChange}>
                  Musée
              </button>   
              <button class="py-[10px] w-[50%] px-[20px] rounded-[7px] border-[1px] hover:bg-[#1B76FF] hover:text-white focus:bg-[#1B76FF] focus:text-white focus:border-[#1B76FF] focus:ring-[#1B76FF]" 
              type="button"
              name="spotCategory" value="place"
              onClick={handleChange}>
                  Place
              </button>   
              <button class="py-[10px] w-[50%] px-[20px] rounded-[7px] border-[1px] hover:bg-[#1B76FF] hover:text-white focus:bg-[#1B76FF] focus:text-white focus:border-[#1B76FF] focus:ring-[#1B76FF]" 
              type="button"
              name="spotCategory" value="resturant"
              onClick={handleChange}>
                  Restaurant
              </button>   
              <input
                type="text"
                id="spotCategory" name="spotCategory" value={formData.spotCategory} onChange={handleChange}
                class="py-[10px] w-[50%] px-[20px] rounded-[7px] border-[1px] "
                placeholder='Autre'
              ></input>     
          </div>
        </div> 
        )}
        {currentStep === 4 && (
            <div class=" mt-[25%] ">
            <h1 class="text-[#110000] text-[27px] ml-[44%] mb-[30px] font-[700] ">Thème</h1>
            <div class=" flex flex-col gap-[20px] ml-[33%]">
                <button class="py-[10px] w-[50%] px-[20px] rounded-[7px] border-[1px] hover:bg-[#1B76FF] hover:text-white focus:bg-[#1B76FF] focus:text-white focus:border-[#1B76FF] focus:ring-[#1B76FF]" 
                type="button"
                name="spotTheme" value="histoire"
                onClick={handleChange}>
                    Histoire
                </button> 
                <button class="py-[10px] w-[50%] px-[20px] rounded-[7px] border-[1px] hover:bg-[#1B76FF] hover:text-white focus:bg-[#1B76FF] focus:text-white focus:border-[#1B76FF] focus:ring-[#1B76FF]" 
                type="button"
                name="spotTheme" value="nature"
                onClick={handleChange}>
                    Nature
                </button>                          
            </div>
          </div> 
          )}         
            {currentStep === 5 && (
            <div class=" mt-[2%] ">
              <h1 class="text-[#1B76FF] text-[27px] ml-[30%] mb-[20px] font-[700] ">Horaires d'ouverture</h1>
              <div class=" flex flex-col gap-[15px]  ml-[12%]">    
              {daysOfWeek.map((day) => (
              <div key={day} class="flex flex-row flex-between  items-center">
                <h1 class="font-[700] text-[#110000] ml-10 w-[15%] ">{day}</h1>
                <div class="flex flex-row gap-[40px] ml-10">                    
                      <div class="flex flex-col gap-[1px]">  
                          <label htmlFor={`startHour-${day}`} class="text-[12px] text-gray-500">Ouverture</label>
                          <input
                            type="time"
                            id={`startHour-${day}`}
                            name={`startHour-${day}`}
                            data-day={day}
                            data-field="startHour"
                            class = "rounded-[6px] px-2 py-1 bg-white border-black shadow-[1px_1px_0px_0.5px_rgba(0,0,0,0.05)] text-[13px] "
                            value={formData.spotHours[day]?.startHour || ''}
                            onChange={handleChange}                            
                          />
                      </div>
                      <div class="flex flex-col gap-[1px]">
                        <label htmlFor={`endHour-${day}`} class="text-[12px] text-gray-500">Fermeture</label>
                            <input
                              type="time"
                              id={`endHour-${day}`}
                              name={`endHour-${day}`}
                              data-day={day}
                              data-field="endHour"
                              value={formData.spotHours[day]?.endHour || ''}
                              onChange={handleChange}
                              className="rounded-[6px] px-2 py-1 bg-white border-black shadow-[1px_1px_0px_0.5px_rgba(0,0,0,0.05)] text-[13px]"
                            />
                      </div>
                </div>            
              </div>
                ))}  
                 
              </div>
          </div> 
          )}
          {currentStep === 6 && (
            <div class=" mt-[15%] ">
              <h1 class="text-[#110000] text-[27px] ml-[35%] mb-[30px] font-[700] ">Images du lieu</h1>
              <div class="flex items-center justify-center w-full">
              <label class="flex flex-col w-[60%] py-[60px] border-1 border-[#E5E5E5] rounded-lg hover:bg-[#fafafa] hover:border-gray-300">
              <div class="flex flex-col items-center justify-center pt-7">
              <svg xmlns="http://www.w3.org/2000/svg" height="3em" width="3em" viewBox="0 0 384 512" fill="#1B76FF" ><path d="M64 464c-8.8 0-16-7.2-16-16V64c0-8.8 7.2-16 16-16H224v80c0 17.7 14.3 32 32 32h80V448c0 8.8-7.2 16-16 16H64zM64 0C28.7 0 0 28.7 0 64V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V154.5c0-17-6.7-33.3-18.7-45.3L274.7 18.7C262.7 6.7 246.5 0 229.5 0H64zm96 256a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm69.2 46.9c-3-4.3-7.9-6.9-13.2-6.9s-10.2 2.6-13.2 6.9l-41.3 59.7-11.9-19.1c-2.9-4.7-8.1-7.5-13.6-7.5s-10.6 2.8-13.6 7.5l-40 64c-3.1 4.9-3.2 11.1-.4 16.2s8.2 8.2 14 8.2h48 32 40 72c6 0 11.4-3.3 14.2-8.6s2.4-11.6-1-16.5l-72-104z"/></svg>
                <p class="pt-1 text-md text-[#1B76FF] font-[700] group-hover:text-gray-600">
                  Ajouter les photos ici{" "}
                </p>
                <p class="pt-1 text-sm text-gray group-hover:text-gray-600">
                  Vous pouvez ajouter jusqu'à 5 images 
                </p>
              </div>
              <input
                type="file"
                onChange={handleFileEvent}
                disabled={fileLimit}
                class="opacity-0"
                multiple
                accept="image/*"
              />
            </label>
          </div>
          </div> 
          )}  
        
                </form>           
            </div>   
            <div class="mb-[30px]">
        {/* Progress bar */}
        <div  className="w-full h-[3px] bg-gray-300 mt-4 ">
            <div className="h-full bg-blue-500 " style={{ width: `${calculateProgressPercentage()}%` }}></div>
        </div>
        <div class="flex flex-row ml-[2%] gap-[35%] md:gap-[55%]">
          {currentStep > 1 && <button type="button" class="mt-[20px]  py-[10px]  px-[20px] text-[#1B76FF] bg-[#1B76FF15] rounded-[12px] " onClick={handlePrevious}>
            <div class="flex flex-row gap-2 items-center">            
              <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512" fill="#1B76FF"><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"/></svg>
              Retour
            </div>           
            </button>}
          {currentStep < 6 && <button type="button" class=" mt-[20px]  py-[10px] px-[20px] text-white bg-[#1B76FF] rounded-[12px]" onClick={handleNext}>
            <div class="flex flex-row gap-2 items-center ">
            Suivant
            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512" fill="#FFF"><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/></svg>
            </div>            
          </button>          
        }
          {currentStep === 6 && <button type="submit" class=" mt-[20px]  py-[9px] px-[30px] text-white bg-[#1B76FF] rounded-[12px]" >Submit</button>}
        </div>

            </div>
        </div>      
        <div class="md:w-[50%] md:h-screen bg-[#F3F7FF] items-center">
            {/*<img src={carte} alt="carte des lieux" class="cursor-pointer h-fit"></img>*/}
            {currentStep === 1 &&               
              <div class="">
                  <LeafletMap/>              
              </div>

            }
            {currentStep === 2 &&               
              <div class="w-[60%] mx-auto mt-[30%]">
                <h1 class="text-[#110000] font-[700] text-[33px] pt-auto ">Décrivez votre</h1>
                <span class="text-[#110000] font-[700] text-[33px]  ">Annonce</span>
                <p>Donnez un titre à votre annonce et décrivez en quelques mots l'expérience vécue par ses visiteurs !</p>
              
              </div>

            }
            {currentStep === 3 &&   
              <div class="w-[60%] mx-auto mt-[30%]">
                <h1 class="text-[#110000] font-[700] text-[33px] pt-auto ">De quel annonce</h1>
                <span class="text-[#110000] font-[700] text-[33px]  ">s'agit t'il ?</span>
                <p>Choisissez une catégorie parmi celles affichées </p>
              </div>
            }
            {currentStep === 4 &&   
              <div class="w-[60%] mx-auto mt-[30%]">
                <h1 class="text-[#110000] font-[700] text-[33px] pt-auto ">Quel est le type de</h1>
                <span class="text-[#110000] font-[700] text-[33px]  ">votre annonce</span>
                <p>Choisissez une catégorie parmi ceux affichés </p>
              </div>
            }
            {currentStep === 5 &&   
              <div class="w-[65%] mx-auto mt-[30%]">
                <h1 class="text-[#110000] font-[700] text-[33px] pt-auto ">Quel sont les horaires d'ouverture</h1>
                <span class="text-[#110000] font-[700] text-[33px]  ">et fermeture du lieu</span>
                <p>Choisissez pour chaque jour de la semaine des heures d'ouvertures et fermetures</p>
              </div>
            }
            {currentStep === 6 &&   
              <div class="w-[65%] mx-auto mt-[30%]">
                <h1 class="text-[#110000] font-[700] text-[33px] pt-auto ">Ajoutez des images</h1>
                <span class="text-[#110000] font-[700] text-[33px]  ">descriptives du lieu</span>
                <p>Vous avez le droit de choisir jusqu'à 5 images !</p>
              </div>
            }
        </div>
    </div>
  );
};

export default AjouterLieu;