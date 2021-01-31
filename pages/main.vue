<template>
    <div>
        <div id="navbar">
            <!-- <img @click="openCurriculum()" id='logoFinal' src="/circleLOGO.png" alt=""> -->
            <span @mouseover="addText('curriculum')" @mouseenter="moveRight()" id="curriculumSpan">How to Use</span>
            <span @mouseover="addText('design')"  @mouseenter="moveRight()" id="designSpan">Inspiration and Design</span>
            <span @mouseover="addText('aboutSandy')"  @mouseenter="moveRight()" id="sandyLordSpan">Created By</span>
            <span @mouseover="addText('contact')"  @mouseenter="moveRight()" id="contactSpan">Contact</span>
        </div>

        <div id="optionsBar">
            <div id="designOptionsBar">
                <span @click="showPage('design')">Design</span>
                <span @click="showPage('inspiration')">Inspiration</span>
                
            </div>
            <div id="curriculumOptionsBar">
                <span @click="showPage('smallGroup')">In Small Group</span>
                <span @click="showPage('byYourself')">By Yourself</span>
                
            </div>
            <div id="aboutSandyOptionsBar">
                <span @click="showPage('softwareDeveloperLinguistEducator')">Software Developer</span>
                <span @click="showPage('softwareDeveloperLinguistEducator')">Linguist</span>
                <span @click="showPage('softwareDeveloperLinguistEducator')">Educator</span>
                
            </div>
            <div id="contactOptionsBar">
                <span @click="showPage('contact')">Contact</span>
            </div>
            
        </div>
        
        <div id='hoverText'> Hover over a theme below, then click on a unit.</div>
        
        <div id="learnMoreContainer">

            <div id="smallGroupChoice" class="choice">
                <span class="choiceTitle">In Small Group</span>
                <span class="newCloser" @click="closePage()"> X </span>
                <span class="newDetails"><br>Find out what your friends know.<br><br> Tell them what's on your mind.<br><br>Enjoy Sharing!</span>
            </div>
            
            <div id="byYourselfChoice" class="choice">
                <span class="choiceTitle">By Yourself</span>
                <span class="newCloser" @click="closePage()"> X </span>
                <span class="newDetails"><br>Click on any unit that interests you.<br><br> Explore the language and visuals.<br><br>Connect what you see with what you know!</span>
            </div>

            <div id="inspirationChoice" class="choice">
                <span class="choiceTitle">Inspiration</span>
                <span class="newCloser" @click="closePage()"> X </span>
                <span class="newDetails"><br><br>I would still plant my apple tree. --Dr. MLK Jr.</span>
            </div>
            
            <div id="designChoice" class="choice">
                <span class="choiceTitle">Design</span>
                <span class="newCloser" @click="closePage()"> X </span>
                <span class="newDetails"><br>A calm, context rich environment for engaging with diverse linguistic content.<br><br>Include everyone and engage with anyone.</span>
            </div>

            <div id="softwareEngineerChoice" class="choice">
                <div id='sanlo' class="choiceTitle"><span id='slct'> Software Engineer, Linguist & Educator:</span>Sandy Lord</div>
                <span class="newCloser" id='careerCloser' @click="closePage()"> X </span>
                <div class='softwareEngineer'>
                    <span class='careerTitle'>Software Engineer</span>
                    <div class='careerDescription'>
                        <div class='careerDescription1'>
                            Self-taught Programmer 2019 - Present Strongest in Python
                        </div><br>
                        <div class='careerDescription2'>Strong in Java, JavaScript, UNIX, SQL, CSS, HTML, MEVN Stack
                            
                        </div><br>
                        <div class='careerDescription3'>CS Courses Taken at FSU:
                            <ul>
                                <li>CS 1 with Java</li>
                                <li>CS 2 with Java</li>
                                <li>Python</li>
                                <li>WebDev with JavaScript</li>
                                <li>Operating Systems and UNIX</li>
                                <li>Data Structures with Java</li>
                                <li>Database Management</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class='linguist'>
                    <span class='careerTitle'>Linguist</span>
                    <div class='careerDescription'>
                        <div class='careerDescription1'>
                            Education:
                            <ul>
                                <li>MA, Applied Linguistics, Boston University, <em>Magna cum laude</em></li>
                                <li>BA, Linguistics, Boston University, <em>Cum laude</em></li>
                            </ul>
                        </div><br>
                        <div class='careerDescription2'>
                            Employment:
                            <ul>
                                <li>Teaching Fellow, Boston University Program in Applied Linguistics, 2007-2010</li>
                                <li>Language Annotator, Boston University Program in Applied Linguistics, 2009</li>
                            </ul>
                        </div><br>
                    </div>
                </div>
                <div class='educator'>
                    <span class='careerTitle'>Educator</span>
                    <div class='careerDescription'>
                        <div class='careerDescription1'>
                            Licensure:
                            <ul>
                                <li>Massachusetts Teachers Lic. #447085</li>
                                <li>PreK-5 English Learners</li>
                                <li>6-12 English Learners</li>
                            </ul>
                        </div><br>
                        <div class='careerDescription2'>
                            Taught as Elementary ESL Teacher in:
                            <ul>
                                <li>Taunton Public Schools 2010-2015</li>
                                <li>Burlington Public Schools 2015-2017</li>
                                <li>Worcester Public Schools 2018</li>
                            </ul>
                        </div><br>
                        <div class='careerDescription3'>
                            Award:
                            <ul>
                                <li><a href="https://www.matsol.org/index.php?option=com_content&view=article&id=125:past-award-recipients&catid=24:awards&Itemid=138"></a>Anne Dow Award for Excellence and Creativity, MATSOL, 2014</li>
                                
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            
            <div id="linguistChoice" class="choice">
                <span class="choiceTitle">Software Engineer, Linguist, and Educator</span>
                <span class="newCloser" @click="closePage()"> X </span>
            </div>
            
            <div id="educatorChoice" class="choice">
                <span class="choiceTitle">Software Engineer, Linguist, and Educator</span>
                <span class="newCloser" @click="closePage()"> X </span>
            </div>

            <div id="contactChoice" class="choice">
                <span class="choiceTitle">Contact</span>
                <span class="newCloser" @click="closePage()"> X </span>
                <img id='sandyImage' src="/sandylord.jpg" alt="">
                <div class="newDetails">
                    <br><br>
                    <a href="https://github.com/sandyjameslord">GitHub</a>
                    <br><br>
                    <a href="https://www.linkedin.com/in/sandy-lord-engineer/">LinkedIn</a>

                </div>
            </div>

        </div>

        <div id="themeContainer">
            
            <div id="bodyTheme" @mouseover="addLine('body')"><img class='themeImage' src="/imagesForThemes/body.svg" alt=""><span>Body</span></div>
            <div id="colorTheme" @mouseover="addLine('color')"><img class='themeImage' src="/imagesForThemes/color.svg" alt=""><span>Color</span></div>
            <div id="fallTheme" @mouseover="addLine('fall')"><img class='themeImage' src="/imagesForThemes/fall.svg" alt=""><span>Fall</span></div>        
            <div id="geographyTheme" @mouseover="addLine('geography')"><img class='themeImage' src="/imagesForThemes/geography.svg" alt=""><span>Geography</span></div>
            <div id="houseTheme" @mouseover="addLine('house')"><img class='themeImage' src="/imagesForThemes/house.svg" alt=""><span>House</span></div>
            <div id="plantsTheme" @mouseover="addLine('plant')"><img class='themeImage' src="/imagesForThemes/plants.svg" alt=""><span>Plants</span></div>
            <div id="spaceTheme" @mouseover="addLine('space')"><img class='themeImage' src="/imagesForThemes/space.svg" alt=""><span>Space</span></div>        
            <div id="transportationTheme" @mouseover="addLine('transportation')"><img class='themeImage' src="/imagesForThemes/transportation.svg" alt=""><span>Transportation</span></div>
            <div id="waterTheme" @mouseover="addLine('water')"><img class='themeImage' src="/imagesForThemes/water.svg" alt=""><span>Water</span></div>
            <div id="worldCultureTheme" @mouseover="addLine('worldCulture')"><img class='themeImage' src="/imagesForThemes/worldCulture.svg" alt=""><span>World</span></div>
            <div id="bodyLine"></div>
            <div id="colorLine"></div>
            <div id="fallLine"></div>
            <div id="geographyLine"></div>
            <div id="houseLine"></div>
            <div id="plantLine"></div>
            <div id="spaceLine"></div>
            <div id="transportationLine"></div>
            <div id="waterLine"></div>
            <div id="worldCultureLine"></div>
            <div id="coverLine"></div>

            <div id="fourChoices"></div>
        </div>
        
        <div id="fourUnitsContainer">
            <figure>
                <img id="unitImage1" class='unitImage' src="https://circle-eld.s3.us-east-2.amazonaws.com/1606773191058" @mouseenter="imageGrow(1)" @mouseleave="imageShrink(1)" alt="">
                <figcaption>Unit 1</figcaption>
                
                <div id="vocabContainer1" class='vocabContainer'>
                <span id='unit1vocab1' class='unitVocab'>brain</span>
                <span id='unit1vocab2' class='unitVocab'>chest</span>
                <span id='unit1vocab3' class='unitVocab'>head</span>
                <span id='unit1vocab4' class='unitVocab'>knee</span>
                <span id='unit1vocab5' class='unitVocab'>muscle</span>
                </div>
            </figure>
            <figure>
                <img id="unitImage2" src="https://circle-eld.s3.us-east-2.amazonaws.com/1605900798726" @mouseenter="imageGrow(2)" @mouseleave="imageShrink(2)" alt="">
                <figcaption>Unit 2</figcaption>
                
                <div id="vocabContainer1" class='vocabContainer'>
                <span id='unit2vocab1' class='unitVocab'>arm</span>
                <span id='unit2vocab2' class='unitVocab'>back</span>
                <span id='unit2vocab3' class='unitVocab'>hair</span>
                <span id='unit2vocab4' class='unitVocab'>finger</span>
                <span id='unit2vocab5' class='unitVocab'>neck</span>
                </div>
            </figure>
            <figure>
                <img id="unitImage3" src="https://circle-eld.s3.us-east-2.amazonaws.com/1606772503460" @mouseenter="imageGrow(3)" @mouseleave="imageShrink(3)" alt="">
                <figcaption>Unit 3</figcaption>
                
                <div id="vocabContainer1" class='vocabContainer'>
                <span id='unit3vocab1' class='unitVocab'>bone</span>
                <span id='unit3vocab2' class='unitVocab'>eyebrow</span>
                <span id='unit3vocab3' class='unitVocab'>heart</span>
                <span id='unit3vocab4' class='unitVocab'>mouth</span>
                <span id='unit3vocab5' class='unitVocab'>tongue</span>
                </div>
            </figure>
            <figure>
                <img id="unitImage4" src="https://circle-eld.s3.us-east-2.amazonaws.com/1605899427223" @mouseenter="imageGrow(4)" @mouseleave="imageShrink(4)" alt="">
                <figcaption>Unit 4</figcaption>
                
                <div id="vocabContainer1" class='vocabContainer'>
                <span id='unit4vocab1' class='unitVocab'>eye</span>
                <span id='unit4vocab2' class='unitVocab'>leg</span>
                <span id='unit4vocab3' class='unitVocab'>ear</span>
                <span id='unit4vocab4' class='unitVocab'>nose</span>
                <span id='unit4vocab5' class='unitVocab'>toes</span>
                </div>
            </figure>
        </div>

        <div id='footer'><em> Copyright 2021, Andrew James "Sandy" Lord, IV. No user data is collected by CIRCLE-ELD. Use freely and <a target="_blank" rel="noopener noreferrer" href="mailto:sandylord.dev@gmail.com">please reach out with questions, comments and observations.</a> <br><span id='aboutPhotos'>All images used are in the public domain or have CC 3.0+ attribution.</span></em></div>
        <br><br><br> <br>
    </div>
