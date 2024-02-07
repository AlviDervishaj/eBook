export function Form() {
    return (
        <form id="generate_e_book_form">
            <div>
                <label htmlFor="topic">Topic</label>
                <input type="text" id="topic" name="topic" />
            </div>
            <div>
                <label htmlFor="audience">Audience</label>
                <input type="text" id="audience" name="audience" />
            </div>
            <div>
                <label htmlFor="author">Author</label>
                <input type="text" id="author" name="author" />
            </div>
            <button id="generate_e_book_button">Generate</button>
        </form>
    );  
}