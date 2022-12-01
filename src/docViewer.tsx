import DocViewer,{ DocViewerRenderers }  from "react-doc-viewer";
 
function DocuViewer() {
  const docs = [
    { uri: "https://url-to-my-pdf.pdf" },
   // { uri: require("./example-files/pdf.pdf") }, // Local File
  ];
  
 
  return <DocViewer documents={docs} pluginRenderers={DocViewerRenderers} />;
}

export default DocuViewer