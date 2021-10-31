//선언
const titleBtn = document.querySelector("#titleBtn");
const lineSubmitBtn = document.querySelector(".line_submit_btn");
const main_table = document.querySelector(".main_table");
const selectRemoveBtn = document.querySelector("#select_remove");
const svtRemove = document.querySelector("#svtLine_remove");
const enRemove = document.querySelector("#enLine_remove");
const skzRemove = document.querySelector("#skzLine_remove");
const mxRemove = document.querySelector("#mxLine_remove");
const atzRemove = document.querySelector("#atzLine_remove");
const txtRemove = document.querySelector("#txtLine_remove");
const tbzRemove = document.querySelector("#tbzLine_remove");


const svt_image = {
    "--선택하세요--" : "./img/default.jpg",
    "에스쿱스":"https://pbs.twimg.com/media/Ez_j79aVUAElc3g?format=jpg&name=medium",
    "조슈아":"./img/joshua2.jpg",
    "정한":"https://mblogthumb-phinf.pstatic.net/MjAyMDEwMTVfMjEg/MDAxNjAyNzQyNjk4MzU5.8IwmWlubejxpT2LMxBHAv4Q_Xu8n335LS3PuywqaWNgg.EAFc5g0mjfW3WgO5zaPOlC2P6vXt9e10cOk353bf8Twg.JPEG.angela9009/IMG_7050.JPG?type=w800",
    "원우":"https://pbs.twimg.com/media/FBAxJQ1UYAQOsGi?format=jpg&name=4096x4096",
    "우지":"./img/woozi.jpg",
    "호시":"./img/hoshi.jpg",
    "준":"https://pbs.twimg.com/media/Es4n9r-UUAISt15?format=jpg&name=large",
    "민규":"https://pbs.twimg.com/media/E9fDmqRVEAgg-ba?format=jpg&name=medium",
    "도겸":"./img/dk.jpg",
    "디에잇":"https://pbs.twimg.com/media/FCT8dzhVIAofkKQ?format=jpg&name=large",
    "버논":"./img/vernon.jpg",
    "승관":"./img/boo3.jpg",
    "디노":"./img/dino.jpg",
};
const en_image = {
    "--선택하세요--" : "./img/default.jpg",
    "희승":"https://pbs.twimg.com/media/FBQxFX1VIAU_Tol?format=jpg&name=large",
    "정원":"https://pbs.twimg.com/media/FC9bTWQaMAAShtS?format=jpg&name=large",
    "선우":"https://pbs.twimg.com/media/E3NSgIsVUAAj9_x?format=jpg&name=large",
    "제이크":"https://pbs.twimg.com/media/E_F_FQ8VQAggfK5?format=jpg&name=large",
    "제이":"https://pbs.twimg.com/media/FB6MeRZUcAU17bQ?format=jpg&name=large",
    "성훈":"https://pbs.twimg.com/media/E9ZtIHXVgAIxsPQ?format=jpg&name=large",
    "니키":"https://pbs.twimg.com/media/FCJ68-gVUAMXstl?format=jpg&name=large",
};
const skz_image = {
    "--선택하세요--" : "./img/default.jpg",
    "현진":"https://pbs.twimg.com/media/E36oPSWUYAMzPzm?format=jpg&name=medium",
    "필릭스":"https://pbs.twimg.com/media/E2foFq9UcAIbTot?format=jpg&name=medium",
    "방찬":"https://pbs.twimg.com/media/E9uH2_yUYAEere5.jpg",
    "리노":"https://pbs.twimg.com/media/FBviaBiVcAE6lvs?format=jpg&name=large",
    "한":"https://pbs.twimg.com/media/EzlEPOWVoAAtjXz?format=jpg&name=medium",
    "승민":"https://pbs.twimg.com/media/E1WzgLtVUAEDySN?format=jpg&name=medium",
    "아이엔":"https://pbs.twimg.com/media/E8SBkB3UcAcog-2?format=jpg&name=large",
    "창빈":"https://pbs.twimg.com/media/FCCzMGMXMAQ4C-C?format=jpg&name=4096x4096",
}
const mx_image = {
    "--선택하세요--" :  "./img/default.jpg",
    "민혁":"https://pbs.twimg.com/media/EwSVvdBUUAYBqp6?format=jpg&name=medium",
    "기현":"https://pbs.twimg.com/media/FB5NqNlVIAEr9SW?format=jpg&name=large",
    "형원":"https://pbs.twimg.com/media/E1Goh31UUAIvcFV?format=jpg&name=medium",
    "주헌":"https://pbs.twimg.com/media/EqtKcitVEAA5gvo?format=jpg&name=large",
    "아이엠":"https://pbs.twimg.com/media/E3spYYgVIAEcZzQ?format=jpg&name=large",
    "셔누":"https://pbs.twimg.com/media/E7cu-WOUcAEGmyq?format=jpg&name=large",
}
const atz_image = {
    "--선택하세요--" : "./img/default.jpg",
    "성화":"./img/성화.jpg",
    "홍중":"https://pbs.twimg.com/media/EyNAgdxVcAAap9w?format=jpg&name=large",
    "민기":"https://pbs.twimg.com/media/E-IanGZVQAESemm?format=jpg&name=large",
    "여상":"https://pbs.twimg.com/media/E9VGsZJVoAgkLSs?format=jpg&name=large",
    "산":"https://pbs.twimg.com/media/E4PBz9LVUAEfSsm?format=jpg&name=large",
    "우영":"https://pbs.twimg.com/media/FCOFJfIVEAo7JNo?format=jpg&name=large",
    "윤호":"https://pbs.twimg.com/media/E9VE3CLVUAACy9S?format=jpg&name=large",
    "종호":"https://pbs.twimg.com/media/FB0v304WYAcOOrm?format=jpg&name=medium",
}
const txt_image = {
    "--선택하세요--" : "./img/default.jpg",
    "연준":"./img/yeonjun.jpg",
    "수빈":"https://pbs.twimg.com/media/E8bgpe-VoAosZrZ?format=jpg&name=medium",
    "범규":"https://pbs.twimg.com/media/E_Uz4GrUcAQ7IiI?format=jpg&name=large",
    "태현":"https://pbs.twimg.com/media/FA8Yw-bXoAYtLZS?format=jpg&name=4096x4096",
    "휴닝카이":"./img/hk.jpg",
}
const tbz_image = {
    "--선택하세요--" : "./img/default.jpg",
    "상연":"./img/상연.jpg",
    "제이콥":"./img/제이콥.jpg",
    "영훈":"./img/영훈.jpg",
    "현재":"./img/현재.jpg",
    "주연":"./img/주연.jpg",
    "케빈":"./img/케빈.jpg",
    "뉴":"./img/뉴.jpg",
    "큐":"./img/큐.jpg",
    "주학년":"./img/주학년.jpg",
    "선우":"./img/선우.jpg",
    "에릭":"./img/에릭.jpg",
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

function submitLine(e){
    e.preventDefault();

    //입력 데이터 받기
    const nickname = document.querySelector(".nickname input");
    const svt_m = document.querySelector(".svt_td select");
    const en_m = document.querySelector(".en_td select");
    const skz_m = document.querySelector(".skz_td select");
    const mx_m = document.querySelector(".mx_td select");
    const atz_m = document.querySelector(".atz_td select");
    const txt_m = document.querySelector(".txt_td select");
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

    const svt_td = document.createElement("td");
    svt_td.classList.add("svtLine");
    // svt_td.innerText = svt_m.value;
    svt_td.innerHTML = "<img src="+ svt_image[svt_m.value] + " />";

    const en_td = document.createElement("td");
    en_td.classList.add("enLine");
    // en_td.innerText = en_m.value;
    en_td.innerHTML = "<img src="+ en_image[en_m.value] + " />";

    const skz_td = document.createElement("td");
    skz_td.classList.add("skzLine");
    // skz_td.innerText = skz_m.value;
    skz_td.innerHTML = "<img src="+ skz_image[skz_m.value] + " />";

    const mx_td = document.createElement("td");
    mx_td.classList.add("mxLine");
    // mx_td.innerText = mx_m.value;
    mx_td.innerHTML = "<img src="+ mx_image[mx_m.value] + " />";

    const atz_td = document.createElement("td");
    atz_td.classList.add("atzLine");
    // atz_td.innerText = atz_m.value;
    atz_td.innerHTML = "<img src="+ atz_image[atz_m.value] + " />";

    const txt_td = document.createElement("td");
    txt_td.classList.add("txtLine");
    txt_td.innerHTML = "<img src="+ txt_image[txt_m.value] + " />";

    const tbz_td = document.createElement("td");
    tbz_td.classList.add("tbzLine");
    tbz_td.innerHTML = "<img src="+ tbz_image[tbz_m.value] + " />";

    newLine.appendChild(name_td);
    newLine.appendChild(svt_td);
    newLine.appendChild(en_td);
    newLine.appendChild(skz_td);
    newLine.appendChild(mx_td);
    newLine.appendChild(atz_td);
    newLine.appendChild(txt_td);
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
function svtLineRemove(e){
    e.preventDefault();

    selectRemoveBtn.classList.add("hidden");

    const svtlines = document.querySelectorAll(".svtLine");
    for(let x in svtlines){
        svtlines[x].classList.add("hidden");
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
function skzLineRemove(e){
    e.preventDefault();

    selectRemoveBtn.classList.add("hidden");

    const skzlines = document.querySelectorAll(".skzLine");
    for(let x in skzlines){
        skzlines[x].classList.add("hidden");
    };
    
}
function mxLineRemove(e){
    e.preventDefault();

    selectRemoveBtn.classList.add("hidden");

    const mxlines = document.querySelectorAll(".mxLine");
    for(let x in mxlines){
        mxlines[x].classList.add("hidden");
    };
    
}
function atzLineRemove(e){
    e.preventDefault();

    selectRemoveBtn.classList.add("hidden");

    const atzlines = document.querySelectorAll(".atzLine");
    for(let x in atzlines){
        atzlines[x].classList.add("hidden");
    };
    
}
function txtLineRemove(e){
    e.preventDefault();

    selectRemoveBtn.classList.add("hidden");

    const txtlines = document.querySelectorAll(`.txtLine`);
    for(let x in txtlines){
        txtlines[x].classList.add("hidden");
    };
    
}
function tbzLineRemove(e){
    e.preventDefault();

    selectRemoveBtn.classList.add("hidden");

    const tbzlines = document.querySelectorAll(`.tbzLine`);
    for(let x in tbzlines){
        tbzlines[x].classList.add("hidden");
    };
    
}


//실행부
titleBtn.addEventListener("click", handleTitle);
lineSubmitBtn.addEventListener("click", submitLine);
selectRemoveBtn.addEventListener("click", selectRemove);

svtRemove.addEventListener("click", svtLineRemove);
enRemove.addEventListener("click", enLineRemove);
skzRemove.addEventListener("click", skzLineRemove);
mxRemove.addEventListener("click", mxLineRemove);
atzRemove.addEventListener("click", atzLineRemove);
txtRemove.addEventListener("click", txtLineRemove);
tbzRemove.addEventListener("click", tbzLineRemove);
