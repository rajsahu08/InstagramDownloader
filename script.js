let search=document.querySelector('.search');
let download=document.querySelector('.download');
download.addEventListener('click',()=>{
    let url=search.value;
    let shortcode="";
    for(let i=31;i<42;i++){
        shortcode=shortcode+url[i];
    }
    let link = `https://instagram-bulk-scraper-latest.p.rapidapi.com/media_info_from_shortcode/${shortcode}`;
    console.log(shortcode);
    console.log(link);
    getVideo(link);
});
let getVideo=async (url)=>{
    const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '5bae2b20b3mshfa5923da98afd77p138521jsnce7c2c61fc0e',
		'x-rapidapi-host': 'instagram-bulk-scraper-latest.p.rapidapi.com'
	}
    };
    try {
	    const response = await fetch(url, options);
	    const result = await response.json();
        console.log(result);
	    const videoElement = document.getElementById('myVid');
        let videoSRC=result.data.video_url;
        videoElement.src = videoSRC;
        const msg=document.querySelector('.msg');
        if(videoSRC!=""){
        msg.style.display="block";
        }
    } catch (error) {
	    console.error(error);
    }
}