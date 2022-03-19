import React, { useState } from 'react'

const Post = () => {

    const [image, setImage] = useState("");

    const [url, setUrl] = useState("");

    const uploadImage = () => {

        const data = new FormData()

        data.append("file", image)
        data.append("upload_preset", "ArtMart-Posts")
        data.append("cloud_name", "noco")
        fetch("https://api.cloudinary.com/v1_1/noco/image/upload", {
            method: "post",
            body: data
        })
            .then(resp => resp.json())
            .then(data => {
                console.log(data)
                setUrl(data.url)
            })
            .catch(err => console.log(err))
    }
    return (
        <div>
            <div>
                <input type="file" onChange={(e) => setImage(e.target.files[0])}></input>
                <button onClick={uploadImage}>Upload</button>
            </div>
            <div>
                <h1>Uploaded image will be displayed here</h1>
                <img src={url} />
            </div>
        </div>
    )
}
export default Post;