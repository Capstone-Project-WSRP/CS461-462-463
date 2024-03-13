const wt_html = `
    <html>
        <p> TBD </p>
    </html>
`

function SMwalkthrough() {
    return (
      <div dangerouslySetInnerHTML={{ __html: wt_html }} />
    );
  }

  export default SMwalkthrough