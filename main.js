// GO!
var navMenuState = {
	showing: false
}

var KEY_CODES = {
  spaceBar: 32,
  enterKey: 13,
  upArrow: 38,
  rightArrow: 39,
  downArrow: 40,
  leftArrow: 37
}

var navButtonNode = document.querySelector("#click-me")

//console.log(navButtonNode)

/*var alertFunc = function(){
  alert('i like the way you click')
}



navButtonNode.addEventListener('click',alertFunc)
*/
var navMenuNode = document.querySelector(".nav-menu")

//console.log(navMenuNode)



var toggleNavMenu = function () {
	if(navMenuState.showing === false) {
		navMenuNode.style.opacity = 1
		navMenuState.showing = true
	} else {

		navMenuNode.style .opacity = 0
		navMenuState.showing = false
	}


}

navButtonNode.addEventListener('click',toggleNavMenu)




var guestListUl = document.querySelector(".guest-list")

//console.log(typeof guestListUl)

var inputNode = document.querySelector('input[type="text"]')

//console.log(inputNode)

var liNodeColorGrey = {
	background: true
}

var handleItemAdd = function (eventObject) {
	//console.log(eventObject.target)
	if (eventObject.keyCode === KEY_CODES.enterKey) {
		var inputNode = eventObject.target
		var usrText = inputNode.value
		var liNode = document.createElement("li")
		liNode.textContent = usrText
		liNode.style.background = ""
		guestListUl.appendChild(liNode)
		if (liNodeColorGrey.background) {
			liNode.style.background = "7f8c8d"
			liNodeColorGrey.background = false
		} else {

			liNodeColorGrey.background = true
			liNode.style.background = "tomato"
		}

		
		inputNode.value = ' '

	}

}

inputNode.addEventListener('keydown',handleItemAdd)









