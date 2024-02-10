function Validate(values) {
    let error = {};
    const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{6,}$/;
    const name_pattern = /^[a-zA-Z]+$/;

    if (values.firstName === "") {
        error.firstName = "First name should not be empty";
    } else if (!name_pattern.test(values.firstName)) {
        error.firstName = "First name should only contain letters";
    } else {
        error.firstName = "";
    }

    if (values.lastName === "") {
        error.lastName = "Last name should not be empty";
    } else if (!name_pattern.test(values.lastName)) {
        error.lastName = "Last name should only contain letters";
    } else {
        error.lastName = "";
    }

    if (values.email === "") {
        error.email = "Email should not be empty";
    } else if (!email_pattern.test(values.email)) {
        error.email = "Email format is incorrect";
    } else {
        error.email = "";
    }

    if (values.age === "") {
        error.age = "Age should not be empty";
    } else {
        error.age = "";
    }
    
    if (values.dob === "") {
        error.dob = "Date of birth should not be empty";
    } else {
        error.dob = "";
    }
    
    if (values.password === "") {
        error.password = "Password should not be empty";
    } else if (!password_pattern.test(values.password)) {
        error.password = "Password format is incorrect";
    } else {
        error.password = "";
    }

    return error;
}

export default Validate;
