function showData(e) {
  e.preventDefault();

  const firstName = document.getElementsByName("First Name")[0].value;
  const lastName = document.getElementsByName("Last Name")[0].value;
  const phone = document.getElementsByName("Phone Number")[0].value;
  const email = document.getElementsByName("Email ID")[0].value;

  alert(
    "First Name: " + firstName +
    " Last Name: " + lastName +
    " Phone Number: " + phone +
    " Email ID: " + email
  );
}
