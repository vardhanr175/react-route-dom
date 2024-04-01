import { Component } from "react";
import BlogItem from "../BlogItem";
import './style.css'


class BlogsList extends Component{
    state = {blogData : []}
   componentDidMount(){
    this.getBlogsData()
   }
   getBlogsData = async() =>{
        const responce = await fetch('https://apis.ccbp.in/blogs')
        const data = await responce.json()
        const updateData = data.map((element) => ({
            id:element.id,
            title:element.title,
            imageUrl:element.image_url,
            topic:element.topic,
            author:element.author,
       }))
    this.setState({blogData: updateData})
   }
   
    render(){
        const {blogData} = this.state
        return(
            <div className="head-wrapper">
                {blogData.map((item)=>(
                    <BlogItem blogdata={item} key={item.id} />
                ))}
            </div>
        )
    }
}


export default BlogsList