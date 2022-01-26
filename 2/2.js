function timeoutPromiseResolve(interval) {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      resolve("successful");
    }, interval);
  });
}
function timeoutPromiseReject(interval) {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      reject("error");
    }, interval);
  });
}
function timeTest() {
  timeoutPromiseResolve(5000);
  timeoutPromiseReject(2000);
  timeoutPromiseResolve(3000);
}
let startTime = Date.now();
timeTest()
  .then(() => {})
  .catch((e) => {
    console.log(e);
    let finishTime = Date.now();
    3;
    let timeTaken = finishTime - startTime;
    alert("Time taken in milliseconds: " + timeTaken);
  });
// -----------------------------------------------
// این کد ارور داره و بعد ثانیه مشخص شده ریجکت میکنه ارور رو
// به دلیل اینکه اسنیک نیست timetest ()و
// then
// روی کد اعمال نمیشه

//  و باید به این شکل نوشته بشه

// timeoutPromiseResolve(5000).then
