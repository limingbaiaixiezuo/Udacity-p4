/*
This is empty on purpose! Your code to build the resume will go here.
 */

var formattedName = HTMLheaderName.replace("%data%","Chunming Li");
var formattedRole = HTMLheaderRole.replace("%data%","Web Developer");
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

var bio = {
          "name": "Lichunming",
          "role": "Web Developer",
          "contacts":{
                      "mobile": "17090408713",
                      "email" : "17090408713@163.com",
                      "github" : "limingbaiaixiezuo",
                      "twitter" :"lichunming2",
                      "location" :"Huludao City,Liaoning Province"
          },
          "welcomeMessage" : "As soon as you start to pursue a dream, your life wakes up and everything has meaning.",
          "skills" : ["Electrical automation","Writting","Programming"],
          "bioPic" : "images/me.jpeg"
}

var education = {
                "schools":[
                          {
                            "name":"BoHai Shipbuilding Vocational College",
                            "location":"Huludao,Lioaning",
                            "degree":"Junior college",
                            "major":"Shipbuilding Engineering",
                            "date":"2007-2010",
                            "url":"http://www.bhcy.cn"
                        },
                          {
                            "name":"Shenyang Institute of Engineering",
                            "location":"Shenyang,Liaoning",
                            "degree":"Bachelor",
                            "major":"Power system and its Automation",
                            "date":"2008-2011",
                            "url":"http://www.sie.edu.cn"
                        }
                        ],
                "onlineCourses":[
                                {
                                  "title":"Front-End Web Developer Nanodegree",
                                  "school":"Udacity",
                                  "date":"2017",
                                  "url":"http://cn.udacity.com/course/front-end-web-developer-nanodegree--nd001-cn-basic"
                    }
              ]
}

var work = {
            "jobs" : [
                      {
                      "employer" : "Guangxin Shipbuilding & Heavy Industry CO.LTD",
                      "title" : "technician",
                      "location" : "Zhongshan,Guangdong",
                      "dates":"20100701-20121001",
                      "description":"My first job",
                      "url":"http://www.gshi.cn"
                      },
                      {
                      "employer" : "Suizhong port",
                      "title" : "technician",
                      "location" : "Suizhong county,Liaoning province",
                      "dates":"20150101-20170610",
                      "description":"My latest job",
                      "url":"http://www.ykport.com.cn"
                      }
          ]
}

var projects = {
          "projects" : [
                        {
                          "title":"Animal card and Peach Juice",
                          "dates" :"20170920-20170925",
                          "description":"Udacity front-end-web assignment",
                          "images" :["images/p1.png","images/p2.png"]
                        }
                    ]
}

 bio.display = function() {
          var formattedMobile = HTMLmobile.replace("%data%",bio.contacts.mobile);
          $("#topContacts").append(formattedMobile);
          var formattedEmail = HTMLemail.replace("%data%",bio.contacts.email);
          $("#topContacts").append(formattedEmail);
          var formattedTwitter = HTMLtwitter.replace("%data%",bio.contacts.twitter);
          $("#topContacts").append(formattedTwitter);
          var formattedGithub = HTMLgithub.replace("%data%",bio.contacts.github);
          $("#topContacts").append(formattedGithub);
          var formattedLocation = HTMLlocation.replace("%data%",bio.contacts.location);
          $("#topContacts").append(formattedLocation);
          var formattedBiopic = HTMLbioPic.replace("%data%",bio.bioPic);
          $("#header").append(formattedBiopic);
          var formattedwelcomeMsg = HTMLwelcomeMsg.replace("%data%",bio.welcomeMessage);
          $("#header").append(formattedwelcomeMsg);
 if(bio.skills.length>0){
                        $("#header").append(HTMLskillsStart);
                        var formattedSkill = HTMLskills.replace("%data%",bio.skills[0]);
                        $("#skills").append(formattedSkill);
                            formattedSkill = HTMLskills.replace("%data%",bio.skills[1]);
                        $("#skills").append(formattedSkill);
                            formattedSkill = HTMLskills.replace("%data%",bio.skills[2]);
                        $("#skills").append(formattedSkill);
 };
}
bio.display();


