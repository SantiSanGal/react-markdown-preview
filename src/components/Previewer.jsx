import MarkdownPreview from '@uiw/react-markdown-preview';

export const Previewer = ({text}) => {
  const source = text
  return (
    <div className="container previewerContainer" id="preview">
        <div className="container">
            <h1>Previewer</h1>
        </div>
        <div className="container">
          <MarkdownPreview source={source}/>
        </div>
    </div>
  )
}
