function UPattren(len) {
  for (let i = 0; i < len; i++) {
    let line = "";
    for (let j = 0; j < len; j++) {
      if (j === len - 1 || j === 0 || i === len - 1) {
        line += "*";
      } else {
        line += " ";
      }
    }
    console.log(line);
  }
}

function MPattren(len, mid) {
  for (let i = 0; i < len; i++) {
    let line = "";
    for (let j = 0; j < len; j++) {
      if (j === 7 - 1 || j === 0) {
        line += "*";
      } else {
        line += " ";
      }
      if ((j === i && i <= mid) || (j === 7 - i - 1 && i <= mid)) {
        line += "*";
      } else {
        line += " ";
      }
    }
    console.log(line);
  }
}

function EPattren(len, mid) {
  for (let i = 0; i < len; i++) {
    let line = "";
    for (let j = 0; j < len; j++) {
      if (i === 7 - 1 || i === 0 || i === mid || j === 0) {
        line += "*";
      } else {
        line += " ";
      }
    }
    console.log(line);
  }
}

function HPattren(len, mid) {
  for (let i = 0; i < len; i++) {
    let line = "";
    for (let j = 0; j < len; j++) {
      if (j === 7 - 1 || j === 0 || i === mid) {
        line += "*";
      } else {
        line += " ";
      }
    }
    console.log(line);
  }
}

function BPattren(len, mid) {
  for (let i = 0; i < len; i++) {
    let line = "";
    for (let j = 0; j < len; j++) {
      if (i === mid || j === 0 || j === len - 1 || i === len - 1 || i === 0) {
        line += "*";
      } else {
        line += " ";
      }
    }
    console.log(line);
  }
}

function IPattren(len, mid) {
  for (let i = 0; i < len; i++) {
    let line = "";
    for (let j = 0; j < len; j++) {
      if (j === mid || i === len - 1 || i === 0) {
        line += "*";
      } else {
        line += " ";
      }
    }
    console.log(line);
  }
}

function APattren(len, mid) {
  for (let i = 0; i < len; i++) {
    let line = "";
    for (let j = 0; j < len; j++) {
      if (j === 7 - 1 || j === 0 || i === mid || i === 0) {
        line += "*";
      } else {
        line += " ";
      }
    }
    console.log(line);
  }
}

function Space() {
  console.log("                                                  ");
  console.log("                                                  ");
}
function underScoreConsole() {
  console.log("--------------------------------------");
}

let len = 7;
let mid = Math.floor(len / 2);

UPattren(len);
Space();
for (let i = 0; i < 2; i++) {
  MPattren(len, mid);
  Space();
}
EPattren(len, mid);
for (let i = 0; i < 2; i++) {
  underScoreConsole();
}

HPattren(len, mid);
Space();
APattren(len, mid);
Space();
BPattren(len, mid);
Space();
IPattren(len, mid);
Space();
BPattren(len, mid);
Space();
APattren(len, mid);
Space();
