<template>
    <div>
        <div id='header'>
            <img id='logo' src="/circleLOGO.png" alt="" @click="openSelector()">
            <p id="themeName">Extension 5: Create Sentences<span id='thisThemeName'> {{ this.theme }}, Unit {{ this.unit }} </span></p>
        </div>
        
        <div id='extensionArea'>
            <!-- this container is to be hidden completely and used only to hold data -->
            <div id='nonViewDataContainer'>
                <p id="currentVocabInfo"></p>
                <p id="currentABSentenceInfo"></p>
                <p id="currentBCSentenceInfo"></p>
                <p id="currentABQuestionInfo"></p>
                <p id="currentBCQuestionInfo"></p>
                <p id="currentABQuestionDomain"></p>
                <p id="currentBCQuestionDomain"></p>
                <p id='currentIndex'></p>
            </div>

            <div id="containerForAbsolutePositionedItems">
                <!-- <span id='greenBlock1' class='greenBlock'></span>
                <span id='greenBlock2' class='greenBlock'></span>
                <span id='greenBlock3' class='greenBlock'></span>
                <span id='greenBlock4' class='greenBlock'></span> -->
            </div>

            <div id="textContainer">
                <span id='currentSelection'>Current Selection</span>
                <span id='currentTextTitle'>Write your own sentence. Include this word, then listen to your creation.</span>
                <span id="currentText">Click an image below to begin.</span>
                <!-- <input class="practiceInputEven" id="practiceInput1" type="text"  @keyup="checkIfCorrect()" placeholder="..."> -->
                <textarea class="practiceInputEven" id="practiceInput1" type="text" placeholder="Your sentence...">
                </textarea>
                <!-- <input class="practiceInputOdd" id="practiceInput2" type="text" @keyup="checkIfCorrect()" placeholder="">
                <input class="practiceInputEven" id="practiceInput3" type="text" @keyup="checkIfCorrect()" placeholder="">
                <input class="practiceInputOdd" id="practiceInput4" type="text" @keyup="checkIfCorrect()" placeholder=""> -->

                <span id="playCurrentTextButton" @click="readTextOutLoud()">Listen</span>
                
            </div>

            <div id='bigImageContainer'>
                <img id="bigImage" src="circleLOGO.png" alt="">
            </div>

        </div>

        <div id='newImagesContainerDisplay'>
            <div id='imagePackage1' class='imagePackage'>
                <img id='img1' class='shownImage' src="" alt="" @click="makeImageAndTextAppear(1)">
                <span id='vocab1' class='shownVocab'>Vocab1</span>
                <span id="abSentence1" class="abSentenceHolder"></span>
                <span id="bcSentence1" class="bcSentenceHolder"></span>
                <span id="abQuestion1" class="abQuestionHolder"></span>
                <span id="bcQuestion1" class="bcQuestionHolder"></span>
                <span id="abQuestionDomain1" class="abQuestionDomainHolder"></span>
                <span id="bcQuestionDomain1" class="bcQuestionDomainHolder"></span>
                <span id="index1" class="shownIndex"></span>
            </div>
            <div id='imagePackage2' class='imagePackage'>
                <img id='img2' class='shownImage' src="" alt="" @click="makeImageAndTextAppear(2)">
                <span id='vocab2' class='shownVocab'>Vocab2</span>
                <span id="abSentence2" class="abSentenceHolder"></span>
                <span id="bcSentence2" class="bcSentenceHolder"></span>
                <span id="abQuestion2" class="abQuestionHolder"></span>
                <span id="bcQuestion2" class="bcQuestionHolder"></span>
                <span id="abQuestionDomain2" class="abQuestionDomainHolder"></span>
                <span id="bcQuestionDomain2" class="bcQuestionDomainHolder"></span>
                <span id="index2" class="shownIndex"></span>
            </div>
            <div id='imagePackage3' class='imagePackage'>
                <img id='img3' class='shownImage' src="" alt="" @click="makeImageAndTextAppear(3)">
                <span id='vocab3' class='shownVocab'>Vocab3</span>
                <span id="abSentence3" class="abSentenceHolder"></span>
                <span id="bcSentence3" class="bcSentenceHolder"></span>
                <span id="abQuestion3" class="abQuestionHolder"></span>
                <span id="bcQuestion3" class="bcQuestionHolder"></span>
                <span id="abQuestionDomain3" class="abQuestionDomainHolder"></span>
                <span id="bcQuestionDomain3" class="bcQuestionDomainHolder"></span>
                <span id="index3" class="shownIndex"></span>
            </div>
            <div id='imagePackage4' class='imagePackage'>
                <img id='img4' class='shownImage' src="" alt="" @click="makeImageAndTextAppear(4)">
                <span id='vocab4' class='shownVocab'>Vocab4</span>
                <span id="abSentence4" class="abSentenceHolder"></span>
                <span id="bcSentence4" class="bcSentenceHolder"></span>
                <span id="abQuestion4" class="abQuestionHolder"></span>
                <span id="bcQuestion4" class="bcQuestionHolder"></span>
                <span id="abQuestionDomain4" class="abQuestionDomainHolder"></span>
                <span id="bcQuestionDomain4" class="bcQuestionDomainHolder"></span>
                <span id="index4" class="shownIndex"></span>
            </div>
            <div id='imagePackage5' class='imagePackage'>
                <img id='img5' class='shownImage' src="" alt="" @click="makeImageAndTextAppear(5)">
                <span id='vocab5' class='shownVocab'>Vocab5</span>
                <span id="abSentence5" class="abSentenceHolder"></span>
                <span id="bcSentence5" class="bcSentenceHolder"></span>
                <span id="abQuestion5" class="abQuestionHolder"></span>
                <span id="bcQuestion5" class="bcQuestionHolder"></span>
                <span id="abQuestionDomain5" class="abQuestionDomainHolder"></span>
                <span id="bcQuestionDomain5" class="bcQuestionDomainHolder"></span>
                <span id="index5" class="shownIndex"></span>
            </div>
            <div id='imagePackage6' class='imagePackage'>
                <img id='img6' class='shownImage' src="" alt="" @click="makeImageAndTextAppear(6)">
                <span id='vocab6' class='shownVocab'>Vocab6</span>
                <span id="abSentence6" class="abSentenceHolder"></span>
                <span id="bcSentence6" class="bcSentenceHolder"></span>
                <span id="abQuestion6" class="abQuestionHolder"></span>
                <span id="bcQuestion6" class="bcQuestionHolder"></span>
                <span id="abQuestionDomain6" class="abQuestionDomainHolder"></span>
                <span id="bcQuestionDomain6" class="bcQuestionDomainHolder"></span>
                <span id="index6" class="shownIndex"></span>
            </div>
            <div id='imagePackage7' class='imagePackage'>
                <img id='img7' class='shownImage' src="" alt="" @click="makeImageAndTextAppear(7)">
                <span id='vocab7' class='shownVocab'>Vocab7</span>
                <span id="abSentence7" class="abSentenceHolder"></span>
                <span id="bcSentence7" class="bcSentenceHolder"></span>
                <span id="abQuestion7" class="abQuestionHolder"></span>
                <span id="bcQuestion7" class="bcQuestionHolder"></span>
                <span id="abQuestionDomain7" class="abQuestionDomainHolder"></span>
                <span id="bcQuestionDomain7" class="bcQuestionDomainHolder"></span>
                <span id="index7" class="shownIndex"></span>
            </div>
            <div id='imagePackage8' class='imagePackage'>
                <img id='img8' class='shownImage' src="" alt="" @click="makeImageAndTextAppear(8)">
                <span id='vocab8' class='shownVocab'>Vocab8</span>
                <span id="abSentence8" class="abSentenceHolder"></span>
                <span id="bcSentence8" class="bcSentenceHolder"></span>
                <span id="abQuestion8" class="abQuestionHolder"></span>
                <span id="bcQuestion8" class="bcQuestionHolder"></span>
                <span id="abQuestionDomain8" class="abQuestionDomainHolder"></span>
                <span id="bcQuestionDomain8" class="bcQuestionDomainHolder"></span>
                <span id="index8" class="shownIndex"></span>
            </div>
            <div id='imagePackage9' class='imagePackage'>
                <img id='img9' class='shownImage' src="" alt="" @click="makeImageAndTextAppear(9)">
                <span id='vocab9' class='shownVocab'>Vocab9</span>
                <span id="abSentence9" class="abSentenceHolder"></span>
                <span id="bcSentence9" class="bcSentenceHolder"></span>
                <span id="abQuestion9" class="abQuestionHolder"></span>
                <span id="bcQuestion9" class="bcQuestionHolder"></span>
                <span id="abQuestionDomain9" class="abQuestionDomainHolder"></span>
                <span id="bcQuestionDomain9" class="bcQuestionDomainHolder"></span>
                <span id="index9" class="shownIndex"></span>
            </div>
            <div id='imagePackage10' class='imagePackage'>
                <img id='img10' class='shownImage' src="" alt="" @click="makeImageAndTextAppear(10)">
                <span id='vocab10' class='shownVocab'>Vocab10</span>
                <span id="abSentence10" class="abSentenceHolder"></span>
                <span id="bcSentence10" class="bcSentenceHolder"></span>
                <span id="abQuestion10" class="abQuestionHolder"></span>
                <span id="bcQuestion10" class="bcQuestionHolder"></span>
                <span id="abQuestionDomain10" class="abQuestionDomainHolder"></span>
                <span id="bcQuestionDomain10" class="bcQuestionDomainHolder"></span>
                <span id="index10" class="shownIndex"></span>
            </div>
        </div>
        <div id='imagesContainer'>
            <div v-for="(product, index) in products" :key="product._id">
                <div v-if="product.theme == theme">
                    <div v-if="product.unit == unit">
                        <div class="imageAndWordContainer">
                            <img class='smallImage' :id=index :src="product.photo" alt="">
                            <br>
                            <span class='smallImageTitle'>{{ product.vocabulary }}</span>
                            <span class='smallImageABSentence'>{{ product.abSentence }}</span>
                            <span class='smallImageBCSentence'>{{ product.bcSentence }}</span>
                            <span class='smallImageABQuestion'>{{ product.abQuestion }}</span>
                            <span class='smallImageBCQuestion'>{{ product.bcQuestion }}</span>
                            <span class='smallImageABQuestionDomain'>{{ product.abQuestionDomain }}</span>
                            <span class='smallImageBCQuestionDomain'>{{ product.bcQuestionDomain }}</span>
                            <span class='smallImageIndex'>{{ index }}</span>
                        </div>
                    </div>
                </div>  
            </div>
        </div>
        <div id='footer'><em> Copyright 2021, Andrew James "Sandy" Lord, IV. No user data is collected by CIRCLE-ELD. Use freely and <a target="_blank" rel="noopener noreferrer" href="mailto:sandylord.dev@gmail.com">please reach out with questions, comments and observations.</a> <br><span id='aboutPhotos'>All images used are in the public domain or have CC 3.0+ attribution.</span></em>
        </div>
    </div>
