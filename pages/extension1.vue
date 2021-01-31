<template>
    <div>
        <div id='header'>
            <img id='logo' src="/circleLOGO.png" alt="" @click="openSelector()">
            <p id="themeName">Extension 1: Explore Everything<span id='thisThemeName'> {{ this.theme }}, Unit {{ this.unit }} </span></p>
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
            </div>

            <div id="containerForAbsolutePositionedItems">
                <div id="domainDisplay">
                    <span id="languageOfTitle">Language of</span>
                    <span id="languageOf">English Language Arts</span>
                </div>
            </div>

            <div id="textContainer">
                <span id='currentSelection'>Current Selection</span>
                <span id='currentTextTitle'>Current Text: </span>
                <span id='spacer'></span>
                <span id="currentText" @click="getWord()"></span>
                <span id="playCurrentTextButton" @click="readTextOutLoud()">Listen</span>
                <div id='buttonContainer'>
                    <span class="button" id="vocabButton" @click="setUpVocab()">Vocab</span>
                    <span class="button" id="abSentenceButton" @click="setUpSentence('AB')">Sent. 1</span>
                    <span class="button" id="bcSentenceButton" @click="setUpSentence('BC')">Sent. 2</span>
                    <span class="button" id="abQuestionButton" @click="setUpQuestion('AB')">Ques. 1</span>
                    <span class="button" id="bcQuestionButton" @click="setUpQuestion('BC')">Ques. 2</span>
                </div>
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
        let receivedVocabularies = document.getElementsByClassName("smallImageTitle");
        let shownVocabularies = document.getElementsByClassName("shownVocab");

        let receivedSources = document.getElementsByClassName("smallImage");
        let shownSources = document.getElementsByClassName("shownImage");

        let receivedABSentences = document.getElementsByClassName("smallImageABSentence");
        let shownABSentences = document.getElementsByClassName("abSentenceHolder");
        
        let receivedBCSentences = document.getElementsByClassName("smallImageBCSentence");
        let shownBCSentences = document.getElementsByClassName("bcSentenceHolder");

        let receivedABQuestions = document.getElementsByClassName("smallImageABQuestion");
        let shownABQuestions = document.getElementsByClassName("abQuestionHolder");

        let receivedBCQuestions = document.getElementsByClassName("smallImageBCQuestion");
        let shownBCQuestions = document.getElementsByClassName("bcQuestionHolder");

        let receivedABQuestionDomains = document.getElementsByClassName("smallImageABQuestionDomain");
        let shownABQuestionDomains = document.getElementsByClassName("abQuestionDomainHolder");
        
        let receivedBCQuestionDomains = document.getElementsByClassName("smallImageBCQuestionDomain");
        let shownBCQuestionDomains = document.getElementsByClassName("bcQuestionDomainHolder");

        for (let i = 0; i < 10; i++) {
            shownVocabularies[i].innerHTML = receivedVocabularies[i].innerHTML;
            shownSources[i].src = receivedSources[i].src;
            shownABSentences[i].innerHTML = receivedABSentences[i].innerHTML;
            shownBCSentences[i].innerHTML = receivedBCSentences[i].innerHTML;
            shownABQuestions[i].innerHTML = receivedABQuestions[i].innerHTML;
            shownBCQuestions[i].innerHTML = receivedBCQuestions[i].innerHTML;
            shownABQuestionDomains[i].innerHTML = receivedABQuestionDomains[i].innerHTML;
            shownBCQuestionDomains[i].innerHTML = receivedBCQuestionDomains[i].innerHTML;
        }
    },
    methods: {
        openSelector() {
            window.open ('workSelector?theme=' + this.theme + '&unit=' + this.unit, '_self',false)
        },
        makeImageAndTextAppear(number) {

            let title = document.getElementById("currentTextTitle");
            title.innerText = "Current Text: Vocabulary" 

            let domainDisplay = document.getElementById("domainDisplay");
            domainDisplay.style.visibility = "hidden";

            let langOf = document.getElementById("languageOf");
            langOf.style.visibility = "hidden";

            let mainImage = document.getElementById("bigImage");
            
            let mainText = document.getElementById("currentText");
            let currentSelection = document.getElementById("currentSelection");

            let source = document.getElementById("img" + number).src;
            let vocab = document.getElementById("vocab" + number).innerHTML;
            let abSent = document.getElementById("abSentence" + number).innerHTML;
            let bcSent = document.getElementById("bcSentence" + number).innerHTML;
            let abQues = document.getElementById("abQuestion" + number).innerHTML;
            let bcQues = document.getElementById("bcQuestion" + number).innerHTML;
            let abQuesDomain = document.getElementById("abQuestionDomain" + number).innerHTML;
            let bcQuesDomain = document.getElementById("bcQuestionDomain" + number).innerHTML;

            let hiddenVocab = document.getElementById("currentVocabInfo");
            let hiddenABSent = document.getElementById("currentABSentenceInfo");
            let hiddenBCSent = document.getElementById("currentBCSentenceInfo");
            let hiddenABQues = document.getElementById("currentABQuestionInfo");
            let hiddenBCQues = document.getElementById("currentBCQuestionInfo");
            let hiddenABQuesDom = document.getElementById("currentABQuestionDomain");
            let hiddenBCQuesDom = document.getElementById("currentBCQuestionDomain");

            mainText.innerHTML = vocab;
            currentSelection.innerHTML = vocab;

            hiddenVocab.innerHTML = vocab;
            hiddenABSent.innerHTML = abSent;
            hiddenBCSent.innerHTML = bcSent;
            hiddenABQues.innerHTML = abQues;
            hiddenBCQues.innerHTML = bcQues;
            hiddenABQuesDom.innerHTML = abQuesDomain;
            hiddenBCQuesDom.innerHTML = bcQuesDomain;

            mainImage.src = source;
            mainText.innerHTML = vocab;
            mainText.style.fontSize = "2em";
            mainText.style.paddingTop = "6px";
            $('#currentText').click(function(){
                window.getSelection();
            })
        },
        setUpVocab() {
            let domainDisplay = document.getElementById("domainDisplay");
            domainDisplay.style.visibility = "hidden";

            let langOf = document.getElementById("languageOf");
            langOf.style.visibility = "hidden";

            let title = document.getElementById("currentTextTitle");
            title.innerText = "Current Text: Vocabulary" 

            let mainText = document.getElementById("currentText");
            mainText.style.paddingTop = "6px";
            let currentVocab = document.getElementById("currentVocabInfo");
            mainText.innerHTML = currentVocab.innerHTML;
            mainText.style.fontSize = "2em";
            $('#currentText').click(function(){
                window.getSelection();
            })
        },
        setUpSentence(level) {
            let domainDisplay = document.getElementById("domainDisplay");
            domainDisplay.style.visibility = "hidden";

            let langOf = document.getElementById("languageOf");
            langOf.style.visibility = "hidden";

            let title = document.getElementById("currentTextTitle");
            if (level == "AB") { title.innerText = "Current Text: Sentence 1"}  
            else { title.innerText = "Current Text: Sentence 2"}
            
            let mainText = document.getElementById("currentText");
            mainText.style.paddingTop = "6px";
            let currentSentence = document.getElementById("current" + level + "SentenceInfo");
            mainText.innerHTML = currentSentence.innerHTML;
            mainText.style.fontSize = "1.7em";
            $('#currentText').click(function(){
                window.getSelection();
            })
        },
        setUpQuestion(level) {
            let logoLogic = document.getElementById("bigImage");
            
            console.log(logoLogic.src.length);

            if (logoLogic.src.length != 36) {
                let domainDisplay = document.getElementById("domainDisplay");
                domainDisplay.style.visibility = "visible";

                let langOf = document.getElementById("languageOf");
                langOf.style.visibility = "visible";
            } else {
                let domainDisplay = document.getElementById("domainDisplay");
                domainDisplay.style.visibility = "hidden";

                let langOf = document.getElementById("languageOf");
                langOf.style.visibility = "hidden";
            }

            let title = document.getElementById("currentTextTitle");
            if (level == "AB") { title.innerText = "Current Text: Question 1"}  
            else { title.innerText = "Current Text: Question 2"}
            
            let languageOf = document.getElementById("languageOf");
            let currentLanguageOf;
            if (level == "AB") { currentLanguageOf = document.getElementById("currentABQuestionDomain");}
            else { currentLanguageOf = document.getElementById("currentBCQuestionDomain");}
            
            if (currentLanguageOf.innerHTML == "MA") { languageOf.innerText = "Mathematics" }
            else if (currentLanguageOf.innerHTML == "SC") { languageOf.innerText = "Science" }
            else if (currentLanguageOf.innerHTML == "ELA") { languageOf.innerText = "English Language Arts" }
            else if (currentLanguageOf.innerHTML == "SS") { languageOf.innerText = "Social Studies" }
            else { languageOf.innerHTML = "Every Day Language" }

            let mainText = document.getElementById("currentText");

            if (currentLanguageOf.innerHTML.length == 2 || currentLanguageOf.innerHTML.length == 3) {
                mainText.style.paddingTop = "85px";
            }
            
            let currentQuestion = document.getElementById("current" + level + "QuestionInfo");
            if (level == "AB") { mainText.style.fontSize = "1.1em";}
            if (level == "BC") { mainText.style.fontSize = "1.0em";}
            mainText.innerHTML = currentQuestion.innerHTML;
            $('#currentText').click(function(){
                window.getSelection();
            })
        },
        readTextOutLoud() {
            let mainText = document.getElementById("currentText");
            let word = mainText.innerHTML;
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
    overflow-x: hidden; 
    font-family: 'Montserrat', sans-serif;
}

#languageOfTitle {
    background: darkgreen;
    color: white;
    font-size: 1.5em;
    padding: 6px;
    border-radius: 10px;
}

#languageOf {
    padding-top: 8px;
    padding-left: 6px;
    padding-right: 6px;
    border-bottom: 4px solid rgba(100, 80, 210, 1);
    margin: auto;
}

#domainDisplay {
    position: absolute;
    top: 230px;
    left: 160px;
    display: flex;
    flex-direction: column;
    text-align: center;
    visibility: hidden;
}

#buttonContainer {
    display: flex;
    background-color: lightcyan;
    margin-right: 30px;
    justify-content: space-evenly;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    width: 425px;
}

.button {
    background-color: salmon;
    padding: 4px 2px;
    margin-top: 6px;
    margin-bottom: 6px;
    border-radius: 5px;
    color: darkslategray;
    font-size: 1.3em;
    cursor: pointer;
}

.button:hover {
    color: black;
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
    font-size: 1.5em;
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
    margin-left: 30px;
    background-color: lightcyan;
    padding: 4px;
    height: 180px;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
    /* padding-top: 35px; */
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
    /* max-width: 300px; */
}

.shownImage:hover + .shownVocab {
    color: black;
} 

.shownVocab {
    height: 40px;
    width: 100px;
    text-align: center;
    align-content: center;
    color: darkslategray;
    /* transform: translateX(10px); */
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