</template>

<script>
export default {
async asyncData({ $axios }) {
    try {
      let response = await $axios.$get("/api/products");
    //   console.log(response.products);
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
    if (theme == "plant") {theme += "s"};
    
    return {
      unit: unit,
      theme: theme,
      title: "Themes and Units",
    }
  },
    methods: {
        moveRight() {
            let t = document.getElementById("hoverText");
            t.style.animation = "moveRight 500ms ease-out forwards";
        },
        imageGrow(number) {
            let entry = document.getElementById("unitImage" + number);
            entry.style.animation = "entryGetBigger 250ms linear forwards";
            // entry.style.visibility = "hidden";
        },
        imageShrink(number) {
            let entry = document.getElementById("unitImage" + number);
            entry.style.animation = "entryGetSmaller 250ms linear forwards";
            // entry.style.visibility = "hidden";
        },
        addLine(theme) {
        let unit1vocab1 = document.getElementById("unit1vocab1");
        let unit1vocab2 = document.getElementById("unit1vocab2");
        let unit1vocab3 = document.getElementById("unit1vocab3");
        let unit1vocab4 = document.getElementById("unit1vocab4");
        let unit1vocab5 = document.getElementById("unit1vocab5");

        let unit2vocab1 = document.getElementById("unit2vocab1");
        let unit2vocab2 = document.getElementById("unit2vocab2");
        let unit2vocab3 = document.getElementById("unit2vocab3");
        let unit2vocab4 = document.getElementById("unit2vocab4");
        let unit2vocab5 = document.getElementById("unit2vocab5");

        let unit3vocab1 = document.getElementById("unit3vocab1");
        let unit3vocab2 = document.getElementById("unit3vocab2");
        let unit3vocab3 = document.getElementById("unit3vocab3");
        let unit3vocab4 = document.getElementById("unit3vocab4");
        let unit3vocab5 = document.getElementById("unit3vocab5");

        let unit4vocab1 = document.getElementById("unit4vocab1");
        let unit4vocab2 = document.getElementById("unit4vocab2");
        let unit4vocab3 = document.getElementById("unit4vocab3");
        let unit4vocab4 = document.getElementById("unit4vocab4");
        let unit4vocab5 = document.getElementById("unit4vocab5");

        let vocabs = [unit1vocab1, unit1vocab2, unit1vocab3, unit1vocab4, unit1vocab5, unit2vocab1,unit2vocab2,unit2vocab3,unit2vocab4,unit2vocab5, unit3vocab1,unit3vocab2,unit3vocab3,unit3vocab4,unit3vocab5,unit4vocab1,unit4vocab2,unit4vocab3,unit4vocab4,unit4vocab5]

        for (let i = 0; i < 400; i += 40) {
            if (this.products[i].theme == theme) {
                for (let j = 0; j < 20; j++) {
                    vocabs[j].innerText = this.products[i + (j*2)].vocabulary;
                    if (j % 4 == 0) {
                        vocabs[j].onclick = function () {window.open ('workSelector?theme=' + theme + '&unit=1', '_self',false)};
                    }
                    else if (j % 4 == 1) {
                        vocabs[j].onclick = function () {window.open ('workSelector?theme=' + theme + '&unit=2', '_self',false)};
                    }
                    else if (j % 4 == 2) {
                        vocabs[j].onclick = function () {window.open ('workSelector?theme=' + theme + '&unit=3', '_self',false)};
                    }
                    else if (j % 4 == 3) {
                        vocabs[j].onclick = function () {window.open ('workSelector?theme=' + theme + '&unit=4', '_self',false)};
                    }
                }
            }
            if (this.products[i].theme == "plants") {
                for (let j = 0; j < 20; j++) {
                    vocabs[j].innerText = this.products[i + (j*2)].vocabulary;
                }
            } 
        }

        let displayLines = [
            document.getElementById("bodyLine"),
            document.getElementById("colorLine"),
            document.getElementById("fallLine"),
            document.getElementById("geographyLine"),
            document.getElementById("houseLine"),
            document.getElementById("plantLine"),
            document.getElementById("spaceLine"),
            document.getElementById("transportationLine"),
            document.getElementById("waterLine"),
            document.getElementById("worldCultureLine"),
        ]

        for (let i = 0; i < displayLines.length; i++) {
            displayLines[i].style.visibility = "hidden";
        }

        let displayLine = document.getElementById(theme + "Line");
        displayLine.style.visibility = "visible";

        let image1 = document.getElementById("unitImage1");
        let image2 = document.getElementById("unitImage2");
        let image3 = document.getElementById("unitImage3");
        let image4 = document.getElementById("unitImage4");

        let sources = {
            "body1":"https://circle-eld.s3.us-east-2.amazonaws.com/1606773191058",
            "body2":"https://circle-eld.s3.us-east-2.amazonaws.com/1605900798726",
            "body3":"https://circle-eld.s3.us-east-2.amazonaws.com/1606772503460",
            "body4":"https://circle-eld.s3.us-east-2.amazonaws.com/1605899427223",

            "color1":"https://circle-eld.s3.us-east-2.amazonaws.com/1607094713744",
            "color2":"https://circle-eld.s3.us-east-2.amazonaws.com/1607273000564",
            "color3":"https://circle-eld.s3.us-east-2.amazonaws.com/1607273125499",
            "color4":"https://circle-eld.s3.us-east-2.amazonaws.com/1607273414308",

            "fall1":"https://circle-eld.s3.us-east-2.amazonaws.com/1607273845235",
            "fall2":"https://circle-eld.s3.us-east-2.amazonaws.com/1607273991595",
            "fall3":"https://circle-eld.s3.us-east-2.amazonaws.com/1607274420646",
            "fall4":"https://circle-eld.s3.us-east-2.amazonaws.com/1607274533908",

            "geography1":"https://circle-eld.s3.us-east-2.amazonaws.com/1607355264157",
            "geography2":"https://circle-eld.s3.us-east-2.amazonaws.com/1607355435084",
            "geography3":"https://circle-eld.s3.us-east-2.amazonaws.com/1607355785494",
            "geography4":"https://circle-eld.s3.us-east-2.amazonaws.com/1607356090111",

            "house1":"https://circle-eld.s3.us-east-2.amazonaws.com/1607357340545",
            "house2":"https://circle-eld.s3.us-east-2.amazonaws.com/1607358036847",
            "house3":"https://circle-eld.s3.us-east-2.amazonaws.com/1607358223929",
            "house4":"https://circle-eld.s3.us-east-2.amazonaws.com/1607364743216",
            
            "plant1":"https://circle-eld.s3.us-east-2.amazonaws.com/1607365413734",
            "plant2":"https://circle-eld.s3.us-east-2.amazonaws.com/1607365860146",
            "plant3":"https://circle-eld.s3.us-east-2.amazonaws.com/1607366633592",
            "plant4":"https://circle-eld.s3.us-east-2.amazonaws.com/1607367002081",

            "space1":"https://circle-eld.s3.us-east-2.amazonaws.com/1607367187748",
            "space2":"https://circle-eld.s3.us-east-2.amazonaws.com/1607367597398",
            "space3":"https://circle-eld.s3.us-east-2.amazonaws.com/1607367733647",
            "space4":"https://circle-eld.s3.us-east-2.amazonaws.com/1607367977818",

            "transportation1":"https://circle-eld.s3.us-east-2.amazonaws.com/1607368829689",
            "transportation2":"https://circle-eld.s3.us-east-2.amazonaws.com/1607369541702",
            "transportation3":"https://circle-eld.s3.us-east-2.amazonaws.com/1607371363450",
            "transportation4":"https://circle-eld.s3.us-east-2.amazonaws.com/1607372040299",

            "water1":"https://circle-eld.s3.us-east-2.amazonaws.com/1607372811888",
            "water2":"https://circle-eld.s3.us-east-2.amazonaws.com/1607373167285",
            "water3":"https://circle-eld.s3.us-east-2.amazonaws.com/1607373508510",
            "water4":"https://circle-eld.s3.us-east-2.amazonaws.com/1607373749274",

            "worldCulture1":"https://circle-eld.s3.us-east-2.amazonaws.com/1607374148280",
            "worldCulture2":"https://circle-eld.s3.us-east-2.amazonaws.com/1607374262772",
            "worldCulture3":"https://circle-eld.s3.us-east-2.amazonaws.com/1607374883268",
            "worldCulture4":"https://circle-eld.s3.us-east-2.amazonaws.com/1607375461336",
        }
        
        image1.src = sources[theme + "1"];
        image2.src = sources[theme + "2"];
        image3.src = sources[theme + "3"];
        image4.src = sources[theme + "4"];

        image1.onclick = function () {window.open ('workSelector?theme=' + theme + '&unit=1', '_self',false)};
        image2.onclick = function () {window.open ('workSelector?theme=' + theme + '&unit=2', '_self',false)};
        image3.onclick = function () {window.open ('workSelector?theme=' + theme + '&unit=3', '_self',false)};
        image4.onclick = function () {window.open ('workSelector?theme=' + theme + '&unit=4', '_self',false)};
        },
        goToUnit(theme, unit) {
            window.open('workSelector?theme=' + theme + '&unit=' + unit, '_self',false);
        },  
        addText(concept) {
            let displayBars = [
                document.getElementById("designOptionsBar"),
                document.getElementById("curriculumOptionsBar"),
                document.getElementById("aboutSandyOptionsBar"),
                document.getElementById("contactOptionsBar"),
            ];
            for (let i = 0; i < displayBars.length; i++) {
                displayBars[i].style.display = "none";
                displayBars[i].style.visibility = "hidden";
            };
            let thisBar = "" + concept + "OptionsBar";
            let displayBar = document.getElementById(thisBar);
            displayBar.style.display = "flex";
            displayBar.style.justifyItems = "center";
            displayBar.style.alignItems = "center";
            displayBar.style.visibility = "visible";
        },
        showPage(component) {
            let learnMoreContainer = document.getElementById("learnMoreContainer");
            learnMoreContainer.style.visibility = "visible";
            
            let smallGroup = document.getElementById("smallGroupChoice");
            let byYourself = document.getElementById("byYourselfChoice");
            let inspiration = document.getElementById("inspirationChoice");
            let design = document.getElementById("designChoice");
            let softwareEngineer = document.getElementById("softwareEngineerChoice");
            let linguist = document.getElementById("linguistChoice");
            let educator = document.getElementById("educatorChoice");
            let contact = document.getElementById("contactChoice");

            let allWindows = [
                smallGroup, byYourself, inspiration, design, softwareEngineer, linguist, educator, contact
            ]

            for (let i = 0; i < 8; i++) {
                allWindows[i].style.visibility = "hidden";
            }



            if      (component == "smallGroup") { allWindows[0].style.visibility = "visible"}
            else if (component == "byYourself") { allWindows[1].style.visibility = "visible"}
            else if (component == "inspiration") { allWindows[2].style.visibility = "visible"}
            else if (component == "design") { allWindows[3].style.visibility = "visible"}
            else if (component == "softwareDeveloperLinguistEducator") { allWindows[4].style.visibility = "visible"}
            else if (component == "softwareDeveloperLinguistEducator") { allWindows[5].style.visibility = "visible"}
            else if (component == "softwareDeveloperLinguistEducator") { allWindows[6].style.visibility = "visible"}
            else if (component == "contact") { allWindows[7].style.visibility = "visible"}
            // console.log(component);
        },
        closePage() {
            let smallGroup = document.getElementById("smallGroupChoice");
            let byYourself = document.getElementById("byYourselfChoice");
            let inspiration = document.getElementById("inspirationChoice");
            let design = document.getElementById("designChoice");
            let softwareEngineer = document.getElementById("softwareEngineerChoice");
            let linguist = document.getElementById("linguistChoice");
            let educator = document.getElementById("educatorChoice");
            let contact = document.getElementById("contactChoice");

            let allWindows = [
                smallGroup, byYourself, inspiration, design, softwareEngineer, linguist, educator, contact
            ]

            for (let i = 0; i < 8; i++) {
                allWindows[i].style.visibility = "hidden";
            }
            
        },
        openCurriculum() {
            window.open ('curriculum','_self',false)
        },
    },    
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

body {
    background: lightcyan;
    overflow-x: hidden; 
    font-family: 'Montserrat', sans-serif;
}

a:link {
    color: rgba(100, 80, 210, 1);
    text-decoration: none;
}

#sandyImage {
    height: 300px;
    position: absolute;
    top: 135px;
    left: 200px;
    border-radius: 5px;
}



.newDetails {
    font-size: 2.5em;
    grid-column: 1/5;
    text-align: center;
}

.careerTitle {
    transform: translateY(-15px);
    border-bottom: 4px solid salmon;
    margin: auto;
}


#careerCloser {
    width: 140px;
    margin-left: 210px;
}

