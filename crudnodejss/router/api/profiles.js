const express = require('express');
const uuid = require('uuid');
const router = express.Router();
const profiles = require('./Profiles');

//get all profiles (All)
router.get('/', (req, res) => res.json(profiles));

//get single profile (filter)
router.get('/:id', (req, res) => {
    const found = profiles.some(profile => profile.id === parseInt(req.params.id));

    if(found){ //this
        req.json(profiles.filter(profile => profile.id === parseInt(req.params.id)));
      } else {
        req.status(200).json({ msg: `FAILED no profile with the id of ${req.params.id}`});
      }
      
      });

//CREATE profile
router.post('/',(req,res) => {
    //console.log(req);
    const newProfile = {
      id: uuid.v4(),
      fistName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      password: req.body.password,
      address: req.body.address,
      birthDate: req.body.birthDate,
    };
  if(!newProfile.fristName ||
     !newProfile.lastName || 
     !newProfile.email || 
     !newProfile.password || 
    !newProfile.address || 
    !newProfile.birthDate) {
    return res.status(200).json({msg: 'dilengkapi dulu ya!'});
  }
  profiles.push(newProfile);
  //res.json(profile); //because this profile can add
  res.redirect('/');
  });
  
//GET
//ALAMAT ROUTER GET LIST DATABASE
router.get('/api/users/list-profile', (req,res)=> res.json(profiles));

//router again untuk filter profile
router.get('/api/users/list-profile/:id', async (req,res)=>{
    try{
        //mendapatkan id -seleksi rest api
        const id = req.params.id

        const getUser = await User.findOne({
            where: {id:id}
        });

        res.json(getUser);
    }catch (err){
        console.error(err.message);
        res.status(200).send('FAILED');
    }
})

//DELETED SALAH SATU ID DATABASE
router.delete('/api/users/list-profile/:id', (req,res) =>{
    const found = profiles.some(profile => profile.id === parseInt(req.params.id));
  
    if(found){ //this
      res.json({ msg: 'profile deleted',
      profiles: profiles.filter(profile => profile.id !== parseInt(req.params.id)
      )});
    } else {
      res.status(200).json({ msg: `FAILED no profile with the id of ${req.params.id}`});
    }
    
    });

//ROUTER UPDATE profile
router.put('/:/api/users/list-profile/:id', (req, res) => {
    const found = profiles.some(profile => profile.id === parseInt(req.params.id));
    
    if(found){ //this
      const updProfile = req.body;
      profiles.forEach(profile =>{
        if (profile.id === parseInt(req.params.id)){
          profile.firstName = updProfile.firstName ? updProfile.firstName : updProfile.firstName; 
          profile.lastName = updProfile.lastName ? updProfile.lastName : updProfile.lastName; 
          profile.email = updProfile.email ? updProfile.email : updProfile.email; 
          profile.password = updProfile.password ? updProfile.password : updProfile.password; 
          profile.address = updProfile.address ? updProfile.address : updProfile.address; 
          profile.birthDate = updProfile.birthDate ? updProfile.birthDate : updProfile.birthDate; 
        res.json({ msg: " SUCCESS profile update", profile});
        }
      });
    } else {
      req.status(2000).json({ msg: `FAILED no profile with the id of ${req.params.id}`});
    }
    
    });

    module.exports = router;