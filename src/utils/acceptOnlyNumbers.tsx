const acceptOnlyNumbers = (value: string) => {
  if (!value) {
    return false;
  }

  const onlyNumbers = new RegExp("^[0-9]+$");

  const isAccept = onlyNumbers.test(value);
  if (!isAccept) {
    return false;
  }
  return true;
};

export default acceptOnlyNumbers;
