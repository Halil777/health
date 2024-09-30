import { badHabits } from "../../data/badHabitsData";
import "./badHabitsTypes.css";

const BadHabitTypes = () => {
  return (
    <div className="badHabits_container">
      <h1>Zyýanly endigiň zeleli</h1>
      <div className="badHabits_list">
        {badHabits.map((habit) => (
          <div key={habit.id} className="badHabit_card">
            <img src={habit.image} alt={habit.name} />
            <div className="badHabit_content">
              <h2>{habit.name}</h2>
              <p>{habit.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BadHabitTypes;
