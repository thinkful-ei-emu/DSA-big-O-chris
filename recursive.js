const countSheep = function(num) {
  if(num === 0) {// O(1)
    return 'All sheep jumped over the fence';// O(1)
  }
  return `${num}: Another sheep jump over the fence` + countSheep(num - 1);// O(n)
};
// O(n)
// console.log(countSheep(5));

function powerCalculator(base, exp){
  if(exp === 0){// O(1)
    return 1;// O(1)
  }
  if(exp < 0){// O(1)
    return 'exponent should be >= 0';// O(1)
  }
  return base * powerCalculator(base, exp-1);// O(n)
}
// O(n)
// console.log(powerCalculator(10,2));


const reverseString = string => {
  if(string.length === 0) {// O(1)
    return '';// O(1)
  }
  return string[string.length-1] + reverseString(string.slice(0, string.length-1));// O(n)
};
// console.log(reverseString('chris'));

const triNum = function(num) {
  if(num === 1){// O(1)
    return 1;// O(1)
  }
  if(num < 1){// O(1)
    return 'number must be greater than 0';// O(1)
  }
  return triNum(num-1) + num;// O(n)
};
// console.log(triNum(4));

const stringSplitter = string => {
  if(string.length === 0){// O(1)
    return '';// O(1)
  }
  if(string[0] === '/'){// O(1)
    return stringSplitter(string.slice(1));// O(1)
  }
  return string[0] + stringSplitter(string.slice(1));// O(n)
};
// O(n)
// console.log(stringSplitter('02/20/2020'));

const fibonacci = num => {
  if(num === 1){// O(1)
    return 1;// O(1)
  }
  if(num === 2){// O(1)
    return 1;// O(1)
  }
  let fib = fibonacci(num-2) + fibonacci(num - 1);// O(n)
  return fib;// O(1)
};
// O(n)
// console.log(fibonacci(7));

const factorial = num => {
  if( num === 1 ) {// O(1)
    return 1;// O(1)
  }
  return num * factorial(num-1);// O(n)
};
// O(n)
// console.log(factorial(5));

let mySmallMaze = [
  [' ', ' ', ' '],
  [' ', '*', ' '],
  [' ', ' ', 'e']
];
let maze = [
  [' ', ' ', ' ', '*', ' ', ' ', ' '],
  ['*', '*', ' ', '*', ' ', '*', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', '*', '*', '*', '*', '*', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', 'e']
];

const mazeEscape = (maze, position=0, ud=0,lr=0, direction='S', str = []) => {
  if(ud < 0 || lr < 0){
    return;
  }
  if(ud>=maze.length || lr>=maze[0].length){
    return;
  }
  str[position] = direction;
  position++;
  if(maze[ud][lr] === 'e'){
    return 'Found path to the exit: ' + str;
  }
  if(maze[ud][lr] === ' '){
    maze[ud][lr] = 's';
    mazeEscape(maze, position, ud, lr+1, 'R', str);
    mazeEscape(maze, position, ud, lr-1, 'L', str);
    mazeEscape(maze, position, ud+1, lr, 'D', str);
    mazeEscape(maze, position, ud-1, lr, 'U', str);
  }
  position--;
};
// O(n)
// console.log(mazeEscape('RRDDLLDDRRRRRR'));

let newMaze = [
  [' ', ' ', ' ', '*', ' ', ' ', ' '],
  ['*', '*', ' ', '*', ' ', '*', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', '*', '*', '*', '*', '*', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', 'e']
];
const solveMaze = (maze, position=0, ud=0,lr=0, direction='S', str = []) => {
  if(ud < 0 || lr < 0){
    return;
  }
  if(ud>=maze.length || lr>=maze[0].length){
    return;
  }
  str[position] = direction;
  position++;
  if(maze[ud][lr] === 'e'){
    return 'Found path to the exit: ' + str;
  }
  if(maze[ud][lr] === ' '){
    maze[ud][lr] = 's';
    solveMaze(maze, position, ud, lr+1, 'R', str);
    solveMaze(maze, position, ud, lr-1, 'L', str);
    solveMaze(maze, position, ud+1, lr, 'D', str);
    solveMaze(maze, position, ud-1, lr, 'U', str);
    maze[ud][lr] = ' ';
  }
  position--;
};
// O(n^4)
// console.log(solveMaze(newMaze, 0, 0, 0, 'S', []));

function anagrams(prefix, str){
  if(str.length <= 1){
    console.log(`The anagram is ${prefix}${str}`);
  } else {
    for(let i=0; i<str.length; i++){
      let currentLetter = str.substring(i, i+1); 
      let previousLetters = str.substring(0,i);
      let afterLetters = str.substring(i+1);
      anagrams(prefix+currentLetter, previousLetters+afterLetters);
    }
  }
}
// O(n^2)
// console.log(anagrams(' ', 'cheese'));

function orgChart(data, indent = 0) {
  let space = ' '.repeat(indent * 4); // O(1)
  Object.keys(data).forEach(key => {// O(n)
    console.log(space + key);
    orgChart(data[key], indent + 1);// O(1)
  });
}
// O(n)


// let organization = {
//   'Zuckerberg': {		
//     'Schroepfer': {
//       'Bosworth': {
//         'Steve':{},
//         'Kyle':{},
//         'Andra':{}
//       },
//       'Zhao': {
//         'Richie':{},
//         'Sofia':{},
//         'Jen':{}
//       },
//       'Badros': {
//         'John':{},
//         'Mike':{},
//         'Pat':{}
//       },
//       'Parikh': {
//         'Zach':{},
//         'Ryan':{},
//         'Tes':{}
//       }
//     },
//     'Schrage': {
//       'VanDyck': {
//         'Sabrina':{},
//         'Michelle':{},
//         'Josh':{}
//       },
//       'Swain': {
//         'Blanch':{},
//         'Tom':{},
//         'Joe':{}
//       },
//       'Frankovsky': {
//         'Jasee':{},
//         'Brian':{},
//         'Margaret':{}
//       }
//     },
//     'Sandberg': {
//       'Goler': {
//         'Eddie':{},
//         'Julie':{},
//         'Annie':{}
//       },
//       'Hernandez': {
//         'Rowi':{},
//         'Inga':{},
//         'Morgan':{}
//       },
//       'Moissinac': {
//         'Amy':{},
//         'Chuck':{},
//         'Vinni':{}
//       },
//       'Kelley': {
//         'Eric':{},
//         'Ana':{},
//         'Wes':{}
//       }
//     }}};

// orgChart(organization);

//input: 5      3
//output: 101   11

//
//5%2 = 1   5/2 = 2 (integer)
//2%2 = 0   2/2 = 1
//1%2 = 1   1/2 = 0

//3%2 = 1   3/2 = 1

//stop at 0

//
// function binaryRep(num){
//   //base case
//   if(num<= 0){
//     return' ';
//   }
//   let binary = num%2;
//   return binaryRep(Math.floor(num/2)) + binary;
// }

// console.log(binaryRep(37));