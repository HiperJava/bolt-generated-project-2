document.getElementById('subscriptionForm').addEventListener('submit', function(event) {
      event.preventDefault();
      const email = document.getElementById('email').value;
      alert(`Thank you for subscribing, ${email}!`);
    });
