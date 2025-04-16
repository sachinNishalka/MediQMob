export function validateFirstName(text, setFirstName) {
  if (text.length < 3) {
    setFirstName({
      value: text,
      isValid: false,
      validationMessage: "First name must be at least 3 characters",
    });
    return;
  }
  const nameRegex = /^[a-zA-Z\s]*$/;
  if (!nameRegex.test(text)) {
    setFirstName({
      value: text,
      isValid: false,
      validationMessage: "First name must contain only letters and spaces",
    });
    return;
  }
  setFirstName({
    value: text,
    isValid: true,
    validationMessage: "",
  });
}

export function validateLastName(text, setLastName) {
  if (text.length < 3) {
    setLastName({
      value: text,
      isValid: false,
      validationMessage: "Last name must be at least 3 characters",
    });
    return;
  }
  const nameRegex = /^[a-zA-Z\s]*$/;
  if (!nameRegex.test(text)) {
    setLastName({
      value: text,
      isValid: false,
      validationMessage: "Last name must contain only letters and spaces",
    });
    return;
  }
  setLastName({
    value: text,
    isValid: true,
    validationMessage: "",
  });
}

export function validateAge(text, setAge) {
  if (text.length < 1) {
    setAge({
      value: text,
      isValid: false,
      validationMessage: "Age must be at least 1",
    });
    return;
  }
  setAge({
    value: text,
    isValid: true,
    validationMessage: "",
  });
}

export function validateEmail(text, setEmail) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(text)) {
    setEmail({
      value: text,
      isValid: false,
      validationMessage: "Invalid email address",
    });
    return;
  }
  setEmail({
    value: text,
    isValid: true,
    validationMessage: "",
  });
}

export function validatePassword(text, setPassword) {
  if (text.length < 8) {
    setPassword({
      value: text,
      isValid: false,
      validationMessage: "Password must be at least 8 characters",
    });
    return;
  }
  setPassword({
    value: text,
    isValid: true,
    validationMessage: "",
  });
}

export function validateConfirmPassword(text, setConfirmPassword, password) {
  if (text !== password.value) {
    setConfirmPassword({
      value: text,
      isValid: false,
      validationMessage: "Passwords do not match",
    });
    return;
  }
  setConfirmPassword({
    value: text,
    isValid: true,
    validationMessage: "",
  });
}

export function validateAllFields(
  firstName,
  setFirstName,
  lastName,
  setLastName,
  age,
  setAge,
  email,
  setEmail,
  password,
  setPassword,
  confirmPassword,
  setConfirmPassword
) {
  if (firstName.value === "") {
    setFirstName({
      value: firstName.value,
      isValid: false,
      validationMessage: "First name is required",
    });
  }
  if (lastName.value === "") {
    setLastName({
      value: lastName.value,
      isValid: false,
      validationMessage: "Last name is required",
    });
  }
  if (age.value === "") {
    setAge({
      value: age.value,
      isValid: false,
      validationMessage: "Age is required",
    });
  }
  if (email.value === "") {
    setEmail({
      value: email.value,
      isValid: false,
      validationMessage: "Email is required",
    });
  }
  if (password.value === "") {
    setPassword({
      value: password.value,
      isValid: false,
      validationMessage: "Password is required",
    });
  }
  if (confirmPassword.value === "") {
    setConfirmPassword({
      value: confirmPassword.value,
      isValid: false,
      validationMessage: "Confirm password is required",
    });
  }
}

export function validateLoginFields(email, setEmail, password, setPassword) {
  if (email.value === "") {
    setEmail({
      value: email.value,
      isValid: false,
      validationMessage: "Email is required",
    });
  }
  if (password.value === "") {
    setPassword({
      value: password.value,
      isValid: false,
      validationMessage: "Password is required",
    });
  }
}
