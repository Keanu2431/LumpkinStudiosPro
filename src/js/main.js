const contactForm = document.querySelector('#contact-home-form');
const btn = document.querySelector('#submit-home');
// btn.addEventListener('click', function (e) {
//   e.preventDefault();
//   const formData = [...new FormData(contactForm).entries()];
//   console.log(formData);
// });
// CONTACT SUBMIT
if (contactForm)
  contactForm.addEventListener('submit', function (e) {
    e.preventDefault();
    // const formData = {
    //   name: nameContact.value,
    //   email: email.value,
    //   subject: 'LumpkinStuios Buisness Inquiry',
    //   message: message.value,
    // };
    const formData = [...new FormData(contactForm).entries()];
    console.log(formData);
    const formObj = {
      name: formData[0][1],
      company: formData[1][1],
      email: formData[2][1],
      number: formData[3][1],
      message: formData[4][1],
    };
    let xhr = new XMLHttpRequest();
    xhr.open('POST', '/');
    xhr.setRequestHeader('content-type', 'application/json');
    console.log(xhr.responseText);
    xhr.onload = function () {
      if (xhr.responseText == 'success') {
        //  clear form
      } else {
        console.log(`error`);
      }
    };

    xhr.send(JSON.stringify(formObj));
  });
