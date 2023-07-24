function getSprint(input) {
  let n = input.shift();
  let sprintBoards = [];

  for (let index = 0; index < n; index++) {
    let [assignee, taskId, title, status, estimatedPoints] = input
      .shift()
      .split(":");

    if (!sprintBoards.hasOwnProperty(assignee)) {
      sprintBoards[assignee] = [];
    }

    sprintBoards[assignee].push({
      taskId,
      title,
      status,
      estimatedPoints: Number(estimatedPoints),
    });
  }

  for (let index = 0; index < input.length; index++) {
    let [command, ...info] = input[index].split(":");

    if (command === "Add New") {
      let [assignee, taskId, title, status, estimatedPoints] = info;

      if (sprintBoards.hasOwnProperty(assignee)) {
        sprintBoards[assignee].push({
          taskId,
          title,
          status,
          estimatedPoints: Number(estimatedPoints),
        });
      } else {
        console.log(`Assignee ${assignee} does not exist on the board!`);
      }
    } else if (command === "Change Status") {
      let [assignee, taskId, status] = info;

      if (sprintBoards.hasOwnProperty(assignee)) {
        if (sprintBoards[assignee].some((x) => x.taskId == taskId)) {
          let taskToChangeStatusTo = sprintBoards[assignee].find(
            (x) => x.taskId === taskId
          );
          taskToChangeStatusTo.status = status;
        } else {
          console.log(`Task with ID ${taskId} does not exist for ${assignee}!`);
        }
      } else {
        console.log(`Assignee ${assignee} does not exist on the board!`);
      }
    } else if (command === "Remove Task") {
      let [assignee, index] = info;

      if (sprintBoards.hasOwnProperty(assignee)) {
        if (
          sprintBoards[assignee].length > Number(index) &&
          Number(index) >= 0
        ) {
          sprintBoards[assignee].splice(index, 1);
        } else {
          console.log("Index is out of range!");
        }
      } else {
        console.log(`Assignee ${assignee} does not exist on the board!`);
      }
    }
  }

  let sprintValues = Object.values(sprintBoards);
  let todoPts = 0;
  let inProgressPts = 0;
  let codeReviewPts = 0;
  let donePts = 0;

  for (const iterator of sprintValues) {
    for (const key of iterator) {
      if (key.status === "ToDo") {
        todoPts += key.estimatedPoints;
      } else if (key.status === "In Progress") {
        inProgressPts += key.estimatedPoints;
      } else if (key.status === "Code Review") {
        codeReviewPts += key.estimatedPoints;
      } else {
        donePts += key.estimatedPoints;
      }
    }
  }

  console.log(`ToDo: ${todoPts}pts`);
  console.log(`In Progress: ${inProgressPts}pts`);
  console.log(`Code Review: ${codeReviewPts}pts`);
  console.log(`Done Points: ${donePts}pts`);

  if (donePts >= inProgressPts + codeReviewPts + todoPts) {
    console.log("Sprint was successful!");
  } else {
    console.log("Sprint was unsuccessful...");
  }
}

getSprint(    [
  '5',
  'Kiril:BOP-1209:Fix Minor Bug:ToDo:3',
  'Mariya:BOP-1210:Fix Major Bug:In Progress:3',
  'Peter:BOP-1211:POC:Code Review:5',
  'Georgi:BOP-1212:Investigation Task:Done:2',
  'Mariya:BOP-1213:New Account Page:In Progress:13',
  'Add New:Kiril:BOP-1217:Add Info Page:In Progress:5',
  'Change Status:Peter:BOP-1290:ToDo',
  'Remove Task:Mariya:1',
  'Remove Task:Joro:1',
]
)
getSprint( [
  '4',
  'Kiril:BOP-1213:Fix Typo:Done:1',
  'Peter:BOP-1214:New Products Page:In Progress:2',
  'Mariya:BOP-1215:Setup Routing:ToDo:8',
  'Georgi:BOP-1216:Add Business Card:Code Review:3',
  'Add New:Sam:BOP-1237:Testing Home Page:Done:3',
  'Change Status:Georgi:BOP-1216:Done',
  'Change Status:Will:BOP-1212:In Progress',
  'Remove Task:Georgi:3',
  'Change Status:Mariya:BOP-1215:Done',
]
)
