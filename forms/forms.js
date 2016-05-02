$(document).ready(function () {
  var salaryTotal = 0.00;
  var array = [];

  $('#employeeinfo').on('submit', function (event) {
    event.preventDefault();
    var values = {};
    var thisEmployeeSalary = 0.00;

    $.each($('#employeeinfo').serializeArray(), function (i, field) {
      values[field.name] = field.value;
    });

    //console.log(values);
    thisEmployeeSalary = parseFloat(values.employeeSalary);
    salaryTotal += Math.round(thisEmployeeSalary / 12);
    values.employeeSalary = Math.round(thisEmployeeSalary);

    console.log(values.employeeSalary);

    // clear out inputs
    $('#employeeinfo').find('input[type=text]').val('');

    // add to list
    array.push(values);

    console.log(salaryTotal);

    // append to DOM
    monthlyTotal(salaryTotal);
    appendDom(values);
  });

  function monthlyTotal(salaryTotal) {
    $('#salaryAmount').text('$ ' + salaryTotal);

  }

  function appendDom(employeeInfo) {
    $('#corral').append('<div class="person"></div>');
    var $el = $('#corral').children().last();

    $el.append('<p>' + 'First Name: ' + employeeInfo.employeeFirstName + '</p>');
    $el.append('<p>' + 'Last Name: ' + employeeInfo.employeeLastName + '</p>');
    $el.append('<p>' + 'ID Number: ' + employeeInfo.employeeID + '</p>');
    $el.append('<p>' + 'Title: ' + employeeInfo.employeeTitle + '</p>');
    $el.append('<p>' + 'Annual Salary: ' + employeeInfo.employeeSalary + '</p>');
  }
});
