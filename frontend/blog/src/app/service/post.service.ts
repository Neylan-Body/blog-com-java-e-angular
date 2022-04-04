import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from '../model/Post';


@Injectable({
  providedIn: 'root'
})
export class PostService {

  post: Post = new Post
  postsUrl = 'http://localhost:3000/posts/'

  constructor(
    private http: HttpClient) { }

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(this.postsUrl)
  }

  postPost(post: Post) {
    return this.http.post<Post>(this.postsUrl, post)
  }

  getPostByName(name: string): Post {
    this.getPosts().subscribe(
      results => {
        for (let i = 0; i < results.length; i++) {
          if (results[i].name == name) {
            this.post = results[i]
          }
        }
      }
    );
    return this.post
  }
}
