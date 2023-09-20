export const Editor = ({text,setText}) => {

    const handleChange = e => {
        console.log(e.target.value);
        setText(e.target.value)
    }

    return (
      <div className="container editorContainer">
          <div class="form-group">
            <label for="editor"><h1>Editor</h1></label>
            <textarea onInput={handleChange} defaultValue={text} class="form-control" name="editor" id="editor" rows="2"></textarea>
          </div>
      </div>
    )
}
