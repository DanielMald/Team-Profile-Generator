const generatehtml = require("./src/generatehtml")
const Manager = require("./lib/Manager")
const Engineer = require("./lib/Engineer")
const Intern = require("./lib/Intern")
const inquirer = require("inquirer")
const fs = require("fs")

const allEmployees = [

]


const managerQuestions = [
    {
        type:"input",
        name:"name",
        message:"What is the managers name?",
    },{
        type:"input",
        name:"id",
        message:"What is the managers ID?",
    },{
        type:"input",
        name:"email",
        message:"What is the managers Email?",
    },{
        type:"input",
        name:"officeNumber",
        message:"What is the managers office number?",
    }
]

const internQuestions = [
    {
        type:"input",
        name:"name",
        message:"What is the interns name?",
        
    },{
        type:"input",
        name:"id",
        message:"What is the interns ID?",
    },{
        type:"input",
        name:"email",
        message:"What is the interns email?",
    },{
        type:"input",
        name:"school",
        message:"Where did the intern go to school",
    }
]

const engineerQuestions = [
    {
        type:"input",
        name:"name",
        message:"What is the engineers name?",
    },{
        type:"input",
        name:"id",
        message:"What is the engineers ID?",
    },{
        type:"input",
        name:"email",
        message:"What is the engineers email?",
    },{
        type:"input",
        name:"github",
        message:"What is the engineers github",
    }
]

async function managerPrompt() {
   const newManager = await inquirer.prompt(managerQuestions)
   console.log(newManager)
   const managerConstructor = new Manager(newManager.name, newManager.id, newManager.email, newManager.officeNumber)
   allEmployees.push(managerConstructor)
   internPrompt()
}
managerPrompt()

async function internPrompt() {
    const newIntern = await inquirer.prompt(internQuestions)
    console.log(newIntern)
    const internConstructor = new Intern(newIntern.name, newIntern.id, newIntern.email, newIntern.school)
    allEmployees.push(internConstructor)
    engineerPrompt()
}

async function engineerPrompt() {
    const newEngineer = await inquirer.prompt(engineerQuestions)
    console.log(newEngineer)
    const engineerConstructor = new Engineer(newEngineer.name, newEngineer.id, newEngineer.email, newEngineer.github)
    allEmployees.push(engineerConstructor)
    const htmltext = generatehtml(allEmployees)
    newHtml(htmltext)
}
async function newHtml(data) {
    fs.writeFileSync("./dist/index.html", data)
} 