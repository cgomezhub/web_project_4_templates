import Popup from "./Popup";

export default class PopupWithForm extends Popup{
	constructor(handleFormSubmit, popupSelector) {
        super(popupSelector);
        this._handleFormSubmit = handleFormSubmit;
	}


    _getInputValues() {
        this._inputList = this._element.querySelectorAll(".form__input");
        this._formValues = {};
        this._inputList.forEach(input => this._formValues[input.name] = input.value);
    
        return this._formValues;
    }

    setEventListeners() {
		this._element.addEventListener("submit", (evt) => {
            evt.preventDefault();
            this._handleFormSubmit(this._getInputValues());
      
            this._element.reset();
        })

        this._element.querySelector(".images-expand__close").addEventListener("click", () => {
			this.close();
		});
        
    }

    close() {
        super._close();
        this._handleFormSubmit.reset();
    }
  
    
}