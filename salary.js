$(document).ready(onReady);

console.log('yeah its working');

function onReady(){
    $(".submitButton").on("click", handleSubmit)
}

function handleSubmit(event){
    event.preventDefault();
    const firstName = $('#firstName').val();
    const lastName = $('#lastName').val();
    const id = $('#id').val();
    const title = $('#title').val();
    const annualSalary = $('#annualSalary').val();
    $('#salaryCalculator').append(`<tr> <td>${firstName}</td>
        <td>${lastName}</td> <td>${id}</td> <td>${title}</td>
        <td>${annualSalary}</td> <td><button>Delete</button></td> 
    </tr>`);
}

