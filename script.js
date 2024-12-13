* {
  box-sizing: border-box;
}

body,
html {
  background-color: #1c1c1c;
  color: #c0c0c0;
  margin: 0;
  padding: 0;
  font-family: "Roboto", sans-serif;
  scroll-behavior: smooth;
}

.container {
  width: 100%;
  padding: 0;
}

.header {
  position: fixed;
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 20px;
  background-color: rgba(0, 0, 0, 0.9);
  top: 0;
  z-index: 100;
  transition: top 0.3s;
}

.header img {
  width: 100px;
  cursor: pointer;
}

.header nav {
  display: flex;
  gap: 20px;
}

.header nav a {
  color: #b8860b;
  padding: 10px;
  text-decoration: none;
  font-size: 20px;
  transition: 0.3s;
  position: relative;
}

.header nav a:hover {
  color: #ff4500;
  border-bottom: 2px solid #ff4500;
}

.middle {
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.car-models {
  display: flex;
  flex-wrap: nowrap;
  gap: 30px;
  padding: 50px;
  margin: 0;
  overflow-x: hidden; /* Scrollbar'ı gizle */
  cursor: grab; /* Mobilde daha rahat kaydırma */
  -ms-overflow-style: none;  /* Internet Explorer için */
  scrollbar-width: none; /* Firefox için scrollbar'ı gizle */
}

.car-models::-webkit-scrollbar {
  display: none; /* Webkit tarayıcılar için scrollbar'ı gizle */
}

.car {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background-color: #2e2e2e;
  border-radius: 10px;
  transition: transform 0.3s ease;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
  width: 400px;
  min-height: 700px;
  flex: 0 0 auto;
}

.car:hover {
  transform: scale(1.05);
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.7);
}

.car img {
  width: 100%;
  height: 300px;
  object-fit: cover;
  border-radius: 10px 10px 0 0;
  transition: transform 0.3s ease;
}

.car-details {
  padding: 20px;
  text-align: left;
  width: 100%;
}

.car-details h2 {
  color: #b8860b;
  text-align: center;
}

.car-details p {
  font-size: 16px;
  color: #c0c0c0;
}

.car-details .feature {
  font-weight: bold;
  color: #ff4500;
}

.car-details a {
  display: block;
  text-align: center;
  color: #ff4500;
  font-size: 18px;
  text-decoration: none;
  background-color: #2e2e2e;
  padding: 10px 20px;
  border-radius: 30px;
  transition: background-color 0.3s ease;
  margin-top: 10px;
}

.car-details a:hover {
  background-color: #ff4500;
  color: #fff;
}

/* Footer */
.footer {
  background-color: #333;
  color: #fff;
  padding: 40px 20px;
  text-align: center;
  font-size: 14px;
  margin-top: 60px;
}

.footer-container {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: flex-start;
  max-width: 1200px;
  margin: 0 auto;
}

.footer-logo {
  flex: 1;
  text-align: left;
}

.footer-logo .logo {
  width: 150px;
  margin-bottom: 10px;
}

.footer-logo p {
  font-size: 12px;
  color: #c0c0c0;
}

.footer-links,
.footer-social {
  flex: 1;
  text-align: left;
  margin-top: 20px;
}

.footer-links h3,
.footer-social h3 {
  font-size: 16px;
  margin-bottom: 10px;
  color: #b8860b;
}

.footer-links ul {
  list-style: none;
  padding: 0;
}

.footer-links ul li {
  margin: 8px 0;
}

.footer-links ul li a {
  color: #fff;
  text-decoration: none;
  transition: color 0.3s;
}

.footer-links ul li a:hover {
  color: #ff4500;
}

.footer-social .social-icons {
  display: flex;
  gap: 15px;
  justify-content: flex-start;
}

.footer-social .social-icon {
  font-size: 20px;
  color: #fff;
  transition: color 0.3s;
}

.footer-social .social-icon:hover {
  color: #ff4500;
}

@media (max-width: 768px) {
  /* Mobile view adjustments */
  .header {
    flex-direction: row;
    align-items: center;
    padding: 10px;
    justify-content: space-between;
  }

  .header nav {
    flex-direction: row;
    gap: 10px;
  }

  .header img {
    order: 1; /* Ensures logo stays on the left */
  }

  .header nav {
    order: 2; /* Ensures contact is aligned to the right */
  }

  .car {
    width: 100%;
    min-height: 500px;
  }

  .car img {
    height: 200px;
  }

  .car-details {
    padding: 10px;
  }

  .footer-container {
    flex-direction: column;
    text-align: center;
  }

  .footer-logo {
    margin-bottom: 20px;
  }

  .footer-links,
  .footer-social {
    text-align: center;
  }
}
