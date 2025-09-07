import { useState } from "react";
import { Link } from "react-router-dom";
import { Calendar, Clock, User, Tag, ArrowLeft, Search, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { blogPosts, blogCategories, BlogPost } from "@/data/blogPosts";

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const featuredPosts = blogPosts.filter(post => post.featured);
  const recentPosts = blogPosts.slice(0, 3);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-white/10 rounded-full blur-xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-white/5 rounded-full blur-2xl"></div>
        </div>

        <div className="relative container mx-auto px-4 py-16 max-w-6xl">
          <Link to="/">
            <Button variant="ghost" className="mb-8 text-white hover:bg-white/20 border-white/30">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </Link>

          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              BeyondSchoolSupply Blog
            </h1>
            <p className="text-xl md:text-2xl text-blue-200 max-w-3xl mx-auto leading-relaxed">
              Insights, tips, and guides for educational excellence
            </p>
            <p className="text-sm text-blue-300 mt-4">Your source for educational insights and product reviews</p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16 max-w-6xl">
        {/* Featured Posts */}
        {featuredPosts.length > 0 && (
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Featured Articles</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {featuredPosts.map((post) => (
                <Card key={post.id} className="border-0 shadow-2xl bg-white/80 backdrop-blur-sm overflow-hidden group hover:shadow-3xl transition-all duration-300">
                  <div className="aspect-video bg-gradient-to-r from-blue-400 to-purple-500 relative overflow-hidden">
                    <div className="absolute inset-0 bg-black/20"></div>
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-white/90 text-gray-900 hover:bg-white">Featured</Badge>
                    </div>
                  </div>
                  <CardHeader className="pb-4">
                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {new Date(post.date).toLocaleDateString()}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {post.readTime}
                      </div>
                      <div className="flex items-center gap-1">
                        <User className="w-4 h-4" />
                        {post.author}
                      </div>
                    </div>
                    <CardTitle className="text-xl group-hover:text-blue-600 transition-colors">
                      <Link to={`/blog/${post.id}`}>{post.title}</Link>
                    </CardTitle>
                    <CardDescription className="text-base text-gray-600">
                      {post.excerpt}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <div className="flex flex-wrap gap-2">
                        {post.tags.slice(0, 3).map((tag) => (
                          <Badge key={tag} variant="secondary" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      <Button asChild variant="ghost" size="sm">
                        <Link to={`/blog/${post.id}`}>Read More →</Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        )}

        {/* Search and Filter */}
        <section className="mb-12">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="flex gap-2 flex-wrap">
              {blogCategories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className="transition-all duration-200"
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* All Posts */}
        <section>
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-gray-900">
              {selectedCategory === "All" ? "All Articles" : `${selectedCategory} Articles`}
            </h2>
            <div className="text-sm text-gray-500">
              {filteredPosts.length} article{filteredPosts.length !== 1 ? 's' : ''} found
            </div>
          </div>

          {filteredPosts.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <Card key={post.id} className="border-0 shadow-xl bg-white/80 backdrop-blur-sm overflow-hidden group hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                  <div className="aspect-video bg-gradient-to-r from-gray-400 to-gray-600 relative overflow-hidden">
                    <div className="absolute inset-0 bg-black/10"></div>
                  </div>
                  <CardHeader className="pb-4">
                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {new Date(post.date).toLocaleDateString()}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {post.readTime}
                      </div>
                    </div>
                    <CardTitle className="text-lg group-hover:text-blue-600 transition-colors line-clamp-2">
                      <Link to={`/blog/${post.id}`}>{post.title}</Link>
                    </CardTitle>
                    <CardDescription className="text-sm text-gray-600 line-clamp-3">
                      {post.excerpt}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <div className="flex flex-wrap gap-1">
                        {post.tags.slice(0, 2).map((tag) => (
                          <Badge key={tag} variant="secondary" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      <Button asChild variant="ghost" size="sm" className="text-xs">
                        <Link to={`/blog/${post.id}`}>Read More</Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-8 h-8 text-gray-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No articles found</h3>
              <p className="text-gray-600 mb-6">Try adjusting your search terms or category filter</p>
              <Button onClick={() => { setSearchTerm(""); setSelectedCategory("All"); }}>
                Clear Filters
              </Button>
            </div>
          )}
        </section>

        {/* Newsletter Signup */}
        <section className="mt-16">
          <Card className="border-0 shadow-2xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">Stay Updated</h3>
              <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                Subscribe to our newsletter for the latest educational insights, product reviews, and study tips delivered to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <Input
                  placeholder="Enter your email"
                  className="bg-white/10 border-white/30 text-white placeholder:text-blue-200"
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

export default Blog;
