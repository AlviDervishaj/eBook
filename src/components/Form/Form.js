import "./Form.css";

export function Form() {
  return (
    <form id="generate_e_book_form">
      <div className="generate_e_book_group group">
        <label htmlFor="topic">Topic</label>
        <input type="text" id="topic" name="topic" />
      </div>
      <div className="generate_e_book_group group">
        <label htmlFor="audience">Audience</label>
        <input type="text" id="audience" name="audience" />
      </div>
      <div className="generate_e_book_group group">
        <label htmlFor="author" className="group-focus-within:text">Author</label>
        <input type="text" id="author" name="author" />
      </div>
      <button id="generate_e_book_button">Generate</button>
    </form>
  );
}
