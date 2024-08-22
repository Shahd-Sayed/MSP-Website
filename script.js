function AnimationJoinUs() {
  setTimeout(() => {
    document.querySelectorAll("#bestStudent")[0].style.cssText +=
      "animation: showing-text 2s, cursor 0.2s step-end alternate,showTitleMsp 0.2s forwards;";
  }, 100);
  setTimeout(() => {
    document.querySelector(".des-info-bestStudent").style.cssText +=
      "animation: showTitleMsp 1s forwards;";
  }, 1100);
  setTimeout(() => {
    document.querySelector("#timeline").style.cssText +=
      "animation: show-line-contact 3s forwards;";
    for (
      let index = 0;
      index < document.querySelectorAll(".iconTimeline").length;
      index++
    ) {
      document.querySelectorAll(".iconTimeline")[
        index
      ].style.cssText += `animation:show-icon-${index + 1} 3s forwards;`;
    }
  }, 2100);
  setTimeout(() => {
    document.querySelector("form").style.cssText +=
      "animation: showTitleMsp 2s forwards;";
  }, 4100);
}
AnimationJoinUs();
