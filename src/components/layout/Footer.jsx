import { Link } from "wouter";
import { BookOpen } from "lucide-react";
function Footer() {
  return <footer className="border-t bg-[hsl(220,18%,12%)] text-slate-300">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2 font-serif text-xl font-bold text-[hsl(158,40%,55%)] mb-4">
              <BookOpen className="h-6 w-6" />
              <span>PlotOri</span>
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed">
              Transforming readers into active literary creators. The intersection of literary scholarship and creative imagination.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-4 text-white">Platform</h3>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><Link href="/features" className="hover:text-[hsl(38,85%,62%)] transition-colors">Features</Link></li>
              <li><Link href="/student-zone" className="hover:text-[hsl(38,85%,62%)] transition-colors">Student Zone</Link></li>
              <li><Link href="/community" className="hover:text-[hsl(38,85%,62%)] transition-colors">Community</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4 text-white">Philosophy</h3>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><Link href="/about" className="hover:text-[hsl(38,85%,62%)] transition-colors">About Us</Link></li>
              <li><Link href="/about" className="hover:text-[hsl(38,85%,62%)] transition-colors">Dialogism</Link></li>
              <li><Link href="/about" className="hover:text-[hsl(38,85%,62%)] transition-colors">Transtextuality</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4 text-white">Legal</h3>
            <ul className="space-y-2 text-sm text-slate-400">
              <li className="hover:text-[hsl(38,85%,62%)] transition-colors cursor-pointer">Privacy Policy</li>
              <li className="hover:text-[hsl(38,85%,62%)] transition-colors cursor-pointer">Terms of Service</li>
              <li className="hover:text-[hsl(38,85%,62%)] transition-colors cursor-pointer">Academic Guidelines</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 mt-12 pt-8 text-center text-sm text-slate-500">
          <p>&copy; {(/* @__PURE__ */ new Date()).getFullYear()} PlotOri. All rights reserved.</p>
        </div>
      </div>
    </footer>;
}
export {
  Footer
};