#sanlo {
    font-size: 2.2em;
    text-align: center;
    padding-top: 5px;
    /* position: relative;
    width: 650px; */
    /* left: 10%; */
    /* transform: scaleX(1.4); */
    /* margin-left: 100px;
    margin-right: 100px; */
}

#slct {
    font-size: 1.0rem;
    padding-bottom: 5px;
}

.softwareEngineer {
    transform: translateY(20px);
    width: 330px;
    /* background-color: red; */
    margin: auto;
    margin-left: 20px;
    /* border-right:  */
}

.linguist {
    transform: translateY(20px);
    width: 330px;
    /* background-color: blue; */
    margin: auto;
}

.educator {
    transform: translateY(20px);
    width: 330px;
    /* background-color: green; */
    margin: auto;
    margin-right: 20px;
}

.careerTitle {
    font-size: 2em;
    margin: auto;
    /* width: 200px; */
}

/* #learnMoreContainer {
    position: absolute;
    top: 150px;
    background-color: rgb(75, 221, 139);
    z-index: 10;
} */

.choice {
    /* position: absolute; */
    position: absolute;
    top: 150px;
    width: 100%;
    margin: auto;
    height: 480px;
    background-color: lavender;
    display: grid;
    grid-template-columns: 1fr 5fr 1fr;
    grid-template-rows: 1fr 5fr 1fr;
    z-index: 10;
    visibility: hidden;
}

