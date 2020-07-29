// Questions:
// Main Menu
const main = `<div class="server"><p class="smsg">Hi, how may I help you?<br/>
Please reply with the numbers to the corresponding questions.<br/>
1. General IP Queries<br/>
2. Bitrix24<br/>
3. Learning Path 1<br/>
4. Learning Path 2<br/>
5. Learning Path 3<br/>
6. Live Projects<br/></p></div>`;


// General Queries Menu:
const gq = `Please reply with the numbers to the corresponding questions.<br/>
1. Dates<br/>
2. New Joinee<br/>
3. Internship & College<br/>
4. Technology<br/>
5. Completion<br/><br/>
# Main Menu`;

const dates = `Start Date: March 01, 2020<br/>End Date: July 31, 2020`;

const newjoinee = {q:`Please reply with the numbers to the corresponding questions.<br/>
1. Starting with Internship<br/>
2. Induction<br/>
3. Joining Letter<br/>
4. Job Profile<br/>
5. Company Policies<br/>
6. Other<br/><br/>
* Previous Menu<br/>
# Main Menu`,
a:{
    1:`Please go through the mail from which you have accepted the invite and check the task section as well.`,
    2:`As a precautionary measure to safeguard our intern’s health, we have decided to conduct all the inductions online. We have created a separate page with a pre-recorded induction, please visit it; https://www.cloudcounselage.co.in/ipinduction`,
    3:`If you had not attended the live induction and have registered in the pre-recorded session after 4 PM, 31st March. Then you'll get your joining letter by 30th April 2020. If you have otherwise, please a mail to hrsupport@cloudcounselage.in or ping 'Cloud Counselage HR' in B24.`,
    4:`Your job profile is 'Technology - Intern'; if you're in cloud computing technology to update in your LinkedIn or resume, you can write as 'Cloud Computing - Intern'. Yes, you'll only work in the technology you're selected for but you can take the training of other technologies.`,
    5:`The company policies will be published on www.cloudcounselage.co.in/ippolicies`
}};

const other = {q:`Please reply with the numbers to the corresponding questions.<br/>
1. I have got another attachment called ‘noname’ or ‘win.dat’ with my Appointment letter, what should I do about it? Will it cause any harm?<br/>
2. Could I have done this training from other websites/ resources?<br/><br/>
* Previous Menu<br/>
# Main Menu`,
a:{
    1:`We have observed that there is such an attachment for a few mailing service providers like Gmail and yahoo, please ignore this attachment. It won’t cause any harm to your system.`,
    2:`Yes, you could have but the reason to have these videos is to keep an enclosed environment for you to watch these tutorials without distractions with quizzes and forums for you to discuss in. As mentioned earlier, our main aim is to provide you with a starting point and baseline for the technology of your choice.`,
}};

const ic = {q:`Please reply with the numbers to the corresponding questions.<br/>
1. Is it okay to mention this internship as ongoing for college records?<br/>
2. University Exam<br/>
3. Can we do another internship with IP?<br/>
4. Can my friends still apply for the Internship Program (IP)?<br/>
5. One of my friends had applied for the IP but she didn't receive any further updates.<br/><br/>
* Previous Menu<br/>
# Main Menu`,
a:{
   1:`Yes, we'll provide every intern a joining letter as soon as all interns are inducted.`,
   2:`We have provided our interns with preparatory leave from the exam season, nevertheless, you are free to work on your LP3 assignment, but we suggest to concentrate on your exams first.`,
   3:`es, you can do another internship outside of Cloud Counselage but please ensure to provide 1 hour a day or 7 hours a week for IP.`,
   4:`Yes, your friends can apply till the 30th of March 2020; https://www.cloudcounselage.com/ipmaharashtra/. To be a student representative of Cloud Counselage, please contact Cloud Counselage HR.`,
   5:`Please ask them to send a mail to hrsupport@cloudcounselage.in and wait till 30th April 2020 for a reply.`
}};

