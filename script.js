let coll = document.getElementsByTagName("section");

for (let i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    let content = this.getElementsByClassName("content")[0];
    content.style.display = (content.style.display === "flex") ? "none" : "flex";
  });
}

let skills = document.getElementsByClassName("skills-item");

for (let i = 0; i < coll.length; i++) {
  
  
  if (skills.length > 0) {
    // Получаем текстовое содержимое первого <span>
    value = skills[i].getElementsByTagName("span")[0].textContent
    
    // Устанавливаем ширину элемента
    skills[i].style.width = value + "%";
  }
}