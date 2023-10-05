export const phoneForBackend = (phone: string) => {
  ['(', ')', '-', '-', ' '].map((item) => {
     phone = phone.replace(item, '');
  });
  // console.log(phone);

  return phone;
};
