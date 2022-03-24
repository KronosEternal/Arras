function closeArena() {
  ArenaClosed();
}

var loops = 0;
function ArenaClosed() {
  loops++;
  if (loops < 31) {
    setTimeout(ArenaClosed, 2000);
  } else {
    sockets.broadcast("Closing!");

    process.exit();
    global.restart;
  }
}

let spawnarenacloser = (loc, mode, type) => {
  let o = new Entity(loc);
  o.define(type);
  o.team = mode || -100;
  o.color = [35][-mode];
};
function threeHourRestart() {
  restart3hour();
}
var loops = 0;
function restart3hour() {
  loops++;
  if (loops < 3600000) {
    setTimeout(restart3hour, 1000);
  } else {
    sockets.broadcast("Arena Closed: No players can join");
    ArenaClosed();
    if (room.gameMode === "tdm")
      room["suss"].forEach(loc => {
        spawnarenacloser(
          loc,
          -0,
          ran.choose(
            [Class.arenaclosed, Class.arenacloser, Class.arenacloser],
            1
          )
        );
      });
    if (room.gameMode === "tdm")
      room["suss"].forEach(loc => {
        spawnarenacloser(
          loc,
          -0,
          ran.choose(
            [Class.arenacloser, Class.arenacloser, Class.arenacloser],
            1
          )
        );
      });
    if (room.gameMode === "tdm")
      room["suss"].forEach(loc => {
        spawnarenacloser(
          loc,
          -0,
          ran.choose(
            [Class.arenacloser, Class.arenacloser, Class.arenacloser],
            1
          )
        );
      });
    if (room.gameMode === "tdm")
      room["suss"].forEach(loc => {
        spawnarenacloser(
          loc,
          -0,
          ran.choose(
            [Class.arenacloser, Class.arenacloser, Class.arenacloser],
            1
          )
        );
      });
  }
}
function modeclose() {
  closemode();
}
var loops = 0;
function closemode() {
  loops++;
  if (loops < 10) {
    setTimeout(closemode, 1000);
  } else {
    sockets.broadcast("Arena Closed");
    ArenaClosed();
    if (room.gameMode === "tdm")
      room["suss"].forEach(loc => {
        spawnarenacloser(
          loc,
          -0,
          ran.choose(
            [Class.CLOSER, Class.CLOSER, Class.CLOSER],
            1
          )
        );
      });
    if (room.gameMode === "tdm")
      room["suss"].forEach(loc => {
        spawnarenacloser(
          loc,
          -0,
          ran.choose(
            [Class.CLOSER, Class.CLOSER, Class.CLOSER],
            1
          )
        );
      });
    if (room.gameMode === "tdm")
      room["suss"].forEach(loc => {
        spawnarenacloser(
          loc,
          -0,
          ran.choose(
            [Class.CLOSER, Class.CLOSER, Class.CLOSER],
            1
          )
        );
      });
    if (room.gameMode === "tdm")
      room["suss"].forEach(loc => {
        spawnarenacloser(
          loc,
          -0,
          ran.choose(
            [Class.CLOSER, Class.CLOSER, Class.CLOSER],
            1
          )
        );
      });
  }
}