function openNav() {
    document.getElementById("mySidenavContainer").style.width = "100vw";
    document.querySelector(".sidenav").style.width = "300px";
}
function closeNav() {
    // document.getElementById("mySidenavContainer").style.display = "none";
    document.getElementById("mySidenavContainer").style.width = "0vw";
    document.querySelector(".sidenav").style.width = "0px";
}
let close = document.querySelector('#mySidenavContainer');
close.addEventListener('click', closeNav);

var games = [
    {
        id: 1,
        image: "images/6.png",
        name: 'Dotmocracy',
        category: "Акција",
        time: "5-30 минути",
    },
    {
        id: 2,
        image: "images/4.png",
        name: 'Project Mid-way Evaluation',
        category: "Акција",
        time: "30-60 минути",
    },
    {
        id: 3,
        image: "images/6 (1).png",
        name: 'Тhe 5 Whys',
        category: "Иновација",
        time: "30-60 минути",
    },
    {
        id: 4,
        image: "images/9.png",
        name: 'Future Trends',
        category: "Иновација",
        time: "60-120 минути",
    },
    {
        id: 5,
        image: "images/3.png",
        name: 'Story Building',
        category: "Иновација",
        time: "30-60 минути",
    },
    {
        id: 6,
        image: "images/3 (1).png",
        name: 'Тake a Stand',
        category: "Иновација",
        time: "60-120 минути",
    },
    {
        id: 7,
        image: "images/3 (2).png",
        name: 'IDOARRT Meeting Design',
        category: "Акција",
        time: "5-30 минути",
    },
    {
        id: 8,
        image: "images/04.png",
        name: '3 Action Steps',
        category: "Акција",
        time: "120-240 минути",
    },
    {
        id: 9,
        image: "images/5.png",
        name: 'Letter to Myself',
        category: "Иновација",
        time: "5-30 минути",
    },
    {
        id: 10,
        image: "images/01.png",
        name: 'Аctive Listening',
        category: "Лидерство",
        time: "60-120 минути",
    },
    {
        id: 11,
        image: "images/4 (1).png",
        name: 'Feedback: I appreciate',
        category: "Лидерство",
        time: "60-120 минути",
    },
    {
        id: 12,
        image: "images/11.png",
        name: 'Explore your values',
        category: "Лидерство",
        time: "60-120 минути",
    },
    {
        id: 13,
        image: "images/06.png",
        name: 'Reflection Individual',
        category: "Лидерство",
        time: "30-60 минути",
    },
    {
        id: 14,
        image: "images/10.png",
        name: 'Back-turned Feedback',
        category: "Лидерство",
        time: "60-120 минути",
    },
    {
        id: 15,
        image: "images/2.png",
        name: 'Conflict Responses',
        category: "Тим",
        time: "60-120 минути",
    },
    {
        id: 16,
        image: "images/6 (2).png",
        name: 'Myers-Briggs Team Reflection',
        category: "Тим",
        time: "60-120 минути",
    },
    {
        id: 17,
        image: "images/3 (3).png",
        name: 'Personal Presentations',
        category: "Тим",
        time: "60-240 минути",
    },
    {
        id: 18,
        image: "images/4 (2).png",
        name: 'Circles of Influence',
        category: "Тим",
        time: "30-120 минути",
    },
 
 ];
 
let content = document.getElementById('content');
games.forEach(function (element) {
    content.innerHTML += `<div class="col-md-4 col-sm-6 col-xs-12">
    <div class="card marginBottom">
        <a href="` + element.id + `.html""target="_blank" class="decoNone" data-toggle="popover"
        data-trigger="hover">
            <div class="cardImg">
                <img src="` + element.image + `" alt="" class="img img-responsive" style: width="75%">
            </div>
            <div class="gameIn">
                <div class="flexCard">
                    <div class="inLeft  text-left">
                        <h4><b>` + element.name + `</b></h4>
                        <p>Категорија: <span class="blueText">` + element.category + `</span></p>
                    </div>
                    <div class="inRight">
                        <img src="` + element.image + `" alt="" class="img img-responsive imgCircle">
                    </div>
                </div>
                <h4 class="text-left"><i class="far fa-clock"></i>&nbsp; <b>Времетраење</b></h4>
                <p class="text-left time">` + element.time + `</p>           
            </div>
        </a>
    </div>
</div>`;
 });