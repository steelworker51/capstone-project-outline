if (window.location.pathname.includes("fitness-meme.html")) {
    console.log("This is the Fitness-Meme page!"); 
// makes sure that the page contains the fitness-meme.html path

    document.getElementById("downloadBtn").style.display = "none";
    // hides the download button until the meme is genterated
    function generateMeme() { 
        let fileInput = document.getElementById("imageInput");
        let topText = document.getElementById("topText").value.toUpperCase();
        let bottomText = document.getElementById("bottomText").value.toUpperCase();
        let canvas = document.getElementById("memeCanvas");
        let ctx = canvas.getContext("2d");
    
        if (fileInput.files.length === 0) {
            alert("Please upload an image first!");
            return;
        }
        // checks to see if an image was uploaded function return to prevent further execution

        let img = new Image();
        img.src = URL.createObjectURL(fileInput.files[0]);
        //  an image file is created and it's drawn onto the canvas
        img.onload = function () {
            canvas.width = img.width;
            canvas.height = img.height;
            // ensures that the image fits the canvas
    
            ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
            // starts at the top left h and corner, img is scaled to the canvas
            
    
            // Define text styles
            ctx.font = `${canvas.width / 10}px Impact`;
            // font is 1/10 of canbas width and in Impact font
            ctx.fillStyle = "white";
            //text color 
            ctx.strokeStyle = "black";
            //outline color of text
            ctx.lineWidth = canvas.width / 100;
            //thickness is 1/100 of the canvas width
            ctx.textAlign = "center";
    
            // Draw top text
            ctx.fillText(topText, canvas.width / 2, canvas.height / 8);
            ctx.strokeText(topText, canvas.width / 2, canvas.height / 8);
            // centered horizontally, 1/8 of the canvas height at the top near the top of the image
    
            // Draw bottom text
            ctx.fillText(bottomText, canvas.width / 2, canvas.height - canvas.height / 10);
            ctx.strokeText(bottomText, canvas.width / 2, canvas.height - canvas.height / 10);
            // centered horizontally, 1/10 from bottom edge of the canvas
        }

              // Show download button
              document.getElementById("downloadBtn").style.display = "block";
            };
            // After the meme is generated the "Download" button is made visible by setting its display style to block.
        }
        
        // Download the generated meme
        document.getElementById("downloadBtn").addEventListener("click", function () {
            let canvas = document.getElementById("memeCanvas");
            let link = document.createElement("a");
            link.download = "meme.png";
            link.href = canvas.toDataURL("image/png");
            link.click();
        });
    