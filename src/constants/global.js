const baseUrl = 'http://localhost:3001'
const themeDefault = 'dark'
const namesOfModes = ['dark', 'moonlight', 'eclipse', 'light']
var courses = [];
var studyPlan = [];


function updateCourses(crs){
    courses = crs;
}

function updateSP(sp){
    studyPlan = sp;
}

export { baseUrl, themeDefault, namesOfModes, updateCourses,  updateSP}