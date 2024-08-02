// let arr = ["helelo", "jidjfio", "uwteioroi", "djfiuriw", "tyuwye"];

// let first = document.getElementById("first");
// let second = document.getElementById("second");
// let third = document.getElementById("third");
// let fourth = document.getElementById("fourth");
// let fifth = document.getElementById("fifth");

// let arr2 = [first, second, third, fourth, fifth];

// async function startblinking(element, text){
//     let dots = ""
//     let blinkinterval = setInterval(() => {
//         dots = dots.length < 3 ? dots + "." :"";
//         element.innerText =text + dots;
//     }, 500);
//     return blinkinterval;
// }
// async function code(i) {
//     return new Promise ((resolve, reject)=>{
//         let blinkinterval = startblinking(arr2[i], arr[i])
//         setTimeout(() => {
//         clearInterval(blinkinterval)
//           arr2[i].innerText = arr[i]
//           if (i < arr2.length - 1){
//             let final = startblinking(arr2[i], arr[i])
//             setTimeout(() => {
//                 clearInterval(final)
//                 resolve()
//             }, Math.random()*10000);
//           }else{
//             resolve()
//           }
//           resolve()
//         }, Math.random() * 10000);
//     })
// }



// async function execution() {
//   await code(0);
//   await code(1);
//   await code(2);
//   await code(3);
//   await code(4);
// }
// execution();

function startBlinking(element, text) {
    let dots = '';
    let blinkInterval = setInterval(() => {
      dots = dots.length < 3 ? dots + '.' : '';
      element.innerText = text + dots;
    }, 300); 
    return blinkInterval;
  }
  

  let arr = ["initialized hacking, now reading your data", "reading your files", "password files detected", "sending all passwords and files to the server", "cleaning up"];

  let first = document.getElementById("first");
  let second = document.getElementById("second");
  let third = document.getElementById("third");
  let fourth = document.getElementById("fourth");
  let fifth = document.getElementById("fifth");
  
  let arr2 = [first, second, third, fourth, fifth];
  
  let timeout =(1 + 2* Math.random()) * 1000
  
  async function code(i) {
    return new Promise((resolve, reject) => {
      let blinkInterval = startBlinking(arr2[i], arr[i]);
      setTimeout(() => {
        clearInterval(blinkInterval);
        arr2[i].innerText = arr[i];
        if (i < arr2.length - 1) {
          let finalBlinkInterval = startBlinking(arr2[i], arr[i]);
          setTimeout(() => {
            clearInterval(finalBlinkInterval);
            resolve();
          }, timeout)
        } else {
          resolve();
        }
      }, timeout);
    });
  }

  async function last(){
    document.getElementById("sixth").innerText = "Now Cry😭😭"
  }
  
  async function execution() {
    await code(0);
    await code(1);
    await code(2);
    await code(3);
    await code(4);
    await last()
  }
  
  execution();
  