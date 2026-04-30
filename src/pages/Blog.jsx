// // Blog.jsx — Main page composer
// import BlogHero from "../components/resources-components/BlogHero";
// import BlogFilter from "../components/resources-components/BlogFilter";
// import BlogLatestArticles from "../components/resources-components/BlogLatestArticles";
// import BlogTrendingTopics from "../components/resources-components/BlogTrendingTopics";
// import BlogPopularPosts from "../components/resources-components/BlogPopularPosts";
// import BlogFeaturedArticles from "../components/resources-components/BlogFeaturedArticles";
// import BlogNewsletter from "../components/resources-components/BlogNewsLetter";

// const Blog = ({ data = {} }) => {
//     const {
//         hero = {},
//         filters = [],
//         latestArticles = {},
//         trendingTopics = {},
//         categories = {},
//         popularPosts = {},
//         popularPostsFeatured = {},
//         featuredArticles = {},
//         newsletter = {},
//     } = data;

//     return (
//         <div style={{
//             fontFamily: "'DM Sans', 'Helvetica Neue', sans-serif",
//             background: "#fff",
//             minHeight: "100vh",
//             marginTop: "50px",
//         }}>
//             <div className="container" style={{ maxWidth: "1200px", margin: "0 auto", padding: "12px 24px" }}>

//                 {/* Hero: Blog title + Featured post banner */}
//                 <BlogHero data={hero} />

//                 {/* Category filter tabs */}
//                 <BlogFilter filters={filters} />

//                 {/* 3-column main content */}
//                 <div style={{
//                     display: "grid",
//                     gridTemplateColumns: "1fr 1fr 1fr",
//                     gap: "40px",
//                     marginBottom: "24px",
//                 }}>
//                     {/* LEFT: Latest Articles */}
//                     <BlogLatestArticles data={latestArticles} />

//                     {/* CENTER: Trending Topics + Categories */}
//                     <BlogTrendingTopics trending={trendingTopics} categories={categories} />

//                     {/* RIGHT: Popular Posts (compact + featured) */}
//                     <BlogPopularPosts compact={popularPosts} featured={popularPostsFeatured} />
//                 </div>

//                 {/* Featured Articles — full width 3-col grid */}
//                 <BlogFeaturedArticles data={featuredArticles} />

//                 {/* Newsletter strip */}
//                 <BlogNewsletter data={newsletter} />
//             </div>

//             <style>{`
//                 @media (max-width: 900px) {
//                     .blog-main-grid {
//                         grid-template-columns: 1fr !important;
//                     }
//                 }
//             `}</style>
//         </div>
//     );
// };

// export default Blog;

// /* ─── Usage in App.jsx ──────────────────────────────────────────────────────────
// import Blog from "./pages/Blog";
// import { blogData } from "./data/blogData";

// <Route path="/blog" element={<Blog data={blogData} />} />
// ─────────────────────────────────────────────────────────────────────────────── */






// Blog.jsx — Main page composer
import BlogHero from "../components/resources-components/BlogHero";
import BlogFilter from "../components/resources-components/BlogFilter";
import BlogLatestArticles from "../components/resources-components/BlogLatestArticles";
import BlogTrendingTopics from "../components/resources-components/BlogTrendingTopics";
import BlogPopularPosts from "../components/resources-components/BlogPopularPosts";
import BlogFeaturedArticles from "../components/resources-components/BlogFeaturedArticles";
import BlogNewsletter from "../components/resources-components/BlogNewsLetter";

const Blog = ({ data = {} }) => {
    const {
        hero = {},
        filters = [],
        latestArticles = {},
        trendingTopics = {},
        categories = {},
        popularPosts = {},
        popularPostsFeatured = {},
        featuredArticles = {},
        newsletter = {},
    } = data;

    return (
        <div style={{
            fontFamily: "'DM Sans', 'Helvetica Neue', sans-serif",
            background: "#fff",
            minHeight: "100vh",
            marginTop: "50px",
        }}>
            <style>{`
                .blog-main-grid {
                    display: grid;
                    grid-template-columns: 1fr 1fr 1fr;
                    gap: 40px;
                    margin-bottom: 24px;
                }
                @media (max-width: 900px) {
                    .blog-main-grid {
                        grid-template-columns: 1fr;
                        gap: 48px;
                    }
                }
            `}</style>

            <div className="container" style={{ maxWidth: "1200px", margin: "0 auto", padding: "12px 24px" }}>

                {/* Hero: Blog title + Featured post banner */}
                <BlogHero data={hero} />

                {/* Category filter tabs */}
                <BlogFilter filters={filters} />

                {/* 3-column main content */}
                <div className="blog-main-grid">
                    {/* LEFT: Latest Articles */}
                    <BlogLatestArticles data={latestArticles} />

                    {/* CENTER: Trending Topics + Categories */}
                    <BlogTrendingTopics trending={trendingTopics} categories={categories} />

                    {/* RIGHT: Popular Posts (compact + featured) */}
                    <BlogPopularPosts compact={popularPosts} featured={popularPostsFeatured} />
                </div>

                {/* Featured Articles — full width 3-col grid */}
                <BlogFeaturedArticles data={featuredArticles} />

                {/* Newsletter strip */}
                <BlogNewsletter data={newsletter} />
            </div>
        </div>
    );
};

export default Blog;

/* ─── Usage in App.jsx ──────────────────────────────────────────────────────────
import Blog from "./pages/Blog";
import { blogData } from "./data/blogData";

<Route path="/blog" element={<Blog data={blogData} />} />
─────────────────────────────────────────────────────────────────────────────── */