work.display = function() {
         work.jobs.forEach(function(cv, index, array){
                                        $("#workExperience").append(HTMLworkStart);
                                        var formattedUrl = HTMLworkEmployer.replace("#",cv.url);
                                        var formattedEmployer = formattedUrl.replace("%data%",cv.employer);
                                        var formattedTitle = HTMLworkTitle.replace("%data%",cv.title);
                                        var formattedEmployerTitle = formattedEmployer + formattedTitle;
                                        $(".work-entry:last").append(formattedEmployerTitle);
                                        var formattedDates = HTMLworkDates.replace("%data%",cv.dates);
                                        $(".work-entry:last").append(formattedDates);
                                        var formattedDates = HTMLworkDescription.replace("%data%",cv.description);
                                        $(".work-entry:last").append(formattedDates);
                     });
}
work.display();

$(document).click(function (loc){
                                var x = loc.pageX;
                                var y = loc.pageY;
                                logClicks(x,y);
});
//没弄明白下面这个函数为啥不能删掉？它不就是遍历相应的对象数组，输出工作地点吗？
function locationizer(work_obj) {
                                  var locationArray = [];
                                  for (job in work_obj.jobs) {
                                    var newLocation = work_obj.jobs[job].location;
                                    locationArray.push(newLocation);
                                  }
                                  return locationArray;
}
locationizer(work);

// function inName(name) {
//                         name = name.trim().split(" ");
//                         console.log(name);
//                         name[1] = name[1].toUpperCase();
//                         name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();
//                         return name[0]+" "+name[1];
// }
// $("#main").append(internationalizeButton);

projects.display = function(){
              projects.projects.forEach(function(cv, index, array){
                                $("#projects").append(HTMLprojectStart);
                                var formattedTiltle = HTMLprojectTitle.replace("%data%",cv.title);
                                $(".project-entry:last").append(formattedTiltle);
                                var formattedDate = HTMLprojectDates.replace("%data%",cv.date);
                                $(".project-entry:last").append(formattedDate);
                                var formattedDescription = HTMLprojectDescription.replace("%data%",cv.description);
                                $(".project-entry:last").append(formattedDescription);
                                if(cv.images.length > 0) {
                                  //  for(image in projects.projects[project].image){
                                cv.images.forEach(function(ncv, index, array){
                                                      var formattedImage = HTMLprojectImage.replace("%data%",ncv);
                                                      $(".project-entry:last").append(formattedImage);
                                                      });
                                    }
                    });
}
projects.display();

 education.display = function() {
education.schools.forEach(function(cv, index, array){
                                        $("#education").append(HTMLschoolStart);
                                        var formattedName = HTMLschoolName.replace("%data%",cv.name);
                                        var formattedDegree = HTMLschoolDegree.replace("%data%",cv.degree);
                                        var formattedNameDegree = formattedName + formattedDegree;
                                        $(".education-entry:last").append(formattedNameDegree);
                                        var formattedDates = HTMLschoolDates.replace("%data%",cv.date);
                                        $(".education-entry:last").append(formattedDates);
                                        var formattedLocation = HTMLschoolLocation.replace("%data%",cv.location);
                                        $(".education-entry:last").append(formattedLocation);
                                        var formattedMajor = HTMLschoolMajor.replace("%data%",cv.major);
                                        $(".education-entry:last").append(formattedMajor);
                                        var formattedUrl = HTMLschoolUrl.replace("#",cv.url);
                                        var formattedUrl = formattedUrl.replace("%data%",cv.url);
                                        $(".education-entry:last").append(formattedUrl);
});
}
education.display();

$("#mapDiv").append(googleMap);

function footerContacts() {
                            var formattedMobile = HTMLmobile.replace("%data%",bio.contacts.mobile);
                            $("#footerContacts").append(formattedMobile);
                            var formattedEmail = HTMLemail.replace("%data%",bio.contacts.email);
                            $("#footerContacts").append(formattedEmail);
                            var formattedTwitter = HTMLtwitter.replace("%data%",bio.contacts.twitter);
                            $("#footerContacts").append(formattedTwitter);
                            var formattedGithub = HTMLgithub.replace("%data%",bio.contacts.github);
                            $("#footerContacts").append(formattedGithub);
                            var formattedLocation = HTMLlocation.replace("%data%",bio.contacts.location);
                            $("#footerContacts").append(formattedLocation);
}
footerContacts();
