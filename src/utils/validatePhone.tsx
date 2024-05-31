const ValidatePhone = (phone: string) => {
  const newNumberPhone = phone
    .replace("(", "")
    .replace(")", "")
    .replace(" ", "")
    .replace("-", "");

  var regex = new RegExp(
    "^((1[1-9])|([2-9][0-9]))((3[0-9]{3}[0-9]{4})|(9[0-9]{3}[0-9]{5}))$"
  );
  return regex.test(newNumberPhone);
};

export default ValidatePhone;
