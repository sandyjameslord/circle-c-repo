<template>
    <div>
        <div id='header'>
            <img id='logo' @click="returnToMain()" src="/circleLOGO.png" alt="">
            <p id="themeName">Choose an Extension for:<span id='thisThemeName'> {{ this.theme }}, Unit {{ this.unit }} </span></p>
        </div>
        <div id="descriptionBox">
            <span id='nameOfExtension'>Explore: Everything</span>
            <span>Actions to Take:</span>
            <!-- <span id='description'>Give a fresh eye to everything this unit has to offer. Look at the pictures and listen to the words. Click on unfamiliar words for quick practice. Get a strong introduction to the language forms used.</span> -->
            <span id='description'><ul>
                <li id="li1">Look at each picture closely</li>
                <li id="li2">Listen to each sentence and question</li>
                <li id="li3">Click on any word for extra practice</li>
                <!-- <li id="li4">Look for the similarities among the sentences</li>
                <li id="li5">Think about the questions for the first time</li> -->
                </ul>
            </span>
            <span>Later On Today:</span>
            <span id='laterOn'>Think about the words and pictures in your head</span>
            <span>Key Takeaway:</span>
            <span id='keyTakeaway'>Pictures and practice help you learn to speak</span>
            
            
        </div>
        <!-- <img id="centerLogo" src="circleLOGO.png"> -->
        <div id='choiceContainer'>
            
            <div id="a1" class='choice'  @mouseenter="changeDescription(1)" >
                <span id='a1TEXT' @click="openWorksheet(1)" >E1</span>
                <span id="activity1" class="activitySpan" @click="openWorksheet(1)" >Explore: Everything</span>
            </div>
            <div id="a2" class='choice' @mouseenter="changeDescription(2)" >
                <span id='a2TEXT' @click="openWorksheet(2)" >E2</span>
                <span id="activity2" class="activitySpan" @click="openWorksheet(2)" >Practice: Words</span>
            </div>
            <div id="a3" class='choice' @mouseenter="changeDescription(3)" >
                <span id='a3TEXT' @click="openWorksheet(3)" >E3</span>
                <span id="activity3" class="activitySpan" @click="openWorksheet(3)" >Practice: Sentences (1)</span>
            </div>
            <div id="a4" class='choice' @mouseenter="changeDescription(4)" >
                <span id='a4TEXT' @click="openWorksheet(4)" >E4</span>
                <span id="activity4" class="activitySpan" @click="openWorksheet(4)" >Practice: Sentences (2)</span>
            </div>
            <div id="a5" class='choice' @mouseenter="changeDescription(5)" >
                <span id='a5TEXT' @click="openWorksheet(5)" >E5</span>
                <span id="activity5" class="activitySpan" @click="openWorksheet(5)" >Create: Sentences</span>
            </div>
            <div id="a6" class='choice'  @mouseenter="changeDescription(6)" >
                <span id='a6TEXT' @click="openWorksheet(6)" >E6</span>
                <span id="activity6" class="activitySpan" @click="openWorksheet(6)" >Speak: Words</span>
            </div>
            <div id="a7" class='choice' @mouseenter="changeDescription(7)" >
                <span id='a7TEXT' @click="openWorksheet(7)" >E7</span>
                <span id="activity7" class="activitySpan" @click="openWorksheet(7)" >Speak: Sentences (1)</span>
            </div>
            <div id="a8" class='choice' @mouseenter="changeDescription(8)" >
                <span id='a8TEXT' @click="openWorksheet(8)" >E8</span>
                <span id="activity8" class="activitySpan" @click="openWorksheet(8)" >Speak: Sentences (2)</span>
            </div>
            <div id="a9" class='choice' @mouseenter="changeDescription(9)" >
                <span id='a9TEXT' @click="openWorksheet(9)" >E9</span>
                <span id="activity9" class="activitySpan" @click="openWorksheet(9)" >Discuss: Questions (1)</span>
            </div>
            <div id="a10" class='choice' @mouseenter="changeDescription(10)" >
                <span id='a10TEXT' @click="openWorksheet(10)" >E10</span>
                <span id="activity10" class="activitySpan" @click="openWorksheet(10)" >Discuss: Questions (2)</span>
            </div>
            <div id="a11" class='choice' @mouseenter="changeDescription(11)" >
                <span id='a11TEXT' @click="openWorksheet(11)" >E11</span>
                <span id="activity11" class="activitySpan" @click="openWorksheet(11)" >Discuss: Your Ideas</span>
            </div>
            <!-- <span id="a6Sent1" @click="openWorksheet('6A')"></span>
            <span id="a6Sent2" @click="openWorksheet('6B')"></span>
            <span id="a7Sent1" @click="openWorksheet('7A')"></span>
            <span id="a7Sent2" @click="openWorksheet('7B')"></span> -->
        </div>
        <div id='newImagesContainerDisplay'>
            <div id='imagePackage1' class='imagePackage'>
                <img id='img1' class='shownImage' src="" alt="">
                <span id='vocab1' class='shownVocab'>Vocab1</span>
            </div>
            <div id='imagePackage2' class='imagePackage'>
                <img id='img2' class='shownImage' src="" alt="">
                <span id='vocab2' class='shownVocab'>Vocab2</span>
            </div>
            <div id='imagePackage3' class='imagePackage'>
                <img id='img3' class='shownImage' src="" alt="">
                <span id='vocab3' class='shownVocab'>Vocab3</span>
            </div>
            <div id='imagePackage4' class='imagePackage'>
                <img id='img4' class='shownImage' src="" alt="">
                <span id='vocab4' class='shownVocab'>Vocab4</span>
            </div>
            <div id='imagePackage5' class='imagePackage'>
                <img id='img5' class='shownImage' src="" alt="">
                <span id='vocab5' class='shownVocab'>Vocab5</span>
            </div>
            <div id='imagePackage6' class='imagePackage'>
                <img id='img6' class='shownImage' src="" alt="">
                <span id='vocab6' class='shownVocab'>Vocab6</span>
            </div>
            <div id='imagePackage7' class='imagePackage'>
                <img id='img7' class='shownImage' src="" alt="">
                <span id='vocab7' class='shownVocab'>Vocab7</span>
            </div>
            <div id='imagePackage8' class='imagePackage'>
                <img id='img8' class='shownImage' src="" alt="">
                <span id='vocab8' class='shownVocab'>Vocab8</span>
            </div>
            <div id='imagePackage9' class='imagePackage'>
                <img id='img9' class='shownImage' src="" alt="">
                <span id='vocab9' class='shownVocab'>Vocab9</span>
            </div>
            <div id='imagePackage10' class='imagePackage'>
                <img id='img10' class='shownImage' src="" alt="">
                <span id='vocab10' class='shownVocab'>Vocab10</span>
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

        for (let i = 0; i < 10; i++) {
            shownVocabularies[i].innerHTML = receivedVocabularies[i].innerHTML;
            shownSources[i].src = receivedSources[i].src;
        }
        console.log(shownVocabularies[0].innerHTML);
    },
    methods: {
        changeDescription(number) {
            let extensionName = document.getElementById("nameOfExtension");
            let extensionNames = [
                "Explore: Everything",
                "Practice: Words",
                "Practice: Sentences (1)",
                "Practice: Sentences (2)",
                "Create: Sentences",
                "Speak: Words",
                "Speak: Sentences (1)",
                "Speak: Sentences (2)",
                "Discuss: Questions (1)",
                "Discuss: Questions (2)",
                "Discuss: Your Ideas"
            ]
            let actionItems = [
                document.getElementById("li1"),
                document.getElementById("li2"),
                document.getElementById("li3"),
            ]

            let keyTakeawayItems = [
                document.getElementById("keyTakeaway"),
            ]

            let laterOnItems = [
                document.getElementById("laterOn"),
            ]


            let actionsToTake = {
                "e1": [
                    "Look at each picture closely.",
                    "Listen to each sentence and question.",
                    "Click on any word for extra practice.",
                    
                ],
                "e2": [
                    "Look at each picture in order.",
                    "Listen to each word at least 3 times.",
                    "Say each word out loud as you type.",
                ],
                "e3": [
                    "Listen to each sentence before typing.",
                    "Try typing each sentence. Take your time.",
                    "Say each word out loud as you type",
                ],
                "e4": [
                    "Listen to each sentence before typing.",
                    "Try typing each sentence. Take your time.",
                    "Say each word out loud as you type",
                ],
                "e5": [
                    "Look at each picture and think about it.",
                    "Say a sentence out loud, then type it.",
                    "Listen to your sentence. How does it sound?"
                ],
                "e6": [
                    "Listen to each word and say it to yourself.",
                    "Click start and say the word, then click stop.",
                    "Compare your voice and the computer's.",
                ],
                "e7": [
                    "Read each sentence and then listen to it.",
                    "Click start, say the sentence, then click stop.",
                    "Compare the computer's voice and yours."
                ],
                "e8": [
                    "Read each sentence and then listen to it.",
                    "Click start, say the sentence, then click stop.",
                    "Compare the computer's voice and yours."
                ],
                "e9": [
                    "Listen to each question twice.",
                    "Think about each one. What does it mean?",
                    "Record your response. What is important?"
                ],
                "e10": [
                    "Listen to each question twice.",
                    "Think about each one. What does it mean?",
                    "Record your response. What is important?"
                ],
                "e11": [
                    "Practice each word one more time.",
                    "Think: What would you like to point out?",
                    "Record yourself and listen to your own voice."
                ],
            }

            let keyTakeaways = {
                "e1": [
                    "Pictures and practice help you learn to speak",
                ],
                "e2": [
                    "Each word has its own sounds and spelling",
                ],
                "e3": [
                    "Words are usually found with other words",
                ],
                "e4": [
                    "Words are found with different words",
                ],
                "e5": [
                    "You can write with your own voice"
                ],
                "e6": [
                    "You use your voice to be heard",
                ],
                "e7": [
                    "When you speak, you use a lot of words"
                ],
                "e8": [
                    "There are many words to choose from"
                ],
                "e9": [
                    "There is a lot to learn about the world"
                ],
                "e10": [
                    "You can ask questions about anything"
                ],
                "e11": [
                    "This is your world, and you have a lot to say"
                ],
            }

            let laterOns = {
                "e1": [
                    "Think about the words and pictures in your head",
                ],
                "e2": [
                    "Say a word 3 times when you think about it",
                ],
                "e3": [
                    "Listen for any words from these sentences",
                ],
                "e4": [
                    "Try to remember each sentence",
                ],
                "e5": [
                    "Try and say your own sentences again"
                ],
                "e6": [
                    "Tell a friend or family member the words",
                ],
                "e7": [
                    "Show your friends and family these sentences"
                ],
                "e8": [
                    "Tell someone something new that you know"
                ],
                "e9": [
                    "Think about a million questions to ask"
                ],
                "e10": [
                    "Think about a million ways to ask a question"
                ],
                "e11": [
                    "Have a discussion with your family and friends"
                ],
            }

            keyTakeawayItems[0].innerText = keyTakeaways["e" + number]
            laterOnItems[0].innerText = laterOns["e" + number]
            for (let i = 0; i < 3; i++) {
                extensionName.innerText = extensionNames[number - 1];
                actionItems[i].innerText = actionsToTake["e" + number][i]; 
                // actionItems[i].innerText = actionsToTake["e" + number][i]; 
            }
        },
        getTitle (vm) {
            const { title } = vm.$options;
            if (title) {
                return typeof title === 'function' ? title.call(vm) : title
            }
        },
        openWorksheet(number) {
            window.open('extension' + number + '?theme=' + this.theme + '&unit=' + this.unit, '_self',false)
        },
        goToCurriculum() {
            window.open ('curriculum','_self',false)
        },
        getInfo(){
            return this.theme;
        },
        returnToMain() {
            window.open ('main','_self',false)
        }
    },
    // mounted() {
    //     this.setVocabAndImages();
    // } 
};

