'use strict';

(function () {
  var formElement = document.querySelector('.img-upload__form');
  var commentsElement = formElement.querySelector('.text__description');

  var clearTextFields = function () {
    window.hashtagsElement.value = '';
    commentsElement.value = '';
  };

  var successSaveHandler = function () {
    window.imageUpload.cancelImageEditing();
    clearTextFields();
  };

  var errorSaveHandler = function (message) {
    console.log(message);
  };

  window.formSubmit = {
    formElement: formElement,
    formSubmitHandler: function (evt) {
      evt.preventDefault();
      window.backend.save(new FormData(formElement), successSaveHandler, errorSaveHandler);
    }
  };
})();
