// let {
//     animalType,

//     animalName:{
//         scientific: {name:sName},
//         callable:{name:cName}
//     }
// }={
//     animalType:'MAMMEL',
//     animalHabitat:'HOUSE',
//     animalName:{
//         scientific:{
//             name:'HOMO_SAPIENS',
//         },
//         callable:{
//             name:'HUMAN'
//         },
//     },
// };
// console.log(sName);
// console.log(cName);

let {
  memberRole,
  memberPersonalDetails: { firstName },
  memberFamilyDetails: {
    infantsDetails: {
      firstChildern: {
        name: FCname,
        address: { name: fAddress },
      },
    },
  },
} = {
  memberID: "A100",
  memberRole: "ADMIN",
  memberPersonalDetails: {
    firstName: "Ramu",
    lastName: "neupane",
    from: "butwal",
    isMarried: true,
  },
  memberFamilyDetails: {
    infantsDetails: {
      hasInfants: true,
      numberofInfants: 2,
      firstChildern: {
        name: "HARI",
        address: {
          name: "butwal",
        },
      },
    },
  },
};
console.log(memberRole);
console.log(firstName);
console.log(fAddress);
console.log(FCname);

// ASSIGMENT

let {
  animalType,
  animalName: {
    scientific: { name: scientificname },
  },
  animalName: {
    callable: { name: callablename },
  },
} = {
  animalType: "mammal",
  animalHabitat: "land",
  animalName: {
    scientific: {
      name: "ursidae",
    },
    callable: {
      name: "butterfly",
    },
  },
};

console.log(animalType, scientificname, callablename);

//(print StudentRole,Studentfirstname,first Subject name and first Subject address name)

let {
  StudentRole,

  StudentDetails: {
    StudentPersonalDetails: { firstname },
  },

  StudentDetails: {
    StudentFamilyDetails: {
      SubjectDetails: {
        firstSubject: { name: firstSubjectname },
      },
    },
  },

  StudentDetails: {
    StudentFamilyDetails: {
      SubjectDetails: {
        firstSubject: {
          adress: { name: addressname },
        },
      },
    },
  },
} = {
  StudentId: "P200",
  StudentRole: "manager",
  StudentDetails: {
    StudentPersonalDetails: {
      firstname: "sita",
      lastname: "pandey",
      from: "palpa",
      isStudent: true,
    },
    StudentFamilyDetails: {
      SubjectDetails: {
        hasSubject: true,
        numberofSubject: 2,
        firstSubject: {
          name: "hari",
          adress: {
            name: "palpa",
          },
        },
      },
    },
  },
};

console.log(StudentRole, firstname, firstSubjectname, addressname);
