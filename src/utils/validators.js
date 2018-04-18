import emojiRegex from "emoji-regex";

export const validateEmail = (email) => {
  if (email == null) {
    return false;
  }

  if (emojiRegex().test(email)) {
    return false;
  }

  const emailRegEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return emailRegEx.test(email);
};

export const validateAlphaNumeric = (text) => {
  if(!text){
    return false;
  }
  return text.trim().length > 0;
};

export const validateText = (text) => {
  if(!text){
    return false;
  }
  return text.trim().length > 0 && isNaN(text);
};

export const validateNumeric = (number) => {
  if(!number){
    return false;
  }
  return !isNaN(number);
};

export const validatePhoneNumber = (number) => {
  const phoneRegEx = /^((\\+[1-9][ \\-]*)|(\\([0-9]\\)[ \\-]*)|([0-9])[ \\-]*)*?[0-9]?[ \\-]*[0-9]?$/;
  if(!number){
    return false;
  }
  return phoneRegEx.test(number);
};

export const validatePassword = (password, confirmPassword) => {
  if(!password || !confirmPassword){
    return false;
  }
  return password.length >= 8 && password === confirmPassword;
}

export const validatePasswordLength = (password) => {
  if(!password){
    return false;
  }
  return password.length >= 8;
}
