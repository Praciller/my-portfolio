import React from 'react'


const HeaderSocial = () => {
  const sendEmailToGmail = () => {
    const emailAddress = 'pakon.poomson@gmail.com';
    const emailSubject = 'Email Subject';
    const emailBody = 'Email Body';
    const mailtoLink = `mailto:${emailAddress}?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;

    window.open(mailtoLink, '_blank');
  };

  return (
    <div className="home__socials">
      <a href="https://www.facebook.com/Pracill" className="home__social-link" target='_blank'>
        <i class="fa-brands fa-facebook"></i>
      </a>
      <a href="https://www.instagram.com/pracillct/" className="home__social-link" target='_blank'>
        <i class="fa-brands fa-instagram"></i>
      </a>
      <a href="#" className="home__social-link" onClick={sendEmailToGmail}>
        <i class="fa-sharp fa-solid fa-envelope"></i>
      </a>
      <a href="https://www.linkedin.com/in/pakon-poomson-a584b9275/" className="home__social-link" target='_blank'>
        <i class="fa-brands fa-linkedin"></i>
      </a>
      <a href="https://github.com/Praciller" className="home__social-link" target='_blank'>
        <i class="fa-brands fa-github"></i>
      </a>
    </div>
  );
};

export default HeaderSocial;
