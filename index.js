const calculateAge= (day,month,year) => {
    const currentDate = new Date();
   
    ///input validation
    if(year > currentDate.getFullYear())
        return [1,1,false];
    if(month < 1 || month > 12)
        return [1,false,1];
    if(day < 1 || day > 32)
        return [false,1,1];
    if (month === 4 && day === 31 ||
        month === 6 && day === 31 ||
        month === 9 && day === 31 ||
        month === 11 && day === 31||
        month === 2 && day === 30 ||
        month === 2 && day === 31 )
            return [false,false,1];
    
    //Next I have to determine what month name it is
    let monthName = ''
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
    const days = Math.floor((remainingMilliseconds % (1000 * 60 * 60 * 24 * (365.25 / 12))) / (1000 * 60 * 60 * 24)) - 1;
    
    console.log("The years >>>", years);
    console.log("The months >>>", months);
    console.log("The days >>>", days);

    return [days, months, years];

}

const main =() => {
    $('.img-container').on('click', ()=>{
        const dayInput = $('.day').val();
        const monthInput = $('.month').val();
        const yearInput = $('.year').val();

        if(!dayInput){
             //make the border of day input red 
            //and show comment "This field is required"
            console.log("the field is required");
            $('.day').toggleClass('error');
            $('.day').closest('div').toggleClass('error')
        }
           
        if(!monthInput){
             //make the border of month input red 
             //and show comment "This field is required"
            console.log("the field is required");
            $('.month').toggleClass('error');
            $('.month').closest('div').toggleClass('error');
        }
           
        if(!yearInput){
             //make the border of year input red 
             //and show comment "This field is required"
            console.log("the field is required");
            $('.year').toggleClass('error');
            $('.year').closest('div').toggleClass('error');
        }
           
        
        if(dayInput && monthInput && yearInput){
            const [day,month,year] = calculateAge(dayInput,monthInput,yearInput);

        }
            
        $('.day').val('');
        $('.month').val('');
        $('.year').val('');
    })
    
}

$(document).ready(main)