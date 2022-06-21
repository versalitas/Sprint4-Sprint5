const {Players} = require('../models/game.js');
const Sequelize = require('sequelize');


const addPlayer = async (req,res) => {
    
    try {
        const userName = req.body.username.toLowerCase();
        let player = '';
    
        if(userName) {
            const duplicateName = (Players.findOne({where: {name: userName}}));
            
            if(duplicateName){
                  return res.status(400).send({status: 'fail', message: 'Duplicated data'})
                }

            player = await Players.create({ name: userName });
        
        } else {
            //anonymous is default
            player = await Players.create();
        }

        res.status(200).send({status: 'success', message: 'Player has been created correctly.'})

        } catch (err) {
        res.status(500).send({
            status: 'error',
            message: err.message
        })
    }
}


const updatePlayer = async (req,res) => {
    

   try {
        
        const userId = parseInt(req.params.id);
        const userName = req.body.username;

        //search for user
        const player = await Players.findOne({ where: {id : userId}});
        
        //if id correspond to registered user
        if(!player) {
            return res.status(400).send({status: 'fail', message: 'Bad request: player id not valid.'})
        }
        //if req.body contains username
        if(!userName || userName == 'undefined'){
            return res.status(400).send({status: 'fail', message: 'Bad request: username not defined.'})
        }
        //if userName is unique
       
        
      
        //update property
        
        res.status(200).send({status: 'success', message: "Player's name has been updated correctly."})

    } catch(err) {
            res.status(500).send({
                status: 'error',
                message: err.message
            })
    }

   const showPlayer = async(req, res) => {
       try {

        let players = await Players.findAll();




        } catch(err) {
            res.status(500).send({
                status: 'error',
                message: err.message
            })
    }


module.exports = {addPlayer, updatePlayer, showPlayer};
//module.exports = addPlayer;