let name1 : string | number = 'truong'
name1 = 3


let employee : {
  firstName: string,
  lastName: string,
  age: number,
  jobTitle: string,
} = {
  firstName: 'Eric',
  lastName : 'Pham',
  age: 25,
  jobTitle: 'Web Developer',
}


interface IEmployee {
  firstName: string,
  lastName: string,
  age: number,
  jobTitle: string,
}

let IEmployee : IEmployee = {
  firstName: 'Eric',
  lastName : 'Pham',
  age: 25,
  jobTitle: 'Web Developer',
}