.choiceTitle {
    background-color: rgba(100, 80, 210, 1);
    margin: 10px 5px;
    padding-top: 10px;
    font-size: 3em;
    border-radius: 10px;
    color: white;
    grid-column: 2;
    
}

.newCloser {
    text-align: center;
    background-color: rgba(100, 80, 210, 0.7);
    color: lightgray;
    margin: 10px 5px;
    font-size: 4em;
    border-radius: 10px;
    grid-column: 3;
    border: 4px solid salmon;
    cursor: pointer;
    transform: scale(0.6);
    transition: 375ms;
}

.newCloser:hover {
    /* border-color: black; */
    color: black;
    background-color:  rgba(100, 80, 210, 1);
}

.themeImage {
    height: 60px;
    align-self: center;
}

@keyframes entryGetBigger {
    0% {border-radius: 80px;}
    100% {border-radius: 10px;}
}

@keyframes entryGetSmaller {
    0% {border-radius: 10px;}
    100% {border-radius: 80px;}
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
    z-index: 20;
}

#clickAndPractice {
    position: absolute;
    top: 60px;
    left: 20px;
    width: 210px;
    height: 380px;
    font-size: 1.4em;
    border: 4px solid salmon;
    border-radius: 10px;
    background-color: lightcyan;
    padding: 5px 10px;
}

