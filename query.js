//Task 1

//for topicss
db.topics.aggregate([
    {
      $match: {
        $and: [
          {
            $or: [
              {
                topicDate: { $gte: new Date("1-oct-2020") },
                topicDate: { $lte: new Date("31-oct-2020") },
              },
            ],
          },
        ],
      },
    },
  ]);
  
  //for tasks
  db.tasks.aggregate([
    {
      $match: {
        $and: [
          {
            $or: [
              {
                topicDate: { $gte: new Date("1-oct-2020") },
                topicDate: { $lte: new Date("31-oct-2020") },
              },
            ],
          },
        ],
      },
    },
  ]);
  
  // Task 2
  
  db.drives.aggregate([
    {
      $match: {
        $or: [
          {
            date: { $gte: new Date("15-oct-2020") },
            date: { $lte: new Date("31-oct-2020") },
          },
        ],
      },
    },
  ]);
  
  //Task 3
  
  db.learner.find({
    placement: { $ne: null },
  });
  
  db.companydrives.find({
    date: { $ne: null },
  });
  
  // Task 4
  
  db.codekata.find({}, { name: 1, problems: 1, _id: 0 });
  
  // Task 5
  
  db.mentors.aggregate({
    $match: {
      menteecount: { $gt: 15 },
    },
  });
  
  //Task 6
  
  db.learner.aggregate(
    [
      {
        $match: {presentstatus:"absent"},
        $match: {
          $and:[
            {
              $or: [
                {
                  tasksSubmittedOn: {$gte: new Date("30-oct-2020")},
                  tasksSubmittedOn: {$lte: new Date("15-oct-2020")}
                }
              ]
            }]
        }
      }
    ]
    );