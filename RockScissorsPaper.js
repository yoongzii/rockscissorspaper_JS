
const startExplan = document.querySelector('.start_btns .explan')
const startModal = document.querySelector('#start .modal')
const modalClose = document.querySelector('#start .modal .close')
const startPage = document.querySelector('#start')
const startPlay = document.querySelector('#start .play')
const rockWrapPage = document.querySelector('#rock_wrap')
const randomImg = document.querySelector('#rock_wrap .computer_box .computer_result')
const resultPage = document.querySelector('#result')
const resultTextItem = document.querySelector('.result_text strong')
const resultReturn = document.querySelector('#result .pageMove .return')
const userResult = document.querySelector('.resultBox .user_resultImg')
const computerResult = document.querySelector('.resultBox .computer_resultImg')
const buttons = document.querySelectorAll('.buttons button')

startExplan.addEventListener('click', function(){
    startModal.style.display="flex"
})
modalClose.addEventListener('click',function(){
    startModal.style.display="none"
})

//start 첫화면에서 클릭하면 화면이 바뀌면서 게임이 시작됨
startPlay.addEventListener('click',function(){
    startPage.style.display = 'none'
    rockWrapPage.style.display = 'block'
})

//  rock,scissors,paper
const result = ['rock', 'scissors', 'paper']
const computerImg = ['./img/rock.png', './img/scissors.png', './img/paper.png']

//setInterval() 정한 시간 간격을 두고 반복해서 실행하고 싶을 때 사용하기위해서

let loopSetInterval;
function randomStart(){
    loopSetInterval = setInterval (function(){
        const imgMixIndex = computerImg[Math.floor(Math.random() * 3)]
        randomImg.src = imgMixIndex
    },40);
}
randomStart()

let imgMixIndex = ''
let computerChoice = ''

const gameResult = function (userChoice, computerChoice, buttonImg) {
    if(userChoice === computerChoice){
        resultTextItem.innerText = '무승부입니다.'
    } else{
        switch(userChoice + computerChoice){
            case 'rockscissor':
            case 'scissorpaper':
            case 'paperrock':
                resultTextItem.innerText = '축하해요~ 이겼어요!!!'

            break;
            case 'scissorrock':
            case 'paperscissor':
            case 'rockpaper':
                resultTextItem.innerText = '안타깝네요ㅠㅠ 다시 도전하시겠어요?'
            break;
        }

    }
    computerResult.src = `./img/${computerChoice}.png`;
    userResult.src = buttonImg;
}


buttons.forEach(button => {
    button.addEventListener('click',function() {
        const userChoice = button.value
        const buttonImg = button.querySelector('img').src

        //사용자가 버튼을 클릭했을때, 컴퓨터가 랜덤으로 나오도록 지정
        //3을 곱한거는 최대값을 만들기 위해서 floor()는 소수점 버리고, 정수로 만들기
        const computerIndex = Math.floor(Math.random() * 3)
        const computerChoice = result[computerIndex]
        gameResult(userChoice, computerChoice, buttonImg)

        // console.log(`컴퓨터${computerChoice} ,사용자:${userChoice}`)

        rockWrapPage.style.display = 'none'
        resultPage.style.display = 'block'

        clearInterval(loopSetInterval)
    })

})


resultReturn.addEventListener('click', function(){
    resultPage.style.display = 'none'
    startPage.style.display = 'block'

    resultTextItem.innerText = '';
    userResult.src = ''; // 사용자의 이미지 초기화
    computerResult.src = ''; // 컴퓨터의 이미지 초기화


    randomStart()
})

