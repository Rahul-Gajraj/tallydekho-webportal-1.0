export const validateGSTIN = (gstin) => {
  if (!gstin) return "GSTIN is required";

  const gstinStr = gstin.toString().trim().toUpperCase();
  
  if (gstinStr.length !== 15) {
    return "GSTIN must be exactly 15 characters";
  }

  const gstinRegex = /^[0-9A-Z]{15}$/;
  if (!gstinRegex.test(gstinStr)) {
    return "GSTIN must contain only alphanumeric characters";
  }

  return true;
};

export const validatePAN = (pan) => {
  if (!pan) return "PAN is required";

  const panStr = pan.toString().trim().toUpperCase();

  if (panStr.length !== 10) {
    return "PAN must be exactly 10 characters";
  }

  const panRegex = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/;
  if (!panRegex.test(panStr)) {
    return "Invalid PAN format. Format: ABCDE1234F";
  }

  return true;
};

export const validateEmail = (email) => {
  if (!email) return "Email is required";

  const emailStr = email.toString().trim();

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(emailStr)) {
    return "Please enter a valid email address";
  }

  if (emailStr.length > 254) {
    return "Email address is too long";
  }

  return true;
};

export const validatePhone = (phone) => {
  if (!phone) return "Phone number is required";

  const phoneStr = phone.toString().trim().replace(/[\s-]/g, "");

  const cleanedPhone = phoneStr.replace(/^\+91/, "");

  const phoneRegex = /^[6-9][0-9]{9}$/;
  if (!phoneRegex.test(cleanedPhone)) {
    return "Please enter a valid 10-digit phone number";
  }

  return true;
};

export const validateWebsite = (website) => {
  if (!website) return "Website is required";

  const websiteStr = website.toString().trim();

  let urlToValidate = websiteStr;
  if (!websiteStr.startsWith("http://") && !websiteStr.startsWith("https://")) {
    urlToValidate = `https://${websiteStr}`;
  }

  try {
    const url = new URL(urlToValidate);
    if (!["http:", "https:"].includes(url.protocol)) {
      return "Website must use http or https protocol";
    }
    return true;
  } catch (error) {
    return "Please enter a valid website URL";
  }
};

export const validateDateNotFuture = (date) => {
  if (!date) return "Date is required";

  const inputDate = new Date(date);
  const today = new Date();
  today.setHours(23, 59, 59, 999);

  if (inputDate > today) {
    return "Date cannot be in the future";
  }

  return true;
};

export const validateEndDateAfterStart = (endDate, startDate) => {
  if (!endDate || !startDate) return true;

  const end = new Date(endDate);
  const start = new Date(startDate);

  if (end <= start) {
    return "End date must be after start date";
  }

  return true;
};

export const validateDateInFuture = (date) => {
  if (!date) return "Date is required";

  const inputDate = new Date(date);
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  if (inputDate <= today) {
    return "Date must be in the future";
  }

  return true;
};

export const validatePositiveNumber = (value, fieldName = "Value") => {
  if (value === null || value === undefined || value === "") {
    return `${fieldName} is required`;
  }

  const num = Number(value);
  if (isNaN(num)) {
    return `${fieldName} must be a valid number`;
  }

  if (num <= 0) {
    return `${fieldName} must be greater than 0`;
  }

  return true;
};

export const validateNonNegativeNumber = (value, fieldName = "Value") => {
  if (value === null || value === undefined || value === "") {
    return `${fieldName} is required`;
  }

  const num = Number(value);
  if (isNaN(num)) {
    return `${fieldName} must be a valid number`;
  }

  if (num < 0) {
    return `${fieldName} cannot be negative`;
  }

  return true;
};
