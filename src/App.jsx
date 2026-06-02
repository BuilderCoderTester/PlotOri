import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import { Layout } from "@/components/layout/Layout";
import Home from "@/pages/Home";
import Features from "@/pages/Features";
import StudentZone from "@/pages/StudentZone";
import Community from "@/pages/Community";
import About from "@/pages/About";
import Draft from "@/pages/Draft";
import AuthPage from "@/pages/AuthPage";
import Bio from "@/pages/Bio";
import Challenges from "./pages/Challenges";
import StudentOnboarding from "./pages/StudentOnboarding";
import Explore from "./pages/Explore";
const queryClient = new QueryClient();
function Router() {
  return <Layout>
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/features" component={Features} />
      <Route path="/student-zone" component={StudentZone} />
      <Route path="/community" component={Community} />
      <Route path="/about" component={About} />
      <Route path="/draft" component={Draft} />
      <Route path="/auth" component={AuthPage} />
      <Route path="/bio" component={Bio} />
      <Route path="/challanges" component={Challenges} />
      <Route path="/student-onboarding" component={StudentOnboarding} />
      <Route path="/explore" component={Explore} />

      <Route component={NotFound} />
    </Switch>
  </Layout>;
}
function App() {
  return <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
        <Router />
      </WouterRouter>
      <Toaster />
    </TooltipProvider>
  </QueryClientProvider>;
}
var stdin_default = App;
export {
  stdin_default as default
};
