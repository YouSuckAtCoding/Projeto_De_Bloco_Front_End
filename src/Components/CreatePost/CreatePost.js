import '../CreatePost/CreatePost.css'
import {id} from '../../storageKeys.js'
import {CreatePostUrl} from '../../Urls/PostUrls.js'

async function Post() {
    await fetch(CreatePostUrl,
        {
            method: 'POST',
            body: JSON.stringify({
                description: document.getElementById('description').value,
                userId: sessionStorage.getItem(id)
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        }).then((response) => {
            window.location.href = "http://localhost:3000";
        }
        ).catch((err) => {
            console.log(err.message);
        })    
}

export default function CreatePost() {
    return (
        <div className='CreatePostContainer'>
            <div className="FormContainer">
                <div class="mb-3">
                    <label for="exampleFormControlTextarea1" className="form-label text-light">Thinking about something?</label>
                    <textarea className="form-control" id="description" rows="5"></textarea>
                </div>
                <div className="col-auto">
                    <button onClick={Post} className="btn btn-primary mb-3">Post</button>
                </div>
            </div>
        </div>
    )
}
