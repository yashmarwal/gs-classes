export const phoneNumber = "9990118617";
export const phoneNumberDisplay = "+91 99901 18617";
export const callLink = `tel:+91${phoneNumber}`;

export const whatsappLink = (msg: string) =>
  `https://wa.me/919990118617?text=${encodeURIComponent(msg)}`;

export const emailLink = (subject: string, body: string) =>
  `mailto:gsclasses74@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
