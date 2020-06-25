const sleep = n => new Promise(resolve => setTimeout(resolve, n));

sleep(1000).then(() => console.log('hello world'));

const posts = [
    {
        id: 1,
        title: '멍!',
        body: '우디오디우디우디오디'
    },
    {
        id: 2,
        title: 'wof!',
        body: 'me missin elsa even though i never met her'
    },
    {
        id: 3,
        title: 'わん!',
        body: '日本にいる間知り合いの犬ってなかったんだ、、一匹も'
    },
]

export const getPosts = async () => {
    await sleep(500);
    return posts;
}

export const getPostById = async id => {
    await sleep(500);
    return posts.find(post => post.id === id);
}