const portfolio = {
  companies: [
    {
      title: 'Oh, so you skate?',
      img: 'img/quiz.png',
      url: 'https://quiz-app-mess-around--carrerasraul.repl.co/',
      description:
        'The 2020 Olympics are right around the corner and with Skateboarding making its debut appearance, everyone is hoping on the bandwagon. You cant swing a dead cat without seeing someone mall grabbing their board or seeing a "Thrasher" hoodie at every street corner. How are you supposed to decipher the real from the posers? Hand them this quiz and find out right then and there!',
      builtWith: ['HTML', 'CSS', 'JavaScript', 'jQuery', 'Photoshop'],
      alt: 'Quiz App',
      repo: 'https://github.com/carrerasraul/Quiz-App',
    },
    {
      title: 'TwoTube',
      img: 'img/twotube.png',
      url: 'https://carrerasraul.github.io/TwoTube/',
      description:
        'Have a favorite video that youre having trouble finding? Cant remember if it was on YouTube or Vimeo? With TwoTube you can search both YouTube and Vimeo with one click! Just search your favorite video and you sit back and relax knowing your time searching has been cut in half! Click the link below the video to be taken directly to the video on either YouTube or Vimeo!',
      builtWith: ['HTML', 'CSS', 'JavaScript', 'PHP', 'Photoshop', 'MySQL'],
      alt: 'Website image for Agent Attendance',
      repo: 'https://github.com/carrerasraul/TwoTube',
    },
    {
      title: 'The Pixelized Princess',
      img: 'img/thePixelizedPrincess.png',
      url: 'https://thepixelizedprincess.com',
      description:
        'The Pixelized Princess needed a simple landing page so her customers can follow her on social media or buy from her Etsy store.',
      builtWith: ['HTML', 'CSS', 'JavaScript', 'Photoshop'],
      alt: 'Website image for The Pixelized Princess',
      repo: 'none',
    },
  ],
  counter: 0,
};

function checkCounterUp() {
  if (portfolio.counter === portfolio.companies.length - 1) {
    portfolio.counter = 0;
  } else {
    portfolio.counter++;
  }
}

function checkCounterDown() {
  if (portfolio.counter <= 0) {
    portfolio.counter = portfolio.companies.length - 1;
  } else {
    portfolio.counter--;
  }
}

function renderPortfolioContent() {
  // output content to proper elements
  document.querySelector('#portfolioImg').innerHTML = `<img src="${
    portfolio.companies[portfolio.counter].img
  }" alt="${portfolio.companies[portfolio.counter].alt}">`;
  document.querySelector('#portfolioTitle').innerHTML = `${
    portfolio.companies[portfolio.counter].title
  }`;
  document.querySelector('#portfolioDescription').innerHTML = `${
    portfolio.companies[portfolio.counter].description
  }`;

  // iterate through the builtWith array to generate the html to output
  let builtWithString = '';

  for (
    let i = 0;
    i < portfolio.companies[portfolio.counter].builtWith.length;
    i++
  ) {
    builtWithString += `<span class="builtWith">${
      portfolio.companies[portfolio.counter].builtWith[i]
    }</span>`;
  }

  document.querySelector('#portfolioBuiltWith').innerHTML = builtWithString;

  if (portfolio.companies[portfolio.counter].repo === 'none') {
    document.querySelector('#portfolioButtonContainer').innerHTML = `<a href="${
      portfolio.companies[portfolio.counter].url
    }" target="_blank"><button class="portfolioButton">Visit Site</button></a>`;
  } else {
    document.querySelector('#portfolioButtonContainer').innerHTML = `<a href="${
      portfolio.companies[portfolio.counter].url
    }" target="_blank"><button class="portfolioButton">Visit Site</button></a> <a href="${
      portfolio.companies[portfolio.counter].repo
    }" target="_blank"><button class="portfolioButton">Github Repo</button></a>`;
  }
}

document.addEventListener('DOMContentLoaded', function () {
  // right arrow event listener
  document.querySelector('#portfolioDiv').addEventListener('click', (e) => {
    if (
      e.target.id === 'portfolioLeftArrow' ||
      e.target.id === 'portfolioRightArrow'
    ) {
      if (e.target.id === 'portfolioRightArrow') {
        checkCounterUp();
      } else if (e.target.id === 'portfolioLeftArrow') {
        checkCounterDown();
      }

      renderPortfolioContent();
    }
  });

  function navOriginal() {
    document.querySelector('header').style.flexWrap = 'nowrap';
    document.querySelector('nav').style.display = 'none';
    document.querySelector('nav').style.flexBasis = 'initial';
    document.querySelector('nav ul').style.flexDirection = 'row';
  }

  function navAdjusted() {
    document.querySelector('header').style.flexWrap = 'wrap';
    document.querySelector('nav').style.display = 'inline-block';
    document.querySelector('nav').style.flexBasis = '100%';
    document.querySelector('nav ul').style.flexDirection = 'column';
    document.querySelector('nav ul').style.textAlign = 'center';

    document.querySelectorAll('nav ul li').forEach((item) => {
      item.style.fontSize = '1.5rem';
    });
  }

  function navReset() {
    document.querySelector('header').removeAttribute('style');
    document.querySelector('nav').removeAttribute('style');
    document.querySelector('nav ul').removeAttribute('style');
    document.querySelector('nav').removeAttribute('style');

    document.querySelectorAll('nav ul li').forEach((item) => {
      item.removeAttribute('style');
    });
  }

  // hamburger menu event listener
  document.querySelector('#menu').addEventListener('click', (e) => {
    if (document.querySelector('nav').style.display != 'inline-block') {
      navAdjusted();
    } else {
      navOriginal();
    }
  });

  window.addEventListener('resize', (e) => {
    if (
      window.innerWidth > 860 &&
      (document.querySelector('nav').style.display === 'inline-block' ||
        document.querySelector('nav').style.display === 'none')
    ) {
      navReset();
    }
  });

  renderPortfolioContent();
});