</template>

<script>

import $ from 'jquery';

export default {
    async asyncData({ $axios }) {
        try {
            let response = await $axios.$get("/api/products");
            // console.log(response.products);
            return {
                products: response.products
            }
        } catch (err) {
        }
    },
    data() {
        let params = this.$route.query;
        let theme = params.theme;
        let unit = params.unit;

        const titleee = theme.charAt(0).toUpperCase() + theme.slice(1) + " " + unit;
        return {
            unit: unit,
            theme: theme,
            title: titleee,
        }
    },
    created () {
        const title = this.title;
        if (title) {
            try {
                document.title = title
            } catch {
                // console.log("document mia")
            }
        }
    },
    mounted () {
        let receivedIndices = document.getElementsByClassName("smallImageIndex");
        let shownIndices = document.getElementsByClassName("shownIndex");
        
        let receivedVocabularies = document.getElementsByClassName("smallImageTitle");
        let shownVocabularies = document.getElementsByClassName("shownVocab");

        let receivedSources = document.getElementsByClassName("smallImage");
        let shownSources = document.getElementsByClassName("shownImage");

        for (let i = 0; i < 10; i++) {
            shownVocabularies[i].innerHTML = receivedVocabularies[i].innerHTML;
            shownSources[i].src = receivedSources[i].src; 
            shownIndices[i].innerHTML = receivedIndices[i].innerHTML; 
            // console.log("index" + shownIndices[i].innerHTML);
        }
    },
    methods: {
        checkIfCorrect() {
            let input1 = document.getElementById("practiceInput1");
            
            
            let vocab = document.getElementById("currentVocabInfo");
            let index = document.getElementById("currentIndex");

            let words = input1.value.split(" ");
            
            let endings = [".", '!', "?", ";", ":", ",", "/", "-", "'", '"']

            for (let i = 0; i < words.length; i++) {
                let word = words[i];
                let lastChar = word.charAt(word.length - 1);
                
                for (let j = 0; j < endings.length; j++) {
                    if (lastChar == endings[j]) {
                        words[i] = word.slice(0, word.length - 1);
                    }
                }
                words[i] = words[i].toLowerCase();
            }

            let vocabs = document.getElementsByClassName("shownVocab");
            
            let includesWord = false;

            for (let i = 0; i < words.length; i++) {
                if (words[i] == vocab.innerHTML) {
                    includesWord = true;
                }
            }

            if (includesWord) {
                input1.style.backgroundColor == "lightgreen";
                for (let i = 0; i < 10; i++) {
                    if ((index.innerHTML % 10) == i) {
                        input1.style.backgroundColor == "lightgreen";
                        vocabs[i].style.backgroundColor = "darkgreen";
                        vocabs[i].style.color = "white";
                    }
                }
            }

            
        },
        openSelector() {
            window.open ('workSelector?theme=' + this.theme + '&unit=' + this.unit, '_self',false)
        },
        makeImageAndTextAppear(number) {

            let input1 = document.getElementById("practiceInput1");

            input1.style.backgroundColor = "lightcyan";

            input1.value = "";

            let mainImage = document.getElementById("bigImage");
            
            let mainText = document.getElementById("currentText");
            let currentSelection = document.getElementById("currentSelection");
            
            let source = document.getElementById("img" + number).src;
            let vocab = document.getElementById("vocab" + number).innerHTML;
            let index = document.getElementById("index" + number).innerHTML;

            // input1.placeholder = vocab;

            let hiddenVocab = document.getElementById("currentVocabInfo");
            let hiddenIndex = document.getElementById("currentIndex");

            mainText.innerHTML = vocab;
            currentSelection.innerHTML = vocab;

            hiddenVocab.innerHTML = vocab;
            hiddenIndex.innerHTML = index;

            mainImage.src = source;
            mainText.innerHTML = vocab;

            $('#currentText').click(function(){
                window.getSelection();
            })
        },
        
        readTextOutLoud() {

            this.checkIfCorrect();


            let mainText = document.getElementById("practiceInput1");
            // let mainText = document.getElementById("currentText");
            let word = mainText.value;

            let synth = window.speechSynthesis;
            let utterance = new SpeechSynthesisUtterance(word);
            if (!synth.speaking) {
                synth.speak(utterance);
            }          
        },
        getWord() {
            $('#currentText').click(function(){
                var sel = window.getSelection();
                var str = sel.anchorNode.nodeValue,len = str.length, a = sel.anchorOffset, b = sel.anchorOffset;
                while(str[a]!=' '&&a--){}; if (str[a]==' ') a++;
                while(str[b]!=' '&&b++<len){};   

                let word = str.substring(a,b);
                let punct = [',', '.', '?', '!', ','];
                for (let i = 0; i< punct.length; i++){
                    if (word.endsWith(punct[i])) {
                        word = word.slice(0, (word.length - 1))
                    }
                }
                let synth = window.speechSynthesis;
                let utterance = new SpeechSynthesisUtterance(word);
                if (!synth.speaking) {
                    synth.speak(utterance);
                }                
            });
        },
    }
};

