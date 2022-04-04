import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from '../model/Post';


@Injectable({
  providedIn: 'root'
})
export class PostService {

  postsUrl = 'http://localhost:3000/posts/'

  constructor(
    private http: HttpClient) { }

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(this.postsUrl)
  }

  postPost(post: Post) {
    return this.http.post<Post>(this.postsUrl, post)
  }
}