const completion = {q:`Please reply with the numbers to the corresponding questions.<br/>
1. Can we be hired by Cloud Counselage after this internship?<br/>
2. Visiting office<br/>
3. Can we extend this internship?<br/><br/>
* Previous Menu<br/>
# Main Menu`,
a:{
    1:`All our current interns if performing well in our internship programs can be offered an opportunity to interview for various positions in Cloud Counsealge. Many of our now full-time employees were interns in Cloud Counselage.`,
    2:`As this is an online internship you do not need to visit the offices in the duration of this internship. You will be requested to visit the Vikhroli office only once; i.e. on your internship convocation day which will be in July 2020. Nevertheless, you can visit our offices with an appointment.`,
    3:`Yes, you can extend your internship by being part of our other online programs like, ‘Online Career Program’.`
}};

const tech = {q:`Please reply with the numbers to the corresponding questions.<br/>
1. I have not been added to the technology I preferred to work on?<br/>
2. If we are working on more than one technology, are those technologies added to the certificate?<br/>
3. Can I switch my technology now?<br/>
4. Can I learn multiple technologies and do an internship in both?<br/><br/>
* Previous Menu<br/>
# Main Menu`,
a:{
   1:`We do understand that you might be interested in other technologies and are eager to learn more, but we have prescribed the technologies based on your first inputs and cannot change your base technology. Nevertheless, you do have the opportunity to go through the training of all the technologies.`,
   2:`You are not restricted from doing the training of other technologies but you will only be given an internship certificate of the technology you’re selected for.`,
   3:`You cannot switch the technology currently. You have to continue with the one you are selected for. In the case of multiple form entries, you just got selected for one of them; the first one that you entered. You cannot make a switch right now.`,
   4:`You can learn both the technologies using Learning Path 2 (LP2) which will begin after the 2nd week of March, but your internship will only be continuing with the one you are selected for.`
}};



// Bitrix Menu:
const bitrix = `Please reply with the numbers to the corresponding questions.<br/>
1. Bitrix24<br/>
2. Workgroups<br/>
3. Clock-In & Work Report<br/>
4. Tasks<br/><br/>
# Main Menu`;

const bitrix24 = {q:`Please reply with the numbers to the corresponding questions.<br/>
1. New Joinee Access to Bitrix24<br/>
2. Unable to access Bitrix account<br/>
3. Efficiency is zero or low<br/><br/>
* Previous Menu<br/>
# Main Menu`,
a:{
    1:`If you have submitted the ‘New Joinee Form’ after the 1st of March, please wait till the 31st of March to receive your access.`,
    2:`Go to https://cloudcounselage24.bitrix24.com/ On the Login page, In the, ‘Enter the phone number or email’, type in your email id that you have registered with Cloud Counselage and Click ‘Forgot Password’. In case the problem persists, please write a mail to hrsupport@cloudcounselage.in`,
    3:`Ensure that you have clicked ‘Start’ when you resume a task, the ‘Finish’ button gets active only after the task is started. Once you complete the task you can then click on ‘Finish’ and then the efficiency is updated in the system. However, please raise this issue with the Cloud Counselage HR, as they will look at it on a case to case basis.`
}};

const workgroups = {q:`Please reply with the numbers to the corresponding questions.<br/>
1. No. of Workgroups<br/>
2. No workgroup visible<br/><br/>
* Previous Menu<br/>
# Main Menu`,
a:{
    1:`Every intern should be a part of 2 workgroups.<br/>
    1. "202003-IP"  -- This is a general workgroup. Everyone who is enrolled in IP should be a part of this workgroup.<br/>
    2. "202003-IP-Technology"  -- This is a technology-specific workgroup. You'll be added to the technology you had enrolled for. For example "202003-IP-Python" for students who enrolled for python.<br/>
    If anyone has not been added to any of these workgroups, kindly message "Cloud Counselage HR " regarding the same over bitrix24 platform.<br/>`,
    2:`Please ensure that you have connected to the drive of that workgroup by going to your notification and connecting to the drive of that workgroup. If that is done, please try to search for your workgroup in the search bar at the top of your screen. To search, use the keywords, 202003-IP-TechnologyName. Ex "202003-IP-DevOps". In case there is no invitation to you, please message Cloud Counselage HR. You will be added to 2 groups “202003-IP” which is a general workgroup and the other one is “202003-IP-Technology” which is a technology-specific workgroup.`
}};

