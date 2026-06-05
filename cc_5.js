let employees = [
  { name: "Alice" hourlyRate: 20, hoursWorked: 40 },
  { name: "Michael" hourlyRate: 30, hoursWorked: 50 },
  { name: "Hamza" hourlyRate: 40, hoursWorked: 60 }
];

function calculateBasePay(rate, hours) {
  if (hours > 40) {
    return 40 * rate;
  } else {
    return hours * rate;
  }
}

function calculateOvertimePay(rate, hours) {
  if (hours > 40) {
    return (hours - 40) * rate * 1.5;
  } else {
    return 0;
  }
}

function calculateTaxes(grossPay) {
  return grossPay * 0.15;
}

function processPayroll(employee) {
  let basePay = calculateBasePay(employee.hourlyRate, employee.hoursWorked);
  let overtimePay = calculateOvertimePay(employee.hourlyRate, employee.hoursWorked);
  let grossPay = basePay + overtimePay;
  let taxAmount = calculateTaxes(grossPay);
  let netPay = grossPay - taxAmount;

  return { 
    name: employee.name,
    basePay: basePay,
    overtimePay: overtimePay,
    grossPay: grossPay,
    netPay: netPay
  };
}

for (let employee of employees) {
  let payrollRecord = processPayroll(employee);
  console.log(`Employee Payroll:`);
  console.log(` Name: ${payrollRecord.name}`);
  console.log(` Base Pay: $${payrollRecord.basePay}`);
  console.log(` Overtime Pay: $${payrollRecord.overtimePay}`);
  console.log(` Gross Pay: $${payrollRecord.grossPay}`);
  console.log(` Net Pay: $${payrollRecord.netPay}`);
}
