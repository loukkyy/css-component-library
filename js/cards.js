const containers = document.querySelectorAll(".container-3d");

containers.forEach((container) => {
  let card = container.getElementsByClassName("card")[0];
  let top = card.getBoundingClientRect().top + window.scrollY;
  let left = card.getBoundingClientRect().left;
  let width = card.getBoundingClientRect().width;
  let height = card.getBoundingClientRect().height;
  let image = card.getElementsByClassName("image")[0];
  let title = card.getElementsByClassName("title")[0];
  let subTitle = card.getElementsByClassName("sub-title")[0];
  let description = card.getElementsByClassName("description")[0];
  container.addEventListener("mousemove", (e) => {
    top = card.getBoundingClientRect().top + window.scrollY;
    let xAxis = -(left + width / 2 - e.pageX) / 25;
    let yAxis = (top + height / 2 - e.pageY) / 25;
    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
  });
  container.addEventListener("mouseenter", (e) => {
    card.style.transition = "none";
    image.style.transform = "translateZ(80px)";
    title.style.transform = "translateZ(60px)";
    subTitle.style.transform = "translateZ(40px)";
    description.style.transform = "translateZ(30px)";
  });
  container.addEventListener("mouseleave", (e) => {
    card.style.transform = `rotateY(0deg) rotateX(0deg)`;
    card.style.transition = "transform 0.5s ease";
    image.style.transform = "translateZ(0px)";
    title.style.transform = "translateZ(0px)";
    subTitle.style.transform = "translateZ(0px)";
    description.style.transform = "translateZ(0px)";
  });
});
