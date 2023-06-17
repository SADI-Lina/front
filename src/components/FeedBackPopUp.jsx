import React , {useState} from 'react'
import axios from 'axios';
const FeedBackPopUp = ({onCancel}) => {
  const [formData, setFormData] = useState({
    commentContent: '',
    
   
    // Add more form fields as needed
  });
  const [rating, setRating] = useState(1);
  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post('http://localhost:8080/commentaire', {
        id_touriste: 1,
        contenu: formData.commentContent,
        nb_etoile: rating,
        id_point_in: 1,
      })
      .then((response) => {
        console.log(response.data);
        // Handle success response
      })
      .catch((error) => {
        console.log(error);
        // Handle error response
      });

    setFormData({
      commentContent: '',
    });
  };
    
    const[text,setText] = useState('Médiocre')
  const handleStarClick = (starIndex) => {
    if (starIndex === rating - 1) {
      // If clicking on the same star again, toggle off the color
      setRating(rating - 1);
    } else {
      // If clicking on a different star, set the new rating
      setRating(starIndex + 1);
    }
    if (rating === 1) {
        setText('Médiocre')
    }
    if (rating === 1) {
        setText('Moyen')
    }
    if (rating === 2) {
        setText('Bien')
    }
    if (rating === 3) {
        setText('Très Bien')
    }
    if (rating === 4) {
        setText('Excellent')
    }
  };
  return (
    <div class="fixed inset-0 mx-auto m-[4Opx] opacity-100 px-[30px] w-[80%] md:w-[40%] border-2 mt-11  shadow-[0px_1px_1px_1px-rgba(0,0,0,0.05)] py-[30px] rounded-[20px] bg-white mb-[100px]">
        <div class="flex flex-col gap-[40px]">
            <div class="flex flex-row gap-[50%]">
                <h1 class="text-[30px] font-[700]">Ajouter un avis</h1>
                <svg class="cursor-pointer" onClick={onCancel} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="40" height="40" fill="#ff000070" ><path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm79 143c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z"/></svg>
            </div>
            <div class="flex flex-col items-center gap-[15px] ">
                <h1>Avis global</h1>
                <div class="stars flex flex-row items-center gap-[10px] ">    
                {[...Array(5)].map((_, index) => (
                    <svg
                        key={index}
                        onClick={() => handleStarClick(index)}
                        className={index < rating ? 'text-yellow-500' : 'text-[#E9E9E9]'}                      
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg" width="40" height="40"  viewBox="0 0 576 512"  stroke-linecap="round" stroke-linejoin="round"
                    >
                        <path
                        fillRule="evenodd"
                        d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
                        />
                    </svg>
                ))}                
                   
                </div>
                <h1>{rating}.0  :  {text}</h1>
            </div>
            <div class="flex flex-col gap-[20px]">
                 
                <div>
                    <h1 class="font-[700] text-gray-500">Commentaire</h1>
                    <input
                        type="text"
                        id="commentContent"
                        name="commentContent"
                        value={formData.commentContent}
                        onChange={handleChange}
                        class="bg-white pb-[50px] w-[95%] h-[100px] px-[20px] text-start text-[#667085]  text-[12px] md:text-[15px] rounded-[7px] border-[2px] focus:border-[#1B76FF] focus:ring-[#1B76FF]"
                        placeholder='Ajouter un commentaire : '
                  ></input> 
                </div>
                <button class="w-[95%] bg-[#1B76FF] py-[12px] rounded-[7px] text-white" onClick={handleSubmit}>
                    Publier
                </button>
            </div>
        </div>
    </div>
  )
}

export default FeedBackPopUp