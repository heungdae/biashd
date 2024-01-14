//선언
const titleBtn = document.querySelector("#titleBtn");
const lineSubmitBtn = document.querySelector(".line_submit_btn");
const main_table = document.querySelector(".main_table");
const selectRemoveBtn = document.querySelector("#select_remove");
const bndRemove = document.querySelector("#bndLine_remove");
const nteamRemove = document.querySelector("#nteamLine_remove");
const zb1Remove = document.querySelector("#zb1Line_remove");
const trzRemove = document.querySelector("#trzLine_remove");
const enRemove = document.querySelector("#enLine_remove");
const vrvrRemove = document.querySelector("#vrvrLine_remove");
const tbzRemove = document.querySelector("#tbzLine_remove");


const bnd_image = {
    '성호': 'seongho.jpg',
    '리우': 'riu.jpg',
    '명재현': 'myungjaehyun.jpg',
    '태산': 'taesan.jpg',
    '이한': 'ihan.jpg',
    '운학': 'unhak.jpg',
}

const nteam_image = {
    '케이': 'kei.jpg',
    '후마': 'huma.jpg',
    '니콜라스': 'nicolas.jpg',
    '의주': 'uiju.jpg',
    '유마': 'yuma.jpg',
    '조': 'jo.jpg',
    '하루아': 'harua.jpg',
    '타키': 'taki.jpg',
    '마키': 'maki.jpg'
}

const zb1_image = {
    '성한빈': 'sunghanbin.jpg',
    '김지웅': 'kimjiwoong.jpg',
    '장하오': 'janghao.jpg',
    '석메튜': 'seokmetu.jpg',
    '김태래': 'kimtaerae.jpg',
    '리키': 'riki.jpg',
    '김규빈': 'kimgyubin.jpg',
    '박건욱': 'parkgeonuk.jpg',
    '한유진': 'hanyujin.jpg'
}

const riize_image = {
    '쇼타로': 'shotaro.jpg',
    '은석': 'eunseok.jpg',
    '성찬': 'seongchan.jpg',
    '원빈': 'wonbin.jpg',
    '승한': 'seunghan.jpg',
    '소희': 'sohee.jpg',
    '앤톤': 'anton.jpg'
}

const trz_image = {
    '최현석': 'choihyunseok.jpg',
    '지훈': 'jihun.jpg',
    '요시': 'yoshi.jpg',
    '준규': 'junghyu.jpg',
    '윤재혁': 'yunjaehyuk.jpg',
    '아사히': 'asahi.jpg',
    '도영': 'doyoung.jpg',
    '하루토': 'haruto.jpg',
    '박정우': 'parkjungwoo.jpg',
    '소정환': 'sojunghwan.jpg'
}

const en_image = {
    '정원': 'jeongwon.jpg',
    '희승': 'heeseung.jpg',
    '제이': 'jay.jpg',
    '제이크': 'jake.jpg',
    '성훈': 'sunghoon.jpg',
    '선우': 'sunwoo.jpg',
    '니키': 'niki.jpg'
}

const vrvr_image = {
    '동헌': 'dongheon.jpg',
    '호영': 'hoyoung.jpg',
    '민찬': 'minchan.jpg',
    '계현': 'gyehyun.jpg',
    '연호': 'yeonho.jpg',
    '용승': 'yongseung.jpg',
    '강민': 'gangmin.jpg'
}

const tbz_image = {
    '상연': 'sangyeon.jpg',
    '제이콥': 'jacob.jpg',
    '영훈': 'younghoon.jpg',
    '현재': 'hyunjae.jpg',
    '주연': 'juyeon.jpg',
    '케빈': 'kevin.jpg',
    '뉴': 'new.jpg',
    '큐': 'q.jpg',
    '주학년': 'juhaknyeon.jpg',
    '선우': 'seonwoo.jpg',
    '에릭': 'eric.jpg'
}

//함수
function handleTitle(e) { //표 제목 생성
    e.preventDefault();

    const header = document.querySelector("header");
    const titleInput = document.querySelector("#title_input");

    const titleText = titleInput.value;
    console.dir(titleInput);
    
    const title__p = document.createElement("p");
    title__p.innerText = titleText;

    titleInput.remove();
    titleBtn.remove();

    header.prepend(title__p);
}

