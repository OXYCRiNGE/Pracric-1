let checkCreate = false;

function createInfo() {
    let names = [];
    const n = 2;
    if (checkCreate == true) {
        for (let i = 0; i < n ; i++) {
            document.getElementsByTagName('img')[n].remove();
        }
    }
    for (let i = 0; i < n; i++) {
        names.push(document.getElementsByTagName('input')[i].value);
    }
    let teamNum = document.getElementsByTagName('input')[n].value;
    document.getElementById('teamNum').textContent = 'Номер команды: ' + teamNum;
    for (let i = 1; i <= n ; i++) {
        let pic = document.createElement('img');
        pic.src = `img/${i}.jpg`;
        document.getElementById(`${i}`).appendChild(pic);
        document.getElementById(`f${i}`).textContent = names[i-1];
    }
    checkCreate = true;
}

document.getElementsByTagName('button')[0].onclick = createInfo;