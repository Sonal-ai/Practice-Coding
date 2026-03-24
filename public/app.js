function App() {
  const [questions, setQuestions] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState('');

  const fetchQuestions = React.useCallback(async () => {
    try {
      setLoading(true);
      setError('');
      const res = await fetch('/api/questions');
      if (!res.ok) {
        throw new Error('Failed to load questions');
      }
      const data = await res.json();
      setQuestions(data);
    } catch (e) {
      console.error(e);
      setError(e.message || 'Error loading questions');
    } finally {
      setLoading(false);
    }
  }, []);

  React.useEffect(() => {
    fetchQuestions();
  }, [fetchQuestions]);

  const handleToggle = async (id) => {
    try {
      const res = await fetch(`/api/questions/${id}/toggle`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
      });
      if (!res.ok) {
        throw new Error('Failed to toggle');
      }
      const updated = await res.json();
      setQuestions((prev) => prev.map((q) => (q._id === updated._id ? updated : q)));
    } catch (e) {
      console.error(e);
      alert('Could not update question. Please try again.');
    }
  };

  return (
    <div className="container">
      <header>
        <h1>Coding Practice Checklist</h1>
        <p>
          Shared list of basic programming problems. Tick them off as you
          practice; changes are saved so others can see the progress.
        </p>
        <p style={{ marginTop: '0.5rem', fontStyle: 'italic', fontSize: '0.9rem' }}>
          Questions sourced from the <a href="https://www.geeksforgeeks.org/computer-science-fundamentals/basic-programming-problems/" target="_blank" rel="noopener noreferrer">GeeksforGeeks Basic Programming Problems blog</a>.
        </p>
        <button onClick={fetchQuestions} className="refresh-btn">Reload list</button>
      </header>

      {loading && <p>Loading questions...</p>}
      {error && <p className="error">{error}</p>}

      <ol className="question-list">
        {questions.map((q, index) => (
          <li key={q._id} className={q.completed ? 'completed' : ''}>
            <label>
              <input
                type="checkbox"
                checked={q.completed}
                onChange={() => handleToggle(q._id)}
              />
              <span className="question-text">
                {index + 1}.{' '}
                <a href={q.url} target="_blank" rel="noopener noreferrer">
                  {q.title}
                </a>
                {q.practiceUrl && (
                  <span style={{ marginLeft: '10px', fontSize: '0.85em', color: '#ff6200' }}>
                    <a href={q.practiceUrl} target="_blank" rel="noopener noreferrer">[Practice]</a>
                  </span>
                )}
              </span>
            </label>
          </li>
        ))}
      </ol>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