#selectionForStudent {
    position: absolute;
    top: 90px;
    left: 270px;
    width: 550px;
    cursor: pointer;
    border: 4px solid salmon;
}


#curriculumContainer {
    position: absolute;
    top: 200px;
    /* left: 5%; */
    background-color: lavender;
    height: 550px;
    width: 90%;
    /* z-index: 10; */
    border: 10px solid salmon;
    outline: 3px solid black;
    transform: translateX(5%);
}

#designOptionsBar {
    visibility: hidden;
}

#curriculumOptionsBar {
    visibility: hidden;
}

#aboutSandyOptionsBar {
    visibility: hidden;
}

#contactOptionsBar {
    visibility: hidden;
}

#optionsBar {
    display: flex;
    background-color: rgb(75, 221, 139);
    height: 65px;
}

#optionsBar > div {
    display: flex;
}

#optionsBar > div > span {
    font-size: 1.2rem;
    background-color: rgb(250, 195, 189);
    padding: 10px;
    margin: 10px;
    border-radius: 5px;
}

#optionsBar > div > span:hover {
    color:white;
    cursor: pointer;
    background-color: rgb(211, 107, 96);
}

#hoverText {
    position: absolute;
    top: 82px;
    left: 10px;
    width: 650px;
    font-size: 1.5em;
    border-left: 15px solid darkgreen;
    height: 41px;
    padding-top: 4px;
    padding-left: 10px;
}

