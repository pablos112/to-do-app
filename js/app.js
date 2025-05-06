import { getMotivation } from "./motivation.js";

const inputText = document.querySelector(".input");
const buttonAdd = document.querySelector(".button-add");

const listsBlocks = document.querySelector(".lists__blocks");
const getList = localStorage.getItem("list");
const modalMotiovanion = document.querySelector(".modal__motiovanion");
const modalClose = document.querySelector(".modal__close");
function delTab() {
  const focus = document.querySelectorAll(
    "button, [href], input, select, textarea, [tabindex]:not([tabindex='-1'])"
  );

  focus.forEach((element) => {
    if (!modalMotiovanion.contains(element)) {
      element.setAttribute("tabindex", "-1");
    }
  });
}

function saveList() {
  localStorage.setItem("list", listsBlocks.innerHTML);
}

function addNewList() {
  if (inputText.value.trim() != "") {
    listsBlocks.insertAdjacentHTML(
      "afterbegin",
      `
               <div class="list__block">
                    <div title="DONE"  class="done__img">
<<<<<<< HEAD
                        <img class="done-img hidden" src="assets/icons/done.png" alt="">
=======
                        <img class="done-img hidden" src="assets/icons/done.png" alt="">
>>>>>>> 2ae2244e5e644d6987822cee1925c26225f28244
                    </div>
                    <div class="list__text">
                        <p class="list-text">${inputText.value}</p>
                    </div>
                    <div title="MOTIVATION TEXT" class="motivation__img">
                        <img class="motivation-img" src="assets/icons/motivation.png" alt="">
                    </div>
                    <div title="DELETE" class="trash__img">
                        <img class="trash-img" src="assets/icons/trash.png" alt="">
                    </div>
                </div>
              `
    );

    inputText.value = " ";
    saveList();
  }
}

function closeModal() {
  modalMotiovanion.classList.toggle("hidden");
  modalMotiovanion.querySelector(".modal__text").textContent = "Loading...";
}

async function createMotivationModal(text) {
  modalMotiovanion.classList.toggle("hidden");
  const motivationText = await getMotivation(text);
  modalMotiovanion.querySelector(".modal__text").textContent = motivationText;
}
if (getList) {
  listsBlocks.innerHTML = getList;
  saveList();
}

buttonAdd.addEventListener("click", addNewList);
document.addEventListener("keydown", (el) => {
  if (el.key === "Enter") {
    addNewList();
  }
});
modalClose.addEventListener("click", closeModal);

listsBlocks.addEventListener("click", (ev) => {
  if (ev.target.classList.contains("done__img") || ev.target.classList.contains("done-img") || ev.target.classList.contains("list__text")) {
    const listBlock = ev.target.closest(".list__block");
    listBlock.querySelector(".done-img").classList.toggle("hidden");
    listBlock.querySelector(".done__img").classList.toggle("done");
    listBlock.querySelector(".list__text").classList.toggle("done");
  } else if (ev.target.classList.contains("trash-img")) {
    ev.target.closest(".list__block").remove();
  } else if (ev.target.classList.contains("motivation-img")) {
    delTab();
    const listBlock = ev.target.closest(".list__block");
    createMotivationModal(listBlock.querySelector(".list__text").textContent);
  }
  saveList();
});