</script>

<style>

@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

body {
    background: lightcyan;
    overflow-x: hidden; 
    font-family: 'Montserrat', sans-serif;
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

#nameOfExtension {
    font-size: 2em;
    text-align: center;
    border-bottom: 5px solid rgba(100, 80, 210, 1);
    width: 90%;
    transform: translateX(5%);
    background-color: lightcyan;
    border-top-right-radius: 5px;
    border-top-left-radius: 5px;
}

#descriptionBox {
    position: absolute;
    top: 315px;
    left: 70%;
    transform: translate(-50%, -50%); 
    background-color: lavender;
    height: 460px;
    width: 450px;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    

}

#centerLogo {
    position: absolute;
    top: 320px;
    left: 80%;
    transform: translate(-50%, -50%); 
}

#choiceContainer {
    height: 496px;
    display: flex;
    flex-direction: column;
}

#choiceContainer > div {
    display: flex;
    /* border-left: 10px solid salmon; */
    /* background-color: lavender; */
}

#descriptionBox > span:nth-of-type(even) {
    font-size: 1.5em;
    margin-right: 165px;
    background-color: lightcyan;
    padding-left: 8px;
    padding-top: 4px;
    padding-bottom: 4px;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    /* transform: translateY(-25px); */
}

#description {
    /* padding: 4px; */
    margin-left: 30px;
    background-color: lightcyan;
    padding: 4px;
    transform: translateY(-12px);
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
}



