const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
    progName: String,
    theme: String,
    imageName: String,
    photo: String,
    unit: Number,
    numberInUnit: Number,
    vocabulary: String,
    numSyll: Number,
    syllStructure: String,
    abSentence: String,
    bcSentence: String,
    abQuestionDomain: String,
    abQuestion: String,
    bcQuestionDomain: String,
    bcQuestion: String,
    alliteration1: String,
    alliteration2: String,
    alliteration3: String,
    rhyme1: String,
    rhyme2: String,
    rhyme3: String,
    kindergartenSocialInstructionalQuestion: String,
    kindergartenScienceQuestion: String,
    kindergartenMathQuestion: String,
    kindergartenAssociatedLiterature: String,
    kindergartenAssociatedLiteratureAuthor: String,
    firstGradeSocialInstructionalQuestion: String,
    firstGradeScienceQuestion: String,
    firstGradeMathQuestion: String,
    firstGradeAssociatedLiterature: String,
    firstGradeAssociatedLiteratureAuthor: String,
});

module.exports = mongoose.model("Product", ProductSchema);