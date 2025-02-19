import React, { useState } from 'react'
import explorer from "./Data/data.js"
import Folder from "./Explorer/Folder"
import useTraverseTree from './hooks/useTraverseTree.js'

const Explorer = () => {
    const [explorerData, setExplorerData] = useState(explorer)
    const {insertNode} = useTraverseTree();

    const handleInsertNode = (folderId, item, isFolder) => {
        const finalTree = insertNode(explorerData, folderId, item, isFolder);
        setExplorerData(finalTree)
    }
    // console.log(explorerData)
  return (
    <Folder handleInsertNode={handleInsertNode} explorer={explorerData}/>
  )
}

export default Explorer