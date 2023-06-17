import React from 'react'
import SearchBar from './SearchBar'
import bgImg from '../assets/bgPic.png'
import FeedBackPopUp from './FeedBackPopUp'
import Card from './Card' ;
import pic from "../assets/La casbah.png"
import EventCard from './EventCard';
import Footer from './Footer';

const UserHomePage = () => {
  const events = [
    {
      title: "React Tailwind Card with Grid 1",
      img: pic,
      categorie: "en cours",
      content:
        "react tailwind css card with image It is a long established fact that a reader will be distracted by the readable content",
    },
    {
      title: "React Tailwind Card with Grid 1",
      img: pic,
      categorie: "en cours",
      content:
        "react tailwind css card with image It is a long established fact that a reader will be distracted by the readable content",
    },
    {
      title: "React Tailwind Card with Grid 1",
      img: pic,
      categorie: "en cours",
      content:
        "react tailwind css card with image It is a long established fact that a reader will be distracted by the readable content",
    },
    {
      title: "React Tailwind Card with Grid 1",
      img: pic,
      categorie: "en cours",
      content:
        "react tailwind css card with image It is a long established fact that a reader will be distracted by the readable content",
    },

    {
      title: "React Tailwind Card with Grid 1",
      img: pic,
      categorie: "en cours",
      content:
        "react tailwind css card with image It is a long established fact that a reader will be distracted by the readable content",
    },

  ];
  const hotels = [
    {
      title: "React Tailwind Card with Grid 1",
      img: pic,
      categorie: "hotel",
      content:
        "react tailwind css card with image It is a long established fact that a reader will be distracted by the readable content",
    },
    {
      title: "React Tailwind Card with Grid 1",
      img: pic,
      categorie: "hotel",
      content:
        "react tailwind css card with image It is a long established fact that a reader will be distracted by the readable content",
    },
    {
      title: "React Tailwind Card with Grid 1",
      img: pic,
      categorie: "hotel",
      content:
        "react tailwind css card with image It is a long established fact that a reader will be distracted by the readable content",
    },
    {
      title: "React Tailwind Card with Grid 1",
      img: pic,
      categorie: "hotel",
      content:
        "react tailwind css card with image It is a long established fact that a reader will be distracted by the readable content",
    },

    {
      title: "React Tailwind Card with Grid 1",
      img: pic,
      categorie: "hotel",
      content:
        "react tailwind css card with image It is a long established fact that a reader will be distracted by the readable content",
    },
    {
      title: "React Tailwind Card with Grid 1",
      img: pic,
      categorie: "hotel",
      content:
        "react tailwind css card with image It is a long established fact that a reader will be distracted by the readable content",
    },
    {
      title: "React Tailwind Card with Grid 1",
      img: pic,
      categorie: "hotel",
      content:
        "react tailwind css card with image It is a long established fact that a reader will be distracted by the readable content",
    },
    {
      title: "React Tailwind Card with Grid 1",
      img: pic,
      categorie: "hotel",
      content:
        "react tailwind css card with image It is a long established fact that a reader will be distracted by the readable content",
    },

  ];
  const restaurants = [
    {
      title: "React Tailwind Card with Grid 1",
      img: pic,
      categorie: "restaurant",
      content:
        "react tailwind css card with image It is a long established fact that a reader will be distracted by the readable content",
    },
    {
      title: "React Tailwind Card with Grid 1",
      img: pic,
      categorie: "restaurant",
      content:
        "react tailwind css card with image It is a long established fact that a reader will be distracted by the readable content",
    },
    {
      title: "React Tailwind Card with Grid 1",
      img: pic,
      categorie: "restaurant",
      content:
        "react tailwind css card with image It is a long established fact that a reader will be distracted by the readable content",
    },
    {
      title: "React Tailwind Card with Grid 1",
      img: pic,
      categorie: "restaurant",
      content:
        "react tailwind css card with image It is a long established fact that a reader will be distracted by the readable content",
    },

    {
      title: "React Tailwind Card with Grid 1",
      img: pic,
      categorie: "restaurant",
      content:
        "react tailwind css card with image It is a long established fact that a reader will be distracted by the readable content",
    },
    {
      title: "React Tailwind Card with Grid 1",
      img: pic,
      categorie: "restaurant",
      content:
        "react tailwind css card with image It is a long established fact that a reader will be distracted by the readable content",
    },
    {
      title: "React Tailwind Card with Grid 1",
      img: pic,
      categorie: "restaurant",
      content:
        "react tailwind css card with image It is a long established fact that a reader will be distracted by the readable content",
    },
    {
      title: "React Tailwind Card with Grid 1",
      img: pic,
      categorie: "restaurant",
      content:
        "react tailwind css card with image It is a long established fact that a reader will be distracted by the readable content",
    },

  ];
  const shoppings = [
    {
      title: "React Tailwind Card with Grid 1",
      img: pic,
      categorie: "shopping",
      content:
        "react tailwind css card with image It is a long established fact that a reader will be distracted by the readable content",
    },
    {
      title: "React Tailwind Card with Grid 1",
      img: pic,
      categorie: "shopping",
      content:
        "react tailwind css card with image It is a long established fact that a reader will be distracted by the readable content",
    },
    {
      title: "React Tailwind Card with Grid 1",
      img: pic,
      categorie: "shopping",
      content:
        "react tailwind css card with image It is a long established fact that a reader will be distracted by the readable content",
    },
    {
      title: "React Tailwind Card with Grid 1",
      img: pic,
      categorie: "shopping",
      content:
        "react tailwind css card with image It is a long established fact that a reader will be distracted by the readable content",
    },

    {
      title: "React Tailwind Card with Grid 1",
      img: pic,
      categorie: "shopping",
      content:
        "react tailwind css card with image It is a long established fact that a reader will be distracted by the readable content",
    },
    {
      title: "React Tailwind Card with Grid 1",
      img: pic,
      categorie: "shopping",
      content:
        "react tailwind css card with image It is a long established fact that a reader will be distracted by the readable content",
    },
    {
      title: "React Tailwind Card with Grid 1",
      img: pic,
      categorie: "shopping",
      content:
        "react tailwind css card with image It is a long established fact that a reader will be distracted by the readable content",
    },
    {
      title: "React Tailwind Card with Grid 1",
      img: pic,
      categorie: "shopping",
      content:
        "react tailwind css card with image It is a long established fact that a reader will be distracted by the readable content",
    },

  ];

  return (
    <>
    <div class="pb-8">
        <div style={{backgroundImage: `url(${bgImg})`, backgroundSize:'cover',backgroundPosition:'center'}} class="flex flex-col items-center gap-[-20px] h-[350px]">
                <div class="">
                   <h1 class="mx-auto mt-[30%] md:mt-[13%] text-[30px] md:text-[40px] text-white font-[700] w-[80%] text-center">Bienvenus dans une unique expérience</h1>
                </div>

        </div>
        <div class="md:mt-[-7%] mt-[-15%] mb-[100px]">
          <SearchBar></SearchBar>
        </div>
        <div>
        <div className="grid  place-items-cente py-5  ">
        <h1 className="mb-3 block text-[26px] font-[600] px-6 ">
                Les évènements à venir </h1>
                 <div className="grid xs:grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 py-4 px-2 px-1 justify-center items-center  ">
          {events.slice(0,4).map((items, key) => (
            <EventCard
              title={items.title}
              image={items.img}
              categorie={items.categorie}
              description={items.content}
              key={key}
            />
          ))}
        </div>
      </div>
      <div className="grid place-items-cente bg-[#F3F7FF] py-5   ">
        <h1 className="mb-3 block text-[26px] font-[600] px-6 ">
                Les meilleurs hôtels à côté de vous </h1>
                 <div className="grid xs:grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 py-4 px-2 px-1 justify-center items-center  ">
          {hotels.slice(0,8).map((items, key) => (
            <Card
              title={items.title}
              image={items.img}
              categorie={items.categorie}
              description={items.content}
              key={key}
            />
          ))}
        </div>
      </div>
      <div className="grid place-items-cente py-5   ">
        <h1 className="mb-3 block text-[26px] font-[600] px-6 ">
                Les meilleurs restaurants à côté de vous </h1>
                 <div className="grid xs:grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 py-4 px-2 px-1 justify-center items-center  ">
          {restaurants.slice(0,8).map((items, key) => (
            <Card
              title={items.title}
              image={items.img}
              categorie={items.categorie}
              description={items.content}
              key={key}
            />
          ))}
        </div>
      </div>
      <div className="grid place-items-cente bg-[#F3F7FF] py-5   ">
        <h1 className="mb-3 block text-[26px] font-[600] px-6 ">
                Les meilleurs centres commerciaux à côté de vous </h1>
                 <div className="grid xs:grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 py-4 px-2 px-1 justify-center items-center  ">
          {shoppings.slice(0,8).map((items, key) => (
            <Card
              title={items.title}
              image={items.img}
              categorie={items.categorie}
              description={items.content}
              key={key}
            />
          ))}
        </div>
      </div>

    </div>
    </div>
    <Footer/>
   </>
  )
}

export default UserHomePage