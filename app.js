const express = require('express');
const http = require('http');
const bodyparser = require('body-parser');
const cors = require('cors');

const app = express();
const server = http.createServer(app);

const PORT = 3000;

app.use(bodyparser.json());
app.use(express.static(__dirname + '/public'));
app.use(bodyparser.urlencoded({extended:true}));
app.use(cors());

const questions = require('./faq.js');

let status = '0_main';
let stage = 0;

function faqs(input=''){
    if(status === '0_main'){
        switch (input){
            case '1': {
                status = '1_gq';
                return(questions['gq']);
            }
            case '2': {
                status = '1_bitrix';
                return(questions['bitrix']);
            }
            case '3': {
                status = '1_lp1';
                return(questions['lp1']['q']);
            }
            case '4': {
                status = '1_lp2';
                return(questions['lp2']['q']);
            }
            case '5': {
                status = '1_lp3';
                return(questions['lp3']['q']);
            }
            case '6': {
                status = '1_livepro';
                return(questions['livepro']['q']);
            }
            default: return('Please select appropriate option');
        }
    }

    else if(status === '1_gq'){
        switch (input){
            case '1': return(questions['dates']);
            case '2':{
                status = '2_newjoinee';
                return(questions['newjoinee']['q']);
            }
            case '3':{
                status = '2_ic';
                return(questions['ic']['q']);
            }
            case '4':{
                status = '2_tech';
                return(questions['tech']['q']);
            }
            case '5':{
                status = '2_completion';
                return(questions['completion']['q']);
            }
            case '#':{
                status = '0_main';
                return(questions['main']);
            }
            default: return('Please select appropriate option');
        }
    }

    else if(status === '2_newjoinee'){
        switch(input){
            case '1': return(questions['newjoinee']['a']['1']); 
            case '2': return(questions['newjoinee']['a']['2']);
            case '3': return(questions['newjoinee']['a']['3']);
            case '4': return(questions['newjoinee']['a']['4']);
            case '5': return(questions['newjoinee']['a']['5']);
            case '6':{
                status = '3_other';
                return(questions['other']['q']);
            }
            case '*': {
                status = '1_gq';
                return(questions['gq']);
            }
            case '#': {
                status = '0_main';
                return(questions['main']);
            }
            default: return('Please select appropriate option');
        }
    }

    else if(status === '2_ic'){
        switch(input){
            case '1': return(questions['ic']['a']['1']);
            case '2': return(questions['ic']['a']['2']);
            case '3': return(questions['ic']['a']['3']);
            case '4': return(questions['ic']['a']['4']);
            case '5': return(questions['ic']['a']['5']);
            case '*': {
                status = '1_gq';
                return(questions['gq']);
            }
            case '#': {
                status = '0_main';
                return(questions['main']);
            }
            default: return('Please select appropriate option');
        }
    }

    else if(status === '2_tech'){
        switch(input){
            case '1': return(questions['tech']['a']['1']);
            case '2': return(questions['tech']['a']['2']);
            case '3': return(questions['tech']['a']['3']);
            case '4': return(questions['tech']['a']['4']);
            case '*': {
                status = '1_gq';
                return(questions['gq']);
            }
            case '#': {
                status = '0_main';
                return(questions['main']);
            }
            default: return('Please select appropriate option');
        }
    }

    else if(status === '2_completion'){
        switch(input){
            case '1': return(questions['completion']['a']['1']);
            case '2': return(questions['completion']['a']['2']);
            case '3': return(questions['completion']['a']['3']);
            case '*': {
                status = '1_gq';
                return(questions['gq']);
            }
            case '#': {
                status = '0_main';
                return(questions['main']);
            }
            default: return('Please select appropriate option');
        }
    }

    else if(status === '3_other'){
        switch(input){
            case '1': return(questions['other']['a']['1']);
            case '2': return(questions['other']['a']['2']);
            case '*': {
                status = '2_newjoinee';
                return(questions['newjoinee']['q']);
            }
            case '#': {
                status = '0_main';
                return(questions['main']);
            }
            default: return('Please select appropriate option');
        }
    }

    else if(status === '1_bitrix'){
        switch (input){
            case '1': {
                status = '2_bitrix';
                return(questions['bitrix24']['q']);
            }
            case '2':{
                status = '2_workgroups';
                return(questions['workgroups']['q']);
            }
            case '3':{
                status = '2_clockin';
                return(questions['clockin']['q']);
            }
            case '4':{
                status = '2_tasks';
                return(questions['tasks']['q']);
            }
            case '#':{
                status = '0_main';
                return(questions['main']);
            }
            default: return('Please select appropriate option');
        }
    }

    else if(status === '2_bitrix'){
        switch (input){
            case '1': return(questions['bitrix24']['a']['1']);
            case '2': return(questions['bitrix24']['a']['2']);
            case '3': return(questions['bitrix24']['a']['3']);
            case '*': {
                status = '1_bitrix';
                return(questions['bitrix']);
            }
            case '#': {
                status = '0_main';
                return(questions['main']);
            }
            default: return('Please select appropriate option');
        }
    }

    else if(status === '2_workgroups'){
        switch (input){
            case '1': return(questions['workgroups']['a']['1']);
            case '2': return(questions['workgroups']['a']['2']);
            case '*': {
                status = '1_bitrix';
                return(questions['bitrix']);
            }
            case '#': {
                status = '0_main';
                return(questions['main']);
            }
            default: return('Please select appropriate option');
        }
    }

    else if(status === '2_clockin'){
        switch (input){
            case '1': return(questions['clockin']['a']['1']);
            case '2': return(questions['clockin']['a']['2']);
            case '3': return(questions['clockin']['a']['3']);
            case '4': return(questions['clockin']['a']['4']);
            case '5': return(questions['clockin']['a']['5']);
            case '6': return(questions['clockin']['a']['6']);
            case '7': return(questions['clockin']['a']['7']);
            case '*': {
                status = '1_bitrix';
                return(questions['bitrix']);
            }
            case '#': {
                status = '0_main';
                return(questions['main']);
            }
            default: return('Please select appropriate option');
        }
    }

    else if(status === '2_tasks'){
        switch (input){
            case '1': return(questions['tasks']['a']['1']);
            case '2': return(questions['tasks']['a']['2']);
            case '3': return(questions['tasks']['a']['3']);
            case '4': return(questions['tasks']['a']['4']);
            case '*': {
                status = '1_bitrix';
                return(questions['bitrix']);
            }
            case '#': {
                status = '0_main';
                return(questions['main']);
            }
            default: return('Please select appropriate option');
        }
    }

    else if(status === '1_lp1'){
        switch (input){
            case '1': return(questions['lp1']['a']['1']);
            case '2':{
                stage = 1;
                status = '2_token';
                return(questions['token']['q']);
            }
            case '3':{
                stage = 1;
                status = '2_quiz';
                return(questions['quiz']['q'])
            }
            case '4': return(questions['lp1']['a']['4']);
            case '5': return(questions['lp1']['a']['5']);
            case '#': {
                status = '0_main';
                return(questions['main']);
            }
            default: return('Please select appropriate option');
        }
    }

    else if(status === '1_lp2'){
        switch (input){
            case '1': return(questions['lp2']['a']['1']);
            case '2':{
                stage = 2;
                status = '2_token';
                return(questions['token']['q']);
            }
            case '3':{
                stage = 2;
                status = '2_quiz';
                return(questions['quiz']['q'])
            }
            case '4': return(questions['lp2']['a']['4']);
            case '5': return(questions['lp2']['a']['5']);
            case '#': {
                status = '0_main';
                return(questions['main']);
            }
            default: return('Please select appropriate option');
        }
    }

    else if(status === '2_token'){
        switch (input){
            case '1': return(questions['token']['a']['1']);
            case '2': return(questions['token']['a']['2']);
            case '3': return(questions['token']['a']['3']);
            case '4': return(questions['token']['a']['4']);
            case '5': return(questions['token']['a']['5']);
            case '*': {
                if(stage === 1){
                    status = '1_lp1';
                    return(questions['lp1']['q']);
                }
                else if(stage === 2){
                    status = '1_lp2';
                    return(questions['lp2']['q']);
                }
            }
            case '#': {
                status = '0_main';
                return(questions['main']);
            }
            default: return('Please select appropriate option');
        }
    }

    else if(status === '2_quiz'){
        switch (input){
            case '1': return(questions['quiz']['a']['1']);
            case '2': return(questions['quiz']['a']['2']);
            case '3': return(questions['quiz']['a']['3']);
            case '*': {
                if(stage === 1){
                    status = '1_lp1';
                    return(questions['lp1']['q']);
                }
                else if(stage === 2){
                    status = '1_lp2';
                    return(questions['lp2']['q']);
                }
            }
            case '#': {
                status = '0_main';
                return(questions['main']);
            }
            default: return('Please select appropriate option');
        }
    }

    else if(status === '1_lp3'){
        switch (input){
            case '1': return(questions['lp3']['a']['1']);
            case '2': return(questions['lp3']['a']['2']);
            case '3': return(questions['lp3']['a']['3']);
            case '4': return(questions['lp3']['a']['4']);
            case '5': return(questions['lp3']['a']['5']);
            case '#': {
                status = '0_main';
                return(questions['main']);
            }
            default: return('Please select appropriate option');
        }
    }

    else if(status === '1_livepro'){
        switch (input){
            case '1': return(questions['livepro']['a']['1']);
            case '2': return(questions['livepro']['a']['2']);
            case '3': return(questions['livepro']['a']['3']);
            case '4': return(questions['livepro']['a']['4']);
            case '5': return(questions['livepro']['a']['5']);
            case '6': return(questions['livepro']['a']['6']);
            case '#': {
                status = '0_main';
                return(questions['main']);
            }
            default: return('Please select appropriate option');
        }
    }
}


app.post('/',(req,res)=>{
    if(req.body.state){
        status = '0_main';
        res.json(questions.main);
    }
    else{
        let input = req.body.input;
        res.json(faqs(input));
    }
});


server.listen(PORT,()=>{
    console.log(`Server started at port ${PORT}`);
})