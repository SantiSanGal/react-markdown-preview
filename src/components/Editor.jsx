import './css/editor.css'

export const Editor = ({text,setText}) => {

    const handleChange = e => {
        console.log(e.target.value);
        setText(e.target.value)
    }

    return (
      <div className="container editorContainer">
          <div className="form-group">
            <label for="editor"><h4>Editor</h4></label>
            <textarea 
              onInput={handleChange} 
              defaultValue={text} class="form-control" name="editor" id="editor" rows="2"></textarea>
          </div>
      </div>
    )
}
