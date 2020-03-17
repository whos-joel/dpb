export function onload() {
    setHtmlElements();
    const inputs = document.forms[0].querySelectorAll("input, textarea");
    for (var i = 0; i < inputs.length; i++) {
        const input = inputs[i];
        var validation: Validation[] = [];
        var fieldName = input.previousElementSibling.innerHTML;
        if (input.attributes.getNamedItem("required") !== null)
            validation.push({ validator: required, invalidMessage: `${fieldName} is a required field` });
        if (input.id === "email")
            validation.push({ validator: email, invalidMessage: `Please enter a valid email` });
        if (validation.length > 0) {
            (input as HTMLValidatableElement).validation = validation;
            input.addEventListener("change", inputChanged);
        }
    }
    const btn = document.querySelector("#send-email");
    btn.addEventListener("click", () => {
        if (validateAll()) {
            displayProgress();
            sendEmail(getEmailModel())
                .then((result: string) => {
                    displayResult("Thank you for your inquiry, we will respond to you as soon as possible. If you need to get in contact urgently please call us on <a href=\"0415249977\">0415 249 977</a>.");
                })
                .catch((error) => {
                    displayError("Sorry there's been a problem sending your inquiry. Please give us a call on <a href=\"0415249977\">0415 249 977</a> and we'll be more than happy to talk.");
                });
        }
    });
}

let formContainer: HTMLElement;
let form: HTMLElement;
let resultPanel: HTMLElement;

function setHtmlElements(){
    formContainer = document.querySelector(".form-container") as HTMLElement;
    form = document.querySelector("#form") as HTMLElement;
}

function displayProgress() {
    resultPanel = document.createElement("div");
    resultPanel.classList.add("result-panel", "progress");
    resultPanel.style.height = `${form.getBoundingClientRect().height}px`;
    formContainer.appendChild(resultPanel);
    form.style.display = "none";
}

function displayResult(result: string) {
    resultPanel.classList.remove("progress");
    resultPanel.innerHTML = `<p>${result}</p>`;
    displayFormBtn();
}

function displayFormBtn() {
    let formBtn = document.createElement("a");
    formBtn.innerHTML = "Return to Inquiry Form";
    formBtn.classList.add("form-btn");
    formBtn.addEventListener("click", () => { displayForm() });
    resultPanel.appendChild(formBtn);
}

function displayError(error: string) {
    resultPanel.classList.remove("progress");
    resultPanel.classList.add("error");
    resultPanel.innerHTML = `<p>${error}</p>`;
    displayFormBtn();
}

function displayForm() {
    resultPanel.remove();
    form.style.display = "block";
    clearFrom();
}

function clearFrom(){
    const inputs = document.forms[0].querySelectorAll("input, textarea") as NodeListOf<HTMLInputElement>;
    for (const input of inputs) {
        input.value = "";
    }
}

function inputChanged(ev: Event) {
    const input = ev.target as HTMLValidatableElement;
    validate(input);
    input.addEventListener("keyup", inputKeyup)
}

function inputKeyup(ev: Event) {
    const input = ev.target as HTMLValidatableElement;
    validate(input);
}

function validate(input: HTMLValidatableElement) {
    const validation = input.validation;
    if (validation) {
        const formGroup = input.closest(".form-group");
        const validationElement = formGroup.querySelector(".validation");

        for (let i = 0; i < validation.length; i++) {
            if (validation[i].validator(input.value)) {
                validationCss(formGroup, "valid", "invalid");
                validationElement.innerHTML = "";
                input.isValid = true;
            } else {
                validationCss(formGroup, "invalid", "valid");
                validationElement.innerHTML = validation[i].invalidMessage;
                input.isValid = false;
                break;
            }
        }
    }
}

function getEmailModel(): EmailModel {
    return {
        senderName: getInputValue("name"),
        senderEmail: getInputValue("email"),
        subject: "Customer Inquiry",
        telephone: getInputValue("tel"),
        message: getInputValue("question")
    };
}

function sendEmail(model: EmailModel): Promise<any> {
    return new Promise((resolve, reject) => {
        let xhr = new XMLHttpRequest();
        xhr.addEventListener("load", () => {
            resolve(xhr.response);
        });
        xhr.addEventListener("error", () => {
            reject(xhr.status);
        });
        xhr.open("POST", "https://dpb-emailer.azurewebsites.net/api/SendEmail");
        xhr.send(JSON.stringify(model));
    })
}

function getInputValue(id: string): string {
    return getInputById(id).value;
}

function getInputById(id: string): HTMLInputElement {
    return (document.forms[0].querySelector(`#${id}`) as HTMLInputElement);
}

function validateAll(): boolean {
    let isValid = true;
    let inputs = document.forms[0].querySelectorAll("input, textarea") as NodeListOf<HTMLValidatableElement>
    for (let input of inputs) {     
        validate(input);
        if (input.isValid === false)
            isValid = false;
    }
    return isValid;
}

function validationCss(element: Element, cssToAdd: string, cssToRemove: string) {
    if (!element.classList.contains(cssToAdd))
        element.classList.add(cssToAdd)
    if (element.classList.contains(cssToRemove))
        element.classList.remove(cssToRemove)
}

function required(val: string): boolean {
    return val !== undefined && val !== ""
}

function email(val: string): boolean {
    if (val === undefined)
        return true;
    const pattern = /\S+@\S+\.\S+/;
    return pattern.test(val);
}

interface Validator {
    (val: string): boolean;
}

interface Validation {
    validator: Validator;
    invalidMessage: string;
}

interface HTMLValidatableElement extends HTMLInputElement {
    validation: Validation[];
    isValid: boolean;
}

interface EmailModel {
    senderName: string;
    senderEmail: string;
    telephone: string;
    subject: string;
    message: string;
}