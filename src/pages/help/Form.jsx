
const Form = () => {
  return (
    <div>
        <h1>Send US Question</h1>
        <hr />
        <div className="form-container">
            <form>
                <label>
                    <span>Your Email:</span>
                    <input type="text" />
                </label>
                <label>
                    <span>Your Message:</span>
                    <textarea ></textarea>
                </label>
                <button className="button">Send</button>
            </form>
        </div>
    </div>
  )
}

export default Form