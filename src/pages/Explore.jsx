import { motion } from "framer-motion";
import { useLocation } from "wouter";
import { useState } from "react";
import {
  TrendingUp,
  GitFork,
  Clock,
  BookOpen,
  Palette,
  Trophy,
  ArrowUpRight,
  Activity,
  Flame,
  Star,
  Eye,
  Heart,
  MessageCircle,
  PenTool,
  Users,
  ChevronRight,
  Sparkles,
  Zap,
  Feather,
  Globe,
  Bookmark,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

function Explore() {
  const [_, setLocation] = useLocation();
  const [activeGenre, setActiveGenre] = useState("All");

  const genres = ["All", "Tragedy", "Romance", "Gothic", "Satire", "Modernist", "Epic"];

  const trending = [
    {
      title: "The Creature's Soliloquy",
      source: "Frankenstein",
      author: "InkAndIron",
      forks: 47,
      views: 1240,
      likes: 89,
      tags: ["Villain Rev", "Gothic"],
      color: "bg-emerald-900",
      iconColor: "text-emerald-400",
    },
    {
      title: "If Myrtle Swerved",
      source: "The Great Gatsby",
      author: "GatsbyGhost",
      forks: 38,
      views: 980,
      likes: 72,
      tags: ["Counterfactual", "Modernist"],
      color: "bg-amber-900",
      iconColor: "text-amber-400",
    },
    {
      title: "Banquo's Warning",
      source: "Macbeth",
      author: "MacbethsDagger",
      forks: 32,
      views: 850,
      likes: 65,
      tags: ["Missing Scene", "Tragedy"],
      color: "bg-rose-900",
      iconColor: "text-rose-400",
    },
  ];

  const mostForked = [
    { title: "Mr. Darcy's Letter Unsent", source: "Pride & Prejudice", forks: 124, author: "AustenEcho", trend: "+12" },
    { title: "Ophelia's River", source: "Hamlet", forks: 98, author: "DanishMist", trend: "+8" },
    { title: "The Monster's Bride", source: "Frankenstein", forks: 87, author: "GothicSoul", trend: "+5" },
    { title: "Heathcliff's Return", source: "Wuthering Heights", forks: 76, author: "MoorsWalker", trend: "+15" },
  ];

  const recentForks = [
    { title: "Jane Eyre at Thornfield", author: "BronteFan", time: "2 min ago", type: "fork" },
    { title: "Othello's Doubt", author: "VeniceStrider", time: "15 min ago", type: "fork" },
    { title: "The Pardoner's Tale", author: "CanterburyTrek", time: "32 min ago", type: "comment" },
    { title: "Gatsby's Morning After", author: "WestEgg", time: "1 hr ago", type: "fork" },
    { title: "Estella's Choice", author: "HavishamHeir", time: "2 hr ago", type: "like" },
  ];

  const communityVersions = [
    { title: "The Odyssey — Cyclops' POV", contributors: 23, status: "Active", progress: 78 },
    { title: "Romeo & Juliet — 2025 Setting", contributors: 41, status: "Active", progress: 45 },
    { title: "Moby Dick — Ahab's Confession", contributors: 15, status: "Completed", progress: 100 },
  ];

  const challenges = [
    { week: "Week 1", title: "Alternative Endings", participants: 124, daysLeft: 3, active: true },
    { week: "Week 2", title: "Counterfactual Writing", participants: 89, daysLeft: 10, active: false },
    { week: "Week 3", title: "Villain Revision", participants: 0, daysLeft: 17, active: false },
  ];

  const risingWriters = [
    { name: "InkAndIron", pieces: 12, followers: 340, badge: "Master Stylist" },
    { name: "GatsbyGhost", pieces: 9, followers: 256, badge: "Close Reader" },
    { name: "AustenEcho", pieces: 15, followers: 198, badge: "Peer Mentor" },
    { name: "MoorsWalker", pieces: 7, followers: 145, badge: "Brave Rewriter" },
  ];

  const activityFeed = [
    { icon: GitFork, text: "InkAndIron forked 'The Creature's Soliloquy'", time: "2 min ago", color: "text-emerald-400" },
    { icon: Heart, text: "GatsbyGhost liked 'Ophelia's River'", time: "5 min ago", color: "text-rose-400" },
    { icon: MessageCircle, text: "AustenEcho commented on 'Banquo's Warning'", time: "12 min ago", color: "text-sky-400" },
    { icon: Star, text: "MacbethsDagger earned the 'Master Storyteller' badge", time: "20 min ago", color: "text-amber-400" },
    { icon: PenTool, text: "New submission: 'Miss Havisham's Diary' by GothicSoul", time: "45 min ago", color: "text-violet-400" },
    { icon: Trophy, text: "Week 1 challenge winner announced: InkAndIron", time: "1 hr ago", color: "text-yellow-400" },
  ];

  return (
    <div className="min-h-screen bg-[#0f1a14] text-white">
      {/* Hero Banner */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />
        </div>
        <div className="container px-4 mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#25997f]/20 border border-[#25997f]/30 mb-6">
              <Sparkles className="w-4 h-4 text-[#25997f]" />
              <span className="text-sm font-medium text-[#25997f]">Community Hub</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-serif font-bold mb-4">
              Explore the <span className="text-[#d4a574]">Living Archive</span>
            </h1>
            <p className="text-lg text-[#a8b5aa] mb-8 leading-relaxed">
              Discover trending rewrites, fork your favourite stories, and connect with fellow literary creators.
            </p>
            <div className="flex gap-4 justify-center">
              <Button
                className="bg-[#25997f] hover:bg-[#1e8570] text-white rounded-full px-6"
                onClick={() => setLocation("/challenges")}
              >
                <Flame className="w-4 h-4 mr-2" />
                Join Challenge
              </Button>
              <Button
                variant="outline"
                className="border-[#3a4d40] text-[#a8b5aa] hover:bg-[#1a2a20] rounded-full px-6"
                onClick={() => setLocation("/draft")}
              >
                <PenTool className="w-4 h-4 mr-2" />
                Start Writing
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trending Stories */}
      <section className="py-12">
        <div className="container px-4 mx-auto">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-[#d4a574]" />
              <h2 className="text-xl font-serif font-bold">Trending Stories</h2>
            </div>
            <button className="text-sm text-[#a8b5aa] hover:text-[#25997f] flex items-center gap-1 transition-colors">
              See All <ChevronRight className="w-3 h-3" />
            </button>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            {trending.map((story, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Card className="bg-[#1a2a20] border-[#2a3a30] hover:border-[#3a4d40] transition-colors group cursor-pointer">
                  <CardContent className="p-5">
                    <div className="flex items-start gap-3 mb-3">
                      <div className={`w-10 h-10 rounded-lg ${story.color} flex items-center justify-center shrink-0`}>
                        <BookOpen className={`w-5 h-5 ${story.iconColor}`} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-sm text-white group-hover:text-[#d4a574] transition-colors">
                          {story.title}
                        </h3>
                        <p className="text-xs text-[#6b7b6e]">{story.source}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 mb-3">
                      {story.tags.map((tag) => (
                        <Badge key={tag} variant="outline" className="text-xs border-[#3a4d40] text-[#8a9a8e]">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex items-center justify-between text-xs text-[#6b7b6e]">
                      <span className="flex items-center gap-1"><Users className="w-3 h-3" />{story.author}</span>
                      <div className="flex gap-3">
                        <span className="flex items-center gap-1"><GitFork className="w-3 h-3" />{story.forks}</span>
                        <span className="flex items-center gap-1"><Eye className="w-3 h-3" />{story.views}</span>
                        <span className="flex items-center gap-1"><Heart className="w-3 h-3" />{story.likes}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Most Forked + Recent Forks */}
      <section className="py-12">
        <div className="container px-4 mx-auto">
          <div className="grid lg:grid-cols-2 gap-6">
            {/* Most Forked */}
            <div>
              <div className="flex items-center gap-2 mb-5">
                <GitFork className="w-5 h-5 text-[#d4a574]" />
                <h2 className="text-xl font-serif font-bold">Most Forked Stories</h2>
              </div>
              <div className="space-y-3">
                {mostForked.map((story, i) => (
                  <Card key={i} className="bg-[#1a2a20] border-[#2a3a30] hover:border-[#3a4d40] transition-colors">
                    <CardContent className="p-4 flex items-center gap-4">
                      <div className="w-8 h-8 rounded-lg bg-[#2a3a30] flex items-center justify-center text-[#a8b5aa] font-bold text-sm">
                        {i + 1}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-medium text-sm text-white truncate">{story.title}</h3>
                        <p className="text-xs text-[#6b7b6e]">{story.source} • {story.author}</p>
                      </div>
                      <div className="text-right shrink-0">
                        <div className="flex items-center gap-1 text-sm text-[#25997f]">
                          <GitFork className="w-3.5 h-3.5" />
                          {story.forks}
                        </div>
                        <p className="text-xs text-[#6b7b6e]">{story.trend} this week</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Recent Forks */}
            <div>
              <div className="flex items-center gap-2 mb-5">
                <Clock className="w-5 h-5 text-[#d4a574]" />
                <h2 className="text-xl font-serif font-bold">Recent Forks</h2>
              </div>
              <div className="space-y-3">
                {recentForks.map((item, i) => (
                  <div key={i} className="flex items-center gap-3 p-3 rounded-lg bg-[#1a2a20] border border-[#2a3a30]">
                    <div className="w-8 h-8 rounded-full bg-[#2a3a30] flex items-center justify-center shrink-0">
                      {item.type === "fork" && <GitFork className="w-4 h-4 text-[#25997f]" />}
                      {item.type === "comment" && <MessageCircle className="w-4 h-4 text-sky-400" />}
                      {item.type === "like" && <Heart className="w-4 h-4 text-rose-400" />}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm text-white truncate">{item.title}</p>
                      <p className="text-xs text-[#6b7b6e]">by {item.author}</p>
                    </div>
                    <span className="text-xs text-[#6b7b6e] shrink-0">{item.time}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Genres */}
      <section className="py-12">
        <div className="container px-4 mx-auto">
          <div className="flex items-center gap-2 mb-6">
            <Palette className="w-5 h-5 text-[#d4a574]" />
            <h2 className="text-xl font-serif font-bold">Browse by Genre</h2>
          </div>
          <div className="flex flex-wrap gap-3">
            {genres.map((genre) => (
              <button
                key={genre}
                onClick={() => setActiveGenre(genre)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeGenre === genre
                    ? "bg-[#25997f] text-white"
                    : "bg-[#1a2a20] text-[#a8b5aa] border border-[#2a3a30] hover:border-[#3a4d40]"
                }`}
              >
                {genre}
              </button>
            ))}
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
            {[
              { name: "Tragedy", count: 234, icon: "💀" },
              { name: "Romance", count: 189, icon: "💖" },
              { name: "Gothic", count: 156, icon: "🏰" },
              { name: "Satire", count: 98, icon: "💭" },
              { name: "Modernist", count: 87, icon: "🎨" },
              { name: "Epic", count: 76, icon: "⚔️" },
              { name: "Dystopian", count: 65, icon: "🌍" },
              { name: "Mythology", count: 54, icon: "🐉" },
            ].map((g) => (
              <Card key={g.name} className="bg-[#1a2a20] border-[#2a3a30] hover:border-[#3a4d40] transition-colors cursor-pointer">
                <CardContent className="p-4 text-center">
                  <div className="text-3xl mb-2">{g.icon}</div>
                  <h3 className="font-semibold text-sm text-white">{g.name}</h3>
                  <p className="text-xs text-[#6b7b6e]">{g.count} stories</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Community Versions */}
      <section className="py-12">
        <div className="container px-4 mx-auto">
          <div className="flex items-center gap-2 mb-6">
            <Globe className="w-5 h-5 text-[#d4a574]" />
            <h2 className="text-xl font-serif font-bold">Community Versions</h2>
          </div>
          <div className="space-y-4">
            {communityVersions.map((version, i) => (
              <Card key={i} className="bg-[#1a2a20] border-[#2a3a30]">
                <CardContent className="p-5">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-[#2a3a30] flex items-center justify-center">
                        <Users className="w-5 h-5 text-[#25997f]" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-sm text-white">{version.title}</h3>
                        <p className="text-xs text-[#6b7b6e]">{version.contributors} contributors</p>
                      </div>
                    </div>
                    <Badge className={`text-xs ${version.status === "Active" ? "bg-[#25997f]/20 text-[#25997f]" : "bg-[#d4a574]/20 text-[#d4a574]"}`}>
                      {version.status}
                    </Badge>
                  </div>
                  <div className="w-full bg-[#2a3a30] rounded-full h-2">
                    <div className="bg-[#25997f] h-2 rounded-full transition-all" style={{ width: `${version.progress}%` }} />
                  </div>
                  <p className="text-xs text-[#6b7b6e] mt-2">{version.progress}% complete</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Writing Challenges */}
      <section className="py-12">
        <div className="container px-4 mx-auto">
          <div className="flex items-center gap-2 mb-6">
            <Trophy className="w-5 h-5 text-[#d4a574]" />
            <h2 className="text-xl font-serif font-bold">Writing Challenges</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            {challenges.map((c, i) => (
              <Card key={i} className={`${c.active ? "bg-[#1a2a20] border-[#25997f]/50" : "bg-[#1a2a20] border-[#2a3a30]"} transition-colors`}>
                <CardContent className="p-5">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs text-[#6b7b6e]">{c.week}</span>
                    {c.active && (
                      <div className="flex items-center gap-1 text-xs text-[#25997f]">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#25997f] animate-pulse" />
                        Active
                      </div>
                    )}
                  </div>
                  <h3 className="font-semibold text-sm text-white mb-2">{c.title}</h3>
                  <div className="flex items-center gap-4 text-xs text-[#6b7b6e]">
                    <span className="flex items-center gap-1"><Users className="w-3 h-3" />{c.participants}</span>
                    <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{c.daysLeft}d left</span>
                  </div>
                  <Button
                    className="w-full mt-3 bg-[#25997f] hover:bg-[#1e8570] text-white text-xs rounded-full"
                    size="sm"
                    disabled={!c.active}
                    onClick={() => setLocation("/challenges")}
                  >
                    {c.active ? "Participate" : "Starts Soon"}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Rising Writers */}
      <section className="py-12">
        <div className="container px-4 mx-auto">
          <div className="flex items-center gap-2 mb-6">
            <ArrowUpRight className="w-5 h-5 text-[#d4a574]" />
            <h2 className="text-xl font-serif font-bold">Rising Writers</h2>
          </div>
          <div className="grid md:grid-cols-4 gap-4">
            {risingWriters.map((writer, i) => (
              <Card key={i} className="bg-[#1a2a20] border-[#2a3a30] hover:border-[#3a4d40] transition-colors text-center">
                <CardContent className="p-5">
                  <div className="w-14 h-14 rounded-full bg-[#2a3a30] flex items-center justify-center mx-auto mb-3">
                    <span className="text-xl font-serif font-bold text-[#d4a574]">{(writer.name[0] || "W").toUpperCase()}</span>
                  </div>
                  <h3 className="font-semibold text-sm text-white">{writer.name}</h3>
                  <p className="text-xs text-[#6b7b6e] mb-3">{writer.badge}</p>
                  <div className="flex items-center justify-center gap-4 text-xs text-[#6b7b6e]">
                    <span className="flex items-center gap-1"><PenTool className="w-3 h-3" />{writer.pieces}</span>
                    <span className="flex items-center gap-1"><Users className="w-3 h-3" />{writer.followers}</span>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full mt-3 border-[#3a4d40] text-[#a8b5aa] hover:bg-[#2a3a30] text-xs rounded-full"
                  >
                    Follow
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Activity Feed */}
      <section className="py-12">
        <div className="container px-4 mx-auto">
          <div className="grid lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <div className="flex items-center gap-2 mb-6">
                <Activity className="w-5 h-5 text-[#d4a574]" />
                <h2 className="text-xl font-serif font-bold">Activity Feed</h2>
              </div>
              <Card className="bg-[#1a2a20] border-[#2a3a30]">
                <CardContent className="p-0">
                  <div className="divide-y divide-[#2a3a30]">
                    {activityFeed.map((activity, i) => (
                      <div key={i} className="flex items-center gap-3 p-4 hover:bg-[#1f2f25] transition-colors">
                        <div className="w-8 h-8 rounded-full bg-[#2a3a30] flex items-center justify-center shrink-0">
                          <activity.icon className={`w-4 h-4 ${activity.color}`} />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm text-[#a8b5aa]">{activity.text}</p>
                        </div>
                        <span className="text-xs text-[#6b7b6e] shrink-0">{activity.time}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar Stats */}
            <div>
              <div className="flex items-center gap-2 mb-6">
                <Zap className="w-5 h-5 text-[#d4a574]" />
                <h2 className="text-xl font-serif font-bold">Live Stats</h2>
              </div>
              <Card className="bg-[#1a2a20] border-[#2a3a30]">
                <CardContent className="p-5 space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-[#a8b5aa]">Active Writers</span>
                    <span className="font-bold text-white">42</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-[#a8b5aa]">Stories Today</span>
                    <span className="font-bold text-white">18</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-[#a8b5aa]">Total Forks</span>
                    <span className="font-bold text-white">1,247</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-[#a8b5aa]">Comments</span>
                    <span className="font-bold text-white">3,892</span>
                  </div>
                  <div className="pt-3 border-t border-[#2a3a30]">
                    <div className="flex items-center gap-2 text-xs text-[#6b7b6e]">
                      <div className="w-2 h-2 rounded-full bg-[#25997f] animate-pulse" />
                      Platform updated 2 min ago
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-[#2a3a30]">
        <div className="container px-4 mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <BookOpen className="w-5 h-5 text-[#25997f]" />
                <span className="font-serif font-bold text-white">PlotOri</span>
              </div>
              <p className="text-sm text-[#6b7b6e] leading-relaxed">
                Transforming readers into active literary creators. The intersection of literary scholarship and creative imagination.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-sm text-white mb-3">Explore</h4>
              <div className="space-y-2 text-sm text-[#6b7b6e]">
                <p className="hover:text-[#a8b5aa] cursor-pointer transition-colors">Trending</p>
                <p className="hover:text-[#a8b5aa] cursor-pointer transition-colors">Most Forked</p>
                <p className="hover:text-[#a8b5aa] cursor-pointer transition-colors">Genres</p>
                <p className="hover:text-[#a8b5aa] cursor-pointer transition-colors">Challenges</p>
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-sm text-white mb-3">Community</h4>
              <div className="space-y-2 text-sm text-[#6b7b6e]">
                <p className="hover:text-[#a8b5aa] cursor-pointer transition-colors">Rising Writers</p>
                <p className="hover:text-[#a8b5aa] cursor-pointer transition-colors">Versions</p>
                <p className="hover:text-[#a8b5aa] cursor-pointer transition-colors">Activity</p>
                <p className="hover:text-[#a8b5aa] cursor-pointer transition-colors">Guidelines</p>
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-sm text-white mb-3">Connect</h4>
              <div className="space-y-2 text-sm text-[#6b7b6e]">
                <p className="hover:text-[#a8b5aa] cursor-pointer transition-colors">About</p>
                <p className="hover:text-[#a8b5aa] cursor-pointer transition-colors">Contact</p>
                <p className="hover:text-[#a8b5aa] cursor-pointer transition-colors">Newsletter</p>
              </div>
            </div>
          </div>
          <div className="pt-6 border-t border-[#2a3a30] text-center text-xs text-[#6b7b6e]">
            © 2026 PlotOri Community. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Explore;