import Container from "@/app/_components/container";
import { HeroPost } from "@/app/_components/hero-post";
import { Intro } from "@/app/_components/intro";
import { MoreStories } from "@/app/_components/more-stories";
import { getPostsByCategory } from "@/lib/api";
import { PostCategories } from "@/lib/constants";

export default function Racing() {
    const allPosts = getPostsByCategory(PostCategories.get("RACING"));

    if(allPosts !== null && allPosts.length > 0) {
        const heroPost = allPosts[0];

        const morePosts = allPosts.slice(1);

        return (
            <main>
                <Container>
                    <Intro />
                    <HeroPost
                    title={heroPost.title}
                    coverImage={heroPost.coverImage}
                    date={heroPost.date}
                    author={heroPost.author}
                    slug={heroPost.slug}
                    excerpt={heroPost.excerpt}
                    />
                    {morePosts.length > 0 && <MoreStories posts={morePosts} />}
                </Container>
            </main>
        );
    } else {
        return (
            <main>
                <Container>
                    <Intro />
                </Container>
            </main>
        );
    }
}
