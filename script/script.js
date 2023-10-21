const project1 = document.getElementById("project1");
const project2 = document.getElementById("project2");
const project3 = document.getElementById("project3");
const btnDesc1 = document.getElementById("btnDesc1");
const btnDesc2 = document.getElementById("btnDesc2");
const btnDesc3 = document.getElementById("btnDesc3");
const btnStack1 = document.getElementById("btnStack1");
const btnStack2 = document.getElementById("btnStack2");
const btnStack3 = document.getElementById("btnStack3");

const projectDesc =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, laborum repudiandae, libero sed ducimus molestiasdolores expedita hic quidem accusamus fuga accusantium repellendus alias excepturi, nemo laudantium eius obcaecati commodi. Quisquam atque aliquid fugiat vitae maxime distinctio explicabo accusantium ea ipsum expedita doloremque illo natus, voluptates delectus quod enim laborum.";

const projects = {
  projectOne: [{ href: "/", content: "React" }],
  projectTwo: [
    { href: "/", content: "React" },
    { href: "/", content: "Express" },
    { href: "/", content: "MongoDB Atlas" },
  ],
  projectThree: [
    { href: "/", content: "Nuxt 2" },
    { href: "/", content: "Express" },
    { href: "/", content: "MongoDB Atlas" },
  ],
};

let html = [];

// loop list html
const loop = (params) => {
  params.map((e) => {
    html.push(
      `<li><a href="${e.href}" class="text-decoration-none">${e.content}</a></li>`
    );
  });
};

// set active button
const activeBtn = (btn1, btn2) => {
  btn1.classList.add("activated");
  btn2.classList.remove("activated");
};

// show Tech Stack
const showStack = (cat) => {
  switch (cat) {
    case 1:
      html = [];
      activeBtn(btnStack1, btnDesc1);
      loop(projects.projectOne);
      project1.innerHTML = `
      <ul>${html.join("")}</ul>`;
      break;
    case 2:
      html = [];
      activeBtn(btnStack2, btnDesc2);
      loop(projects.projectTwo);
      project2.innerHTML = `
      <ul>${html.join("")}</ul>`;
      break;
    case 3:
      html = [];
      activeBtn(btnStack3, btnDesc3);
      loop(projects.projectThree);
      project3.innerHTML = `
      <ul>${html.join("")}</ul>`;
      break;
    default:
      console.error("Event is not defined!");
  }
};

// show Description
const showDesc = (cat) => {
  switch (cat) {
    case 1:
      activeBtn(btnDesc1, btnStack1);
      project1.innerHTML = `<p class="mb-0">${projectDesc}</p>`;
      break;
    case 2:
      activeBtn(btnDesc2, btnStack2);
      project2.innerHTML = `<p class="mb-0">${projectDesc}</p>`;
      break;
    case 3:
      activeBtn(btnDesc3, btnStack3);
      project3.innerHTML = `<p class="mb-0">${projectDesc}</p>`;
      break;
    default:
      console.error("Event is not defined!");
  }
};

// run animation bg
const bg = document.querySelector(".journey-content");
const cardJourney = document.getElementById("cardJourney");
const title = ["First Trip", "Second Trip", "Third Trip", "Four Trip"];
let eps = 0;
let isRuning = false;

const run = () => {
  if (isRuning) return;

  isRuning = true;
  eps === title.length - 1 ? (eps = 0) : (eps += 1);
  bg.classList.add("animate");
  cardJourney.classList.remove("scale-1");
  setTimeout(() => {
    bg.classList.remove("animate");
    cardJourney.innerHTML = `
    <h3 class="text-center">${title[eps]}</h3>
    <hr />
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur,
      omnis corporis consequatur aspernatur odit dolorem nesciunt
      blanditiis totam similique officiis illo nisi error. Accusamus
      perspiciatis et architecto explicabo optio. Nobis ducimus minima
      beatae officia tempora quos quis. Doloremque harum neque asperiores
      architecto ducimus, velit vero corrupti magnam illum odio nulla.
    </p>
    `;
    cardJourney.classList.add("scale-1");
    isRuning = false;
  }, 10000);
};

// auto write text
const changeText = document.getElementById("autoWrite");

let text = ["Frontend Developer", "Web Developer", "Freelancer"];
let j = 0;
let i = 0;

function autoWrite() {
  changeText.innerHTML = text[j].slice(0, i) + "_";
  i++;
  if (i > text[j].length) {
    i = 0;
    if (++j === text.length) {
      i = j = 0;
    }
  }
}

setInterval(() => {
  autoWrite();
}, 200);
