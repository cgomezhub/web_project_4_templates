import "./index.css";


import Section from "./Section";
import Card from "./Card";


import FormValidator  from "./FormValidator";
import PopupWithImage from "./PopupWithImage";
import PopupWithForm from "./PopupWithForm";

import { items, buttonPlace } from "./constants.js";



const cardsList = new Section({
  data:items,
  renderer: (cardItem)=>{

    const card = new Card(cardItem, '.card-template');
      
    const cardElement = card.generateCard();
    
    cardsList.addItem(cardElement);
      
  }
}, '.cards');

cardsList. renderItems(); 


const popupImg = new PopupWithImage( '.popup-image-template');

popupImg._generatePopup();

document.addEventListener('click', (evt) => {
  
  if (evt.target.classList.contains('card__image')){
    
    const p = evt.target.parentElement.querySelector(".card__place")

    const imageInfo = {
      src: evt.target.src,
      alt: evt.target.alt,
      text : p.textContent
    };
    
    popupImg.open(imageInfo);
  }
  
});


const popupAddForm = new PopupWithForm('.popup-form-template');

popupAddForm._generateFormPopup();

buttonPlace.addEventListener('click', () => {
  //popupAddForm.open();
  
  //popupAddForm.open();

  popupAddForm._open();

  const validator = new FormValidator('.form');

  validator.enableValidation();  

});


