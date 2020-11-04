let i = 0;
(function(){
  if (i == 0) {
    i = 1;
    let bar = document.querySelector(".content2__Bar--comple");
    let porce = document.querySelector("#porcentaje");
    let width = 10;
    let pporcent = 0;
    let id = setInterval(function(){
      if (width >= 70) {
        clearInterval(id);
        porce.innerHTML = pporcent+5;
        i = 0;
      } else {
        width++;
        pporcent+=3;
        bar.style.width = width + "%";
        porce.innerHTML = pporcent;
      }
    }, 100);
  }
})();