</script>

<style>

@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

body {
    background: lightcyan;
    overflow: hidden; 
    font-family: 'Montserrat', sans-serif;
}

textarea[type=text] {
    font-family: 'Montserrat', sans-serif;
    border: none;
    outline: none;
    word-wrap: break-word;
    resize: none;
    height: 200px;
}

textarea[type=text]:focus {
    font-family: 'Montserrat', sans-serif;
    border: none;
    resize: none;
}

.shownIndex {
    visibility: hidden;
}

.greenBlock {
    height: 36px;
    width: 15px;
    background-color: darkgreen;
    position: absolute;
    left: 65px;
    
}

#greenBlock1 {
    top: 232px;
}

#greenBlock2 {
    top: 295px;
}

#greenBlock3 {
    top: 358px;
}

#greenBlock4 {
    top: 421px;
}

.practiceInputEven {
    background-color: lightcyan;
    margin-left: 30px;
    justify-content: space-evenly;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
    width: 420px;
    padding-left: 35px;
    margin-top: 10px;
    margin-bottom: 10px;
    height: 45px;
    font-size: 2em;
}



.practiceInputOdd {
    background-color: lightcyan;
    margin-right: 30px;
    justify-content: space-evenly;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    width: 425px;
    padding-left: 64px;
    margin-top: 10px;
    margin-bottom: 10px;
    height: 45px;
    font-size: 2em;
}

