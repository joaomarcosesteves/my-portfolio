
const router = require('express').Router();

const Portfolio = require('../models/ModelPortfolio')

router.get('/', async (req, res) => {
    try{
        const portfolio = await Portfolio.find();
        res.json({
            success: true,
            data: portfolio
        })
    }catch(err){
        res.json({
            success: true,
            data: err 
        })
        console.log(err)
    }
})


router.get('/:slug', async (req, res) => {
    try{
        const portfolioSlug = await Portfolio.findOne({
            slug: req.params.slug
        })
        res.json({
            success: true,
            data: portfolioSlug
        })
    }catch(err){
        res.json({
            success: true,
            data: err 
        })
        console.log(err)
    }
})



 router.post('/', async (req, res) => {
     const portfolio = new Portfolio({
        title: req.body.title,
        description: req.body.description
    });

/*     portfolio
        .save()
        .then((data) => {
            res.json({
                success: true,
                data
            })
        })
        .catch((err) => {
            res.json({
                success: false,
            })
            console.log(err)
        }) */

     try{
        const savePortfolio = await portfolio.save()
        res.json({
            success: true,
            data: savePortfolio
        });
    }catch(err){
        res.send({err});
        console.log(err);
    }  
})

router.patch('/:slug', async (req, res) => {
    try{
        const updatePortfolio = await Portfolio.updateOne({
            slug: req.params.slug
        },
        {
            title: req.body.title,
            description: req.body.description
        })
        res.json({
            success: true,
            updated: updatePortfolio.nModified
        })
    }catch(err){
        res.json({
            success: true,
            data: err 
        })
        console.log(err)
    }
})

router.delete('/:slug', async (req, res) => {
    try{
        const deletePortfolio = await Portfolio.deleteOne({
            slug: req.params.slug
        })
        
        res.json({
            success: true,
            deleted: deletePortfolio.deletedCount
        })
    }catch(err){
        res.json({
            success: true,
            data: err 
        })
        console.log(err)
    }
})


module.exports = router