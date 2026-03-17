export const whatsappLink = (msg: string) =>
  `https://wa.me/919990118617?text=${encodeURIComponent(msg)}`;

export const emailLink = (subject: string, body: string) =>
  `mailto:gsclasses74@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
