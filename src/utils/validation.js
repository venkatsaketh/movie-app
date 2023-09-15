export const checkSignin = (email, password) => {
  if (!/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email))
    return "email is not valid";

  if (!/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/.test(password))
    return "password should contain 7 to 15 characters. \n Atleast one lowercase , uppercase, digit, special character";

  return null;
};
