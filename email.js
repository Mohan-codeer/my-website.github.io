window.addEventListener('load', () => {
  document.getElementById('email').value = localStorage.getItem('email') || '';
  document.getElementById('subject').value = localStorage.getItem('subject') || '';
  document.getElementById('body').value = localStorage.getItem('body') || '';
});

const form = document.getElementById('myForm');

form.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent form from submitting traditionally

  const email = document.getElementById('email').value;
  const subject = document.getElementById('subject').value;
  const body = document.getElementById('body').value;

  console.log('Email:', email);
  console.log('Subject:', subject);
  console.log('Body:', body);

  localStorage.setItem('email', email);
  localStorage.setItem('subject', subject);
  localStorage.setItem('body', body);

  alert('Form data saved!');

  emailSend();

  form.reset(); // Reset the form fields after submission
});

function emailSend() {
  const email = document.getElementById('email').value;
  const subject = document.getElementById('subject').value;
  const body = document.getElementById('body').value;

  console.log('Sending email...');

  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "gollapalli.mp@gmail.com",  // Replace with your actual email
    Password: "A19157CADEE93BE83EF418928C0D6C3B73EE", // Replace with your actual secure password or API key
    To: "gollapalli.mp@gmail.com", // Replace with t.he recipient's email
    From: email,
    Subject: subject,
    Body: body,
  }).then(
    message => {
      console.log('Email send response:', message);
      alert('Email sent successfully: ' + message);
    }
  ).catch(error => {
    console.error('Email send failed:', error);
    alert('Failed to send email. Please try again.');
  });
}
