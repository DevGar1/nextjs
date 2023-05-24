import Nav from "./components/Nav";
import Provider from "./components/Provider";
import "./globals.css";

export const metadata = {
  title: "Proptopia",
  desciption: "Discover & share IA Prompts",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <div className="main">
          <div className="gradient" />
        </div>
        <main className="app">
          <Nav />
          {children}
        </main>
      </body>
    </html>
  );
};

export default RootLayout;
