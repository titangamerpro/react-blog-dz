
import Layout from "./components/Layout";
import { posts } from "./utils/blog";


function App() {
  return (
    <>
     <Layout posts={posts} />
    </>
  );
}

export default App;
