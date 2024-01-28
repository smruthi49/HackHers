require('dotenv').config();
const express = require('express');
const app = express();
const fileUpload = require('express-fileupload');
app.use(
    fileUpload({
        extended:true
    })
)

app.use(express.static(__dirname));
app.use(express.json());
const path = require('path');
const ethers = require('ethers');

var port = 3000;

const API_URL = process.env.API_URL;
const PRIVATE_KEY = process.env.PRIVATE_KEY;
const CONTRACT_ADDRESS = process.env.CONTRACT_ADDRESS;

const {abi} = require("./artifacts/contracts/Voting.sol/Voting.json");
const provider = new ethers.providers.JsonRpcProvider(API_URL);
const signer = new ethers.Wallet(PRIVATE_KEY, provider);
const contractInstance = new ethers.Contract(CONTRACT_ADDRESS, abi,signer);

app.get("/",(req,res) => {
    res.sendFile(path.json(__dirname, "index.html"));
})

app.get("/index.html",(req,res) => {
    res.sendFile(path.json(__dirname, "index.html"));
})

app.post("/add_cand",async(req,res) => {
    var vote = req.body.vote;
    console.log(vote);
    async function Data_Block(vote){
        console.log("Adding Candidate...");
        const tx = await contractInstance.cand_add(vote);
        await tx.wait();
    }
    const bool = await contractInstance.get_voting_status();
    if (bool == true) {
        await Data_Block(vote);
        res.send("The candidate has been registered in the smart contract");
    }

    else{
        res.send("Voting is Done!");
    }
})

app.listen(port,function() {
    console.log("App is listening on port 3000");
})