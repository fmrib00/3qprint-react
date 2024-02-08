import BlogList from './BlogList';
import useFetch from './useFetch';

const Home = () => {
    const { data: blogs, isPending, error } = useFetch('http://localhost:8000/blogs');

    return (
        <div className="home">
            {isPending && <div>loading...</div>}
            {blogs && <BlogList blogs={blogs} />}
            {error && <h2>{ error }</h2>}
        </div>
    );
}

export default Home;