const clockin = {q:`Please reply with the numbers to the corresponding questions.<br/>
1. Minimum duration of clock-in<br/>
2. Is it necessary to clock-in if I am done with my tasks?<br/>
3. Forgot to clock-in for few days<br/>
4. In my work time I can see one exclamation mark?/ What does the remaining time mean?<br/>
5. What to do with work reports?<br/>
6. How to check weekly hours?<br/>
7. No acknowledgement of weekly report<br/><br/>
* Previous Menu<br/>
# Main Menu`,
a:{
    1:`Our interns need to only make sure that they are online for 1 hour per day or 7 hours a week.`,
    2:`Yes, it is mandatory to do, we are trying to include some more tasks due to the current scenarios, but adherence to clock-in/ clock-out policy is utterly important.`,
    3:`This could have an adverse effect on your internship, please contact Cloud Counsealge HR and provide a genuine reason to miss clock in/ clock out. Also, please start performing your clock in/ clock out now.`,
    4:`It is showing the remaining time because it's configured for 8 working hours per day. Our interns need to only make sure that they are online for 1 hour per day or 7 hours a week.`,
    5:`As mentioned in the video, please write what you have done this week and request approval from your supervisor by clicking on "send to supervisor".`,
    6:`In the menu select 'time and reports' ->worktime and then you could see your worktime or click on this link once you’re logged in to Bitrix24; https://cloudcounselage24.bitrix24.com/timeman/timeman.php`,
    7:`Once you submit your weekly report, your supervisor and the HR team shall take the cognizance. They would reach out to you in case of discrepancies, so you need not worry about the confirmation.`
}};

const tasks = {q:`Please reply with the numbers to the corresponding questions.<br/>
1. Unable to see tasks<br/>
2. Pressed "finish" the task, but want to resume.<br/>
3. Social Media task pending<br/>
4. Induction task<br/><br/>
* Previous Menu<br/>
# Main Menu`,
a:{
    1:`Please remove the default "In Progress" from your filter of the task section and try.`,
    2:`You can go back to that task and then click on 'More' and then 'resume' to restart that task.`,
    3:`Our team will verify and then only your task shall be accepted as completed. Please wait till the verification's complete.`,
    4:`Yes, you can just finish the task if attended the live induction session on 22nd of march. Although, you can always revisit the induction so that you can review what has been said in it.`
}};


// LP1 Menu:
const lp1 = {q:`Please reply with the numbers to the corresponding questions.<br/>
1. Dates<br/>
2. Training & Tokens<br/>
3. Quiz<br/>
4. Completing LP1<br/>
5. Is it necessary to attend LP1 for other domains as well if we want to take its training?<br/><br/>
# Main Menu`,
a:{
    1:`LP1 - March 01, 2020<br/>All learning Paths (LP) are expected to be completed by the interns before the first week of June as Live Projects will begin in that time frame.`,
    4:`Mark your task as finished and wait for the next instructions.`,
    5:`LP1 training is common across all the technologies including cloud computing.`
}};


// LP2 Menu:
const lp2 = {q:`Please reply with the numbers to the corresponding questions.<br/>
1. Dates<br/>
2. Training & Tokens<br/>
3. Quiz<br/>
4. Completing LP2<br/>
5. IP2 Video taking long to load<br/>
# Main Menu`,
a:{
    1:`LP2 - 18/03/2020<br/>All learning Paths (LP) are expected to be completed by the interns before the first week of June as Live Projects will begin in that time frame.`,
    4:`Mark your task as finished and wait for the next instructions.`,
    5:`We have uploaded the videos of the highest quality and best resolution which has resulted in some videos being over 1 GB as they are of hours in duration. To experience these high definition videos we request you to wait at least 5 minutes or more; depending on your computer's RAM and internet connection.`
}};

const token = {q:`Please reply with the numbers to the corresponding questions.<br/>
1: Unable to view a page or site aks to login even after logging in.<br/>
2: Do I need to register every time I do different tasks of lp1?
3: I have complete one training, I didn't find any options to continue my training.
4: Token Issues<br/>
5: Skipping Training<br/><br/>
* Previous Menu<br/>
# Main Menu`,
a:{
    1:`This could be because of some issue in the cookies or extension in your browser. Please try again with a different browser or open the tab with incognito mode. Also, you don't need to record your results, the quizzes are only for your knowledge check and not a metric to score you.`,
    2:`There are codes in the LP1 assignment, and you need to register for every module of training, please check your task description.`,
    3:`Go back to the technology Page. Enter the respective tokens and then work. follow the same process every time.`,
    4:`For each training of LP1, there are different tokens. Please read the tasks or watch the videos again meticulously. Try accessing it in incognito mode.`,
    5:`No, these pieces of training will cover basics and there is no harm in brushing up your skills before you start with the assignments later.`
}};

