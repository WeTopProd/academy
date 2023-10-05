export const phoneForBackend = async(phone: string) => {
  var newPhone;
  ['(', ')', '-', '-'].map((item) => {
    newPhone = phone.replace(item, '');
  });
  console.log(phone);

  return newPhone;
};
