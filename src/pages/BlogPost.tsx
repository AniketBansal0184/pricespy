import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { Calendar, Clock, User, Tag, ArrowLeft, Share2, Heart, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { blogPosts, BlogPost as BlogPostType } from "@/data/blogPosts";

const BlogPost = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [post, setPost] = useState<BlogPostType | null>(null);
  const [relatedPosts, setRelatedPosts] = useState<BlogPostType[]>([]);

  useEffect(() => {
    if (id) {
      const foundPost = blogPosts.find(p => p.id === id);
      if (foundPost) {
        setPost(foundPost);
        // Get related posts from same category
        const related = blogPosts
          .filter(p => p.id !== id && p.category === foundPost.category)
          .slice(0, 3);
        setRelatedPosts(related);
      } else {
        navigate('/blog');
      }
    }
  }, [id, navigate]);

  if (!post) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Loading article...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-white/10 rounded-full blur-xl"></div>
        </div>

        <div className="relative container mx-auto px-4 py-12 max-w-4xl">
          <Link to="/blog">
            <Button variant="ghost" className="mb-8 text-white hover:bg-white/20 border-white/30">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blog
            </Button>
          </Link>

          <div className="text-center">
            <div className="flex items-center justify-center gap-4 mb-6">
              <Badge className="bg-white/90 text-blue-600 hover:bg-white">
                {post.category}
              </Badge>
              {post.featured && (
                <Badge className="bg-yellow-400 text-yellow-900 hover:bg-yellow-300">
                  Featured
                </Badge>
              )}
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              {post.title}
            </h1>

            <p className="text-xl text-blue-200 max-w-3xl mx-auto leading-relaxed mb-8">
              {post.excerpt}
            </p>

            <div className="flex items-center justify-center gap-8 text-sm text-blue-200">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>{new Date(post.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>{post.readTime}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16 max-w-4xl">
        {/* Article Content */}
        <article className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 md:p-12 mb-12">
          {/* Article Image */}
          <div className="aspect-video bg-gradient-to-r from-gray-400 to-gray-600 rounded-xl mb-8 relative overflow-hidden">
            <div className="absolute inset-0 bg-black/10"></div>
          </div>

          {/* Article Body */}
          <div className="prose prose-lg max-w-none">
            <div className="text-gray-700 leading-relaxed space-y-6">
              {post.content.split('\n\n').map((paragraph, index) => (
                <p key={index} className="text-lg leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          {/* Tags */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="text-sm font-medium text-gray-600 mr-2">Tags:</span>
              {post.tags.map((tag) => (
                <Badge key={tag} variant="secondary" className="text-sm">
                  <Tag className="w-3 h-3 mr-1" />
                  {tag}
                </Badge>
              ))}
            </div>
          </div>

          {/* Social Sharing */}
          <div className="mt-8 pt-8 border-t border-gray-200">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <Button variant="outline" size="sm" className="gap-2">
                  <Heart className="w-4 h-4" />
                  Like
                </Button>
                <Button variant="outline" size="sm" className="gap-2">
                  <Share2 className="w-4 h-4" />
                  Share
                </Button>
                <Button variant="outline" size="sm" className="gap-2">
                  <MessageCircle className="w-4 h-4" />
                  Comment
                </Button>
              </div>
              <div className="text-sm text-gray-500">
                Published on {new Date(post.date).toLocaleDateString()}
              </div>
            </div>
          </div>
        </article>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Related Articles</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {relatedPosts.map((relatedPost) => (
                <Card key={relatedPost.id} className="border-0 shadow-lg bg-white/80 backdrop-blur-sm overflow-hidden group hover:shadow-xl transition-all duration-300">
                  <div className="aspect-video bg-gradient-to-r from-gray-400 to-gray-600 relative overflow-hidden">
                    <div className="absolute inset-0 bg-black/10"></div>
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                      <Calendar className="w-4 h-4" />
                      {new Date(relatedPost.date).toLocaleDateString()}
                    </div>
                    <h3 className="font-semibold text-lg mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                      <Link to={`/blog/${relatedPost.id}`}>{relatedPost.title}</Link>
                    </h3>
                    <p className="text-gray-600 text-sm line-clamp-3 mb-4">
                      {relatedPost.excerpt}
                    </p>
                    <Button asChild variant="ghost" size="sm" className="p-0 h-auto text-blue-600 hover:text-blue-700">
                      <Link to={`/blog/${relatedPost.id}`}>Read More →</Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        )}

        {/* Newsletter Signup */}
        <section>
          <Card className="border-0 shadow-2xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">Stay Updated</h3>
              <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                Subscribe to our newsletter for the latest educational insights, product reviews, and study tips delivered to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 rounded-lg bg-white/10 border border-white/30 text-white placeholder:text-blue-200 focus:outline-none focus:ring-2 focus:ring-white/50"
                />
                <Button className="bg-white text-blue-600 hover:bg-blue-50 whitespace-nowrap">
                  Subscribe
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default BlogPost;
