// let mycollegeMemberlist=[
//     {
//         id: 1,
//         memberName: 'sanjeev bhandari',
//         imageLink: '',
//         isPrincipal: 'true',
//         isViceprincipal: false,
//         subjectList:['E-commerce', 'computer-security'],
//         address:'Manigram',
//         isCoordinator:false,
//     },
//     {
//         id: 2,
//         memberName: 'shiva bhandari',
//         imageLink: '',
//         isPrincipal: 'false',
//         isViceprincipal: true,
//         subjectList:['E-commerce', 'computer-security'],
//         address:'butwal',
//         isCoordinator:true,
//     },
//     {
//         id: 3,
//         memberName: 'pooja sharma',
//         imageLink: '',
//         isPrincipal: 'false',
//         isViceprincipal: true,
//         subjectList:['E-commerce', 'computer-security'],
//         address:'Manigram',
//         isCoordinator:true,
//     },
//     {
//         id: 4,
//         memberName: 'samikshya bhusal',
//         imageLink: '',
//         isPrincipal: 'false',
//         isViceprincipal: true,
//         subjectList:['E-commerce', 'computer-security'],
//         address:'butwal',
//         isCoordinator:true,

    // },
    // {
    //     id: 5,
    //     memberName: 'anisha chhantel',
    //     imageLink: '',
    //     isPrincipal: 'false',
    //     isViceprincipal: true,
    //     subjectList:['E-commerce', 'computer-security'],
    //     address:'Manigram',
    //     isCoordinator:true,

    // },
    
// ];
// for(let i=0; i<mycollegeMemberlist.length;i++){
//     let {memberName, imageLink, isPrincipal, isViceprincipal,subjectList,address,isCoordinator}=mycollegeMemberlist[i];

//     console.log(memberName);
//     console.log(imageLink);
//     console.log(isPrincipal);
//     console.log(isViceprincipal);
//     console.log(subjectList);
//     console.log(address);
//     console.log(isCoordinator);
// },

// console.log(memberName.);

let nestedObject = {
    address: {
        from: {
            permanent: 'nepal',
            temporary: 'India',
        },
    },
};

let { permanent, temporary } = nestedObject.address.from;
console.log(`${permanent} -> ${temporary}`);