import "./App.css";

function App() {
  return (
    <>
      <h1>Student Profile Dashboard</h1>

      <div className="container">
        <div className="card">
          <img
            src="https://img.magnific.com/free-photo/portrait-white-man-isolated_53876-40306.jpg?semt=ais_hybrid&w=740&q=80"
            alt="Student 1"
          />
          <p>Name: Rahul Sharma</p>
          <p>Course: B.Tech CSE</p> 
          <p>Year: 1st Year</p>
          <p>CGPA: 8.5</p>  
        </div>
 
        <div className="card">  
          <img
            src="https://img.freepik.com/free-photo/closeup-young-female-professional-making-eye-contact-against-colored-background_662251-651.jpg?semt=ais_hybrid&w=740&q=80"
            alt="Student 2"
          />
          <p>Name: Priya Singh</p>
          <p>Course: B.Tech</p>
          <p>Year: 1st Year</p>
          <p>CGPA: 9.2</p>
        </div>
      </div>
    </>
  );
}

export default App;