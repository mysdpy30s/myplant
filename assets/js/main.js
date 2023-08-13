// 리스트 체크박스 //
document.addEventListener("DOMContentLoaded", function () {
  const checkAllCheckbox = document.getElementById("checkAll");
  const checkboxes = document.querySelectorAll(
    "input[type='checkbox']:not(#checkAll)"
  );

  checkAllCheckbox.addEventListener("change", function () {
    checkboxes.forEach((checkbox) => {
      checkbox.checked = checkAllCheckbox.checked;
      chgBg(checkbox);
    });
  });
});

// 체크박스 클릭시 테이블 줄 색상 변경하기 //
function chgBg(t) {
  let td = t.parentNode;
  let tr = td.parentNode;

  if (t.checked) {
    td.style.background = "linear-gradient(to right, #fff, #fff)";
    tr.style.background = "linear-gradient(to right, #fff, #fff2e3,  #E2EF9D)";
  } else {
    td.style.background = "linear-gradient(to right, #fff, #fff)";
    tr.style.background = "linear-gradient(to right, #fff, #fff)";
  }
}