@keyframes moveRight {
    0% {transform: translateX(0px);}
    100% {transform: translateX(470px);}
}

figcaption {
    background-color:rgb(75, 221, 139);
    border-radius: 5px;
    margin: 4px;
}

.unitVocab {
    background-color: rgba(100, 80, 210, 0.9);
    border: 4px solid lightcyan;
    margin: 4px;
    padding: 3px;
    border-radius: 10px;
    width: 250px;
    transform: translateX(2.5%);
    cursor: pointer;
    color: white;
    font-size: 1.3em;
}

#curriculumHeader {
    font-size: 4.1em;
    animation: none;
}

#whatToDo {
    font-size: 2em;
    width: 100%;
}

#allImagesContainer > span > img{
    visibility: hidden;
}

#designOptionsBar {
    visibility: hidden;
}

#curriculumOptionsBar {
    visibility: hidden;
}

#aboutSandyOptionsBar {
    visibility: hidden;
}

#contactOptionsBar {
    visibility: hidden;
}

img+span {
    font-size: 1.2rem;
}

#bodyTheme:hover, #colorTheme:hover, #fallTheme:hover, #geographyTheme:hover, #houseTheme:hover, #plantsTheme:hover, #spaceTheme:hover, #transportationTheme:hover, #waterTheme:hover, #worldCultureTheme:hover{
    transform: translateY(-5%);
}

