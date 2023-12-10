//getting variables

let date=document.querySelector('#date');
let month=document.querySelector('#month');
let year=document.querySelector('#year');

let submit=document.querySelector('#submit');

let birthdayField=document.querySelectorAll('.birthday');
let remainingDays=document.querySelector('#days');
let remainingMonths=document.querySelector('#months');
let remainingYears=document.querySelector('#years');

let d=new Date();

let currentDate=d.getDate();
let currentMonth=d.getMonth();
let currentYear=d.getFullYear();

currentMonth+=1;

let oddMonth=[1,3,5,7,8,10,12];
let evenMonth=[2,4,6,9,11];

let paraTag=document.querySelector('.input-field p');
paraTag.classList.add('error-state');

submit.addEventListener('click',displayDate);

birthdayField.forEach(element => {
    element.addEventListener('keyup',(e)=>{

        element.style.borderColor='hsl(259, 100%, 65%)';
        paraTag.innerText='';

        if ((date.value>30)&&(evenMonth.toString().includes(month.value)&&month.value!=1)
        ||((date.value>28)&&(month.value==2))) {
           date.style.borderColor='red';
           paraTag.innerText='Must be valid date';
           date.parentElement.append(paraTag);
       }
       
        if(date.value>31) {
            date.style.borderColor='red';
            paraTag.innerText='Must be valid date';
            date.parentElement.append(paraTag);
        }
        if(month.value>12){
            month.style.borderColor='red';
            paraTag.innerText='Must be valid month';
            month.parentElement.append(paraTag);
         }

        if(year.value>2023){
            year.style.borderColor='red';
            paraTag.innerText='Must be valid year';
            year.parentElement.append(paraTag);
        }
        
    })
});

function displayDate(params) {
    if (date.value=='' || month.value=='' || year.value=='') {
        birthdayField.forEach(empty => {
            empty.style.borderColor='red';
            paraTag.innerText='This field is requiered';
            empty.parentElement.append(paraTag);
            //if (empty.value=='') {      } 
        });
    } else {
        birthdayField.forEach(element => {
            error=element.parentElement.lastElementChild.classList.contains('error-state');
            if (error) {
                element.parentElement.lastElementChild.remove();
                element.style.borderColor='hsl(259, 100%, 65%)';
            }
            
        });
        if (date.value<=31 && month.value<=12 && year.value<=currentYear) {
            if(currentMonth==month.value && currentDate<date.value){
                currentMonth+=12;
                currentYear--;
            }
            if (currentDate<date.value) {
                if(oddMonth.toLocaleString().includes(month.value)){
                    currentDate+=31;
                }else if(evenMonth.toLocaleString().includes(month.value)){
                    currentDate+=30;
                }else{
                    currentDate+=28;
                }
                currentMonth--;
            }
            if (currentMonth < month.value) {
                currentYear--;
            }
            remainingDays.textContent=currentDate-date.value;
            remainingMonths.textContent=currentMonth-month.value;
            remainingYears.textContent=currentYear-year.value;
        }else{

        }
    }
currentDate=d.getDate();
currentMonth=d.getMonth();
currentYear=d.getFullYear();
currentMonth+=1;
}