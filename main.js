function reverseStr(str){
    var listOfChars=str.split('');
    var reverseListOfChars=listOfChars.reverse();
    
    var reversedStr = reverseListOfChars.join('');
    return reversedStr;
}


function isPalindrome(str){
    var reverse = reverseStr(str);
    if(str===reverse){
        
        return str = reverse;
    
}
}


function convertDateToStr(date){

    var dateStr ={ day:'',month:'',year:''};
    if(date.day <10){
        dateStr.day = '0' + date.day;

    }
    else{
        dateStr.day = date.day.toString();
    }

    if(date.month<10){
        dateStr.month = '0' + date.month;

    }
    else{
        dateStr.month= date.month.toString();
    }
    
        dateStr.year= date.year.toString();
    return dateStr;
}


function getAllDateFormates(date){
   var dateStr = convertDateToStr(date) ;
   var ddmmyyy =dateStr.day +dateStr.month +dateStr.year;
   var mmddyyyy =dateStr.month +dateStr.day+dateStr.year;
   var yyyymmdd= dateStr.year+ dateStr.month + dateStr.day;
   var ddmmyy =dateStr.day +dateStr.month+dateStr.year.slice(-2) ;
   var mmddyy=dateStr.month +dateStr.day+dateStr.year.slice(-2);
   var yymmdd = dateStr.year.slice(-2)+ dateStr.month + dateStr.day;
   return [ddmmyy,mmddyy,ddmmyyy,mmddyyyy,yyyymmdd,yymmdd];

}

function checkPalindromforAllDateFormates(date){
    var listOfPalindromes=getAllDateFormates(date);
    var flag=false;
    for(var i=0;i<listOfPalindromes.length;i++)
    {
        if(isPalindrome(listOfPalindromes[i])){
            flag=true;
            break;
        }
    }

    return flag;
}
function getNextPalindromDate(date){
    var ctr=0;
    var nextDate = getNextDate(date);
       
    while(1){
            ctr++;
            var isPalindrom =checkPalindromforAllDateFormates(nextDate);
            if(isPalindrom){
                break;
            }

            nextDate = getNextDate(nextDate);
        }
         return[ctr,nextDate];
    }



function getNextDate(date){
    var day = date.day + 1;
    var month = date.month;
    var year = date.year;

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




   

function clickHandler(e){
    var bdayStr=dateInputRef.value ;
    if(bdayStr !== ''){
        var listOfDate = bdayStr.split('-');
        var date ={
            day:Number(listOfDate[2]),
            month:Number(listOfDate[1]),
            year:Number(listOfDate[0])
        };
       var isPalindromes = checkPalindromforAllDateFormates(date);
        if(isPalindromes){
            reultRef.innerText ="your string is pallindrome";

        }else{
            
            var [ctr ,nextDate]= getNextPalindromDate(date);
            reultRef.innerText = `the next pallindrom date is ${nextDate.day}-${nextDate.month}-${nextDate.year} you are late by ${ctr}`;
                            
        }

    }
   
    }
   

var dateInputRef = document.querySelector("#bday-input");
var showBtnRef = document.querySelector("#show-btn");
var reultRef = document.querySelector("#result");

showBtnRef.addEventListener('click',clickHandler);