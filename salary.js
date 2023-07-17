$(document).ready(onReady);

console.log('yeah its working');


function onReady(){
    $(".submitButton").on("click", handleSubmit)
    $('#salaryCalculator').on('click', '#deleteButton', deleteButton);
}
let monthly =0;
let calculator =0;
function handleSubmit(event){
    event.preventDefault();
    const firstName = $('#firstName').val();
    const lastName = $('#lastName').val();
    const id = $('#id').val();
    const title = $('#title').val();
    const annualSalary = Number($('#annualSalary').val());
    
    let calculator =0;
    if(annualSalary){
        monthly += annualSalary;
        console.log(monthly);
    }
    calculator = monthly/12;
    console.log(calculator);

    $('span').remove();
    $('#monthly').append(`<span>$${calculator}</span>`);

    $('#salaryCalculator').append(`<tr> <td>${firstName}</td>
        <td>${lastName}</td> <td>${id}</td> <td>${title}</td>
        <td>$${annualSalary.toLocaleString()}</td> 
        <td><button id ="deleteButton">Delete</button></td> 
    </tr>`);

    if(calculator >=20000){
        $('span').addClass('makeRed');     
    }
}

function deleteButton(){
    $(this).parent().parent().remove();
}

