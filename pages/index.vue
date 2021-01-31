<template>
    <div>
        <div id='header'>An image has the power to spark a conversation. Click below to start yours!</div>
        <div id='imageContainer'>
            <div v-for="(product, index) in products" :key="product._id">
                <img @click="strengthenImagesAndEnter()" @mouseenter="shimmer(index)" class="image" :id=index :src="product.photo">         
            </div>
        </div>
        <div id='footer'><em> Copyright 2021, Andrew James "Sandy" Lord, IV. No user data is  collected by CIRCLE-ELD. Use freely and <a target="_blank" rel="noopener noreferrer" href="mailto:sandylord.dev@gmail.com">please reach out with questions, comments and observations.</a> <br><span id='aboutPhotos'>All images used are in the public domain or have CC 3.0+ attribution.</span></em></div>
        <div>
            <img id="entry" src="/circleLOGO.png" alt="" srcset="">
        </div>
    </div>
    
</template>

<script>
export default {
    async asyncData({ $axios }) {
        try {
            let response = await $axios.$get("/api/products");
            console.log(response.products);
            return {
                products: response.products
            }
        } catch (err) {
            console.log(err)
        }
    },
    methods: {

        shimmer(index) {
            console.log("shimmering");
            let entry = document.getElementById("entry");
            if (entry.style.visibility != "visible") {
                let image = document.getElementById(index);
                image.style.animation = "shimmerImage 500ms ease-out 2 forwards";
            
                setTimeout(function(){ 
                    image.style.animation = "none";
                }, 1000);
            }
        },

        strengthenImagesAndEnter() {
            let entry = document.getElementById("entry");
            entry.style.visibility = "visible";
            entry.style.animation = "entryShow 2200ms ease-out forwards";
            
            let images = document.getElementsByClassName("image");
            let time = 20;
            for (let i = 0; i < 200; i++){
                let currentImage = images[i];
                currentImage.style.opacity = "0.4";

                let kf = "@keyframes shimmerAndEnterImage { 0% { opacity: 0.4; } 100% { opacity: 1;} }";
                document.styleSheets[0].insertRule(kf);

                currentImage.style.animation = "shimmerAndEnterImage " + (time + 1500) + "ms ease-out 1 forwards";
                time += 40;                

            }

            setTimeout(function() {
                window.open ('main','_self',false)
            }, 2400);
        },
    }
}
</script>

<style>

@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

body {
    background: lightcyan;
    overflow: hidden; 
    font-family: 'Montserrat', sans-serif;
}

@keyframes shimmerImage { 
    0% { 
        transform: translateX(0px) ; opacity: 0.4; 
    } 
    25% 
    {  
        transform: translateX(5px) ; opacity: 0.8; 
    } 
    50% 
    {  
        transform: translateX(0px) ;  opacity: 1; 
    } 
    75% 
    {
        transform: translateX(-5px) ; opacity: 0.8; 
    }   
    100% 
    { 
        transform: translateX(0px) ; opacity: 0.4;
    }
} 

#entry {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%); 
    border-radius: 10px;
    cursor: pointer;
    opacity: 0;
    visibility: hidden;
}

@keyframes entryShow {
    0% { opacity: 0;}
    100% {opacity: 1;}
}

#header {
    background-image: linear-gradient(darkgreen, lavender, lavender, lavender, lavender, lavender,lavender,lavender,lavender,lavender, salmon);
    border-bottom: 8px solid salmon;
    border-top: 10px solid darkgreen;
    width: 100%;
    background-color: lavender;
    padding: 10px 5px;
    text-align: center; 
    font-size: 1.6em;
    z-index: 1;
}

#footer {
    position: fixed;
    bottom: 0px; 
    left: 0px;
    font-size: 0.8em;
    width: 100%;
    background-color: lavender;
    padding: 10px 5px;
    z-index: 1; 
    outline: 2px solid white;
    border-top: 8px solid rgba(100, 80, 210, 1);
}

#imageContainer {
    display: grid;
    grid-template-columns: repeat(20, 1fr);
    grid-template-rows: repeat(12, 1fr);
}

#imageContainer > div > .image {
    padding: 0 2px;
    height: 100px;
    width: 100px;
    object-fit: cover;
    opacity: 0.4;
    cursor: pointer;
    border-radius: 5px;
}

</style>