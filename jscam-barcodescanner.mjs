const txt_input = document.getElementById('txt_input')
const btn_ok = document.getElementById('btn_ok')


export async function init() {
	window.$camScanner = new Html5QrcodeScanner(
		"obj_CamScanner", { 
			fps: 10, 
			qrbox: {width: 250, height: 100}, 
			aspectRatio: 0.75 // 4:3
		}
	);

	window.$camScanner.render((decodedText, decodedResult) => {
		camScanner_scan(decodedText, decodedResult)
	});

	btn_ok.addEventListener('click', (evt)=>{
		btn_ok_click(evt)
	})
}


async function camScanner_scan(decodedText, decodedResult) {
	txt_input.value = decodedText;
	window.$camScanner.pause(true);
}

async function btn_ok_click(evt) {
	var barcode = txt_input.value;

	window.$camScanner.resume();

	// clear data
	txt_input.value = '';
}

