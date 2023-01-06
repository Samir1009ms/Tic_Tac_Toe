const sira = document.querySelector(".user")
const qutu = document.querySelectorAll(".game-block")
const sehv = document.querySelector(".sehv")
const newbtn = document.querySelector(".new")
const finis = document.querySelector(".finis")
const finis2 = document.querySelector(".finis2")
const baslabtn =document.querySelector(".basla")

baslabtn.addEventListener("click",()=>{
    start()
})


function start() {
    let player = "X"
    qalib = false
    sira.textContent = `${player} novbesidir`
    newbtn.addEventListener("click", () => {
        // qutu.forEach(block2 => block2.replaceChildren())
        // start()
        // player="X"
        location.reload()
    })
    qutu.forEach(block => {
        block.addEventListener("click", () => {
            if (block.textContent === "") {
                if (player === "X") {
                    block.textContent = player
                    player = "O"
                    sira.textContent = `${player} novbesidir`
                } else {
                    block.textContent = player
                    player = "X"
                    sira.textContent = `${player} novbesidir`
                }
            } else {
                sehv.textContent = "bos xanaya basin"
                setTimeout(() => {
                    sehv.textContent = ""
                }, 2000)
            }
            (() => {
                // console.log("sss");
                let sira1 = qutu[0].textContent == qutu[1].textContent && qutu[0].textContent == qutu[2].textContent && qutu[0].textContent !== ""
                let sira2 = qutu[3].textContent == qutu[4].textContent && qutu[3].textContent == qutu[5].textContent && qutu[3].textContent !== ""
                let sira3 = qutu[6].textContent == qutu[7].textContent && qutu[6].textContent == qutu[8].textContent && qutu[6].textContent !== ""
                // console.log(qutu[0].textContent)
                if (sira1 || sira2 || sira3) {
                    qalib = true
                    // console.log("sss");
                }

                if (sira1 == true) {
                    qazanan = qutu[0].textContent
                    finis2.classList.add("game-over")
                    finis.setAttribute("style", "left:7px;transform:rotate(0deg);top:15%")
                    sira.textContent = `oyunu qazanan,${qazanan}`
                    qutu.forEach(block2 => block2.style.pointerEvents = "none")
                }
                if (sira2 == true) {
                    qazanan = qutu[3].textContent
                    fini2s.classList.add("game-over")
                    finis.setAttribute("style", "left:7px;transform:rotate(0deg)")
                    sira.textContent = `oyunu qazanan,${qazanan}`
                    qutu.forEach(block2 => block2.style.pointerEvents = "none")
                }
                if (sira3 == true) {
                    qazanan = qutu[6].textContent
                    finis2.classList.add("game-over")
                    finis.setAttribute("style", "left:7px;transform:rotate(0deg);top:83%")
                    sira.textContent = `oyunu qazanan,${qazanan}`
                    qutu.forEach(block2 => block2.style.pointerEvents = "none")

                }
            })();
            (() => {
                // console.log("sss");
                let setir1 = qutu[0].textContent == qutu[3].textContent && qutu[0].textContent == qutu[6].textContent && qutu[0].textContent !== ""
                let setir2 = qutu[1].textContent == qutu[4].textContent && qutu[1].textContent == qutu[7].textContent && qutu[1].textContent !== ""
                let setir3 = qutu[2].textContent == qutu[5].textContent && qutu[2].textContent == qutu[8].textContent && qutu[2].textContent !== ""
                // console.log(qutu[0].textContent)
                if (setir1 || setir2 || setir3) {
                    qalib = true
                    // console.log("sss");
                }

                if (setir1 == true) {
                    qazanan = qutu[0].textContent
                    sira.textContent = `oyunu qazanan,${qazanan}`
                    finis2.classList.add("game-over")
                    finis.setAttribute("style", "left:-140px;top:50%")
                    qutu.forEach(block2 => block2.style.pointerEvents = "none")
                }
                if (setir2 == true) {
                    qazanan = qutu[1].textContent
                    finis2.classList.add("game-over")
                    finis.setAttribute("style", "left:5px;top:50%")
                    sira.textContent = `oyunu qazanan,${qazanan}`
                    qutu.forEach(block2 => block2.style.pointerEvents = "none")
                }
                if (setir3 == true) {
                    qazanan = qutu[2].textContent
                    sira.textContent = `oyunu qazanan,${qazanan}`
                    finis2.classList.add("game-over")
                    finis.setAttribute("style", "right:140px;top:50%")
                    qutu.forEach(block2 => block2.style.pointerEvents = "none")

                }
            })();
            (() => {
                // console.log("sss");
                let capraz1 = qutu[0].textContent == qutu[4].textContent && qutu[0].textContent == qutu[8].textContent && qutu[0].textContent !== ""
                let capraz2 = qutu[2].textContent == qutu[4].textContent && qutu[2].textContent == qutu[6].textContent && qutu[2].textContent !== ""
                // console.log(qutu[0].textContent)
                if (capraz1 || capraz2) {
                    qalib = true
                    // console.log("sss");
                }

                if (capraz1 == true) {
                    qazanan = qutu[0].textContent
                    sira.textContent = `oyunu qazanan,${qazanan}`
                    finis2.classList.add("game-over2")
                    finis.setAttribute("style", "left:-44px;transform:rotate(45deg);top:;width:534px")
                    qutu.forEach(block2 => block2.style.pointerEvents = "none")
                }
                if (capraz2 == true) {
                    qazanan = qutu[2].textContent
                    finis2.classList.add("game-over2")
                    finis.setAttribute("style", "left:-44px;transform:rotate(135deg);top:;width:534px")
                    sira.textContent = `oyunu qazanan,${qazanan}`
                    qutu.forEach(block2 => block2.style.pointerEvents = "none")
                }
            })();
        })
    })
}
// start()





