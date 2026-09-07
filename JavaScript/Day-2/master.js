let in1 = document.getElementById("in1");
let in2 = document.getElementById("in2");
let sub = document.getElementById("sub");
let res = document.getElementById("res");

//====================================//

sub.onclick = function() {
  
  let v1 = Number(in1.value);
  let v2 = Number(in2.value);
  
  if (isNaN(v1) || isNaN(v2) || in1.value === "" || in2.value === "") {
    res.innerHTML = `خطأ! الرجاء إدخال أرقام صالحة`;
    res.style.color = "red";
  } else {
    res.innerHTML = `أكبر رقم هو : ${Math.max(v1, v2)}`;
    res.style.color = "green";
  }
};
