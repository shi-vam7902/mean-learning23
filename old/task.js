//
async function waitForTime(time) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(time);
    }, time);
  });
}
(async () => {
  waitForTime(2000).then((t) => {
    console.log(t);
  });
  waitForTime(2000).then((t) => {
    console.log(t);
  });
  console.log("End");
})();
