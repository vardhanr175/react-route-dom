import './style.css'


const  BlogItem = (props) =>{
        const {blogdata} = props
        const {imageUrl,author,title,topic} = blogdata
    return(
        <div className="blog-container">
            <div className="img-holder">
                <img src={imageUrl} alt="imageofblog" />
            </div>
            <div className="matter-holder">
                <h2>{title}</h2>
                <p>{topic}</p>
                <h4>{author}</h4>
            </div>
        </div>
    )

}

export default BlogItem