var now = new Date();

function createtime1() {
    var grt = new Date("04/15/2023 00:00:00"); //此处修改你的建站时间或者网站上线时间
    now.setTime(now.getTime() + 250);
    var days = (now - grt) / 1000 / 60 / 60 / 24;
    var dnum = Math.floor(days);

    var ascll = [
        `欢迎来到Pzai🐽のBlog!`,
        `Future is now 🍭🍭🍭`,
        `
        
██████╗ ███████╗ █████╗ ██╗
██╔══██╗╚══███╔╝██╔══██╗██║
██████╔╝  ███╔╝ ███████║██║
██╔═══╝  ███╔╝  ██╔══██║██║
██║     ███████╗██║  ██║██║
╚═╝     ╚══════╝╚═╝  ╚═╝╚═╝
                           
                                                       
`,
        "小站已经苟活",
        dnum,
        "天啦!",
        "©2023 By DreamCollector",
    ];

    setTimeout(
        console.log.bind(
            console,
            `\n%c WELCOME %c ${ascll[0]} %c ${ascll[1]} %c ${ascll[2]} %c${ascll[3]}%c ${ascll[4]}%c ${ascll[5]}\n\n%c ${ascll[6]}\n`,
            "color:white; background-color:#23c682",
            "color:#49B1F5",
            "",
            "color:#49B1F5",
            "color:#49B1F5",
            "",
            "color:#49B1F5",
            ""
        )
    );
}

createtime1();

function createtime2() {

    setTimeout(console.warn.bind(console, "%c S014-578 %c 系统监测到你已打开控制台,正处于监控中", "color:white; background-color:#d9534f", ""));

}

createtime2();

// 重写console方法
console.log = function () {
};
console.error = function () {
};
console.warn = function () {
};