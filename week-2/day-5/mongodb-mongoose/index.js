import mongoose from "mongoose";
import Blog from "./model/Blog.js";

mongoose.connect("mongodb+srv://user:mongodb123@cluster0.5gtqk.mongodb.net/myDB?retryWrites=true&w=majority&appName=Cluster0");

const article = await Blog.create({
    title: 'Another Post!',
    slug: 'Another-Post',
    author: 'Ben Kalnbach',
    content: "The is so exciting, i love posting!",
    tags: ['features', 'annoucement']
});
// article.title = "My Fun Post!";
// await article.save();

// const blog = await Blog.deleteMany({
//     title: 'My first Post!'
// });

// const article = await Blog.findById("66f6be3cc5c6c1cd11b84df0", "title slug content").exec();

const blogFind = await Blog.findOne({
    author: "Ben Kalnbach"
});

//const blogWhere = await Blog.where("author").equals("Ben Kalnbach").select("title author");

console.log(blogFind);