input[type=text] {
  border: none;
  outline: none;
}

input[type=text]:focus {
  border: none;
}

#playCurrentTextButton {
    font-size: 2em;
    margin: 14px auto;
    padding: 5px;
    background-color: rgba(100, 80, 210, 1);
    width: 150px;
    text-align: center;
    border-radius: 10px;
    color: lightgray;
    cursor: pointer;
}

#playCurrentTextButton:hover {
    color: white;
}

#extensionArea {
    display: grid;
    grid-template-columns: 20px 10fr 10px 20fr 5px;
    grid-template-rows: 1fr 10fr 1fr;
}

#bigImageContainer {
    grid-column: 4;
    grid-row: 2;
    justify-self: center;
    align-self: center;
}

#bigImage {
    max-width: 590px;
    max-height: 456px;
}

#textContainer {
    grid-column: 2;
    grid-row: 2;
    background-color: lavender;
    height: 460px;
    width: 450px;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
}

#currentSelection {
    font-size: 2em;
    text-align: center;
    border-bottom: 5px solid rgba(100, 80, 210, 1);
    width: 90%;
    margin: 12px 0;
    align-self: center;
    background-color: lightcyan;
    border-top-right-radius: 5px;
    border-top-left-radius: 5px;
}

#currentTextTitle {
    font-size: 1.2em;
    margin-right: 23px;
    background-color: lightcyan;
    padding-left: 8px;
    padding-top: 4px;
    padding-bottom: 4px;
    margin-top: 15px;
    margin-bottom: 14px;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
}

