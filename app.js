let currentplayer = "X";

let arr = Array(9).fill(null);

// console.log(array);

// check the winner

/* 
            [0, 1, 2], // Top row
            [3, 4, 5], // Middle row
            [6, 7, 8], // Bottom row
            [0, 3, 6], // Left column
            [1, 4, 7], // Middle column
            [2, 5, 8], // Right column
            [0, 4, 8], // Diagonal 1
            [2, 4, 6]  // Diagonal 2
   // row

   0 1 2
   3 4 5
   6 7 8

   // column

   0 3 6 
   1 4 7
   2 5 8

   // diagnoal

   0 4 8
   6 4 2


 */

function checkwinner() {
  if (
    // row
    (arr[0] != null && arr[0] == arr[1] && arr[1] == arr[2]) ||
    (arr[3] != null && arr[3] == arr[4] && arr[4] == arr[5]) ||
    (arr[6] != null && arr[6] == arr[7] && arr[7] == arr[8]) ||
    // col
    (arr[0] != null && arr[0] == arr[3] && arr[3] == arr[6]) ||
    (arr[1] != null && arr[1] == arr[4] && arr[4] == arr[7]) ||
    (arr[2] != null && arr[2] == arr[5] && arr[5] == arr[8]) ||
    // diagnoal
    (arr[0] != null && arr[0] == arr[4] && arr[4] == arr[8]) ||
    (arr[2] != null && arr[2] == arr[4] && arr[4] == arr[6])
  ) {
    // console.log(currentplayer);
    document.write(`winner is ${currentplayer}`);

    return;
  }

  // ek bhi null val nahi milti
  if (!arr.some((ele) => ele === null)) {
    document.write(`DRAW!`);
    return;
  }
}

function handleclick(el) {
  const ids = Number(el.id);

  if (arr[ids] !== null) return; // not to conver x to 0 and vice versa

  arr[ids] = currentplayer;
  el.innerText = currentplayer; // on display
  // ckeckwinners
  checkwinner();
  if (currentplayer === "X") {
    currentplayer = "O";
  } else {
    currentplayer = "X";
  }
}
