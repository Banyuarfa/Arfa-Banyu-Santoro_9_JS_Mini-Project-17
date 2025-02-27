const colorRadios = document.querySelectorAll("[name='color']");
const hoverRadios = document.querySelectorAll("[name='hover']");
const lis = document.querySelectorAll("li");
lis.forEach((li) =>
  colorRadios.forEach((cr) => {
    let prevColor;
    cr.addEventListener("change", () => {
      li.style.color = cr.id;
      prevColor = cr.id;
    });

    hoverRadios.forEach((hr) =>
      hr.addEventListener("change", () => {
        li.addEventListener("mouseover", () => (li.style.color = hr.id));
        li.addEventListener("mouseout", () => (li.style.color = prevColor));
      })
    );
  })
);
