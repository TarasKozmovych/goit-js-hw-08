import throttle from "lodash.throttle";
const STORAGE_KEY = 'feedback-form-state';
const refs = {
    form: document.querySelector('.feedback-form'),
};
refs.form.addEventListener('input', throttle(onInputChange, 500));
const save = (key, value) => {
    try {
        const serializedState = JSON.stringify(value);
        localStorage.setItem(key, serializedState);
    } catch (error) {
        console.error("Set state error: ", error.message);
    }
};

const load = key => {
    try {
        const serializedState = localStorage.getItem(key);
        return serializedState === null ? undefined : JSON.parse(serializedState);
    } catch (error) {
        console.error("Get state error: ", error.message);
    }
};

const remove = key => {
    try {
        localStorage.removeItem(key);
    } catch (error) {
        console.error("Get state error: ", error.message);
    }
};

loadPage();

refs.form.addEventListener('input', onInputChange)


function onInputChange(e) {
    const { name, value } = e.target;
    let savedData = load(STORAGE_KEY);
    savedData = savedData ? savedData : {};
    savedData[name] = value;
    save(STORAGE_KEY, savedData)
};

function loadPage() {
    const savedData = load(STORAGE_KEY);
    if (savedData) {
        Object.entries(savedData).forEach(([name, value]) => {
            refs.form.elements[name].value = value;
        })

    }
};
refs.form.addEventListener("submit", onFormSubmit);
function onFormSubmit(e) {
    e.preventDefault();
    const {
        elements: { email, message },
    } = e.currentTarget;

    if (name.value === '' || email.value === '') {
        return console.log('Будь ласка, заповніть усі поля!');
    }
    const formData = {
        email: email.value,
        message: message.value,
    };
    console.log(formData);
    remove(STORAGE_KEY);
    e.currentTarget.reset();
}







