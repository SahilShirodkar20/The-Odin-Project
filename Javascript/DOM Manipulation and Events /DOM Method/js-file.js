const cont=document.querySelector(".content");
const par=document.createElement("p");
par.classList.add("par");
par.textContent='Hey Im red!';
cont.appendChild(par);
par.style.color = "red";
const head=document.createElement("h3");
head.classList.add("blue");
head.textContent="I’m a blue h3";
head.style.color="blue";
cont.appendChild(head);
const div=document.createElement("div");
div.classList.add("inner");
div.style.backgroundColor="pink";
div.style.borderColor="black";
par.style.color = "red";
const head1=document.createElement("h1");
head1.textContent="I’m in a div";
div.appendChild(head1);
const par1=document.createElement("p");
par1.classList.add("par1");
par1.textContent='ME TOO!';
div.appendChild(par1);
cont.appendChild(div);