#currentText {
    visibility: hidden;
    height: 0;
    width: 0;
}

#nonViewDataContainer {
    height: 0;
    width: 0;
    visibility: collapse;
}


#extensionArea {
    height: 496px;
}

.abSentenceHolder, .bcSentenceHolder, .abQuestionHolder, .bcQuestionHolder, .abQuestionDomainHolder, .bcQuestionDomainHolder {
    width: 80px;
    height: 40px;
    visibility: hidden;
}

a {
    color: rgba(100, 80, 210, 0.9);
}

a:hover {
    color: darkgreen;
}

#logo {
    height: 30px;
    cursor: pointer;
}

#newImagesContainerDisplay {
    display: flex;
    justify-content: space-between;
    border-top: 10px solid salmon;
}

.imagePackage {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding: 4px;
}

.shownImage {
    object-fit: cover;
    height: 80px;
    width: 100px;
    border-radius: 10px;
    cursor: pointer;
}

.shownImage:hover + .shownVocab {
    color: black;
} 

.shownVocab {
    height: auto;
    width: auto;
    margin: auto;
    margin-top: 5px;
    text-align: center;
    align-content: center;
    color: darkslategray;
    padding: 5px;
    border-radius: 10px;
}

.shownVocab:hover {
    color: black;
}

#header {
    background-image: linear-gradient(darkgreen, lavender, lavender, lavender, lavender, lavender,lavender,lavender,lavender,lavender, salmon);
    border-bottom: 8px solid salmon;
    border-top: 10px solid darkgreen;
    width: 100%;
    background-color: lavender;
    padding: 10px 5px;
    font-size: 1.6em;
    z-index: 1;
    display: flex;
}

#footer {
    position: fixed;
    bottom: 0px; 
    left: 0px;
    font-size: 0.8em;
    width: 100%;
    background-color: lavender;
    padding: 10px 5px; 
    margin-top: 10px;
    outline: 2px solid white;
    border-top: 8px solid rgba(100, 80, 210, 1);
}

#imagesContainer {
    visibility: collapse;
}

#themeName {
    text-align: center;
    white-space: pre;
    background-color: lavender;
    margin: auto;
}

#thisThemeName {
    text-transform: capitalize;
    padding-left: 150px;
}
</style>