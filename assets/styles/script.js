const navbar = document.querySelector('.nav-colored');
window.onscroll = () => {
  if (window.scrollY > 100) {
    navbar.classList.add('nav-scrolled');
  } else {
    navbar.classList.remove('nav-scrolled');
  }
};

const milestones = [
  '<b>27 January 2022</b>, Twitter account created',
  '<b>27 January 2022</b>, YouTube account created',
  '<b>25 March 2022</b>, YouTube debut and achieved a 100,000 YouTube subscribers milestone',
  '<b>05 April 2022</b>, Achieved a 300,000 YouTube subscribers milestone during a Valorant collab with Kobo',
  '<b>09 May 2022</b>, Achieved a 350,000 YouTube subscribers milestone',
  '<b>04 June 2022</b>, Achieved a 400,000 YouTube subscribers milestone',
  '<b>26 July 2022</b>, Achieved a 500,000 YouTube subscribers milestone' ,
];

const tags = [];

milestones.forEach(elem => {
  let tag = document.createElement("li");
  // let text = document.createTextNode(elem);
  tag.insertAdjacentHTML("beforeend", elem);
  tags.push(tag)
});

const element = document.getElementById("milestones");
tags.forEach(tag => element.appendChild(tag));
