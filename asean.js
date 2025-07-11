const heading = document.getElementById("hover-text");

  heading.addEventListener("mouseenter", () => {
    heading.textContent = "กดที่ธงสิ";
});

  heading.addEventListener("mouseleave", () => {
    heading.textContent = "อาเซียนน่ารู้";
});
// กล่องที่ 2
const text1 = document.getElementById("game-project");

    text1.addEventListener("mouseenter", () => {
    text1.textContent = "เกมบอล";
});

    text1.addEventListener("mouseleave", () => {
    text1.textContent = "Ballgame";
});
