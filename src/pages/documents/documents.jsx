import React from 'react';
import './documents.css'


function Document() {
    return (
            <div className="content-document">
                <div className="left-column-profile-document">{}</div>
                <div className="middle-column-profile-document">
                    <div className="general-profile-container-document">
                        <div class = "ctr-documents">
                                <div class ="ctr-head">
                                    <h3>Documents</h3>
                                    <div class = "header-document-left">
                                        <div class="search-document"> 
                                            <i class = "bb-icon-search"></i>
                                            <h4>Search Documents...</h4>
                                        </div>
                                        <button class="btn-search"> 
                                            <h4><i class = "bb-icon-download bb-icon-l"></i>Upload Files</h4>
                                        </button>
                                        <button class="btn-search"> 
                                            <h4><i class = "bb-icon-folder-alt bb-icon-l"></i>Create Folder</h4>
                                        </button> 
                                    </div>
                                </div>
                                <div class="tabla-documents">
                                <table>
                                    <tr>
                                        <th>NAME <i class = "bb-icon-angle-down bb-icon-l"></i></th>
                                        <th>MODIFIED <i class = "bb-icon-angle-down bb-icon-l"></i></th>
                                        <th>VISIBILITY <i class = "bb-icon-angle-down bb-icon-l"></i></th>
                                    </tr>
                                    <tr>
                                        <td><i class = "bb-icon-folder-alt bb-icon-l"></i>Presentacion</td>
                                        <td class = "fecha-document">June 5, 2020</td>
                                        <td class = "estado-document">Public</td>
                                    </tr>
                                    <tr>
                                        <td><i class = "bb-icon-file-pdf bb-icon-l"></i>Javascript desde 0</td>
                                        <td class = "fecha-document">June 5, 2020</td>
                                        <td class = "estado-document">Public</td>
                                    </tr>
                                    <tr>
                                        <td><i class = "bb-icon-file-pdf bb-icon-l"></i>Como conquistar a Ana en 3 pasos</td>
                                        <td class = "fecha-document">June 5, 2020</td>
                                        <td class = "estado-document">Public</td>
                                    </tr>
                                    <tr>
                                        <td><i class = "bb-icon-file-doc bb-icon-l"></i>Trabajo de Agra</td>
                                        <td class = "fecha-document">June 5, 2020</td>
                                        <td class = "estado-document">Public</td>
                                    </tr>
                                    </table>  
                                </div>
                            </div>
                        </div>
                </div>
            </div>
    );
}

export default Document;