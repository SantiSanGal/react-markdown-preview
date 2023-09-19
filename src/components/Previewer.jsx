export const Previewer = ({text}) => {
  return (
    <div className="container previewerContainer" id="preview">
        <div className="container">
            <h1>Previewer</h1>
        </div>
        <div className="container">
            {text}
        </div>
    </div>
  )
}
