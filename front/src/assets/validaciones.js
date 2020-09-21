const isValidEmail = email => {
  return !/^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}.){1,125}[A-Z]{2,63}$/i.test(
    email
  );
};

const isValidName = name => {
  return !/^[A-Z\s?]+$/i.test(name);
};

/* 1 mayuscula 1 minuscula 1 numero al menos 8 carcateres */

const isValidPass = pass => {
  return !/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/.test(pass);
};


export { isValidEmail, isValidName, isValidPass }