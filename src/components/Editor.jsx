export const Editor = ({setText}) => {

    const handleChange = e => {
        console.log(e.target.value);
        setText(e.target.value)
    }

    return (
      <div className="container editorContainer">
          <div class="form-group">
            <label for="editor">Editor</label>
            <textarea onInput={handleChange} class="form-control" name="editor" id="editor" rows="2"></textarea>
          </div>
      </div>
    )
}
