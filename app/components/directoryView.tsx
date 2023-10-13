import React, { useContext } from 'react';
import { Item } from './types';
import { WorkspaceContext } from './workspace';


interface DirectoryViewProps {
    directory: Item;
}

const DirectoryView: React.FC<DirectoryViewProps> = ({ directory }) => {
    const { addNote, addDirectory, setCurrentItem } = useContext(WorkspaceContext);

    const handleAddNote = () => {
        const fileName = window.prompt("Enter the name of the new note:");
        if (fileName === null) return;
        const noteText = window.prompt("Enter the text of the new note:");
        if (noteText === null) return;
        addNote(fileName, noteText);
    };

    const handleAddDirectory = () => {
        const dirName = window.prompt("Enter the name of the new directory:");
        if (dirName === null) return;
        addDirectory(dirName);
    };

    const handleItemClick = (item: Item) => {
        setCurrentItem(item);
    };

    return (
        <div>
            <button onClick={handleAddNote}>New Note</button>
            <button onClick={handleAddDirectory}>New Directory</button>
            <table>
                <tbody>
                    {directory.items?.map((childItem, index) => (
                        <tr key={index} onClick={() => handleItemClick(childItem)}>
                            <td>{childItem.name}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default DirectoryView;