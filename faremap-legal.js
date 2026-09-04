function toggleTheme(){
  const root=document.documentElement;
  const next=root.dataset.theme==="dark"?"light":"dark";
  root.dataset.theme=next;
  localStorage.setItem("faremap-theme",next);
  updateThemeButton();
}
function updateThemeButton(){
  const b=document.querySelector("[data-theme-toggle]");
  if(!b)return;
  b.textContent=document.documentElement.dataset.theme==="dark"?"☀":"☾";
}
(function(){
  const saved=localStorage.getItem("faremap-theme");
  if(saved)document.documentElement.dataset.theme=saved;
  else if(window.matchMedia&&matchMedia("(prefers-color-scheme: dark)").matches)document.documentElement.dataset.theme="dark";
  document.addEventListener("DOMContentLoaded",updateThemeButton);
})();