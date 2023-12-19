(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))u(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const f of n.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&u(f)}).observe(document,{childList:!0,subtree:!0});function r(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerPolicy&&(n.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?n.credentials="include":e.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function u(e){if(e.ep)return;e.ep=!0;const n=r(e);fetch(e.href,n)}})();const c=[{id:"a",question:"con la A: Mecanismo para esparcir un líquido a presión, como el agua para el riego",correctAnswer:"aspersor"},{id:"b",question:"CON LA B: Apertura delantera de un pantalón",correctAnswer:"bragueta"},{id:"c",question:"CON LA C: Galería que rodea el patio principal de una iglesia o convento",correctAnswer:"claustro"},{id:"d",question:"CON LA D: Documento que expide un centro educativo o una corporación y que acredita un título o un grado académico",correctAnswer:"diploma"},{id:"e",question:"CON LA E: Nombre del rey visigodo que gobernó entre los años 687 y 702, y limitó la actividad económica de los judíos",correctAnswer:"égica"},{id:"f",question:"CON LA F: Brillo muy intenso",correctAnswer:"fulgor"},{id:"g",question:"CON LA G: País asiático con capital en Tifilis",correctAnswer:"georgia"},{id:"h",question:"CON LA H: MAsa de harina con manteca, muy sobada y que,al cocerse en el horno, forma muchas hojas delgadas superpuestas",correctAnswer:"hojaldre"},{id:"i",question:"CON LA I: Esperanza cuyo cumplimiento parece especialmente atractivo",correctAnswer:"ilusión"},{id:"j",question:"CON LA J: Soldado de infantería de la Guardia Imperial turca, reclutado a menudo entre hijos de cristianos",correctAnswer:"jenízaro"},{id:"k",question:"CON LA K: Conjunto deportivo de chaqueta y pantalón anchos y de tela fuerte, que se usa para practicar artes marciales",correctAnswer:"kimono"},{id:"l",question:"CON LA L: Daño o detrimento corporal causado por una herida, un golpe o una enfermedad",correctAnswer:"lesión"},{id:"m",question:"CON LA M: Apellido del matemático que, a principios del siglo 20, introdujo el modelo de espacio-tiempo en cuatro dimensiones",correctAnswer:"minkowski"},{id:"n",question:"CON LA N: Insignificante, sin importancia",correctAnswer:"nimio"},{id:"ñ",question:"CONTIENE LA Ñ: En fútbol, acción en la que se sortea a un contrario pasándole el balón entre las piernas",correctAnswer:"caño"},{id:"o",question:"CON LA O: Cerro aislado que domina un llano",correctAnswer:"otero"},{id:"p",question:"CON LA P: Juego que consiste en tirar unas bolas y otra más pequeña, y ver quién se aproxima más a ésta con las grandes",correctAnswer:"petanca"},{id:"q",question:"CONTIENE LA Q: Se dice del triángulo que tiene todos sus lados iguales ",correctAnswer:"equilatero"},{id:"r",question:"CON LA R: Satisfacción a una pregunta, duda o dificultad",correctAnswer:"respuesta"},{id:"s",question:"CON LA S: Antiguo instrumento musical de metal, consistente en un aro o herradura atravesado por varillas, que sonaba agitándolo ",correctAnswer:"sistro"},{id:"t",question:"CON LA T: Cada uno de los pasos o gestiones que se establecen de manera oficial para la conclusión o resolución de un asunto ",correctAnswer:"trámite"},{id:"u",question:"CON LA U: Lugar en el que está situado algo",correctAnswer:"ubicación"},{id:"v",question:"CON LA V: Casa de recreo aislada en el campo",correctAnswer:"villa"},{id:"w",question:"CON LA W: Bebida alcohólica de alta graduación que se obtiene por destilación de cebada y otros cereales",correctAnswer:"whisky"},{id:"x",question:"CONTIENE LA X: Enunciado o conjunto coherente de enunciados orales o escritos",correctAnswer:"texto"},{id:"y",question:"CONTIENE LA Y: Máquina o conjunto de máquinas que sirven para cambiar los decorados en el escenario de un teatro",correctAnswer:"tramoya"},{id:"z",question:"CON LA Z: Escarabajo que ataca los trigales, especialmente cuando los granos son tiernos ",correctAnswer:"zabro"}],N=document.getElementById("question"),A=document.getElementById("answerPlayer"),O=document.getElementById("containerLetters"),q=document.getElementById("pasapalabra"),h=document.getElementById("timer"),y=document.getElementById("correctAnswer"),w=document.getElementById("buttonStart");let t=0;const a=[];let L,i=c,l=0,d=0,g=110;A.disabled=!0;q.disabled=!0;const C=O.querySelectorAll(".letter"),m=150,b=C.length,v=2*Math.PI/b;C.forEach((o,s)=>{const r=3*Math.PI/2+s*v,u=m*Math.cos(r),e=m*Math.sin(r);o.style.left=`${u+m}px`,o.style.top=`${e+m}px`});const E=o=>{l!==27&&(L=o[t].id,N.textContent=o[t].question)},p=()=>{t>=i.length-1?(t=0,i=a):t++,E(i)},I=o=>{const s=o.target.value,r=document.querySelector(`[data-letter='${L}']`);o.key==="Enter"&&(i===c?s===c[t].correctAnswer?(r.classList.remove("letter--jumped"),r.classList.add("letter--correct"),l++,d++,y.textContent=d):s!==c[t].correctAnswer&&(r.classList.remove("letter--jumped"),r.classList.add("letter--incorrect"),l++):i===a&&(s===a[t].correctAnswer?(r.classList.remove("letter--jumped"),r.classList.add("letter--correct"),a.splice(t,1),t--,l++,d++,y.textContent=d):(r.classList.remove("letter--jumped"),r.classList.add("letter--incorrect"),a.splice(t,1),t--,l++)),p())},j=()=>{const o=document.querySelector(`[data-letter='${L}']`);i===c?(a.push(c[t]),o.classList.add("letter--jumped"),console.log(a),p()):(i!==c&&t<=a.length-1||t--,p())};E(i);const S=()=>{A.disabled=!1,q.disabled=!1,w.disabled=!0;const o=setInterval(()=>{h.textContent=g,g--,g<0||l===27?(console.log("se termino el tiempo"),A.disabled=!0,q.disabled=!0,clearInterval(o)):d===27&&console.log("ganaste")},1e3)};w.addEventListener("click",S);A.addEventListener("keypress",I);q.addEventListener("click",j);