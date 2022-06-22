const baseUrl = 'http://localhost:3001'
const themeDefault = 'dark'
const namesOfModes = ['dark', 'moonlight', 'eclipse', 'light'];
var username = "";
var courses=[];
var studyPlan=[];


function updateCourses(crs){
    courses = crs;
}

function updateSP(sp){
    studyPlan = sp;
}

function addItemSP(item){
    studyPlan.push(item)
}

function getCL(){
    return courses.length > 0 ? courses : 0;
}


function getSP(){
    return studyPlan.length > 0 ? studyPlan : 0;
}

export { baseUrl, themeDefault, namesOfModes, updateCourses,  updateSP, getSP, getCL, addItemSP }