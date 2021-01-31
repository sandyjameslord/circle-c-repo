const router = require('express').Router();
const Product = require('../models/product');

const upload = require("../middlewares/upload-photo");

router.post("/products", upload.single("photo"), async (req, res) => {
    try {
        let product = new Product();
        product.progName = req.body.progName;
        product.theme = req.body.theme;
        product.imageName = req.body.imageName;
        product.photo = req.file.location;
        product.unit = req.body.unit;
        product.numberInUnit = req.body.numberInUnit;
        product.vocabulary = req.body.vocabulary;
        product.numSyll = req.body.numSyll;
        product.syllStructure = req.body.syllStructure;
        product.abSentence = req.body.abSentence;
        product.bcSentence = req.body.bcSentence;
        product.abQuestionDomain = req.body.abQuestionDomain;
        product.abQuestion = req.body.abQuestion;
        product.bcQuestionDomain = req.body.bcQuestionDomain;
        product.bcQuestion = req.body.bcQuestion;
        product.alliteration1 = req.body.alliteration1;
        product.alliteration2 = req.body.alliteration2;
        product.alliteration3 = req.body.alliteration3;
        product.rhyme1 = req.body.rhyme1;
        product.rhyme2 = req.body.rhyme2;
        product.rhyme3 = req.body.rhyme3;
        product.kindergartenSocialInstructionalQuestion = req.body.kindergartenSocialInstructionalQuestion;
        product.kindergartenScienceQuestion = req.body.kindergartenScienceQuestion;
        product.kindergartenMathQuestion = req.body.kindergartenMathQuestion;
        product.kindergartenAssociatedLiterature = req.body.kindergartenAssociatedLiterature;
        product.kindergartenAssociatedLiteratureAuthor = req.body.kindergartenAssociatedLiteratureAuthor;
        product.firstGradeSocialInstructionalQuestion = req.body.firstGradeSocialInstructionalQuestion;
        product.firstGradeScienceQuestion = req.body.firstGradeScienceQuestion;
        product.firstGradeMathQuestion = req.body.firstGradeMathQuestion;
        product.firstGradeAssociatedLiterature = req.body.firstGradeAssociatedLiterature;
        product.firstGradeAssociatedLiteratureAuthor = req.body.firstGradeAssociatedLiteratureAuthor;

        await product.save()

        res.json({
            status: true,
            message: "A complete image Product successfully saved"
        });

    } catch (err) {
        res.status(500).json({
            success: false,
            message: err.message
        });
    }
});

router.get("/products", async (req, res) => {
    try {
        let products = await Product.find();
        res.json({
            success: true,
            products: products
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: err.message
        });
    }
});

// router.get("/products/:id", async (req, res) => {
//     try {
//         let product = await Product.findOne({ _id: req.params.id });
//         res.json({
//             success: true,
//             product: product
//         });
//     } catch (err) {
//         res.json({
//             success: false,
//             message: err.message
//         });
//     }
// });

// router.put("/products/:id", upload.single("photo"), async (req, res) => {
//     try {
//         let product = await Product.findOneAndUpdate(
//             {_id: req.params.id},
//             {
//                 $set: {
//                     progName: req.body.progName,
//                     theme: req.body.theme,
//                     imageName: req.body.imageName,
//                     photo: req.file.location,
//                     vocabulary: req.body.vocabulary,
//                     numSyll: req.body.numSyll,
//                     syllStructure: req.body.syllStructure,
//                     abSentence: req.body.abSentence,
//                     bcSentence: req.body.bcSentence,
//                     abQuestionDomain: req.body.abQuestionDomain,
//                     abQuestion: req.body.abQuestion,
//                     bcQuestionDomain: req.body.bcQuestionDomain,
//                     bcQuestion: req.body.bcQuestion,
//                     alliteration1: req.body.alliteration1,
//                     alliteration2: req.body.alliteration2,
//                     alliteration3: req.body.alliteration3,
//                     rhyme1: req.body.rhyme1,
//                     rhyme2: req.body.rhyme2,
//                     rhyme3: req.body.rhyme3,
//                     kindergartenSocialInstructionalQuestion: req.body.kindergartenSocialInstructionalQuestion,
//                     kindergartenScienceQuestion: req.body.kindergartenScienceQuestion,
//                     kindergartenMathQuestion: req.body.kindergartenMathQuestion,
//                     kindergartenAssociatedLiterature: req.body.kindergartenAssociatedLiterature,
//                     kindergartenAssociatedLiteratureAuthor: req.body.kindergartenAssociatedLiteratureAuthor,
//                     firstGradeSocialInstructionalQuestion: req.body.firstGradeSocialInstructionalQuestion,
//                     firstGradeScienceQuestion: req.body.firstGradeScienceQuestion,
//                     firstGradeMathQuestion: req.body.firstGradeMathQuestion,
//                     firstGradeAssociatedLiterature: req.body.firstGradeAssociatedLiterature,
//                     firstGradeAssociatedLiteratureAuthor: req.body.firstGradeAssociatedLiteratureAuthor,
//                     unit: req.body.unit,

//                 }
//             }
//         )

//     } catch (err) {

//     }
// });





module.exports = router;