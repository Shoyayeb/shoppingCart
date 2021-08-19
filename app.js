function updateCaseNumber(isIncreasing) {
    const caseInput = document.getElementById("case-number");
    let caseNumber = caseInput.value;
    if (isIncreasing == true) {
        caseNumber = parseInt(caseNumber) + 1;
    } else if (caseNumber > 0) {
        caseNumber = parseInt(caseNumber) - 1;
    }
    caseInput.value = caseNumber;
    const caseTotal = document.getElementById("case-total");
    caseTotal.innerText = caseNumber * 59;
}
function updatePhoneNumber(isIncreasing) {
    const phoneInput = document.getElementById("phone-number");
    let phoneNumber = phoneInput.value;
    if (isIncreasing == true) {
        phoneNumber = parseInt(phoneNumber) + 1;
    } else if (phoneNumber > 0) {
        phoneNumber = parseInt(phoneNumber) - 1;
    }
    phoneInput.value = phoneNumber;
    const PhoneTotal = document.getElementById("phone-total");
    PhoneTotal.innerText = phoneNumber * 1219;
}
document.getElementById("phone-plus").addEventListener("click", function () {
    updatePhoneNumber(true);
})
document.getElementById("phone-minus").addEventListener("click", function () {
    updatePhoneNumber(false);
})
document.getElementById("case-plus").addEventListener("click", function () {
    updateCaseNumber(true);
})
document.getElementById("case-minus").addEventListener("click", function () {
    updateCaseNumber(false);
})
