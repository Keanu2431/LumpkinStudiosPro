const contactForm = document.querySelector('#contact-home-form');
const btn = document.querySelector('#submit-home');
const cycleContainer = document.querySelector('.dev');
const itemsList = document.querySelector('.items')?.childNodes;
//
// changing cycle item

window.addEventListener('click', function (e) {
  const clicked = e.target.dataset.cycle;
  console.log(clicked);
  const html = `
<div class="development-cycle" id="development-cycle">
      <div class="items">
        <h2 data-cycle="brainstorming" class="active-cycle">
          01. Brainstorming
        </h2>
        <h2 data-cycle="mock-up">02. Mock Up</h2>
        <h2 data-cycle="development">03. development</h2>
        <h2 data-cycle="revision">04. Revision</h2>
        <h2 data-cycle="deploy">05. Deploy</h2>
      </div>
      <div id="cycle-cont">
        <div class="cycle-expand fade">
          <img src="./images/cycle/brainstorm.jpeg" alt="" />
          <div class="cycle-text">
            <h2>Brainstorming & Planning</h2>
            <br />
            <h3>
              LumpkinStudios will meet with our clients, to get the creative
              process going. Getting a clear understanding of what our clients
              need and want, will help make both parties happy with the ultimate
              outcome of the project. However, if the vision changes don't worry
              we've got you covered.
            </h3>
          </div>
        </div>
      </div>
    </div>
`;
  if (clicked == 'brainstorming') {
    cycleContainer.innerHTML = `
      <div class="development-cycle" id="development-cycle">
      <div class="items">
        <h2 data-cycle="brainstorming" class="active-cycle">
          01. Brainstorming
        </h2>
        <h2 data-cycle="mock-up">02. Mock Up</h2>
        <h2 data-cycle="development">03. development</h2>
        <h2 data-cycle="revision">04. Revision</h2>
        <h2 data-cycle="deploy">05. Deploy</h2>
      </div>
      <div id="cycle-cont">
        <div class="cycle-expand fade fade-in">
          <img src="./images/cycle/brainstorm.jpeg" alt="" />
          <div class="cycle-text">
            <h2>Brainstorming & Planning</h2>
            <br />
            <h3>
              LumpkinStudios will meet with our clients, to get the creative
              process going. Getting a clear understanding of what our clients
              need and want, will help make both parties happy with the ultimate
              outcome of the project. Furthermore, we will help guide you with our own past experience in whichever industry you plan to take your endeavor . However, if the vision changes don't worry
              we've got you covered.
            </h3>
          </div>
        </div>
      </div>
    </div>
      `;
  } else if (clicked == 'mock-up') {
    cycleContainer.innerHTML = `
      <div class="development-cycle" id="development-cycle">
      <div class="items">
        <h2 data-cycle="brainstorming" >
          01. Brainstorming
        </h2>
        <h2 data-cycle="mock-up" class="active-cycle">02. Mock Up</h2>
        <h2 data-cycle="development">03. development</h2>
        <h2 data-cycle="revision">04. Revision</h2>
        <h2 data-cycle="deploy">05. Deploy</h2>
      </div>
      <div id="cycle-cont">
        <div class="cycle-expand fade fade-in ">
          <img src="./images/cycle/mock-up.png" alt="" />
          <div class="cycle-text">
            <h2>designing & Templating</h2>
            <br />
            <h3>
             Once we've got the ideas and outlook noted, it's time for us to move on with the visuals. We'll make a few different design and then from there, we'll pick which fits best with your vision. Using mainstream proven technology such as adobe illustrator and photoshop, we'll be able to make a design that fits whatever it is you're thinking.
            </h3>
          </div>
        </div>
      </div>
    </div>
      
      `;
  } else if (clicked == 'development') {
    cycleContainer.innerHTML = `
      <div class="development-cycle" id="development-cycle">
      <div class="items">
        <h2 data-cycle="brainstorming" >
          01. Brainstorming
        </h2>
        <h2 data-cycle="mock-up">02. Mock Up</h2>
        <h2 data-cycle="development" class="active-cycle">03. development</h2>
        <h2 data-cycle="revision">04. Revision</h2>
        <h2 data-cycle="deploy">05. Deploy</h2>
      </div>
      <div id="cycle-cont">
        <div class="cycle-expand fade fade-in ">
          <img src="./images/cycle/development.jpeg" alt="" />
          <div class="cycle-text">
            <h2>Development & Production</h2>
            <br />
            <h3>
           now our favorite part, putting our time tested skills to use. We will begin programming your website/web application and including all neccessary functionality. If we ever come across a new feature that we've thought of that can greatly improve the users experience, we'll be sure to run it by you. Writing clean and manageable code for future implementation will be one of our main priorities.
            </h3>
          </div>
        </div>
      </div>
    </div>
      `;
  } else if (clicked === 'revision') {
    cycleContainer.innerHTML = `
    
    <div class="development-cycle" id="development-cycle">
    <div class="items">
      <h2 data-cycle="brainstorming" >
        01. Brainstorming
      </h2>
      <h2 data-cycle="mock-up">02. Mock Up</h2>
      <h2 data-cycle="development">03. development</h2>
      <h2 data-cycle="revision" class="active-cycle">04. Revision</h2>
      <h2 data-cycle="deploy">05. Deploy</h2>
    </div>
    <div id="cycle-cont">
      <div class="cycle-expand fade fade-in ">
        <img src="./images/cycle/revision.jpeg" alt="" />
        <div class="cycle-text">
          <h2>revision & feedback</h2>
          <br />
          <h3>
              now that the grunt of the work is out of the way , it's time we check back in with you; the client. For no project is complete without the final input of the customer. We will carefully look at the functionality and design and figure out if there are any improvements or adjustments you'd want made.
          </h3>
        </div>
      </div>
    </div>
  </div>
    `;
  } else if (clicked === 'deploy') {
    cycleContainer.innerHTML = `
    
    <div class="development-cycle" id="development-cycle">
    <div class="items">
      <h2 data-cycle="brainstorming" >
        01. Brainstorming
      </h2>
      <h2 data-cycle="mock-up">02. Mock Up</h2>
      <h2 data-cycle="development">03. development</h2>
      <h2 data-cycle="revision">04. Revision</h2>
      <h2 data-cycle="deploy" class="active-cycle">05. Deploy</h2>
    </div>
    <div id="cycle-cont">
      <div class="cycle-expand fade fade-in ">
        <img src="./images/cycle/deploy.jpeg" alt="" />
        <div class="cycle-text">
          <h2>Launch day</h2>
          <br />
          <h3>finally, we can move onto launching the website, once we sort everything and pick the proper host for your website.
              but, like many things, the project doesn't just stop here. just like every aspect of a buisness, your website needs to be managed and updated post production, we can provide that for you. Leaving you with a piece of mind that if any bug were to occur we'd be there on call to fix it.
          </h3>
        </div>
      </div>
    </div>
  </div>
    `;
  }
});

// CONTACT SUBMIT
if (contactForm)
  contactForm.addEventListener('submit', function (e) {
    e.preventDefault();
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
    contactForm.reset();
  });
