
    let showingLogin = true;

    function toggleForms() {
      const slider = document.getElementById("formSlider");
      showingLogin = !showingLogin;
      if (showingLogin) {
        slider.classList.remove("slide-right");
        slider.classList.add("slide-left");
      } else {
        slider.classList.remove("slide-left");
        slider.classList.add("slide-right");
      }
    }

    function handleLogin() {
      const username = document.getElementById("loginUsername").value;
      const password = document.getElementById("loginPassword").value;
      if (!username || !password) {
        alert("Please fill in both fields.");
      } else {
        alert("Logged in as " + username);
      }
    }

    function handleSignup() {
      const username = document.getElementById("signupUsername").value;
      const email = document.getElementById("signupEmail").value;
      const password = document.getElementById("signupPassword").value;
      if (!username || !email || !password) {
        alert("Please complete all fields.");
      } else {
        alert("Account created for " + username);
      }
    }

    // Initialize with login view
    document.getElementById("formSlider").classList.add("slide-left");
