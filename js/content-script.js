

window.onload=function(){
	let boxs=[]
	function $(name){
		return document.querySelectorAll(name)
	}
	setTimeout(()=>{
		boxs.push($("img"))
		boxs.push($("video"))
		boxs.push($(".ZVideoItem"))
		boxs.push($(".RichText-video"))
		boxs.push($(".VideoAnswerPlayer"))
		for(let item of boxs){
			for(let item1 of item){
				if (undefined != item1){
					item1.style.display="none"
				}
			}
		}
   },111)


}

window.onscroll=function(){
	let boxs=[]
	function $(name){
		return document.querySelectorAll(name)
	}
		boxs.push($("img"))
		boxs.push($(".ZVideoItem"))
		boxs.push($("video"))
		boxs.push($(".RichText-video"))
		boxs.push($(".VideoAnswerPlayer"))
		for(let item of boxs){
			for(let item1 of item){
				if (undefined != item1){
					item1.style.display="none"
				}
			}
		}


}

