// Header component
function Header() {
  return (
    <header>
      <h1>My React App</h1>
    </header>
  );
}
// Main component
function Main() {
  return (
    <main>
      <h2>Welcome to my React App!</h2>
      <p>This is the main content area.</p>
    </main>
  );
}
// Footer component
function Footer() {
  return (
    <footer>
      <p>&copy; 2023 My React App</p>
    </footer>
  );
}
// App component that uses the Header, Main, and Footer components
function App() {
  return (
    <div>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}
export default App;
