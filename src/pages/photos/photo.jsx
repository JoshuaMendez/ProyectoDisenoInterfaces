import React from 'react';
// timeline copia de profilepage
import './photo.css'

function Photo() {
    return (
        <div className="content-photo">
            <div className="middle-column-profile-photo">
                <div class = "ctr-photos">
                    <div class ="ctr-head">
                        <h3>Photos</h3>
                        <button class="btn-photos"> 
                            <h4>Add photos</h4>
                        </button>
                    </div>
                    <div class="nav-photos"> 
                        <button class="btn-photos btn-active"> 
                            <h4>Photos</h4>
                        </button>
                        <button class="btn-photos"> 
                            <h4>Albums</h4>
                        </button>
                    </div>
                    <div class = "collegue-photos">
                        <img src = "https://media.licdn.com/dms/image/v2/D4E03AQFeha-NvXWoDw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1715274045600?e=1735776000&v=beta&t=WF-AIf4v5qx-j7TzZQCYtZB2EaWcxFqIPqL-JD4st0g"></img>
                        <img src = "https://media.licdn.com/dms/image/v2/D4E03AQFeha-NvXWoDw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1715274045600?e=1735776000&v=beta&t=WF-AIf4v5qx-j7TzZQCYtZB2EaWcxFqIPqL-JD4st0g"></img>
                        <img src = "https://media.licdn.com/dms/image/v2/D4E03AQFeha-NvXWoDw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1715274045600?e=1735776000&v=beta&t=WF-AIf4v5qx-j7TzZQCYtZB2EaWcxFqIPqL-JD4st0g"></img>
                        <img src = "https://media.licdn.com/dms/image/v2/D4E03AQFeha-NvXWoDw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1715274045600?e=1735776000&v=beta&t=WF-AIf4v5qx-j7TzZQCYtZB2EaWcxFqIPqL-JD4st0g"></img>
                        <img src = "https://media.licdn.com/dms/image/v2/D4E03AQFeha-NvXWoDw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1715274045600?e=1735776000&v=beta&t=WF-AIf4v5qx-j7TzZQCYtZB2EaWcxFqIPqL-JD4st0g"></img>
                        <img src = "https://media.licdn.com/dms/image/v2/D4E03AQFeha-NvXWoDw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1715274045600?e=1735776000&v=beta&t=WF-AIf4v5qx-j7TzZQCYtZB2EaWcxFqIPqL-JD4st0g"></img>
                    </div>
                </div>
            </div>
            <div className="spacer-column-profile-photo">{}</div>
        </div>
    );
}

export default Photo;