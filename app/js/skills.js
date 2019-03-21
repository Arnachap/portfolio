

const skillBars = document.getElementsByClassName('skillbar');

for (let i = 0; i < skillBars.length; i++) {
    let skillBar = skillBars[i].children[1];
    let percent = skillBars[i].getAttribute('data-percent');

    skillBar.style.width = percent;
}