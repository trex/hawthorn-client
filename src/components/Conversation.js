import React from 'react';
import { Post } from './Post';
import { Thread } from './Thread';

export const Conversation = (props) => {
  let posts

  if (props.posts.length > 0) {
    posts = <div class="ml-0">
              {props.posts.map((post) =>
                <Post key={post.id} body={post.title} />
              )}
            </div>
  } else {
    posts = <p class='m-3 pb-3'>noone has responded yet, be the first to respond</p>
  }

  return (
    <div>
      <Thread threadId={props.id} body={props.title} />
      {posts}
    </div>
  )
};
