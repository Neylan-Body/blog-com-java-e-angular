import { Component, OnInit } from '@angular/core';
import { PostService } from '../service/post.service';
import { Post } from '../model/Post';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {

  listPost: Post[];
  post: Post = new Post;
  name: string;

  constructor(private postService: PostService) { }

  ngOnInit(): void {
    // this.findPosts();
  }

  // findPosts(){
  //   this.postService.getPosts().subscribe(() => (data: Post[]) => {
  //     this.listPost = data;
  //   })
  // }

  findPosts() {
    this.postService.getPosts().subscribe(
      data => {
        this.listPost = data}
    );
  }

  createPost(){
    this.postService.postPost(this.post).subscribe(
      data => {
        this.post = data
        location.assign('/feed')
      }
    )
  }

  findByName(){    
    this.listPost = []
    this.listPost.push(this.postService.getPostByName(this.name))
  }
}
