const area = document.getElementById('area')
let move = 0
let result = ''
const contentWrapper = document.getElementById('content')
const modal = document.getElementById('modal-result-wrapper')
const overlay = document.getElementById('overlay')
const closeBtn = document.getElementById('btn-close')
const cross = '&#10060'
const zero = '&#11093'

area.addEventListener('click', e =>{
	if(e.target.className == 'box'){
		move % 2 === 0 ? e.target.innerHTML = cross : e.target.innerHTML = zero  //&#10060, &#11093
		move++
		check()
	}
})


const check = () => {
	const boxes = document.getElementsByClassName('box')
	const arr =[
		[0,1,2],
		[3,4,5],
		[6,7,8],
		[0,3,6],
		[1,4,7],
		[2,5,8],
		[0,4,8],
		[2,4,6]
	]
	for(i=0; i < arr.length; i++){
		if(boxes[arr[i][0]].innerHTML == '❌' && boxes[arr[i][1]].innerHTML == '❌' && boxes[arr[i][2]].innerHTML == '❌'
		){
			result = 'Cross'
			prepareResult(result)
		} else if(boxes[arr[i][0]].innerHTML == '⭕' && boxes[arr[i][1]].innerHTML == '⭕' && boxes[arr[i][2]].innerHTML == '⭕'
		){
			result = 'Zero'
			prepareResult(result)
		} else if(
							boxes[arr[0][0]].innerHTML !== '' &&
							boxes[arr[0][1]].innerHTML !== '' &&
							boxes[arr[0][2]].innerHTML !== '' &&
							boxes[arr[1][0]].innerHTML !== '' &&
							boxes[arr[1][1]].innerHTML !== '' &&
							boxes[arr[1][2]].innerHTML !== '' &&
							boxes[arr[2][0]].innerHTML !== '' &&
							boxes[arr[2][1]].innerHTML !== '' &&
							boxes[arr[2][2]].innerHTML !== ''){
			result = 'Friendship'
			prepareResult(result)
		}
	}
}

const prepareResult = winner => {
	contentWrapper.innerHTML = `${winner} win!`
	modal.style.display = 'block'
}

const closeModal = () => {
	modal.style.display = 'none'
	location.reload()
}

overlay.addEventListener('click', closeModal)
closeBtn.addEventListener('click', closeModal)