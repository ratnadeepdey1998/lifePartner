
var response_data={
	"result": true,
	"message": "Request Chat Widget Found",
	"data": {
	   
	  "form_factor": "Full",
	  "rendering_device": "Both",
	  "widget_position_desktop": "BottomRight",
	  "widget_position_mobile": "BottomRight",
	  "color_type": "Gradient",
	  "color_hex_from": "#12C665",
	  "color_hex_to": "#009446",
	  "button_text": "Chat with us",
	  "image_url": "None",
	  "prefilled_message": "Hi",
	  "bottom_spacing_desktop": 10,
	  "bottom_spacing_mobile": 10,
	  "side_spacing_desktop": 10,
	  "side_spacing_mobile": 10,
	  "greeting": "Welcome",
	  "introduction": "<p>We are here to help you! Chat with us on WhatsApp for any queries.</p>", 
	  "phone_number": "919230000222"
	}
  }
mtservice ={
   data:{},
   widgettoken:"",
   horizontal_position:"right",
   
	init: (env,token) => {
		console.log("This is an arrow function.");
		mtservice.widgettoken=token
		if(env =="test"){
			mtservice.fetch_test_data();
		}else{
			mtservice.fetchdata(token)
		}
	},
	fetch_test_data:()=>{
		mtservice.data= response_data["data"];
		if(mtservice.data["widget_position_desktop"] =="BottomLeft"){
			mtservice.horizontal_position="left"; 
		}
		mtservice.createbutton();	
		mtservice.creatediv();  
	},		
	fetchdata:(token)=>{
		console.log("fetchdata is called")
		let fetchRes = fetch("https://api.waliner.io/api/v2/chat_widget?token="+token);
		fetchRes.then(res =>{ 
			if (!res.ok) {
			  throw new Error(`HTTP error! Status: ${res.status}`);
			}
			return res.json()
		}).then(d => {
			mtservice.data= d["data"];
			if(mtservice.data["widget_position_desktop"] =="BottomLeft"){
				mtservice.horizontal_position="left"; 
			}
			mtservice.createbutton();	
			mtservice.creatediv();  
		}).catch(error => {
			console.error('Fetch error:', error);
		  }); 
		},
	createbutton:()=>{
		let buttondata = mtservice.widgettoken
		var button = document.createElement("button"); 
		button.id= "waliner_widget_button" 
        button.setAttribute("wa-data", "open");
		button.innerHTML = `<span><img src="https://waliner.io/assets/images/whatsapp.png" alt="waliner_whatsapp_logo"> ${mtservice.data["button_text"]}</span>`
		var styleElement = document.createElement("style"); 
		document.head.appendChild(styleElement);  
		styleElement.textContent = ` 
		.waliner_widget_openButton{
			font-size: 18px;
			color: rgb(255, 255, 255);
			background: linear-gradient(90deg, ${mtservice.data["color_hex_from"]} 0.85%, ${mtservice.data["color_hex_to"]} 100%);
			border-radius: 30px;
			padding: 15px 20px;
			outline: none;
			border: medium;
			cursor: pointer;
			display: flex;
			align-items: center;
			justify-content: center;
			width: 220px;
			height: 50px;
			position:fixed;
			bottom:${mtservice.data["bottom_spacing_desktop"]}px;
			${mtservice.horizontal_position}:${mtservice.data["side_spacing_desktop"]}px;
			z-index:99;
			}
			.waliner_widget_openButton span{ display: flex; align-items: center; justify-content: center;}
			.waliner_widget_openButton span img{ margin-right:7px; width:25px;}

			.waliner_widget_closeButton {
				font-size: 18px;
				color: rgb(255, 255, 255);
				background: linear-gradient(90deg, ${mtservice.data["color_hex_from"]} 0.85%, ${mtservice.data["color_hex_to"]} 100%);
				border-radius: 50%;
				padding: 15px 20px;
				outline: none;
				border: medium;
				cursor: pointer;
				display: flex;
				align-items: center;
				justify-content: center;
				width: 50px;
				height: 50px;
				position: fixed;
				bottom: ${mtservice.data["bottom_spacing_desktop"]}px;
				${mtservice.horizontal_position}: ${mtservice.data["side_spacing_desktop"]}px;
				z-index: 99;
				font-weight: bold;
			  }			
		`
		button.classList.add('waliner_widget_openButton')
		button.addEventListener("click", () => {
			//console.log("Button clicked!",buttondata);

			var button = document.getElementById("waliner_widget_button");
            var wa_button_data = button.getAttribute("wa-data"); 
            if(wa_button_data =="open"){
				addwidget()
				button.innerHTML="<span>X</span>"
				button.setAttribute("wa-data", "close");
				button.classList.remove('waliner_widget_openButton')
				button.classList.add('waliner_widget_closeButton')

			}else{
				button.innerHTML= `<span><img src="https://waliner.io/assets/images/whatsapp.png" alt="waliner_whatsapp_logo"> ${mtservice.data["button_text"]}</span>`
				button.setAttribute("wa-data", "open");
				button.classList.add('waliner_widget_openButton')
				button.classList.remove('waliner_widget_closeButton')
				var waliner_widget_div= document.getElementById("waliner_widget")
				waliner_widget_div.style["display"] = "None";
			}
			
			function addwidget() {
				var waliner_widget_div= document.getElementById("waliner_widget")
				waliner_widget_div.style["display"] = "block";
				const widgetHtml = `<div class="waliner_widget_cover">
									<h2>${mtservice.data["greeting"]}</h2>
									<p>${mtservice.data["introduction"]}</p>
									<a id="waliner_button" href="https://api.whatsapp.com/send?phone=${mtservice.data["phone_number"]}&amp;text=${mtservice.data["prefilled_message"]}" target="_blank"><img src="https://waliner.io/assets/images/whatsapp.png" alt="waliner_whatsapp_logo"> Start Chat</a>
									<p id="poweredBy">Powered By : waliner.io</p>
									</div>`;
									waliner_widget_div.innerHTML = widgetHtml;
			  }
		  });
		document.body.appendChild(button);	  
		},//
		creatediv:()=>{

var divElement = document.createElement("div");
divElement.id = "waliner_widget";
divElement.className = "custom-div";
// divElement.textContent = "This is a dynamically created div.";
divElement.style["display"] = "none";
document.body.appendChild(divElement);
var styleElement = document.createElement("style"); 
		document.head.appendChild(styleElement); 
		// Add CSS rules to the <style> element 
		styleElement.textContent = ` 
		#waliner_widget{width: 240px;
			background: #fff;
			padding: 15px;
			text-align: center;
			display: inline-block;
			position: fixed;
			${mtservice.horizontal_position}: 25px;
			bottom: ${mtservice.data["bottom_spacing_desktop"]+50+10}px;
			border-radius: 20px;
			border: 1px solid rgb(232, 232, 232);
			}
			.waliner_widget_cover { width: 100%; display: inline-block;}
			#waliner_widget h2{ font-size:24px; font-weight:bold; color:#000;}
			#waliner_widget p{ font-size:14px; font-weight:400; color:#000; white-space:break-spaces;}
			#waliner_widget a#waliner_button{
			border: 1px solid rgb(235, 235, 235);
			border-radius: 30px;
			color: rgb(255, 255, 255);
			width: auto;
			padding: 10px 24px;
			font-size: 16px;
			outline: none;
			cursor: pointer;
			display: flex;
			justify-content: center;
			align-items: center;
			text-decoration: none;
			margin-top: 10px;
			background: linear-gradient(rgb(18, 198, 101) 0%, rgb(0, 148, 70) 100%);
			}
			#waliner_widget a#waliner_button img{ width: 25px; margin-right: 7px;}
			#waliner_widget p#poweredBy {font-weight: 500; }
		`
		}
		


  } 
	
 
window.waservice =mtservice