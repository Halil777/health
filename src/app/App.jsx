import Navbar from "../components/navbar/Navbar";
import Category from "../pages/category/Category";
import BadHabits from "../pages/habit/BadHabits";
import News from "../pages/news/News";

const App = () => {
  return (
    <div>
      <Navbar />
      <Category />
      <BadHabits />
      <News />
    </div>
  );
};

export default App;
