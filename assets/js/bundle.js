"use strict";let data=[];const tabItem=({title:e},t)=>` <a href="#tab-id" id="tab_${t}" onclick="showTab(${t})" class="tab-item">${e}</a> `,cardTemplate=({content:e,image:t,title:a})=>`<div class="card-highlight two-cols"><div style="max-width: 400px;"><div class="mb-3"><h3 class="text-large text-red">${a}</h3><div class="divisor bg-red"></div></div><p class="text-5"> ${e}</p></div><div style="text-align: center;"> <img src="${t}" style="max-width: 300px; height: auto; object-fit: contain;" alt="${a}"/></div></div> `,tabContainer=document.getElementById("tabs"),cardSelected=document.getElementById("selected-card");function showTab(e){if(!data||data.length<1)throw new Error("Dados não encontrados!");var t="tab_"+e,e=cardTemplate(data[e]);cardSelected.innerHTML=e,data.forEach((e,t)=>{document.getElementById("tab_"+t).className="tab-item"}),document.getElementById(t).className="tab-item active"}async function main(){const e=await fetch("./assets/data/equipamentos.json");data=await e.json()||[],tabContainer.innerHTML=data.map(tabItem).join(""),showTab(0)}main();const template=({image:e,name:t,contact:a,role:n})=>`<div class="person-card"><div> <img src="${e}" alt="Fotinha do ${t}" class="card-image"/></div><div class="card-body"><h4>${t}</h4><p style="margin-bottom: 0;"> <small><b>${n}</b></small><br/> <small>${a}</small></p></div></div> `,containerCards=document.getElementById("cards");async function personCardMain(){const e=await fetch("./assets/data/equipe.json"),t=await e.json()||[];containerCards.innerHTML=t.map(template).join("")}personCardMain();const eventTemplate=({title:e,day:t,month:a,body:n,image:s})=>`<div class="bg-white rounded drop-3"> <img src="${s}" height="200" width="300" class="rounded-top" alt="Image"/><div class="text-left p-4 two-cols f-align-center justify-center" style="flex-direction: column;"><h4 style="line-height: .5;" class="montserrat text-larger text-center text-blue"> ${t}<br/> <small class="text-md">${a}</small></h4><div><h6 class="text-4 text-blue">${e}</h6><p>${n}</p></div></div></div> `,conteinerEvents=document.getElementById("events");async function eventsCardMain(){const e=await fetch("./assets/data/eventos.json"),t=await e.json()||[];conteinerEvents.innerHTML=t.map(eventTemplate).join("")}eventsCardMain();const linksList=document.getElementById("links-list");async function mainLinks(){const e=await fetch("./assets/data/links.json").then(e=>e.json());linksList.innerHTML=e.map(e=>`<a href="${e.url}">${e.title}</a>`).join("<br/>")}function validateForm(){var e=document.forms.form.nome.value,t=document.forms.form.email.value,a=document.forms.form.telefone.value,n=document.forms.form.assunto.value;return""==e?(alert("Nome deve estar preenchido"),!1):""==t?(alert("Email deve estar preenchido!"),!1):""==a?(alert("Telefone deve estar preenchido!"),!1):""==n?(alert("Assunto deve estar preenchido!"),!1):(alert("Formulário enviado com sucesso!"),!0)}function clearForm(){document.forms.form.reset()}mainLinks();