#keyTakeaway {
    /* padding: 4px; */
    margin-left: 30px;
    background-color: lightcyan;
    padding: 4px;
    transform: translateY(-12px);
        border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
}

#laterOn {
    /* padding: 4px; */
    margin-left: 30px;
    background-color: lightcyan;
    padding: 4px;
    transform: translateY(-12px);
        border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
}


#descriptionBox > span:nth-of-type(4) {
    font-size: 1.5em;
}

#descriptionBox > span:nth-of-type(6) {
    font-size: 1.5em;
}


#choiceContainer > div > span:nth-of-type(1) {
    margin-left: 10px;
    font-size: 2.1em;
    background-color: lavender;
    width: 100px;
    text-align: center;
    transform: translateX(-10px);
    border-top: 2px solid lightcyan;
    border-bottom: 2px solid lightcyan;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    cursor: pointer;
    /* color: gray; */
    /* padding: 5px; */
}
#choiceContainer > div > span:nth-of-type(2) {
    font-size: 1.8em;
    /* transform: translateY(10px); */
    border-top: 5px solid lightcyan;
    cursor: pointer;
    /* color: gray; */
}

/* #choiceContainer > div > span:nth-of-type(n):hover {
    color: black;
} */

.choice > span {
    color: gray;
}

.choice:hover > span {
    color: black;
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
    align-content: space-between;
    padding: 4px;
}

.shownImage {
    object-fit: cover;
    height: 80px;
    width: 100px;
    border-radius: 10px;
}


.shownVocab {
    /* z-index: 5; */
    height: 40px;
    width: 100px;
    /* align-self: center; */
    text-align: center;
    /* align-content: center; */
    /* transform: translateX(10px); */
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
    border-top: 8px solid rgba(100, 80, 210, 1);
    width: 100%;
    background-color: lavender;
    padding: 10px 5px; 
    margin-top: 10px;
    outline: 2px solid white;
}

/* .smallImageTitle {
  font-size: 0.7em;
} */

#imagesContainer {
    grid-row: 4;
    display: flex;
    margin: auto;
    transform: translateY(-70px);
    visibility: collapse;
}

#themeName {
    text-align: center;
    /* text-transform: capitalize; */
    white-space: pre;
    background-color: lavender;
    margin: auto;
}

#thisThemeName {
    text-transform: capitalize;
}

.smallImage {
  object-fit: cover;
  padding: 3px;
  height: 80px;
  width: 110px;
  border: 1px solid rgb(1, 58, 1);
  border-radius: 5px;
  margin: 3px;
}

</style>