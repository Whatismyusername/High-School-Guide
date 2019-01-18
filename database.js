var program = [
    {
        "name": "YMCA",
        "category": "Readiness",
        "description": "The Y nurtures the potential of every child and teen by supporting their unique youth development journey through holistic programming. From cradle to career, the Y provides all youth with the tools and resources they need to succeed in life. The Y.\™ For a better us.",
        "expert": "YMCA Officers",
        "link": "https://ymcanyc.org/locations/vanderbilt-ymca"
    },
    {
        "name": "Big Brother Big Sister (BBBS)",
        "category": "Readiness",
        "description": "Big Brothers Big Sisters helps children realize their potential and build their futures. We nurture children and strengthen communities. And we couldn't do any of it without you.",
        "expert": "Ms. Achiu",
        "link": "https://www.bbbs.org/"
    },
    {
        "name": "John Jay Upward Bound",
        "category": "Academics",
        "description": "a college preparatory program that serves first-generation, low-income students. The goal of Upward Bound is to increase the rate at which participants complete high school and graduate from post-secondary institutions.",
        "expert": "Ms. Achiu",
        "link": "https://www.jjay.cuny.edu/upward-bound"
    },
    {
        "name": "Hunter College Now",
        "category": "Academics",
        "description": "College Now is a collaboration between the City University of New York (CUNY) and the New York City Department of Education that prepares public high school students for successful academic performance in college.",
        "expert": "Ms. Daira",
        "link": "http://www.hunter.cuny.edu/college-now/"
    },
    {
        "name": "CodeNation",
        "category": "Academics",
        "description": "Code Nation equips students in under-resourced high schools with the skills, experiences, and connections that together create access to careers in technology.",
        "expert": "Mr. Brian",
        "link": "https://codenation.org/our-work/"
    }
    ];
    
var volunteering = [
    {
        "name": "MIHS Parent Teacher Conference",
        "expert": "Ms. Daira"
    },
    {
        "name": "YMCA",
        "expert": "YMCA Officers"
    },
    {
        "name": "Church",
        "expert": "Local Church Member"
    }
    ];
    
var internship = [
    {
        "name": "SYEP",
        "description": "The Summer Youth Employment Program (SYEP) provides New York City youth between the ages of 14 and 24 with paid summer employment for up to six weeks in July and August. Participants work in entry-level jobs in a variety of industries.",
        "expert": "",
        "link": "https://www1.nyc.gov/site/dycd/services/jobs-internships/summer-youth-employment-program-syep.page"
    }
    ];
    
    function programDisplay(){
        let storage = "";
        for(var i = 0; i < program.length; i++){
            let title = "<p class='programTitle'>" + program[i].name + "</p>";
            let description = "<p class='programDescription'>" + program[i].description + "</p>";
            let link = "<p class='programLink'>Link: </p> <a class='programLink' href='" + program[i].link +"'>" + program[i].link + "</a>";
            let category = "<p class='programCategory'>Category: " + program[i].category + "</p><br>";
            let expert = "<p class='programExpert'>Expert: " + program[i].expert + "</p>";
            storage = storage + "<div class='dropdownList'>" + title + category + description + "<p class='info'> For More Info: </p>" +link + expert + "</div><hr>";
            
        }
        $(".programDropdown").html("<hr>" + storage + "<a class='surveyLink' href='https://goo.gl/forms/1fQTAYZPapIOO8fI2'>If you believe there is a program that people should know but is not included in the High School Guide, please fill out this form. The information will be transferred into the Guide if it is valid and reliable.</a>");
    }
    function volunteeringDisplay(){
        let storage = "";
        for(var i = 0; i < volunteering.length; i++){
            let title = "<p class='volunteeringTitle'>" + volunteering[i].name + "</p>";
            let expert = "<p class='volunteeringExpert'>Expert: " + volunteering[i].expert + "</p>";
            storage = storage + "<div class='dropdownList'>" + title + "<p class='info'> For More Info: </p>" + expert + "</div><hr>";
        }
        $(".volunteeringDropdown").html("<hr>" + storage + "<a class='surveyLink' href='https://goo.gl/forms/qcjN4vYlKri4jIqo2'>If you believe there is a volunteering opportunity that people should know but is not included in the High School Guide, please fill out this form. The information will be transferred into the Guide if it is valid and reliable.</a>");
    }
    function internshipDisplay(){
        let storage = "";
        for(var i = 0; i < internship.length; i++){
            let title = "<p class='internshipTitle'>" + internship[i].name + "</p>";
            let description = "<p class='internshipDescription'>" + internship[i].description + "</p>";
            let link = "<p class='internshipLink'>Link: </p> <a class='internshipLink' href='" + internship[i].link + "'>" + internship[i].link + "</a>";
            let expert = "<p class='internshipExpert'>Expert: " + internship[i].expert + "</p>";
            storage= storage + "<div class='dropdownList'>" + title + description + "<p class='info'> For More Info: </p>" +link + expert + "</div><hr>";
        }
        $(".internshipDropdown").html("<hr>" + storage + "<a class='surveyLink' href='https://goo.gl/forms/GaYTwBOmRiJw9Lpv1'>If you believe there is an internship opportunity that people should know but is not included in the High School Guide, please fill out this form. The information will be transferred into the Guide if it is valid and reliable. </a>");
    }
    
    
    
$("document").ready(function(){
    programDisplay();
    volunteeringDisplay();
    internshipDisplay();
    
    $(".programDropdown").hide();
    $(".volunteeringDropdown").hide();
    $(".internshipDropdown").hide();
    
    $(".program").click(function(){
        $(".programDropdown").toggle();
    });
    $(".volunteering").click(function(){
        $(".volunteeringDropdown").toggle();
    });
    $(".internship").click(function(){
        $(".internshipDropdown").toggle();
    });
    
});
    
    