figure {
    text-align: center;
}

figcaption {
    font-size: 1.2rem;
}

#fourUnitsContainer {
    display:flex;
    align-items: center;
    justify-items: center;
    align-content: center;
    justify-content: center;
    transform: translateY(-72%);
}

@keyframes showSelf {
    0% {border-radius: 80px;}
    100% {border-radius: 10px;}
}

#fourUnitsContainer > figure > img:hover {
    cursor: pointer;
    
}

#fourUnitsContainer > figure > img {
    object-fit: cover;
    width: 250px;
    height: 200px;
    margin: 10px;
    border-radius: 80px;
}

#bodyLine {
    background-image: linear-gradient(rgba(100, 80, 210, 1), darkgreen, darkgreen);
    /* outline: 3px solid rgba(100, 80, 210, 1); */
    border-top: 10px solid rgba(100, 80, 210, 1);
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
    grid-column: 1;
    height: 200px;
    width: 0px;
    grid-row: 2;
    transform: rotate(-60deg) translateY(18px) translateX(130px);
    visibility: visible;
}

#bodyLine::after {
    content: "";
    position: absolute;
    left: 0px;
    top: -1px;
    background-color: rgba(100, 80, 210, 1);
    height: 2px;
    width: 20px;
    z-index: 5;
}

#colorLine {
    background-image: linear-gradient(rgba(100, 80, 210, 1), darkgreen);
    border-top: 10px solid rgba(100, 80, 210, 1);
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
    grid-column: 2;
    height: 175px;
    width: 0px;
    grid-row: 2;
    transform: rotate(-55deg) translateY(-8px) translateX(122px);
    visibility: hidden;
}

#colorLine::after {
    content: "";
    position: absolute;
    left: 0px;
    top: -1px;
    background-color: rgba(100, 80, 210, 1);
    height: 2px;
    width: 20px;
    z-index: 5;
}

#fallLine {
    background-image: linear-gradient(rgba(100, 80, 210, 1), darkgreen);
    border-top: 10px solid rgba(100, 80, 210, 1);
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
    grid-column: 3;
    height: 140px;
    width: 0px;
    grid-row: 2;
    transform: rotate(-45deg) translateY(-45px) translateX(104px);
    visibility: hidden;
}

#fallLine::after {
    content: "";
    position: absolute;
    left: 0px;
    top: -1px;
    background-color: rgba(100, 80, 210, 1);
    height: 2px;
    width: 20px;
    z-index: 5;
}

#geographyLine {
    background-image: linear-gradient(rgba(100, 80, 210, 1), darkgreen);
    border-top: 10px solid rgba(100, 80, 210, 1);
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
    grid-column: 4;
    height: 120px;
    width: 0px;
    grid-row: 2;
    transform: rotate(-30deg) translateY(-80px) translateX(76px);
    visibility: hidden;
}

#geographyLine::after {
    content: "";
    position: absolute;
    left: 0px;
    top: -1px;
    background-color: rgba(100, 80, 210, 1);
    height: 2px;
    width: 20px;
    z-index: 5;
}

#houseLine {
    background-image: linear-gradient(rgba(100, 80, 210, 1), darkgreen);
    border-top: 10px solid rgba(100, 80, 210, 1);
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
    grid-column: 5;
    height: 110px;
    width: 0px;
    grid-row: 2;
    transform: rotate(-15deg) translateY(-104px) translateX(34px);
    visibility: hidden;
}

#houseLine::after {
    content: "";
    position: absolute;
    left: 0px;
    top: -1px;
    background-color: rgba(100, 80, 210, 1);
    height: 2px;
    width: 20px;
    z-index: 5;
}

