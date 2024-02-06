function toggleChat() {
    const chatContainer = document.getElementById('chat-container');
    const chatIcon = document.getElementById('chat-icon');

    if (chatContainer.style.display === 'none') {
      // Show chat container and hide chat icon
      chatContainer.style.display = 'block';
      chatIcon.style.display = 'none';
      setTimeout(function () {
        addMessage(' Welcome! How can I assist you today?', false);
      }, 500);
    } else {
      // Hide chat container and show chat icon
      chatContainer.style.display = 'none';
      chatIcon.style.display = 'block';
    }
  }
  function sendMessage() {
    var userInput = document.getElementById('userInput').value;

    // Check if the user input is not empty
    if (userInput.trim() !== '') {
      // Create a new user message element
      addMessage('' + userInput, true);

      // Clear the input field
      document.getElementById('userInput').value = '';

      // Simulate a delay and then show the bot's reply
      setTimeout(function () {
        // Bot's reply after 2 seconds
        addMessage(sumServices(), false);
      }, 2000);
    }

  }
  function addMessage(message, isUser) {
    // Check if the message is defined
    if (typeof message !== 'undefined' && message.trim() !== '') {
      // Create a new message element
      var messageElement = document.createElement('div');
      messageElement.className = 'alert ' + (isUser ? 'alert-primary text-right' : 'alert-secondary');

      // Set the inner HTML
      messageElement.innerHTML = '<strong>' + message + '</strong>';

      // Append the message to the chat box
      document.getElementById('chatBox').appendChild(messageElement);
      // Ensure the chat box always shows the latest message
      chatBox.scrollTop = chatBox.scrollHeight;
    }
  }
  // function addMessage(message, isUser) {
  //   // Create a new message element
  //   var messageElement = document.createElement('div');
  //   messageElement.className = 'alert ' + (isUser ? 'alert-primary text-right' : 'alert-secondary');

  //   // Set the inner HTML
  //   messageElement.innerHTML = '<strong>' + message + '</strong>';

  //   // Append the message to the chat box
  //   document.getElementById('chatBox').appendChild(messageElement);

  // }
  function addMessageWithDelay(message, isUser, delay) {
    setTimeout(function () {
      addMessage(message, isUser);
    }, delay);
  }

  function sumServices() {
    // Display a welcome message and then the summary of Springtide's services with a delay
    addMessageWithDelay(' At Springtide, we offer a range of real estate services:', false, 2000);
    addMessageWithDelay(' - Aggressive Marketing: Fast sales and lettings with effective strategies.', false, 4000);
    addMessageWithDelay(' - Targeted Marketing: Matching the right tenants to your property.', false, 6000);
    addMessageWithDelay('- Strategic Marketing: Developing and implementing programs for maximum occupancy and rental rates.', false, 8000);
  }


  // Particle.js configuration
  particlesJS('particles-js', {
    particles: {
      number: {
        value: 50,
        density: {
          enable: true,
          value_area: 800,
        },
      },
      color: {
        value: '#ffffff',
      },
      shape: {
        type: 'circle',
        stroke: {
          width: 0,
          color: '#000000',
        },
        polygon: {
          nb_sides: 5,
        },
      },
      opacity: {
        value: 0.5,
        random: false,
        anim: {
          enable: false,
          speed: 1,
          opacity_min: 0.1,
          sync: false,
        },
      },
      size: {
        value: 3,
        random: true,
        anim: {
          enable: false,
          speed: 40,
          size_min: 0.1,
          sync: false,
        },
      },
      line_linked: {
        enable: true,
        distance: 150,
        color: '#ffffff',
        opacity: 0.4,
        width: 1,
      },
      move: {
        enable: true,
        speed: 6,
        direction: 'none',
        random: false,
        straight: false,
        out_mode: 'out',
        bounce: false,
        attract: {
          enable: false,
          rotateX: 600,
          rotateY: 1200,
        },
      },
    },
    interactivity: {
      detect_on: 'canvas',
      events: {
        onhover: {
          enable: true,
          mode: 'repulse',
        },
        onclick: {
          enable: true,
          mode: 'push',
        },
        resize: true,
      },
      modes: {
        grab: {
          distance: 400,
          line_linked: {
            opacity: 1,
          },
        },
        bubble: {
          distance: 400,
          size: 40,
          duration: 2,
          opacity: 8,
          speed: 3,
        },
        repulse: {
          distance: 200,
          duration: 0.4,
        },
        push: {
          particles_nb: 4,
        },
        remove: {
          particles_nb: 2,
        },
      },
    },
    retina_detect: true,
  });
