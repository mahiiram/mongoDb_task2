db.learner.insertMany([
    {
      id: 1,
      name: "Mahi",
      email: "Mahi@mail.com",
      placement: "HCL",
      tasksSubmittedOn: new Date("2-oct-2020"),
      attendance:"63%",
      status:"absent"
    },
    {
      id: 2,
      name: "Ram",
      email: "ram@mail.com",
      placement: "Infotech",
      tasksSubmittedOn: new Date("3-oct-2020"),
      attendance:"65%",
      status:"absent"
    },
    {
      id: 3,
      name: "Kowshika",
      email: "kowshika@mail.com",
      placement: "Infosys",
      tasksSubmittedOn: new Date("15-oct-2020"),
      attendance:"88%",
      status:"present"
    },
    {
      id: 4,
      name: "Mahesh",
      email: "mahesh@mail.com",
      placement: "Mahindra",
      tasksSubmittedOn: new Date("19-oct-2020"),
      attendance:"76%",
      status:"present"
    },
    {
      id: 5,
      name: "Trisha",
      email: "trisha@mail.com",
      placement: "Oneplus",
      tasksSubmittedOn: new Date("19-oct-2020"),
      attendance:"93%",
      status:"present"
    },
  ]
  )



db.codekata.insertMany([
    {
        id:1,
        name:'Mahi',
        email:'mahi@mail.com',
        problems: 24
    },
    {
        id:2,
        name:'Ram',
        email:'ram@mail.com',
        problems:19
    },
    {
        id:3,
        name:'Kowshika',
        email:'kowshika@mail.com',
        problems:67
    },
    {
        id:4,
        name:'Mahesh',
        email:'mahesh@mail.com',
        problems:63
    },
    {
        id:5,
        name:'Trisha',
        email:'trisha@mail.com',
        problems:71
    }
])



db.attendance.insertMany([
    {
        id:1,
        name: "Mahi",
        email: "mahi@mail.com",
        attendance: '63%'
    },
    {
        id:2,
        name:'Ram',
        email:'ram@mail.com',
        attendance:'65%'
    },
    {
        id:3,
        name:'KoWshika',
        email:'koWshika@mail.com',
        attendance:'88%'
    },
    {
        id:4,
        name:'Mahesh',
        email:'mahesh@mail.com',
        attendance:'76%'
    },
    {
        id:5,
        name:'Trisha',
        email:'trisha@mail.com',
        attendance:'93%'
    }
])



db.topics.insertMany([
    {
        id:1,
        topics:'React',
        topicDate :new Date('18-oct-20')
    },
    {
        id:2,
        topics:'HTML',
        topicDate :new Date('9-oct-20')
    },
    {
        id:3,
        topics:'MongoDB',
        topicDate :new Date('22-oct-20')
    },
    {
        id:4,
        topics:'CSS',
        topicDate :new Date('2-oct-20')
    },
    {
        id:5,
        topics:'Javascript',
        topicDate :new Date('14-oct-20')
    }
])




db.tasks.insertMany([
    {
        tasksId: 1,
        topic: 'React',
        startDate: new Date("18-Oct-2020"),
        endDate: new Date("20-Oct-2020"),
        remarks:'nil'
    },
    {
        tasksId: 2,
        topic: 'HTML',
        startDate: new Date("9-Oct-2020"),
        endDate: new Date("11-Oct-2020"),
        remarks:'nil'
    },
    {
        tasksId: 3,
        topic: 'MongoDB',
        startDate: new Date("22-Oct-2020"),
        endDate: new Date("24-Oct-2020"),
        remarks:'nil'
    },
    {
        tasksId: 4,
        topic: 'CSS',
        startDate: new Date("12-oct-2020"),
        endDate: new Date("14-0ct-2020"),
        remarks:'nil'
    },
    {
        tasksId: 5,
        topic: 'Javascript',
        startDate: new Date("25-Oct-2020"),
        endDate: new Date("28-Oct-2020"),
        remarks:'nil'
    },
]);



db.drives.insertMany([
    {
        id:1,
        drivename:'HCL',
        date: new Date("19-oct-2020")
    },
    {
        id:2,
        drivename:'Infotech',
        date: new Date("17-oct-2020")
    },
    {
        id:3,
        drivename:'Infosys',
        date: new Date("26-oct-2020")
    },
    {
        id:4,
        drivename:'Mahindra',
        date: new Date("14-oct-2020")
    },
    {
        id:5,
        drivename:'Oneplus',
        date: new Date("12-oct-2020")
    }
]);



db.mentors.insertMany([
    {
        id:'Vishnu',
        menteecount:35,
        topics:'html',
        email:'Vishnu@mail.com'
    },
    
    {
        id:'Ruban',
        menteecount:28,
        topics:'Javascript',
        email:'ruban@mail.com'
    }
])