#plantLine {
    background-image: linear-gradient(rgba(100, 80, 210, 1), darkgreen);
    border-top: 10px solid rgba(100, 80, 210, 1);
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
    grid-column: 6;
    height: 110px;
    width: 0px;
    grid-row: 2;
    transform: rotate(15deg) translateY(-104px) translateX(-48px);
    visibility: hidden;
}

#plantLine::after {
    content: "";
    position: absolute;
    left: 0px;
    top: -1px;
    background-color: rgba(100, 80, 210, 1);
    height: 2px;
    width: 20px;
    z-index: 5;
}

#spaceLine {
    background-image: linear-gradient(rgba(100, 80, 210, 1), darkgreen);
    border-top: 10px solid rgba(100, 80, 210, 1);
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
    grid-column: 7;
    height: 120px;
    width: 0px;
    grid-row: 2;
    transform: rotate(30deg) translateY(-72px) translateX(-90px);
    visibility: hidden;
}

#spaceLine::after {
    content: "";
    position: absolute;
    left: 0px;
    top: -1px;
    background-color: rgba(100, 80, 210, 1);
    height: 2px;
    width: 20px;
    z-index: 5;
}

#transportationLine {
    background-image: linear-gradient(rgba(100, 80, 210, 1), darkgreen);
    border-top: 10px solid rgba(100, 80, 210, 1);
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
    grid-column: 8;
    height: 140px;
    width: 0px;
    grid-row: 2;
    transform: rotate(45deg) translateY(-25px) translateX(-124px);
    visibility: hidden;
}

#transportationLine::after {
    content: "";
    position: absolute;
    left: 0px;
    top: -1px;
    background-color: rgba(100, 80, 210, 1);
    height: 2px;
    width: 20px;
    z-index: 5;
}

#waterLine {
    background-image: linear-gradient(rgba(100, 80, 210, 1), darkgreen);
    border-top: 10px solid rgba(100, 80, 210, 1);
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
    grid-column: 9;
    height: 170px;
    width: 0px;
    grid-row: 2;
    transform: rotate(55deg) translateY(-4px) translateX(-122px);
    visibility: hidden;
}

#waterLine::after {
    content: "";
    position: absolute;
    left: 0px;
    top: -1px;
    background-color: rgba(100, 80, 210, 1);
    height: 2px;
    width: 20px;
    z-index: 5;
}

#worldCultureLine {
    background-image: linear-gradient(rgba(100, 80, 210, 1), darkgreen);
    border-top: 10px solid rgba(100, 80, 210, 1);
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
    grid-column: 10;
    height: 200px;
    width: 0px;
    grid-row: 2;
    transform: rotate(60deg) translateY(16px) translateX(-130px);
    visibility: hidden;
}

#worldCultureLine::after {
    content: "";
    position: absolute;
    left: 0px;
    top: -1px;
    background-color: rgba(100, 80, 210, 1);
    height: 2px;
    width: 20px;
    z-index: 5;
}

#coverLine {
    /* border-top: 5px solid salmon; */
    border-bottom: 5px solid salmon;
    background-image: linear-gradient(darkgreen, salmon);
    grid-column: 3 / 9;
    height: 30px;
    width: 200%;
    grid-row: 3;
    transform: translateY(-265px);
}

div > span {
    display: block;
    text-align: center;
}

#themeContainer {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    justify-items: center;
    align-items: center;
}

#themeContainer > div {
    margin-bottom: 8px;
    padding: 10px;
    display: block;
}

#bodyTheme {
    grid-column: 1 / 2;
}

#colorTheme {
    grid-column: 2 / 3;
}

#fallTheme {
    grid-column: 3 / 4;
}

#geographyTheme {
    grid-column: 4 / 5;
}

#houseTheme {
    grid-column: 5 / 6;
}

#plantsTheme {
    grid-column: 6 / 7;
}

#spaceTheme {
    grid-column: 7 / 8;
}

#transportationTheme {
    grid-column: 8 / 9;
}

#waterTheme {
    grid-column: 9 / 10;
}

#worldCultureTheme {
    grid-column: 10 / 11;
}

#logoFinal {
  height: 56px;
  margin-top: 6px;
  /* border-radius: 15px; */
  transform: translateY(-3px);
  padding:0 20px;

}

#navbar {
    display: flex;
    justify-items: center;
    align-items: center;
    background-image: linear-gradient(darkgreen, lavender, lavender, lavender, lavender, lavender,lavender,lavender,lavender,lavender, salmon);
    border-bottom: 8px solid salmon;
    border-top: 10px solid darkgreen;
    padding: 10px 5px;
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

#navbar > span {
    font-size: 1.6rem;
    padding: 0 15px;
    margin: auto;
    /* background: salmon; */
    color: gray;
    /* padding: 9px; */
    border-radius: 5px;
}

#navbar > span:hover {
    color:black;
    cursor: default;
} 

#logoFinal {
    border-color: salmon;
}

</style>