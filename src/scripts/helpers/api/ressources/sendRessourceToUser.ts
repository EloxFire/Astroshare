import emailjs from '@emailjs/browser';

export const sendRessourceToUser = async (mail: string, document_name: string, document_link: string) => {
  const email = {
    email: mail,
    document_name: document_name,
    document_link: document_link
  }

  return emailjs.send('Astroshare', 'astroshare_download', email, 'user_OimdLZV4uZQJjsxfr0Cgc')
}