const company = {
  sales: [
    { name: 'John', salary: 1000 },
    { name: 'Alice', salary: 600 }
  ],
  development: {
    web: [
      { name: 'Peter', salary: 2000 },
      { name: 'Alex', salary: 1800 }
    ],
    internals: [
      { name: 'Jack', salary: 1300 }
    ]
  }
};

function sumSalaries(nameCompany) {
  if (Array.isArray(nameCompany)) {
    return nameCompany.reduce((total, employee) => total + employee.salary, 0)
  } else {
    return Object.values(nameCompany).reduce((total, subDep) => total + sumSalaries(subDep), 0)
  }
}

const totalSum = sumSalaries(company);
console.log(totalSum);