document.addEventListener("DOMContentLoaded", function() {
    document.getElementById('submit').addEventListener("click", alerting);
    
    function alerting() {
        const firstName = document.getElementById('first-name').value;
        const lastName = document.getElementById('last-name').value;
        const phoneNumber = document.getElementById('phone-number').value;
        const emailId = document.getElementById('email-id').value;
        
        alert(`First Name: ${firstName} Last Name: ${lastName} Phone Number: ${phoneNumber} Email ID: ${emailId}`);
    }
});