function submitLine(e){ e = PointerEvent {isTrusted: true, pointerId: 1, width: 1, height: 1, pressure: 0, …}
    e.preventDefault();

    //입력 데이터 받기
    const nickname = document.querySelector(".nickname input");
    const bnd_m = document.querySelector(".bnd_td select");
    const nteam_m = document.querySelector(".nteam_td select");
    const zb1_m = document.querySelector(".zb1_td select");
    const riize_m = document.querySelector(".riize_td select");
    const trz_m = document.querySelector(".trz_td select");
    const en_m = document.querySelector(".en_td select");
    const vrvr_m = document.querySelector(".vrvr_td select");
    const tbz_m = document.querySelector(".tbz_td select");

    //select_tr을 clone해놓기
    const select_tr = document.querySelector(".select_tr");
    const cloneTr = select_tr.cloneNode(true);
    cloneTr.querySelector(".nickname input").value = "";
    cloneTr.querySelector(".line_submit_btn").addEventListener("click", submitLine);


    //새로운 tr만들기
    const newLine = document.createElement("tr");

    const name_td = document.createElement("td");
    name_td.innerText = nickname.value;

    const bnd_td = document.createElement("td");
    bnd_td.classList.add("bndLine");
    // bnd_td.innerText = bnd_m.value;
    bnd_td.innerHTML = "<img src="+ bnd_image[bnd_m.value] + " />";

    const nteam_td = document.createElement("td");
    nteam_td.classList.add("nteamLine");
    // nteam_td.innerText = nteam_m.value;
    nteam_td.innerHTML = "<img src="+ nteam_image[nteam_m.value] + " />";

    const zb1_td = document.createElement("td");
    zb1_td.classList.add("zb1Line");
    // zb1_td.innerText = zb1_m.value;
    zb1_td.innerHTML = "<img src="+ zb1_image[zb1_m.value] + " />";

    const riize_td = document.createElement("td");
    riize_td.classList.add("riizeLine");
    // riize_td.innerText = riize_m.value;
    riize_td.innerHTML = "<img src="+riize_image[riize_m.value] + "/>";

    const trz_td = document.createElement("td");
    trz_td.classList.add("trzLine");
    // trz_td.innerText = trz_m.value;
    trz_td.innerHTML = "<img src="+ trz_image[trz_m.value] + " />";

    const en_td = document.createElement("td");
    en_td.classList.add("enLine");
    // en_td.innerText = en_m.value;
    en_td.innerHTML = "<img src="+ en_image[en_m.value] + " />";
    
    const vrvr_td = document.createElement("td");
    vrvr_td.classList.add("vrvrLine");
    // vrvr_td.innerText = vrvr_m.value;
    vrvr_td.innerHTML = "<img src="+ vrvr_image[vrvr_m.value] + " />";

    const tbz_td = document.createElement("td");
    tbz_td.classList.add("tbzLine");
    // tbz_td.innerText = tbz_m.value;
    tbz_td.innerHTML = "<img src="+ tbz_image[tbz_m.value] + " />";

    newLine.appendChild(name_td);
    newLine.appendChild(bnd_td);
    newLine.appendChild(nteam_td);
    newLine.appendChild(zb1_td);
    newLine.appendChild(riize_td);
    newLine.appendChild(trz_td);
    newLine.appendChild(en_td);
    newLine.appendChild(vrvr_td);
    newLine.appendChild(tbz_td);

    //select 치우고 라인 넣기
    select_tr.remove();
    main_table.appendChild(newLine);

    main_table.appendChild(cloneTr);
}

function selectRemove(e){
    e.preventDefault();

    const select_tr = document.querySelector(".select_tr");
    select_tr.classList.toggle("hidden");

    if( select_tr.classList.contains("hidden") ){
        document.querySelector("#div_lineRemove").classList.toggle("hidden");
    } else {
        document.querySelector("#div_lineRemove").classList.toggle("hidden");
    }
}

//그룹 줄 지우기
function bndLineRemove(e){
    e.preventDefault();

    selectRemoveBtn.classList.add("hidden");

    const bndlines = document.querySelectorAll(".bndLine");
    for(let x in bndlines){
        bndlines[x].classList.add("hidden");
    };
    
}
function nteamLineRemove(e){
    e.preventDefault();

    selectRemoveBtn.classList.add("hidden");

    const nteamlines = document.querySelectorAll(".nteamLine");
    for(let x in nteamlines){
        nteamlines[x].classList.add("hidden");
    };
    
}
function zb1LineRemove(e){
    e.preventDefault();

    selectRemoveBtn.classList.add("hidden");

    const zb1lines = document.querySelectorAll(".zb1Line");
    for(let x in zb1lines){
        zb1lines[x].classList.add("hidden");
    };
    
}
function riizeLineRemove(e){
    e.preventDefault();
    
    selectRemoveBtn.classList.add("hidden");
    
    const riizelines = document.querySelectorAll(".riizeline");
    for(let x in riizelines){
        riizelines[x].classList.add("hidden");
    };
    
}
function trzLineRemove(e){
    e.preventDefault();

    selectRemoveBtn.classList.add("hidden");

    const trzlines = document.querySelectorAll(".trzLine");
    for(let x in trzlines){
        trzlines[x].classList.add("hidden");
    };
    
}
function enLineRemove(e){
    e.preventDefault();

    selectRemoveBtn.classList.add("hidden");

    const enlines = document.querySelectorAll(".enLine");
    for(let x in enlines){
        enlines[x].classList.add("hidden");
    };
    
}
function vrvrLineRemove(e){
    e.preventDefault();

    selectRemoveBtn.classList.add("hidden");

    const vrvrlines = document.querySelectorAll(`.vrvrLine`);
    for(let x in vrvrlines){
        vrvrlines[x].classList.add("hidden");
    };
    
}
function tbzLineRemove(e){
    e.preventDefault();

    selectRemoveBtn.classList.add("hidden");

    const tbzlines = document.querySelectorAll(".tbzLine");
    for(let x in tbzlines){
        tbzlines[x].classList.add("hidden");
    };
    
}

//실행부
titleBtn.addEventListener("click", handleTitle);
lineSubmitBtn.addEventListener("click", submitLine);
selectRemoveBtn.addEventListener("click", selectRemove);

bndRemove.addEventListener("click", bndLineRemove);
nteamRemove.addEventListener("click", nteamLineRemove);
zb1Remove.addEventListener("click", zb1LineRemove);
riizeRemove.addEventListener("click",riizeLineRemove);
trzRemove.addEventListener("click", trzLineRemove);
enRemove.addEventListener("click", enLineRemove);
vrvrRemove.addEventListener("click", vrvrLineRemove);
tbzRemove.addEventListener("click", tbzLineRemove);
