function compareRobots(robot1, memory1, robot2, memory2) {
    const testCases = [];
    const LENGTH = 100;
    let robot1Score = 0, robot2Score = 0;
  
    for (let i = 0; i < LENGTH; i++) {
        testCases.push(VillageState.random()); 
    }
    
    for (let test of testCases) {
        robot1Score += getTurns(test, robot1, memory1);
        robot2Score += getTurns(test, robot2, memory2);
    }
    console.log({robotName: 'robot1', averageTurns: `${robot1Score / LENGTH}`});
    console.log({robotName: 'robot2', averageTurns: `${robot2Score / LENGTH}`});
}
  
function getTurns(state, robot, memory) {
    for (let turn = 0;; turn++) {
        if (state.parcels.length == 0) {
            return turn;
        }
        let action = robot(state, memory);
        state = state.move(action.direction);
        memory = action.memory;
    }
}
      
compareRobots(routeRobot, [], goalOrientedRobot, []);