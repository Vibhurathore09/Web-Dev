setTimeout(()=>{
    if(db){
        //videos retrieval
        //images retrieval

        let videoTransaction = db.transaction("video","readonly");
        let videoStore = videoTransaction.objectStore("video");
        let videoRequest = videoStore.getAll(); //Event Driven
        videoRequest.onsuccess = (e) =>{
            let videoResult = videoRequest.result;
            let galleryCont = document.querySelector(".gallery-cont");
            videoResult.forEach((videoObj) => {
                let mediaElem = document.createElement("div");
                mediaElem.setAttribute("class" , "media-cont");
                mediaElem.setAttribute("id" , videoObj.id);

                let url = URL.createObjectURL(videoObj.blobData);

                mediaElem.innerHTML = `
                <div class="media">
                <video autoplay loop src=${url}></video>
                </div>
                <div class="download action-btn">Download</div>
                <div class="delete action-btn">Delete</div>
                `;
                galleryCont.appendChild(mediaElem);

                //Listeners
                let deleteBtn = mediaElem.querySelector(".delete");
                deleteBtn.addEventListener("click" , deleteListener)
                let downloadBtn = mediaElem.querySelector(".download");
                downloadBtn.addEventListener("click" , downloadListener);
                
            });
        }




        //images retrieval

        let imageTransaction = db.transaction("image","readonly");
        let imageStore = imageTransaction.objectStore("image");
        let imageRequest = imageStore.getAll(); //Event Driven
        imageRequest.onsuccess = (e) =>{
            let imageResult = imageRequest.result;
            let galleryCont = document.querySelector(".gallery-cont");
            imageResult.forEach((imageObj) => {
                let mediaElem = document.createElement("div");
                mediaElem.setAttribute("class" , "media-cont");
                mediaElem.setAttribute("id" , imageObj.id);

                let url = imageObj.url;

                mediaElem.innerHTML = `
                <div class="media">
                <image src=${url}></image>
                </div>
                <div class="download action-btn">Download</div>
                <div class="delete action-btn">Delete</div>
                `;
                galleryCont.appendChild(mediaElem);

                //Listeners
                let deleteBtn = mediaElem.querySelector(".delete");
                deleteBtn.addEventListener("click" , deleteListener)
                let downloadBtn = mediaElem.querySelector(".download");
                downloadBtn.addEventListener("click" , downloadListener);

                
            });
        }
    }
},100)

//UI remove, DB remove
function deleteListener(e){
    let id = e.target.parentElement.getAttribute("id");
    let type = id.slice(0,3);
    if(type === "vid"){
        let videoTransaction = db.transaction("video","readwrite");
        let videoStore = videoTransaction.objectStore("video");
        videoStore.delete(id);
    }else if(type === "img"){
        let imageTransaction = db.transaction("image","readwrite");
        let imageStore = imageTransaction.objectStore("image");
        imageStore.delete(id);
    }
    //UI remove
    e.target.parentElement.remove();
}

//UI remove, DB remove
function downloadListener(e){
    let id = e.target.parentElement.getAttribute("id");
    let type = id.slice(0,3);
    if(type === "vid"){
        let videoTransaction = db.transaction("video","readwrite");
        let videoStore = videoTransaction.objectStore("video");
        let videoRequest = videoStore.get(id);
        videoRequest.onsuccess = (e) => {
            let videoResult = videoRequest.result;
            
            let videoURL = URL.createObjectURL(videoResult.blobData);

            let a = document.createElement("a");
            a.href = videoURL;
            a.download = "stream.mp4";
            a.click();
        }
    }else if(type === "img"){
        let imageTransaction = db.transaction("image","readwrite");
        let imageStore = imageTransaction.objectStore("image");
        let imageRequest = imageStore.get(id);
        imageRequest.onsuccess = (e) =>{
            let imageResult = imageRequest.result;

            let a = document.createElement("a");
            a.href = imageResult.url;
            a.download = "image.jpg";
            a.click();
        }
    }
}
