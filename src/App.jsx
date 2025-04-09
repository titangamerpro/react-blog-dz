import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import { posts } from "./utils/blog";


function App() {
  return (
    <>
      <div></div>
      <Header />
      <Home posts={posts} />
      <Footer />
    </>
  );
}

export default App;
