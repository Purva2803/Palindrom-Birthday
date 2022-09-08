function reverseStr(str){
    var listOfChars=str.split('');
    var reverseListOfChars=listOfChars.reverse();
    
    var reversedStr = reverseListOfChars.join('');
    return reversedStr;
}


function isPalindrome(str){
    var reverse = reverseStr(str);
    if(str===reverse){
        return true;
    }else{
        return false;
    }
}

var date1 ={
    day:5,
    month:9,
    year:2020
}

function convertDateToStr(date1){

    var dateStr ={ day:'',month:'',year:''};
    if(date1.day <10){
        dateStr.day = '0' + date1.day;

    }
    else{
        dateStr.day = date1.day.toString();
    }

    if(date1.month<10){
        dateStr.month = '0' + date1.month;

    }
    else{
        dateStr.month= date1.month.toString();
    }
    
        dateStr.year= date1.year.toString();
    return dateStr;
}

console.log(convertDateToStr(date1));


function getAllDateFormates(){
   var dateStr = convertDateToStr(date1) ;
   var ddmmyyy =dateStr.day +dateStr.month +dateStr.year;
   var mmddyyyy =dateStr.month +dateStr.day+dateStr.year;
   var yyyymmdd= dateStr.year+ dateStr.month + dateStr.day;
   var ddmmyy =dateStr.day +dateStr.month+dateStr.year.slice(-2) ;
   var mmddyy=dateStr.month +dateStr.day+dateStr.year.slice(-2);
   var yymmdd = dateStr.year.slice(-2)+ dateStr.month + dateStr.day;
   return [ddmmyy,mmddyy,ddmmyyy,mmddyyyy,yyyymmdd,yymmdd];

}
function checkPalindromforAllDateFormates(){
    var listOfPalindroms=getAllDateFormates(date1);
    var flag=false;
    for(var i=0;i<listOfPalindroms.length;i++)
    {
        if(isPalindrome(listOfPalindroms[i])){
            flag=true;
            break;
        }
    }

    return flag;
}
function getNextPalindromDate(date1){
    var ctr=0;
    var nextDate = getNextDate(date1);
       
    while(1){
            ctr++;
            var isPalindrom =checkPalindromforAllDateFormates(nextDate);
            if(isPalindrom){
                break;
            }

            nextDate = getNextDate(nextDate);
        }
         return(ctr,nextDate);
    }



function getNextDate(date1){
    var day = date1.day + 1;
    var month = date1.month;
    var year = date1.year;

    var dayInmonths=[31,28,31,30,31,30,31,31,30,31,30,31];

    if(month===2){
        if(isLeapyear(year)){
            if(day>29){
                day =1;
                month++;
            }
        }
     else{
        if(day>28)
        {
            day=1;
            month++;
        }
     }
    }

    else{
        if(day>dayInmonths[month-1]){
        day=1;
        month++;
    }
}
if(month>12){
    month =1;
    year++;
}
return{

    day:day,
    month:month,
    year:year
};
}

function isLeapyear(year){
    if(year%400===0){
        return true;
    }
    if(year%100===0){
        return false;
    }
    if(year%4===0){
        return true;
    }
    return false;

}
console.log(isLeapyear(2020));


function getPreviousDate(date1){

    function getNextDate(date1){
        var day = date1.day - 1;
        var month = date1.month;
        var year = date1.year;
    
        var dayInmonths=[31,28,31,30,31,30,31,31,30,31,30,31];
    
        if(month===2){
            if(isLeapyear(year)){
                if(day>29){
                    day =1;
                    month--;
                }
            }
         else{
            if(day>28)
            {
                day=1;
                month--;
            }
         }
        }
    
        else{
            if(day>dayInmonths[month-1]){
            day=1;
            month--;
        }
    }
    if(month>12){
        month =1;
        year--;
    }
    return{
    
        day:day,
        month:month,
        year:year
    };
    }
    
}

function clickHandler(e){
    var bdayStr=dateInputRef.value ;
    if(bdayStr !== ''){
        var listOfDate = bdayStr.split('-');
        var date ={
            day:Number(listOfDate[2]),
            month:Number(listOfDate[1]),
            year:Number(listOfDate[0])
        };
        var isPalindrome = checkPalindromforAllDateFormates(date);
        if(isPalindrome){
            reultRef.innerText ="your string is pallindrome";

        }else{
            reultRef.innerText="your string is not pallindrom";
            var [ctr ,nextDate]= getNextPalindromDate(date);
            reultRef.innerText = `the next pallindrom date is ${nextDate.day}-${nextDate.month}-{nextDate.year} you are] late by $(ctr)`;
                            
        }

    }

}

var dateInputRef = document.querySelector("#bday-input");
var showBtnRef = document.querySelector("#show-btn");
var reultRef = document.querySelector("#result");

showBtnRef.addEventListener('click',clickHandler);