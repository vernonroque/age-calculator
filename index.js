const calculateAge= (day,month,year) => {
    let validDay = true;
    let validMonth = true;
    let validYear = true;

    const currentDate = new Date();
    ///input validation
    if(year > currentDate.getFullYear())
        validYear = false;
    if(month < 1 || month > 12)
        validMonth = false;
    if(day < 1 || day > 32)
        validDay = false;
    ///strict equality operator '===' will output false if a string '04' and a number 4 are compared
    ///equality operator '==' will output true if a string '04' and a number 4 are compared
    if ((month == 4 || month == 6 || month == 9 || month == 11) && day == 31 ||
        (month == 2 && day > 29)){
            console.log("this day doesnt exist in this month");
            validDay = false;
            validMonth = false;
        }
    if(!validDay || !validMonth || !validYear)
        return [validDay, validMonth, validYear];
            
    //Next I have to determine what month name it is
    let monthName = '';
    switch(parseInt(month)){
        case 1: 
            monthName = 'Jan';
            break;
        case 2: 
            monthName = 'Feb';
            break;
        case 3: 
            monthName = 'Mar';
            break;
        case 4: 
            monthName = 'Apr';
            break;
        case 5:
            monthName = 'May';
            break;
        case 6:
            monthName = 'Jun'
            break;
        case 7:
            monthName = 'Jul'
            break;
        case 8:
            monthName = 'Aug'
            break;
        case 9:
            monthName = 'Sep'
            break;
        case 10:
            monthName = 'Oct'
            break;
        case 11:
            monthName = 'Nov'
            break;
        case 12:
            monthName = 'Dec'
            break;
    }

    //put the date in new Date() method
     //const testDate = '18 May 2000';
     
     const inputDateFormatted = new Date(`${day} ${monthName} ${year}`);
     const difference = currentDate - inputDateFormatted; //this is in miliseconds
 
    //Calculate the difference in years
    const years = Math.floor(difference / (1000 * 60 * 60 * 24 * 365.25));

    // Calculate the remaining milliseconds after subtracting the years
    const remainingMilliseconds = Math.floor(difference % (1000 * 60 * 60 * 24 * 365.25));

    // Calculate the difference in months and days
    const months = Math.floor(remainingMilliseconds / (1000 * 60 * 60 * 24 * (365.25 / 12)));
    const days = Math.floor((remainingMilliseconds % (1000 * 60 * 60 * 24 * (365.25 / 12))) / (1000 * 60 * 60 * 24)) -1;

    return [days, months, years];

}

const main =() => {
    //submit functionality
    $('.img-container').on('click', ()=>{
        const dayInput = $('.day').val();
        const monthInput = $('.month').val();
        const yearInput = $('.year').val();

        //checks if input fields are empty
        if(!dayInput){

             //make the border of day input red 
            //and show comment "This field is required"
            
            console.log("the field is required");
            $('.day').addClass('error');
            $('.day').closest('div').addClass('error')
        }
           
        if(!monthInput){
             //make the border of month input red 
             //and show comment "This field is required"
            console.log("the field is required");
            $('.month').addClass('error');
            $('.month').closest('div').addClass('error');
        }
           
        if(!yearInput){
             //make the border of year input red 
             //and show comment "This field is required"
            console.log("the field is required");
            $('.year').addClass('error');
            $('.year').closest('div').addClass('error');
        }
           
        
        if(dayInput && monthInput && yearInput){
            const [day,month,year] = calculateAge(dayInput,monthInput,yearInput);
        //checks if the day, month, and year are wrong inputs
            if(!day && month){
                $('.day').addClass('error');
                $('.day').closest('div').addClass('invalidDay');
            }
            if(!day && !month){
                $('.day').addClass('error');
                $('.month').addClass('error');
                $('.year').addClass('error');
                $('.day').closest('div').addClass('invalidDate');
            }
            if(!month && day){
                $('.month').addClass('error');
                $('.month').closest('div').addClass('invalidMonth');
            }
            if(!year){
                $('.year').addClass('error');
                $('.year').closest('div').addClass('invalidYear');
            }
            
            console.log("The day is >>>", day);
            console.log("The month is >>>", month);
            console.log("The year is >>>", year);

        if(typeof(day)== "number" &&
           typeof(month)== "number" &&
           typeof(year)== "number"){
            $('.years-span').html(`${year}`);
            $('.months-span').html(`${month}`);
            $('.days-span').html(`${day}`);
           }

        }
            
        $('.day').val('');
        $('.month').val('');
        $('.year').val('');
    })
    //reset functionality
    $('.day').on('input',()=>{
        $('.day').removeClass('error');
        $('.day').closest('div').removeClass('error');
        $('.day').closest('div').removeClass('invalidDay');
        $('.day').closest('div').removeClass('invalidDate');
    })

    $('.month').on('input',()=>{
        $('.month').removeClass('error');
        $('.month').closest('div').removeClass('error');
        $('.month').closest('div').removeClass('invalidMonth');
    })

    $('.year').on('input',()=>{
        $('.year').removeClass('error');
        $('.year').closest('div').removeClass('error');
        $('.year').closest('div').removeClass('invalidYear');
    })
    
}

$(document).ready(main)