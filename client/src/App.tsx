import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { AppProviders } from "./providers/AppProviders";
import { MuiThemeProvider } from "./components/ui/mui-theme";
import LandingPage from "./components/LandingPage";
import AboutPage from "./pages/AboutPage";
import ProductsPage from "./pages/ProductsPage";
import ContactPage from "./pages/ContactPage";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={LandingPage} />
      <Route path="/about" component={AboutPage} />
      <Route path="/products" component={ProductsPage} />
      <Route path="/contact" component={ContactPage} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <AppProviders>
          <MuiThemeProvider>
            <Toaster />
            <Router />
          </MuiThemeProvider>
        </AppProviders>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
