import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Post from '../components/Post';
import { getPost } from '../modules/posts';
import { reducerUtils } from '../lib/asyncUtils';

function PostContainer({ postId }) {
    const { data, loading, error } = useSelector(
        state => state.posts.post[postId] || reducerUtils.initial()
    );
    const dispatch = useDispatch();

    useEffect(() => {
        if (data) return;
        dispatch(getPost(postId));
    }, [dispatch, postId]);

    if (loading && !data) return <div>loading..</div>;
    if (error) return <div>error!</div>;
    if (!data) return null;

    return (
        <Post post={data} />
    );
}

export default PostContainer;