const quiz = {q:`Please reply with the numbers to the corresponding questions.<br/>
1: How do I access my quiz?<br/>
2: Unable to access the quiz<br/>
3: Quiz results and certification<br/><br/>
* Previous Menu<br/>
# Main Menu`,
a:{
    1:`As mentioned in the video:-<br/>Step1: Go to lp1 module<br/>Step2: Select module<br/>Step3: Put token (it will direct you to the home screen if the token is correct)<br/>Step4: Again go to lp1 module n select that module<br/>Step5: You will get the access by now<br/>Step6: Register there (each time for every module)<br/>Step7: Give the quiz<br/>Step8: Logout`,
    2:`Please retry after some time in an incognito window`,
    3:`They are just for your practice and not for our record, so you don't need the results of LP1 and LP2 training. No certification required, but please ensure you complete the training.`
}};


// LP3 Menu:
const lp3 = {q:`Please reply with the numbers to the corresponding questions.<br/>
1. What is LP3?<br/>
2. LP3 Dates<br/>
3. Addressing Queries<br/>
4. LP3 Submission<br/>
5. What to do after LP3?<br/><br/>
# Main Menu`,
a:{
    1:`LP3 will be assignment based and its execution and content vary from technology to technology. This assignment will be like a mini-project for all interns in a particular technology which will be verified by Cloud Counselage Project Managers.`,
    2:`LP3 - April 02, 2020<br/>All learning Paths (LP) are expected to be completed by the interns before the first   week of June as Live Projects will begin in that time frame.`,
    3:`As mentioned in the '202003-IP' workgroup, please ask all queries related to LP3 in your technology workgroup only and tag Jayanth G S  in your message.`,
    4:`Please push you to code in a public repo of your GitHub account if required by your LP3 assignment.`,
    5:`You'll be given preparatory leave (PL) from April to June after that your Live Projects will be given after the first week of June.`
}};


// Live Projects:
const livepro = {q:`Please reply with the numbers to the corresponding questions.<br/>
1. Technologies to be used in Live Project.<br/>
2. Is LP1,2 training enough?<br/>
3. Individual or Group.<br/>
4. Problem Statement.<br/>
5. Mentoring or Assistance<br/>
6. What to do after Live Projects? Are we getting an offer letter/Stipend?<br/><br/>
# Main Menu`,
a:{
    1:`Projects in LP3 and Live Projects will be relevant to your training and ongoing projects in Cloud Counselage. The actual problem statements will only be given when the LP3/ Live Project phase is in progress to keep the interns focused on LP1/ LP2.`,
    2:`LP1/ LP2/ LP3 is your preparation for the Live Project. All the phases LP1/ LP2/ LP3/ Live Project are a part of this internship. The set of training is not exhaustive and you are required to keep learning about the technology on your own to excel in your Live Project.`,
    3:`All the LP3/  Live Projects are on an individual scale.`,
    4:`Live Projects will be provided by Cloud Counselage as these are the ongoing projects of Cloud Counselage and your opportunity to create an impact in the organisation. Live project's use case will strictly be provided by Cloud Counselage and you cannot choose your own use case.`,
    5:`As this is an internship you’re expected to do self-learning, as mentorship/ hand-holding is not part of an internship by definition, we would not provide any technical help. Nevertheless, feel free to ask your doubt in your respective workgroup chat/ in the community or Google it`,
    6:`Submit your project and once it's reviewed as successful, collect your internship letter. Your internship is complete after this. There is no stipend for live projects. If your work is sublime and we have a vacancy in the position you're interested in, you may be offered a chance for interviews and can get an offer letter from Cloud Counselage Pvt. Ltd.`
}};


module.exports = {'main':main,
'bitrix':bitrix,
'bitrix24':bitrix24,
'workgroups':workgroups,
'clockin':clockin,
'tasks':tasks,
'gq':gq,
'dates':dates,
'newjoinee':newjoinee,
'other':other,
'ic':ic,
'completion':completion,
'tech':tech,
'lp1':lp1,
'lp2':lp2,
'token':token,
'quiz':quiz,
'lp3':lp3,
'livepro':livepro
};