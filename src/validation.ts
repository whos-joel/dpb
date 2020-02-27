export function onload() {
    const inputs = document.forms[0].querySelectorAll("input");
    for (var i = 0; i < inputs.length; i++) {
        const input = inputs[i];
        var validation: Validation[] = [];
        var fieldName = input.previousElementSibling.innerHTML;
        if(input.attributes.getNamedItem("required") !== null)
            validation.push({validator: required, inValidMessage: `${fieldName} is a required field`});
        if(input.id === "email")
            validation.push({validator: email, inValidMessage: `Please enter a valid email`});
        if(validation.length > 0){
            (input as HTMLValidatableElement).validation = validation;
            input.addEventListener("change", inputChanged);
        }
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

function validate(input:HTMLValidatableElement){
    const validation = input.validation;
    const formGroup = input.closest(".form-group");
    const validationElement = formGroup.querySelector(".validation");

    for (let i = 0; i < validation.length; i++) {
        if(validation[i].validator(input.value)){
            validationCss(formGroup, "valid", "invalid");
            validationElement.innerHTML = "";
        }else{
            validationCss(formGroup, "invalid", "valid");
            validationElement.innerHTML = validation[i].inValidMessage;
            break;
        }   
    }
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

interface Validator{
    (val: string):boolean;
}

interface Validation{
    validator:Validator;
    inValidMessage:string;
}

interface HTMLValidatableElement extends HTMLInputElement{
    validation:Validation[]
}