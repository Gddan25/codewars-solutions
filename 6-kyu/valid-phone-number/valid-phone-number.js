function validPhoneNumber(phoneNumber) {
    const pattern = /^\(\d{3}\)\s\d{3}-\d{4}$/
    
    return pattern.test(phoneNumber)
}